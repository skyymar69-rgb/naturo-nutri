// Vérifie (doux, séquentiel) que chaque URL renvoie 200 + image/*.
// Back-off sur 429 (rate-limit) pour ne pas confondre throttling et 404.
// Écrit scripts/broken.json (vrais cassés uniquement). Node 18+.
import { readFileSync, writeFileSync } from 'node:fs';

const results = JSON.parse(readFileSync('scripts/results.json', 'utf8'));
const list = results.filter((r) => r && r.src && r.src.startsWith('http'));
const UA = { 'User-Agent': 'Nutriea/1.0 (contact@nutriea.fr) educational nutrition site' };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const broken = [];
let ok = 0;

async function check(r) {
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const res = await fetch(r.src, { redirect: 'follow', signal: AbortSignal.timeout(20000), headers: UA });
      if (res.status === 429) { await sleep(1000 * (attempt + 1)); continue; }
      const ct = res.headers.get('content-type') || '';
      try { await res.body?.cancel(); } catch {}
      if (res.ok && ct.startsWith('image/')) { ok++; return; }
      broken.push({ slug: r.slug, src: r.src, status: res.status, ct });
      return;
    } catch (e) {
      if (attempt === 4) broken.push({ slug: r.slug, src: r.src, status: 'ERR', ct: String(e).slice(0, 50) });
      else await sleep(700 * (attempt + 1));
    }
  }
}

for (let i = 0; i < list.length; i++) {
  await check(list[i]);
  await sleep(200);
  if ((i + 1) % 50 === 0) console.log(`  ...${i + 1}/${list.length} (ok ${ok}, cassées ${broken.length})`);
}

writeFileSync('scripts/broken.json', JSON.stringify(broken, null, 2), 'utf8');
console.log(`Vérifié ${list.length} | OK ${ok} | VRAIMENT CASSÉES ${broken.length}`);
if (broken.length) console.log('Cassées:', broken.map((b) => `${b.slug}(${b.status})`).join(', '));
