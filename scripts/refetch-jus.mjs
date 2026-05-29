// Re-source les photos des recettes de jus : requête sur les INGRÉDIENTS
// (produits frais), pertinence + unicité stricte (aucune réutilisation d'URL).
import { readFileSync, writeFileSync } from 'node:fs';

const results = JSON.parse(readFileSync('scripts/results.json', 'utf8'));
const items = JSON.parse(readFileSync('scripts/items.json', 'utf8'));
const UA = { 'User-Agent': 'Nutriea/1.0 (contact@nutriea.fr) educational nutrition site' };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ING = {
  pomme:'apple', citron:'lemon', gingembre:'ginger', betterave:'beetroot', orange:'orange',
  carotte:'carrot', epinard:'spinach', epinards:'spinach', celeri:'celery', concombre:'cucumber',
  ananas:'pineapple', menthe:'mint', curcuma:'turmeric root', pamplemousse:'grapefruit', tomate:'tomato',
  chou:'cabbage', persil:'parsley', fenouil:'fennel', poire:'pear', raisin:'grapes', fraise:'strawberry',
  myrtille:'blueberry', grenade:'pomegranate', kiwi:'kiwi', mangue:'mango', pasteque:'watermelon',
  cranberry:'cranberry', poivron:'bell pepper', radis:'radish', basilic:'basil', cannelle:'cinnamon',
  avocat:'avocado', banane:'banana', framboise:'raspberry', courgette:'zucchini', cresson:'watercress',
  laitue:'lettuce', alfalfa:'alfalfa sprouts', kale:'kale', papaye:'papaya', aloe:'aloe vera',
  acerola:'acerola', spiruline:'spirulina', cerise:'cherry', griotte:'cherry', ail:'garlic', miel:'honey',
  clou:'clove', girofle:'clove', sureau:'elderberry', ortie:'nettle', camu:'camu camu', poivre:'black pepper',
};
const STOP = new Set(['jus','de','pur','pure','le','la','les','du','des','branche','version','douce','selon','walker','formule','equilibre','nerveux','roi','sodium','organique','chlorophylle','intensive','max','ml','ratio','nourriture','intestins','pre','post','effort','seance','recuperation','endurance','minceur','sport','hiver','ete','printemps','automne','rentree','soir','matin','shot','booster','tonique','reveil','prevention','douceur','green','energy','detox','vert']);

const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z\s+]/g, ' ');

function ingredientsOf(subject) {
  const head = subject.split(/[—\-(:]/)[0];
  const toks = norm(head).split(/[+\s]+/).filter(Boolean);
  const found = [];
  for (const t of toks) {
    const en = ING[t] || ING[t.replace(/s$/, '')];
    if (en && !found.includes(en)) found.push(en);
  }
  return found;
}

async function commons(query, limit = 30) {
  const u = new URL('https://commons.wikimedia.org/w/api.php');
  u.search = new URLSearchParams({
    action: 'query', format: 'json', generator: 'search', gsrsearch: query,
    gsrnamespace: '6', gsrlimit: String(limit), prop: 'imageinfo', iiprop: 'url|mime|size', iiurlwidth: '1200',
  }).toString();
  for (let a = 0; a < 4; a++) {
    try {
      const res = await fetch(u, { signal: AbortSignal.timeout(25000), headers: UA });
      if (res.status === 429) { await sleep(900 * (a + 1)); continue; }
      const d = await res.json();
      return Object.values(d?.query?.pages || {})
        .map((p) => ({ title: p.title || '', idx: p.index ?? 0, ...(p.imageinfo?.[0] || {}) }))
        .filter((c) => c.thumburl && /^image\/(jpeg|png)$/.test(c.mime || '') && (c.thumbwidth || 0) >= 800
          && !/logo|icon|map|chart|diagram|seal|flag|svg|portrait|people|crowd|man |woman |histor|1900|192|193|black.and.white/i.test(c.title))
        .sort((x, y) => x.idx - y.idx);
    } catch { await sleep(500 * (a + 1)); }
  }
  return [];
}

function hash(s){let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;return h;}

const jus = items.filter((i) => i.section === 'jus');
const jusSlugs = new Set(jus.map((j) => j.slug));
// on garde toutes les URLs non-jus comme "déjà utilisées" (évite collisions globales)
const used = new Set(results.filter((r) => !jusSlugs.has(r.slug)).map((r) => r.src));
const newJus = [];

let n = 0;
for (const it of jus) {
  const ings = ingredientsOf(it.subject);
  const queries = [];
  if (ings.length >= 2) queries.push(`fresh ${ings.slice(0, 3).join(' ')}`);
  if (ings.length >= 1) queries.push(`fresh ${ings[0]}`);
  queries.push('fresh vegetable juice glass', 'colorful vegetables');
  let chosen = null;
  for (const q of queries) {
    const cands = await commons(q);
    const start = cands.length ? hash(it.slug) % cands.length : 0;
    const ordered = [...cands.slice(start), ...cands.slice(0, start)];
    chosen = ordered.find((c) => !used.has(c.thumburl));
    if (chosen) break;
    await sleep(120);
  }
  const alt = `${it.subject.split(/[—:(]/)[0].trim()} — jus frais`;
  if (chosen) { used.add(chosen.thumburl); newJus.push({ slug: it.slug, src: chosen.thumburl, alt }); }
  if (++n % 15 === 0) console.log(`  ...${n}/${jus.length}`);
  await sleep(120);
}

const merged = results.filter((r) => !jusSlugs.has(r.slug)).concat(newJus);
writeFileSync('scripts/results.json', JSON.stringify(merged, null, 2), 'utf8');
console.log(`Jus re-sourcés: ${newJus.length}/${jus.length} | total: ${merged.length}`);
