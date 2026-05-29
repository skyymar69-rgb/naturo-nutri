/**
 * Catégories thématiques pour la section « Les plantes qui soignent ».
 * Organisation par fonction thérapeutique principale.
 */

export interface PlantesCategory {
  slug: string;
  nom: string;
  icon: string;
  description: string;
  order: number;
}

export const PLANTES_CATEGORIES: PlantesCategory[] = [
  {
    slug: 'sommeil',
    nom: 'Sommeil & nervosité',
    icon: '🌙',
    description: 'Plantes traditionnellement utilisées pour favoriser l\'endormissement, le sommeil profond et apaiser la nervosité.',
    order: 1,
  },
  {
    slug: 'stress-anxiete',
    nom: 'Stress & anxiété',
    icon: '🧘',
    description: 'Plantes adaptogènes et calmantes utilisées pour accompagner les états de stress chronique et d\'anxiété.',
    order: 2,
  },
  {
    slug: 'digestion',
    nom: 'Digestion & foie',
    icon: '🌿',
    description: 'Plantes carminatives, cholérétiques, hépato-protectrices et celles qui soutiennent la sphère digestive.',
    order: 3,
  },
  {
    slug: 'immunite-infections',
    nom: 'Immunité & infections',
    icon: '🛡️',
    description: 'Plantes immunostimulantes et anti-infectieuses pour la prévention saisonnière et l\'accompagnement.',
    order: 4,
  },
  {
    slug: 'circulation',
    nom: 'Circulation & cœur',
    icon: '❤️',
    description: 'Plantes phlébotoniques, vasculo-protectrices et celles qui soutiennent le système cardio-vasculaire.',
    order: 5,
  },
  {
    slug: 'respiration',
    nom: 'Respiration & ORL',
    icon: '🍃',
    description: 'Plantes expectorantes, antitussives et adoucissantes pour les voies respiratoires.',
    order: 6,
  },
  {
    slug: 'peau-articulations',
    nom: 'Peau & articulations',
    icon: '🌱',
    description: 'Plantes anti-inflammatoires, cicatrisantes et reminéralisantes pour la peau et les articulations.',
    order: 7,
  },
  {
    slug: 'feminin',
    nom: 'Sphère féminine',
    icon: '🌸',
    description: 'Plantes régulatrices du cycle, des troubles prémenstruels et des transitions hormonales.',
    order: 8,
  },
];

export function getPlanteCategory(slug: string): PlantesCategory | undefined {
  return PLANTES_CATEGORIES.find((c) => c.slug === slug);
}
