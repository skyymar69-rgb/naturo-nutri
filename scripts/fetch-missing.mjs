// Récupère des photos Wikimedia Commons pour les items manquants, de façon
// déterministe, pertinente (par règles) et UNIQUE, avec vérification 200.
import { readFileSync, writeFileSync } from 'node:fs';

const missing = JSON.parse(readFileSync('scripts/missing.json', 'utf8'));
const existing = JSON.parse(readFileSync('scripts/results.json', 'utf8'));
const used = new Set(existing.map((r) => r.src));

const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const ING = {
  pomme:'apple', citron:'lemon', gingembre:'ginger', betterave:'beetroot', orange:'orange',
  carotte:'carrot', epinard:'spinach', epinards:'spinach', celeri:'celery', concombre:'cucumber',
  ananas:'pineapple', menthe:'mint', curcuma:'turmeric', pamplemousse:'grapefruit', tomate:'tomato',
  chou:'cabbage', persil:'parsley', fenouil:'fennel', poire:'pear', raisin:'grape', fraise:'strawberry',
  myrtille:'blueberry', grenade:'pomegranate', kiwi:'kiwi', mangue:'mango', pasteque:'watermelon',
  cranberry:'cranberry', poivron:'bell pepper', radis:'radish', basilic:'basil', cannelle:'cinnamon',
  avocat:'avocado', banane:'banana', framboise:'raspberry', courgette:'zucchini', poivre:'pepper',
};

