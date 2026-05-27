import type { Temperament, TemperamentSlug } from './types';

export const TEMPERAMENTS: Record<TemperamentSlug, Temperament> = {
  sanguin: {
    slug: 'sanguin',
    nom: 'Sanguin',
    humeur: 'sang',
    element: 'air',
    emoji: '🔴',
    couleurHex: '#c0392b',
    description:
      "Tempérament chaleureux, jovial et sociable. Le sanguin est porté par une vitalité solaire et un appétit pour la vie. Son énergie est forte mais peut se transformer en congestion lorsqu'il néglige son hygiène alimentaire.",
    morphologie:
      "Silhouette trapue ou ronde, membres souvent courts, teint coloré voire rouge, ossature solide.",
    organes_cibles: ['cœur', 'vaisseaux sanguins', 'rate', 'foie congestionné'],
    emotion_dominante: 'anxiété joviale, exaltation, parfois colère brève',
    forces: [
      'énergie débordante et résistance physique',
      'sociabilité, contact facile',
      'humeur expansive, optimisme naturel',
      'récupération rapide',
    ],
    faiblesses: [
      'tendance pléthorique (congestion sanguine)',
      'hypertension, troubles cardiovasculaires',
      'surpoids abdominal',
      'goutte, hyperuricémie',
      'épuisement par excès',
    ],
    alimentation: {
      principes: [
        'Régime légèrement amaigrissant et décongestionnant',
        'Privilégier les aliments crus et frais',
        'Mastication lente, repas modérés en quantité',
        'Dissociation protéines/glucides recommandée',
        'Hydratation abondante par les jus de légumes',
      ],
      favoris: [
        'légumes verts crus (salades, concombre, céleri)',
        'jus de légumes verts pressés à froid',
        'fruits rouges (myrtille, mûre, cassis)',
        'tomate, betterave, grenade',
        'poissons gras (oméga-3)',
        'huile de lin, de cameline',
      ],
      a_eviter: [
        'viandes rouges en excès, charcuteries',
        'alcool (vin rouge particulièrement)',
        'sel et aliments salés industriels',
        'graisses saturées (beurre, fromages gras)',
        'sucres rapides, pâtisseries',
      ],
      note:
        "L'alimentation vivante (crudités, germinations, jus de légumes verts à l'extracteur) décongestionne particulièrement le sanguin. Le passage progressif au cru donne des résultats spectaculaires sur les paramètres cardiovasculaires.",
    },
    nutritherapie: {
      priorites: [
        { nom: 'Magnésium', forme: 'glycérophosphate ou bisglycinate', raison: 'décontracte les vaisseaux, protège du stress oxydatif cardiovasculaire' },
        { nom: 'Vitamine E naturelle', forme: 'mélange RRR-d-alpha + gamma tocophérols', raison: 'antioxydant des membranes, protection cardiovasculaire — jamais synthétique' },
        { nom: 'Coenzyme Q10', forme: 'ubiquinol', raison: 'cofacteur énergétique du myocarde, fortement carencé après 40 ans' },
        { nom: 'Oméga-3 EPA/DHA', forme: 'huile de poisson certifiée IFOS', raison: 'fluidifie le sang, anti-inflammatoire vasculaire' },
        { nom: 'Lycopène', raison: 'antioxydant cardio-protecteur (tomate cuite, pastèque)' },
        { nom: 'Vitamine C', forme: 'ascorbate de magnésium ou acérola', raison: 'collagène vasculaire, antioxydant' },
      ],
      a_eviter: [
        'Fer en complément — surcharge ferrique dangereuse pour les vaisseaux',
        'Cuivre en complément — risque de stress oxydatif',
        'Suppléments contenant ces minéraux dans un multi de base',
      ],
      note:
        "Pour l'homme sanguin ou la femme ménopausée, la supplémentation en fer est contre-indiquée sans bilan ferritine. La ferritine élevée est un facteur de risque cardiovasculaire majeur.",
    },
    jeunes: [
      { type: 'Jeûne hydrique', duree: "1 à 3 jours en entrée, jusqu'à 7 jours pour l'expérimenté", saison_ideale: ['printemps', 'automne'], note: 'Très bien toléré, décongestionnement remarquable' },
      { type: 'Monodiète de raisin', duree: '3 à 7 jours', saison_ideale: ['automne'], note: 'Cure roi pour le sanguin' },
      { type: 'Cure de jus de betterave + carotte', duree: '7 à 21 jours', saison_ideale: ['printemps', 'ete'], note: 'Nettoyage hépatique et vasculaire' },
    ],
    purges: [
      { nom: 'Huile de ricin', protocole: 'Deux cuillères à soupe le matin à jeun, dans un peu de jus de pamplemousse', frequence: 'Une fois par trimestre' },
      { nom: 'Lavement (irrigation du côlon)', protocole: "1 L d'eau tiède + sel de mer, en fin de jeûne", frequence: 'À discuter avec un professionnel' },
    ],
    plantes: [
      { nom: 'Aubépine', usage: 'régulation cardiaque, tension' },
      { nom: 'Olivier (feuille)', usage: 'hypotenseur naturel' },
      { nom: 'Artichaut', usage: 'drainage hépatique, décongestion' },
      { nom: 'Pissenlit', usage: 'diurétique, drainage' },
      { nom: 'Vigne rouge', usage: 'tonique veineux, microcirculation' },
    ],
  },

  bilieux: {
    slug: 'bilieux',
    nom: 'Bilieux',
    humeur: 'bile jaune',
    element: 'feu',
    emoji: '🟡',
    couleurHex: '#d4ac0d',
    description:
      "Tempérament de feu : dynamique, déterminé, leader naturel. Le bilieux possède une énergie de combustion intense mais doit veiller à ne pas brûler son foie. C'est le tempérament des bâtisseurs.",
    morphologie:
      "Musculature sèche et tonique, mâchoire carrée, teint jaune-olivâtre, regard pénétrant. Silhouette athlétique, gestes précis.",
    organes_cibles: ['foie', 'vésicule biliaire', 'intestin grêle', 'pancréas'],
    emotion_dominante: 'colère, impatience, frustration',
    forces: ['dynamisme', 'leadership', 'détermination', 'résistance physique', "esprit d'analyse"],
    faiblesses: ['foie facilement surchargé', 'hyperactivité', 'troubles biliaires', 'colites', 'migraines hépatiques', 'tendinites'],
    alimentation: {
      principes: [
        'Détoxification hépatique constante',
        'Aliments amers à chaque repas',
        "Limiter la combustion : moins de cuit, moins d'épices fortes",
        'Jus de citron tiède chaque matin à jeun',
        'Soirées légères',
      ],
      favoris: [
        'légumes amers (endive, chicorée, pissenlit, artichaut, roquette)',
        'pomme (1 à 3 par jour)',
        'citron (jus tiède matin)',
        'curcuma + poivre noir frais',
        'radis noir, radis rose',
        "huile d'olive première pression",
        'avocat',
      ],
      a_eviter: [
        'alcool — particulièrement spiritueux',
        'café en excès',
        'fritures, plats en sauce',
        'épices très fortes en excès',
        'aliments transformés',
        'graisses cuites',
      ],
      note:
        "La cure printanière par excellence : jus de pomme + artichaut + radis noir + citron, en jeûne aux jus pendant 7 à 21 jours. C'est le tempérament qui répond le plus aux cures détox du foie.",
    },
    nutritherapie: {
      priorites: [
        { nom: 'Vitamines B complexe', forme: 'actives (B6=P5P, B9=méthylfolate, B12=méthylcobalamine)', raison: 'soutien hépatique et système nerveux surmené' },
        { nom: 'Magnésium', forme: 'glycérophosphate', raison: "contre-balance l'hyperactivité et les tensions musculaires" },
        { nom: 'N-acétylcystéine (NAC)', forme: '600 mg matin et soir', raison: 'précurseur du glutathion, détox phase II du foie' },
        { nom: 'Chardon-Marie (silymarine)', forme: 'extrait standardisé à 80%', raison: 'hépatoprotecteur de référence' },
        { nom: 'Zinc', forme: 'citrate ou bisglycinate', raison: "cofacteur de l'alcool-déshydrogénase et de nombreuses détox" },
        { nom: 'Sélénium', forme: 'sélénométhionine', raison: 'glutathion peroxydase, détox hépatique' },
        { nom: 'Bêta-carotène', forme: 'naturel (Dunaliella salina)', raison: 'précurseur vitamine A — jamais de rétinol synthétique en excès' },
      ],
      a_eviter: [
        'Fer en surcharge (sauf carence prouvée)',
        'Rétinol synthétique à forte dose',
        'Compléments avec excipients agressifs (dioxyde de titane)',
      ],
      note:
        "Le complexe B se prend au petit-déjeuner pour profiter de son effet activateur. La NAC est centrale dans tout protocole détox sérieux.",
    },
    jeunes: [
      { type: 'Jeûne aux jus (pomme, citron, artichaut)', duree: '3 à 5 jours', saison_ideale: ['printemps'], note: 'Cure de référence pour le bilieux' },
      { type: 'Cure printanière complète', duree: '7 à 21 jours', saison_ideale: ['printemps'], note: 'Drainage hépato-biliaire profond' },
      { type: 'Monodiète de pomme', duree: '1 à 3 jours', saison_ideale: ['printemps', 'automne'], note: 'Détox douce hebdomadaire ou mensuelle' },
    ],
    purges: [
      { nom: 'Huile de ricin (cure hépatique)', protocole: 'Deux cuillères à soupe à jeun, trois matins consécutifs', frequence: 'Une fois par trimestre, idéalement au printemps' },
      { nom: "Drainage hépatique citron + huile d'olive", protocole: "Jus d'½ citron + 1 c. à soupe d'huile d'olive à jeun, 21 jours", frequence: 'Deux cures par an' },
      { nom: "Compresse d'huile de ricin sur le foie", protocole: 'Flanelle imbibée + bouillotte, 1 h/jour pendant 4 jours', frequence: 'Une fois par trimestre' },
    ],
    plantes: [
      { nom: 'Chardon-Marie', usage: 'régénération hépatique' },
      { nom: 'Desmodium adscendens', usage: 'protection hépatique majeure' },
      { nom: 'Boldo', usage: 'cholérétique, drainage biliaire' },
      { nom: 'Romarin', usage: 'cholagogue, hépatique' },
      { nom: 'Artichaut', usage: 'décongestion hépatique' },
      { nom: 'Gentiane', usage: 'tonique amer, drainage' },
    ],
  },

  nerveux: {
    slug: 'nerveux',
    nom: 'Nerveux',
    humeur: 'atrabile',
    element: 'terre',
    emoji: '🔵',
    couleurHex: '#2980b9',
    description:
      "Tempérament cérébral et sensible. Le nerveux est créatif, intuitif, doté d'une vie intérieure riche, mais son terrain fragile demande beaucoup de douceur, de chaleur et d'ancrage.",
    morphologie:
      "Silhouette longiligne, osseuse, mince. Visage triangulaire (front large, menton fin), traits fins. Mains et pieds souvent froids.",
    organes_cibles: ['système nerveux', 'glandes endocrines (surrénales, thyroïde)', 'intestins (côlon irritable)', 'estomac'],
    emotion_dominante: 'anxiété, peur, introversion, rumination',
    forces: ['intelligence vive, créativité', 'sensibilité, intuition fine', 'capacité de réflexion abstraite', 'minceur naturelle', 'résistance émotionnelle profonde'],
    faiblesses: ['insomnies', 'spasmophilie, tétanie', 'déminéralisation chronique', 'côlon irritable', 'épuisement rapide', 'frilosité', 'sensibilité au bruit'],
    alimentation: {
      principes: [
        "Moins de cru qu'aux autres tempéraments — le cru demande beaucoup d'énergie digestive",
        'Aliments tièdes et cuits doucement (vapeur, étouffée)',
        'Repas chauds et réconfortants',
        'Petites portions mais fréquentes (4 à 5 par jour)',
        'Mastication lente et consciente',
        'Aliments reminéralisants prioritaires',
        "Chaleur dans l'assiette = chaleur dans le corps",
      ],
      favoris: [
        'légumes vapeur douces (carotte, courgette, courge, panais)',
        'soupes maison reminéralisantes',
        'algues (wakamé, dulse, nori, chlorella)',
        'graines germées (alfalfa, fenugrec)',
        'oléagineux trempés',
        "avocat, huile d'olive, ghee bio",
        'œufs bio',
        'tisanes chaudes (avoine, mélisse, verveine)',
      ],
      a_eviter: [
        'sucre raffiné — chute glycémique = anxiété',
        'café',
        'excitants : thé noir, sodas, énergisants',
        'gluten en excès (intestin perméable fréquent)',
        'crudivorisme strict (épuisant pour le terrain nerveux)',
        'alcool',
      ],
      note:
        "Le terrain nerveux pur ne sera jamais cruivore strict — il a besoin de chaleur. Préférer 30 à 50% de cru maximum, sous forme de jus tièdes en hiver.",
    },
    nutritherapie: {
      priorites: [
        { nom: 'Magnésium', forme: 'glycérophosphate (priorité absolue)', raison: 'antagoniste du calcium nerveux, anti-anxiété, régulateur du stress' },
        { nom: 'Vitamine B6', forme: 'P5P', raison: 'synthèse GABA, sérotonine, dopamine' },
        { nom: 'Tryptophane', forme: '500 mg le soir, à distance des protéines', raison: 'précurseur sérotonine et mélatonine' },
        { nom: 'Tyrosine', forme: '500 mg le matin à jeun', raison: 'précurseur dopamine — motivation, concentration' },
        { nom: 'Vitamine B12', forme: 'méthylcobalamine', raison: 'gaine de myéline, prévention déclin cognitif' },
        { nom: 'Vitamine D3', forme: 'huileuse, 2000-4000 UI le soir', raison: 'modulation immunitaire, neuroprotection, humeur' },
        { nom: 'Zinc', forme: 'citrate', raison: 'immunité nerveuse, cicatrisation muqueuses' },
        { nom: 'Oméga-3 DHA', forme: 'huile de poisson ou algue', raison: 'composant majeur des membranes neuronales' },
      ],
      a_eviter: ['Mégadoses de stimulants', 'Fer hors carence prouvée'],
      note:
        "Le nerveux est le profil-type du déficit magnésien chronique. Sa supplémentation à long terme (4 à 6 mois minimum) en glycérophosphate est essentielle. Associer obligatoirement à la B6 (P5P).",
    },
    jeunes: [
      { type: 'Jeûne court', duree: '1 à 2 jours', saison_ideale: ['printemps'], note: 'Jeûnes longs déconseillés sans encadrement' },
      { type: 'Monodiète de riz semi-complet', duree: '1 à 3 jours', saison_ideale: ['automne', 'hiver'], note: 'Nourrit, chauffe, repose la digestion' },
      { type: 'Jus de légumes racines tiédis', duree: 'En complément quotidien', saison_ideale: ['automne', 'hiver'], note: 'Énergisant, reminéralisant' },
    ],
    purges: [
      { nom: 'Huile de ricin (dose réduite)', protocole: 'Une cuillère à soupe seulement, à jeun', frequence: 'Une fois tous les 4 à 6 mois maximum' },
      { nom: 'Bains chauds détoxifiants', protocole: '500 g sel de mer + 500 g bicarbonate dans bain à 38 °C, 20 min', frequence: 'Une fois par semaine' },
      { nom: "Enveloppements d'argile verte", protocole: 'Cataplasme sur bas du dos (reins) ou ventre, 1 h', frequence: '2 à 3 fois par semaine' },
    ],
    plantes: [
      { nom: 'Valériane', usage: 'sommeil, anxiété aiguë' },
      { nom: 'Passiflore', usage: 'anxiété, agitation mentale' },
      { nom: 'Aubépine', usage: 'palpitations émotionnelles' },
      { nom: 'Ashwagandha', usage: 'adaptogène doux, cortisol' },
      { nom: 'Avoine fleurie', usage: 'reminéralisante, système nerveux' },
      { nom: 'Mélisse', usage: 'digestion nerveuse, sommeil' },
      { nom: 'Rhodiole', usage: 'fatigue chronique (en cure courte)' },
    ],
  },

  lymphatique: {
    slug: 'lymphatique',
    nom: 'Lymphatique',
    humeur: 'lymphe',
    element: 'eau',
    emoji: '🟢',
    couleurHex: '#16a085',
    description:
      "Tempérament d'eau : doux, patient, ténace. Le lymphatique avance lentement mais sûrement, possède une endurance profonde, mais doit lutter contre une tendance à la stagnation des liquides.",
    morphologie:
      'Silhouette ronde, graisses diffuses, teint blanc-pâle parfois bouffi. Traits doux, peau souvent humide. Gestes lents.',
    organes_cibles: ['système lymphatique', 'poumons (mucosités)', 'peau', 'reins, vessie', 'thyroïde'],
    emotion_dominante: 'mélancolie, passivité, nostalgie',
    forces: ['persévérance, ténacité', 'endurance à long terme', 'calme, patience', 'écoute, empathie', 'mémoire profonde'],
    faiblesses: ['prise de poids facile', 'fatigue chronique', "rétention d'eau", 'immunité affaiblie', 'hypothyroïdie', 'tendance dépressive', 'mucosités'],
    alimentation: {
      principes: [
        'Régime fortement drainant et stimulant',
        'Alimentation vivante : excellent candidat au crudivorisme progressif',
        'Épices stimulantes à chaque repas',
        'Jeûne intermittent quotidien (16/8) très bénéfique',
        'Petits repas, mastication lente',
        'Éviction stricte des laitages et du gluten — souvent transformatrice',
      ],
      favoris: [
        'crudités à chaque repas',
        'jus verts (céleri, concombre, citron, gingembre, persil)',
        'épices : gingembre frais, curcuma, cannelle, poivre de Cayenne',
        'algues (iode pour la thyroïde)',
        'fruits acides (citron, pamplemousse, pomme verte)',
        'huile de coco',
        'thé vert, thé matcha',
        'eau citronnée chaude au réveil',
      ],
      a_eviter: [
        'produits laitiers — éviction stricte recommandée',
        'gluten — éviction stricte recommandée',
        'sucres raffinés et féculents en excès',
        'sel raffiné',
        'fritures, graisses cuites',
        'aliments froids',
      ],
      note:
        "Le lymphatique est le tempérament qui répond le plus rapidement à l'alimentation vivante. La transition vers 75-100% de cru peut transformer radicalement la vitalité. Les jus verts quotidiens sont un pilier.",
    },
    nutritherapie: {
      priorites: [
        { nom: 'Vitamine D3', forme: '4000 à 6000 UI/jour, le soir au repas', raison: 'carence quasi systématique — immunité, énergie, humeur, thyroïde' },
        { nom: 'Iode', forme: 'iodure de potassium ou algues (varech, dulse)', raison: 'soutien thyroïdien, drainage lymphatique — bilan TSH obligatoire' },
        { nom: 'Vitamine B12', forme: 'méthylcobalamine', raison: 'énergie cellulaire' },
        { nom: 'Coenzyme Q10', forme: 'ubiquinol', raison: "production d'ATP mitochondrial" },
        { nom: 'Probiotiques', forme: 'souches multiples (Lactobacillus + Bifidobacterium)', raison: 'flore intestinale lymphatique souvent déséquilibrée' },
        { nom: 'Zinc', forme: 'citrate ou bisglycinate', raison: 'immunité, peau, thyroïde' },
        { nom: 'Sélénium', forme: 'sélénométhionine', raison: 'cofacteur thyroïdien (T4 → T3)' },
        { nom: 'Magnésium', forme: 'glycérophosphate', raison: 'énergie cellulaire, lutte contre fatigue' },
      ],
      a_eviter: ['Cuivre en excès', 'Compléments avec sucres ajoutés'],
      note:
        "Pour le lymphatique, la triade vitamine D + iode + sélénium est centrale. La supplémentation en vitamine D doit être contrôlée (25-OH-D) et viser 50 à 70 ng/mL.",
    },
    jeunes: [
      { type: 'Jeûne hydrique', duree: '3 à 7 jours', saison_ideale: ['printemps', 'ete'], note: 'Tempérament qui répond le plus aux jeûnes longs' },
      { type: 'Jeûne aux jus verts', duree: '5 à 10 jours', saison_ideale: ['printemps', 'ete'], note: 'Drainant et énergisant' },
      { type: 'Cure de citron (Lemon Detox)', duree: '21 jours au réveil', saison_ideale: ['printemps', 'ete', 'automne'], note: "Jus d'1 citron dans eau tiède chaque matin" },
      { type: 'Monodiète de raisin ou de pastèque', duree: '3 à 7 jours', saison_ideale: ['ete', 'automne'], note: 'Drainage profond' },
    ],
    purges: [
      { nom: 'Huile de ricin (dose pleine)', protocole: 'Trois cuillères à soupe le matin à jeun', frequence: 'Une fois par mois' },
      { nom: 'Cure bentonite + psyllium', protocole: "1 c. à café bentonite + 1 c. à café psyllium dans grand verre d'eau, 2 fois/jour", frequence: 'Cure de 21 jours, deux fois par an' },
      { nom: 'Brossage à sec de la peau', protocole: 'Brosse en fibres naturelles, sur peau sèche avant douche', frequence: 'Quotidien' },
      { nom: 'Sauna ou hammam', protocole: 'Suer abondamment 15-20 min, puis douche froide', frequence: 'Une à deux fois par semaine' },
    ],
    plantes: [
      { nom: 'Ortie piquante', usage: 'reminéralisation, anti-allergique' },
      { nom: 'Prêle des champs', usage: 'reminéralisante, silicium' },
      { nom: 'Fumeterre', usage: 'drainage hépato-lymphatique' },
      { nom: 'Bardane', usage: 'drainage cutané et lymphatique' },
      { nom: 'Gingembre frais', usage: 'stimulation digestive et circulatoire' },
      { nom: 'Curcuma', usage: 'anti-inflammatoire systémique' },
      { nom: 'Cayenne', usage: 'tonique cardiaque, métabolique' },
      { nom: 'Pissenlit', usage: 'drainage rénal et hépatique' },
    ],
  },
};

export const TEMPERAMENT_SLUGS: TemperamentSlug[] = ['sanguin', 'bilieux', 'nerveux', 'lymphatique'];

export function getTemperament(slug: string): Temperament | undefined {
  if (slug in TEMPERAMENTS) {
    return TEMPERAMENTS[slug as TemperamentSlug];
  }
  return undefined;
}
