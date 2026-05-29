import type { RecetteJus } from '../types';

/**
 * Jus orientés digestion et confort digestif.
 * Ces recettes s'inspirent de la tradition naturopathique (notamment des travaux
 * de Norman Walker pour le jus de chou cru). Elles ne remplacent en aucun cas
 * un avis médical en cas de troubles digestifs persistants (RGO, ulcère, MICI,
 * SII sévère, etc.).
 */
export const JUS_DIGESTION: RecetteJus[] = [
  {
    slug: 'jus-chou-cru-pomme-walker',
    category: 'digestion',
    nom: 'Jus de chou cru et pomme (style Walker)',
    excerpt:
      'Le grand classique de Norman Walker pour le confort de la muqueuse gastrique, adouci à la pomme.',
    intro:
      "Norman Walker recommandait le jus de chou vert cru pour soutenir la muqueuse gastrique et le confort digestif haut. Le chou apporte de la glutamine et des composés soufrés ; la pomme rend le mélange plus agréable. Le jus se consomme rapidement après extraction car les composés actifs s'oxydent vite.",
    ingredients: [
      { item: 'Chou vert cru (frisé ou cabus, bio de préférence)', quantite: '200 g' },
      { item: 'Pomme', quantite: '2 fruits moyens' },
      { item: "Filet de jus de citron (facultatif)", quantite: '1 c. à café' },
    ],
    preparation: [
      "Laver soigneusement le chou et la pomme.",
      "Découper le chou en lanières assez fines pour passer dans l'appareil.",
      "Couper la pomme en quartiers, retirer le trognon.",
      "Extraire le jus en alternant chou et pomme pour fluidifier le passage.",
      "Boire dans les 10 minutes, lentement, à température ambiante.",
    ],
    benefices: [
      'Tradition : confort de la muqueuse gastrique',
      'Apport en vitamine C, vitamine K, composés soufrés',
      'Boisson hydratante et alcalinisante',
    ],
    frequence:
      '100 à 200 ml par jour, en cure de 2 à 3 semaines, plutôt à jeun ou à distance des repas.',
    appareil: 'extracteur',
    walkerReference:
      "Inspirée de Norman Walker, \"Fresh Vegetable and Fruit Juices\" — formule chou cru pour la sphère digestive.",
    contre_indications: [
      "Hypothyroïdie ou traitement antithyroïdien : les Brassicacées crues (chou) contiennent des goitrogènes ; demander un avis médical avant une cure régulière.",
      "Ulcère gastroduodénal actif ou RGO sévère : commencer par de très petites quantités, arrêter en cas d'inconfort.",
      "Diabète : le sucre des pommes compte ; ajuster la part de pomme et surveiller la glycémie.",
    ],
    tradition: 'Naturopathie nord-américaine, école Walker.',
    tags: ['chou', 'pomme', 'estomac', 'walker', 'digestion'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-carotte-fenouil-gingembre',
    category: 'digestion',
    nom: 'Jus carotte, fenouil et gingembre',
    excerpt:
      'Une boisson douce pour les lourdeurs digestives et les ballonnements de fin de repas.',
    intro:
      "Le fenouil est traditionnellement utilisé pour son effet apaisant sur les ballonnements ; la carotte apporte douceur et caroténoïdes ; le gingembre frais soutient la motilité gastrique. Ce jus se boit volontiers en milieu d'après-midi ou avant un repas suspecté de mal passer.",
    ingredients: [
      { item: 'Carottes', quantite: '3 moyennes (≈ 300 g)' },
      { item: 'Bulbe de fenouil', quantite: '½ bulbe (≈ 150 g)' },
      { item: 'Gingembre frais', quantite: '1 cm' },
      { item: 'Pomme (facultatif, pour adoucir)', quantite: '1 fruit' },
    ],
    preparation: [
      "Brosser les carottes, laver le fenouil et la pomme.",
      "Couper les légumes en morceaux compatibles avec l'appareil.",
      "Extraire le jus en finissant par le gingembre.",
      "Mélanger et boire immédiatement.",
    ],
    benefices: [
      'Tradition : apaise les ballonnements et les lourdeurs',
      "Soutient la sensation de digestion plus légère",
      'Apport en bêta-carotène et en eau',
    ],
    frequence: 'Un verre (200 à 250 ml), 3 à 4 fois par semaine.',
    appareil: 'extracteur',
    contre_indications: [
      "Diabète : la carotte et la pomme apportent du sucre rapidement assimilable, ajuster les quantités.",
      "Traitement anticoagulant : le gingembre régulier peut interagir, demander un avis médical.",
      "Calculs biliaires : prudence avec le gingembre à forte dose.",
    ],
    tradition: 'Phytothérapie européenne du fenouil + nutrition orthomoléculaire.',
    tags: ['fenouil', 'gingembre', 'ballonnements', 'digestion'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-aloe-citron-pomme',
    category: 'digestion',
    nom: 'Jus aloe vera, citron et pomme',
    excerpt:
      'Une boisson douce associant gel d\'aloe vera alimentaire, citron et pomme pour le confort gastrique.',
    intro:
      "Le gel d'aloe vera de qualité alimentaire (sans aloïne, mention « jus à boire ») est traditionnellement utilisé pour le confort de la muqueuse digestive. Associé à une petite quantité de citron et de pomme, il devient une boisson agréable à prendre en cure courte.",
    ingredients: [
      { item: "Jus / gel d'aloe vera alimentaire (sans aloïne)", quantite: '30 ml' },
      { item: 'Pomme', quantite: '1 fruit' },
      { item: 'Citron jaune', quantite: '½ fruit' },
      { item: 'Eau de source', quantite: '100 ml' },
    ],
    preparation: [
      "Extraire le jus de la pomme.",
      "Presser le citron.",
      "Mélanger jus de pomme, jus de citron, gel d'aloe et eau.",
      "Bien remuer et boire lentement.",
    ],
    benefices: [
      'Tradition : confort des muqueuses digestives hautes',
      "Boisson hydratante et peu sucrée",
      "Apport en vitamine C",
    ],
    frequence:
      'Un petit verre (150 ml) le matin à jeun, en cure de 2 à 3 semaines maximum, puis pause.',
    appareil: 'extracteur',
    contre_indications: [
      "N'utiliser que de l'aloe vera alimentaire débarrassé de l'aloïne (latex jaune laxatif).",
      "Grossesse, allaitement, enfants : éviter l'aloe vera par voie interne sans avis médical.",
      "Maladies inflammatoires intestinales, occlusion, douleurs abdominales inexpliquées : avis médical préalable.",
      "Diabète : tenir compte du sucre de la pomme.",
    ],
    tradition: 'Usage traditionnel de l\'aloe vera (Ayurvéda, médecine méditerranéenne).',
    tags: ['aloe-vera', 'citron', 'estomac', 'acidite', 'digestion'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-papaye-ananas-menthe',
    category: 'digestion',
    nom: 'Jus papaye, ananas et menthe',
    excerpt:
      'Un duo de fruits riches en enzymes (papaïne, bromélaïne) pour accompagner les repas plus lourds.',
    intro:
      "La papaye contient de la papaïne et l'ananas de la bromélaïne, deux enzymes protéolytiques traditionnellement associées au confort digestif après un repas riche en protéines. Attention : il s'agit d'une boisson sucrée à consommer de façon ponctuelle.",
    ingredients: [
      { item: 'Papaye bien mûre, sans pépins', quantite: '200 g de chair' },
      { item: 'Ananas frais', quantite: '200 g de chair' },
      { item: 'Feuilles de menthe fraîche', quantite: '6 à 8 feuilles' },
      { item: 'Eau ou eau de coco (facultatif)', quantite: '50 ml' },
    ],
    preparation: [
      "Couper la papaye et l'ananas en morceaux.",
      "Extraire le jus en alternant les deux fruits.",
      "Ajouter les feuilles de menthe en fin d'extraction ou mixer la menthe avec un fond d'eau, puis mélanger.",
      "Boire frais, peu après le repas.",
    ],
    benefices: [
      'Tradition : confort digestif après un repas protéiné',
      "Apport en vitamine C et en enzymes végétales",
      'Boisson rafraîchissante',
    ],
    frequence:
      '150 à 200 ml après un repas riche, 1 à 2 fois par semaine. Pas tous les jours en raison du sucre.',
    appareil: 'extracteur',
    contre_indications: [
      "Diabète et résistance à l'insuline : la charge en sucres est élevée, à éviter ou très occasionnel.",
      "Allergie au latex : risque de réaction croisée avec la papaye.",
      "Traitement anticoagulant : la bromélaïne peut potentialiser l'effet, avis médical recommandé.",
      "Grossesse : éviter les fortes consommations de papaye, surtout peu mûre.",
    ],
    tradition: 'Médecines traditionnelles tropicales (Caraïbes, Asie du Sud-Est).',
    tags: ['papaye', 'ananas', 'enzymes', 'digestion'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-carotte-gingembre-curcuma',
    category: 'digestion',
    nom: 'Jus carotte, gingembre et curcuma',
    excerpt:
      "Un jus doré pour soutenir le confort hépato-digestif, à boire avec un peu de gras et de poivre.",
    intro:
      "Carotte, gingembre et curcuma frais forment un trio classique en naturopathie pour soutenir la sphère hépato-biliaire. La curcumine étant peu biodisponible, on l'associe traditionnellement à un peu de poivre noir et à un corps gras (huile d'olive, lait végétal) pour mieux en profiter.",
    ingredients: [
      { item: 'Carottes', quantite: '4 moyennes (≈ 400 g)' },
      { item: 'Gingembre frais', quantite: '1,5 cm' },
      { item: 'Curcuma frais', quantite: '1,5 cm (ou ¼ c. à café en poudre)' },
      { item: 'Citron', quantite: '½ fruit' },
      { item: "Pincée de poivre noir + filet d'huile d'olive (facultatif)", quantite: '1 pincée' },
    ],
    preparation: [
      "Brosser les carottes, le gingembre et le curcuma.",
      "Extraire le jus des carottes, du gingembre et du curcuma.",
      "Presser le citron à part, ajouter au jus.",
      "Mélanger avec la pincée de poivre noir et le filet d'huile (très facultatif).",
      "Boire immédiatement.",
    ],
    benefices: [
      "Tradition : soutien du confort hépato-biliaire",
      'Apport en bêta-carotène, en gingérols et en curcuminoïdes',
      "Boisson chaleureuse en bouche",
    ],
    frequence: 'Un verre (200 ml), 3 fois par semaine, le matin de préférence.',
    appareil: 'extracteur',
    contre_indications: [
      "Calculs biliaires connus, obstruction des voies biliaires : éviter le curcuma et demander un avis médical.",
      "Traitement anticoagulant : gingembre et curcuma peuvent potentialiser l'effet.",
      "Diabète : tenir compte du sucre de la carotte.",
      "Grossesse : éviter les fortes doses de curcuma.",
    ],
    tradition: 'Ayurvéda + naturopathie occidentale.',
    tags: ['carotte', 'curcuma', 'foie', 'digestion'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-pomme-celeri-fenouil',
    category: 'digestion',
    nom: 'Jus pomme, céleri-branche et fenouil',
    excerpt:
      'Une boisson légère pour le confort du transit, peu sucrée, idéale en cure de quelques jours.',
    intro:
      "Le céleri-branche et le fenouil sont riches en eau et en fibres ; associés à une pomme, ils forment un jus très digeste qui peut aider à retrouver un confort de transit. Ce jus ne remplace pas une alimentation riche en fibres et une bonne hydratation au quotidien.",
    ingredients: [
      { item: 'Céleri-branche', quantite: '3 branches' },
      { item: 'Bulbe de fenouil', quantite: '½ bulbe' },
      { item: 'Pomme verte', quantite: '1 fruit' },
      { item: 'Concombre (facultatif)', quantite: '½ concombre' },
    ],
    preparation: [
      "Laver soigneusement tous les légumes.",
      "Couper en morceaux compatibles avec l'appareil.",
      "Extraire le jus.",
      "Mélanger et boire à jeun ou en début de matinée.",
    ],
    benefices: [
      'Tradition : confort du transit, boisson hydratante',
      "Apport en eau, potassium, vitamine C",
      "Goût frais, peu sucré",
    ],
    frequence:
      'Un verre (200 à 250 ml) le matin, 4 à 5 jours d\'affilée en cure courte, puis pause.',
    appareil: 'extracteur',
    contre_indications: [
      "Hypertension artérielle traitée : la teneur en potassium du céleri peut interférer ; surveiller.",
      "Diabète : préférer une pomme verte et limiter la quantité.",
      "Insuffisance rénale : avis médical avant les cures de jus de légumes.",
    ],
    tradition: 'Cuisine méditerranéenne + hygiénisme.',
    tags: ['celeri', 'fenouil', 'pomme', 'transit', 'digestion'],
    updatedAt: '2026-05-29',
  },
];
