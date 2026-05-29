import type { RecetteJus } from '../types';

/**
 * Recettes fondamentales de Norman W. Walker (1886–1985).
 *
 * Walker était un pionnier de la nutrition vivante et de l'extraction lente.
 * Ses formules, publiées notamment dans « Fresh Vegetable and Fruit Juices »
 * (1936, révisé 1970/1978), reposent sur l'observation empirique et la
 * tradition naturopathique nord-américaine du XXe siècle.
 *
 * Ces recettes sont reproduites à titre patrimonial et culturel.
 * Les bénéfices décrits sont ceux que Walker leur attribuait : ils relèvent
 * d'un savoir traditionnel et n'ont pas tous fait l'objet de validations
 * cliniques modernes. Aucune de ces préparations ne remplace un avis médical.
 */
export const JUS_WALKER: RecetteJus[] = [
  {
    slug: 'jus-carotte-pur-walker',
    category: 'walker-fondamentaux',
    nom: 'Jus de carotte pur (le « roi » selon Walker)',
    excerpt:
      'La formule la plus emblématique de Walker : un grand verre de carotte fraîche, simplement extraite. Source naturelle de bêta-carotène et de minéraux assimilables.',
    intro:
      'Walker considérait le jus de carotte cru comme le « jus universel ». Il en faisait la base de presque toutes ses cures, et lui attribuait un rôle de soutien général de l\'organisme. Sa douceur naturelle le rend accessible, mais il convient de modérer la quantité chez les personnes glycémiquement sensibles.',
    ingredients: [
      { item: 'Carottes biologiques, bien brossées', quantite: '500 g (≈ 5 carottes moyennes)' },
    ],
    preparation: [
      'Brosser soigneusement les carottes sous l\'eau froide ; ne pas les éplucher si elles sont bio.',
      'Couper en tronçons adaptés à la cheminée de l\'appareil.',
      'Extraire à vitesse lente pour préserver enzymes et arômes.',
      'Boire immédiatement, à petites gorgées, en « mâchant » le jus.',
    ],
    benefices: [
      'Apport généreux en bêta-carotène (précurseur de la vitamine A) — traditionnellement associé au confort visuel et cutané.',
      'Source de potassium, calcium et magnésium sous forme assimilable.',
      'Walker lui prêtait un effet de soutien hépatique et digestif d\'usage courant.',
      'Goût doux qui en fait une excellente base d\'initiation aux jus crus.',
    ],
    frequence:
      '1 à 2 verres de 250 ml par jour, à jeun ou en milieu de matinée. Walker évoquait jusqu\'à 500 ml/jour dans ses cures, mais il est prudent de commencer plus modestement.',
    appareil: 'extracteur',
    walkerReference:
      'Walker, Fresh Vegetable and Fruit Juices, 1936/1978 — chapitre sur la carotte.',
    contre_indications: [
      'Diabète ou résistance à l\'insuline : la carotte est riche en sucres naturels — limiter à un petit verre et privilégier après un repas.',
      'Une consommation très importante et prolongée peut provoquer une caroténodermie (coloration orangée de la peau), bénigne et réversible.',
    ],
    tradition:
      'Pilier historique des cures de jus naturopathiques depuis Walker et Bircher-Benner.',
    tags: ['carotte', 'walker', 'fondamental', 'bêta-carotène', 'débutant'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-carotte-celeri-walker',
    category: 'walker-fondamentaux',
    nom: 'Carotte + céleri — formule « équilibre nerveux » de Walker',
    excerpt:
      'L\'association que Walker recommandait pour soutenir le système nerveux et le rythme cardiaque grâce au sodium organique du céleri.',
    intro:
      'Walker considérait le céleri-branche comme la meilleure source alimentaire de « sodium organique », qu\'il distinguait du chlorure de sodium. Associé à la douceur de la carotte, il en faisait une boisson de fond pour les tempéraments tendus, surmenés ou facilement essoufflés.',
    ingredients: [
      { item: 'Carottes bio', quantite: '350 g' },
      { item: 'Céleri branche bio, feuilles incluses', quantite: '200 g (≈ 4 branches)' },
    ],
    preparation: [
      'Brosser les carottes et rincer le céleri.',
      'Couper en morceaux ; conserver les feuilles tendres du céleri.',
      'Passer en alternance dans l\'extracteur pour éviter les fibres collantes.',
      'Mélanger doucement et boire dans les 10 minutes.',
    ],
    benefices: [
      'Le céleri apporte potassium, sodium organique et un peu de magnésium.',
      'Traditionnellement utilisé pour accompagner les états de fatigue nerveuse.',
      'Walker l\'associait au « rééquilibrage » du système nerveux autonome.',
      'Goût plus salin que la carotte seule, qui en fait un jus de fin de matinée agréable.',
    ],
    frequence:
      '1 verre de 250–300 ml par jour, en cure de 2 à 3 semaines, de préférence loin des repas.',
    appareil: 'extracteur',
    walkerReference:
      'Walker, Fresh Vegetable and Fruit Juices, 1936/1978 — section « sodium organique ».',
    contre_indications: [
      'Hypertension sévère et traitement diurétique : demander un avis médical (le céleri apporte du potassium et peut influencer le bilan hydrosodé).',
      'Allergie connue aux Apiacées (céleri, persil, fenouil).',
      'Diabète : adapter la part de carotte.',
    ],
    tradition:
      'Formule emblématique de Walker, popularisée dans la naturopathie nord-américaine du XXe siècle.',
    tags: ['carotte', 'céleri', 'walker', 'nerveux', 'minéraux'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-carotte-epinards-walker',
    category: 'walker-fondamentaux',
    nom: 'Carotte + épinards — « nourriture des intestins » selon Walker',
    excerpt:
      'La formule que Walker considérait comme la plus utile au tube digestif : douceur de la carotte et chlorophylle des épinards crus.',
    intro:
      'Walker plaçait cette combinaison parmi les plus précieuses pour l\'hygiène intestinale. Il la recommandait en cas de paresse digestive chronique, notamment chez les personnes consommant peu de crudités. La proportion classique qu\'il citait était d\'environ 10 parts de carotte pour 6 parts d\'épinards.',
    ingredients: [
      { item: 'Carottes bio', quantite: '400 g' },
      { item: 'Épinards frais bio, jeunes pousses ou feuilles', quantite: '150 g' },
    ],
    preparation: [
      'Laver très soigneusement les épinards (3 bains d\'eau froide).',
      'Brosser les carottes.',
      'Rouler les épinards en boules serrées et alterner avec les carottes dans l\'extracteur — cela améliore le rendement.',
      'Mélanger et boire frais, immédiatement.',
    ],
    benefices: [
      'Apport simultané de bêta-carotène, chlorophylle, folates et fer non héminique.',
      'Walker en faisait son jus de référence pour soutenir le transit et la régénération de la muqueuse intestinale.',
      'Riche en magnésium et potassium d\'origine végétale.',
      'Goût étonnamment doux malgré la couleur verte.',
    ],
    frequence:
      '1 verre de 300 ml par jour, le matin, en cure de 3 semaines puis pause d\'une semaine.',
    appareil: 'extracteur',
    walkerReference:
      'Walker, Fresh Vegetable and Fruit Juices, 1936/1978 — « food for the intestines ».',
    contre_indications: [
      'Lithiase rénale oxalique : les épinards crus sont riches en oxalates — éviter ou demander un avis médical.',
      'Traitement anticoagulant par AVK (warfarine, acénocoumarol) : la vitamine K des épinards interfère, surveillance INR nécessaire.',
      'Diabète : modérer la part de carotte.',
    ],
    tradition:
      'Recette de référence des cures de jus depuis Walker.',
    tags: ['carotte', 'épinards', 'walker', 'intestin', 'chlorophylle'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-carotte-betterave-concombre-walker',
    category: 'walker-fondamentaux',
    nom: 'Carotte + betterave + concombre (ratio 16/3/3 de Walker)',
    excerpt:
      'La formule « foie-vésicule-reins » de Walker, dans les proportions qu\'il recommandait : 16 parts de carotte, 3 de betterave, 3 de concombre.',
    intro:
      'Walker proposait cette combinaison comme jus de fond pour soutenir les fonctions hépatique, biliaire et rénale. Le ratio 16/3/3 est important : la betterave est puissante et ne doit jamais dominer le mélange. Il convient de l\'introduire progressivement.',
    ingredients: [
      { item: 'Carottes bio', quantite: '400 g (≈ 16 parts)' },
      { item: 'Betterave crue bio', quantite: '75 g (≈ 3 parts)' },
      { item: 'Concombre bio non épluché si bio', quantite: '75 g (≈ 3 parts)' },
    ],
    preparation: [
      'Brosser les carottes ; éplucher la betterave si non bio.',
      'Couper le concombre en tronçons.',
      'Extraire d\'abord la betterave, puis le concombre, puis les carottes — cela rince l\'extracteur naturellement.',
      'Mélanger et boire à petites gorgées sur 15–20 minutes.',
    ],
    benefices: [
      'Walker attribuait à cette formule un rôle de drainage doux du foie, de la vésicule et des reins.',
      'La betterave apporte des bétalaïnes (pigments antioxydants étudiés en recherche moderne).',
      'Le concombre, très hydratant, apporte silice et minéraux d\'eau.',
      'Combinaison équilibrée en saveurs, douce malgré sa puissance.',
    ],
    frequence:
      'Commencer par 150 ml, puis monter à 300 ml/jour sur 2 semaines maximum. Cure 1 à 2 fois par an.',
    appareil: 'extracteur',
    walkerReference:
      'Walker, Fresh Vegetable and Fruit Juices, 1936/1978 — formule n°61 « kidney, gall bladder, liver ».',
    contre_indications: [
      'Lithiase biliaire ou rénale connue : avis médical impératif avant tout jus de betterave.',
      'Hypotension artérielle : la betterave peut accentuer la baisse de tension.',
      'Coloration rose des urines/selles possible et bénigne (béturie).',
      'Diabète : surveiller la glycémie.',
    ],
    tradition:
      'L\'une des formules les plus citées du corpus Walker, reprise dans la naturopathie française classique.',
    tags: ['carotte', 'betterave', 'concombre', 'walker', 'foie', 'reins'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-celeri-pur-walker',
    category: 'walker-fondamentaux',
    nom: 'Jus de céleri-branche pur — la formule « sodium organique »',
    excerpt:
      'Le jus le plus emblématique de l\'approche minérale de Walker, simple, salin, riche en potassium.',
    intro:
      'Walker considérait le céleri-branche comme un aliment cardinal pour rééquilibrer le ratio sodium/potassium de l\'alimentation moderne. Il en faisait un jus pratiquement « médicinal », à boire seul et à jeun. La tradition naturopathique a depuis confirmé son intérêt comme tonique minéral général.',
    ingredients: [
      { item: 'Céleri branche bio, pieds entiers, feuilles comprises', quantite: '500 g (≈ 1 pied entier)' },
    ],
    preparation: [
      'Rincer abondamment, séparer les branches, garder les feuilles.',
      'Couper en tronçons de 5 cm.',
      'Extraire à vitesse lente.',
      'Boire à jeun, à température ambiante, en 1 prise.',
    ],
    benefices: [
      'Apport généreux en potassium, sodium organique, vitamine K et un peu de vitamine C.',
      'Walker lui attribuait un rôle de soutien nerveux, articulaire et rénal.',
      'Effet hydratant et reminéralisant doux.',
      'Goût rafraîchissant qui ne fatigue pas.',
    ],
    frequence:
      '250 à 400 ml à jeun le matin, cure de 21 à 28 jours, puis pause.',
    appareil: 'extracteur',
    walkerReference:
      'Walker, Fresh Vegetable and Fruit Juices, 1936/1978 — chapitre sur le céleri.',
    contre_indications: [
      'Insuffisance rénale, hyperkaliémie ou traitement épargneur de potassium : avis médical.',
      'Hypertension traitée par diurétiques : surveillance recommandée.',
      'Allergie aux Apiacées.',
      'Traitement par lévothyroxine ou anticoagulants : décaler la prise d\'au moins 2 heures.',
    ],
    tradition:
      'Reprise et popularisée à grande échelle, plus tard, par d\'autres auteurs naturopathes ; la formule originelle reste celle de Walker.',
    tags: ['céleri', 'walker', 'sodium-organique', 'reminéralisation', 'matin'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-carotte-persil-walker',
    category: 'walker-fondamentaux',
    nom: 'Carotte + persil — chlorophylle intensive (max 60 ml de persil)',
    excerpt:
      'Une petite quantité de persil dans une base de carotte : Walker insistait sur la modération, car le jus de persil est très concentré.',
    intro:
      'Walker recommandait le jus de persil pour ses pigments verts et minéraux, mais avertissait formellement de ne jamais en boire seul ni en quantité importante : « jamais plus de 60 ml (2 onces fluides) par prise ». Associé à la carotte, il devient un excellent soutien du teint et de la vitalité.',
    ingredients: [
      { item: 'Carottes bio', quantite: '450 g' },
      { item: 'Persil plat ou frisé bio, frais', quantite: '40 g (≈ 1 petit bouquet) — produira ≤ 60 ml de jus' },
    ],
    preparation: [
      'Rincer le persil et le passer en premier dans l\'extracteur, en l\'enroulant en boule serrée entre des morceaux de carotte.',
      'Compléter avec les carottes brossées.',
      'Mélanger soigneusement : le jus de persil est très dense.',
      'Boire immédiatement, par petites gorgées.',
    ],
    benefices: [
      'Chlorophylle, fer non héminique, vitamine C, vitamine K et apigénine.',
      'Walker l\'associait à la qualité du sang et au teint cutané.',
      'Soutien traditionnel du drainage rénal léger.',
      'Combinaison gustativement équilibrée si l\'on respecte la proportion.',
    ],
    frequence:
      '1 verre de 250 ml maximum par jour, sans dépasser 60 ml de jus de persil par prise. Cure de 10 à 15 jours.',
    appareil: 'extracteur',
    walkerReference:
      'Walker, Fresh Vegetable and Fruit Juices, 1936/1978 — avertissement spécifique sur la quantité de jus de persil.',
    contre_indications: [
      'Grossesse : éviter le jus de persil concentré (effet emménagogue traditionnellement décrit à dose élevée).',
      'Traitement anticoagulant (AVK) : la vitamine K interfère.',
      'Insuffisance rénale : avis médical.',
      'Lithiase oxalique : prudence.',
    ],
    tradition:
      'Formule classique des cures de printemps naturopathiques.',
    tags: ['carotte', 'persil', 'walker', 'chlorophylle', 'fer'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-epinards-celeri-persil-carotte-walker',
    category: 'walker-fondamentaux',
    nom: 'Épinards + céleri + persil + carotte — la combinaison verte de Walker',
    excerpt:
      'L\'un des « jus complets » de Walker : une base de carotte qui adoucit trois végétaux verts riches en chlorophylle.',
    intro:
      'Walker documentait cette combinaison comme un jus dépuratif de fond, plus intense que les précédents. À réserver aux personnes déjà habituées aux jus verts et bien tolérantes des Apiacées. À introduire progressivement en cure courte.',
    ingredients: [
      { item: 'Carottes bio', quantite: '350 g' },
      { item: 'Épinards frais bio', quantite: '100 g' },
      { item: 'Céleri branche bio', quantite: '100 g (≈ 2 branches)' },
      { item: 'Persil plat bio', quantite: '25 g (≈ ½ petit bouquet)' },
    ],
    preparation: [
      'Laver épinards et persil dans plusieurs bains d\'eau froide.',
      'Brosser carottes et céleri.',
      'Alterner verts et carottes dans l\'extracteur, en enroulant les feuilles en boules.',
      'Mélanger et boire frais dans les 10 minutes.',
    ],
    benefices: [
      'Jus très chlorophyllien, riche en magnésium, folates et minéraux d\'origine végétale.',
      'Walker en faisait un soutien du drainage hépatique et intestinal.',
      'Apporte une part importante de l\'apport quotidien en végétaux crus.',
      'Sensation de fraîcheur et de légèreté après consommation rapportée traditionnellement.',
    ],
    frequence:
      '1 verre de 250 ml par jour, cure de 7 à 10 jours, 1 à 2 fois par an.',
    appareil: 'extracteur',
    walkerReference:
      'Walker, Fresh Vegetable and Fruit Juices, 1936/1978 — formules dépuratives combinées.',
    contre_indications: [
      'Lithiase oxalique : épinards et persil augmentent l\'apport en oxalates.',
      'Traitement par AVK : risque d\'interférence majeure avec la vitamine K.',
      'Insuffisance rénale : avis médical impératif.',
      'Grossesse : prudence avec la part de persil.',
      'Allergie aux Apiacées.',
    ],
    tradition:
      'Recette dépurative emblématique du courant Walker.',
    tags: ['épinards', 'céleri', 'persil', 'carotte', 'walker', 'détox', 'chlorophylle'],
    updatedAt: '2026-05-29',
  },
  {
    slug: 'jus-chou-cru-walker',
    category: 'walker-fondamentaux',
    nom: 'Jus de chou cru — tradition stomacale de Walker',
    excerpt:
      'Le jus que Walker recommandait pour le confort gastrique, à condition d\'être bu fraîchement extrait et progressivement.',
    intro:
      'Walker, comme la tradition naturopathique européenne (chou « médecin du pauvre »), considérait le jus de chou cru comme un soutien remarquable de la muqueuse gastrique. Des travaux nutritionnels du milieu du XXe siècle (Cheney, Stanford, 1949) ont décrit un facteur — appelé alors « vitamine U » (S-méthylméthionine) — qui pourrait expliquer cet usage traditionnel ; ces données restent partielles et ne valent pas indication médicale.',
    ingredients: [
      { item: 'Chou vert frisé ou chou pommé bio, feuilles externes retirées', quantite: '400 g' },
      { item: 'Carotte bio (facultatif, pour adoucir)', quantite: '100 g' },
    ],
    preparation: [
      'Détacher les feuilles de chou, les laver soigneusement.',
      'Couper en lanières, plier en paquets serrés.',
      'Extraire à vitesse lente avec, si souhaité, la carotte en alternance.',
      'Boire immédiatement, à petites gorgées tièdes (jamais glacé), de préférence 20 minutes avant un repas.',
    ],
    benefices: [
      'Soutien traditionnel du confort gastrique et de la muqueuse digestive.',
      'Apport en vitamine C, vitamine K, soufre organique et glucosinolates.',
      'Walker recommandait sa consommation immédiate après extraction.',
      'Combinaison possible avec un peu de carotte pour la palatabilité.',
    ],
    frequence:
      '100 à 200 ml par jour, en 1 ou 2 prises, cure de 2 à 3 semaines.',
    appareil: 'extracteur',
    walkerReference:
      'Walker, Fresh Vegetable and Fruit Juices, 1936/1978 — chapitre sur le chou ; voir aussi G. Cheney, Stanford Med. Bull., 1949 (« vitamin U »).',
    contre_indications: [
      'Brassicacées (chou, kale, brocoli, navet) : à éviter en cas de traitement antithyroïdien ou d\'hypothyroïdie non équilibrée — la consommation crue peut interférer avec le métabolisme iodé.',
      'Côlon irritable avec tendance aux ballonnements : commencer par très petites quantités.',
      'Reflux gastro-œsophagien sévère : surveiller la tolérance.',
      'Possibles flatulences en début de cure (le soufre).',
    ],
    tradition:
      'Le chou est documenté comme aliment thérapeutique depuis l\'Antiquité (Caton, Pline). Walker a réintégré le jus cru dans la naturopathie moderne.',
    tags: ['chou', 'walker', 'estomac', 'tradition', 'soufre'],
    updatedAt: '2026-05-29',
  },
];
