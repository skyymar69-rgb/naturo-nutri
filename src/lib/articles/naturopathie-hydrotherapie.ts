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
];
