/**
 * Catégories de la section « Recettes de jus ».
 * Inspirées des classifications fonctionnelles de Norman W. Walker
 * (« Fresh Vegetable and Fruit Juices », 1936/1978).
 */

import type { JusCategory } from './types';

export interface JusCategoryMeta {
  slug: JusCategory;
  nom: string;
  icon: string;
  description: string;
  order: number;
}

export const JUS_CATEGORIES: JusCategoryMeta[] = [
  {
    slug: 'walker-fondamentaux',
    nom: 'Méthode Walker',
    icon: '📘',
    description: 'Les associations fondamentales documentées dans l\'œuvre de Norman W. Walker — racines de l\'extraction thérapeutique.',
    order: 1,
  },
  {
    slug: 'detox',
    nom: 'Drainage & dépuration',
    icon: '💧',
    description: 'Recettes traditionnellement utilisées pour soutenir le foie, les reins et les émonctoires.',
    order: 2,
  },
  {
    slug: 'energie',
    nom: 'Énergie & vitalité',
    icon: '⚡',
    description: 'Jus revitalisants riches en chlorophylle et nutriments biodisponibles pour soutenir la vitalité.',
    order: 3,
  },
  {
    slug: 'immunite',
    nom: 'Immunité saisonnière',
    icon: '🛡️',
    description: 'Recettes hivernales et de transition saisonnière pour soutenir les défenses naturelles.',
    order: 4,
  },
  {
    slug: 'digestion',
    nom: 'Digestion & confort intestinal',
    icon: '🌿',
    description: 'Jus traditionnellement utilisés pour apaiser l\'estomac et soutenir la flore intestinale.',
    order: 5,
  },
  {
    slug: 'peau-cheveux',
    nom: 'Peau & cheveux',
    icon: '✨',
    description: 'Recettes riches en silice, caroténoïdes et oligo-éléments pour la beauté de la peau et la santé capillaire.',
    order: 6,
  },
  {
    slug: 'minceur',
    nom: 'Hydratation & légèreté',
    icon: '🥒',
    description: 'Jus à faible densité calorique et drainants, à intégrer dans une démarche globale.',
    order: 7,
  },
  {
    slug: 'sport',
    nom: 'Sport & récupération',
    icon: '💪',
    description: 'Recettes traditionnellement utilisées avant ou après l\'effort, riches en glucides naturels et antioxydants.',
    order: 8,
  },
];

export function getJusCategory(slug: string): JusCategoryMeta | undefined {
  return JUS_CATEGORIES.find((c) => c.slug === slug);
}
