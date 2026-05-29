import type { RecetteJus } from '../types';

/**
 * Jus orientés sport : pré-effort, post-effort, récupération.
 *
 * Important : ces recettes complètent — et ne remplacent pas — une alimentation
 * adaptée à la pratique sportive (apports glucidiques, protéiques, hydratation,
 * électrolytes). Pour les sportifs en compétition, certaines recommandations
 * (nitrates de la betterave, cerises griottes) sont issues d'études cliniques,
 * mais doivent être adaptées au niveau, à la sensibilité individuelle et à la
 * réglementation antidopage applicable. En cas de pathologie ou de traitement,
 * demander l'avis d'un médecin du sport.
 */
export const JUS_SPORT: RecetteJus[] = [
  {
    slug: 'jus-betterave-pre-effort',
    category: 'sport',
    nom: 'Jus de betterave pré-effort',
    excerpt:
      "Pour le pré-effort : un jus riche en nitrates inorganiques, étudié pour l'endurance.",
    intro:
      "Les nitrates inorganiques de la betterave, transformés en oxyde nitrique dans l'organisme, ont fait l'objet de nombreuses études chez les sportifs d'endurance. Une consommation 2 à 3 heures avant l'effort peut, selon plusieurs essais cliniques, améliorer l'économie de course ou la performance en endurance sous-maximale. L'effet est variable selon les individus, l'entraînement et la dose. À tester en entraînement avant toute compétition.",
    ingredients: [
      { item: 'Betterave crue', quantite: '1 betterave moyenne (≈ 200 g)' },
      { item: 'Pomme', quantite: '1 fruit' },
      { item: 'Citron', quantite: '½ fruit' },
      { item: 'Gingembre frais (facultatif)', quantite: '1 cm' },
    ],
    preparation: [
      "Brosser la betterave et la pomme.",
      "Couper en morceaux.",
      "Extraire le jus en alternant betterave et pomme.",
      "Ajouter le citron pressé.",
      "Boire 2 à 3 heures avant l'effort.",
    ],
    benefices: [
      "Tradition + données cliniques : apport en nitrates inorganiques, soutien de l'endurance",
      "Apport en bétalaïnes, vitamine C, folates",
      "Boisson tonique",
    ],
    frequence:
      'Avant un entraînement long ou une compétition d\'endurance ; 1 à 3 fois par semaine maximum.',
    appareil: 'extracteur',
    contre_indications: [
      "Hypertension traitée : les nitrates peuvent renforcer l'effet hypotenseur des médicaments, demander un avis médical.",
      "Calculs rénaux à oxalate : la betterave est riche en oxalates, à éviter.",
      "Diabète : tenir compte du sucre de la betterave et de la pomme.",
      "Coloration rose des urines/selles : phénomène bénin (béturie).",
      "Toujours tester la formule à l'entraînement avant une compétition.",
    ],
    tradition:
      "Médecine sportive contemporaine — études sur le jus de betterave et la performance d'endurance (Bailey et al., Larsen et al., Wylie et al., diverses publications 2009-2020).",
    tags: ['betterave', 'nitrates', 'pre-effort', 'endurance'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-cerises-griottes-post-effort',
    category: 'sport',
    nom: 'Jus de cerises griottes (Montmorency) post-effort',
    excerpt:
      "Pour le post-effort : un jus de cerises acides, étudié pour son rôle dans la récupération musculaire.",
    intro:
      "Le jus de cerises griottes (variété Montmorency) a fait l'objet de plusieurs études cliniques chez le sportif : ses anthocyanes et son profil polyphénolique sont associés à une réduction des marqueurs d'inflammation et de douleur musculaire après un effort intense (course en descente, marathon, musculation excentrique). L'effet n'est pas systématique et dépend du protocole utilisé. Il s'utilise en complément d'une bonne récupération (sommeil, hydratation, alimentation).",
    ingredients: [
      { item: 'Cerises griottes fraîches dénoyautées (variété Montmorency idéalement) ou jus pur du commerce', quantite: '250 g de fruits frais OU 30 ml de concentré pur reconstitué dans 150 ml d\'eau' },
      { item: 'Eau de source', quantite: '100 ml (si fruits frais)' },
      { item: 'Citron (facultatif)', quantite: '¼ fruit' },
    ],
    preparation: [
      "Avec des cerises fraîches : dénoyauter, extraire le jus à l'extracteur, allonger d'un peu d'eau.",
      "Avec un concentré de jus de cerise griotte du commerce : reconstituer selon les indications du fabricant.",
      "Boire dans les heures qui suivent un effort intense, ou la veille au soir d'une séance excentrique.",
    ],
    benefices: [
      "Études cliniques : réduction des marqueurs de douleur et d'inflammation post-effort dans certaines conditions",
      "Apport en anthocyanes, vitamine C, mélatonine en petite quantité",
      "Tradition : soutien de la récupération musculaire",
    ],
    frequence:
      'Après une séance intense ou en cure de quelques jours autour d\'une compétition (protocole type : 2 fois par jour pendant 4 à 5 jours).',
    appareil: 'extracteur',
    contre_indications: [
      "Diabète : la teneur en sucres est élevée, surveiller la glycémie ou diluer.",
      "Traitement anticoagulant : avis médical en cas de consommation régulière.",
      "Allergie connue aux fruits rouges.",
      "Les études portent sur la variété Montmorency : les cerises douces n'ont pas le même profil.",
    ],
    tradition:
      "Médecine sportive contemporaine — études sur Montmorency tart cherry juice (Howatson et al. 2010, Bell et al. 2014-2016, Connolly et al., entre autres).",
    tags: ['cerises', 'griottes', 'montmorency', 'recuperation', 'post-effort'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-pasteque-recuperation',
    category: 'sport',
    nom: 'Jus de pastèque (récupération et hydratation)',
    excerpt:
      "Pour le post-effort : une boisson très hydratante, source naturelle de L-citrulline.",
    intro:
      "La pastèque est composée à plus de 90 % d'eau et contient naturellement de la L-citrulline, un acide aminé étudié pour la circulation et la récupération musculaire. Quelques travaux suggèrent une diminution des courbatures après effort avec une consommation de jus de pastèque. C'est aussi une excellente boisson de réhydratation par temps chaud.",
    ingredients: [
      { item: 'Pastèque bien mûre (avec une partie de la peau blanche pour la citrulline)', quantite: '400 g de chair' },
      { item: 'Citron vert', quantite: '½ fruit' },
      { item: 'Pincée de sel (facultatif, électrolytes)', quantite: '1 pincée' },
      { item: 'Feuilles de menthe fraîche (facultatif)', quantite: '6 feuilles' },
    ],
    preparation: [
      "Couper la pastèque en morceaux, en conservant un peu de partie blanche (riche en citrulline).",
      "Extraire le jus.",
      "Ajouter le jus de citron vert, la pincée de sel et la menthe.",
      "Boire frais dans l'heure suivant l'effort.",
    ],
    benefices: [
      "Boisson très hydratante",
      "Apport en L-citrulline, lycopène, potassium",
      "Tradition + données cliniques : soutien de la récupération et de l'hydratation",
    ],
    frequence:
      'Après les efforts longs ou par temps chaud, jusqu\'à plusieurs fois par semaine en saison.',
    appareil: 'extracteur',
    contre_indications: [
      "Diabète : la pastèque a un index glycémique élevé, à doser et à associer à un en-cas protéiné si besoin.",
      "Insuffisance rénale : avis médical avant les boissons riches en potassium.",
      "Régime hyposodé strict : omettre la pincée de sel.",
    ],
    tradition:
      "Médecine sportive contemporaine — études sur le jus de pastèque et la récupération (Tarazona-Díaz et al., Martínez-Sánchez et al.).",
    tags: ['pasteque', 'citrulline', 'recuperation', 'hydratation'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-orange-curcuma-poivre',
    category: 'sport',
    nom: 'Jus orange, curcuma et poivre noir',
    excerpt:
      'Un jus matinal pour soutenir le confort articulaire et la récupération.',
    intro:
      "L'association curcuma + poivre noir améliore la biodisponibilité de la curcumine. Mélangée à du jus d'orange frais et à un filet d'huile d'olive, elle donne une boisson tonique souvent appréciée en récupération ou en accompagnement d'une activité physique régulière.",
    ingredients: [
      { item: 'Oranges', quantite: '2 fruits' },
      { item: 'Curcuma frais', quantite: '1,5 cm (ou ¼ c. à café en poudre)' },
      { item: 'Pincée de poivre noir fraîchement moulu', quantite: '1 pincée' },
      { item: "Filet d'huile d'olive vierge (facultatif, biodisponibilité)", quantite: '½ c. à café' },
      { item: 'Citron (facultatif)', quantite: '¼ fruit' },
    ],
    preparation: [
      "Presser les oranges ou les passer à l'extracteur.",
      "Extraire le jus de curcuma frais (ou diluer la poudre).",
      "Mélanger jus d'orange, jus de curcuma, poivre noir et huile d'olive.",
      "Boire immédiatement, le matin ou après une séance.",
    ],
    benefices: [
      "Apport en vitamine C, flavonoïdes, curcuminoïdes",
      "Tradition + données expérimentales : soutien du confort articulaire et anti-inflammatoire léger",
    ],
    frequence: 'Un verre (200 ml), 3 à 4 fois par semaine.',
    appareil: 'extracteur',
    contre_indications: [
      "Calculs biliaires, obstruction des voies biliaires : éviter le curcuma sans avis médical.",
      "Traitement anticoagulant : le curcuma peut potentialiser l'effet, avis médical.",
      "Diabète : l'orange apporte du sucre, à doser.",
      "Reflux gastrique : les agrumes peuvent accentuer l'inconfort.",
    ],
    tradition: 'Ayurvéda + médecine sportive contemporaine.',
    tags: ['orange', 'curcuma', 'articulations', 'sport'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'smoothie-banane-epinards-amande-post-effort',
    category: 'sport',
    nom: 'Smoothie banane, épinards et amande post-effort',
    excerpt:
      "Pour le post-effort : un smoothie complet apportant glucides, un peu de protéines et des minéraux.",
    intro:
      "Ce n'est pas un jus à l'extracteur mais un smoothie au blender, plus adapté qu'un jus pur pour la fenêtre post-effort car il conserve les fibres et apporte des glucides (banane), un peu de protéines (lait d'amande, purée d'amande) et du potassium / magnésium. Idéal dans les 30 à 60 minutes suivant une séance de musculation ou d'endurance.",
    ingredients: [
      { item: 'Banane mûre', quantite: '1 fruit' },
      { item: 'Épinards frais', quantite: '1 petite poignée (≈ 30 g)' },
      { item: 'Purée d\'amande complète', quantite: '1 c. à soupe' },
      { item: "Boisson végétale d'amande non sucrée", quantite: '250 ml' },
      { item: 'Cacao cru en poudre (facultatif)', quantite: '1 c. à café' },
      { item: 'Cannelle (facultatif)', quantite: '1 pincée' },
    ],
    preparation: [
      "Peler la banane.",
      "Mettre tous les ingrédients dans le blender.",
      "Mixer 30 à 60 secondes jusqu'à obtenir une texture lisse.",
      "Boire dans l'heure suivant l'effort.",
    ],
    benefices: [
      "Apport en glucides (banane), un peu de protéines végétales, magnésium, potassium",
      "Boisson rassasiante adaptée à la fenêtre de récupération",
    ],
    frequence:
      'Après une séance d\'endurance, de musculation ou un entraînement intense, jusqu\'à 3 à 5 fois par semaine selon le volume sportif.',
    appareil: 'extracteur',
    contre_indications: [
      "Allergie aux fruits à coque : remplacer la purée et le lait d'amande par une autre source (avoine, riz, soja selon tolérance).",
      "Diabète : la banane apporte des glucides rapides, à intégrer dans le bilan glucidique de la journée.",
      "Insuffisance rénale : la banane est riche en potassium, avis médical.",
      "Calculs rénaux à oxalate : les épinards sont à éviter.",
    ],
    tradition: 'Nutrition sportive contemporaine.',
    tags: ['banane', 'smoothie', 'post-effort', 'recuperation'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-ananas-celeri-gingembre-recuperation',
    category: 'sport',
    nom: 'Jus ananas, céleri et gingembre (récupération)',
    excerpt:
      'Pour la récupération : un jus tonique alliant bromélaïne et gingembre.',
    intro:
      "L'ananas frais apporte de la bromélaïne, traditionnellement associée au confort articulaire et à la récupération après les efforts répétés. Le céleri-branche hydrate et apporte du potassium ; le gingembre est traditionnellement utilisé pour le confort musculaire.",
    ingredients: [
      { item: 'Ananas frais', quantite: '200 g de chair' },
      { item: 'Céleri-branche', quantite: '2 branches' },
      { item: 'Gingembre frais', quantite: '1,5 cm' },
      { item: 'Citron vert', quantite: '½ fruit' },
      { item: 'Eau de coco (facultatif, électrolytes)', quantite: '100 ml' },
    ],
    preparation: [
      "Peler l'ananas, laver le céleri.",
      "Couper en morceaux.",
      "Extraire le jus en finissant par le gingembre.",
      "Ajouter le citron vert et éventuellement l'eau de coco.",
      "Boire dans l'heure suivant l'effort.",
    ],
    benefices: [
      "Apport en vitamine C, bromélaïne, potassium",
      "Tradition : confort articulaire et musculaire post-effort",
      "Boisson hydratante et tonique",
    ],
    frequence: 'Après les séances intenses, 2 à 3 fois par semaine.',
    appareil: 'extracteur',
    contre_indications: [
      "Diabète : l'ananas et l'eau de coco apportent des sucres, à doser.",
      "Traitement anticoagulant : la bromélaïne et le gingembre peuvent potentialiser l'effet.",
      "Insuffisance rénale : la teneur en potassium impose un avis médical.",
    ],
    tradition: 'Médecines tropicales + nutrition sportive contemporaine.',
    tags: ['ananas', 'gingembre', 'recuperation', 'post-effort'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-carotte-betterave-gingembre-pre-seance',
    category: 'sport',
    nom: 'Jus carotte, betterave et gingembre (énergie pré-séance)',
    excerpt:
      "Pour le pré-effort court : un jus tonique riche en sucres naturels, nitrates et bêta-carotène.",
    intro:
      "Variante plus douce du jus de betterave pur, cette formule combine carotte, betterave et gingembre pour un effet à la fois énergisant (sucres rapides, nitrates) et tonique (gingembre). À privilégier 60 à 90 minutes avant une séance courte à modérée, pour fournir un peu de glucides facilement disponibles.",
    ingredients: [
      { item: 'Carottes', quantite: '2 moyennes' },
      { item: 'Betterave crue', quantite: '½ betterave (≈ 100 g)' },
      { item: 'Pomme', quantite: '1 fruit' },
      { item: 'Gingembre frais', quantite: '1 cm' },
      { item: 'Citron', quantite: '¼ fruit' },
    ],
    preparation: [
      "Brosser carottes et betterave, laver la pomme.",
      "Couper en morceaux.",
      "Extraire le jus en alternant les ingrédients.",
      "Ajouter le citron pressé, mélanger.",
      "Boire 60 à 90 minutes avant l'effort.",
    ],
    benefices: [
      "Apport rapide en glucides naturels avant la séance",
      "Tradition + données cliniques : nitrates de la betterave",
      "Boisson tonique",
    ],
    frequence:
      'Avant les séances clés, 1 à 3 fois par semaine. Toujours tester à l\'entraînement avant une compétition.',
    appareil: 'extracteur',
    contre_indications: [
      "Diabète : la charge en sucres (carotte + betterave + pomme) est notable, à doser.",
      "Hypertension traitée : les nitrates peuvent renforcer l'hypotension, avis médical.",
      "Calculs rénaux à oxalate : la betterave est à éviter.",
      "Coloration rose des urines/selles : phénomène bénin.",
    ],
    tradition: 'Naturopathie sportive + données cliniques sur la betterave.',
    tags: ['betterave', 'carotte', 'pre-effort', 'energie'],
    updatedAt: '2026-05-29',
  },
];
