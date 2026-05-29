/**
 * Bibliographie de référence du site Nutriéa.
 *
 * Ces ouvrages sont les sources reconnues utilisées comme fondement
 * éditorial pour les sections naturopathie, nutrithérapie, plantes et jus.
 * Chaque article concerné peut les citer via le composant LivreCite.
 */

export interface LivreReference {
  slug: string;
  auteur: string;
  titre: string;
  /** Sous-titre original ou français. */
  sousTitre?: string;
  /** Année de première publication. */
  anneeOriginale: number;
  /** Édition française disponible, si applicable. */
  editionFr?: { editeur: string; annee: number };
  description: string;
  /** Domaines couverts par l'ouvrage. */
  domaines: ('jus' | 'plantes' | 'nutritherapie' | 'naturopathie' | 'detox')[];
  /** ISBN si vérifiable. */
  isbn?: string;
  /** Lien WorldCat ou éditeur (pour vérification, pas vente). */
  url?: string;
  /** Citation typique extraite et vérifiable. */
  citationCle?: string;
}

/* ──────────────────────────────────────────────────────────────
   NORMAN W. WALKER — la référence des jus thérapeutiques
────────────────────────────────────────────────────────────── */

export const LIVRE_WALKER_JUS: LivreReference = {
  slug: 'walker-fresh-vegetable-and-fruit-juices',
  auteur: 'Norman W. Walker',
  titre: 'Fresh Vegetable and Fruit Juices',
  sousTitre: "What's Missing in Your Body? (édition révisée 1978, parue initialement sous le titre Raw Vegetable Juices en 1936)",
  anneeOriginale: 1936,
  editionFr: { editeur: 'Macro Éditions / Le Lotus et l\'éléphant', annee: 2015 },
  description: "L'ouvrage fondateur de la juicethérapie moderne. Walker y classe les jus de légumes et de fruits par indication et expose ses formules pionnières — carotte+céleri, carotte+épinards, carotte+betterave+concombre (16/3/3), céleri pur, carotte+persil — qui restent la base du juicing thérapeutique aujourd'hui.",
  domaines: ['jus', 'detox'],
  citationCle: "Walker propose le pressage lent (cold-press) pour préserver les enzymes thermosensibles : « Les enzymes sont des éléments de vie, sensibles à la chaleur au-delà de 47 °C » (édition 1978).",
};

export const LIVRE_WALKER_BECOME_YOUNGER: LivreReference = {
  slug: 'walker-become-younger',
  auteur: 'Norman W. Walker',
  titre: 'Become Younger',
  sousTitre: "Rajeunir et rester jeune (édition française)",
  anneeOriginale: 1949,
  editionFr: { editeur: 'Macro Éditions', annee: 2014 },
  description: "Le manifeste hygiéniste de Walker, dans lequel il développe ses principes globaux : nettoyage du côlon, jus frais quotidiens, alimentation crue et vivante, et art de la vieillesse active. Référence pour comprendre la philosophie d'ensemble de l'auteur, au-delà des seuls jus.",
  domaines: ['naturopathie', 'detox'],
  citationCle: "Walker soutient que « la jeunesse cellulaire dépend d'abord de ce qui entre et de ce qui sort » — d'où l'importance qu'il accorde aux émonctoires et aux jus frais.",
};

export const LIVRE_WALKER_COLON_HEALTH: LivreReference = {
  slug: 'walker-colon-health',
  auteur: 'Norman W. Walker',
  titre: 'Colon Health: The Key to a Vibrant Life',
  sousTitre: "La santé du côlon (édition française)",
  anneeOriginale: 1979,
  editionFr: { editeur: 'Macro Éditions', annee: 2012 },
  description: "Walker y développe sa thèse sur le rôle central du côlon dans la santé globale. Ouvrage controversé sur certaines pratiques (irrigation colonique) mais influent dans l'histoire de la naturopathie occidentale.",
  domaines: ['naturopathie', 'detox'],
};

