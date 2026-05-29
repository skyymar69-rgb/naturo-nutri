import type { Actualite } from '../types';

/**
 * Batch 3 — Actualités sourcées PubMed (mai 2026)
 * 12 articles : 3 vitamines, 3 minéraux, 3 adaptogènes/plantes, 3 microbiote/nutrition.
 * Toutes les sources sont des PMID vérifiés via E-utilities NCBI.
 * Ton volontairement prudent : conditionnel, « il semblerait », pas de promesse.
 */
export const ACTUALITES_BATCH3_PUBMED: Actualite[] = [
  /* ─────────────────────────── VITAMINES ─────────────────────────── */
  {
    slug: 'vitamine-d-mortalite-toute-cause',
    category: 'vitamines',
    title: 'Vitamine D et mortalité toute cause : ce que disent les revues 2025-2026',
    excerpt:
      "Une revue d'état de l'art 2026 fait le point sur les bénéfices et controverses de la vitamine D, sans trancher définitivement.",
    intro:
      "La vitamine D a longtemps été présentée comme un déterminant majeur de la mortalité. Les revues les plus récentes invitent à plus de nuance : les bénéfices semblent réels chez les personnes carencées, mais beaucoup plus discutés chez les sujets déjà suffisants. Voici l'état des connaissances en 2026.",
    sections: [
      {
        heading: 'Ce que la littérature suggère',
        body: "Une revue narrative d'état de l'art publiée en 2026 dans Current Nutrition Reports a passé en revue les preuves triangulées sur la vitamine D et différents critères de santé [#s1]. Les auteurs auraient observé que le signal le plus robuste concerne les populations carencées : la supplémentation y semble associée à une réduction modeste de la mortalité, en particulier chez les sujets âgés institutionnalisés. Chez les adultes en bonne santé avec des taux suffisants, l'effet sur la mortalité toute cause apparaît beaucoup plus incertain.",
      },
      {
        heading: 'Le contexte des essais récents',
        body: "Les grands essais randomisés des dernières années n'ont, dans l'ensemble, pas démontré de bénéfice clair de la supplémentation systématique chez les adultes non carencés. Une méta-analyse 2025 sur la vitamine D dans les infections respiratoires pédiatriques [#s2] suggère néanmoins un signal protecteur dans certains sous-groupes. Les chercheurs auraient souligné que les disparités de dose, de durée et de statut initial expliquent en grande partie les résultats divergents.",
      },
      {
        heading: 'Comment interpréter ces données',
        body: "Les données suggèrent qu'il serait prudent de corriger une carence documentée plutôt que de supplémenter à l'aveugle. Les auteurs de la revue 2026 [#s1] recommanderaient un dosage du 25(OH)D avant toute supplémentation prolongée, et un objectif raisonnable plutôt qu'un taux maximal. Les controverses persistantes concernent surtout la dose optimale et la pertinence d'une supplémentation universelle.",
      },
    ],
    takeaway:
      "Il semblerait que la vitamine D garde un intérêt clair en cas de carence avérée, mais que son effet sur la mortalité toute cause chez les sujets suffisants reste à confirmer. Mieux vaut doser avant de supplémenter.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title:
          'Vitamin D and Health Outcomes: State-of-the-Art Review of Triangulated Evidence and Ongoing Controversies',
        authors: 'Dalamaga M, et al.',
        journal: 'Current Nutrition Reports',
        year: 2026,
        pmid: '41849024',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41849024/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title:
          'The role of vitamin D in the prevention and treatment of acute respiratory infections in pediatric populations: a systematic review and meta-analysis of randomized controlled trials',
        authors: 'Wang L, et al.',
        journal: 'BMC Pediatrics',
        year: 2025,
        pmid: '41387808',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41387808/',
      },
    ],
    publishedAt: '2026-05-29',
    readingTime: 4,
    tags: ['vitamine D', 'mortalité', 'supplémentation', 'revue 2026'],
  },

  {
    slug: 'b12-cognition-personne-agee',
    category: 'vitamines',
    title: 'Vitamine B12 et cognition de la personne âgée : la revue 2025',
    excerpt:
      "Une méta-analyse 2025 explore l'effet des nutriments méthylants — dont la B12 — sur la cognition des seniors avec déclin léger.",
    intro:
      "La carence en B12 est fréquente après 65 ans, et le lien avec le déclin cognitif est régulièrement évoqué. Les preuves cliniques d'un effet de la supplémentation restent toutefois nuancées. Voici ce que suggèrent les travaux récents.",
    sections: [
      {
        heading: 'Une revue systématique chez les seniors MCI',
        body: "Une revue systématique et méta-analyse publiée dans Geriatric Nursing en 2025 [#s1] s'est concentrée sur les nutriments méthylants (B12, folates, B6) chez les adultes plus âgés avec mild cognitive impairment (MCI). Les chercheurs auraient observé un signal modeste mais cohérent en faveur d'une amélioration de certains scores cognitifs et d'une normalisation des marqueurs du métabolisme à un carbone. L'hétérogénéité des protocoles limite cependant la portée des conclusions.",
      },
      {
        heading: 'Ce que cela signifie en pratique',
        body: "Les données suggèrent que la correction d'une carence en B12 documentée (par exemple par dosage de la cobalamine sérique ou de l'acide méthylmalonique) reste un geste prudent chez le sujet âgé. Une revue Cochrane 2024 [#s2] portant sur la B12 en supplémentation maternelle et néonatale rappelle que les essais bien conduits restent rares et que les bénéfices dépendent fortement du statut initial.",
      },
      {
        heading: 'Limites et prudence',
        body: "Les auteurs des revues récentes auraient souligné que supplémenter en B12 sans carence ne semble pas améliorer la cognition de sujets en bonne santé. L'effet protecteur sur le déclin cognitif n'est pas démontré à grande échelle. Les chercheurs recommanderaient un dosage avant toute supplémentation prolongée chez le senior, surtout en cas de régime végétalien, d'IPP au long cours ou de metformine.",
      },
    ],
    takeaway:
      "Il semblerait que corriger une carence en B12 chez le senior soit utile, mais qu'une supplémentation systématique chez les sujets non carencés n'apporte pas de bénéfice cognitif démontré.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title:
          'The effects of methyl nutrients on cognition and one carbon metabolism in older adults with mild cognitive impairment, A systematic review and meta-analysis',
        authors: 'Zhao Y, et al.',
        journal: 'Geriatric Nursing',
        year: 2025,
        pmid: '40249981',
        url: 'https://pubmed.ncbi.nlm.nih.gov/40249981/',
      },
      {
        id: 's2',
        type: 'review',
        title:
          'Vitamin B12 supplementation during pregnancy for maternal and child health outcomes',
        authors: 'Finkelstein JL, et al.',
        journal: 'Cochrane Database of Systematic Reviews',
        year: 2024,
        pmid: '38189492',
        url: 'https://pubmed.ncbi.nlm.nih.gov/38189492/',
      },
    ],
    publishedAt: '2026-05-29',
    readingTime: 4,
    tags: ['vitamine B12', 'cognition', 'personne âgée', 'MCI'],
  },

  {
    slug: 'vitamine-k2-mk7-osteoporose',
    category: 'vitamines',
    title: 'Vitamine K2 (MK-7) et os : ce que dit la méta-analyse 2025',
    excerpt:
      "Une méta-analyse 2025 a examiné l'effet de la vitamine K2 sur les marqueurs du remodelage osseux chez les femmes ménopausées.",
    intro:
      "La vitamine K2, et notamment la forme MK-7, suscite un intérêt croissant en prévention de l'ostéoporose. Les preuves cliniques restent partielles, mais une méta-analyse récente apporte un éclairage utile.",
    sections: [
      {
        heading: 'Ce que la méta-analyse 2025 a observé',
        body: "Une méta-analyse publiée dans Frontiers in Endocrinology en 2025 [#s1] a regroupé plusieurs essais randomisés évaluant la K2 chez des femmes ménopausées ostéoporotiques. Les chercheurs auraient observé une modification favorable de certains marqueurs biochimiques du remodelage osseux (notamment la fraction carboxylée de l'ostéocalcine). L'impact sur la densité minérale osseuse et surtout sur le risque de fracture reste à ce stade plus difficile à établir, faute d'essais de longue durée à effectifs suffisants.",
      },
      {
        heading: 'Le rationnel biologique',
        body: "La K2 sert de cofacteur à la gamma-carboxylation de l'ostéocalcine, protéine qui fixe le calcium dans la matrice osseuse. Des travaux précliniques 2026 [#s2] sur modèle animal d'ostéoporose induite par déficit œstrogénique suggèrent un effet protecteur comparable à différentes doses de MK-7. Ces données restent expérimentales et ne se transposent pas mécaniquement à l'humain.",
      },
      {
        heading: "Comment utiliser raisonnablement",
        body: "Les données suggèrent que la K2 (sous forme MK-7) puisse être envisagée en complément, et non en substitution, d'une stratégie globale (calcium, vitamine D, activité physique en charge). Les auteurs auraient souligné que la K2 est contre-indiquée chez les personnes sous antivitamines K (warfarine, fluindione). Il semblerait prudent de discuter toute supplémentation avec un professionnel en cas d'antécédent thromboembolique.",
      },
    ],
    takeaway:
      "Les données suggèrent un intérêt modéré de la MK-7 sur les marqueurs osseux chez la femme ménopausée, mais son effet anti-fracture n'est pas encore démontré. Prudence absolue en cas de traitement anticoagulant.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title:
          'The effect of vitamin K2 supplementation on bone turnover biochemical markers in postmenopausal osteoporosis patients: a systematic review and meta-analysis',
        authors: 'Zhang Z, et al.',
        journal: 'Frontiers in Endocrinology',
        year: 2025,
        pmid: '41268154',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41268154/',
      },
      {
        id: 's2',
        type: 'pubmed',
        title:
          'Comparable Protective Effects of Low- and High-Dose MK-7 on Bone Structure and Remodeling in a Rat Model of Osteoporosis Induced by Estrogen Deficiency and Glucocorticoid Exposure',
        authors: 'Chiang HJ, et al.',
        journal: 'Nutrients',
        year: 2026,
        pmid: '42197064',
        url: 'https://pubmed.ncbi.nlm.nih.gov/42197064/',
      },
    ],
    publishedAt: '2026-05-29',
    readingTime: 4,
    tags: ['vitamine K2', 'MK-7', 'ostéoporose', 'os'],
  },

  /* ─────────────────────────── MINÉRAUX ─────────────────────────── */
  {
    slug: 'magnesium-syndrome-metabolique',
    category: 'mineraux',
    title: 'Magnésium et syndrome métabolique : la méta-analyse 2025',
    excerpt:
      "Une méta-analyse 2025 a observé un effet du magnésium au long cours sur les marqueurs inflammatoires du syndrome métabolique.",
    intro:
      "Le magnésium est connu pour son rôle dans plus de 300 réactions enzymatiques, dont celles du métabolisme glucidique. Une méta-analyse récente s'est penchée spécifiquement sur son effet inflammatoire dans le syndrome métabolique.",
    sections: [
      {
        heading: 'Ce que la méta-analyse 2025 suggère',
        body: "Une méta-analyse publiée dans Frontiers in Nutrition en 2025 [#s1] a regroupé des essais randomisés évaluant un apport prolongé de magnésium chez des patients avec syndrome métabolique. Les chercheurs auraient observé une réduction modeste de certains marqueurs inflammatoires (CRP notamment) après plusieurs mois de supplémentation. L'hétérogénéité des sels utilisés et des doses (généralement 250-500 mg/j) reste cependant importante.",
      },
      {
        heading: 'Un signal métabolique plus large',
        body: "Une autre méta-analyse 2026 [#s2] sur les minéraux (magnésium, chrome, zinc, sélénium) dans le syndrome des ovaires polykystiques — souvent associé à une insulino-résistance — suggère un effet bénéfique sur la sensibilité à l'insuline. Les données suggèrent ainsi que le magnésium puisse jouer un rôle modulateur dans plusieurs facettes du syndrome métabolique, sans pour autant constituer un traitement.",
      },
      {
        heading: 'Limites et prudence',
        body: "Les auteurs auraient rappelé qu'une supplémentation excessive peut entraîner des troubles digestifs (diarrhée) et qu'elle est à adapter en cas d'insuffisance rénale. Les formes les mieux tolérées (bisglycinate, citrate) ne sont pas toujours celles évaluées dans les essais. Il semblerait raisonnable d'optimiser d'abord les apports alimentaires (légumineuses, oléagineux, légumes verts) avant de supplémenter.",
      },
    ],
    takeaway:
      "Il semblerait que le magnésium au long cours réduise modestement l'inflammation dans le syndrome métabolique. Les bénéfices restent toutefois complémentaires à l'alimentation et à l'activité physique.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title:
          'The effect of long-term magnesium intake on inflammatory markers in patients with metabolic syndrome: a systematic review and meta-analysis of randomized controlled trials',
        authors: 'Wang W, et al.',
        journal: 'Frontiers in Nutrition',
        year: 2025,
        pmid: '41245414',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41245414/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title:
          'Effectiveness of mineral supplements (magnesium, chromium, zinc, selenium, chromium picolinate) in reducing insulin resistance in polycystic ovary syndrome: a meta-analysis of randomized controlled trials',
        authors: 'Ye J, et al.',
        journal: 'BMC Endocrine Disorders',
        year: 2026,
        pmid: '41580698',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41580698/',
      },
    ],
    publishedAt: '2026-05-29',
    readingTime: 4,
    tags: ['magnésium', 'syndrome métabolique', 'inflammation', 'insuline'],
  },

  {
    slug: 'zinc-fertilite-masculine',
    category: 'mineraux',
    title: 'Zinc et fertilité masculine : ce que dit la revue 2025',
    excerpt:
      "Une méta-analyse 2025 a examiné le lien entre éléments du sperme (dont zinc) et infertilité masculine.",
    intro:
      "Le zinc est concentré dans la prostate et dans le liquide séminal. Son rôle dans la spermatogenèse est documenté, mais les essais cliniques de supplémentation restent hétérogènes.",
    sections: [
      {
        heading: 'Une méta-analyse sur les éléments séminaux',
        body: "Une revue systématique et méta-analyse publiée dans Toxicology Letters en 2025 [#s1] a analysé les associations entre les éléments essentiels et non essentiels présents dans le sperme et le risque d'infertilité masculine. Les chercheurs auraient observé que des concentrations séminales basses en zinc semblaient plus fréquentes chez les hommes infertiles. La causalité n'est cependant pas démontrée par ces seuls travaux observationnels.",
      },
      {
        heading: 'Et les essais de supplémentation ?',
        body: "Une autre méta-analyse 2023 publiée dans Heliyon [#s2] a regroupé des essais évaluant l'acide folique seul ou associé au zinc chez des hommes infertiles. Les données suggèrent un effet modeste sur certains paramètres spermatiques (concentration, motilité). Les résultats sur les taux de grossesse restent plus incertains et les effectifs des essais souvent limités.",
      },
      {
        heading: "Comment utiliser raisonnablement",
        body: "Il semblerait prudent d'optimiser d'abord les apports alimentaires en zinc (huîtres, viandes, légumineuses, oléagineux) avant toute supplémentation. Les auteurs auraient rappelé qu'un excès de zinc peut interférer avec l'absorption du cuivre et que les supplémentations prolongées à fortes doses ne sont pas anodines. Une évaluation médicale (spermogramme, dosage du zinc) reste l'approche la plus raisonnable.",
      },
    ],
    takeaway:
      "Il semblerait qu'un statut bas en zinc soit associé à des paramètres spermatiques altérés, mais l'effet d'une supplémentation systématique sur la fertilité reste modeste et à individualiser.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title:
          "Associations of semen essential/non-essential elements with the risk of male infertility: A systematic review and meta-analysis",
        authors: 'Chen J, et al.',
        journal: 'Toxicology Letters',
        year: 2025,
        pmid: '40829714',
        url: 'https://pubmed.ncbi.nlm.nih.gov/40829714/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title:
          'Effects of folic acid and folic acid plus zinc supplements on the sperm characteristics and pregnancy outcomes of infertile men: A systematic review and meta-analysis',
        authors: 'Li X, et al.',
        journal: 'Heliyon',
        year: 2023,
        pmid: '37539255',
        url: 'https://pubmed.ncbi.nlm.nih.gov/37539255/',
      },
    ],
    publishedAt: '2026-05-29',
    readingTime: 4,
    tags: ['zinc', 'fertilité masculine', 'spermatogenèse', 'spermogramme'],
  },

  {
    slug: 'selenium-cancer-prevention-update',
    category: 'mineraux',
    title: 'Sélénium et prévention du cancer : update 2025',
    excerpt:
      "Une méta-analyse 2025 réévalue le lien entre exposition au sélénium et risque de cancer cutané.",
    intro:
      "Le sélénium a longtemps été présenté comme un anticancéreux prometteur, jusqu'à ce que l'essai SELECT douche les enthousiasmes. Les données plus récentes invitent à une lecture nuancée selon le type de cancer.",
    sections: [
      {
        heading: 'Ce que la méta-analyse 2025 a observé',
        body: "Une méta-analyse dose-réponse publiée dans Journal of Trace Elements in Medicine and Biology en 2025 [#s1] s'est intéressée au lien entre exposition au sélénium et risque de cancer cutané. Les chercheurs auraient observé un signal complexe, avec selon les niveaux d'exposition des résultats parfois contradictoires entre cancers basocellulaires et mélanomes. Les données suggèrent qu'une supplémentation systématique en prévention ne soit pas justifiée.",
      },
      {
        heading: 'Un signal sur le cancer colorectal',
        body: "Une étude publiée en 2026 dans BMC Public Health [#s2] suggère qu'un statut sélénié bas serait associé à une incidence plus élevée de cancer colorectal dans certaines populations. Les auteurs auraient rappelé que ces données observationnelles ne démontrent pas qu'une supplémentation préviendrait le cancer. Le sélénium suit une courbe en U classique : trop peu et trop forment chacun un risque.",
      },
      {
        heading: 'Comment interpréter ces données',
        body: "Il semblerait prudent d'éviter toute supplémentation systématique en sélénium en l'absence de carence documentée. L'essai SELECT avait suggéré un risque accru de diabète de type 2 et d'agressivité de certaines tumeurs avec une supplémentation à forte dose. Les sources alimentaires (noix du Brésil, poissons, œufs) restent la voie la plus sûre.",
      },
    ],
    takeaway:
      "Les données suggèrent que la supplémentation systématique en sélénium pour prévenir le cancer ne soit pas indiquée. Une couverture alimentaire raisonnable suffit chez la plupart des adultes.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title:
          'Selenium exposure and risk of skin cancer: A systematic review and dose-response meta-analysis of epidemiologic evidence',
        authors: 'Filippini T, et al.',
        journal: 'Journal of Trace Elements in Medicine and Biology',
        year: 2025,
        pmid: '40674897',
        url: 'https://pubmed.ncbi.nlm.nih.gov/40674897/',
      },
      {
        id: 's2',
        type: 'cohort',
        title: 'Low level of selenium predicts high incidence of colorectal cancer',
        authors: 'Ying J, et al.',
        journal: 'BMC Public Health',
        year: 2026,
        pmid: '41947091',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41947091/',
      },
    ],
    publishedAt: '2026-05-29',
    readingTime: 4,
    tags: ['sélénium', 'cancer', 'prévention', 'courbe en U'],
  },

  /* ─────────────────── ADAPTOGÈNES & PLANTES ─────────────────── */
  {
    slug: 'safran-depression-meta-2024',
    category: 'adaptogenes-plantes',
    title: 'Safran et dépression : la méta-analyse GRADE 2026 sur 34 essais',
    excerpt:
      "Une méta-analyse GRADE 2026 regroupant 34 essais randomisés réévalue l'effet du safran sur la dépression et l'anxiété.",
    intro:
      "Le safran (Crocus sativus) est l'un des phytothérapiques les plus étudiés en santé mentale. Une méta-analyse récente intégrant la méthodologie GRADE permet d'évaluer la qualité globale des preuves.",
    sections: [
      {
        heading: 'Ce que la méta-analyse GRADE 2026 a observé',
        body: "Publiée dans Nutritional Neuroscience en 2026 [#s1], cette méta-analyse a regroupé 34 essais randomisés évaluant le safran dans la dépression, l'anxiété et les troubles de l'humeur. Les chercheurs auraient observé un effet statistiquement significatif sur les scores de dépression, comparable à celui d'antidépresseurs conventionnels dans certains essais. Le niveau de preuve GRADE reste cependant modéré à faible selon les comparaisons, en raison de l'hétérogénéité et du risque de biais.",
      },
      {
        heading: 'Un effet inscrit dans un courant plus large',
        body: "Une revue 2024 publiée dans Frontiers in Psychiatry [#s2] sur les phytochimiques dans la dépression auraient mentionné le safran parmi les candidats les mieux documentés. Les auteurs auraient souligné que les mécanismes (modulation sérotoninergique, antioxydants, anti-inflammatoires) sont cohérents avec les résultats cliniques, sans que cela suffise à conclure à un effet thérapeutique de premier plan.",
      },
      {
        heading: "Comment utiliser raisonnablement",
        body: "Il semblerait que les doses étudiées tournent autour de 30 mg/j d'extrait standardisé. Les essais durent généralement 6 à 12 semaines. Les auteurs auraient rappelé que le safran ne remplace pas une prise en charge psychiatrique en cas de dépression caractérisée, et qu'il existe des interactions potentielles avec les antidépresseurs (risque sérotoninergique). Une discussion avec le médecin reste indispensable.",
      },
    ],
    takeaway:
      "Il semblerait que le safran ait un effet réel mais modéré sur la dépression légère à modérée, avec un niveau de preuve qui reste à consolider. Il ne se substitue pas à une prise en charge médicale.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title:
          'Effect of saffron on depression, anxiety and mood disorder: a GRADE assessed systematic review and meta-analysis of 34 randomized controlled trials',
        authors: 'Mahmoudi R, et al.',
        journal: 'Nutritional Neuroscience',
        year: 2026,
        pmid: '41693488',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41693488/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Phytochemicals in the treatment of patients with depression: a systemic review',
        authors: 'Picheta N, et al.',
        journal: 'Frontiers in Psychiatry',
        year: 2024,
        pmid: '39717381',
        url: 'https://pubmed.ncbi.nlm.nih.gov/39717381/',
      },
    ],
    publishedAt: '2026-05-29',
    readingTime: 4,
    tags: ['safran', 'Crocus sativus', 'dépression', 'GRADE'],
  },

  {
    slug: 'curcuma-arthrose-genou-update',
    category: 'adaptogenes-plantes',
    title: 'Curcuma et arthrose du genou : la revue critique 2025',
    excerpt:
      "Une revue critique 2025 fait le point sur la curcumine dans l'arthrose du genou : effet modeste, méthodologie discutée.",
    intro:
      "La curcumine est l'un des phyto-actifs les plus étudiés dans l'arthrose. La revue critique 2025 invite cependant à relativiser les conclusions souvent trop enthousiastes.",
    sections: [
      {
        heading: 'Ce que la revue critique 2025 souligne',
        body: "Publiée dans Frontiers in Pharmacology en 2025 [#s1], cette revue critique des méta-analyses et revues systématiques sur la curcumine dans l'arthrose du genou met en lumière des biais récurrents : essais courts, biodisponibilité variable selon les formulations, comparateurs hétérogènes. Les chercheurs auraient observé un effet symptomatique modeste sur la douleur et la fonction, mais souligné que les conclusions de plusieurs méta-analyses étaient probablement trop optimistes au regard de la qualité réelle des essais inclus.",
      },
      {
        heading: 'Dans une comparaison entre suppléments',
        body: "Une méta-analyse en réseau publiée dans Nutrients en 2025 [#s2] a comparé l'efficacité de différents suppléments nutritionnels dans l'arthrose du genou. La curcumine y figure parmi les options évaluées, sans se détacher clairement des autres candidats comme la glucosamine ou les acides gras oméga-3. Les données suggèrent un effet réel mais cliniquement modéré, comparable à un effet placebo augmenté dans de nombreux essais.",
      },
      {
        heading: "Ce qu'il faut en retenir",
        body: "Il semblerait que les formulations à biodisponibilité améliorée (phytosomes, nano-formulations) soient celles qui montrent les signaux les plus consistants. Les auteurs auraient rappelé que la curcumine peut interagir avec les anticoagulants et qu'elle est à éviter en cas d'obstruction biliaire. Elle s'inscrit en complément d'une prise en charge globale (activité physique adaptée, perte de poids si surcharge), jamais en remplacement.",
      },
    ],
    takeaway:
      "Il semblerait que la curcumine apporte un soulagement modeste dans l'arthrose du genou, mais la qualité des preuves reste discutée. À voir comme un complément, pas comme un traitement.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title:
          'A critical review of systematic reviews and meta-analyses of curcumin for knee osteoarthritis',
        authors: 'Chen J, et al.',
        journal: 'Frontiers in Pharmacology',
        year: 2025,
        pmid: '41560742',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41560742/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title:
          'Comparative Effectiveness of Nutritional Supplements in the Treatment of Knee Osteoarthritis: A Network Meta-Analysis',
        authors: 'Zhang Y, et al.',
        journal: 'Nutrients',
        year: 2025,
        pmid: '40806131',
        url: 'https://pubmed.ncbi.nlm.nih.gov/40806131/',
      },
    ],
    publishedAt: '2026-05-29',
    readingTime: 4,
    tags: ['curcuma', 'curcumine', 'arthrose', 'genou'],
  },

  {
    slug: 'rhodiole-fatigue-recente',
    category: 'adaptogenes-plantes',
    title: 'Rhodiola rosea et fatigue : essais randomisés récents',
    excerpt:
      "Deux essais randomisés 2026 explorent l'effet de la rhodiole sur la performance et la fatigue chez des footballeurs.",
    intro:
      "La rhodiole (Rhodiola rosea) est un adaptogène traditionnellement utilisé contre la fatigue. Les essais récents portent plutôt sur la performance physique et cognitive, avec des résultats à interpréter avec prudence.",
    sections: [
      {
        heading: 'Deux essais randomisés 2026 chez des footballeurs',
        body: "Deux essais randomisés publiés dans Nutrients en 2026 par la même équipe [#s1] [#s2] ont évalué la rhodiole, seule ou associée à la caféine, chez des footballeurs. Les chercheurs auraient observé un effet modeste sur la performance lors de duels aériens répétés et sur la prise de décision. Les effectifs restent toutefois limités et le contexte (athlètes entraînés) ne se transpose pas mécaniquement à la fatigue chronique du grand public.",
      },
      {
        heading: 'Ce que la littérature plus ancienne suggère',
        body: "Les essais antérieurs sur la rhodiole et la fatigue mentale (chez des étudiants ou des soignants) avaient observé des effets modestes sur des scores subjectifs de fatigue et de stress. Les données suggèrent un profil adaptogène cohérent, sans que les preuves cliniques atteignent un niveau élevé pour une indication thérapeutique précise.",
      },
      {
        heading: "Comment utiliser raisonnablement",
        body: "Il semblerait que les doses étudiées se situent autour de 200-600 mg/j d'extrait standardisé en rosavines et salidrosides. Les auteurs auraient souligné qu'il s'agit d'un usage de courte à moyenne durée (4 à 12 semaines), pas d'une supplémentation au long cours. Prudence en cas de troubles bipolaires (effet potentiellement stimulant) et d'association à d'autres stimulants.",
      },
    ],
    takeaway:
      "Il semblerait que la rhodiole apporte un soutien modeste en cas de fatigue ou de stress aigus, sans constituer un traitement de fond. Les preuves cliniques restent partielles.",
    sources: [
      {
        id: 's1',
        type: 'rct',
        title:
          'Effects of Combined Caffeine and Rhodiola rosea Supplementation on Repeated Aerial Duel Performance and Neck Neuromuscular Function in Soccer Players',
        authors: 'Dou Y, et al.',
        journal: 'Nutrients',
        year: 2026,
        pmid: '42123940',
        url: 'https://pubmed.ncbi.nlm.nih.gov/42123940/',
      },
      {
        id: 's2',
        type: 'rct',
        title:
          'Effects of Rhodiola rosea on Physical and Decision-Making Performance in Football Players: A Randomised Controlled Trial',
        authors: 'Dou Y, et al.',
        journal: 'Nutrients',
        year: 2026,
        pmid: '41829897',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41829897/',
      },
    ],
    publishedAt: '2026-05-29',
    readingTime: 4,
    tags: ['rhodiole', 'Rhodiola rosea', 'fatigue', 'adaptogène'],
  },

  /* ─────────────────── MICROBIOTE & NUTRITION ─────────────────── */
  {
    slug: 'probiotiques-eczema-enfant',
    category: 'microbiote-nutrition',
    title: "Probiotiques et eczéma de l'enfant : l'umbrella review 2026",
    excerpt:
      "Une umbrella review 2026 fait la synthèse des méta-analyses sur les probiotiques dans la dermatite atopique pédiatrique.",
    intro:
      "Les probiotiques sont régulièrement évoqués dans la dermatite atopique de l'enfant. Une umbrella review 2026 permet de prendre du recul sur l'ensemble des méta-analyses disponibles.",
    sections: [
      {
        heading: "Ce que l'umbrella review 2026 a observé",
        body: "Publiée dans Probiotics and Antimicrobial Proteins en 2026 [#s1], cette umbrella review synthétise les méta-analyses existantes sur les probiotiques dans la dermatite atopique du nourrisson et de l'enfant. Les chercheurs auraient observé un signal globalement favorable pour certaines souches (notamment Lactobacillus et Bifidobacterium), avec une amélioration modeste des scores SCORAD. La qualité méthodologique des méta-analyses incluses est cependant variable, ce qui invite à la prudence dans la généralisation.",
      },
      {
        heading: 'À mettre en perspective avec les traitements',
        body: "Une méta-analyse en réseau publiée en 2026 dans Frontiers in Immunology [#s2] compare différents traitements de la dermatite atopique pédiatrique, en mettant en avant des biothérapies comme le dupilumab. Les probiotiques n'y figurent pas comme traitement de référence, mais comme adjuvant possible. Les données suggèrent qu'ils n'aient pas vocation à remplacer les traitements topiques en cas de poussée.",
      },
      {
        heading: "Ce qu'il faut en retenir",
        body: "Il semblerait que la prévention périnatale (en fin de grossesse et chez le nourrisson à risque familial) soit le contexte où les probiotiques montrent le signal le plus consistant. Les auteurs auraient rappelé que les souches, les doses et les durées varient considérablement entre essais, ce qui complique les recommandations. Toute supplémentation chez l'enfant doit être discutée avec le pédiatre.",
      },
    ],
    takeaway:
      "Il semblerait que certaines souches de probiotiques apportent un bénéfice modeste dans l'eczéma de l'enfant, surtout en prévention périnatale. L'effet curatif reste plus discuté.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title:
          'Probiotic Supplementation and Its Impact on Atopic Dermatitis and Related Conditions in Infants and Children: An Umbrella Review of Systematic Reviews with Meta-Analyses',
        authors: 'Rafiei Z, et al.',
        journal: 'Probiotics and Antimicrobial Proteins',
        year: 2026,
        pmid: '41762435',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41762435/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title:
          'Comparative efficacy of pediatric atopic dermatitis treatments: a network meta-analysis highlighting dupilumab and pimecrolimus for SCORAD and EASI improvement',
        authors: 'Yang L, et al.',
        journal: 'Frontiers in Immunology',
        year: 2026,
        pmid: '42148141',
        url: 'https://pubmed.ncbi.nlm.nih.gov/42148141/',
      },
    ],
    publishedAt: '2026-05-29',
    readingTime: 4,
    tags: ['probiotiques', 'eczéma', 'dermatite atopique', 'enfant'],
  },

  {
    slug: 'mediterraneen-mortalite-cohorte',
    category: 'microbiote-nutrition',
    title: 'Régime méditerranéen et mortalité : la méta-analyse italienne 2026',
    excerpt:
      "Une méta-analyse 2026 issue des recommandations nationales italiennes confirme l'association entre adhérence au régime méditerranéen et mortalité réduite.",
    intro:
      "Le régime méditerranéen est l'un des modèles alimentaires les mieux documentés. Les travaux les plus récents continuent de confirmer son association avec une mortalité plus faible, dans le cadre d'études observationnelles.",
    sections: [
      {
        heading: 'Ce que la méta-analyse 2026 a observé',
        body: "Publiée dans Nutrition en 2026 [#s1], cette méta-analyse adossée aux lignes directrices nationales italiennes a regroupé des études prospectives sur l'adhérence au régime méditerranéen et la mortalité toute cause. Les chercheurs auraient observé une réduction relative significative de la mortalité chez les sujets avec la meilleure adhérence, en dose-réponse. La nature observationnelle des données impose toutefois la prudence quant à la causalité.",
      },
      {
        heading: 'En prévention cardiovasculaire secondaire',
        body: "Une méta-analyse 2026 publiée dans le British Journal of General Practice [#s2] s'est interrogée sur l'intérêt de recommander en soins primaires des régimes sains chez des patients en prévention cardiovasculaire secondaire. Les données suggèrent un bénéfice modeste mais consistant, le régime méditerranéen y étant l'un des modèles les plus étudiés. Les auteurs auraient souligné l'importance d'un accompagnement structuré pour obtenir une réelle modification durable des habitudes.",
      },
      {
        heading: "Comment appliquer raisonnablement",
        body: "Il semblerait que les éléments clés soient l'abondance de légumes, fruits, légumineuses, céréales complètes, huile d'olive, poissons et oléagineux, avec une consommation modérée de produits laitiers et limitée de viandes rouges et produits transformés. Les auteurs auraient rappelé qu'aucun aliment isolé n'explique le bénéfice : c'est la cohérence globale du modèle qui semble compter.",
      },
    ],
    takeaway:
      "Il semblerait que l'adhérence au régime méditerranéen soit associée à une mortalité plus faible. Le bénéfice paraît proportionnel à la cohérence globale du modèle, plus qu'à un nutriment isolé.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title:
          'Adherence to the Mediterranean diet and all-cause mortality: A systematic review and meta-analysis within the Italian National Guidelines "La Dieta Mediterranea"',
        authors: 'Nucci D, et al.',
        journal: 'Nutrition',
        year: 2026,
        pmid: '41930792',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41930792/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title:
          'Does recommending healthy diets in general practice benefit secondary prevention of cardiovascular disease? A systematic review and meta-analysis',
        authors: 'Goldberg A, et al.',
        journal: 'British Journal of General Practice',
        year: 2026,
        pmid: '42134945',
        url: 'https://pubmed.ncbi.nlm.nih.gov/42134945/',
      },
    ],
    publishedAt: '2026-05-29',
    readingTime: 4,
    tags: ['régime méditerranéen', 'mortalité', 'prévention cardiovasculaire'],
  },

  {
    slug: 'jeune-intermittent-poids-mortalite',
    category: 'microbiote-nutrition',
    title: 'Jeûne intermittent : la revue 2026 chez les seniors',
    excerpt:
      "Une revue systématique 2026 fait le point sur le jeûne intermittent et le vieillissement en bonne santé chez les adultes plus âgés.",
    intro:
      "Le jeûne intermittent suscite un intérêt majeur dans la prévention du surpoids et des maladies métaboliques. Les données restent toutefois plus modestes qu'on ne le présente parfois, en particulier chez les seniors.",
    sections: [
      {
        heading: 'Ce que la revue 2026 a observé',
        body: "Publiée dans Nutrients en 2026 [#s1], cette revue systématique et méta-analyse en réseau a évalué le jeûne intermittent chez les adultes plus âgés, sur des critères cardiométaboliques, de santé mentale, cognitive et anthropométriques. Les chercheurs auraient observé une perte de poids modeste et des améliorations partielles de la composition corporelle. L'effet sur la mortalité directe n'a pas été établi par ces travaux, qui restent de durée limitée.",
      },
      {
        heading: 'Spécificités selon le sexe et la ménopause',
        body: "Une revue narrative 2026 publiée dans Nutrients [#s2] souligne que les effets métaboliques du jeûne intermittent diffèrent selon le sexe et la transition ménopausique. Les données suggèrent une vigilance particulière chez les femmes en péri-ménopause, où certains protocoles restrictifs pourraient avoir un impact sur le sommeil, l'humeur et la densité minérale osseuse.",
      },
      {
        heading: "Ce qu'il faut en retenir",
        body: "Il semblerait que le jeûne intermittent soit l'une des options possibles parmi d'autres stratégies de restriction énergétique. Les auteurs auraient rappelé qu'il n'est pas adapté à toutes les situations : diabète insulinorequérant, troubles du comportement alimentaire, grossesse, dénutrition. L'efficacité à long terme dépend surtout de la durabilité de l'approche, comme pour toute modification alimentaire.",
      },
    ],
    takeaway:
      "Il semblerait que le jeûne intermittent permette une perte de poids modeste et améliore certains marqueurs métaboliques, sans démonstration claire d'un effet sur la mortalité. À individualiser, surtout chez les seniors et les femmes en péri-ménopause.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title:
          'Intermittent Fasting and Healthy Aging in Older Adults: A Systematic Review of Cardiometabolic, Mental Health and Cognitive Outcomes with a Network Meta-Analysis of Anthropometric Measures',
        authors: 'Couto-Alfonso S, et al.',
        journal: 'Nutrients',
        year: 2026,
        pmid: '42124054',
        url: 'https://pubmed.ncbi.nlm.nih.gov/42124054/',
      },
      {
        id: 's2',
        type: 'review',
        title:
          'Sexual Dimorphism and Menopausal Transition: A Narrative Review of the Metabolic and Physical Effects of Intermittent Fasting',
        authors: 'Drinnon AR, et al.',
        journal: 'Nutrients',
        year: 2026,
        pmid: '42123946',
        url: 'https://pubmed.ncbi.nlm.nih.gov/42123946/',
      },
    ],
    publishedAt: '2026-05-29',
    readingTime: 4,
    tags: ['jeûne intermittent', 'poids', 'mortalité', 'vieillissement'],
  },
];
