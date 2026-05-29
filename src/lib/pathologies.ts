/**
 * Mapping pathologies / situations → mots-clés de recherche.
 *
 * Ce mapping nourrit l'outil « Trouver l'info par pathologie ».
 * Chaque pathologie liste :
 * - keywords : mots normalisés à matcher dans le contenu agrégé
 *   (titre, excerpt, tags) des 4 sections + actualités
 * - categories : catégories autorisées si on veut restreindre
 *
 * Pas de prescription : c'est un outil d'orientation éditoriale,
 * pas un diagnostic. Le disclaimer juridique est appliqué côté UI.
 */

export type PathologieGroupe =
  | 'sommeil-stress'
  | 'digestion'
  | 'immunite'
  | 'circulation-coeur'
  | 'respiration-orl'
  | 'peau-articulations'
  | 'femme'
  | 'energie'
  | 'cognition'
  | 'metabolisme'
  | 'detox';

export interface Pathologie {
  slug: string;
  nom: string;
  groupe: PathologieGroupe;
  description: string;
  /** Termes (sans accent, lowercase) recherchés dans titre/excerpt/tags. */
  keywords: string[];
}

export const PATHOLOGIES: Pathologie[] = [
  // SOMMEIL & STRESS
  { slug: 'insomnie',        nom: "Insomnie", groupe: 'sommeil-stress',
    description: "Difficultés d'endormissement, réveils nocturnes, sommeil non réparateur.",
    keywords: ['insomnie', 'sommeil', 'endormissement', 'melatonine', 'reveil', 'valeriane', 'passiflore', 'tilleul', 'tryptophane'] },
  { slug: 'anxiete',         nom: "Anxiété", groupe: 'sommeil-stress',
    description: "Anxiété de fond, ruminations, sensation d'oppression.",
    keywords: ['anxiete', 'anxieux', 'ruminations', 'panique', 'gaba', 'silexan', 'lavande', 'magnesium', 'eschscholtzia', 'pavot californie'] },
  { slug: 'stress-chronique', nom: "Stress chronique", groupe: 'sommeil-stress',
    description: "Stress prolongé, hypervigilance, fatigue surrénalienne fonctionnelle.",
    keywords: ['stress', 'cortisol', 'surrenales', 'ashwagandha', 'rhodiole', 'adaptogene', 'coherence cardiaque', 'meditation', 'mbsr'] },
  { slug: 'burn-out',         nom: "Burn-out", groupe: 'sommeil-stress',
    description: "Épuisement professionnel, perte d'élan, démotivation.",
    keywords: ['burn-out', 'burnout', 'epuisement', 'fatigue chronique', 'surrenales', 'adaptogene', 'ashwagandha'] },
  { slug: 'depression-legere', nom: "Humeur basse / dépression légère", groupe: 'sommeil-stress',
    description: "Tristesse persistante, perte de plaisir, sans gravité psychiatrique.",
    keywords: ['depression', 'humeur', 'millepertuis', 'safran', 'tryptophane', '5-htp', 'griffonia', 'omega-3'] },

  // DIGESTION
  { slug: 'sii',              nom: "Syndrome de l'intestin irritable (SII)", groupe: 'digestion',
    description: "Ballonnements, douleurs abdominales, transit irrégulier.",
    keywords: ['sii', 'intestin irritable', 'colon irritable', 'menthe poivree', 'fodmap', 'glutamine', 'probiotiques', 'spasmes'] },
  { slug: 'reflux',           nom: "Reflux gastro-œsophagien", groupe: 'digestion',
    description: "Brûlures, remontées acides, inconfort post-prandial.",
    keywords: ['reflux', 'rgo', 'brulures', 'gastrique', 'mauve', 'plantain', 'chou cru'] },
  { slug: 'constipation',     nom: "Constipation", groupe: 'digestion',
    description: "Transit lent, ballonnements, sensation d'évacuation incomplète.",
    keywords: ['constipation', 'transit', 'fibres', 'prebiotiques', 'fenouil', 'mauve', 'huile de ricin', 'magnesium'] },
  { slug: 'ballonnements',    nom: "Ballonnements & flatulences", groupe: 'digestion',
    description: "Gaz, distension abdominale, inconfort après les repas.",
    keywords: ['ballonnements', 'flatulences', 'gaz', 'fenouil', 'anis', 'menthe poivree', 'cumin', 'carminatif'] },
  { slug: 'foie-paresseux',   nom: "Foie & vésicule paresseux", groupe: 'detox',
    description: "Digestion lente après repas riches, lourdeurs hépatiques.",
    keywords: ['foie', 'vesicule', 'artichaut', 'chardon-marie', 'desmodium', 'romarin', 'radis noir', 'cholerique'] },

  // IMMUNITÉ & RESPIRATION
  { slug: 'rhumes-recurrents', nom: "Rhumes & infections ORL récurrentes", groupe: 'immunite',
    description: "Petits coups de froid à répétition, sensibilité hivernale.",
    keywords: ['rhume', 'orl', 'sinusite', 'echinacee', 'sureau', 'thym', 'propolis', 'vitamine d', 'zinc', 'immunite'] },
  { slug: 'angine',            nom: "Angines & maux de gorge", groupe: 'respiration-orl',
    description: "Pharyngites, gorges enflammées.",
    keywords: ['angine', 'gorge', 'pharyngite', 'thym', 'propolis', 'sauge'] },
  { slug: 'bronchite',         nom: "Bronchites & toux grasses", groupe: 'respiration-orl',
    description: "Toux productive, encombrement bronchique.",
    keywords: ['bronchite', 'toux', 'eucalyptus', 'lierre', 'pin', 'thym', 'expectorant', 'mucolytique'] },
  { slug: 'toux-seche',         nom: "Toux sèches d'irritation", groupe: 'respiration-orl',
    description: "Toux non productive, laryngite, irritation des muqueuses.",
    keywords: ['toux seche', 'irritation', 'plantain', 'mauve', 'mucilage', 'erysimum'] },
  { slug: 'grippe',             nom: "États grippaux", groupe: 'immunite',
    description: "Fièvre, courbatures, asthénie de courte durée.",
    keywords: ['grippe', 'fievre', 'sureau', 'ravintsara', 'echinacee', 'vitamine d'] },

  // CIRCULATION & CŒUR
  { slug: 'jambes-lourdes',     nom: "Jambes lourdes", groupe: 'circulation-coeur',
    description: "Sensation de lourdeur, gonflements en fin de journée, varices.",
    keywords: ['jambes lourdes', 'veineux', 'vigne rouge', 'marronnier', 'hamamelis', 'cypres', 'melilot', 'fragon'] },
  { slug: 'hypertension',       nom: "Hypertension artérielle légère", groupe: 'circulation-coeur',
    description: "Tension élevée modérée, en accompagnement médical.",
    keywords: ['hypertension', 'tension', 'olivier', 'aubepine', 'potassium', 'magnesium', 'omega-3'] },
  { slug: 'palpitations',       nom: "Palpitations fonctionnelles", groupe: 'circulation-coeur',
    description: "Sensations de cœur emballé sans cause cardiaque.",
    keywords: ['palpitations', 'coeur', 'aubepine', 'magnesium', 'coherence cardiaque'] },

  // PEAU & ARTICULATIONS
  { slug: 'acne',                nom: "Acné", groupe: 'peau-articulations',
    description: "Boutons, peau grasse, imperfections cutanées.",
    keywords: ['acne', 'peau', 'zinc', 'tea tree', 'bardane', 'pensee sauvage'] },
  { slug: 'eczema',              nom: "Eczéma & dermatite atopique", groupe: 'peau-articulations',
    description: "Plaques sèches, démangeaisons, peau réactive.",
    keywords: ['eczema', 'atopique', 'omega-3', 'probiotiques', 'plantain', 'calendula', 'bardane'] },
  { slug: 'arthrose',            nom: "Arthrose & douleurs articulaires", groupe: 'peau-articulations',
    description: "Douleurs articulaires liées à l'usure cartilagineuse.",
    keywords: ['arthrose', 'articulations', 'curcuma', 'harpagophytum', 'omega-3', 'collagene', 'glucosamine'] },
  { slug: 'tendinite',           nom: "Tendinites & douleurs musculo-squelettiques", groupe: 'peau-articulations',
    description: "Inflammation tendineuse, courbatures, contractures.",
    keywords: ['tendinite', 'muscles', 'harpagophytum', 'curcuma', 'magnesium'] },

  // FEMME
  { slug: 'spm',                 nom: "Syndrome prémenstruel (SPM)", groupe: 'femme',
    description: "Irritabilité, ballonnements, tension mammaire avant les règles.",
    keywords: ['spm', 'premenstruel', 'gattilier', 'achillee', 'magnesium', 'vitamine b6'] },
  { slug: 'regles-douloureuses', nom: "Règles douloureuses (dysménorrhée)", groupe: 'femme',
    description: "Douleurs menstruelles, crampes utérines.",
    keywords: ['regles', 'dysmenorrhée', 'achillee', 'sauge', 'magnesium', 'omega-3'] },
  { slug: 'menopause',           nom: "Ménopause", groupe: 'femme',
    description: "Bouffées de chaleur, troubles du sommeil, sécheresse.",
    keywords: ['menopause', 'bouffees', 'sauge', 'gattilier', 'phyto-oestrogenes', 'actée', 'omega-3'] },
  { slug: 'fertilite',           nom: "Fertilité (femme & homme)", groupe: 'femme',
    description: "Soutien préconceptionnel, qualité ovocytaire et spermatique.",
    keywords: ['fertilite', 'sperm', 'ovocyte', 'zinc', 'folates', 'coq10', 'ashwagandha'] },

  // ÉNERGIE / FATIGUE
  { slug: 'fatigue-chronique',   nom: "Fatigue chronique", groupe: 'energie',
    description: "Asthénie persistante, manque d'énergie, récupération difficile.",
    keywords: ['fatigue', 'asthenie', 'rhodiole', 'ashwagandha', 'magnesium', 'coq10', 'b12', 'fer'] },
  { slug: 'recuperation-sport',  nom: "Récupération sportive", groupe: 'energie',
    description: "Récupération musculaire et nerveuse après l'effort.",
    keywords: ['sport', 'recuperation', 'cerises', 'omega-3', 'curcuma', 'magnesium', 'taurine'] },

  // COGNITION
  { slug: 'memoire',             nom: "Mémoire & concentration", groupe: 'cognition',
    description: "Pertes de mémoire bénignes, baisse de concentration.",
    keywords: ['memoire', 'cognition', 'ginkgo', 'bacopa', 'omega-3', 'cacao', 'b12'] },
  { slug: 'migraine',            nom: "Migraines", groupe: 'cognition',
    description: "Maux de tête sévères répétés, parfois avec aura.",
    keywords: ['migraine', 'mal de tete', 'magnesium', 'coq10', 'b2', 'menthe poivree'] },

  // MÉTABOLISME
  { slug: 'surpoids',            nom: "Surpoids & syndrome métabolique", groupe: 'metabolisme',
    description: "Excès pondéral, glycémie élevée, dyslipidémie.",
    keywords: ['surpoids', 'metabolique', 'chrome', 'chrono-nutrition', 'jeune intermittent', 'cetogene', 'fibres'] },
  { slug: 'glycemie',            nom: "Glycémie & insulinorésistance", groupe: 'metabolisme',
    description: "Tendance à l'hyperglycémie, résistance à l'insuline.",
    keywords: ['glycemie', 'insuline', 'chrome', 'cannelle', 'mg', 'fibres'] },
  { slug: 'thyroide',            nom: "Thyroïde (hypo- / Hashimoto)", groupe: 'metabolisme',
    description: "Fonction thyroïdienne ralentie, auto-immunité.",
    keywords: ['thyroide', 'hashimoto', 'iode', 'selenium', 'zinc', 'tyrosine'] },

  // DÉTOX
  { slug: 'detox-printemps',     nom: "Cure détox de saison", groupe: 'detox',
    description: "Drainage hépatique de printemps, soutien des émonctoires.",
    keywords: ['detox', 'drainage', 'foie', 'printemps', 'jeune', 'monodiete', 'chardon-marie', 'pissenlit'] },
];

