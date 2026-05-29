import type { RecetteJus } from '../types';

/**
 * Jus orientés peau et cheveux.
 * Ces recettes apportent des micronutriments (caroténoïdes, vitamine C, silice
 * végétale, chlorophylle) traditionnellement associés au teint et à la qualité
 * des phanères. Elles ne traitent ni l'acné, ni l'eczéma, ni l'alopécie
 * pathologique : un avis dermatologique reste indispensable en cas de problème.
 */
export const JUS_PEAU_CHEVEUX: RecetteJus[] = [
  {
    slug: 'jus-carotte-concombre-pomme',
    category: 'peau-cheveux',
    nom: 'Jus carotte, concombre et pomme',
    excerpt:
      'Un classique riche en caroténoïdes et en eau, agréable au quotidien pour soutenir le teint.',
    intro:
      "La carotte est l'un des aliments les plus riches en bêta-carotène, précurseur de la vitamine A, traditionnellement associé au teint hâlé et à la santé cutanée. Le concombre apporte de l'eau et de la silice ; la pomme adoucit l'ensemble.",
    ingredients: [
      { item: 'Carottes', quantite: '3 moyennes (≈ 300 g)' },
      { item: 'Concombre', quantite: '½ concombre' },
      { item: 'Pomme', quantite: '1 fruit' },
      { item: 'Citron (facultatif)', quantite: '¼ fruit' },
    ],
    preparation: [
      "Brosser les carottes et le concombre.",
      "Couper en morceaux compatibles avec l'appareil.",
      "Extraire le jus en alternant les ingrédients.",
      "Boire immédiatement.",
    ],
    benefices: [
      'Apport en bêta-carotène (précurseur de vitamine A)',
      "Boisson hydratante riche en eau et en potassium",
      'Tradition : soutien du teint',
    ],
    frequence: 'Un verre (200 à 250 ml), 4 à 5 fois par semaine.',
    appareil: 'extracteur',
    contre_indications: [
      "Diabète : la carotte et la pomme apportent du sucre, ajuster la part.",
      "Caroténodermie : une consommation très excessive de carotte peut colorer la peau en jaune-orangé (effet réversible et bénin).",
    ],
    tradition: 'Naturopathie occidentale.',
    tags: ['carotte', 'concombre', 'peau', 'beta-carotene'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-betterave-carotte-orange',
    category: 'peau-cheveux',
    nom: 'Jus betterave, carotte et orange',
    excerpt:
      "Un jus coloré qui apporte vitamine C, bêta-carotène et bétalaïnes pour un coup d'éclat.",
    intro:
      "La betterave crue est riche en bétalaïnes (pigments antioxydants) ; l'orange apporte la vitamine C ; la carotte le bêta-carotène. Un trio coloré, plus sucré qu'un jus vert, à consommer plutôt en début de journée.",
    ingredients: [
      { item: 'Betterave crue', quantite: '½ betterave moyenne (≈ 100 g)' },
      { item: 'Carottes', quantite: '2 moyennes' },
      { item: 'Orange', quantite: '1 fruit' },
      { item: 'Gingembre frais (facultatif)', quantite: '1 cm' },
    ],
    preparation: [
      "Brosser la betterave et les carottes.",
      "Peler l'orange en laissant le ziste blanc.",
      "Extraire les jus en finissant par le gingembre.",
      "Mélanger et boire immédiatement.",
    ],
    benefices: [
      "Apport en vitamine C, bêta-carotène, bétalaïnes",
      'Tradition : soutien de l\'éclat du teint',
      "Boisson tonique et colorée",
    ],
    frequence: 'Un verre (200 ml), 2 à 3 fois par semaine, le matin.',
    appareil: 'extracteur',
    contre_indications: [
      "Diabète : la charge en sucres est élevée (betterave + carotte + orange).",
      "Calculs rénaux à oxalate : la betterave est riche en oxalates, à éviter.",
      "Coloration rose des urines/selles (béturie) : phénomène bénin, sans gravité.",
      "Traitement antihypertenseur : les nitrates de la betterave peuvent renforcer l'effet hypotenseur.",
    ],
    tradition: 'Tradition européenne du jus de betterave + nutrition orthomoléculaire.',
    tags: ['betterave', 'orange', 'peau', 'eclat', 'vitamine-c'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-concombre-pomme-menthe',
    category: 'peau-cheveux',
    nom: 'Jus concombre, pomme verte et menthe',
    excerpt:
      'Un jus très désaltérant, peu sucré, qui contribue à l\'hydratation quotidienne.',
    intro:
      "Le concombre est composé à plus de 95 % d'eau et apporte un peu de silice. Associé à une pomme verte et à de la menthe, il devient une boisson légère, idéale les jours chauds ou en accompagnement d'un repas.",
    ingredients: [
      { item: 'Concombre', quantite: '1 concombre' },
      { item: 'Pomme verte', quantite: '1 fruit' },
      { item: 'Feuilles de menthe fraîche', quantite: '8 feuilles' },
      { item: 'Citron vert (facultatif)', quantite: '¼ fruit' },
    ],
    preparation: [
      "Laver le concombre et la pomme.",
      "Couper en morceaux.",
      "Extraire le jus en alternant concombre et pomme.",
      "Ajouter la menthe en fin d'extraction (ou la mixer à part avec un peu de jus puis filtrer).",
      "Servir frais.",
    ],
    benefices: [
      "Boisson très hydratante",
      "Apport en eau, en silice végétale, en vitamine C",
      "Tradition : sensation de fraîcheur cutanée",
    ],
    frequence: 'Un verre (200 à 300 ml), jusqu\'à 5 fois par semaine.',
    appareil: 'extracteur',
    contre_indications: [
      "Diabète : préférer une pomme verte peu sucrée.",
      "Allergie à la famille des Cucurbitacées : éviter le concombre.",
    ],
    tradition: 'Cuisine méditerranéenne et orientale.',
    tags: ['concombre', 'menthe', 'hydratation', 'peau'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-ortie-pomme-version-douce',
    category: 'peau-cheveux',
    nom: 'Jus d\'ortie fraîche et pomme (version douce)',
    excerpt:
      "Une recette douce à base d'ortie fraîche, traditionnellement associée à la silice et à la vitalité des cheveux et des ongles.",
    intro:
      "L'ortie piquante (Urtica dioica) est riche en silice, en chlorophylle, en minéraux et en vitamine C. La tradition européenne lui attribue un effet reminéralisant et soutenant pour les cheveux et les ongles. Dans cette version douce, on en utilise une petite quantité, ébouillantée pour neutraliser le pouvoir urticant, puis mixée avec de la pomme et filtrée.",
    ingredients: [
      { item: 'Feuilles d\'ortie fraîches (jeunes pousses, avec gants)', quantite: '1 belle poignée (≈ 20 g)' },
      { item: 'Pomme', quantite: '2 fruits' },
      { item: 'Citron', quantite: '½ fruit' },
      { item: "Eau de source", quantite: '150 ml' },
    ],
    preparation: [
      "Avec des gants, cueillir ou rincer les jeunes pousses d'ortie.",
      "Verser de l'eau chaude (non bouillante) sur les feuilles pendant 30 secondes pour neutraliser le pouvoir urticant, puis égoutter.",
      "Extraire le jus des pommes au juicer.",
      "Mixer le jus de pomme, les feuilles d'ortie, le citron et l'eau au blender, puis filtrer finement.",
      "Boire immédiatement.",
    ],
    benefices: [
      "Apport en silice, fer non héminique, vitamine C",
      "Tradition : soutien des cheveux, ongles et de la vitalité générale",
      "Boisson reminéralisante",
    ],
    frequence:
      'Un petit verre (150 ml), 3 fois par semaine, en cure de 3 semaines, puis pause.',
    appareil: 'les-deux',
    contre_indications: [
      "Œdèmes liés à une insuffisance cardiaque ou rénale : éviter sans avis médical.",
      "Traitement antihypertenseur, diurétique ou anticoagulant : possibles interactions, demander un avis.",
      "Grossesse : préférer s'abstenir sauf avis professionnel.",
      "Cueillette : éviter les bords de route, les zones traitées ou polluées.",
    ],
    tradition: 'Phytothérapie européenne (Hildegarde de Bingen, Kneipp, Mességué).',
    tags: ['ortie', 'silice', 'cheveux', 'ongles'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-celeri-epinards-pomme',
    category: 'peau-cheveux',
    nom: 'Jus céleri, épinards et pomme',
    excerpt:
      'Un jus vert riche en chlorophylle, en magnésium et en folates, peu sucré.',
    intro:
      "Les épinards crus apportent de la chlorophylle, des folates et un peu de fer non héminique ; le céleri-branche hydrate ; la pomme adoucit. Un jus vert d'entrée de gamme, plus accessible qu'une formule très verte.",
    ingredients: [
      { item: 'Épinards frais', quantite: '1 belle poignée (≈ 60 g)' },
      { item: 'Céleri-branche', quantite: '2 branches' },
      { item: 'Pomme', quantite: '1 fruit' },
      { item: 'Citron', quantite: '½ fruit' },
    ],
    preparation: [
      "Laver soigneusement les épinards et le céleri.",
      "Couper en morceaux compatibles avec l'appareil.",
      "Extraire en alternant les feuilles (épinards) et les ingrédients plus fermes (céleri, pomme).",
      "Ajouter le jus de citron pour limiter l'oxydation.",
      "Boire immédiatement.",
    ],
    benefices: [
      "Apport en chlorophylle, folates, magnésium, vitamine K",
      "Boisson alcalinisante et peu sucrée",
      "Tradition : soutien de l'éclat cutané",
    ],
    frequence: 'Un verre (200 ml), 3 à 4 fois par semaine.',
    appareil: 'extracteur',
    contre_indications: [
      "Calculs rénaux à oxalate : les épinards sont très riches en oxalates, à éviter.",
      "Traitement anticoagulant type AVK : la vitamine K des épinards doit rester constante ; demander un avis médical.",
      "Insuffisance rénale : avis médical avant les cures de jus de légumes.",
    ],
    tradition: 'Nutrition orthomoléculaire et hygiénisme.',
    tags: ['epinards', 'celeri', 'chlorophylle', 'peau'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-persil-carotte-pomme',
    category: 'peau-cheveux',
    nom: 'Jus persil, carotte et pomme',
    excerpt:
      'Un jus tonique riche en vitamine C et en bêta-carotène, à utiliser en petite quantité.',
    intro:
      "Le persil plat frais est l'une des sources végétales les plus concentrées en vitamine C et en chlorophylle. Associé à la carotte et à la pomme, il devient un jus tonique soutenant le teint, à consommer en quantité modérée car le persil peut être très actif.",
    ingredients: [
      { item: 'Persil plat frais', quantite: '1 petit bouquet (≈ 25 g)' },
      { item: 'Carottes', quantite: '3 moyennes' },
      { item: 'Pomme', quantite: '1 fruit' },
      { item: 'Citron', quantite: '½ fruit' },
    ],
    preparation: [
      "Laver soigneusement le persil et les autres ingrédients.",
      "Tasser le persil entre deux morceaux de carotte ou de pomme pour faciliter l'extraction.",
      "Extraire le jus.",
      "Ajouter le jus de citron et boire immédiatement.",
    ],
    benefices: [
      "Apport en vitamine C, vitamine K, bêta-carotène",
      "Tradition : soutien du teint et de l'éclat",
      "Boisson tonique",
    ],
    frequence:
      'Un petit verre (150 ml), 2 à 3 fois par semaine, en évitant les cures prolongées.',
    appareil: 'extracteur',
    contre_indications: [
      "Grossesse : éviter les fortes consommations de persil (effet utérotonique traditionnellement rapporté).",
      "Insuffisance rénale, traitement diurétique : avis médical.",
      "Traitement anticoagulant type AVK : la vitamine K du persil peut interférer, surveiller.",
      "Diabète : tenir compte du sucre de la carotte et de la pomme.",
    ],
    tradition: 'Phytothérapie européenne, cuisine méditerranéenne.',
    tags: ['persil', 'carotte', 'teint', 'vitamine-c'],
    updatedAt: '2026-05-29',
  },
];
