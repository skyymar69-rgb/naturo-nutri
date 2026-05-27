import type { Article } from '../types';

const a = (slug: string, title: string, excerpt: string, intro: string, sections: { heading: string; body: string }[], tags: string[]): Article => ({
  slug, domain: 'naturopathie', category: 'aromatherapie', title, excerpt, readingTime: 4, intro, sections, tags,
});

export const NATURO_AROMATHERAPIE: Article[] = [
  a('huiles-essentielles-introduction',
    "Aromathérapie : les bases pour bien commencer",
    "Comment choisir, utiliser, conserver les huiles essentielles. Modes d'administration et précautions universelles.",
    "Les huiles essentielles sont des concentrés de molécules aromatiques végétales d'une puissance exceptionnelle. Une seule goutte peut équivaloir à plusieurs poignées de plante séchée. Cette concentration est un atout thérapeutique mais aussi un risque : mal utilisées, les HE peuvent causer des dommages réels. Voici les bases pour démarrer sereinement.",
    [
      { heading: "Choisir une huile essentielle de qualité", body: "100% pure et naturelle (HEBBD ou HECT : Huile Essentielle BotaniqueMent et Biochimiquement Définie, ou Chémotypée). Certification bio. Mention du nom latin de la plante + chémotype (variété chimique) + partie utilisée + origine géographique + numéro de lot. Flacon ambré (préserve les molécules photo-sensibles). Conservation au frais à l'abri de la lumière. Marques sérieuses : Pranarôm, Florihana, Astérale, Phytosun, Puressentiel BIO. Méfiance des prix très bas." },
      { heading: "Modes d'administration", body: "Olfactive (diffusion, inhalation) : le plus sûr, accessible à tous. Cutanée (massage) : toujours DILUÉE dans une huile végétale (3-5% en général). Orale : RÉSERVÉE aux praticiens formés et indications précises. Bains : diluer dans une base émulsifiante (lait, gel douche neutre) — JAMAIS pure dans l'eau (gouttes flottent et brûlent)." },
      { heading: "Dilutions sécuritaires", body: "Visage : 1% (1 goutte HE / 100 gouttes huile végétale). Corps : 3-5%. Zones étendues : 5%. Massage musculaire localisé : 10-20%. Pour enfants 6-12 ans : 1-2%. Pour bébés (>6 mois) : olfactif uniquement. Pour personnes sensibles : test sur petit endroit du bras 24h avant." },
      { heading: "Précautions absolues", body: "JAMAIS d'HE pure sur la peau (sauf exceptions : lavande, arbre à thé, sur petite zone). Pas d'HE sur les yeux, muqueuses, plaies ouvertes, peau lésée. Toujours diluer. Photo-sensibilisantes (agrumes) : pas de soleil dans les 12h après application. Grossesse et allaitement : très grande prudence. Enfants < 3 ans : olfactif uniquement, sous supervision. Asthme : prudence (peut déclencher crise). Épilepsie : certaines HE contre-indiquées." },
    ],
    ['huiles essentielles', 'aromathérapie', 'bases']
  ),
  a('he-lavande-vraie',
    "Lavande vraie : l'huile essentielle universelle",
    "La seule HE utilisable pure sur la peau. Anti-anxiété, sommeil, brûlures, piqûres. À avoir chez soi absolument.",
    "L'huile essentielle de lavande vraie (Lavandula angustifolia) est l'une des rares HE bien tolérées pures sur la peau (sur petite zone). Polyvalente, douce, efficace, c'est l'HE de référence à toujours avoir chez soi. Anti-stress, soporifique, cicatrisante, antiseptique, anti-douleur : ses propriétés couvrent une large gamme d'usages quotidiens.",
    [
      { heading: "Composition et propriétés", body: "Riche en linalol et acétate de linalyle (50-70%) — molécules sédatives et anti-inflammatoires. Calmante du système nerveux central. Anxiolytique léger. Hypotensive douce. Antibactérienne large spectre. Antifongique. Antalgique. Cicatrisante. Antispasmodique. Insectifuge (anti-poux notamment)." },
      { heading: "Usages courants", body: "Anxiété : 2 gouttes sur les poignets, respirer profondément (effet 5 min). Insomnie : 2-3 gouttes sur l'oreiller. Diffusion 30 min avant le coucher. Brûlure légère : 1 goutte pure immédiatement (douleur s'arrête en 30 sec, cicatrisation accélérée). Piqûre d'insecte : 1 goutte pure. Petite coupure : 1 goutte pure. Pou : friction du cuir chevelu (HE dans shampoing). Migraine : 1 goutte sur les tempes." },
      { heading: "Précautions", body: "Très bien tolérée par tous (adultes, enfants > 6 ans, femmes enceintes après le 1er trimestre). Allergie aux Lamiacées : rare mais possible. À ne pas confondre avec lavandin (Lavandula × intermedia, moins noble) ou lavande aspic (Lavandula latifolia, plus chauffante). Le prix de la vraie est plus élevé (production 4x plus faible)." },
    ],
    ['lavande', 'anxiété', 'brûlure']
  ),
  a('he-arbre-a-the',
    "Tea tree : l'antimicrobien à large spectre",
    "Arbre à thé (Melaleuca alternifolia) : antibactérien, antiviral, antifongique. L'HE des infections cutanées et ORL.",
    "L'huile essentielle d'arbre à thé (Melaleuca alternifolia), originaire d'Australie, est l'un des antimicrobiens les plus puissants de l'aromathérapie. Sa composition unique (terpinéol, cinéole) lui confère une action large spectre : bactéries, virus, champignons, parasites. C'est l'HE de référence pour les infections cutanées, les mycoses, l'acné, les angines.",
    [
      { heading: "Propriétés majeures", body: "Antibactérienne puissante (bactéries Gram+ et Gram-, y compris staphylocoques). Antifongique (Candida albicans, dermatophytes). Antivirale. Antiparasitaire. Stimulante immunitaire. Cicatrisante. Bien tolérée." },
      { heading: "Indications principales", body: "Acné (1 goutte pure sur le bouton, 2 fois/jour). Mycose des ongles (1 goutte pure 2 fois/jour, plusieurs mois). Aphtes (1 goutte sur le bout du doigt humide, application). Angine débutante (1 goutte dans 1 c. à café de miel, 3-4 fois/jour, 5 jours). Verrues (application directe, persévérance). Pellicules (5 gouttes dans shampoing). Pied d'athlète." },
      { heading: "Précautions", body: "Pure tolérée localement sur courte durée. Peau sensible : diluer à 50% dans huile végétale. Femmes enceintes : déconseillée. Enfants < 6 ans : éviter. Animaux (chats surtout) : très toxique, ne jamais utiliser près d'eux. Conservation : se dégrade vite — racheter chaque année." },
    ],
    ['tea tree', 'antibactérien', 'acné', 'mycose']
  ),
  a('he-eucalyptus-radie',
    "Eucalyptus radié : la voie respiratoire à libérer",
    "L'HE des sphères ORL et bronchiques. Dégage les voies respiratoires en cas de rhume, bronchite, sinusite.",
    "L'huile essentielle d'eucalyptus radié (Eucalyptus radiata), plus douce que l'eucalyptus globulus, est l'HE de référence pour les affections respiratoires. Riche en 1,8-cinéole (eucalyptol), elle décongestionne, fluidifie les mucosités, dégage les bronches. Bien tolérée, elle convient aux enfants à partir de 6 ans.",
    [
      { heading: "Propriétés et indications", body: "Mucolytique et expectorante. Décongestionnante des voies respiratoires. Antivirale. Antibactérienne respiratoire. Antitussive. Stimulante immunitaire douce. Indications : rhume, bronchite, sinusite, toux grasse, rhinite, otite (en application périphérique). Prévention hivernale (diffusion atmosphérique)." },
      { heading: "Modes d'utilisation", body: "Diffusion atmosphérique : 5-10 gouttes dans un diffuseur, 15-30 min par séquence. Inhalation humide : 4-5 gouttes dans bol d'eau chaude, respirer 10 min sous une serviette. Application : 3-5 gouttes diluées dans huile végétale, massage thoracique et dos. Bain (DILUÉE dans base) : 8-10 gouttes." },
      { heading: "Précautions", body: "Bien tolérée à partir de 6 ans. Femmes enceintes : déconseillée avant 4 mois, prudence après. Asthme : test préalable (rare risque de crise). Allergies respiratoires : prudence. À ne pas confondre avec eucalyptus globulus (plus puissant mais plus irritant) ou eucalyptus citronné (insectifuge, anti-douleur, autre usage)." },
    ],
    ['eucalyptus', 'voies respiratoires', 'bronchite']
  ),
  a('he-ravintsara',
    "Ravintsara : l'antivirale de référence",
    "Cinnamomum camphora CT cinéole : l'antivirale large spectre, immunostimulante, anti-fatigue.",
    "L'huile essentielle de ravintsara (Cinnamomum camphora à chémotype cinéole) est probablement l'antivirale la plus puissante et la mieux tolérée de l'aromathérapie. Issue d'un arbre de Madagascar, riche en 1,8-cinéole, elle combine action antivirale forte, stimulation immunitaire, et tonification générale. C'est l'HE phare des virus saisonniers.",
    [
      { heading: "Propriétés et indications", body: "Antivirale large spectre (virus respiratoires, herpès, zona, varicelle, grippe). Immunostimulante. Anti-fatigue, tonique générale. Expectorante. Cicatrisante. Indications : grippe (cure dès les premiers signes), zona, herpès (labial, génital), bronchite virale, prévention hivernale, fatigue chronique d'origine virale (Epstein-Barr réactivé)." },
      { heading: "Modes d'utilisation", body: "Diffusion préventive : 5-8 gouttes en diffuseur 2-3 fois/jour en saison épidémique. Voie cutanée : 3-5 gouttes dans une c. à café d'huile végétale, en massage du thorax, dos, plante des pieds, 3-4 fois/jour dès les premiers signes. Herpès labial : 1 goutte pure sur le bouton au plus tôt. Prévention saisonnière : 1 goutte sur poignets le matin." },
      { heading: "Précautions", body: "Très bien tolérée. Femmes enceintes : déconseillée avant 4 mois. Enfants > 3 ans : olfactif et cutané dilué. Asthmatiques : prudence (cinéole). À ne pas confondre avec ravensare (Ravensara aromatica), de composition très différente — bien lire le nom latin." },
    ],
    ['ravintsara', 'antivirale', 'grippe']
  ),
  a('he-menthe-poivree',
    "Menthe poivrée : tonus mental et anti-nausée",
    "Antalgique, anti-nausée, stimulante mentale, anti-migraine. Une goutte = un coup de fouet.",
    "L'huile essentielle de menthe poivrée (Mentha × piperita), avec ses 40-60% de menthol, est l'une des HE les plus stimulantes et polyvalentes. Une seule goutte suffit : analgésique puissante, anti-nausée, stimulante mentale, anti-migraine. À garder précieusement dans la trousse de premier secours.",
    [
      { heading: "Propriétés et indications", body: "Antalgique puissante (par activation des récepteurs au froid). Anti-nausée majeure (transports, grossesse, chimio). Anti-migraineuse (massage des tempes). Stimulante neurotonique. Antiseptique. Digestive. Hépato-stimulante. Indications : nausées, mal des transports, migraines, fatigue mentale ponctuelle, bouffées de chaleur, douleurs musculaires localisées, syndrome de l'intestin irritable." },
      { heading: "Usages courants", body: "Mal des transports : 1 goutte sur poignets + respirer. Migraine : 1 goutte sur les tempes (pas trop près des yeux). Nausée : 1 goutte sur sucre/comprimé neutre, ou olfactif. Coup de fatigue : 1 goutte dans 1 c. à café de miel + verre d'eau. Bouffées de chaleur : 1 goutte sur nuque. Douleur musculaire : 2 gouttes diluées dans HV, massage local." },
      { heading: "Précautions strictes", body: "JAMAIS sur grande surface (effet refroidissant systémique dangereux). JAMAIS chez les enfants < 6 ans (risque de spasme laryngé). DÉCONSEILLÉE en grossesse et allaitement. Asthme : prudence. Épilepsie : éviter. Personnes hypertendues : prudence à l'ingestion. Reflux gastro-œsophagien sévère : éviter par voie interne. Ne pas appliquer le soir (stimulante)." },
    ],
    ['menthe poivrée', 'nausée', 'migraine']
  ),
  a('he-helichryse-italienne',
    "Hélichryse italienne : l'anti-hématome",
    "Helichrysum italicum : action sur les bleus, hématomes, varicosités. L'HE traumatologique de référence.",
    "L'huile essentielle d'hélichryse italienne (Helichrysum italicum), aussi appelée immortelle, est l'HE la plus chère du marché (récolte difficile, rendement très faible). Mais elle est unique : aucune autre HE n'a son action sur les bleus, les hématomes, les phlébites. Elle résorbe les ecchymoses en quelques heures. C'est l'HE traumatologique d'élite.",
    [
      { heading: "Propriétés exceptionnelles", body: "Anti-hématome (la plus puissante connue). Anti-coagulante locale. Régénératrice cellulaire. Cicatrisante des cicatrices anciennes. Drainante lymphatique. Anti-inflammatoire. Mucolytique. Antispasmodique. Tonique cardiaque légère." },
      { heading: "Indications", body: "Hématomes, bleus (action en 2-3 applications). Coups, chocs, entorses (à appliquer dès que possible). Cicatrices anciennes (cure de 3 mois). Varicosités, couperose. Phlébites superficielles. Rhinite chronique (1 goutte dans chaque narine, mouchage). Acouphènes (cure expérimentale, autour des oreilles)." },
      { heading: "Usage", body: "2 gouttes pures sur l'hématome dès que possible, 3-4 fois par jour. Pour les cicatrices anciennes : 1 goutte diluée dans huile de rose musquée ou tamanu, massage matin et soir, 3 mois. Pour les varicosités : 1 goutte diluée dans HV, massage léger. Précautions : sous anticoagulants, déconseillée (effet anti-coagulant). Grossesse : déconseillée. Pricée mais utilisée à très petites doses." },
    ],
    ['hélichryse', 'hématome', 'cicatrices']
  ),
  a('he-niaouli',
    "Niaouli : assainissant cutané et respiratoire",
    "Melaleuca quinquenervia : tonique, antiviral, anti-radique, anti-eczéma. Cousin du tea tree, plus doux.",
    "L'huile essentielle de niaouli (Melaleuca quinquenervia ou Goménol), cousine du tea tree, est plus douce et plus polyvalente. Tonifiante, antibactérienne, antivirale, expectorante, et avec une particularité unique : la propriété 'anti-radique' qui en fait un protecteur de la peau pendant les radiothérapies (vérifié par études cliniques).",
    [
      { heading: "Propriétés", body: "Antibactérienne. Antivirale. Antifongique modérée. Expectorante. Décongestionnante veineuse. Tonifiante générale. Anti-radique (protection cutanée des radiations). Cicatrisante. Phlébotonique." },
      { heading: "Indications principales", body: "Préparation/accompagnement radiothérapie (1 goutte pure sur la zone, 2-3 fois/jour). Bronchite, rhume, sinusite. Otite externe. Insuffisance veineuse (jambes lourdes, varices). Acné. Eczéma sec. Cicatrisation. Pertes blanches (en ovules). Soutien immunitaire général." },
      { heading: "Modes d'utilisation", body: "Massage thoracique : 2-3 gouttes diluées dans huile végétale. Jambes lourdes : 2-3 gouttes dans HV froide, massage du bas vers le haut. Diffusion atmosphérique acceptée. Radiothérapie : application directe sur la peau (en concertation avec l'oncologue). Précautions : femmes enceintes : déconseillée avant 4 mois. Enfants > 6 ans." },
    ],
    ['niaouli', 'radiothérapie', 'veines']
  ),
  a('synergies-aromatherapeutiques',
    "Synergies d'huiles essentielles : potentialiser les effets",
    "Comment combiner plusieurs HE pour démultiplier les bénéfices. 6 formules de référence éprouvées.",
    "Le génie de l'aromathérapie tient souvent dans la combinaison synergique de plusieurs huiles essentielles : 1 + 1 = 3. Une synergie bien construite couvre plusieurs angles thérapeutiques. Voici 6 synergies de référence pour les indications les plus courantes — à utiliser en flacon préparé pour facilité d'usage.",
    [
      { heading: "Synergie anti-stress quotidien", body: "Dans 30 ml d'huile végétale (jojoba) : 30 gouttes lavande vraie + 20 gouttes petit grain bigarade + 20 gouttes mandarine zeste + 10 gouttes camomille romaine. Application : 5 gouttes sur poignets, plexus solaire, nuque. 2-3 fois par jour ou en cas de stress. Mandarine photo-sensibilisante : pas avant exposition solaire." },
      { heading: "Synergie sommeil", body: "Dans 10 ml huile végétale : 15 gouttes lavande vraie + 10 gouttes camomille romaine + 10 gouttes orange douce + 5 gouttes marjolaine à coquilles. Application : 3-4 gouttes sur plexus solaire et plante des pieds 30 min avant le coucher. Possibilité de diffusion atmosphérique (sans HV)." },
      { heading: "Synergie défenses immunitaires hivernales", body: "Dans 30 ml huile végétale : 30 gouttes ravintsara + 20 gouttes tea tree + 15 gouttes thym à linalol + 15 gouttes citron zeste. Application matin et soir sur poignets, thorax, plante des pieds. Cure 3 semaines par mois de novembre à mars. Citron photo-sensibilisant." },
      { heading: "Synergie digestion difficile", body: "Dans 10 ml huile végétale : 15 gouttes menthe poivrée + 10 gouttes basilic exotique + 10 gouttes gingembre + 5 gouttes citron zeste. Application après les repas en massage circulaire de l'abdomen (sens des aiguilles d'une montre). Évitez le soir (menthe stimulante)." },
      { heading: "Synergie douleurs articulaires", body: "Dans 30 ml huile végétale d'arnica : 30 gouttes gaulthérie couchée (salicylate) + 20 gouttes eucalyptus citronné + 15 gouttes lavandin super + 10 gouttes laurier noble. Application en massage localisé 2-3 fois/jour. Anti-inflammatoire puissant. Gaulthérie : pas sous anticoagulants." },
      { heading: "Synergie circulation jambes lourdes", body: "Dans 30 ml d'huile de calophylle (HV phlébotonique) : 20 gouttes cyprès toujours vert + 15 gouttes lentisque pistachier + 15 gouttes hélichryse italienne + 10 gouttes menthe poivrée. Application en massage des jambes du bas vers le haut, soir au coucher. Cure de 3 semaines." },
    ],
    ['synergies', 'formules', 'aromathérapie']
  ),
];
