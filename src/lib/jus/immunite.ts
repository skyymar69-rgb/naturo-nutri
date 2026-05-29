import type { RecetteJus } from '../types';

/**
 * Jus de soutien immunitaire.
 *
 * Ces formules visent à apporter, pendant les saisons exposées
 * (automne, hiver, intersaisons), les micronutriments classiquement
 * associés au soutien des défenses : vitamine C, zinc végétal,
 * polyphénols, soufre allylique de l\'ail, gingérols, curcumine.
 *
 * Aucune de ces préparations ne prévient ni ne traite une infection :
 * elles s\'inscrivent dans une hygiène de vie globale et ne remplacent
 * pas un avis médical en cas de symptômes.
 */
export const JUS_IMMUNITE: RecetteJus[] = [
  {
    slug: 'shot-gingembre-curcuma-citron',
    category: 'immunite',
    nom: 'Shot gingembre + curcuma + citron — réveil de saison',
    excerpt:
      'Le shot d\'hiver par excellence : court, vif, concentré en gingérols, curcumine et vitamine C.',
    intro:
      'Ce shot est l\'une des préparations les plus simples pour intégrer au quotidien gingembre, curcuma et citron pendant la saison froide. Son format concentré le rend facile à boire le matin, en complément du petit-déjeuner.',
    ingredients: [
      { item: 'Gingembre frais bio', quantite: '30 g' },
      { item: 'Curcuma frais bio', quantite: '15 g (OU ½ c. à café de poudre)' },
      { item: 'Citrons jaunes bio (jus)', quantite: '2 citrons' },
      { item: 'Pomme bio (pour adoucir)', quantite: '100 g' },
      { item: 'Poivre noir', quantite: '1 pincée' },
      { item: 'Miel bio (facultatif)', quantite: '1 c. à café' },
    ],
    preparation: [
      'Brosser gingembre et curcuma (porter des gants).',
      'Extraire gingembre + curcuma + pomme.',
      'Mélanger avec le jus de citron pressé.',
      'Ajouter le poivre, puis le miel hors extracteur si désiré.',
      'Servir en shots de 30 à 60 ml.',
    ],
    benefices: [
      'Gingérols, curcumine et vitamine C — combinaison traditionnelle de soutien immunitaire.',
      'Pipérine du poivre noir : améliore la biodisponibilité de la curcumine.',
      'Réveil digestif et circulatoire doux.',
      'Format court, pratique en cure quotidienne.',
    ],
    frequence:
      '1 shot de 30 à 60 ml par jour, le matin, en cure de 21 jours à l\'automne et à l\'entrée de l\'hiver.',
    appareil: 'extracteur',
    contre_indications: [
      'Lithiase biliaire : éviter le curcuma à dose concentrée.',
      'Traitement anticoagulant ou antiagrégant : prudence (gingembre + curcuma).',
      'Reflux gastro-œsophagien : surveiller la tolérance.',
      'Grossesse : limiter à des quantités modestes ; éviter le curcuma à dose médicinale.',
      'Émail dentaire : boire à la paille et rincer la bouche.',
    ],
    tradition:
      'Inspiré des « immunity shots » contemporains, lointainement apparentés au « kashayam » ayurvédique.',
    tags: ['shot', 'gingembre', 'curcuma', 'citron', 'immunité', 'hiver'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-agrumes-orange-pamplemousse-citron',
    category: 'immunite',
    nom: 'Orange + pamplemousse + citron — bombe de vitamine C',
    excerpt:
      'Le classique des matinées d\'hiver : trois agrumes pressés frais, riches en vitamine C et flavonoïdes.',
    intro:
      'Boire ses agrumes pressés frais reste l\'une des manières les plus simples et efficaces d\'augmenter ses apports en vitamine C, particulièrement utiles en hiver. Attention à l\'interaction du pamplemousse avec de nombreux médicaments.',
    ingredients: [
      { item: 'Oranges bio (jus pressé)', quantite: '300 g (≈ 2 oranges)' },
      { item: 'Pamplemousse rose bio (jus pressé)', quantite: '200 g (≈ ½ pamplemousse)' },
      { item: 'Citron jaune bio (jus)', quantite: '½ citron' },
    ],
    preparation: [
      'Couper les agrumes en deux.',
      'Presser au presse-agrumes manuel ou électrique.',
      'Mélanger les trois jus.',
      'Boire immédiatement, frais.',
    ],
    benefices: [
      'Apport remarquable en vitamine C, flavonoïdes (hespéridine, naringine) et potassium.',
      'Hydratation et goût acidulé qui réveille.',
      'Soutien traditionnel des défenses en saison froide.',
      'Préparation rapide, sans extracteur nécessaire.',
    ],
    frequence:
      '1 verre de 250 ml, 3 à 5 fois par semaine en automne-hiver.',
    appareil: 'les-deux',
    contre_indications: [
      'Pamplemousse : interactions médicamenteuses NOMBREUSES et parfois graves (statines, immunosuppresseurs, anticoagulants, antiarythmiques…) — vérifier impérativement avec son pharmacien ou son médecin avant cure.',
      'Reflux : la part de citron peut aggraver.',
      'Diabète : modérer la quantité, privilégier le pamplemousse à l\'orange.',
      'Émail dentaire : boire à la paille.',
    ],
    tradition:
      'Petit-déjeuner classique européen et nord-américain, popularisé au XXe siècle.',
    tags: ['agrumes', 'vitamine-c', 'hiver', 'immunité', 'matin'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-carotte-orange-citron-gingembre-hiver',
    category: 'immunite',
    nom: 'Carotte + orange + citron + gingembre — version hiver',
    excerpt:
      'La formule ACE classique enrichie de gingembre frais, idéale pour les matinées froides.',
    intro:
      'Variante hivernale du jus de réveil ACE, cette formule ajoute le gingembre pour son effet réchauffant et son apport en gingérols. Elle reste douce, accessible et savoureuse — un excellent point d\'entrée dans les jus pour les enfants et adolescents (en supervisant).',
    ingredients: [
      { item: 'Carottes bio', quantite: '300 g' },
      { item: 'Oranges bio (jus pressé)', quantite: '250 g (≈ 2 oranges)' },
      { item: 'Citron jaune bio (jus)', quantite: '½ citron' },
      { item: 'Gingembre frais bio', quantite: '15 g' },
    ],
    preparation: [
      'Brosser carottes et gingembre.',
      'Presser les oranges et le citron.',
      'Extraire gingembre + carottes.',
      'Mélanger avec le jus d\'agrumes.',
      'Boire immédiatement, le matin.',
    ],
    benefices: [
      'Bêta-carotène, vitamine C et gingérols.',
      'Goût équilibré, très bien accepté.',
      'Soutien traditionnel des défenses en saison froide.',
      'Boisson chaude possible : tiédir légèrement (sans dépasser 40 °C) pour un réveil doux.',
    ],
    frequence:
      '1 verre de 300 ml, 3 à 4 fois par semaine en automne-hiver.',
    appareil: 'les-deux',
    contre_indications: [
      'Diabète : sucres simples des carottes et des oranges — modérer.',
      'Reflux : adapter la part de citron.',
      'Traitement anticoagulant : prudence avec le gingembre.',
      'Caroténodermie possible en cas de consommation très importante et prolongée.',
    ],
    tradition:
      'Version contemporaine d\'un jus de saison.',
    tags: ['carotte', 'orange', 'gingembre', 'hiver', 'immunité', 'enfants'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-pomme-cannelle-clou-girofle-hiver',
    category: 'immunite',
    nom: 'Pomme tiède + cannelle + clou de girofle — boisson d\'hiver',
    excerpt:
      'Une boisson chaude inspirée des décoctions traditionnelles d\'hiver : jus de pomme fraîchement extrait, épices, citron.',
    intro:
      'Ni totalement un jus cru, ni un cidre cuit : cette boisson tiède réunit le jus de pomme fraîchement extrait et les épices chaudes traditionnellement utilisées en hiver (cannelle, clou de girofle). À boire en fin de journée pour son confort.',
    ingredients: [
      { item: 'Pommes bio', quantite: '500 g (≈ 3 pommes)' },
      { item: 'Bâton de cannelle de Ceylan', quantite: '1 bâton' },
      { item: 'Clous de girofle', quantite: '2 clous' },
      { item: 'Citron jaune bio (jus)', quantite: '¼ citron' },
      { item: 'Anis étoilé (facultatif)', quantite: '1 étoile' },
    ],
    preparation: [
      'Extraire le jus de pomme à l\'extracteur.',
      'Faire chauffer doucement (max 50 °C) avec la cannelle, le clou de girofle et l\'anis étoilé pendant 5 minutes.',
      'Filtrer les épices.',
      'Ajouter le jus de citron hors du feu.',
      'Boire tiède, en fin d\'après-midi ou en soirée.',
    ],
    benefices: [
      'Polyphénols de la pomme et de la cannelle (effets antioxydants étudiés).',
      'Confort chaleureux apprécié en saison froide.',
      'Cannelle de Ceylan : préférée à la cassia pour sa moindre teneur en coumarine.',
      'Tradition européenne du « vin chaud sans alcool ».',
    ],
    frequence:
      '1 tasse de 200 ml, 2 à 3 fois par semaine, en automne-hiver.',
    appareil: 'extracteur',
    contre_indications: [
      'Diabète : pomme et cannelle riche en glucides — modérer ; choisir cannelle de Ceylan.',
      'Cannelle de Cassia : limiter à cause de la coumarine (hépatotoxicité à dose élevée et prolongée).',
      'Reflux : observer la tolérance individuelle.',
      'Allergie connue aux clous de girofle ou à l\'anis étoilé.',
    ],
    tradition:
      'Inspirée des décoctions hivernales européennes et des chai indiens, en version peu sucrée.',
    tags: ['pomme', 'cannelle', 'hiver', 'tiède', 'épices', 'immunité'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'shot-ail-citron-miel-prevention',
    category: 'immunite',
    nom: 'Shot ail + citron + miel — formule de prévention',
    excerpt:
      'Un shot intense de tradition populaire, à base d\'ail cru, de citron et de miel : pour les habitués des saveurs marquées.',
    intro:
      'L\'ail cru est l\'une des plantes alimentaires les plus étudiées pour ses composés soufrés (allicine, ajoène). Sa consommation crue ponctuelle, encadrée par le miel et le citron, fait partie des traditions populaires européennes en saison froide. Le goût est puissant : ce shot est réservé aux personnes qui le tolèrent.',
    ingredients: [
      { item: 'Gousses d\'ail frais bio, dégermées', quantite: '1 petite gousse (≈ 3 g)' },
      { item: 'Citron jaune bio (jus)', quantite: '1 citron' },
      { item: 'Miel bio (de châtaignier ou thym, idéalement)', quantite: '1 c. à café (≈ 8 g)' },
      { item: 'Eau filtrée tiède', quantite: '50 ml' },
      { item: 'Gingembre frais (facultatif, pour adoucir)', quantite: '5 g' },
    ],
    preparation: [
      'Presser le citron.',
      'Écraser l\'ail au mortier ou au presse-ail, le laisser reposer 10 minutes (formation d\'allicine).',
      'Mélanger ail écrasé, jus de citron, eau tiède (jamais brûlante : préserver les composés soufrés).',
      'Ajouter le miel et le gingembre éventuel.',
      'Boire en 1 prise, en shot de 60 à 80 ml, après un repas léger.',
    ],
    benefices: [
      'Composés soufrés de l\'ail (allicine, ajoène) : largement documentés en recherche pour leurs propriétés.',
      'Vitamine C du citron, propriétés du miel cru (effet adoucissant des voies respiratoires hautes).',
      'Tradition populaire européenne en saison froide.',
      'Effet immédiat de « réveil » très marqué.',
    ],
    frequence:
      '1 shot par jour maximum, en cure courte de 7 à 10 jours, pas en continu.',
    appareil: 'mortier',
    contre_indications: [
      'Traitement anticoagulant ou antiagrégant : contre-indication relative (l\'ail cru a un effet antiagrégant).',
      'Avant chirurgie : arrêter au moins 7 jours avant.',
      'Reflux, ulcère gastrique : éviter (ail cru irritant).',
      'Grossesse : limiter aux quantités culinaires.',
      'Miel : jamais avant 12 mois (botulisme infantile).',
      'Allergie au miel ou à l\'ail.',
    ],
    tradition:
      'Recette populaire européenne, transmise en herboristerie familiale.',
    tags: ['ail', 'citron', 'miel', 'immunité', 'tradition', 'hiver'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-betterave-grenade-gingembre',
    category: 'immunite',
    nom: 'Betterave + grenade + gingembre — rouge immunité',
    excerpt:
      'Une formule rouge intense, riche en bétalaïnes, anthocyanes et punicalagines, soutenue par le gingembre.',
    intro:
      'La grenade fraîche apporte des polyphénols spécifiques (punicalagines, anthocyanes) qui font l\'objet de nombreux travaux modernes. Associée à la betterave et au gingembre, elle compose une formule colorée à l\'intérêt antioxydant marqué, idéale en intersaison.',
    ingredients: [
      { item: 'Grains de grenade frais bio', quantite: '200 g (≈ 1 grenade)' },
      { item: 'Betterave crue bio', quantite: '100 g' },
      { item: 'Pomme bio', quantite: '150 g' },
      { item: 'Gingembre frais bio', quantite: '10 g' },
      { item: 'Citron jaune bio (jus)', quantite: '¼ citron' },
    ],
    preparation: [
      'Écosser la grenade, récupérer les arilles.',
      'Éplucher la betterave si non bio, brosser le gingembre.',
      'Extraire dans l\'ordre : gingembre, betterave, grains de grenade, pomme.',
      'Ajouter le jus de citron.',
      'Boire frais, immédiatement.',
    ],
    benefices: [
      'Bétalaïnes (betterave), punicalagines et anthocyanes (grenade), gingérols (gingembre).',
      'Très bonne densité antioxydante.',
      'Soutien traditionnel des défenses et de la circulation.',
      'Belle couleur grenat appétissante.',
    ],
    frequence:
      '1 verre de 250 ml, 2 à 3 fois par semaine, en automne et intersaison.',
    appareil: 'extracteur',
    contre_indications: [
      'Lithiase rénale ou biliaire : avis médical.',
      'Hypotension : prudence (betterave).',
      'Diabète : modérer la part de pomme.',
      'Grenade : quelques interactions médicamenteuses possibles (similaires au pamplemousse, plus faibles) — vérifier.',
      'Béturie possible et bénigne.',
    ],
    tradition:
      'Combinaison contemporaine inspirée des préparations méditerranéennes (grenade) et naturopathiques (betterave).',
    tags: ['betterave', 'grenade', 'gingembre', 'antioxydants', 'immunité'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-chou-pomme-citron-walker-inspired',
    category: 'immunite',
    nom: 'Chou cru + pomme + citron — immunité version Walker',
    excerpt:
      'Une version douce du jus de chou cru de Walker, adoucie à la pomme et au citron, pour intégrer le chou cru à l\'hiver.',
    intro:
      'En s\'inspirant directement de la recommandation de Walker pour le jus de chou cru, cette version adoucie à la pomme et au citron rend la préparation accessible. Elle convient comme jus d\'appoint en saison froide pour bénéficier des composés soufrés et de la vitamine C du chou.',
    ingredients: [
      { item: 'Chou vert frisé ou chou pommé bio', quantite: '250 g' },
      { item: 'Pommes bio acidulées', quantite: '200 g' },
      { item: 'Carotte bio (facultatif)', quantite: '100 g' },
      { item: 'Citron jaune bio (jus)', quantite: '½ citron' },
      { item: 'Gingembre frais bio (facultatif)', quantite: '5 g' },
    ],
    preparation: [
      'Détacher les feuilles de chou, retirer les côtes les plus dures, laver.',
      'Brosser pommes, carotte et gingembre.',
      'Plier les feuilles de chou en paquets serrés, alterner avec les morceaux durs dans l\'extracteur.',
      'Ajouter le jus de citron.',
      'Boire immédiatement après extraction (Walker insistait sur la consommation immédiate du jus de chou).',
    ],
    benefices: [
      'Vitamine C, vitamine K, glucosinolates et soufre organique.',
      'Soutien traditionnel du confort gastrique (selon Walker).',
      'Apport antioxydant intéressant en saison froide.',
      'Goût adouci par la pomme, accessible.',
    ],
    frequence:
      '1 verre de 200 ml, 2 à 3 fois par semaine, en automne-hiver, cure de 3 semaines.',
    appareil: 'extracteur',
    walkerReference:
      'Inspiré de Walker, Fresh Vegetable and Fruit Juices, 1936/1978 — chapitre sur le chou cru.',
    contre_indications: [
      'Brassicacées (chou) : contre-indication relative en cas de traitement antithyroïdien ou d\'hypothyroïdie non équilibrée — demander un avis médical.',
      'Traitement par AVK : interférence avec la vitamine K, surveillance INR.',
      'Côlon irritable : commencer par très petite quantité (effets digestifs possibles).',
      'Reflux sévère : surveiller la tolérance.',
      'Diabète : modérer la pomme.',
    ],
    tradition:
      'Adaptation moderne de la formule de Walker pour le jus de chou, rendue plus accessible.',
    tags: ['chou', 'pomme', 'citron', 'walker', 'immunité', 'hiver'],
    updatedAt: '2026-05-29',
  },
];
