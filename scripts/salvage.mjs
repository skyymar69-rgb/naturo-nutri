// Récupère les triplets {slug,src,alt} produits par les agents (StructuredOutput)
// depuis les transcripts jsonl, dédoublonne par slug, écrit scripts/results.json.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const DIR = process.argv[2];
const files = readdirSync(DIR).filter((f) => f.startsWith('agent-') && f.endsWith('.jsonl'));

const re = /"slug"\s*:\s*"([^"]+)"\s*,\s*"src"\s*:\s*"([^"]*)"\s*,\s*"alt"\s*:\s*"((?:[^"\\]|\\.)*)"/g;
const bySlug = new Map();

for (const f of files) {
  const txt = readFileSync(`${DIR}/${f}`, 'utf8');
  let m;
  while ((m = re.exec(txt)) !== null) {
    const slug = m[1];
    const src = m[2];
    const alt = m[3].replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    if (!src.startsWith('https://upload.wikimedia.org')) continue;
    if (!bySlug.has(slug)) bySlug.set(slug, { slug, src, alt });
  }
}

const results = [...bySlug.values()];
writeFileSync('scripts/results.json', JSON.stringify(results, null, 2), 'utf8');

const items = JSON.parse(readFileSync('scripts/items.json', 'utf8'));
const have = new Set(results.map((r) => r.slug));
const missing = items.filter((i) => !have.has(i.slug)).map((i) => i.slug);
writeFileSync('scripts/missing.json', JSON.stringify(items.filter((i) => !have.has(i.slug)), null, 2), 'utf8');
console.log(`Récupérés: ${results.length} | items: ${items.length} | manquants: ${missing.length}`);