// Requêtes ciblées par mot-clef de slug (nutriments, plantes, adaptogènes…)
const KW = [
  [/retinol|vitamine-a/, 'fresh carrots'], [/thiamine|vitamine-b1/, 'whole grain bread'],
  [/vitamine-b2|riboflav/, 'eggs and milk'], [/niacine|vitamine-b3/, 'chicken meat protein'],
  [/vitamine-b5|pantothen/, 'avocado halves'], [/vitamine-b6/, 'bananas bunch'],
  [/folate|vitamine-b9/, 'fresh spinach leaves'], [/vitamine-b12|cobalamin/, 'salmon fillet'],
  [/vitamine-c|ascorb/, 'oranges citrus fruit'], [/vitamine-d/, 'vitamin d supplement capsules'],
  [/tocopherol|vitamine-e/, 'almonds nuts'], [/vitamine-k2|menaquinone/, 'cheese wheel'],
  [/magnesium/, 'magnesium supplement'], [/\bzinc\b/, 'pumpkin seeds'], [/\bfer\b|iron|bisglycinate/, 'lentils legumes'],
  [/calcium/, 'milk and cheese'], [/iode|iodine|thyroid/, 'dried seaweed'], [/selenium/, 'brazil nuts'],
  [/chrome|chromium/, 'broccoli'], [/cuivre|copper/, 'oysters seafood'], [/manganese/, 'pecans nuts'],
  [/potassium/, 'bananas and avocado'], [/molybden/, 'black beans'], [/lithium/, 'mineral water bottle'],
  [/\bbore\b|boron/, 'raisins'], [/omega-3|epa|dha/, 'salmon fillet'], [/perilla/, 'perilla leaves'],
  [/lin\b|graines-de-lin|flax/, 'flax seeds'], [/coco|mct/, 'coconut oil'], [/olive|huiles-cuisson/, 'olive oil bottle'],
  [/ghee/, 'ghee clarified butter'], [/tryptophan/, 'roast turkey'], [/tyrosin/, 'cheese protein'],
  [/glutamin/, 'bone broth'], [/taurin/, 'energy drink'], [/glycin/, 'gelatin collagen'],
  [/arginin|citrullin/, 'watermelon slices'], [/carnitin/, 'red meat steak'], [/glutathion/, 'broccoli asparagus'],
  [/coenzyme-q10|coq10/, 'sardines fish'], [/resveratrol/, 'red grapes'], [/astaxanthin/, 'wild salmon'],
  [/alpha-lipoique|lipoic/, 'spinach'], [/quercetin/, 'red onions'], [/polyphenol/, 'mixed berries'],
  [/ashwagandha/, 'ashwagandha root'], [/rhodiol/, 'rhodiola rosea flower'], [/schisandra/, 'schisandra berries'],
  [/cordyceps|maitake|reishi|ganoderma/, 'medicinal mushrooms'], [/ginseng/, 'ginseng root'],
  [/ginkgo/, 'ginkgo biloba leaves'], [/curcuma|turmeric/, 'turmeric powder'], [/maca/, 'maca root powder'],
  [/astragale|astragalus/, 'dried astragalus root'], [/bacopa/, 'bacopa monnieri plant'],
  [/griffonia|5-htp/, 'griffonia seeds'], [/safran|crocus/, 'saffron threads'], [/millepertuis|hypericum/, 'st johns wort flower'],
  [/probiotique|microbiote|intestin|candidos|permeabilit/, 'yogurt with spoon'], [/prebiotique|fibre/, 'artichokes vegetables'],
  [/cetogene|ketogen/, 'avocado eggs keto'], [/nmn|nad/, 'laboratory supplement'],
  [/jeune|fasting/, 'glass of water'], [/buchinger/, 'clear vegetable broth'], [/monodiete-raisin/, 'black grapes'],
  [/monodiete-pomme/, 'red apples'], [/monodiete-riz/, 'bowl of rice'], [/monodiete-carotte/, 'carrots bunch'],
  [/monodiete-pasteque/, 'watermelon slices'], [/ricin|castor/, 'castor oil'], [/lavement|colon|hydrotherapie-colon/, 'clear water glass'],
  [/radis-noir|radis/, 'black radish'], [/citron|drainage-hepatique/, 'fresh lemons'], [/brossage|peau-sec/, 'natural bristle brush'],
  [/bentonite|psyllium|argile/, 'green clay powder'], [/bain-derivatif|exposition-froid|immersion/, 'cold water bath'],
  [/sauna/, 'wooden sauna interior'], [/douche|kneipp|ecossaise/, 'shower water'], [/coherence-cardiaque|respiration/, 'woman breathing calm'],
  [/sommeil|insomnie|melatonin/, 'dark bedroom sleeping'], [/meditation|pleine-conscience/, 'meditation outdoors'],
  [/yoga/, 'yoga pose nature'], [/stress|burnout|burn-out|cortisol/, 'relaxing nature calm'], [/foret|shinrin/, 'forest sunlight trees'],
  [/fleurs-de-bach/, 'wildflowers meadow'], [/gratitude|ecriture/, 'journal and pen'],
  [/lavande/, 'lavender field'], [/eucalyptus/, 'eucalyptus leaves'], [/tea-tree|arbre-a-the|melaleuca/, 'tea tree leaves'],
  [/ravintsara|niaouli/, 'tropical green leaves'], [/helichryse/, 'helichrysum yellow flowers'], [/huiles-essentielles|aromatherapie|synergie|olfacto|diffusion/, 'essential oil bottles'],
  [/germ|graines-germees/, 'sprouted seeds jar'], [/ferment|choucroute|lacto/, 'fermented vegetables jar'],
  [/mastication/, 'person eating meal'], [/hydratation|eau/, 'pouring glass of water'], [/cacao|chocolat/, 'dark chocolate'],
  [/mediterran|mind-diet/, 'mediterranean food bowl'], [/luminotherapie/, 'bright light lamp'],
];

const CAT_EN = {
  jeunes:'glass of water', purges:'green detox drink', plantes:'medicinal herbs', alimentation:'fresh vegetables plate',
  'cures-saisonnieres':'seasonal vegetables', hydrotherapie:'spa water', aromatherapie:'essential oil bottles',
  'respiration-sommeil':'peaceful bedroom', 'stress-emotions':'calm nature meditation', vitamines:'vitamin supplements',
  mineraux:'mineral supplement', 'acides-gras':'salmon omega 3', 'acides-amines':'eggs protein',
  antioxydants:'fresh berries', probiotiques:'yogurt', adaptogenes:'medicinal roots', objectifs:'dietary supplement capsules',
  sommeil:'chamomile tea', 'stress-anxiete':'calm nature', digestion:'ginger tea', 'immunite-infections':'citrus ginger',
  circulation:'red berries heart', respiration:'eucalyptus', 'peau-articulations':'turmeric skin', feminin:'pink flowers tea',
  'walker-fondamentaux':'fresh vegetable juice', detox:'green juice', energie:'orange juice', immunite:'citrus juice',
  'peau-cheveux':'carrot juice', minceur:'green smoothie', sport:'beetroot juice',
  'adaptogenes-plantes':'medicinal plant', 'microbiote-nutrition':'gut healthy food',
};

