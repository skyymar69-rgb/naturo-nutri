import type { Article, DomainSlug } from '../types';
import { NATURO_JEUNES } from './naturopathie-jeunes';
import { NATURO_PURGES } from './naturopathie-purges';
import { NATURO_PLANTES } from './naturopathie-plantes';
import { NATURO_ALIMENTATION } from './naturopathie-alimentation';
import { NATURO_CURES_SAISONNIERES } from './naturopathie-cures-saisonnieres';
import { NATURO_HYDROTHERAPIE } from './naturopathie-hydrotherapie';
import { NATURO_AROMATHERAPIE } from './naturopathie-aromatherapie';
import { NATURO_RESPIRATION_SOMMEIL } from './naturopathie-respiration-sommeil';
import { NATURO_STRESS_EMOTIONS } from './naturopathie-stress-emotions';
import { NUTRI_VITAMINES } from './nutritherapie-vitamines';
import { NUTRI_MINERAUX } from './nutritherapie-mineraux';
import { NUTRI_ACIDES_GRAS } from './nutritherapie-acides-gras';
import { NUTRI_ACIDES_AMINES } from './nutritherapie-acides-amines';
import { NUTRI_ANTIOXYDANTS } from './nutritherapie-antioxydants';
import { NUTRI_PROBIOTIQUES } from './nutritherapie-probiotiques';
import { NUTRI_ADAPTOGENES } from './nutritherapie-adaptogenes';
import { NUTRI_OBJECTIFS } from './nutritherapie-objectifs';
import { NATURO_BATCH3_EMONCTOIRES } from './naturopathie-batch3-emonctoires';
import { NATURO_BATCH3_VITALITE } from './naturopathie-batch3-vitalite';
import { NUTRI_BATCH3_PATHOLOGIES } from './nutritherapie-batch3-pathologies';
import { NUTRI_BATCH3_CARENCES } from './nutritherapie-batch3-carences';
import { NATURO_BATCH3_TECHNIQUES } from './naturopathie-batch3-techniques';

export const ALL_ARTICLES: Article[] = [
  ...NATURO_JEUNES,
  ...NATURO_PURGES,
  ...NATURO_PLANTES,
  ...NATURO_ALIMENTATION,
  ...NATURO_CURES_SAISONNIERES,
  ...NATURO_HYDROTHERAPIE,
  ...NATURO_AROMATHERAPIE,
  ...NATURO_RESPIRATION_SOMMEIL,
  ...NATURO_STRESS_EMOTIONS,
  ...NUTRI_VITAMINES,
  ...NUTRI_MINERAUX,
  ...NUTRI_ACIDES_GRAS,
  ...NUTRI_ACIDES_AMINES,
  ...NUTRI_ANTIOXYDANTS,
  ...NUTRI_PROBIOTIQUES,
  ...NUTRI_ADAPTOGENES,
  ...NUTRI_OBJECTIFS,
  ...NATURO_BATCH3_EMONCTOIRES,
  ...NATURO_BATCH3_VITALITE,
  ...NUTRI_BATCH3_PATHOLOGIES,
  ...NUTRI_BATCH3_CARENCES,
  ...NATURO_BATCH3_TECHNIQUES,
];

export function getArticlesByDomain(domain: DomainSlug): Article[] {
  return ALL_ARTICLES.filter((a) => a.domain === domain);
}

export function getArticlesByCategory(domain: DomainSlug, category: string): Article[] {
  return ALL_ARTICLES.filter((a) => a.domain === domain && a.category === category);
}

export function getArticle(domain: DomainSlug, category: string, slug: string): Article | undefined {
  return ALL_ARTICLES.find((a) => a.domain === domain && a.category === category && a.slug === slug);
}

export function countByDomain(domain: DomainSlug): number {
  return getArticlesByDomain(domain).length;
}

export function countByCategory(domain: DomainSlug, category: string): number {
  return getArticlesByCategory(domain, category).length;
}
