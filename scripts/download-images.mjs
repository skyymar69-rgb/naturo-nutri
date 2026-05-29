// Télécharge toutes les images dans public/img/<slug>.<ext> et réécrit
// scripts/results.json pour pointer vers les chemins LOCAUX.
// => aucune dépendance externe au runtime, zéro image cassée.
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';

const results = JSON.parse(readFileSync('scripts/results.json', 'utf8'));
mkdirSync('public/img', { recursive: true });
const UA = { 'User-Agent': 'Nutriea/1.0 (contact@nutriea.fr) educational nutrition site' };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function extOf(url) {
  const m = url.toLowerCase().match(/\.(jpe?g|png|webp)(?:$|\?)/);
  return m ? (m[1] === 'jpeg' ? 'jpg' : m[1]) : 'jpg';
}

let i = 0, ok = 0, fail = 0;
const CONC = 4;
const failed = [];

async function dl(r) {
  if (!r.src || !r.src.startsWith('http')) return;
  const ext = extOf(r.src);
  const rel = `/img/${r.slug}.${ext}`;
  const dest = `public/img/${r.slug}.${ext}`;
  if (existsSync(dest) && statSync(dest).size > 1000) { r.local = rel; ok++; return; }
  for (let a = 0; a < 5; a++) {
    try {
      const res = await fetch(r.src, { redirect: 'follow', signal: AbortSignal.timeout(30000), headers: UA });
      if (res.status === 429) { await sleep(1200 * (a + 1)); continue; }
      if (!res.ok) { if (a === 4) { failed.push(r.slug); fail++; } else await sleep(500 * (a + 1)); continue; }
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1000) { if (a === 4) { failed.push(r.slug); fail++; } continue; }
      await writeFile(dest, buf);
      r.local = rel; ok++; return;
    } catch (e) { if (a === 4) { failed.push(r.slug); fail++; } else await sleep(600 * (a + 1)); }
  }
}

async function worker() {
  while (i < results.length) {
    const r = results[i++];
    await dl(r);
    if ((ok + fail) % 40 === 0) console.log(`  ...${ok + fail}/${results.length} (ok ${ok}, fail ${fail})`);
    await sleep(80);
  }
}

await Promise.all(Array.from({ length: CONC }, worker));

// réécrit src -> chemin local (garde l'original dans srcRemote pour trace)
for (const r of results) {
  if (r.local) { r.srcRemote = r.src; r.src = r.local; delete r.local; }
}
writeFileSync('scripts/results.json', JSON.stringify(results, null, 2), 'utf8');
writeFileSync('scripts/dl-failed.json', JSON.stringify(failed, null, 2), 'utf8');
console.log(`Téléchargées: ${ok} | échecs: ${fail}`);
if (failed.length) console.log('Échecs:', failed.slice(0, 30).join(', '));