function buildQuery(it) {
  const slug = it.slug;
  if (it.section === 'plante' && it.latin) return `${it.latin} plant`;
  if (it.section === 'jus') {
    const head = it.subject.split(/[—\-(]/)[0];
    const parts = head.split('+').map((p) => norm(p).trim()).map((p) => ING[p] || ING[p.replace(/s$/, '')] || '').filter(Boolean);
    if (parts.length) return `${parts.join(' ')} juice glass`;
    return CAT_EN[it.category] || 'fresh juice glass';
  }
  const key = norm(slug);
  for (const [re, q] of KW) if (re.test(key)) return q;
  const subj = norm(it.subject);
  for (const [re, q] of KW) if (re.test(subj)) return q;
  return CAT_EN[it.category] || 'healthy food';
}

const BAD = /logo|icon|\bmap\b|chart|diagram|\bseal\b|coat[_ ]of[_ ]arms|\bflag\b|graph|plot|barcode|qr[_ ]code|screenshot|poster|stamp/i;

const UA = { 'User-Agent': 'Nutriea/1.0 (contact@nutriea.fr) educational nutrition site' };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function commons(query, limit = 18) {
  const u = new URL('https://commons.wikimedia.org/w/api.php');
  u.search = new URLSearchParams({
    action: 'query', format: 'json', generator: 'search',
    gsrsearch: query, gsrnamespace: '6', gsrlimit: String(limit),
    prop: 'imageinfo', iiprop: 'url|mime|size', iiurlwidth: '1200',
  }).toString();
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(u, { signal: AbortSignal.timeout(25000), headers: UA });
      if (res.status === 429) { await sleep(800 * (attempt + 1)); continue; }
      const d = await res.json();
      const pages = Object.values(d?.query?.pages || {});
      return pages
        .map((p) => ({ title: p.title || '', idx: p.index ?? 0, ...(p.imageinfo?.[0] || {}) }))
        .filter((c) => c.thumburl && /^image\/(jpeg|png)$/.test(c.mime || '') && (c.thumbwidth || c.width || 0) >= 800 && !BAD.test(c.title))
        .sort((a, b) => a.idx - b.idx);
    } catch { await sleep(500 * (attempt + 1)); }
  }
  return [];
}

function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; }

const out = [];
let idx = 0;
const CONC = 4;

function pick(cands, slug) {
  if (!cands.length) return null;
  const start = hash(slug) % cands.length;
  const ordered = [...cands.slice(start), ...cands.slice(0, start)];
  return ordered.find((c) => !used.has(c.thumburl)) || ordered[0] || null;
}

async function worker() {
  while (idx < missing.length) {
    const it = missing[idx++];
    const q = buildQuery(it);
    let chosen = pick(await commons(q), it.slug);
    if (!chosen) {
      const cq = CAT_EN[it.category] || 'healthy food';
      if (cq !== q) chosen = pick(await commons(cq), it.slug);
    }
    if (chosen) {
      used.add(chosen.thumburl);
      out.push({ slug: it.slug, src: chosen.thumburl, alt: it.subject.split(/[—:]/)[0].trim() });
    } else {
      out.push({ slug: it.slug, src: '', alt: it.subject });
    }
    if (out.length % 25 === 0) console.log(`  ...${out.length}/${missing.length}`);
    await sleep(120);
  }
}

await Promise.all(Array.from({ length: CONC }, worker));

const merged = [...existing, ...out.filter((r) => r.src)];
writeFileSync('scripts/results.json', JSON.stringify(merged, null, 2), 'utf8');
const still = out.filter((r) => !r.src).map((r) => r.slug);
writeFileSync('scripts/still-missing.json', JSON.stringify(still, null, 2), 'utf8');
console.log(`Manquants traités: ${out.length} | trouvés: ${out.filter((r)=>r.src).length} | total results: ${merged.length} | encore vides: ${still.length}`);
if (still.length) console.log('Vides:', still.slice(0, 40).join(', '));