/* ──────────────────────────────────────────────────────────────
   NUTRITHÉRAPIE — Dr Jean-Paul Curtay
────────────────────────────────────────────────────────────── */

export const LIVRE_CURTAY_NUTRITHERAPIE: LivreReference = {
  slug: 'curtay-nutritherapie',
  auteur: 'Dr Jean-Paul Curtay',
  titre: 'Nutrithérapie',
  sousTitre: 'Bases scientifiques et pratique médicale',
  anneeOriginale: 2010,
  editionFr: { editeur: 'Testez Éditions', annee: 2018 },
  description: "Ouvrage de référence francophone en nutrithérapie. Jean-Paul Curtay, médecin nutrithérapeute pionnier en France, y fait la synthèse des connaissances physiologiques et cliniques sur les micronutriments, leurs interactions, leurs dosages thérapeutiques et leurs applications en pathologie courante.",
  domaines: ['nutritherapie'],
  citationCle: "Curtay y rappelle que « plus de 90 % de la population française ne couvre pas les apports recommandés en magnésium » — chiffre qui sous-tend une grande partie de l'approche nutrithérapeutique.",
};

/* ──────────────────────────────────────────────────────────────
   NUTRITHÉRAPIE CELLULAIRE — Dr Claude Lagarde
────────────────────────────────────────────────────────────── */

export const LIVRE_LAGARDE: LivreReference = {
  slug: 'lagarde-sante-cellules',
  auteur: 'Dr Claude Lagarde',
  titre: 'Votre santé se cache au cœur de vos cellules',
  anneeOriginale: 2003,
  editionFr: { editeur: 'Éditions Jouvence', annee: 2003 },
  description: "Dr Claude Lagarde, pharmacien et biologiste, expose dans cet ouvrage la nutrithérapie cellulaire active : approche centrée sur la nutrition de la cellule, ses besoins en cofacteurs enzymatiques et la prise en charge des dysfonctionnements métaboliques.",
  domaines: ['nutritherapie'],
};

/* ──────────────────────────────────────────────────────────────
   ARTICLE ENCYCLOPÉDIQUE — Nocart (Agenda Plus)
────────────────────────────────────────────────────────────── */

export const ARTICLE_NOCART: LivreReference = {
  slug: 'nocart-agenda-plus-2014',
  auteur: 'Charline Nocart',
  titre: "La nutrithérapie au secours de l'alimentation",
  sousTitre: 'Agenda Plus, juillet-août 2014, pp. 8-10',
  anneeOriginale: 2014,
  description: "Article de vulgarisation qui synthétise les bases historiques et physiologiques de la nutrithérapie : appauvrissement nutritionnel des aliments modernes (jusqu'à 95 % de perte de vitamine C dans les conserves, 80 % de B9 détruites par 2 minutes de cuisson), prévalence des subcarences (>90 % de carencés en magnésium, 80 % sous les apports recommandés en zinc).",
  domaines: ['nutritherapie'],
  citationCle: "« Plus d'abondance alimentaire mais plus de calories vides, plus d'obésité de corps qui, d'un point de vue nutritionnel, crient pourtant famine ! » (Nocart, 2014).",
};

/* Index complet */
export const ALL_LIVRES: LivreReference[] = [
  LIVRE_WALKER_JUS,
  LIVRE_WALKER_BECOME_YOUNGER,
  LIVRE_WALKER_COLON_HEALTH,
  LIVRE_CURTAY_NUTRITHERAPIE,
  LIVRE_LAGARDE,
  ARTICLE_NOCART,
];

export function getLivre(slug: string): LivreReference | undefined {
  return ALL_LIVRES.find((l) => l.slug === slug);
}

export function getLivresParDomaine(domaine: LivreReference['domaines'][number]): LivreReference[] {
  return ALL_LIVRES.filter((l) => l.domaines.includes(domaine));
}
