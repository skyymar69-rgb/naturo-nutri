import type { RecetteJus } from '../types';

/**
 * Jus de drainage et de dépuration.
 *
 * En naturopathie, le mot « détox » désigne un soutien des émonctoires
 * (foie, reins, intestins, peau, poumons) par l\'alimentation et les
 * plantes. Ces jus n\'ont pas vocation à « nettoyer » l\'organisme :
 * un foie et des reins sains assurent eux-mêmes cette fonction.
 * Il s\'agit d\'apporter végétaux frais, eau, minéraux et phytonutriments.
 */
export const JUS_DETOX: RecetteJus[] = [
  {
    slug: 'jus-vert-detox-printemps',
    category: 'detox',
    nom: 'Jus vert de printemps — concombre, pomme, épinards, citron',
    excerpt:
      'Le jus vert de référence pour la saison de la sève montante : très hydratant, peu sucré, doux à la digestion.',
    intro:
      'Au sortir de l\'hiver, l\'alimentation gagne à intégrer plus de cru et de chlorophylle. Ce jus combine la fraîcheur du concombre, la douceur de la pomme, le vert des épinards et la pointe acide du citron. Il fait partie des « jus d\'initiation » bien tolérés.',
    ingredients: [
      { item: 'Concombre bio non épluché', quantite: '300 g (≈ 1 concombre moyen)' },
      { item: 'Pomme bio acidulée (Granny Smith, Reinette)', quantite: '150 g (≈ 1 pomme)' },
      { item: 'Épinards frais bio', quantite: '80 g' },
      { item: 'Citron jaune bio, pelé en ne gardant qu\'un peu de zeste', quantite: '½ citron (≈ 40 g)' },
    ],
    preparation: [
      'Laver tous les végétaux ; rincer les épinards en plusieurs eaux.',
      'Couper concombre et pomme en tronçons ; éviter d\'éplucher la pomme si elle est bio.',
      'Extraire en alternant épinards et morceaux durs pour optimiser le rendement.',
      'Ajouter le jus de citron pressé en fin de préparation.',
      'Boire immédiatement, à jeun ou en milieu de matinée.',
    ],
    benefices: [
      'Très bonne hydratation (concombre 95 % eau).',
      'Apport en chlorophylle, vitamine C et folates.',
      'Le citron apporte une touche d\'acidité utile à la palatabilité et à l\'absorption du fer non héminique des épinards.',
      'Traditionnellement utilisé comme soutien du drainage doux au printemps.',
    ],
    frequence:
      '1 verre de 300 ml le matin, en cure de 2 à 3 semaines au printemps.',
    appareil: 'extracteur',
    contre_indications: [
      'Lithiase oxalique : limiter la part d\'épinards.',
      'Traitement par AVK : la vitamine K des épinards interfère.',
      'Diabète : modérer la pomme.',
      'Reflux : la part de citron peut être réduite ou supprimée.',
    ],
    tradition:
      'Format moderne inspiré des cures de printemps de la naturopathie européenne.',
    tags: ['détox', 'vert', 'printemps', 'concombre', 'épinards'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-pissenlit-pomme-citron',
    category: 'detox',
    nom: 'Pissenlit + pomme + citron — drainage hépatique de printemps',
    excerpt:
      'Le pissenlit, plante amère traditionnellement associée au foie, adouci par la pomme et réveillé par le citron.',
    intro:
      'Le pissenlit (Taraxacum officinale) est l\'une des plantes amères les plus utilisées dans la tradition européenne pour soutenir le foie et la vésicule. Son jus pur étant intense, on le mélange ici à de la pomme et du citron pour le rendre buvable. À réserver au printemps, en cure courte.',
    ingredients: [
      { item: 'Feuilles de pissenlit jeunes, bio ou sauvage de zone propre', quantite: '80 g' },
      { item: 'Pommes bio', quantite: '300 g (≈ 2 pommes)' },
      { item: 'Citron bio (jus uniquement)', quantite: '½ citron' },
      { item: 'Eau filtrée (facultatif, pour allonger)', quantite: '50 ml' },
    ],
    preparation: [
      'Trier et laver très soigneusement les feuilles de pissenlit.',
      'Couper les pommes en quartiers (conserver la peau si bio).',
      'Extraire en alternant pissenlit et pomme.',
      'Ajouter le jus de citron pressé et, si souhaité, un peu d\'eau pour adoucir.',
      'Boire immédiatement, le matin, 15 minutes avant le petit-déjeuner.',
    ],
    benefices: [
      'Soutien traditionnel des fonctions hépatobiliaires (amers, choleretiques).',
      'Apport en potassium, fer non héminique et vitamine C.',
      'Effet diurétique doux du pissenlit traditionnellement décrit.',
      'Excellent jus de saison à intégrer aux cures de printemps.',
    ],
    frequence:
      '1 verre de 200 ml par jour, cure de 10 à 14 jours au printemps uniquement.',
    appareil: 'extracteur',
    contre_indications: [
      'Lithiase biliaire connue : avis médical impératif avant toute plante cholérétique.',
      'Allergie aux Astéracées (pissenlit, camomille, arnica).',
      'Insuffisance rénale ou cardiaque : éviter les diurétiques végétaux sans avis.',
      'Diabète : modérer la part de pomme.',
    ],
    tradition:
      'Cure de pissenlit documentée en herboristerie européenne depuis le Moyen Âge.',
    tags: ['pissenlit', 'foie', 'détox', 'printemps', 'amer'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-betterave-carotte-gingembre',
    category: 'detox',
    nom: 'Betterave + carotte + gingembre — drainage tonique',
    excerpt:
      'Une formule rouge, douce et piquante, qui réunit la betterave hépatique, la carotte digeste et le gingembre stimulant.',
    intro:
      'La betterave crue est riche en bétalaïnes, pigments antioxydants qui font l\'objet de travaux modernes intéressants. Associée à la carotte qui adoucit et au gingembre qui tonifie, elle compose un jus de drainage à la fois agréable et plus actif que les jus verts classiques. À introduire progressivement.',
    ingredients: [
      { item: 'Betterave crue bio', quantite: '120 g' },
      { item: 'Carottes bio', quantite: '350 g' },
      { item: 'Pomme bio (facultatif)', quantite: '150 g' },
      { item: 'Gingembre frais bio', quantite: '15 g (≈ 1 phalange)' },
      { item: 'Citron jaune bio (jus)', quantite: '½ citron' },
    ],
    preparation: [
      'Éplucher la betterave si non bio, brosser les carottes.',
      'Couper le gingembre en rondelles fines.',
      'Extraire dans l\'ordre : gingembre, betterave, pomme, carottes.',
      'Ajouter le jus de citron.',
      'Boire à petites gorgées, à distance des repas.',
    ],
    benefices: [
      'Apport en bétalaïnes, nitrates naturels, bêta-carotène et gingérols.',
      'Soutien traditionnel du foie et de la circulation.',
      'Le gingembre apporte une note tonique et favorise la palatabilité.',
      'Bonne combinaison de saveurs : terreux, sucré, piquant.',
    ],
    frequence:
      '1 verre de 250 ml, 3 à 4 fois par semaine, cure de 3 semaines.',
    appareil: 'extracteur',
    contre_indications: [
      'Lithiase rénale oxalique ou biliaire : avis médical avant tout jus de betterave.',
      'Hypotension : la betterave peut accentuer la baisse de tension.',
      'Traitement anticoagulant : prudence avec le gingembre (effet antiagrégant).',
      'Béturie (coloration rose des urines) possible et bénigne.',
      'Diabète : modérer carotte et pomme.',
    ],
    tradition:
      'Adaptation moderne d\'une combinaison décrite dans la naturopathie d\'après-guerre.',
    tags: ['betterave', 'carotte', 'gingembre', 'détox', 'tonique'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-citron-curcuma-matin',
    category: 'detox',
    nom: 'Eau citronnée au curcuma — réveil matinal',
    excerpt:
      'Pas un vrai jus d\'extracteur, mais un grand classique du matin : eau tiède, citron pressé, curcuma frais ou poudre, pointe de poivre.',
    intro:
      'Cette préparation, parfois appelée « golden water », est devenue un rituel matinal courant. Elle ne remplace pas un jus de légumes mais constitue une boisson de réveil acceptée par la plupart des tempéraments. Le poivre noir aide à l\'absorption de la curcumine (effet documenté en pharmacologie : la pipérine augmente la biodisponibilité).',
    ingredients: [
      { item: 'Eau filtrée tiède (pas brûlante)', quantite: '250 ml' },
      { item: 'Citron jaune bio frais (jus)', quantite: '½ citron' },
      { item: 'Curcuma frais râpé OU curcuma en poudre bio', quantite: '5 g de frais OU ½ c. à café de poudre' },
      { item: 'Poivre noir fraîchement moulu', quantite: '1 petite pincée' },
      { item: 'Miel ou sirop d\'agave (facultatif)', quantite: '1 c. à café' },
    ],
    preparation: [
      'Chauffer l\'eau jusqu\'à tiède (40–45 °C maximum, pour préserver la vitamine C).',
      'Presser le citron directement dans la tasse.',
      'Ajouter le curcuma et le poivre, mélanger.',
      'Sucrer éventuellement.',
      'Boire à jeun, 20 minutes avant le petit-déjeuner.',
    ],
    benefices: [
      'Apport en vitamine C et en flavonoïdes du citron.',
      'Curcumine traditionnellement associée à un soutien hépatique et anti-inflammatoire.',
      'Boisson chaude qui réveille la digestion en douceur (effet « apéritif »).',
      'Rituel simple, accessible sans extracteur.',
    ],
    frequence:
      'Tous les matins à jeun, en continu si bien toléré, ou en cure de 21 jours.',
    appareil: 'mortier',
    contre_indications: [
      'Lithiase biliaire : éviter le curcuma à forte dose (effet cholérétique).',
      'Traitement anticoagulant : prudence avec le curcuma à dose élevée.',
      'Reflux gastro-œsophagien sévère : le citron peut aggraver.',
      'Émail dentaire fragile : boire à la paille et se rincer la bouche.',
      'Grossesse : limiter le curcuma à doses culinaires.',
    ],
    tradition:
      'Inspiré du « jal jeera » et de l\'eau citronnée matinale ayurvédique, adapté avec curcuma.',
    tags: ['citron', 'curcuma', 'matin', 'détox', 'rituel'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-persil-celeri-concombre',
    category: 'detox',
    nom: 'Persil + céleri + concombre — drainage rénal',
    excerpt:
      'Trois végétaux traditionnellement associés au drainage des reins, dans une formule très peu sucrée.',
    intro:
      'Ce jus est conçu pour les personnes habituées au goût végétal, qui souhaitent un drainage doux des voies urinaires sans apport de sucre. Le persil — toujours en quantité modérée comme le recommandait Walker — soutient la fonction rénale, le céleri reminéralise, le concombre hydrate.',
    ingredients: [
      { item: 'Concombre bio', quantite: '300 g' },
      { item: 'Céleri branche bio', quantite: '150 g' },
      { item: 'Persil plat bio', quantite: '25 g (jus ≤ 60 ml)' },
      { item: 'Citron jaune bio (jus, facultatif)', quantite: '¼ citron' },
    ],
    preparation: [
      'Rincer abondamment tous les végétaux.',
      'Rouler le persil en boules serrées entre les morceaux de céleri.',
      'Extraire à vitesse lente.',
      'Ajouter le jus de citron si désiré.',
      'Boire frais, à distance des repas.',
    ],
    benefices: [
      'Effet diurétique doux traditionnellement décrit.',
      'Très hydratant, apport en potassium et silice.',
      'Soutien du drainage des voies urinaires basses (en cure courte).',
      'Pratiquement sans sucre, adapté aux personnes glycémiquement sensibles.',
    ],
    frequence:
      '1 verre de 250 ml par jour, cure de 7 à 10 jours.',
    appareil: 'extracteur',
    contre_indications: [
      'Insuffisance rénale ou cardiaque : éviter les diurétiques sans avis médical.',
      'Grossesse : éviter le jus de persil concentré.',
      'Traitement par AVK : interférence possible avec la vitamine K.',
      'Allergie aux Apiacées.',
    ],
    tradition:
      'Combinaison classique des cures dépuratives naturopathiques.',
    tags: ['persil', 'céleri', 'concombre', 'reins', 'drainage'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-radis-noir-pomme-citron',
    category: 'detox',
    nom: 'Radis noir + pomme + citron — cure hépatobiliaire',
    excerpt:
      'Le radis noir, plante phare du drainage hépatique français, adouci par la pomme et le citron.',
    intro:
      'Le radis noir (Raphanus sativus var. niger) est une plante traditionnelle européenne du foie et de la vésicule, dont l\'usage est reconnu en phytothérapie. Pris en jus, il est très piquant : la pomme et le citron permettent de le rendre buvable, sans masquer son effet caractéristique.',
    ingredients: [
      { item: 'Radis noir bio, brossé', quantite: '100 g (½ radis moyen)' },
      { item: 'Pommes bio', quantite: '300 g (≈ 2 pommes)' },
      { item: 'Citron jaune bio (jus)', quantite: '½ citron' },
      { item: 'Eau filtrée (facultatif)', quantite: '50 ml' },
    ],
    preparation: [
      'Brosser le radis noir sous l\'eau (ne pas éplucher si bio).',
      'Couper en bâtonnets.',
      'Extraire en alternant radis noir et pomme.',
      'Ajouter le jus de citron et, si besoin, un peu d\'eau pour adoucir le piquant.',
      'Boire immédiatement, en milieu de matinée, jamais à jeun.',
    ],
    benefices: [
      'Soutien traditionnel et reconnu en phytothérapie de la sécrétion biliaire.',
      'Apport en glucosinolates, vitamine C et soufre.',
      'Effet cholérétique et cholagogue documenté en pharmacognosie.',
      'Cure de 21 jours classiquement proposée à l\'automne.',
    ],
    frequence:
      '1 verre de 200 ml, 1 fois par jour, cure de 21 jours en automne.',
    appareil: 'extracteur',
    contre_indications: [
      'Lithiase biliaire connue : contre-indication formelle (risque de colique).',
      'Obstruction des voies biliaires : contre-indication.',
      'Reflux et ulcère gastro-duodénal : éviter ou réduire fortement.',
      'Hypothyroïdie non équilibrée : prudence (Brassicacée).',
      'Grossesse, allaitement : éviter.',
    ],
    tradition:
      'Plante du foie classique de l\'herboristerie française (ANSM, monographies).',
    tags: ['radis-noir', 'foie', 'vésicule', 'automne', 'détox'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-chou-kale-pomme-citron',
    category: 'detox',
    nom: 'Kale + pomme + citron — jus vert intense',
    excerpt:
      'Le chou kale apporte chlorophylle, glucosinolates et minéraux ; la pomme et le citron rendent le jus agréable.',
    intro:
      'Le kale (chou frisé non pommé) est devenu emblématique des jus verts. Très dense nutritionnellement, il appartient à la famille des Brassicacées : il convient donc d\'observer les mêmes précautions thyroïdiennes que pour le chou cru, notamment sous traitement antithyroïdien.',
    ingredients: [
      { item: 'Feuilles de chou kale bio, côte centrale retirée', quantite: '150 g' },
      { item: 'Pomme bio', quantite: '200 g' },
      { item: 'Concombre bio (facultatif, pour hydrater)', quantite: '150 g' },
      { item: 'Citron jaune bio (jus)', quantite: '½ citron' },
      { item: 'Gingembre frais (facultatif)', quantite: '5 g' },
    ],
    preparation: [
      'Laver et effeuiller le kale, retirer la côte épaisse.',
      'Rouler les feuilles en boules entre les morceaux de pomme et de concombre.',
      'Extraire à vitesse lente.',
      'Ajouter le jus de citron et le gingembre pressé.',
      'Boire dans les 10 minutes, frais.',
    ],
    benefices: [
      'Apport en vitamine K, vitamine C, folates, calcium et lutéine.',
      'Glucosinolates étudiés en recherche pour leur intérêt antioxydant.',
      'Chlorophylle abondante.',
      'Citron + kale = meilleure assimilation du fer non héminique.',
    ],
    frequence:
      '1 verre de 250 ml par jour, 3 à 4 fois par semaine, hors période d\'hiver intense.',
    appareil: 'extracteur',
    contre_indications: [
      'Brassicacées : contre-indication relative en cas de traitement antithyroïdien ou d\'hypothyroïdie non équilibrée — demander un avis médical.',
      'Traitement par AVK : interférence majeure avec la vitamine K — surveillance INR.',
      'Lithiase oxalique : prudence (kale peu oxalogène mais possible).',
      'Diabète : modérer la pomme.',
    ],
    tradition:
      'Format moderne issu de la vague des « green juices » nord-américains, intégré aux cures naturopathiques actuelles.',
    tags: ['kale', 'chou', 'vert', 'détox', 'chlorophylle'],
    updatedAt: '2026-05-29',
  },
];
