import type { RecetteJus, JusCategory } from '../types';
import { JUS_WALKER } from './walker-fondamentaux';
import { JUS_DETOX } from './detox';
import { JUS_ENERGIE } from './energie';
import { JUS_IMMUNITE } from './immunite';
import { JUS_DIGESTION } from './digestion';
import { JUS_PEAU_CHEVEUX } from './peau-cheveux';
import { JUS_MINCEUR } from './minceur';
import { JUS_SPORT } from './sport';
import { JUS_BATCH2_SAISON_WALKER } from './batch2-saison-walker';

export const ALL_JUS: RecetteJus[] = [
  ...JUS_WALKER,
  ...JUS_DETOX,
  ...JUS_ENERGIE,
  ...JUS_IMMUNITE,
  ...JUS_DIGESTION,
  ...JUS_PEAU_CHEVEUX,
  ...JUS_MINCEUR,
  ...JUS_SPORT,
  ...JUS_BATCH2_SAISON_WALKER,
];

export function getJus(slug: string): RecetteJus | undefined {
  return ALL_JUS.find((j) => j.slug === slug);
}

export function getJusByCategory(category: JusCategory): RecetteJus[] {
  return ALL_JUS.filter((j) => j.category === category);
}

export function countJusByCategory(category: JusCategory): number {
  return getJusByCategory(category).length;
}
