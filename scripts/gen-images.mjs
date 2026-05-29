// Génère src/lib/article-images.ts à partir de scripts/results.json (workflow)
// + scripts/items.json (catégories). Node ESM.
import { readFileSync, writeFileSync } from 'node:fs';

const results = JSON.parse(readFileSync('scripts/results.json', 'utf8')); // [{slug,src,alt}]
const items = JSON.parse(readFileSync('scripts/items.json', 'utf8'));     // [{slug,section,category,subject,latin?}]

const bySlug = new Map();
for (const r of results) {
  if (r && r.src && !bySlug.has(r.slug)) {
    bySlug.set(r.slug, { src: r.src, alt: r.alt || '' });
  }
}

const itemBySlug = new Map(items.map((i) => [i.slug, i]));

// ARTICLE_PHOTOS — tous les slugs disposant d'une image vérifiée
const articleEntries = [];
for (const it of items) {
  const r = bySlug.get(it.slug);
  if (!r) continue;
  const alt = r.alt || it.subject || '';
  articleEntries.push([it.slug, r.src, alt]);
}

// CATEGORY_PHOTOS — 1re image trouvée par catégorie (fallback de listing)
const catPhoto = new Map();
for (const it of items) {
  const r = bySlug.get(it.slug);
  if (r && !catPhoto.has(it.category)) catPhoto.set(it.category, { src: r.src, alt: `${it.category} — ${r.alt}` });
}

const generic = articleEntries.length ? articleEntries[0][1] : 'https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg';

const S = (v) => JSON.stringify(v);

let out = `/**
 * Mapping slug/category → photo libre de droits (Wikimedia Commons).
 *
 * Source : Wikimedia Commons — fichiers sous licences libres / domaine public.
 * Chaque URL a été obtenue via l'API Commons puis VÉRIFIÉE (HTTP 200, image/*)
 * par le workflow scripts/fetch-images.workflow.js. Aucune URL devinée.
 *
 * Régénérer : node scripts/gen-images.mjs (après le workflow).
 * Priorité : ARTICLE_PHOTOS[slug] → CATEGORY_PHOTOS[category] → générique.
 */

import { CATEGORIES } from './categories';

interface PhotoMeta {
  src: string;
  alt: string;
}

export const CATEGORY_PHOTOS: Record<string, PhotoMeta> = {
`;
for (const [cat, p] of catPhoto) {
  out += `  ${S(cat)}: { src: ${S(p.src)}, alt: ${S(p.alt)} },\n`;
}
out += `};

export const ARTICLE_PHOTOS: Record<string, PhotoMeta> = {
`;
for (const [slug, src, alt] of articleEntries) {
  out += `  ${S(slug)}: { src: ${S(src)}, alt: ${S(alt)} },\n`;
}
out += `};

const GENERIC_FALLBACK = ${S(generic)};

/**
 * Récupère la photo d'un article. Priorité : slug → catégorie → générique.
 */
export function getArticleImage(slug: string, category: string): PhotoMeta {
  if (ARTICLE_PHOTOS[slug]) return ARTICLE_PHOTOS[slug];
  if (CATEGORY_PHOTOS[category]) return CATEGORY_PHOTOS[category];
  const cat = CATEGORIES.find((c) => c.slug === category);
  return {
    src: GENERIC_FALLBACK,
    alt: cat ? \`\${cat.nom} — alimentation et bien-être\` : 'Naturopathie et nutrithérapie',
  };
}

/** URL d'image Open Graph pour partage social. */
export function getArticleOgImage(slug: string, category: string): string {
  const params = new URLSearchParams({ cat: category, slug });
  return \`/api/og?\${params.toString()}\`;
}
`;

writeFileSync('src/lib/article-images.ts', out, 'utf8');
console.log(`article-images.ts généré : ${articleEntries.length} articles, ${catPhoto.size} catégories.`);
const total = items.length;
const missing = items.filter((i) => !bySlug.has(i.slug)).map((i) => i.slug);
console.log(`Couverture : ${articleEntries.length}/${total}. Manquants (${missing.length}):`, missing.slice(0, 40).join(', '));
