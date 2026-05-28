/**
 * Métadonnées d'image pour les articles.
 *
 * Note : depuis la refonte visuelle, les pages article utilisent le composant
 * <ArticleHero> (illustration SVG thématique 100% fiable) plutôt que des photos
 * Unsplash dont les IDs n'étaient pas vérifiables (causait : photo de riz pour
 * un article vitamines, ballon hors-sujet, etc.).
 *
 * Cette fonction reste utilisée par les métadonnées Open Graph et le texte
 * alternatif d'accessibilité.
 */

import { CATEGORIES } from './categories';

interface ImageMeta {
  alt: string;
}

/* Texte alternatif spécialisé par slug (descriptif, pas de photo réelle) */
const ARTICLE_ALT: Record<string, string> = {
  // Jeûnes
  'jeune-hydrique': 'Jeûne hydrique — repos digestif à l\'eau pure',
  'jeune-intermittent': 'Jeûne intermittent — chronobiologie du repas',
  'jeune-aux-jus': 'Jeûne aux jus de légumes frais pressés',
  'jeune-sec': 'Jeûne sec — abstention totale d\'eau et d\'aliments',
  'methode-buchinger': 'Méthode Buchinger — jeûne thérapeutique encadré',
  'preparation-jeune': 'Préparation au jeûne — descente alimentaire',
  'sortie-jeune': 'Sortie de jeûne — réintroduction progressive',
  'crises-guerison': 'Crises de guérison pendant le jeûne',
  'monodiete-raisin': 'Monodiète de raisin — cure d\'automne',
  'monodiete-pomme': 'Monodiète de pomme — détoxification douce',
  'monodiete-riz': 'Monodiète de riz complet — apaisement digestif',
  'monodiete-pasteque': 'Monodiète de pastèque — drainage estival',
  'monodiete-carotte': 'Monodiète de carotte — reminéralisation',
  'jeune-court-vs-long': 'Comparaison jeûnes courts et jeûnes longs',
  // Vitamines
  'vitamine-a': 'Vitamine A — rétinol et caroténoïdes',
  'vitamine-b1': 'Vitamine B1 thiamine — métabolisme énergétique',
  'vitamine-b2': 'Vitamine B2 riboflavine',
  'vitamine-b3': 'Vitamine B3 niacine — métabolisme cellulaire',
  'vitamine-b5': 'Vitamine B5 acide pantothénique',
  'vitamine-b6': 'Vitamine B6 pyridoxine — neurotransmetteurs',
  'vitamine-b9': 'Vitamine B9 folates — ADN et grossesse',
  'vitamine-b12': 'Vitamine B12 cobalamine — sang et nerfs',
  'vitamine-c': 'Vitamine C acide ascorbique — immunité et collagène',
  'vitamine-d': 'Vitamine D — soleil et minéralisation osseuse',
  'vitamine-e': 'Vitamine E tocophérols — protection antioxydante',
  'vitamine-k2': 'Vitamine K2 ménaquinone — calcium et os',
  // Minéraux
  magnesium: 'Magnésium — relaxation musculaire et nerveuse',
  zinc: 'Zinc — immunité, peau et hormones',
  fer: 'Fer — transport de l\'oxygène',
  calcium: 'Calcium — os et signalisation cellulaire',
  iode: 'Iode — fonction thyroïdienne',
  selenium: 'Sélénium — antioxydant et thyroïde',
  chrome: 'Chrome — sensibilité à l\'insuline',
  cuivre: 'Cuivre — synthèse du collagène et antioxydation',
  silicium: 'Silicium organique — tissus conjonctifs',
  manganese: 'Manganèse — cofacteur enzymatique',
  potassium: 'Potassium — équilibre hydro-électrolytique',
  molybdene: 'Molybdène — détoxification hépatique',
  'lithium-oligo': 'Lithium oligoélément — équilibre nerveux',
  bore: 'Bore — métabolisme du calcium',
};

/**
 * Retourne le texte alternatif d'image pour un article.
 * Priorité : slug spécifique → nom de catégorie → fallback générique.
 */
export function getArticleImage(slug: string, category: string): ImageMeta {
  if (ARTICLE_ALT[slug]) return { alt: ARTICLE_ALT[slug] };
  const cat = CATEGORIES.find((c) => c.slug === category);
  return { alt: cat ? `${cat.nom} — illustration thématique` : 'Naturopathie et nutrithérapie' };
}

/**
 * URL d'image Open Graph pour partage social.
 * Renvoie l'image dynamique générée par /api/og?cat=...&slug=...
 */
export function getArticleOgImage(slug: string, category: string): string {
  const params = new URLSearchParams({ cat: category, slug });
  return `/api/og?${params.toString()}`;
}
