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

/* ─────────────────────────────────────────
   ACTUALITÉS / Blog scientifique sourcé
───────────────────────────────────────── */

export type SourceType =
  | 'pubmed'        // article PubMed avec PMID
  | 'review'        // revue systématique
  | 'meta-analysis' // méta-analyse
  | 'rct'           // essai contrôlé randomisé
  | 'cohort'        // étude de cohorte
  | 'guideline'     // recommandations officielles (EFSA, ANSES, OMS)
  | 'book'          // NCBI Bookshelf / ouvrage de référence
  | 'web';          // article web vérifié

export interface Source {
  id: string;             // identifiant unique dans l'article (s1, s2…)
  type: SourceType;
  title: string;          // titre exact tel que renvoyé par NCBI
  authors?: string;       // premier auteur ou liste
  journal?: string;
  year?: number;
  pmid?: string;          // PubMed ID si applicable
  doi?: string;
  url: string;            // lien direct (PubMed, DOI, EFSA…)
  excerpt?: string;       // citation textuelle si extraite
}

export type ActualiteCategory =
  | 'vitamines'
  | 'mineraux'
  | 'adaptogenes-plantes'
  | 'microbiote-nutrition';

export interface ActualiteSection {
  heading: string;
  /** Le corps peut référencer des sources : "Le mécanisme [#s1] suggère que…" — le renderer transforme #sX en superscript cliquable. */
  body: string;
}

export interface Actualite {
  slug: string;
  category: ActualiteCategory;
  title: string;
  excerpt: string;
  intro: string;
  sections: ActualiteSection[];
  takeaway: string;       // « À retenir » prudent
  sources: Source[];
  publishedAt: string;    // ISO date
  updatedAt?: string;
  readingTime: number;    // minutes
  tags?: string[];
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
