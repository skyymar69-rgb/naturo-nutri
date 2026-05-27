import type { Methode } from './types';

export const METHODES: Methode[] = [
  {
    slug: 'jeune-hydrique',
    nom: 'Jeûne hydrique',
    source: 'grosjean',
    resume:
      "Abstinence totale de nourriture, seule l'eau (et parfois les tisanes douces) est autorisée. Pilier de la cure naturopathique : permet le repos digestif total et active l'autolyse cellulaire.",
    duree: '1 à 21 jours',
    niveau: 'intermediaire',
    saisons: ['printemps', 'ete', 'automne'],
    temperaments_recommandes: ['sanguin', 'bilieux', 'lymphatique'],
    contre_indications: [
      'Grossesse et allaitement',
      'Diabète insulinodépendant',
      'Insuffisance rénale ou hépatique sévère',
      'Troubles du comportement alimentaire (anorexie, boulimie)',
      'Dénutrition, IMC < 18',
      'Pathologie cardiaque sévère non stabilisée',
      'Cancer en traitement actif',
      'Tempérament nerveux pur : jeûnes > 2 jours déconseillés',
    ],
    benefices: [
      'Autolyse cellulaire (autophagie démontrée scientifiquement)',
      'Repos digestif total et régénération muqueuses',
      'Détoxification systémique',
      'Régulation glycémique (sensibilité insuline)',
      'Régulation poids, perte masse grasse',
      'Clarté mentale, baisse anxiété',
      'Régénération immunitaire',
      'Décongestion vasculaire et lymphatique',
    ],
  },
  {
    slug: 'jeune-jus',
    nom: 'Jeûne aux jus',
    source: 'grosjean',
    resume:
      "Pendant la cure, seuls les jus de légumes (et parfois fruits) sont consommés, idéalement extraits à froid. Plus doux que le jeûne hydrique, avec un apport en micronutriments biodisponibles.",
    duree: '3 à 21 jours',
    niveau: 'debutant',
    saisons: ['printemps', 'ete', 'automne'],
    temperaments_recommandes: ['sanguin', 'bilieux', 'lymphatique'],
    contre_indications: [
      'Diabète insulinodépendant',
      'Grossesse',
      'Hypoglycémie sévère',
      'Reflux gastro-œsophagien sévère',
    ],
    benefices: [
      'Apport massif d\'enzymes vivantes',
      'Hydratation cellulaire profonde',
      'Détoxification douce',
      'Alcalinisation du terrain',
      'Drainage organes émonctoires',
    ],
  },
  {
    slug: 'monodietes',
    nom: 'Monodiètes',
    source: 'grosjean',
    resume:
      "Consommer un seul aliment pendant 1 à 7 jours. Cure entre l'alimentation normale et le jeûne, très accessible et puissante pour le repos digestif.",
    duree: '1 à 7 jours',
    niveau: 'debutant',
    saisons: ['printemps', 'ete', 'automne', 'hiver'],
    temperaments_recommandes: ['sanguin', 'bilieux', 'nerveux', 'lymphatique'],
    contre_indications: [
      'Diabète mal équilibré',
      'Hypoglycémie',
      'Pour le nerveux : préférer riz semi-complet aux fruits acides',
    ],
    benefices: [
      'Repos digestif partiel',
      'Détoxification douce',
      'Élimination des surcharges',
      'Régénération des muqueuses',
      'Initiation en douceur au jeûne',
    ],
  },
  {
    slug: 'purge-ricin',
    nom: 'Purge à l\'huile de ricin',
    source: 'grosjean',
    resume:
      "Cure intestinale traditionnelle remise au goût du jour par Irène Grosjean. Élimination puissante par voie basse, drainage hépatique profond. À pratiquer avec précaution et bonne préparation.",
    duree: '1 journée',
    niveau: 'avance',
    saisons: ['printemps', 'automne'],
    temperaments_recommandes: ['sanguin', 'bilieux', 'lymphatique'],
    contre_indications: [
      'GROSSESSE (déclencheur de contractions utérines)',
      'Obstruction intestinale, occlusion',
      'Maladies inflammatoires intestinales en poussée (Crohn, RCH)',
      'Appendicite, douleurs abdominales aiguës',
      'Déshydratation',
      'Enfants',
      'Tempérament nerveux fragile : dose réduite uniquement',
    ],
    benefices: [
      'Vidange intestinale complète',
      'Drainage hépato-biliaire',
      'Décongestion du tube digestif',
      'Soulagement constipation chronique',
      'Préparation à un jeûne ou monodiète',
    ],
  },
  {
    slug: 'alimentation-vivante',
    nom: 'Alimentation vivante',
    source: 'grosjean',
    resume:
      "Mode d'alimentation centré sur les aliments crus, vivants, riches en enzymes : fruits et légumes crus, graines germées, jus, lacto-fermentations, déshydratations < 42°C.",
    duree: 'Long terme — transition progressive',
    niveau: 'intermediaire',
    saisons: ['printemps', 'ete', 'automne', 'hiver'],
    temperaments_recommandes: ['sanguin', 'bilieux', 'lymphatique'],
    contre_indications: [
      'Tempérament nerveux pur : à pratiquer avec parcimonie (30-50% max)',
      'Pathologies digestives inflammatoires aiguës',
      'Hypothyroïdie non contrôlée (crucifères crus en excès)',
    ],
    benefices: [
      'Préservation des enzymes alimentaires',
      'Conservation des vitamines thermolabiles',
      'Densité nutritionnelle exceptionnelle',
      'Alcalinisation du terrain',
      'Énergie vitale supérieure',
    ],
  },
];

export function getMethode(slug: string): Methode | undefined {
  return METHODES.find((m) => m.slug === slug);
}
