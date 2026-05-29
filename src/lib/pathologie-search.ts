/**
 * Agrégateur de contenu par pathologie.
 *
 * Pour une pathologie donnée, on collecte les articles/plantes/jus/actualités
 * dont le titre, l'excerpt ou les tags contiennent l'un des mots-clés.
 *
 * Tri par pertinence (titre > tags > excerpt) et par type
 * (actualités sourcées d'abord, plantes, articles).
 */

import { ALL_ARTICLES } from './articles';
import { ALL_ACTUALITES } from './actualites';
import { ALL_PLANTES } from './plantes';
import { ALL_JUS } from './jus';
import type { Pathologie } from './pathologies';

export type ResultType = 'actualite' | 'plante' | 'article-naturopathie' | 'article-nutritherapie' | 'jus';

export interface PathologieResult {
  type: ResultType;
  url: string;
  title: string;
  excerpt: string;
  score: number;
  evidenceLevel?: string;
  badge?: 'Walker' | 'PubMed';
}

const norm = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

function score(haystack: { title: string; excerpt: string; tags: string[] }, keywords: string[]): number {
  const t = norm(haystack.title);
  const e = norm(haystack.excerpt);
  const tg = norm(haystack.tags.join(' '));
  let s = 0;
  for (const kw of keywords) {
    const k = norm(kw);
    if (t.includes(k)) s += 10;
    if (tg.includes(k)) s += 4;
    if (e.includes(k)) s += 1;
  }
  return s;
}

export function aggregateByPathologie(p: Pathologie, max = 30): PathologieResult[] {
  const results: PathologieResult[] = [];

  // Actualités (PubMed sourcées)
  for (const a of ALL_ACTUALITES) {
    const sc = score({ title: a.title, excerpt: a.excerpt, tags: a.tags ?? [] }, p.keywords);
    if (sc > 0) {
      results.push({
        type: 'actualite',
        url: `/actualites/${a.slug}`,
        title: a.title,
        excerpt: a.excerpt,
        score: sc + 3, // priorité actualités sourcées
        badge: 'PubMed',
      });
    }
  }

  // Plantes
  for (const pl of ALL_PLANTES) {
    const sc = score({
      title: `${pl.nom} ${pl.nomLatin}`,
      excerpt: pl.excerpt,
      tags: pl.tags ?? [],
    }, p.keywords);
    if (sc > 0) {
      results.push({
        type: 'plante',
        url: `/plantes/${pl.category}/${pl.slug}`,
        title: `${pl.nom} — ${pl.nomLatin}`,
        excerpt: pl.excerpt,
        score: sc + 1,
        evidenceLevel: pl.evidence_level,
      });
    }
  }

  // Articles naturopathie + nutritherapie
  for (const ar of ALL_ARTICLES) {
    const sc = score({ title: ar.title, excerpt: ar.excerpt, tags: ar.tags ?? [] }, p.keywords);
    if (sc > 0) {
      results.push({
        type: ar.domain === 'naturopathie' ? 'article-naturopathie' : 'article-nutritherapie',
        url: `/${ar.domain}/${ar.category}/${ar.slug}`,
        title: ar.title,
        excerpt: ar.excerpt,
        score: sc,
        evidenceLevel: ar.evidence_level,
      });
    }
  }

  // Jus
  for (const j of ALL_JUS) {
    const sc = score({ title: j.nom, excerpt: j.excerpt, tags: j.tags ?? [] }, p.keywords);
    if (sc > 0) {
      results.push({
        type: 'jus',
        url: `/jus/${j.category}/${j.slug}`,
        title: j.nom,
        excerpt: j.excerpt,
        score: sc,
        badge: j.walkerReference ? 'Walker' : undefined,
      });
    }
  }

  return results.sort((a, b) => b.score - a.score).slice(0, max);
}

export interface PathologieSummary {
  slug: string;
  nom: string;
  totalResults: number;
}

/** Pour la page index : compte les résultats par pathologie */
export function countAllPathologies(pathologies: Pathologie[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const p of pathologies) {
    counts[p.slug] = aggregateByPathologie(p, 999).length;
  }
  return counts;
}
