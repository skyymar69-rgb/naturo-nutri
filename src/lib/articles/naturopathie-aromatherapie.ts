import type { Article } from '../types';

const a = (slug: string, title: string, excerpt: string, intro: string, sections: { heading: string; body: string }[], tags: string[]): Article => ({
  slug, domain: 'naturopathie', category: 'aromatherapie', title, excerpt, readingTime: 4, intro, sections, tags,
});

export const NATURO_AROMATHERAPIE: Article[] = [
  a('huiles-essentielles-introduction',
    "Aromathérapie : les bases pour bien commencer",
    "Comment choisir, utiliser, conserver les huiles essentielles. Modes d'administration et précautions universelles.",
    "Les huiles essentielles sont des concentrés de molécules aromatiques végétales d'une puissance exceptionnelle. Cette concentration est un atout thérapeutique mais aussi un risque : mal utilisées, les HE peuvent causer des dommages réels.",
    [
      { heading: "Choisir une huile essentielle de qualité", body: "100% pure et naturelle (HEBBD ou HECT). Certification bio. Mention du nom latin de la plante + chémotype + partie utilisée + origine + numéro de lot. Flacon ambré. Conservation au frais à l'abri de la lumière." },
      { heading: "Modes d'administration", body: "Olfactive (diffusion, inhalation) : le plus sûr. Cutanée (massage) : toujours DILUÉE dans une huile végétale. Orale : RÉSERVÉE aux praticiens formés. Bains : diluer dans une base émulsifiante." },
      { heading: "Dilutions sécuritaires", body: "Visage : 1%. Corps : 3-5%. Massage musculaire localisé : 10-20%. Pour enfants 6-12 ans : 1-2%. Pour bébés (>6 mois) : olfactif uniquement." },
      { heading: "Précautions absolues", body: "JAMAIS d'HE pure sur la peau (sauf exceptions). Pas d'HE sur les yeux, muqueuses, plaies ouvertes. Photo-sensibilisantes (agrumes) : pas de soleil dans les 12h. Grossesse, allaitement, enfants < 3 ans : très grande prudence." },
    ],
    ['huiles essentielles', 'aromathérapie', 'bases']
  ),
  a('he-lavande-vraie',
    "Lavande vraie : l'huile essentielle universelle",
    "Polyvalente, douce, efficace : anxiété, sommeil, brûlures, piqûres.",
    "L'huile essentielle de lavande vraie (Lavandula angustifolia) est l'une des rares HE bien tolérées pures sur la peau (sur petite zone). Voir aussi l'article dédié au Silexan (extrait standardisé) qui a fait l'objet d'essais cliniques.",
    [
      { heading: "Composition et propriétés", body: "Riche en linalol et acétate de linalyle (50-70%). Calmante du système nerveux central. Anxiolytique léger (selon usage traditionnel ; voir Silexan pour les essais contrôlés). Antibactérienne large spectre." },
      { heading: "Usages courants", body: "Anxiété : 2 gouttes sur les poignets, respirer profondément. Insomnie : 2-3 gouttes sur l'oreiller. Diffusion 30 min avant le coucher. Brûlure légère : 1 goutte pure immédiatement. Piqûre d'insecte : 1 goutte pure." },
      { heading: "Précautions", body: "Très bien tolérée par tous (adultes, enfants > 6 ans, femmes enceintes après le 1er trimestre). Allergie aux Lamiacées : rare mais possible. À ne pas confondre avec lavandin ou lavande aspic." },
    ],
    ['lavande', 'anxiété', 'brûlure']
  ),

  /* ── REFACTOR : HE arbre à thé ─────────────────────────────── */
  {
    slug: 'he-arbre-a-the',
    domain: 'naturopathie',
    category: 'aromatherapie',
    title: "Tea tree (Melaleuca alternifolia) : l'antimicrobien le mieux étudié",
    excerpt: "L'huile essentielle d'arbre à thé fait l'objet d'une littérature antimicrobienne abondante et plutôt cohérente.",
    readingTime: 5,
    evidence_level: 'rct',
    evidence_note: "L'activité antimicrobienne in vitro est très solidement documentée. Les essais cliniques chez l'humain confirment certains usages (acné, mycoses cutanées) avec une efficacité comparable à des comparateurs de référence. La prudence reste de mise (toxicité orale, contre-indication animale).",
    intro: "L'huile essentielle de tea tree, originaire d'Australie, est l'une des huiles essentielles dont l'activité antimicrobienne est la mieux étayée. Plusieurs revues systématiques permettent une lecture pondérée.",
    sections: [
      { heading: "Revue de référence dans Clinical Microbiology Reviews", body: "Une revue parue dans Clinical Microbiology Reviews aurait synthétisé les propriétés antimicrobiennes et autres usages médicaux de l'huile essentielle de tea tree [#s1]. L'activité large spectre (bactéries Gram+, Gram-, champignons, virus, certains parasites) y apparaît bien documentée, principalement in vitro." },
      { heading: "Revue systématique des essais cliniques", body: "Une revue systématique des essais randomisés publiée dans Frontiers in Pharmacology aurait confirmé l'efficacité et la sécurité du tea tree dans plusieurs indications cliniques humaines, notamment dermatologiques [#s2]. Les bénéfices observés ne seraient pas spectaculaires mais robustes pour l'acné légère à modérée et certaines mycoses superficielles." },
      { heading: "Applications dermatologiques", body: "Une revue parue dans International Journal of Dermatology aurait passé en revue les applications dermatologiques du tea tree [#s3]. L'acné, le pied d'athlète, les mycoses unguéales superficielles et certaines pellicules y figurent comme indications soutenues par des essais — avec néanmoins une hétérogénéité méthodologique notable." },
      { heading: "Usage pratique et limites", body: "Application cutanée diluée (3-5 %) le plus souvent. L'usage pur localisé (1 goutte sur un bouton d'acné, durée brève) reste répandu. L'ingestion est à proscrire (toxicité documentée). À ne jamais utiliser près des chats (toxicité féline grave). La grossesse, l'allaitement et les jeunes enfants restent des situations de prudence." },
    ],
    sources: [
      { id: 's1', type: 'review', title: "Melaleuca alternifolia (Tea Tree) oil: a review of antimicrobial and other medicinal properties", authors: 'Carson CF, et al.', journal: 'Clinical Microbiology Reviews', year: 2006, pmid: '16418522', url: 'https://pubmed.ncbi.nlm.nih.gov/16418522/' },
      { id: 's2', type: 'review', title: "Efficacy and safety of Melaleuca alternifolia (tea tree) oil for human health — A systematic review of randomized controlled trials", authors: 'Kairey L, et al.', journal: 'Frontiers in Pharmacology', year: 2023, pmid: '37033604', url: 'https://pubmed.ncbi.nlm.nih.gov/37033604/' },
      { id: 's3', type: 'review', title: "A review of applications of tea tree oil in dermatology", authors: 'Pazyar N, et al.', journal: 'International Journal of Dermatology', year: 2013, pmid: '22998411', url: 'https://pubmed.ncbi.nlm.nih.gov/22998411/' },
    ],
    contre_indications: [
      "Ingestion (toxicité documentée)",
      "Chats et autres animaux domestiques (toxicité grave)",
      "Femmes enceintes : prudence, éviter le 1er trimestre",
      "Enfants < 6 ans : éviter ou diluer fortement",
    ],
    tags: ['tea tree', 'antibactérien', 'acné', 'mycose'],
    updatedAt: '2026-05-28',
  },

  a('he-eucalyptus-radie',
    "Eucalyptus radié : la voie respiratoire à libérer",
    "L'HE des sphères ORL et bronchiques. Dégage les voies respiratoires en cas de rhume, bronchite, sinusite.",
    "L'huile essentielle d'eucalyptus radié (Eucalyptus radiata), plus douce que l'eucalyptus globulus, est l'HE de référence pour les affections respiratoires.",
    [
      { heading: "Propriétés et indications", body: "Mucolytique et expectorante (selon usage traditionnel). Décongestionnante des voies respiratoires. Antivirale et antibactérienne en in vitro. Indications : rhume, bronchite, sinusite, toux grasse, rhinite." },
      { heading: "Modes d'utilisation", body: "Diffusion atmosphérique : 5-10 gouttes dans un diffuseur. Inhalation humide : 4-5 gouttes dans bol d'eau chaude. Application : 3-5 gouttes diluées dans huile végétale, massage thoracique." },
      { heading: "Précautions", body: "Bien tolérée à partir de 6 ans. Femmes enceintes : déconseillée avant 4 mois. Asthme : test préalable (rare risque de crise). À ne pas confondre avec eucalyptus globulus." },
    ],
    ['eucalyptus', 'voies respiratoires', 'bronchite']
  ),
  a('he-ravintsara',
    "Ravintsara : l'antivirale traditionnelle",
    "Cinnamomum camphora CT cinéole : antivirale large spectre selon l'usage traditionnel et plusieurs travaux in vitro.",
    "L'huile essentielle de ravintsara est largement utilisée en prévention saisonnière. La majorité des données disponibles sont in vitro ou tirées d'expérience clinique, sans essai randomisé majeur.",
    [
      { heading: "Propriétés et indications", body: "Antivirale large spectre selon les données in vitro. Immunostimulante (tradition). Tonique générale. Indications classiques : grippe (cure dès les premiers signes), prévention hivernale, fatigue d'origine virale." },
      { heading: "Modes d'utilisation", body: "Diffusion préventive : 5-8 gouttes en diffuseur. Voie cutanée : 3-5 gouttes dans huile végétale, en massage du thorax, dos, plante des pieds. Prévention saisonnière : 1 goutte sur poignets le matin." },
      { heading: "Précautions", body: "Femmes enceintes : déconseillée avant 4 mois. Enfants > 3 ans : olfactif et cutané dilué. Asthmatiques : prudence (cinéole)." },
    ],
    ['ravintsara', 'antivirale', 'grippe']
  ),
  a('he-menthe-poivree',
    "Menthe poivrée : tonus mental et anti-nausée",
    "Antalgique, anti-nausée, stimulante mentale, anti-migraine.",
    "L'huile essentielle de menthe poivrée (Mentha × piperita), avec 40-60 % de menthol, est l'une des HE les plus polyvalentes pour un usage symptomatique. Plusieurs essais cliniques soutiennent son emploi dans le syndrome du côlon irritable.",
    [
      { heading: "Propriétés et indications", body: "Antalgique (activation des récepteurs au froid). Anti-nausée. Anti-migraineuse (essais positifs en application locale). Digestive (essais en capsules gastro-résistantes pour le côlon irritable)." },
      { heading: "Usages courants", body: "Mal des transports : 1 goutte sur poignets + respirer. Migraine : 1 goutte sur les tempes. Nausée : 1 goutte sur sucre/comprimé neutre, ou olfactif. Côlon irritable : capsules de menthe poivrée standardisées (forme médicament)." },
      { heading: "Précautions strictes", body: "JAMAIS sur grande surface. JAMAIS chez les enfants < 6 ans. DÉCONSEILLÉE en grossesse et allaitement. Asthme : prudence. Épilepsie : éviter. Reflux gastro-œsophagien sévère : éviter par voie interne." },
    ],
    ['menthe poivrée', 'nausée', 'migraine']
  ),
  a('he-helichryse-italienne',
    "Hélichryse italienne : l'anti-hématome traditionnel",
    "Helichrysum italicum : usage traditionnel sur bleus, hématomes, varicosités. Peu d'essais cliniques contrôlés.",
    "L'huile essentielle d'hélichryse italienne (immortelle) est l'une des plus chères du marché. Son usage anti-hématome est ancien et largement plébiscité par les utilisateurs ; à ce jour, les essais cliniques contrôlés en cosmétologie/traumatologie restent peu nombreux.",
    [
      { heading: "Propriétés rapportées", body: "Anti-hématome (tradition). Anti-coagulante locale. Régénératrice cellulaire. Drainante lymphatique. Anti-inflammatoire (signaux in vitro)." },
      { heading: "Indications classiques", body: "Hématomes, bleus. Coups, chocs, entorses. Cicatrices anciennes. Varicosités. Phlébites superficielles. Rhinite chronique." },
      { heading: "Usage", body: "2 gouttes pures sur l'hématome dès que possible, 3-4 fois par jour. Pour les cicatrices anciennes : 1 goutte diluée dans huile de rose musquée ou tamanu, massage matin et soir. Précautions : sous anticoagulants, déconseillée. Grossesse : déconseillée." },
    ],
    ['hélichryse', 'hématome', 'cicatrices']
  ),
  a('he-niaouli',
    "Niaouli : assainissant cutané et respiratoire",
    "Melaleuca quinquenervia : tonique, antimicrobien, anti-radique selon les protocoles oncologiques de soins de support.",
    "L'huile essentielle de niaouli, cousine du tea tree, est utilisée traditionnellement en complément des soins ORL et cutanés. La radioprotection cutanée fait l'objet de protocoles utilisés en soins de support, sans large essai randomisé positif.",
    [
      { heading: "Propriétés rapportées", body: "Antibactérienne. Antivirale. Antifongique modérée. Expectorante. Décongestionnante veineuse. Tonifiante générale. Anti-radique cutané (tradition de soins de support en oncologie)." },
      { heading: "Indications classiques", body: "Préparation/accompagnement radiothérapie (en concertation avec l'oncologue uniquement). Bronchite, rhume, sinusite. Insuffisance veineuse. Acné." },
      { heading: "Modes d'utilisation", body: "Massage thoracique : 2-3 gouttes diluées dans huile végétale. Jambes lourdes : 2-3 gouttes dans HV, massage du bas vers le haut. Diffusion atmosphérique acceptée. Précautions : femmes enceintes déconseillée avant 4 mois ; enfants > 6 ans." },
    ],
    ['niaouli', 'radiothérapie', 'veines']
  ),
  a('synergies-aromatherapeutiques',
    "Synergies d'huiles essentielles : formules traditionnelles",
    "Six formules de référence éprouvées par l'usage en aromathérapie clinique francophone. Niveau de preuve : tradition.",
    "Le génie de l'aromathérapie tient souvent dans la combinaison de plusieurs huiles essentielles. Les synergies présentées ici sont issues de la tradition francophone (école Franchomme, Baudoux) — elles n'ont pas fait l'objet d'essais cliniques randomisés en tant que mélanges.",
    [
      { heading: "Synergie anti-stress quotidien", body: "30 ml HV (jojoba) + 30 gouttes lavande vraie + 20 gouttes petit grain bigarade + 20 gouttes mandarine zeste + 10 gouttes camomille romaine. 5 gouttes sur poignets, plexus, nuque. 2-3 fois par jour." },
      { heading: "Synergie sommeil", body: "10 ml HV + 15 gouttes lavande vraie + 10 gouttes camomille romaine + 10 gouttes orange douce + 5 gouttes marjolaine à coquilles. 3-4 gouttes sur plexus et plante des pieds 30 min avant coucher." },
      { heading: "Synergie défenses immunitaires hivernales", body: "30 ml HV + 30 gouttes ravintsara + 20 gouttes tea tree + 15 gouttes thym à linalol + 15 gouttes citron zeste. Matin et soir sur poignets, thorax, plante des pieds. Citron photo-sensibilisant." },
      { heading: "Synergie digestion difficile", body: "10 ml HV + 15 gouttes menthe poivrée + 10 gouttes basilic exotique + 10 gouttes gingembre + 5 gouttes citron zeste. Massage circulaire de l'abdomen." },
      { heading: "Synergie douleurs articulaires", body: "30 ml HV d'arnica + 30 gouttes gaulthérie couchée + 20 gouttes eucalyptus citronné + 15 gouttes lavandin super + 10 gouttes laurier noble. Application en massage localisé. Gaulthérie : pas sous anticoagulants." },
      { heading: "Synergie circulation jambes lourdes", body: "30 ml HV calophylle + 20 gouttes cyprès toujours vert + 15 gouttes lentisque pistachier + 15 gouttes hélichryse italienne + 10 gouttes menthe poivrée. Massage des jambes du bas vers le haut." },
    ],
    ['synergies', 'formules', 'aromathérapie']
  ),

  /* ── NEW : Silexan lavande standardisée ────────────────────── */
  {
    slug: 'silexan-lavande-anxiete',
    domain: 'naturopathie',
    category: 'aromatherapie',
    title: "Silexan (lavande orale standardisée) : effet anxiolytique documenté",
    excerpt: "L'extrait Silexan a fait l'objet de plusieurs essais randomisés et d'un statut réglementaire spécifique en Allemagne.",
    readingTime: 5,
    evidence_level: 'rct',
    evidence_note: "Le Silexan dispose d'un dossier clinique solide pour les troubles anxieux légers à modérés. À distinguer absolument de l'usage de l'huile essentielle de lavande pure par voie orale (à proscrire).",
    intro: "Silexan est un extrait oral standardisé d'huile essentielle de lavande, encapsulé pour usage interne, qui a fait l'objet d'essais randomisés multiples dans les troubles anxieux. C'est l'une des préparations phytothérapeutiques les mieux étudiées dans l'anxiété.",
    sections: [
      { heading: "Données cliniques regroupées", body: "Une revue parue dans World Journal of Biological Psychiatry a synthétisé les données cliniques du Silexan dans les troubles anxieux [#s1]. Les chercheurs auraient observé un effet anxiolytique cliniquement significatif, comparable à des traitements de référence dans les anxiétés généralisées légères à modérées, avec un profil de tolérance favorable." },
      { heading: "Essais sur des anxiétés ciblées", body: "Un essai randomisé publié dans European Journal of Pediatrics a évalué l'inhalation de lavande pour l'anxiété dentaire chez l'enfant [#s2]. Les résultats auraient confirmé un effet apaisant détectable en aigu, mécanisme différent (olfactif) de celui du Silexan oral mais convergent." },
      { heading: "Aromathérapie en post-opératoire", body: "Un essai paru dans Journal of Epidemiology and Global Health a évalué l'aromathérapie à la lavande après césarienne sur la douleur et l'anxiété [#s3]. Les chercheurs auraient observé une réduction modeste de la douleur ressentie et de l'anxiété post-opératoire dans le bras intervention." },
      { heading: "Précautions essentielles", body: "Silexan est une préparation pharmaceutique encapsulée — ne JAMAIS confondre avec l'usage de l'huile essentielle de lavande pure par voie orale, qui n'est pas recommandée sans encadrement spécialisé. Les seuls effets indésirables couramment rapportés avec Silexan sont des éructations à goût de lavande." },
    ],
    sources: [
      { id: 's1', type: 'review', title: "Silexan in anxiety disorders: Clinical data and pharmacological background", authors: 'Kasper S', journal: 'World Journal of Biological Psychiatry', year: 2018, pmid: '28511598', url: 'https://pubmed.ncbi.nlm.nih.gov/28511598/' },
      { id: 's2', type: 'rct', title: "Can lavender oil inhalation help to overcome dental anxiety and pain in children? A randomized clinical trial", authors: 'Arslan I, et al.', journal: 'European Journal of Pediatrics', year: 2020, pmid: '32030454', url: 'https://pubmed.ncbi.nlm.nih.gov/32030454/' },
      { id: 's3', type: 'rct', title: "Aromatherapy Using Lavender Oil Effectiveness on Pain and Anxiety After C-Section: A Randomized Controlled Trial", authors: 'Nouira M, et al.', journal: 'Journal of Epidemiology and Global Health', year: 2024, pmid: '39400653', url: 'https://pubmed.ncbi.nlm.nih.gov/39400653/' },
    ],
    contre_indications: [
      "Grossesse et allaitement (données insuffisantes)",
      "Traitement antidépresseur (avis médical recommandé)",
      "Enfants : Silexan oral non recommandé sans avis spécialisé",
    ],
    tags: ['Silexan', 'lavande', 'anxiété', 'phytothérapie'],
    updatedAt: '2026-05-28',
  },

  /* ── NEW : Aromathérapie obstétrique post-op ──────────────── */
  {
    slug: 'aromatherapie-post-operatoire',
    domain: 'naturopathie',
    category: 'aromatherapie',
    title: "Aromathérapie en post-opératoire : ce que disent les RCT récents",
    excerpt: "Plusieurs essais randomisés évaluent l'usage des huiles essentielles en accompagnement de la douleur et de l'anxiété post-op.",
    readingTime: 4,
    evidence_level: 'rct',
    evidence_note: "L'aromathérapie n'est pas un substitut aux antalgiques de référence. Les essais récents confortent néanmoins son usage en accompagnement non médicamenteux de l'anxiété et de la douleur perçue.",
    intro: "L'usage des huiles essentielles en milieu hospitalier (post-opératoire, soins palliatifs) fait l'objet d'essais cliniques en nombre croissant. Sans remplacer les traitements de référence, l'aromathérapie peut offrir un appoint mesurable.",
    sections: [
      { heading: "Lavande après césarienne", body: "L'essai paru dans Journal of Epidemiology and Global Health cité ci-dessus aurait observé qu'une aromathérapie à la lavande en post-césarienne réduirait la douleur perçue et l'anxiété, par rapport à un contrôle [#s1]. L'effet, modeste à modéré, est cohérent avec une diminution de la composante émotionnelle de la douleur." },
      { heading: "Lavande en odontologie pédiatrique", body: "L'inhalation de lavande avant un soin dentaire chez l'enfant aurait également réduit l'anxiété procédurale dans un essai randomisé européen [#s2]. Le contexte (anxiété aiguë de courte durée) semble particulièrement propice à un effet aromathérapeutique détectable." },
      { heading: "Place dans les soins", body: "L'aromathérapie peut être positionnée comme intervention non médicamenteuse complémentaire dans le cadre de protocoles infirmiers, à condition d'un dispositif d'application sécurisé (diffuseur calibré, sticks olfactifs, dosettes), d'une formation du personnel et d'une vigilance allergique." },
      { heading: "Limites et précautions", body: "Beaucoup d'essais hospitaliers restent de petite taille et ouverts (impossible d'aveugler une odeur). L'effet placebo représente probablement une part importante du bénéfice — ce qui ne le rend pas illégitime mais invite à la mesure dans les conclusions." },
    ],
    sources: [
      { id: 's1', type: 'rct', title: "Aromatherapy Using Lavender Oil Effectiveness on Pain and Anxiety After C-Section: A Randomized Controlled Trial", authors: 'Nouira M, et al.', journal: 'Journal of Epidemiology and Global Health', year: 2024, pmid: '39400653', url: 'https://pubmed.ncbi.nlm.nih.gov/39400653/' },
      { id: 's2', type: 'rct', title: "Can lavender oil inhalation help to overcome dental anxiety and pain in children? A randomized clinical trial", authors: 'Arslan I, et al.', journal: 'European Journal of Pediatrics', year: 2020, pmid: '32030454', url: 'https://pubmed.ncbi.nlm.nih.gov/32030454/' },
    ],
    tags: ['aromathérapie', 'post-opératoire', 'lavande', 'soins de support'],
    updatedAt: '2026-05-28',
  },
];