export const PATHOLOGIE_GROUPES: { slug: PathologieGroupe; nom: string; icon: string }[] = [
  { slug: 'sommeil-stress',     nom: 'Sommeil & psychisme',  icon: '🌙' },
  { slug: 'digestion',          nom: 'Digestion & ventre',   icon: '🌿' },
  { slug: 'immunite',           nom: 'Immunité',             icon: '🛡️' },
  { slug: 'respiration-orl',    nom: 'Respiration & ORL',    icon: '🍃' },
  { slug: 'circulation-coeur',  nom: 'Circulation & cœur',   icon: '❤️' },
  { slug: 'peau-articulations', nom: 'Peau & articulations', icon: '🌱' },
  { slug: 'femme',              nom: 'Femme & cycle',        icon: '🌸' },
  { slug: 'energie',            nom: 'Énergie & fatigue',    icon: '⚡' },
  { slug: 'cognition',          nom: 'Cognition & cerveau',  icon: '🧠' },
  { slug: 'metabolisme',        nom: 'Métabolisme',          icon: '⚖️' },
  { slug: 'detox',              nom: 'Détox & émonctoires',  icon: '💧' },
];

export function getPathologie(slug: string): Pathologie | undefined {
  return PATHOLOGIES.find((p) => p.slug === slug);
}

export function getPathologiesByGroupe(g: PathologieGroupe): Pathologie[] {
  return PATHOLOGIES.filter((p) => p.groupe === g);
}
