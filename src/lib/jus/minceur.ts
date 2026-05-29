import type { RecetteJus } from '../types';

/**
 * Jus orientés minceur / accompagnement d'une démarche de perte de poids.
 *
 * Important : aucun jus ne fait maigrir à lui seul. Ces recettes sont conçues
 * pour être peu sucrées, riches en eau et en micronutriments, et s'intégrer à
 * une alimentation globale équilibrée et à une activité physique régulière.
 * Elles ne remplacent pas un suivi médical ou nutritionnel en cas d'obésité,
 * de trouble du comportement alimentaire ou de maladie métabolique.
 */
export const JUS_MINCEUR: RecetteJus[] = [
  {
    slug: 'jus-concombre-celeri-citron-menthe',
    category: 'minceur',
    nom: 'Jus concombre, céleri, citron et menthe',
    excerpt:
      "Un jus très peu sucré, riche en eau, idéal pour accompagner une démarche d'allègement.",
    intro:
      "Concombre et céleri-branche sont composés à plus de 90 % d'eau, peu caloriques, et apportent du potassium. Cette formule très désaltérante peut remplacer une boisson sucrée dans une démarche de réduction calorique progressive.",
    ingredients: [
      { item: 'Concombre', quantite: '1 concombre' },
      { item: 'Céleri-branche', quantite: '3 branches' },
      { item: 'Citron', quantite: '½ fruit' },
      { item: 'Feuilles de menthe fraîche', quantite: '6 feuilles' },
      { item: 'Gingembre frais (facultatif)', quantite: '0,5 cm' },
    ],
    preparation: [
      "Laver le concombre et le céleri.",
      "Couper en morceaux compatibles avec l'appareil.",
      "Extraire les jus.",
      "Ajouter le jus de citron pressé et la menthe finement ciselée.",
      "Boire frais, dans l'heure.",
    ],
    benefices: [
      "Boisson hydratante et peu calorique",
      "Apport en potassium et en eau",
      "Tradition : accompagnement d'une démarche minceur",
    ],
    frequence: 'Un verre (250 ml), 4 à 5 fois par semaine, hors des repas.',
    appareil: 'extracteur',
    contre_indications: [
      "Insuffisance rénale, hypertension traitée : avis médical en raison de la teneur en potassium.",
      "Reflux gastrique sévère : le citron peut accentuer l'inconfort.",
    ],
    tradition: 'Hygiénisme + cuisine méditerranéenne.',
    tags: ['concombre', 'celeri', 'minceur', 'drainant'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-pomme-verte-epinards-citron',
    category: 'minceur',
    nom: 'Jus pomme verte, épinards et citron',
    excerpt:
      'Un jus vert à faible index glycémique, riche en chlorophylle, pour le matin.',
    intro:
      "La pomme verte est moins sucrée que la pomme rouge et possède un index glycémique modéré. Associée aux épinards crus et au citron, elle compose un jus vert plutôt équilibré, à privilégier dans une démarche minceur.",
    ingredients: [
      { item: 'Pomme verte (Granny Smith)', quantite: '1 fruit' },
      { item: 'Épinards frais', quantite: '1 belle poignée (≈ 60 g)' },
      { item: 'Concombre', quantite: '½ concombre' },
      { item: 'Citron', quantite: '½ fruit' },
      { item: 'Gingembre frais (facultatif)', quantite: '0,5 cm' },
    ],
    preparation: [
      "Laver tous les ingrédients.",
      "Couper en morceaux.",
      "Extraire en alternant feuilles d'épinards et morceaux fermes (pomme, concombre).",
      "Ajouter le citron et le gingembre.",
      "Boire immédiatement.",
    ],
    benefices: [
      "Faible apport en sucre comparé à un jus de fruits classique",
      "Apport en folates, vitamine C, magnésium",
      "Boisson alcalinisante",
    ],
    frequence: 'Un verre (200 ml), 4 fois par semaine.',
    appareil: 'extracteur',
    contre_indications: [
      "Calculs rénaux à oxalate : les épinards sont à éviter.",
      "Traitement anticoagulant type AVK : la vitamine K des épinards doit rester constante.",
      "Diabète : malgré l'IG modéré, surveiller la glycémie après consommation.",
    ],
    tradition: 'Nutrition orthomoléculaire moderne.',
    tags: ['pomme-verte', 'epinards', 'minceur', 'ig-bas'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-pamplemousse-citron-menthe',
    category: 'minceur',
    nom: 'Jus pamplemousse, citron et menthe',
    excerpt:
      'Un jus matinal légèrement amer, riche en vitamine C, à prendre à distance de certains médicaments.',
    intro:
      "Le pamplemousse rose est traditionnellement associé aux démarches minceur pour sa fraîcheur, son amertume et son apport en vitamine C. ATTENTION : le pamplemousse est connu pour interagir avec de nombreux médicaments via le cytochrome P450 3A4 (statines, certains anti-hypertenseurs, immunosuppresseurs, etc.). En cas de traitement, demander l'avis du médecin avant d'en consommer régulièrement.",
    ingredients: [
      { item: 'Pamplemousse rose', quantite: '1 fruit' },
      { item: 'Citron jaune', quantite: '½ fruit' },
      { item: 'Feuilles de menthe fraîche', quantite: '6 feuilles' },
      { item: "Eau (facultatif, pour adoucir)", quantite: '50 ml' },
    ],
    preparation: [
      "Peler à vif le pamplemousse pour limiter l'amertume.",
      "Extraire le jus du pamplemousse et du citron.",
      "Ajouter la menthe ciselée et l'eau si besoin.",
      "Boire immédiatement, le matin.",
    ],
    benefices: [
      "Apport en vitamine C et en flavonoïdes (naringine)",
      "Boisson tonique au goût amer",
      "Tradition : accompagnement d'un petit-déjeuner léger",
    ],
    frequence:
      'Un verre (200 ml), le matin, 3 à 4 fois par semaine — uniquement en l\'absence de traitements interagissant avec le pamplemousse.',
    appareil: 'extracteur',
    contre_indications: [
      "Interactions médicamenteuses majeures avec le pamplemousse (statines, certains antihypertenseurs, immunosuppresseurs, antiarythmiques, etc.) : avis médical obligatoire.",
      "Reflux gastrique : les agrumes peuvent accentuer l'inconfort.",
      "Diabète : surveiller la glycémie.",
    ],
    tradition: 'Régimes méditerranéens.',
    tags: ['pamplemousse', 'citron', 'minceur', 'matin'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-kale-concombre-pomme-citron',
    category: 'minceur',
    nom: 'Jus chou kale, concombre, pomme et citron',
    excerpt:
      'Un jus vert plus complet, riche en chlorophylle et en vitamine C, peu sucré.',
    intro:
      "Le chou kale est riche en vitamine C, en vitamine K et en composés soufrés. Associé au concombre et à une demi-pomme, il forme un jus vert classique de la nutrition contemporaine. À cause des goitrogènes du kale cru, on évite les consommations très répétées chez les personnes à thyroïde sensible.",
    ingredients: [
      { item: 'Feuilles de chou kale (sans la tige centrale)', quantite: '4 belles feuilles' },
      { item: 'Concombre', quantite: '½ concombre' },
      { item: 'Pomme verte', quantite: '½ fruit' },
      { item: 'Citron', quantite: '½ fruit' },
      { item: 'Gingembre frais (facultatif)', quantite: '0,5 cm' },
    ],
    preparation: [
      "Laver soigneusement le chou kale et les autres légumes.",
      "Retirer la tige centrale du kale.",
      "Couper en morceaux.",
      "Extraire en alternant feuilles et morceaux fermes.",
      "Ajouter le jus de citron, boire immédiatement.",
    ],
    benefices: [
      "Apport en vitamine C, vitamine K, composés soufrés",
      "Boisson alcalinisante et peu sucrée",
      "Tradition : accompagnement d'une démarche minceur 'verte'",
    ],
    frequence: 'Un verre (200 ml), 3 fois par semaine, pas tous les jours.',
    appareil: 'extracteur',
    contre_indications: [
      "Hypothyroïdie ou traitement antithyroïdien : le chou kale cru contient des goitrogènes, demander un avis médical avant les cures régulières.",
      "Traitement anticoagulant type AVK : la vitamine K doit rester constante.",
      "Calculs rénaux à oxalate : prudence.",
      "Diabète : la part de pomme reste modeste, mais surveiller.",
    ],
    tradition: 'Nutrition contemporaine nord-américaine.',
    tags: ['kale', 'concombre', 'minceur', 'jus-vert'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-ananas-celeri-gingembre-minceur',
    category: 'minceur',
    nom: 'Jus ananas, céleri et gingembre',
    excerpt:
      'Un jus tonique associant la bromélaïne de l\'ananas à la fraîcheur du céleri.',
    intro:
      "L'ananas frais contient de la bromélaïne, enzyme protéolytique traditionnellement associée au confort digestif. Allié au céleri-branche (très peu calorique) et au gingembre, il forme un jus tonique apprécié dans les démarches minceur — à condition de garder une portion raisonnable d'ananas pour limiter l'apport en sucres.",
    ingredients: [
      { item: 'Ananas frais', quantite: '150 g de chair' },
      { item: 'Céleri-branche', quantite: '3 branches' },
      { item: 'Concombre', quantite: '½ concombre' },
      { item: 'Gingembre frais', quantite: '1 cm' },
      { item: 'Citron vert', quantite: '¼ fruit' },
    ],
    preparation: [
      "Peler et couper l'ananas en morceaux.",
      "Laver et couper le céleri et le concombre.",
      "Extraire le jus en finissant par le gingembre.",
      "Ajouter le jus de citron vert, mélanger.",
      "Boire immédiatement.",
    ],
    benefices: [
      "Apport en vitamine C, en bromélaïne, en eau",
      "Tradition : confort digestif et démarche d'allègement",
    ],
    frequence: 'Un verre (200 ml), 2 à 3 fois par semaine.',
    appareil: 'extracteur',
    contre_indications: [
      "Diabète : l'ananas est sucré, à limiter et à doser.",
      "Traitement anticoagulant : la bromélaïne peut potentialiser l'effet.",
      "Reflux gastrique : l'ananas et le citron peuvent accentuer l'inconfort.",
    ],
    tradition: 'Régimes méditerranéens et tropicaux.',
    tags: ['ananas', 'celeri', 'gingembre', 'minceur'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-carotte-pomme-celeri-citron',
    category: 'minceur',
    nom: 'Jus carotte, pomme, céleri et citron',
    excerpt:
      'Un jus équilibré entre douceur et fraîcheur, riche en bêta-carotène et en eau.',
    intro:
      "Une formule polyvalente qui associe la douceur de la carotte, la fraîcheur du céleri et du concombre, et la touche acidulée du citron. Plus accessible que les jus très verts, elle convient bien en début de démarche.",
    ingredients: [
      { item: 'Carottes', quantite: '2 moyennes' },
      { item: 'Pomme', quantite: '½ fruit' },
      { item: 'Céleri-branche', quantite: '2 branches' },
      { item: 'Concombre', quantite: '½ concombre' },
      { item: 'Citron', quantite: '½ fruit' },
    ],
    preparation: [
      "Brosser les carottes, laver les autres légumes.",
      "Couper en morceaux.",
      "Extraire le jus.",
      "Ajouter le jus de citron pressé, mélanger.",
      "Boire immédiatement.",
    ],
    benefices: [
      "Apport en bêta-carotène, vitamine C, potassium",
      "Boisson équilibrée, peu calorique pour une démarche progressive",
    ],
    frequence: 'Un verre (250 ml), 4 fois par semaine, hors des repas.',
    appareil: 'extracteur',
    contre_indications: [
      "Diabète : la carotte et la pomme apportent du sucre, à doser.",
      "Hypertension traitée : surveiller, le céleri apporte du potassium.",
    ],
    tradition: 'Naturopathie occidentale.',
    tags: ['carotte', 'celeri', 'minceur', 'polyvalent'],
    updatedAt: '2026-05-29',
  },
];
