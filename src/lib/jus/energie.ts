import type { RecetteJus } from '../types';

/**
 * Jus de vitalité — formules d\'énergie quotidienne et de préparation
 * à l\'effort. Ces recettes sont conçues pour apporter glucides naturels,
 * vitamines, nitrates végétaux et phytonutriments.
 *
 * « Énergie » désigne ici un soutien général de la vitalité, et non un
 * effet stimulant comparable à celui de la caféine ou des compléments
 * énergisants industriels.
 */
export const JUS_ENERGIE: RecetteJus[] = [
  {
    slug: 'jus-gingembre-pomme-citron-matin',
    category: 'energie',
    nom: 'Gingembre + pomme + citron — réveil tonique',
    excerpt:
      'Un petit jus matinal vif et frais, qui réchauffe doucement et réveille la digestion.',
    intro:
      'Cette combinaison est l\'un des « réveils » les plus simples et les plus efficaces des cures de jus. Le gingembre apporte sa chaleur, la pomme sa douceur, le citron sa note acide qui dynamise. Très adapté aux personnes au tempérament lymphatique ou frileuses.',
    ingredients: [
      { item: 'Pommes bio acidulées', quantite: '300 g (≈ 2 pommes)' },
      { item: 'Gingembre frais bio', quantite: '20 g (≈ 1 belle phalange)' },
      { item: 'Citron jaune bio (jus)', quantite: '½ citron' },
    ],
    preparation: [
      'Brosser le gingembre, ne pas l\'éplucher.',
      'Couper la pomme en quartiers.',
      'Extraire d\'abord le gingembre, puis les pommes.',
      'Ajouter le jus de citron pressé.',
      'Boire immédiatement, le matin à jeun, en 1 prise.',
    ],
    benefices: [
      'Gingérols traditionnellement associés à un soutien digestif et circulatoire.',
      'Vitamine C, flavonoïdes et un peu de potassium.',
      'Réchauffement doux de l\'organisme.',
      'Bonne palatabilité, idéal pour démarrer une cure de jus.',
    ],
    frequence:
      '1 verre de 200 ml par jour, le matin, en cure de 21 jours ou en habitude quotidienne.',
    appareil: 'extracteur',
    contre_indications: [
      'Traitement anticoagulant ou antiagrégant : prudence avec le gingembre à forte dose.',
      'Lithiase biliaire : avis médical.',
      'Reflux : adapter la part de citron.',
      'Diabète : modérer la pomme.',
    ],
    tradition:
      'Inspiré des préparations matinales de l\'Ayurveda et des cures naturopathiques modernes.',
    tags: ['gingembre', 'pomme', 'citron', 'matin', 'énergie'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-betterave-orange-gingembre-sport',
    category: 'energie',
    nom: 'Betterave + orange + gingembre — avant l\'effort',
    excerpt:
      'Un jus rouge intense, riche en nitrates naturels de la betterave, traditionnellement consommé 1 à 2 h avant un effort d\'endurance.',
    intro:
      'Plusieurs travaux récents (recherches sur les nitrates alimentaires et la performance aérobie) ont relancé l\'intérêt pour le jus de betterave en sport d\'endurance. Les bénéfices observés sont modestes mais documentés ; cette formule en propose une version palatable, à essayer en entraînement avant de l\'utiliser en compétition.',
    ingredients: [
      { item: 'Betterave crue bio', quantite: '150 g' },
      { item: 'Oranges douces bio (jus pressé ou extrait)', quantite: '300 g (≈ 2 oranges)' },
      { item: 'Carottes bio', quantite: '150 g' },
      { item: 'Gingembre frais bio', quantite: '10 g' },
    ],
    preparation: [
      'Éplucher la betterave si non bio.',
      'Brosser carottes et gingembre.',
      'Presser ou extraire les oranges séparément.',
      'Extraire betterave, carotte, gingembre.',
      'Mélanger avec le jus d\'orange, boire 60 à 120 minutes avant l\'effort.',
    ],
    benefices: [
      'Nitrates naturels de la betterave, étudiés pour leur effet sur la disponibilité du NO (monoxyde d\'azote) et l\'endurance.',
      'Vitamine C, potassium, glucides à index glycémique modéré.',
      'Le gingembre apporte tonicité et confort digestif.',
      'Goût sucré bien accepté avant un effort.',
    ],
    frequence:
      '1 verre de 300 ml, 60 à 120 minutes avant un effort d\'endurance.',
    appareil: 'extracteur',
    contre_indications: [
      'Hypotension : la betterave peut accentuer la baisse de tension — attention en sortie d\'effort.',
      'Lithiase rénale oxalique : éviter ou limiter.',
      'Diabète : encadrer l\'apport sucré.',
      'Béturie (urines rosées) possible et bénigne.',
      'Toujours tester en entraînement avant utilisation en compétition.',
    ],
    tradition:
      'Pratique récente, ancrée à la fois dans la naturopathie sportive et la recherche en physiologie de l\'exercice.',
    tags: ['betterave', 'orange', 'gingembre', 'sport', 'endurance', 'nitrates'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-carotte-orange-citron-booster',
    category: 'energie',
    nom: 'Carotte + orange + citron — booster matinal',
    excerpt:
      'La trilogie classique « ACE » : carotte, orange, citron, riche en bêta-carotène et vitamine C.',
    intro:
      'Très populaire dans les bars à jus, cette formule a un grand mérite : elle est accessible, savoureuse et bien tolérée. Elle apporte une dose intéressante de bêta-carotène et de vitamine C dès le matin, et constitue une bonne porte d\'entrée vers les jus crus pour les débutants.',
    ingredients: [
      { item: 'Carottes bio', quantite: '300 g' },
      { item: 'Oranges bio (jus pressé)', quantite: '300 g (≈ 2 oranges)' },
      { item: 'Citron jaune bio (jus)', quantite: '½ citron' },
    ],
    preparation: [
      'Brosser les carottes.',
      'Presser les oranges et le citron (presse-agrumes).',
      'Extraire les carottes.',
      'Mélanger jus de carotte et agrumes pressés.',
      'Boire immédiatement, frais, le matin.',
    ],
    benefices: [
      'Apport simultané de bêta-carotène (provitamine A) et de vitamine C.',
      'Le citron améliore l\'assimilation du fer non héminique éventuel.',
      'Goût universellement apprécié, utile en initiation à la cure de jus.',
      'Boisson de réveil hydratante.',
    ],
    frequence:
      '1 verre de 300 ml par jour, le matin, en cure de 21 jours ou en habitude.',
    appareil: 'les-deux',
    contre_indications: [
      'Diabète ou résistance à l\'insuline : ce jus est riche en sucres simples — limiter à un petit verre après un repas.',
      'Reflux : la part d\'agrumes peut aggraver.',
      'Émail dentaire : boire à la paille et rincer.',
      'Caroténodermie possible en cas de consommation très importante et prolongée.',
    ],
    tradition:
      'Formule populaire issue des « jus ACE » des années 1990, version maison sans additifs.',
    tags: ['carotte', 'orange', 'citron', 'matin', 'vitamine-c', 'débutant'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-green-energy-pomme-epinards-celeri',
    category: 'energie',
    nom: 'Green energy — pomme, épinards, céleri, citron',
    excerpt:
      'Un jus vert peu sucré et dynamisant pour les habitués, qui combine chlorophylle, minéraux et une touche fraîche.',
    intro:
      'À mi-chemin entre le jus de drainage et le jus tonique, cette formule plaît aux personnes qui souhaitent « du vert » sans excès de sucre. Elle apporte chlorophylle, magnésium végétal et un peu d\'énergie glucidique grâce à une seule pomme.',
    ingredients: [
      { item: 'Pomme bio', quantite: '150 g (≈ 1 pomme)' },
      { item: 'Épinards frais bio', quantite: '100 g' },
      { item: 'Céleri branche bio', quantite: '150 g' },
      { item: 'Citron jaune bio (jus)', quantite: '½ citron' },
      { item: 'Concombre bio (facultatif)', quantite: '150 g' },
    ],
    preparation: [
      'Laver soigneusement les épinards.',
      'Brosser le céleri.',
      'Rouler les épinards en boules serrées entre les morceaux durs.',
      'Extraire à vitesse lente.',
      'Ajouter le jus de citron, boire frais.',
    ],
    benefices: [
      'Chlorophylle, magnésium et folates des végétaux verts.',
      'Apport hydratant si l\'on ajoute le concombre.',
      'Peu sucré, adapté à une consommation plus quotidienne.',
      'Bonne option pour intégrer plus de cru dans la journée.',
    ],
    frequence:
      '1 verre de 300 ml par jour, en milieu de matinée ou de fin d\'après-midi.',
    appareil: 'extracteur',
    contre_indications: [
      'Lithiase oxalique : épinards à modérer.',
      'Traitement par AVK : interférence avec la vitamine K.',
      'Allergie aux Apiacées.',
      'Reflux : adapter la part de citron.',
    ],
    tradition:
      'Inspiré des « green juices » contemporains, adapté en version peu sucrée.',
    tags: ['vert', 'énergie', 'chlorophylle', 'pomme', 'céleri'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-betterave-pomme-carotte-endurance',
    category: 'energie',
    nom: 'Betterave + pomme + carotte — endurance & circulation',
    excerpt:
      'Une version douce du jus de betterave, pratique au quotidien, riche en nitrates naturels et glucides végétaux.',
    intro:
      'Plus accessible que la formule pré-effort, ce jus quotidien combine la betterave, la pomme et la carotte dans des proportions équilibrées. À pratiquer en cure, il s\'adresse aussi bien aux sportifs qu\'aux personnes recherchant un soutien général de la vitalité.',
    ingredients: [
      { item: 'Betterave crue bio', quantite: '100 g' },
      { item: 'Pommes bio', quantite: '200 g' },
      { item: 'Carottes bio', quantite: '300 g' },
      { item: 'Citron jaune bio (jus)', quantite: '¼ citron' },
    ],
    preparation: [
      'Éplucher la betterave si non bio.',
      'Brosser carottes et pommes.',
      'Extraire dans l\'ordre : betterave, carottes, pommes.',
      'Finir au jus de citron.',
      'Boire frais en milieu de matinée.',
    ],
    benefices: [
      'Nitrates de la betterave, bêta-carotène de la carotte, polyphénols de la pomme.',
      'Soutien traditionnel de la circulation et de l\'endurance.',
      'Goût équilibré, accessible aux débutants.',
      'Belle couleur rouge appétissante.',
    ],
    frequence:
      '1 verre de 300 ml, 3 à 4 fois par semaine, cure de 3 à 4 semaines.',
    appareil: 'extracteur',
    contre_indications: [
      'Lithiase rénale ou biliaire : avis médical.',
      'Hypotension : surveillance.',
      'Diabète : modérer pomme + carotte.',
      'Béturie possible et bénigne.',
    ],
    tradition:
      'Formule de naturopathie sportive contemporaine, descendant lointain des combinaisons de Walker.',
    tags: ['betterave', 'pomme', 'carotte', 'endurance', 'sport'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-ananas-menthe-gingembre',
    category: 'energie',
    nom: 'Ananas + menthe + gingembre — fraîcheur tropicale',
    excerpt:
      'Une combinaison estivale fraîche et désaltérante, douce pour la digestion grâce à la bromélaïne et au gingembre.',
    intro:
      'L\'ananas frais contient de la bromélaïne, complexe enzymatique étudié pour ses propriétés digestives et anti-inflammatoires (effet documenté en pharmacognosie). Associé à la menthe et au gingembre, il compose un jus rafraîchissant idéal en été.',
    ingredients: [
      { item: 'Chair d\'ananas frais bio', quantite: '350 g (≈ ½ ananas)' },
      { item: 'Concombre bio', quantite: '150 g' },
      { item: 'Menthe fraîche bio', quantite: '15 g (≈ 1 petit bouquet)' },
      { item: 'Gingembre frais bio', quantite: '10 g' },
      { item: 'Citron vert bio (jus)', quantite: '½ citron vert' },
    ],
    preparation: [
      'Éplucher l\'ananas, retirer le cœur.',
      'Brosser concombre et gingembre.',
      'Extraire menthe et gingembre entre les morceaux d\'ananas.',
      'Ajouter le jus de citron vert.',
      'Servir très frais.',
    ],
    benefices: [
      'Bromélaïne (enzyme) traditionnellement associée à un confort digestif après-repas.',
      'Excellente hydratation, vitamine C, manganèse.',
      'Goût frais et exotique très apprécié.',
      'Idéal après un repas un peu lourd.',
    ],
    frequence:
      '1 verre de 250 ml, 2 à 3 fois par semaine, en été. Possible en post-repas léger.',
    appareil: 'extracteur',
    contre_indications: [
      'Diabète : l\'ananas est riche en sucres — modérer.',
      'Traitement anticoagulant : prudence avec la bromélaïne à dose concentrée.',
      'Allergie connue à l\'ananas.',
      'Reflux : surveiller la tolérance individuelle.',
    ],
    tradition:
      'Combinaison contemporaine inspirée des jus de marché tropicaux.',
    tags: ['ananas', 'menthe', 'gingembre', 'été', 'digestion'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-orange-citron-curcuma-poivre',
    category: 'energie',
    nom: 'Orange + citron + curcuma + poivre — golden shot',
    excerpt:
      'Un shot doré tonique riche en vitamine C et curcumine biodisponible (grâce à la pipérine du poivre noir).',
    intro:
      'Cette « golden shot » concentre vitamine C et curcumine dans un format court. La présence de poivre noir (pipérine) augmente significativement la biodisponibilité de la curcumine — un effet bien documenté en pharmacologie. À consommer en cure de saison.',
    ingredients: [
      { item: 'Oranges bio (jus pressé)', quantite: '300 g (≈ 2 oranges)' },
      { item: 'Citron jaune bio (jus)', quantite: '1 citron' },
      { item: 'Curcuma frais bio râpé', quantite: '10 g (OU ½ c. à café de poudre)' },
      { item: 'Poivre noir fraîchement moulu', quantite: '1 pincée' },
      { item: 'Gingembre frais bio (facultatif)', quantite: '5 g' },
    ],
    preparation: [
      'Presser oranges et citron au presse-agrumes.',
      'Râper le curcuma frais (porter des gants — il tache).',
      'Mélanger jus + curcuma + poivre + gingembre.',
      'Filtrer si l\'on souhaite une boisson lisse.',
      'Servir en shots de 60 ml ou en verre de 200 ml.',
    ],
    benefices: [
      'Apport élevé en vitamine C, flavonoïdes et curcumine.',
      'Pipérine + curcumine : combinaison étudiée pour la biodisponibilité.',
      'Soutien traditionnel anti-inflammatoire et tonique.',
      'Format shot pratique en cure courte.',
    ],
    frequence:
      '1 shot de 60 ml par jour, ou 1 verre de 200 ml, en cure de 10 à 14 jours.',
    appareil: 'mortier',
    contre_indications: [
      'Lithiase biliaire : éviter le curcuma à dose élevée.',
      'Traitement anticoagulant : prudence (curcuma).',
      'Reflux, ulcère : la combinaison agrumes + poivre peut aggraver.',
      'Grossesse : doses culinaires uniquement pour le curcuma.',
      'Émail dentaire : boire à la paille.',
    ],
    tradition:
      'Adaptation moderne des préparations ayurvédiques au curcuma.',
    tags: ['curcuma', 'orange', 'citron', 'shot', 'vitamine-c', 'énergie'],
    updatedAt: '2026-05-29',
  },
];
