import type { Actualite } from '../types';

export const ACTUALITES_VITAMINES_2: Actualite[] = [

  /* ── 21. Vitamine A — toxicité ─────────────────────────────── */
  {
    slug: 'vitamine-a-toxicite-retinol',
    category: 'vitamines',
    title: 'Vitamine A : la toxicité du rétinol est-elle réellement préoccupante ?',
    excerpt:
      "Contrairement à la vitamine C, le rétinol s'accumule. Les seuils de sécurité ont fait l'objet de plusieurs revues — voici leurs conclusions.",
    intro:
      "La vitamine A est l'une des rares vitamines liposolubles pour lesquelles une hypervitaminose chronique est clairement documentée. Sa supplémentation prolongée à dose élevée mériterait une vigilance particulière, surtout chez la femme en âge de procréer.",
    sections: [
      {
        heading: 'Les seuils de toxicité',
        body:
          "Une revue ancienne mais structurante parue dans l'American Journal of Clinical Nutrition aurait défini les seuils au-delà desquels une hypervitaminose A chronique deviendrait probable : 10 000 UI/jour de rétinol au long cours apparaîtraient associés à un risque détectable d'effets hépatiques et cutanés [#s1]. Le rétinol s'accumule dans le foie, ce qui distingue radicalement sa toxicité de celle des vitamines hydrosolubles.",
      },
      {
        heading: 'Synthèse moderne via StatPearls',
        body:
          "Une mise au point récente disponible sur StatPearls — base de référence pour les cliniciens — aurait synthétisé les manifestations cliniques de la toxicité aiguë et chronique : céphalées, alopécie, douleurs osseuses, élévation des transaminases, tératogénicité chez la femme enceinte [#s2]. La forme alimentaire (foie d'animal en grande quantité) peut suffire à atteindre ces seuils.",
      },
      {
        heading: 'Un rôle bien réel sur la cicatrisation',
        body:
          "Une revue publiée dans Nutrition in Clinical Practice aurait examiné le rôle de la vitamine A dans la cicatrisation des plaies, soulignant que le déficit ralentirait la régénération tissulaire alors que la supplémentation aurait un intérêt documenté chez les patients dénutris ou cortico-traités [#s3]. Le bénéfice clinique semble réel mais conditionné à un terrain initialement déficitaire.",
      },
    ],
    takeaway:
      "Il semblerait raisonnable de privilégier les caroténoïdes (bêta-carotène, conversion physiologique régulée) plutôt qu'une supplémentation chronique en rétinol non médicalement justifiée. La grossesse représente une contre-indication majeure à toute dose pharmacologique de rétinol.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'Evaluation of vitamin A toxicity',
        authors: 'Hathcock JN, et al.',
        journal: 'American Journal of Clinical Nutrition',
        year: 1990,
        pmid: '2197848',
        url: 'https://pubmed.ncbi.nlm.nih.gov/2197848/',
      },
      {
        id: 's2',
        type: 'book',
        title: 'Vitamin A Toxicity',
        authors: 'Olson JM, Ameer MA, Goyal A',
        journal: 'StatPearls',
        year: 2023,
        pmid: '30422511',
        url: 'https://pubmed.ncbi.nlm.nih.gov/30422511/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'Vitamin A and Wound Healing',
        authors: 'Zinder R, et al.',
        journal: 'Nutrition in Clinical Practice',
        year: 2019,
        pmid: '31697447',
        url: 'https://pubmed.ncbi.nlm.nih.gov/31697447/',
      },
    ],
    publishedAt: '2026-05-08',
    readingTime: 4,
    tags: ['vitamine A', 'rétinol', 'toxicité', 'caroténoïdes'],
  },

  /* ── 22. Vitamine E — alpha vs gamma tocophérol ────────────── */
  {
    slug: 'vitamine-e-alpha-gamma-tocopherol',
    category: 'vitamines',
    title: 'Vitamine E : pourquoi le gamma-tocophérol mériterait peut-être plus d\'attention',
    excerpt:
      "Quand on parle de vitamine E, on pense alpha-tocophérol. Les autres formes — gamma surtout — auraient pourtant un profil biologique distinct.",
    intro:
      "La grande majorité des compléments « vitamine E » ne contiennent que de l'alpha-tocophérol synthétique. La littérature récente suggère pourtant que la forme gamma, abondante dans l'alimentation, aurait des propriétés propres qui mériteraient discussion.",
    sections: [
      {
        heading: 'Une nomenclature qui prête à confusion',
        body:
          "Une revue parue dans Free Radical Biology & Medicine aurait rappelé que la définition officielle de la vitamine E se limite historiquement au RRR-alpha-tocophérol [#s1], écartant de fait les autres tocophérols et tocotriénols pourtant biologiquement actifs. Cette restriction nutritionnelle ne correspondrait pas à la richesse des formes E retrouvées dans les huiles végétales et les graines.",
      },
      {
        heading: 'Le gamma-tocophérol, forme alimentaire majeure',
        body:
          "Une revue dans Annals of Nutrition & Metabolism aurait défendu l'idée que le gamma-tocophérol — forme E prédominante dans le régime nord-américain et présent en bonne quantité dans les huiles de soja, maïs et noix — serait largement sous-évalué [#s2]. Sa capacité à piéger les espèces réactives de l'azote (NO•), distincte de celle de l'alpha-tocophérol, ouvrirait des perspectives anti-inflammatoires propres.",
      },
      {
        heading: 'Profil biologique distinct',
        body:
          "Une revue plus récente, également dans Free Radical Biology & Medicine, aurait synthétisé les effets antioxydants et anti-inflammatoires du gamma-tocophérol et son potentiel dans plusieurs maladies chroniques [#s3]. Le tableau reste celui d'un nutriment prometteur mais dont les bénéfices cliniques propres ne sont pas encore consolidés par des essais robustes.",
      },
    ],
    takeaway:
      "Il semblerait sage, en supplémentation, de privilégier les formes « mixed tocopherols » plutôt que l'alpha-tocophérol seul à haute dose, qui semble en partie déplacer le gamma-tocophérol des tissus. L'alimentation diversifiée reste probablement la source la plus équilibrée.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'Vitamin E nomenclature. Is RRR-α-tocopherol the only vitamin E?',
        authors: 'Noguchi N',
        journal: 'Free Radical Biology & Medicine',
        year: 2024,
        pmid: '38754742',
        url: 'https://pubmed.ncbi.nlm.nih.gov/38754742/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Gamma-tocopherol — an underestimated vitamin?',
        authors: 'Wagner KH, et al.',
        journal: 'Annals of Nutrition & Metabolism',
        year: 2004,
        pmid: '15256801',
        url: 'https://pubmed.ncbi.nlm.nih.gov/15256801/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'Gamma-tocopherol, a major form of vitamin E in diets: Insights into antioxidant and anti-inflammatory effects, mechanisms, and roles in disease management',
        authors: 'Jiang Q',
        journal: 'Free Radical Biology & Medicine',
        year: 2022,
        pmid: '34896589',
        url: 'https://pubmed.ncbi.nlm.nih.gov/34896589/',
      },
    ],
    publishedAt: '2026-05-07',
    readingTime: 4,
    tags: ['vitamine E', 'tocophérol', 'antioxydant', 'inflammation'],
  },

  /* ── 23. Vitamine B6 — neuropathie ─────────────────────────── */
  {
    slug: 'vitamine-b6-neuropathie-dose-elevee',
    category: 'vitamines',
    title: 'Vitamine B6 : à partir de quelle dose la neurotoxicité deviendrait-elle un risque ?',
    excerpt:
      "Souvent perçue comme inoffensive, la pyridoxine peut induire une neuropathie sensitive à haute dose. Les revues récentes éclairent les seuils.",
    intro:
      "La vitamine B6 est l'un des rares micronutriments où la toxicité par excès est documentée à des doses qu'on retrouve pourtant dans le commerce. Les méta-analyses récentes ont permis d'affiner la connaissance des seuils.",
    sections: [
      {
        heading: 'Revue systématique récente',
        body:
          "Une revue systématique parue dans Nutrients aurait fait le point sur le rôle de la vitamine B6 dans la neuropathie périphérique [#s1]. Les auteurs auraient conclu que la pyridoxine est à la fois cofacteur essentiel pour le système nerveux à dose physiologique, et neurotoxique potentielle à dose pharmacologique soutenue. Le seuil critique serait variable mais commencerait à être détectable dès quelques mois d'apport au-delà de 100–200 mg/jour.",
      },
      {
        heading: 'Mécanismes de toxicité',
        body:
          "Une revue parue dans Advances in Nutrition aurait exploré les mécanismes biologiques par lesquels la pyridoxine pourrait léser les neurones sensitifs [#s2]. L'hypothèse principale est celle d'une saturation des étapes de phosphorylation, conduisant à une accumulation tissulaire toxique. Le phénomène serait dose- et temps-dépendant, ce qui complique la définition d'un seuil unique.",
      },
      {
        heading: 'Recommandations pratiques',
        body:
          "Un article publié dans American Journal of Therapeutics a passé en revue les stratégies de prévention de la neurotoxicité B6 dans les situations cliniques où une supplémentation est nécessaire [#s3]. La recommandation centrale serait de privilégier les doses physiologiques (< 25 mg/j) en l'absence d'indication formelle, et de respecter une durée définie en cas de dose plus élevée.",
      },
    ],
    takeaway:
      "Il semblerait que la vitamine B6 ne soit pas le complément anodin que l'on présente souvent. Au-delà de quelques mois à doses > 100 mg/jour, la surveillance d'éventuels signes sensitifs distaux (paresthésies, hypoesthésie) deviendrait nécessaire. La forme P5P (pyridoxal-5-phosphate, forme active) ne semble pas exempter de ce risque.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'The Role of Vitamin B6 in Peripheral Neuropathy: A Systematic Review',
        authors: 'Muhamad R, et al.',
        journal: 'Nutrients',
        year: 2023,
        pmid: '37447150',
        url: 'https://pubmed.ncbi.nlm.nih.gov/37447150/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Vitamin B-6-Induced Neuropathy: Exploring the Mechanisms of Pyridoxine Toxicity',
        authors: 'Hadtstein F, Vrolijk M',
        journal: 'Advances in Nutrition',
        year: 2021,
        pmid: '33912895',
        url: 'https://pubmed.ncbi.nlm.nih.gov/33912895/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'Preventing Vitamin B6-Related Neurotoxicity',
        authors: 'Reddy P, et al.',
        journal: 'American Journal of Therapeutics',
        year: 2022,
        pmid: '36608063',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36608063/',
      },
    ],
    publishedAt: '2026-05-06',
    readingTime: 4,
    tags: ['vitamine B6', 'pyridoxine', 'neuropathie', 'toxicité'],
  },

  /* ── 24. Vitamine B3 (niacine) — lipides ───────────────────── */
  {
    slug: 'niacine-vitamine-b3-flush-lipides',
    category: 'vitamines',
    title: 'Niacine (vitamine B3) : pourquoi son usage en cardiologie a-t-il diminué ?',
    excerpt:
      "Longtemps prescrite pour son effet sur les lipides, la niacine à dose pharmacologique a vu son rôle se réduire. Tour d'horizon.",
    intro:
      "La niacine — vitamine B3 sous forme acide nicotinique — possède un effet hypolipémiant documenté depuis des décennies. Pourtant, son usage clinique a reculé. Les données récentes éclairent ce changement de paradigme.",
    sections: [
      {
        heading: 'Le mécanisme et le flush',
        body:
          "Une revue publiée dans American Journal of Managed Care aurait synthétisé les différentes formulations de niacine, leur pharmacocinétique et leur effet sur les lipides [#s1]. L'effet phare est une réduction du LDL-cholestérol et des triglycérides, avec une élévation marquée du HDL-cholestérol — profil unique parmi les hypolipémiants. Le « flush » (rougeur faciale) reste l'effet indésirable le plus typique, lié à une libération de prostaglandines.",
      },
      {
        heading: 'Formulations à libération prolongée',
        body:
          "Un article paru dans Drugs aurait évalué l'extended-release niacin associée à la laropiprant — combinaison conçue pour réduire le flush et permettre une meilleure adhérence [#s2]. L'essai HPS2-THRIVE a finalement mis en évidence un excès d'effets indésirables sans bénéfice cardiovasculaire net, ce qui a conduit au retrait de cette association du marché.",
      },
      {
        heading: 'Place actuelle dans la prise en charge des dyslipidémies',
        body:
          "Une revue parue dans Endotext aurait dressé un tableau actualisé des traitements hypolipémiants, dont la niacine [#s3]. Elle conserverait une place limitée dans certaines hypertriglycéridémies sévères ou dyslipidémies mixtes, mais ne serait plus recommandée en première ligne pour la prévention cardiovasculaire compte tenu de l'absence de réduction des évènements dans les essais récents.",
      },
    ],
    takeaway:
      "Il semblerait que la niacine en complément alimentaire « anti-cholestérol » soit largement supplantée par les statines en cas d'indication réelle. La supplémentation B3 nutritionnelle (< 35 mg/j) reste sans risque ; les doses pharmacologiques (> 500 mg/j) relèvent d'une prescription médicale.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'Understanding niacin formulations',
        authors: 'Pieper JA',
        journal: 'American Journal of Managed Care',
        year: 2002,
        pmid: '12240702',
        url: 'https://pubmed.ncbi.nlm.nih.gov/12240702/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Extended-release niacin (nicotinic acid)/laropiprant',
        authors: 'Perry CM',
        journal: 'Drugs',
        year: 2009,
        pmid: '19678716',
        url: 'https://pubmed.ncbi.nlm.nih.gov/19678716/',
      },
      {
        id: 's3',
        type: 'book',
        title: 'Triglyceride Lowering Drugs',
        authors: 'Feingold KR',
        journal: 'Endotext',
        year: 2026,
        pmid: '28402615',
        url: 'https://pubmed.ncbi.nlm.nih.gov/28402615/',
      },
    ],
    publishedAt: '2026-05-05',
    readingTime: 4,
    tags: ['niacine', 'vitamine B3', 'cholestérol', 'flush'],
  },

  /* ── 25. Vitamine B1 (thiamine) — Wernicke ─────────────────── */
  {
    slug: 'thiamine-wernicke-alcool',
    category: 'vitamines',
    title: 'Thiamine (B1) et encéphalopathie de Wernicke : un déficit qui reste sous-diagnostiqué',
    excerpt:
      "Trouble neurologique grave, l'encéphalopathie de Wernicke peut survenir bien au-delà du seul contexte alcoolique. La thiamine reste son traitement.",
    intro:
      "La carence en vitamine B1 est l'une des urgences nutritionnelles les plus citées en médecine interne. Sa présentation clinique trompeuse et son traitement simple en font un sujet de revue récurrent dans la littérature médicale.",
    sections: [
      {
        heading: 'Une revue de référence dans The Lancet Neurology',
        body:
          "Une revue parue dans The Lancet Neurology aurait actualisé les contextes cliniques de l'encéphalopathie de Wernicke et les avancées diagnostiques [#s1]. La triade classique (confusion, ophtalmoplégie, ataxie) ne serait présente que dans une minorité de cas, ce qui expliquerait le sous-diagnostic. Au-delà de l'alcoolisme, plusieurs contextes (chirurgie bariatrique, hyperémèse gravidique, jeûnes prolongés, dénutrition cancéreuse) y figureraient.",
      },
      {
        heading: 'Traitement par thiamine IV',
        body:
          "Une revue dans Internal Medicine Journal aurait précisé les modalités du traitement par thiamine dans l'encéphalopathie de Wernicke chez les patients alcoolo-dépendants [#s2]. La voie intraveineuse à dose forte (500 mg × 3/jour pendant 2–3 jours) serait recommandée en aigu, suivie d'un relais oral. Le retard de traitement serait associé à une évolution vers le syndrome de Korsakoff irréversible.",
      },
      {
        heading: 'Spectre élargi du déficit',
        body:
          "Une revue parue dans Journal of Basic and Clinical Physiology and Pharmacology aurait synthétisé les principales manifestations du déficit en thiamine, du béribéri sec et humide aux atteintes cardiaques [#s3]. Le diagnostic biologique direct restant limité, le traitement empirique en cas de suspicion clinique paraît la règle.",
      },
    ],
    takeaway:
      "Il semblerait essentiel, devant une confusion d'apparition rapide en contexte à risque (alcoolisation chronique, dénutrition, jeûne prolongé, vomissements), de penser à un déficit en thiamine et de traiter avant de confirmer le diagnostic. La supplémentation B1 prophylactique en cas d'alcoolisation persistante est largement consensuelle.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: "Wernicke's encephalopathy: new clinical settings and recent advances in diagnosis and management",
        authors: 'Sechi G, Serra A',
        journal: 'The Lancet Neurology',
        year: 2007,
        pmid: '17434099',
        url: 'https://pubmed.ncbi.nlm.nih.gov/17434099/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Thiamine in the treatment of Wernicke encephalopathy in patients with alcohol use disorders',
        authors: 'Latt N, Dore G',
        journal: 'Internal Medicine Journal',
        year: 2014,
        pmid: '25201422',
        url: 'https://pubmed.ncbi.nlm.nih.gov/25201422/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'Review of thiamine deficiency disorders: Wernicke encephalopathy and Korsakoff psychosis',
        authors: 'Chandrakumar A, et al.',
        journal: 'Journal of Basic and Clinical Physiology and Pharmacology',
        year: 2018,
        pmid: '30281514',
        url: 'https://pubmed.ncbi.nlm.nih.gov/30281514/',
      },
    ],
    publishedAt: '2026-05-04',
    readingTime: 4,
    tags: ['thiamine', 'vitamine B1', 'Wernicke', 'alcool'],
  },
];
