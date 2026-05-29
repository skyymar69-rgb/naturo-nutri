import type { Plante } from '../types';
import { PLANTES_SOMMEIL } from './sommeil';
import { PLANTES_STRESS_ANXIETE } from './stress-anxiete';
import { PLANTES_DIGESTION } from './digestion';
import { PLANTES_IMMUNITE } from './immunite-infections';
import { PLANTES_CIRCULATION } from './circulation';
import { PLANTES_RESPIRATION } from './respiration';
import { PLANTES_PEAU_ARTICULATIONS } from './peau-articulations';
import { PLANTES_FEMININ } from './feminin';

export const ALL_PLANTES: Plante[] = [
  ...PLANTES_SOMMEIL,
  ...PLANTES_STRESS_ANXIETE,
  ...PLANTES_DIGESTION,
  ...PLANTES_IMMUNITE,
  ...PLANTES_CIRCULATION,
  ...PLANTES_RESPIRATION,
  ...PLANTES_PEAU_ARTICULATIONS,
  ...PLANTES_FEMININ,
];

export function getPlante(slug: string): Plante | undefined {
  return ALL_PLANTES.find((p) => p.slug === slug);
}

export function getPlantesByCategory(category: string): Plante[] {
  return ALL_PLANTES.filter((p) => p.category === category);
}

export function countPlantesByCategory(category: string): number {
  return getPlantesByCategory(category).length;
}
