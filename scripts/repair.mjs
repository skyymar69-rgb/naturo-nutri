// Répare results.json : remplace les URLs vraiment cassées (broken.json) et
// comble les items encore vides (still-missing.json), via Commons (doux).
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const results = JSON.parse(readFileSync('scripts/results.json', 'utf8'));
const items = JSON.parse(readFileSync('scripts/items.json', 'utf8'));
const broken = existsSync('scripts/broken.json') ? JSON.parse(readFileSync('scripts/broken.json', 'utf8')) : [];
const stillSlugs = existsSync('scripts/still-missing.json') ? JSON.parse(readFileSync('scripts/still-missing.json', 'utf8')) : [];

const itemBySlug = new Map(items.map((i) => [i.slug, i]));
const used = new Set(results.map((r) => r.src));
const UA = { 'User-Agent': 'Nutriea/1.0 (contact@nutriea.fr) educational nutrition site' };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Requêtes de secours manuelles pour cas tenaces
const MANUAL = {
  'bain-derivatif': 'cold water foot bath',
  'regime-cetogene-epilepsie-pediatrique': 'ketogenic diet avocado eggs',
};

async function commons(query) {
  const u = new URL('https://commons.wikimedia.org/w/api.php');
  u.search = new URLSearchParams({
    action: 'query', format: 'json', generator: 'search', gsrsearch: query,
    gsrnamespace: '6', gsrlimit: '20', prop: 'imageinfo', iiprop: 'url|mime|size', iiurlwidth: '1200',
  }).toString();
  for (let a = 0; a < 4; a++) {
    try {
      const res = await fetch(u, { signal: AbortSignal.timeout(25000), headers: UA });
      if (res.status === 429) { await sleep(1000 * (a + 1)); continue; }
      const d = await res.json();
      return Object.values(d?.query?.pages || {})
        .map((p) => ({ title: p.title || '', idx: p.index ?? 0, ...(p.imageinfo?.[0] || {}) }))
        .filter((c) => c.thumburl && /^image\/(jpeg|png)$/.test(c.mime || '') && (c.thumbwidth || 0) >= 800 && !/logo|icon|map|chart|diagram|seal|flag|svg/i.test(c.title))
        .sort((x, y) => x.idx - y.idx);
    } catch { await sleep(600 * (a + 1)); }
  }
  return [];
}

async function verify(url) {
  for (let a = 0; a < 4; a++) {
    try {
      const res = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(20000), headers: UA });
      if (res.status === 429) { await sleep(1000 * (a + 1)); continue; }
      const ct = res.headers.get('content-type') || '';
      try { await res.body?.cancel(); } catch {}
      return res.ok && ct.startsWith('image/');
    } catch { await sleep(500); }
  }
  return false;
}

const CAT_EN = {
  jeunes:'glass of water', purges:'green detox drink', alimentation:'fresh vegetables', hydrotherapie:'spa water',
  aromatherapie:'essential oil bottles', 'respiration-sommeil':'peaceful bedroom', 'stress-emotions':'calm nature',
  vitamines:'vitamin supplements', mineraux:'mineral supplement', adaptogenes:'medicinal roots', objectifs:'supplement capsules',
};

function queryFor(slug) {
  if (MANUAL[slug]) return MANUAL[slug];
  const it = itemBySlug.get(slug);
  if (!it) return 'healthy food';
  if (it.latin) return `${it.latin} plant`;
  return CAT_EN[it.category] || 'healthy food';
}

async function findFor(slug) {
  const cands = await commons(queryFor(slug));
  for (const c of cands) {
    if (used.has(c.thumburl)) continue;
    if (await verify(c.thumburl)) return c.thumburl;
  }
  return null;
}

let fixed = 0, added = 0;
const brokenSlugs = new Set(broken.map((b) => b.slug));

// 1) Remplacer les cassées
for (const r of results) {
  if (!brokenSlugs.has(r.slug)) continue;
  const url = await findFor(r.slug);
  if (url) { used.delete(r.src); r.src = url; used.add(url); fixed++; }
  await sleep(150);
}

// 2) Combler les vides
for (const slug of stillSlugs) {
  if (results.find((r) => r.slug === slug)) continue;
  const url = await findFor(slug);
  if (url) {
    const it = itemBySlug.get(slug);
    results.push({ slug, src: url, alt: it ? it.subject.split(/[—:]/)[0].trim() : slug });
    used.add(url); added++;
  }
  await sleep(150);
}

writeFileSync('scripts/results.json', JSON.stringify(results, null, 2), 'utf8');
console.log(`Réparées: ${fixed} | ajoutées: ${added} | total: ${results.length}`);
