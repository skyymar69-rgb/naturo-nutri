export type TemperamentSlug = 'sanguin' | 'bilieux' | 'nerveux' | 'lymphatique';

export type Niveau = 'debutant' | 'intermediaire' | 'avance';

export type Saison = 'printemps' | 'ete' | 'automne' | 'hiver';

export type DomainSlug = 'naturopathie' | 'nutritherapie';

export interface Temperament {
  slug: TemperamentSlug;
  nom: string;
  humeur: string;
  element: 'air' | 'feu' | 'terre' | 'eau';
  emoji: string;
  couleurHex: string;
  description: string;
  morphologie: string;
  organes_cibles: string[];
  emotion_dominante: string;
  forces: string[];
  faiblesses: string[];
  alimentation: {
    principes: string[];
    favoris: string[];
    a_eviter: string[];
    note: string;
  };
  nutritherapie: {
    priorites: { nom: string; raison: string; forme?: string }[];
    a_eviter: string[];
    note: string;
  };
  jeunes: {
    type: string;
    duree: string;
    saison_ideale: Saison[];
    note: string;
  }[];
  purges: {
    nom: string;
    protocole: string;
    frequence: string;
  }[];
  plantes: { nom: string; usage: string }[];
}

export interface QuizOption {
  label: string;
  points: Record<TemperamentSlug, number>;
}

export interface QuizQuestion {
  id: number;
  category: 'morphologie' | 'energie' | 'digestion' | 'caractere' | 'sante' | 'reactions';
  question: string;
  options: QuizOption[];
}

export interface Section {
  heading: string;
  body: string;
}

export interface Article {
  slug: string;
  domain: DomainSlug;
  category: string;
  title: string;
  excerpt: string;
  readingTime: number;
  intro: string;
  sections: Section[];
  keyPoints?: string[];
  protocole?: string[];
  contre_indications?: string[];
  faq?: { question: string; answer: string }[];
  tags?: string[];
}

export interface Category {
  slug: string;
  domain: DomainSlug;
  nom: string;
  description: string;
  icon: string;
  order: number;
}

export interface Micronutriment {
  slug: string;
  nom: string;
  categorie: 'vitamine' | 'mineral' | 'acide_amine' | 'antioxydant' | 'acide_gras' | 'probiotique' | 'adaptogene' | 'autre';
  formes_recommandees: string[];
  formes_a_eviter?: string[];
  ajr_officiel?: string;
  dosage_optimal?: string;
  roles: string[];
  signes_carence: string[];
  sources_alimentaires: string[];
  interactions?: string[];
  contre_indications?: string[];
  temperaments_prioritaires: TemperamentSlug[];
  note?: string;
}
