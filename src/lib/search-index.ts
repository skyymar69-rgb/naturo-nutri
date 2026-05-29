/**
 * Index de recherche client-side — construit à la build.
 * Pas de Fuse.js ni de dépendance lourde : simple substring matching
 * + scoring par champ (titre > tags > excerpt).
 */

import { ALL_ARTICLES } from './articles';
import { ALL_ACTUALITES } from './actualites';
import { ALL_PLANTES } from './plantes';
import { ALL_JUS } from './jus';

export interface SearchEntry {
  type: 'article' | 'actualite' | 'plante' | 'jus';
  url: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  domain?: string;
}

export const SEARCH_INDEX: SearchEntry[] = [
  ...ALL_ARTICLES.map<SearchEntry>((a) => ({
    type: 'article',
    url: `/${a.domain}/${a.category}/${a.slug}`,
    title: a.title,
    excerpt: a.excerpt,
    category: a.category,
    tags: a.tags ?? [],
    domain: a.domain,
  })),
  ...ALL_ACTUALITES.map<SearchEntry>((a) => ({
    type: 'actualite',
    url: `/actualites/${a.slug}`,
    title: a.title,
    excerpt: a.excerpt,
    category: a.category,
    tags: a.tags ?? [],
  })),
  ...ALL_PLANTES.map<SearchEntry>((p) => ({
    type: 'plante',
    url: `/plantes/${p.category}/${p.slug}`,
    title: `${p.nom} (${p.nomLatin})`,
    excerpt: p.excerpt,
    category: p.category,
    tags: p.tags ?? [],
  })),
  ...ALL_JUS.map<SearchEntry>((j) => ({
    type: 'jus',
    url: `/jus/${j.category}/${j.slug}`,
    title: j.nom,
    excerpt: j.excerpt,
    category: j.category,
    tags: j.tags ?? [],
  })),
];

const norm = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export function searchIndex(query: string, max = 8): SearchEntry[] {
  const q = norm(query.trim());
  if (q.length < 2) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const scored = SEARCH_INDEX.map((entry) => {
    const title = norm(entry.title);
    const excerpt = norm(entry.excerpt);
    const tags = norm(entry.tags.join(' '));
    const cat = norm(entry.category);
    let score = 0;
    for (const t of terms) {
      if (title.includes(t)) score += 10;
      if (title.startsWith(t)) score += 6;
      if (tags.includes(t)) score += 4;
      if (cat.includes(t)) score += 2;
      if (excerpt.includes(t)) score += 1;
    }
    return { entry, score };
  });
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map((s) => s.entry);
}
