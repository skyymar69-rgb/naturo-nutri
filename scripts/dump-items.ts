/**
 * Dump de tous les items nécessitant une photo (slug + sujet + nom latin + section).
 * Sortie : scripts/items.json — consommé par le workflow de récupération d'images.
 */
import { writeFileSync } from 'node:fs';
import { ALL_ARTICLES } from '@/lib/articles';
import { ALL_ACTUALITES } from '@/lib/actualites';
import { ALL_PLANTES } from '@/lib/plantes';
import { ALL_JUS } from '@/lib/jus';

interface Item {
  slug: string;
  section: 'article' | 'actualite' | 'plante' | 'jus';
  category: string;
  subject: string;   // intitulé FR
  latin?: string;    // nom latin (plantes)
}

const items: Item[] = [];

for (const a of ALL_ARTICLES) {
  items.push({ slug: a.slug, section: 'article', category: a.category, subject: a.title });
}
for (const a of ALL_ACTUALITES) {
  items.push({ slug: a.slug, section: 'actualite', category: a.category, subject: a.title });
}
for (const p of ALL_PLANTES) {
  items.push({ slug: p.slug, section: 'plante', category: p.category, subject: p.nom, latin: p.nomLatin });
}
for (const j of ALL_JUS) {
  items.push({ slug: j.slug, section: 'jus', category: j.category, subject: j.nom });
}

// Dédoublonnage par slug (le 1er gagne) — getArticleImage est indexé par slug
const seen = new Set<string>();
const unique = items.filter((i) => (seen.has(i.slug) ? false : (seen.add(i.slug), true)));

writeFileSync('scripts/items.json', JSON.stringify(unique, null, 2), 'utf8');
console.log(`TOTAL items: ${items.length} | uniques par slug: ${unique.length}`);
const bySection = unique.reduce<Record<string, number>>((acc, i) => ((acc[i.section] = (acc[i.section] ?? 0) + 1), acc), {});
console.log('Par section:', JSON.stringify(bySection));
