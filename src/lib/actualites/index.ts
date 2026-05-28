import type { Actualite, ActualiteCategory } from '../types';
import { ACTUALITES_VITAMINES } from './vitamines';
import { ACTUALITES_MINERAUX } from './mineraux';
import { ACTUALITES_ADAPTOGENES } from './adaptogenes-plantes';
import { ACTUALITES_MICROBIOTE } from './microbiote-nutrition';

export const ALL_ACTUALITES: Actualite[] = [
  ...ACTUALITES_VITAMINES,
  ...ACTUALITES_MINERAUX,
  ...ACTUALITES_ADAPTOGENES,
  ...ACTUALITES_MICROBIOTE,
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const ACTUALITE_CATEGORIES: { slug: ActualiteCategory; nom: string; icon: string; description: string }[] = [
  { slug: 'vitamines',            nom: 'Vitamines',                 icon: '☀️', description: 'Toxicité, biodisponibilité, formes, controverses.' },
  { slug: 'mineraux',             nom: 'Minéraux & oligo-éléments', icon: '💎', description: 'Formes chélatées, biodisponibilité, méta-analyses.' },
  { slug: 'adaptogenes-plantes',  nom: 'Adaptogènes & plantes',     icon: '🌿', description: 'Essais randomisés et méta-analyses récentes.' },
  { slug: 'microbiote-nutrition', nom: 'Microbiote & nutrition',    icon: '🦠', description: 'Axe intestin-cerveau, jeûne, oméga-3, polyphénols.' },
];

export function getActualite(slug: string): Actualite | undefined {
  return ALL_ACTUALITES.find((a) => a.slug === slug);
}

export function getActualitesByCategory(category: ActualiteCategory): Actualite[] {
  return ALL_ACTUALITES.filter((a) => a.category === category);
}

export function getActualiteCategoryMeta(slug: ActualiteCategory) {
  return ACTUALITE_CATEGORIES.find((c) => c.slug === slug);
}

export function countByActualiteCategory(category: ActualiteCategory): number {
  return getActualitesByCategory(category).length;
}
