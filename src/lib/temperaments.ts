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
      "Silhouette trapue ou ronde, membres souvent courts, teint coloré voire rouge, ossature solide. Le sanguin occupe l'espace, sa présence physique est immédiate.",
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
        "Régime légèrement amaigrissant et décongestionnant",
        "Privilégier les aliments crus et frais",
        "Mastication lente, repas modérés en quantité",
        "Dissociation protéines/glucides recommandée",
        "Hydratation abondante par les jus de légumes",
      ],
      favoris: [
        'légumes verts crus (salades, concombre, céleri)',
        'jus de légumes verts pressés à froid',
        'fruits rouges (myrtille, mûre, cassis) — antioxydants vasculaires',
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
      notes_grosjean:
        "Irène Grosjean insiste sur le pouvoir décongestionnant de l'alimentation vivante pour le sanguin : crudités, germinations, jus de légumes verts à l'extracteur. Le passage progressif au cru (75% et plus) est souvent très bien toléré et donne des résultats spectaculaires.",
    },
    nutritherapie: {
      priorites: [
        {
          nom: 'Magnésium',
          forme: 'glycérophosphate ou bisglycinate',
          raison: 'décontracte les vaisseaux, protège du stress oxydatif cardiovasculaire',
        },
        {
          nom: 'Vitamine E naturelle',
          forme: 'mélange RRR-d-alpha + gamma tocophérols',
          raison: 'antioxydant des membranes, protection cardiovasculaire — JAMAIS synthétique (dl-alpha)',
        },
        {
          nom: 'Coenzyme Q10',
          forme: 'ubiquinol (forme active)',
          raison: 'cofacteur énergétique du myocarde, fortement carencé après 40 ans',
        },
        {
          nom: 'Oméga-3 EPA/DHA',
          forme: 'huile de poisson certifiée IFOS',
          raison: 'fluidifie le sang, anti-inflammatoire vasculaire',
        },
        {
          nom: 'Lycopène',
          raison: 'antioxydant cardio-protecteur (tomate cuite, pastèque)',
        },
        {
          nom: 'Vitamine C',
          forme: 'ascorbate de magnésium ou acérola',
          raison: 'collagène vasculaire, antioxydant',
        },
      ],
      a_eviter: [
        'Fer (Fe) en complément — surcharge ferrique dangereuse pour les vaisseaux',
        'Cuivre (Cu) en complément — risque de stress oxydatif',
        'Suppléments contenant ces minéraux dans un multi de base (règle Curtay)',
      ],
      notes_curtay:
        "Curtay alerte particulièrement les sanguins sur la supplémentation en fer : un homme adulte ou une femme ménopausée n'en a JAMAIS besoin. La ferritine élevée est un facteur de risque cardiovasculaire majeur souvent ignoré.",
    },
    jeunes: [
      {
        type: 'Jeûne hydrique',
        duree: '1 à 3 jours en entrée, jusqu\'à 7 jours pour l\'expérimenté',
        saison_ideale: ['printemps', 'automne'],
        note: 'Très bien toléré, décongestionnement remarquable',
      },
      {
        type: 'Monodiète de raisin',
        duree: '3 à 7 jours',
        saison_ideale: ['automne'],
        note: 'Cure roi pour le sanguin — antioxydants, hydratation, décongestion',
      },
      {
        type: 'Cure de jus de betterave + carotte',
        duree: '7 à 21 jours',
        saison_ideale: ['printemps', 'ete'],
        note: 'Nettoyage hépatique et vasculaire',
      },
    ],
    purges: [
      {
        nom: 'Huile de ricin',
        protocole: '2 cuillères à soupe le matin à jeun, dans un peu de jus de pamplemousse',
        frequence: '1 fois par trimestre',
      },
      {
        nom: 'Lavement (irrigation du côlon)',
        protocole: '1L d\'eau tiède + sel de mer, en fin de jeûne',
        frequence: 'À discuter avec un naturopathe',
      },
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
      "Tempérament de feu : dynamique, déterminé, leader naturel. Le bilieux possède une énergie de combustion intense mais doit veiller à ne pas brûler son foie ni les autres. C'est le tempérament des bâtisseurs et des conquérants.",
    morphologie:
      "Musculature sèche et tonique, mâchoire carrée et volontaire, teint jaune-olivâtre, regard pénétrant. Silhouette athlétique, gestes précis et économes.",
    organes_cibles: ['foie', 'vésicule biliaire', 'intestin grêle', 'pancréas'],
    emotion_dominante: 'colère, impatience, frustration',
    forces: [
      'dynamisme et capacité de travail exceptionnelle',
      'leadership, courage, détermination',
      'résistance physique au stress',
      'esprit d\'analyse et de décision',
    ],
    faiblesses: [
      'foie facilement surchargé',
      'hyperactivité, surmenage chronique',
      'troubles biliaires (calculs)',
      'colites, ulcère gastro-duodénal',
      'migraines hépatiques',
      'blessures sportives, tendinites',
    ],
    alimentation: {
      principes: [
        'Détoxification hépatique constante',
        'Aliments amers à chaque repas',
        'Limiter la combustion : moins de cuit, moins d\'épices fortes',
        'Jus de citron tiède chaque matin à jeun',
        'Soirées légères pour reposer le foie',
      ],
      favoris: [
        'légumes amers (endive, chicorée, pissenlit, artichaut, roquette)',
        'pomme (1 à 3 par jour)',
        'citron (jus tiède matin)',
        'curcuma + poivre noir (frais)',
        'radis noir, radis rose',
        'huile d\'olive première pression',
        'avocat (bonne graisse pour la bile)',
      ],
      a_eviter: [
        'alcool — particulièrement spiritueux',
        'café en excès (1 tasse max le matin)',
        'fritures, plats en sauce',
        'épices très fortes (piment, harissa) en excès',
        'aliments transformés industriels',
        'graisses cuites, beurre cuit',
      ],
      notes_grosjean:
        "Grosjean recommande au bilieux la cure printanière par excellence : jus de pomme + artichaut + radis noir + citron, en jeûne aux jus pendant 7 à 21 jours. C'est le tempérament qui répond le plus spectaculairement aux cures détox du foie.",
    },
    nutritherapie: {
      priorites: [
        {
          nom: 'Vitamines B complexe',
          forme: 'actives (B6=P5P, B9=méthylfolate, B12=méthylcobalamine)',
          raison: 'soutien hépatique et système nerveux surmené',
        },
        {
          nom: 'Magnésium',
          forme: 'glycérophosphate',
          raison: 'contre-balance l\'hyperactivité et les tensions musculaires',
        },
        {
          nom: 'N-acétylcystéine (NAC)',
          forme: '600mg matin et soir',
          raison: 'précurseur du glutathion, détox phase II du foie',
        },
        {
          nom: 'Chardon-Marie (silymarine)',
          forme: 'extrait standardisé à 80%',
          raison: 'hépatoprotecteur de référence',
        },
        {
          nom: 'Zinc',
          forme: 'citrate ou bisglycinate',
          raison: 'cofacteur de l\'alcool-déshydrogénase et de nombreuses détox',
        },
        {
          nom: 'Sélénium',
          forme: 'sélénométhionine',
          raison: 'glutathion peroxydase, détox hépatique',
        },
        {
          nom: 'Bêta-carotène',
          forme: 'naturel (Dunaliella salina)',
          raison: 'précurseur vit A — JAMAIS de rétinol synthétique en excès (toxicité hépatique)',
        },
      ],
      a_eviter: [
        'Fer en surcharge (sauf carence prouvée)',
        'Rétinol synthétique à forte dose',
        'Compléments avec excipients agressifs (dioxyde de titane interdit)',
      ],
      notes_curtay:
        "Curtay recommande la prise du complexe B au petit-déjeuner pour profiter de leur effet activateur et de leur rôle dans le cycle de méthylation hépatique. La NAC est centrale dans son protocole détox.",
    },
    jeunes: [
      {
        type: 'Jeûne aux jus (pomme, citron, artichaut)',
        duree: '3 à 5 jours',
        saison_ideale: ['printemps'],
        note: 'Cure de référence pour le bilieux',
      },
      {
        type: 'Cure printanière complète',
        duree: '7 à 21 jours',
        saison_ideale: ['printemps'],
        note: 'Drainage hépato-biliaire profond',
      },
      {
        type: 'Monodiète de pomme',
        duree: '1 à 3 jours',
        saison_ideale: ['printemps', 'automne'],
        note: 'Détox douce hebdomadaire ou mensuelle',
      },
    ],
    purges: [
      {
        nom: 'Huile de ricin (cure hépatique)',
        protocole: '2 cuillères à soupe à jeun, 3 matins consécutifs',
        frequence: '1 fois par trimestre, idéalement au printemps',
      },
      {
        nom: 'Drainage hépatique citron + huile d\'olive',
        protocole: 'Jus d\'½ citron + 1 c.à.s d\'huile d\'olive à jeun, 21 jours',
        frequence: '2 cures par an (printemps/automne)',
      },
      {
        nom: 'Compresse d\'huile de ricin sur le foie',
        protocole: 'Flanelle imbibée + bouillotte, 1h/jour pendant 4 jours',
        frequence: '1 fois par trimestre',
      },
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
    humeur: 'atrabile (bile noire)',
    element: 'terre',
    emoji: '🔵',
    couleurHex: '#2980b9',
    description:
      "Tempérament cérébral et sensible. Le nerveux est créatif, intuitif, doté d'une vie intérieure riche, mais son terrain fragile demande beaucoup de douceur. Il se dépense vite, se déminéralise facilement, et a besoin de chaleur et d'ancrage.",
    morphologie:
      "Silhouette longiligne, osseuse, mince naturellement. Visage triangulaire (front large, menton fin), traits fins. Mains et pieds souvent froids. Peau fine, parfois pâle.",
    organes_cibles: ['système nerveux central et autonome', 'glandes endocrines (surrénales, thyroïde)', 'intestins (côlon irritable)', 'estomac'],
    emotion_dominante: 'anxiété, peur, introversion, rumination',
    forces: [
      'intelligence vive, créativité',
      'sensibilité, intuition fine',
      'capacité de réflexion abstraite',
      'minceur naturelle',
      'résistance émotionnelle profonde (paradoxale)',
    ],
    faiblesses: [
      'insomnies, sommeil agité',
      'spasmophilie, tétanie',
      'déminéralisation chronique',
      'côlon irritable, ballonnements',
      'épuisement rapide',
      'frilosité, mauvaise circulation périphérique',
      'sensibilité au bruit, à la lumière',
    ],
    alimentation: {
      principes: [
        '⚠️ MOINS de cru qu\'aux autres tempéraments — le cru demande beaucoup d\'énergie digestive',
        'Aliments tièdes et cuits doucement (vapeur, étouffée)',
        'Repas chauds et réconfortants',
        'Petites portions mais fréquentes (4 à 5 par jour)',
        'Mastication LENTE et consciente',
        'Aliments reminéralisants prioritaires',
        'Chaleur dans l\'assiette = chaleur dans le corps',
      ],
      favoris: [
        'légumes vapeur douces (carotte, courgette, courge, panais)',
        'soupes maison reminéralisantes',
        'algues (wakamé, dulse, nori, chlorella) — reminéralisation puissante',
        'graines germées (alfalfa, fenugrec)',
        'oléagineux trempés (amandes, noix de Grenoble, noisettes)',
        'avocat, huile d\'olive, ghee bio',
        'œufs bio (très assimilables)',
        'tisanes chaudes (avoine, mélisse, verveine)',
      ],
      a_eviter: [
        'sucre raffiné — chute glycémique = anxiété',
        'café (excite déjà un terrain trop tendu)',
        'excitants : thé noir, sodas, énergisants',
        'gluten en excès (intestin perméable fréquent)',
        'crudivorisme strict (épuisant pour le terrain nerveux)',
        'alcool',
      ],
      notes_grosjean:
        "Irène Grosjean nuance son discours sur le cru pour le nerveux : 'On chauffe ce qui doit être chauffé'. Soupes, légumes vapeur, monodiète de riz, sont des choix sages. Le nerveux pur ne sera jamais un cruivore strict — il a besoin de chaleur. Préférer 30 à 50% de cru maximum, sous forme de jus tièdes en hiver.",
    },
    nutritherapie: {
      priorites: [
        {
          nom: 'Magnésium',
          forme: 'glycérophosphate (PRIORITÉ ABSOLUE selon Curtay)',
          raison: 'antagoniste du calcium dans la transmission nerveuse, anti-anxiété naturel, régulateur du stress',
        },
        {
          nom: 'Vitamine B6',
          forme: 'P5P (pyridoxal-5-phosphate)',
          raison: 'synthèse GABA, sérotonine, dopamine — neurotransmetteurs apaisants',
        },
        {
          nom: 'Tryptophane',
          forme: '500 mg le soir, à distance des protéines',
          raison: 'précurseur direct de la sérotonine et de la mélatonine',
        },
        {
          nom: 'Tyrosine',
          forme: '500 mg le matin à jeun',
          raison: 'précurseur dopamine — motivation, concentration matinale',
        },
        {
          nom: 'Vitamine B12',
          forme: 'méthylcobalamine (PAS cyanocobalamine — règle Curtay)',
          raison: 'gaine de myéline, prévention déclin cognitif',
        },
        {
          nom: 'Vitamine D3',
          forme: 'huileuse, 2000-4000 UI le SOIR au repas (recommandation Curtay)',
          raison: 'modulation immunitaire, neuroprotection, antidépresseur naturel',
        },
        {
          nom: 'Zinc',
          forme: 'citrate',
          raison: 'immunité nerveuse, cicatrisation muqueuses',
        },
        {
          nom: 'Oméga-3 DHA',
          forme: 'huile de poisson ou algue',
          raison: 'composant majeur des membranes neuronales',
        },
      ],
      a_eviter: [
        'Mégadoses de stimulants (caféine en complément, guarana à haute dose)',
        'Fer hors carence prouvée par bilan',
      ],
      notes_curtay:
        "Le nerveux est le profil-type du déficit magnésien chronique selon Curtay. Sa supplémentation à long terme (4 à 6 mois minimum) sous forme glycérophosphate est non négociable. Associer obligatoirement à la B6 (P5P) qui permet l'entrée intracellulaire du magnésium. La prise de vitamine D le soir est une spécificité Curtay : il a démontré qu'elle est mieux convertie en forme active lors du repos nocturne.",
    },
    jeunes: [
      {
        type: 'Jeûne court (1-2 jours maximum au début)',
        duree: '1 à 2 jours',
        saison_ideale: ['printemps'],
        note: '⚠️ Jeûnes longs DÉCONSEILLÉS sans encadrement — épuisement rapide',
      },
      {
        type: 'Monodiète de riz semi-complet',
        duree: '1 à 3 jours',
        saison_ideale: ['automne', 'hiver'],
        note: 'Idéale : nourrit, chauffe, repose la digestion',
      },
      {
        type: 'Jus de légumes racines tiédis',
        duree: 'En complément quotidien',
        saison_ideale: ['automne', 'hiver'],
        note: 'Carotte + betterave + céleri — énergisant, reminéralisant',
      },
    ],
    purges: [
      {
        nom: 'Huile de ricin (dose réduite)',
        protocole: '1 cuillère à soupe seulement, à jeun',
        frequence: '1 fois tous les 4 à 6 mois maximum',
      },
      {
        nom: 'Bains chauds détoxifiants',
        protocole: '500 g sel de mer + 500 g bicarbonate dans bain à 38°C, 20 min',
        frequence: '1 fois par semaine',
      },
      {
        nom: 'Enveloppements d\'argile verte',
        protocole: 'Cataplasme sur bas du dos (reins) ou ventre, 1h',
        frequence: '2 à 3 fois par semaine pendant une cure',
      },
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
      "Tempérament d'eau : doux, patient, ténace. Le lymphatique avance lentement mais sûrement, possède une endurance profonde, mais doit lutter contre une tendance à la stagnation des liquides et de l'énergie. Le drainage et la stimulation sont ses maîtres-mots.",
    morphologie:
      "Silhouette ronde, graisses diffuses, teint blanc-pâle parfois bouffi. Traits doux, peau souvent humide ou grasse. Gestes lents, voix posée. Les chairs sont molles plus que fermes.",
    organes_cibles: ['système lymphatique', 'poumons (mucosités)', 'peau (eczéma, acné)', 'reins, vessie', 'thyroïde'],
    emotion_dominante: 'mélancolie, passivité, nostalgie',
    forces: [
      'persévérance, ténacité',
      'endurance à long terme',
      'calme, patience',
      'écoute, empathie',
      'mémoire profonde',
    ],
    faiblesses: [
      'prise de poids facile, difficile à perdre',
      'fatigue chronique, somnolence',
      'rétention d\'eau, cellulite',
      'immunité affaiblie (rhumes, sinusites)',
      'hypothyroïdie fréquente',
      'tendance dépressive',
      'mucosités, glaires chroniques',
    ],
    alimentation: {
      principes: [
        'Régime fortement DRAINANT et STIMULANT',
        'Alimentation vivante : excellent candidat au crudivorisme progressif',
        'Épices stimulantes à chaque repas',
        'JEÛNE intermittent quotidien (16/8) très bénéfique',
        'Petits repas, mastication lente',
        '⚠️ ÉVICTION STRICTE des laitages et du gluten — souvent transformatrice',
      ],
      favoris: [
        'crudités à chaque repas (salades, légumes croquants)',
        'jus verts (céleri, concombre, citron, gingembre, persil)',
        'épices : gingembre frais, curcuma + poivre, cannelle, poivre de Cayenne',
        'algues (iode pour la thyroïde)',
        'fruits acides (citron, pamplemousse, pomme verte)',
        'huile de coco (acides gras à chaînes moyennes, énergisants)',
        'thé vert, thé matcha',
        'eau citronnée chaude au réveil',
      ],
      a_eviter: [
        'PRODUITS LAITIERS — éviction stricte recommandée',
        'GLUTEN — éviction stricte recommandée',
        'sucres raffinés et féculents en excès',
        'sel raffiné (favorise rétention d\'eau)',
        'fritures, graisses cuites',
        'aliments froids (glaces, boissons glacées) — éteignent le feu digestif',
      ],
      notes_grosjean:
        "Le lymphatique est, selon Irène Grosjean, le tempérament qui répond le plus rapidement et le plus spectaculairement au passage à l'alimentation vivante. La transition vers 75-100% de cru peut transformer radicalement la vitalité, faire fondre les surcharges et réveiller l'organisme. Les jus verts quotidiens sont un pilier.",
    },
    nutritherapie: {
      priorites: [
        {
          nom: 'Vitamine D3',
          forme: '4000 à 6000 UI/jour, le SOIR au repas (Curtay)',
          raison: 'carence quasi systématique chez le lymphatique — immunité, énergie, humeur, thyroïde',
        },
        {
          nom: 'Iode',
          forme: 'iodure de potassium ou algues (varech, dulse)',
          raison: 'soutien thyroïdien, drainage lymphatique — ATTENTION dosage, faire bilan TSH avant',
        },
        {
          nom: 'Vitamine B12',
          forme: 'méthylcobalamine',
          raison: 'énergie cellulaire, surtout si végétarien/vegan',
        },
        {
          nom: 'Coenzyme Q10',
          forme: 'ubiquinol',
          raison: 'production d\'ATP mitochondrial, lutte contre la fatigue',
        },
        {
          nom: 'Probiotiques',
          forme: 'souches multiples (Lactobacillus + Bifidobacterium)',
          raison: 'flore intestinale lymphatique souvent déséquilibrée',
        },
        {
          nom: 'Zinc',
          forme: 'citrate ou bisglycinate',
          raison: 'immunité, peau, thyroïde',
        },
        {
          nom: 'Sélénium',
          forme: 'sélénométhionine',
          raison: 'cofacteur thyroïdien (T4 → T3)',
        },
        {
          nom: 'Magnésium',
          forme: 'glycérophosphate',
          raison: 'énergie cellulaire, lutte contre fatigue',
        },
      ],
      a_eviter: [
        'Cuivre en excès (favorise inflammation)',
        'Compléments avec sucres ajoutés (règle Curtay n°1)',
      ],
      notes_curtay:
        "Curtay considère le lymphatique comme le tempérament-type pour la triade vitamine D + iode + sélénium. La supplémentation en vitamine D doit être systématiquement contrôlée (dosage 25-OH-D) et viser une fourchette optimale de 50 à 70 ng/mL, bien au-dessus du seuil officiel de 30 ng/mL trop bas.",
    },
    jeunes: [
      {
        type: 'Jeûne hydrique',
        duree: '3 à 7 jours (idéal — excellent drainage)',
        saison_ideale: ['printemps', 'ete'],
        note: 'Tempérament qui répond le plus spectaculairement aux jeûnes longs',
      },
      {
        type: 'Jeûne aux jus verts',
        duree: '5 à 10 jours',
        saison_ideale: ['printemps', 'ete'],
        note: 'Drainant et énergisant',
      },
      {
        type: 'Cure de citron (Lemon Detox)',
        duree: '21 jours au réveil',
        saison_ideale: ['printemps', 'ete', 'automne'],
        note: 'Jus d\'1 citron dans eau tiède chaque matin',
      },
      {
        type: 'Monodiète de raisin ou de pastèque',
        duree: '3 à 7 jours',
        saison_ideale: ['ete', 'automne'],
        note: 'Drainage profond, perte de poids',
      },
    ],
    purges: [
      {
        nom: 'Huile de ricin (dose pleine)',
        protocole: '3 cuillères à soupe le matin à jeun',
        frequence: '1 fois par mois (tempérament qui le supporte bien)',
      },
      {
        nom: 'Cure bentonite + psyllium',
        protocole: '1 c.à.c bentonite + 1 c.à.c psyllium dans grand verre d\'eau, 2x/jour',
        frequence: 'Cure de 21 jours, 2 fois par an',
      },
      {
        nom: 'Brossage à sec de la peau',
        protocole: 'Brosse en fibres naturelles, sur peau sèche avant douche, du bas vers le haut',
        frequence: 'Quotidien — drainage lymphatique manuel',
      },
      {
        nom: 'Sauna ou hammam',
        protocole: 'Suer abondamment 15-20 min, puis douche froide',
        frequence: '1 à 2 fois par semaine',
      },
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

export const TEMPERAMENT_COLOR_CLASS: Record<TemperamentSlug, { bg: string; text: string; border: string; ring: string }> = {
  sanguin: { bg: 'bg-red-50', text: 'text-red-800', border: 'border-red-300', ring: 'ring-red-400' },
  bilieux: { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-300', ring: 'ring-amber-400' },
  nerveux: { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-300', ring: 'ring-blue-400' },
  lymphatique: { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-300', ring: 'ring-emerald-400' },
};
