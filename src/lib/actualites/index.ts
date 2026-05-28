import type { Actualite, ActualiteCategory } from '../types';
import { ACTUALITES_VITAMINES } from './vitamines';
import { ACTUALITES_VITAMINES_2 } from './vitamines-2';
import { ACTUALITES_MINERAUX } from './mineraux';
import { ACTUALITES_MINERAUX_2 } from './mineraux-2';
import { ACTUALITES_ADAPTOGENES } from './adaptogenes-plantes';
import { ACTUALITES_ADAPTOGENES_2 } from './adaptogenes-plantes-2';
import { ACTUALITES_MICROBIOTE } from './microbiote-nutrition';
import { ACTUALITES_MICROBIOTE_2 } from './microbiote-nutrition-2';

export const ALL_ACTUALITES: Actualite[] = [
  ...ACTUALITES_VITAMINES,
  ...ACTUALITES_VITAMINES_2,
  ...ACTUALITES_MINERAUX,
  ...ACTUALITES_MINERAUX_2,
  ...ACTUALITES_ADAPTOGENES,
  ...ACTUALITES_ADAPTOGENES_2,
  ...ACTUALITES_MICROBIOTE,
  ...ACTUALITES_MICROBIOTE_2,
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
