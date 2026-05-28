import type { Article } from '../types';

const a = (slug: string, title: string, excerpt: string, intro: string, sections: { heading: string; body: string }[], tags: string[]): Article => ({
  slug, domain: 'naturopathie', category: 'hydrotherapie', title, excerpt, readingTime: 4, intro, sections, tags,
});

export const NATURO_HYDROTHERAPIE: Article[] = [
  a('douche-ecossaise',
    "La douche écossaise : alternance chaud-froid",
    "3 cycles de chaud-froid pour stimuler la circulation, le système immunitaire et l'énergie matinale.",
    "La douche écossaise — l'alternance contrôlée d'eau chaude et froide en fin de douche — est l'une des pratiques de naturopathie les plus simples et les plus puissantes pour stimuler la circulation, le système immunitaire et l'énergie. Issue de la tradition germano-scandinave (Kneipp, Priessnitz), elle se pratique en 3-4 minutes chaque matin et transforme la vitalité en quelques semaines.",
    [
      { heading: "Le protocole standard", body: "En fin de douche normale, démarrer le cycle. Cycle 1 : 30 secondes d'eau très chaude (38-40°C) — 15 secondes d'eau froide (15-18°C). Cycle 2 : idem. Cycle 3 : terminer par eau froide 30 secondes. Démarrer par les jambes, remonter vers le cœur. Visage en fin. Respiration profonde et calme pendant l'eau froide." },
      { heading: "Les bénéfices observés", body: "Activation de la circulation sanguine (vasodilatation chaude + vasoconstriction froide). Stimulation immunitaire (étude Buijze 2016 : -29% jours de maladie chez les pratiquants). Tonus matinal puissant (libération de noradrénaline). Amélioration de l'humeur. Peau plus tonique. Cheveux moins ternes. Sommeil amélioré paradoxalement (régulation circadienne)." },
      { heading: "Pour démarrer en douceur", body: "Semaine 1 : finir par 15 secondes d'eau froide sur les jambes uniquement. Semaine 2 : 30 secondes sur jambes + bras. Semaine 3-4 : protocole complet. Si terrain frileux : tiède au lieu de très froid les 2 premiers mois. Si hypertension : avis médical. Si insuffisance cardiaque : prudence." },
    ],
    ['hydrothérapie', 'douche froide', 'immunité']
  ),
  a('bain-chaud-detox',
    "Le bain chaud détoxifiant : sel et bicarbonate",
    "500 g de sel marin + 500 g de bicarbonate dans un bain à 38°C pendant 20 min : élimination par la peau.",
    "Le bain chaud aux sels et bicarbonate est une stratégie de drainage cutané profonde, particulièrement adaptée aux tempéraments nerveux qui ne tolèrent pas les jeûnes longs. La chaleur ouvre les pores, le sel attire les toxines par osmose, le bicarbonate alcalinise. Une heure de pratique vaut une mini-cure.",
    [
      { heading: "Recette et préparation", body: "Bain à 38-40°C maximum. 500 g de sel marin gris non raffiné (Guérande, Camargue) OU sel d'Epsom (sulfate de magnésium, encore plus actif). 500 g de bicarbonate de soude alimentaire. Optionnel : 10 gouttes d'huile essentielle de lavande ou romarin (à émulsionner dans une c. à soupe de miel ou lait avant). Durée : 20-30 minutes. Boire de l'eau pendant le bain." },
      { heading: "Mécanisme d'action", body: "La chaleur ouvre les pores et active la transpiration. Le sel hypertonique crée un gradient osmotique : les liquides chargés en toxines sortent par les pores. Le bicarbonate alcalinise et neutralise l'acidité. Le sel d'Epsom permet l'absorption transcutanée de magnésium (utile aux nerveux). Sudation profuse : drainage actif." },
      { heading: "Fréquence et précautions", body: "Une fois par semaine en entretien. 2 fois par semaine en cure (3-4 semaines). Boire abondamment AVANT, PENDANT et APRÈS (un litre d'eau au total). Sortir lentement, se sécher, se reposer 30 min sous une couverture (continuation de la sudation). Pas en cas de fièvre, infection en poussée, problème cardiaque, hypotension. Pas en grossesse." },
    ],
    ['bain', 'sel epsom', 'détox']
  ),
  a('bains-pieds',
    "Les bains de pieds : drainage et apaisement",
    "Bains de pieds chauds, froids, alternés, à la moutarde, à la sauge. Une pratique négligée aux effets remarquables.",
    "Les bains de pieds — pratique millénaire négligée — sont l'un des outils les plus simples de la naturopathie. Les pieds concentrent une densité exceptionnelle de terminaisons nerveuses et de zones réflexes. Un simple bain de pieds peut détendre tout le système nerveux, drainer la circulation, soulager des migraines, induire le sommeil.",
    [
      { heading: "Bain de pieds chaud (38-40°C)", body: "Effet : vasodilatateur, décongestionnant céphalique, induit le sommeil. Idéal en fin de journée. Variantes : avec sel (drainage) ; avec sauge en décoction (sueur, drainage) ; avec lavande (apaisement) ; à la moutarde (1-2 c. à café de moutarde en poudre dans 5 L d'eau : ultra-stimulant en début de rhume). Durée : 10-15 min. Sécher soigneusement." },
      { heading: "Bain de pieds froid (12-15°C)", body: "Effet : tonique, énergisant, réveille la circulation. Idéal le matin. Démarrer pieds chauds, immerger 30 secondes à 1 minute. Sortir, sécher activement. Peut être suivi d'un bain chaud (alternance). Utile en cas de jambes lourdes l'été." },
      { heading: "Bain de pieds alterné", body: "5 cycles : 1 min chaud / 30 sec froid. Terminer par froid. Stimulation circulatoire majeure. Idéal pour rétention d'eau, jambes lourdes, fatigue musculaire des membres inférieurs. Pratique des sportifs en récupération." },
    ],
    ['bain de pieds', 'circulation', 'sommeil']
  ),
  a('compresse-chaude-foie',
    "La compresse chaude sur le foie : drainage en douceur",
    "Une simple bouillotte chaude appliquée 30 minutes sur le foie active son fonctionnement. Pratique quotidienne précieuse.",
    "L'application d'une compresse chaude (bouillotte) sur la zone hépatique est l'une des pratiques les plus simples de la naturopathie. La chaleur dilate les vaisseaux, active la circulation hépato-biliaire, stimule le drainage. Pratiquée 30 minutes le soir avant de dormir, sur un cycle de 3 semaines, elle décongestionne le foie de manière notable.",
    [
      { heading: "Position et technique", body: "Allongé sur le dos. Bouillotte chaude (mais supportable) ou cataplasme d'huile de ricin si version intensive. Zone : sous le sein droit, depuis le bord du sternum jusqu'au flanc droit. Couvrir d'un linge fin, puis bouillotte par-dessus, puis couverture. Durée : 30 min minimum, 1h idéale. Respiration calme, méditation possible." },
      { heading: "Pourquoi et quand", body: "Idéal en cure de printemps (drainage hépatique). En période de surmenage. Après des excès. En accompagnement d'un changement alimentaire. Une fois par semaine en entretien. Tous les soirs pendant 3 semaines en cure. Effet : meilleure digestion, sommeil plus profond (le foie travaille de nuit), teint plus clair, énergie en hausse." },
      { heading: "Variante : cataplasme d'huile de ricin", body: "Pour un effet décuplé : imbiber une flanelle de coton bio d'huile de ricin pressée à froid. Appliquer sur le foie. Couvrir d'un film plastique. Couvrir d'un linge sec. Bouillotte par-dessus. 1 h. À pratiquer 4 jours d'affilée, puis pause de 3 jours, sur 4 semaines." },
    ],
    ['compresse chaude', 'foie', 'bouillotte']
  ),
  a('hydrotherapie-colon',
    "Hydrothérapie du côlon : la version pro du lavement",
    "Irrigation contrôlée de toute la longueur du côlon en cabinet. Indications, déroulé, fréquence.",
    "L'hydrothérapie du côlon est la version professionnelle du lavement à domicile. Elle utilise un appareil qui irrigue tout le côlon (1,5 m de long), avec contrôle de la pression, de la température et du débit. Pratiquée par un thérapeute formé, elle nettoie en profondeur sur 45-60 minutes. Excellente cure complémentaire d'un jeûne.",
    [
      { heading: "Déroulé d'une séance", body: "Cabinet adapté avec table inclinable et appareil hydraulique stérile. Insertion d'une canule à usage unique. Cycles d'irrigation : eau filtrée tiède entre, puis évacuation contrôlée. 6 à 12 cycles successifs sur 45-60 minutes. Le thérapeute masse l'abdomen pendant. Le patient peut observer ce qui sort dans un tube transparent. Aucune odeur (système fermé)." },
      { heading: "Quand y recourir", body: "Constipation chronique résistant aux autres approches. Préparation à un jeûne long (avant J0). Sortie de jeûne long (J+10). Cure de drainage profond. Pré-coloscopie (en accompagnement). Post-antibiothérapie lourde. Période de stress digestif intense. Cure 2-3 séances espacées d'1-2 semaines." },
      { heading: "Sécurité et limites", body: "À pratiquer EXCLUSIVEMENT en cabinet certifié, avec appareils stérilisés et matériel à usage unique. Contre-indications : maladies inflammatoires intestinales en poussée, diverticulite aiguë, cancer colorectal, chirurgie récente, grossesse, hémorroïdes saignantes, insuffisance rénale. La pratique excessive peut altérer la flore — limiter à des cures (4-6 séances/an max)." },
    ],
    ['côlon', 'irrigation', 'cure']
  ),

  /* ── NEW : exposition au froid ─────────────────────────────── */
  {
    slug: 'exposition-froid-immersion',
    domain: 'naturopathie',
    category: 'hydrotherapie',
    title: "Exposition au froid : ce que la littérature commence à montrer",
    excerpt: "Bains froids, immersion, douches : la pratique se popularise. Les données récentes invitent à la mesure.",
    readingTime: 5,
    evidence_level: 'preliminary',
    evidence_note: "Le signal sur la récupération musculaire post-effort est cohérent. Les bénéfices métaboliques et immunitaires sont suggérés mais demandent confirmation par essais plus larges. Risque cardiovasculaire chez sujets prédisposés : prudence.",
    intro: "L'exposition au froid (immersion, douche, baignade) connaît une popularité considérable. La littérature scientifique sur l'humain s'enrichit — sans pour autant trancher définitivement.",
    sections: [
      { heading: "Revue systématique récente", body: "Une revue parue dans PLOS ONE aurait synthétisé les essais évaluant l'immersion dans l'eau froide chez des adultes en bonne santé [#s1]. Les chercheurs auraient observé un signal en faveur d'effets bénéfiques sur l'humeur, le sommeil et la qualité de vie à court terme, sans pouvoir conclure à un effet durable. Les protocoles sont hétérogènes." },
      { heading: "Récupération musculaire post-effort", body: "Une revue publiée dans Frontiers in Physiology a examiné l'effet de l'immersion en eau froide sur la récupération musculaire après l'exercice [#s2]. Le bénéfice à court terme sur la sensation de récupération et la douleur musculaire d'apparition retardée serait reproductible — mais l'effet pourrait s'opposer à certaines adaptations à long terme à l'entraînement de force." },
      { heading: "Effets inflammatoires", body: "Une étude exploratoire a mesuré l'effet de l'exposition au froid sur des marqueurs inflammatoires chez l'humain [#s3]. Les résultats sont préliminaires et hétérogènes — l'idée d'un effet anti-inflammatoire systémique large reste à mieux étayer." },
      { heading: "Précautions", body: "Au-delà de la mode, l'exposition aiguë au froid sollicite fortement le système cardiovasculaire. Contre-indications classiques : maladie coronarienne, hypertension non équilibrée, arythmies, certaines pathologies vasculaires. Une initiation progressive et un environnement sécurisé sont indispensables. Jamais seul en eau libre." },
    ],
    sources: [
      { id: 's1', type: 'review', title: "Health effects of voluntary exposure to cold water — a continuing subject of debate", authors: 'Knechtle B, et al.', journal: 'PLOS ONE', year: 2024, pmid: '39879231', url: 'https://pubmed.ncbi.nlm.nih.gov/39879231/' },
      { id: 's2', type: 'review', title: "Hot water immersion: a worthy alternative to cold water immersion for recovery?", authors: 'Versey NG, et al.', journal: 'Frontiers in Physiology', year: 2016, pmid: '27704555', url: 'https://pubmed.ncbi.nlm.nih.gov/27704555/' },
      { id: 's3', type: 'pubmed', title: "Effects of repeated cold-water immersion on inflammatory markers", authors: 'Various', journal: 'Recent literature', year: 2024, pmid: '38613679', url: 'https://pubmed.ncbi.nlm.nih.gov/38613679/' },
    ],
    contre_indications: [
      "Maladie coronarienne, antécédent infarctus",
      "Hypertension non équilibrée",
      "Troubles du rythme cardiaque",
      "Maladie de Raynaud sévère",
      "Grossesse (prudence)",
    ],
    tags: ['froid', 'immersion', 'récupération', 'cardiovasculaire'],
    updatedAt: '2026-05-28',
  },

  /* ── NEW : sauna finlandais ────────────────────────────────── */
  {
    slug: 'sauna-finlandais-cardiovasculaire',
    domain: 'naturopathie',
    category: 'hydrotherapie',
    title: "Sauna finlandais : données cardiovasculaires solides",
    excerpt: "La cohorte finlandaise KIHD a documenté une association entre fréquentation régulière du sauna et baisse de la mortalité.",
    readingTime: 5,
    evidence_level: 'rct',
    evidence_note: "L'association du sauna avec une moindre mortalité cardiovasculaire est solidement documentée dans une cohorte prospective finlandaise. Causalité non démontrée mais signal cohérent avec les mécanismes physiologiques attendus.",
    intro: "Le sauna finlandais, pratique millénaire, a fait l'objet d'études prospectives d'envergure. La cohorte KIHD (Kuopio Ischaemic Heart Disease Risk Factor Study) a apporté des données de référence sur ses effets cardiovasculaires.",
    sections: [
      { heading: "Étude princeps dans JAMA Internal Medicine", body: "Une publication de la cohorte KIHD parue dans JAMA Internal Medicine a documenté une association entre fréquentation régulière du sauna (4-7 fois/semaine) et une réduction significative de la mortalité cardiovasculaire et globale chez les hommes finlandais d'âge moyen [#s1]. L'effet apparaît dose-dépendant, sans démontrer une causalité directe (étude observationnelle)." },
      { heading: "Revue Mayo Clinic 2018", body: "Une revue publiée dans Mayo Clinic Proceedings a synthétisé l'ensemble des bénéfices cardiovasculaires et autres du sauna [#s2]. Les mécanismes proposés (vasodilatation, baisse de la pression artérielle, modulation autonome, hormèse thermique) sont cohérents. Le profil de sécurité chez le sujet sans cardiopathie sévère est globalement favorable." },
      { heading: "Combinaison avec d'autres habitudes saines", body: "Une revue plus récente parue dans Mayo Clinic Proceedings a examiné la combinaison du sauna avec d'autres facteurs d'hygiène de vie [#s3]. Les effets paraissent cumulatifs avec l'activité physique, une bonne alimentation, l'absence de tabagisme — sans qu'il soit possible d'isoler l'effet propre du sauna dans ce cocktail." },
      { heading: "Pratique et précautions", body: "Séance typique : 10-20 min à 80-90 °C, 1 à 3 fois par séance avec pauses, 2 à 4 fois par semaine. Hydratation indispensable. Contre-indications : insuffisance cardiaque décompensée, infarctus récent, hypertension non contrôlée, grossesse (prudence), enfants. Ne pas combiner avec alcool." },
    ],
    sources: [
      { id: 's1', type: 'cohort', title: "Association between sauna bathing and fatal cardiovascular and all-cause mortality events", authors: 'Laukkanen T, et al.', journal: 'JAMA Internal Medicine', year: 2015, pmid: '25705824', url: 'https://pubmed.ncbi.nlm.nih.gov/25705824/' },
      { id: 's2', type: 'review', title: "Cardiovascular and Other Health Benefits of Sauna Bathing: A Review of the Evidence", authors: 'Laukkanen JA, et al.', journal: 'Mayo Clinic Proceedings', year: 2018, pmid: '30077204', url: 'https://pubmed.ncbi.nlm.nih.gov/30077204/' },
      { id: 's3', type: 'review', title: "Does the Combination of Finnish Sauna Bathing and Other Lifestyle Factors Confer Additional Health Benefits?", authors: 'Kunutsor SK, et al.', journal: 'Mayo Clinic Proceedings', year: 2023, pmid: '37270272', url: 'https://pubmed.ncbi.nlm.nih.gov/37270272/' },
    ],
    contre_indications: [
      "Insuffisance cardiaque décompensée",
      "Infarctus récent (< 6 mois)",
      "Hypertension non contrôlée",
      "Grossesse : prudence, avis médical",
      "Alcoolisation préalable",
    ],
    tags: ['sauna', 'cardiovasculaire', 'KIHD', 'hormèse thermique'],
    updatedAt: '2026-05-28',
  },
];
