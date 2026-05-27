export type TemperamentSlug = 'sanguin' | 'bilieux' | 'nerveux' | 'lymphatique';

export type Source = 'grosjean' | 'curtay' | 'les_deux' | 'tradition';

export type Niveau = 'debutant' | 'intermediaire' | 'avance';

export type Saison = 'printemps' | 'ete' | 'automne' | 'hiver';

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
    notes_grosjean: string;
  };
  nutritherapie: {
    priorites: { nom: string; raison: string; forme?: string }[];
    a_eviter: string[];
    notes_curtay: string;
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

export interface Methode {
  slug: string;
  nom: string;
  source: Source;
  resume: string;
  duree: string;
  niveau: Niveau;
  saisons: Saison[];
  temperaments_recommandes: TemperamentSlug[];
  contre_indications: string[];
  benefices: string[];
}

export interface Micronutriment {
  slug: string;
  nom: string;
  categorie: 'vitamine' | 'mineral' | 'acide_amine' | 'antioxydant' | 'acide_gras' | 'autre';
  formes_recommandees: string[];
  formes_a_eviter?: string[];
  ajr_officiel?: string;
  dosage_curtay?: string;
  roles: string[];
  signes_carence: string[];
  sources_alimentaires: string[];
  interactions?: string[];
  contre_indications?: string[];
  temperaments_prioritaires: TemperamentSlug[];
  note_curtay?: string;
}

export interface RegleCurtay {
  numero: number;
  titre: string;
  description: string;
  exemple?: string;
}
