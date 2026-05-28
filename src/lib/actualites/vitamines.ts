import type { Actualite } from '../types';

/* ──────────────────────────────────────────────────────────────
   ACTUALITÉS — VITAMINES
   Chaque PMID a été vérifié sur PubMed via NCBI E-utilities.
   Ton conditionnel obligatoire — voir CLAUDE.md du dossier.
────────────────────────────────────────────────────────────── */

export const ACTUALITES_VITAMINES: Actualite[] = [

  /* ── 1. Vitamine C — toxicité et limite haute ───────────────── */
  {
    slug: 'vitamine-c-non-toxicite-limites',
    category: 'vitamines',
    title: 'Vitamine C : que disent vraiment les données sur la toxicité ?',
    excerpt:
      "L'ascorbate est-il aussi inoffensif qu'on le dit ? Tour d'horizon des limites hautes établies par l'EFSA et des biomarqueurs de surcharge identifiés dans la littérature.",
    intro:
      "L'idée que la vitamine C serait « impossible à surdoser » circule largement dans les milieux de la nutrithérapie. La réalité documentée semble plus nuancée : il existe bien une limite haute tolérable, mais elle paraît élevée comparativement à d'autres micronutriments.",
    sections: [
      {
        heading: 'Une marge de sécurité qui semble large',
        body:
          "Une revue publiée dans Nutrition Reviews aurait proposé que les biomarqueurs urinaires d'oxalate et les troubles digestifs constituent les premiers signaux d'une surcharge en vitamine C [#s1]. Au-delà de ces signaux, une analyse parue dans l'American Journal of Clinical Nutrition aurait conclu que des apports allant jusqu'à 2 000 mg/jour seraient compatibles avec une sécurité d'utilisation chez l'adulte en bonne santé [#s2]. Ce chiffre correspond précisément à la limite haute tolérable (UL) retenue par plusieurs comités d'experts.",
      },
      {
        heading: 'Ce qui pourrait poser problème',
        body:
          "Les effets indésirables le plus fréquemment rapportés seraient digestifs : diarrhée osmotique, ballonnements, brûlures gastriques. Au-delà, une augmentation de l'oxalate urinaire pourrait être préoccupante chez les sujets prédisposés aux lithiases rénales d'oxalate de calcium, comme l'aurait soulevé une revue parue dans Nutrition in Clinical Care [#s3]. Le risque resterait théorique mais mériterait prudence chez ces profils.",
      },
      {
        heading: 'Formes et dosages pratiques',
        body:
          "Aucune donnée robuste ne suggérerait à ce jour qu'une forme particulière (acide ascorbique vs ascorbate de sodium vs liposomale) modifierait significativement la toxicité. Le facteur limitant resterait la dose totale et la sensibilité digestive individuelle.",
      },
    ],
    takeaway:
      "Il semblerait que la vitamine C dispose d'une marge de sécurité relativement large (UL ≈ 2 000 mg/j chez l'adulte). Les seuls signaux d'alerte clairement documentés concernent la sphère digestive et, chez certains sujets, l'oxalurie. Ce n'est donc pas un nutriment « sans plafond », mais sa toxicité paraît bien plus discrète que celle des vitamines liposolubles.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'Biomarkers for establishing a tolerable upper intake level for vitamin C',
        authors: 'Johnston CS',
        journal: 'Nutrition Reviews',
        year: 1999,
        pmid: '10101920',
        url: 'https://pubmed.ncbi.nlm.nih.gov/10101920/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Vitamins E and C are safe across a broad range of intakes',
        authors: 'Hathcock JN, et al.',
        journal: 'American Journal of Clinical Nutrition',
        year: 2005,
        pmid: '15817846',
        url: 'https://pubmed.ncbi.nlm.nih.gov/15817846/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'Vitamin C function and status in chronic disease',
        authors: 'Jacob RA, Sotoudeh G',
        journal: 'Nutrition in Clinical Care',
        year: 2002,
        pmid: '12134712',
        url: 'https://pubmed.ncbi.nlm.nih.gov/12134712/',
      },
    ],
    publishedAt: '2026-05-28',
    readingTime: 4,
    tags: ['vitamine C', 'toxicité', 'EFSA', 'oxalate'],
  },

  /* ── 2. Vitamine D — supplémentation ───────────────────────── */
  {
    slug: 'vitamine-d-supplementation-infections-respiratoires',
    category: 'vitamines',
    title: 'Vitamine D : la supplémentation préviendrait-elle vraiment les infections respiratoires ?',
    excerpt:
      "Une méta-analyse de données individuelles publiée dans le BMJ a fait référence sur le sujet. Ce que ses chiffres disent — et ce qu'ils ne disent pas.",
    intro:
      "Depuis 2017, la méta-analyse de Martineau et collaborateurs sur 25 essais cliniques (10 933 participants) sert de pivot à la discussion sur le rôle de la vitamine D dans la prévention des infections respiratoires aiguës. Ses conclusions méritent d'être relues avec précision.",
    sections: [
      {
        heading: 'Le signal observé',
        body:
          "Cette méta-analyse de données individuelles, parue dans le BMJ, aurait suggéré une réduction modeste mais statistiquement significative du risque d'infection respiratoire aiguë chez les personnes supplémentées en vitamine D [#s1]. L'effet paraît plus marqué chez les sujets carencés au départ (25(OH)D < 25 nmol/L) et avec une posologie quotidienne ou hebdomadaire, plutôt qu'en bolus mensuel élevé.",
      },
      {
        heading: 'D2 ou D3 : un choix qui semble compter',
        body:
          "Une autre méta-analyse, publiée dans l'American Journal of Clinical Nutrition, aurait conclu que la vitamine D3 (cholécalciférol) serait plus efficace que la D2 (ergocalciférol) pour élever durablement la 25(OH)D sérique [#s2]. Cette différence pourrait expliquer une partie de la variabilité des essais antérieurs où la D2 était utilisée.",
      },
      {
        heading: 'Ce que les données ne disent pas',
        body:
          "Les bénéfices observés concernent un critère intermédiaire (épisodes infectieux), pas la mortalité. La transposition de ces résultats à la prévention de la COVID-19 spécifiquement a fait l'objet d'autres travaux dont les conclusions sont restées prudentes. Par ailleurs, une revue récente parue dans Advances in Nutrition a exploré l'association vitamine D + protéines pour la sarcopénie sans pouvoir tirer de conclusion définitive [#s3].",
      },
    ],
    takeaway:
      "Une supplémentation modérée et régulière en D3 semblerait justifiée chez les sujets carencés, surtout dans les régions à faible ensoleillement hivernal. Les bénéfices paraissent réels mais modestes — il ne semble pas s'agir d'un traitement-miracle des infections respiratoires.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title: 'Vitamin D supplementation to prevent acute respiratory tract infections: systematic review and meta-analysis of individual participant data',
        authors: 'Martineau AR, et al.',
        journal: 'BMJ',
        year: 2017,
        pmid: '28202713',
        url: 'https://pubmed.ncbi.nlm.nih.gov/28202713/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title: 'Comparison of vitamin D2 and vitamin D3 supplementation in raising serum 25-hydroxyvitamin D status: a systematic review and meta-analysis',
        authors: 'Tripkovic L, et al.',
        journal: 'American Journal of Clinical Nutrition',
        year: 2012,
        pmid: '22552031',
        url: 'https://pubmed.ncbi.nlm.nih.gov/22552031/',
      },
      {
        id: 's3',
        type: 'meta-analysis',
        title: 'Whey Protein Supplementation with or without Vitamin D on Sarcopenia-Related Measures: A Systematic Review and Meta-Analysis',
        authors: 'Nasimi N, et al.',
        journal: 'Advances in Nutrition',
        year: 2023,
        pmid: '37196876',
        url: 'https://pubmed.ncbi.nlm.nih.gov/37196876/',
      },
    ],
    publishedAt: '2026-05-27',
    readingTime: 4,
    tags: ['vitamine D', 'infections respiratoires', 'D3', 'BMJ'],
  },

  /* ── 3. Vitamine B12 — végétariens ─────────────────────────── */
  {
    slug: 'vitamine-b12-vegetariens-deficit',
    category: 'vitamines',
    title: 'Vitamine B12 : pourquoi le régime végétarien semblerait insuffisant',
    excerpt:
      "La cobalamine alimentaire vient quasi exclusivement de sources animales. Les recommandations cliniques convergent — voici ce qu'elles disent.",
    intro:
      "Le débat sur la suffisance des apports en vitamine B12 chez les végétariens et végétaliens revient régulièrement. La littérature clinique paraît, sur ce point précis, plutôt univoque.",
    sections: [
      {
        heading: 'Une biodisponibilité animale prépondérante',
        body:
          "Une revue parue dans Food and Nutrition Bulletin aurait rappelé que la quasi-totalité de la B12 alimentaire absorbable proviendrait de sources animales (viande, poisson, œufs, produits laitiers), les sources végétales (algues, levures) apportant majoritairement des analogues inactifs ou faiblement biodisponibles [#s1]. Ce constat pourrait expliquer pourquoi la prévalence du déficit serait plus élevée chez les végétariens et végétaliens non supplémentés.",
      },
      {
        heading: 'Reconnaître et traiter la carence',
        body:
          "Une mise au point clinique publiée dans American Family Physician aurait listé les signes évocateurs : anémie macrocytaire, neuropathie périphérique, troubles cognitifs, glossite [#s2]. La supplémentation orale (cyanocobalamine ou méthylcobalamine) serait dans la plupart des cas suffisante, même en cas de malabsorption modérée, contrairement à l'idée que l'injection serait toujours nécessaire.",
      },
      {
        heading: 'Quand le tableau n\'est pas clair',
        body:
          "Un rapport de cas paru dans Pan African Medical Journal aurait illustré la difficulté du diagnostic : la B12 sérique peut sembler normale en présence d'un déficit fonctionnel, et les dosages de l'acide méthylmalonique ou de l'homocystéine apporteraient une information complémentaire utile [#s3].",
      },
    ],
    takeaway:
      "Il semblerait raisonnable, chez les végétariens et végétaliens, d'envisager une supplémentation régulière en B12 (par exemple 250–1000 μg/jour ou 2 000 μg/semaine), idéalement après bilan biologique. Les conséquences d'un déficit chronique paraissent suffisamment sérieuses pour justifier la prudence.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'Causes of vitamin B12 and folate deficiency',
        authors: 'Allen LH',
        journal: 'Food and Nutrition Bulletin',
        year: 2008,
        pmid: '18709879',
        url: 'https://pubmed.ncbi.nlm.nih.gov/18709879/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Vitamin B12 Deficiency: Recognition and Management',
        authors: 'Langan RC, Goodbred AJ',
        journal: 'American Family Physician',
        year: 2017,
        pmid: '28925645',
        url: 'https://pubmed.ncbi.nlm.nih.gov/28925645/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'Vitamin B12 deficiency: case report and review of literature',
        authors: 'Hasbaoui BE, et al.',
        journal: 'Pan African Medical Journal',
        year: 2021,
        pmid: '34046142',
        url: 'https://pubmed.ncbi.nlm.nih.gov/34046142/',
      },
    ],
    publishedAt: '2026-05-26',
    readingTime: 4,
    tags: ['B12', 'cobalamine', 'végétariens', 'carence'],
  },

  /* ── 4. Folates B9 — méthylation ───────────────────────────── */
  {
    slug: 'folates-methylfolate-depression',
    category: 'vitamines',
    title: 'L-méthylfolate (B9 active) : ce que disent les méta-analyses en dépression',
    excerpt:
      "Le méthylfolate est devenu un complément populaire en santé mentale. Que dit la littérature contrôlée sur son intérêt réel ?",
    intro:
      "Plusieurs travaux récents ont examiné l'intérêt de la forme bioactive du folate (L-méthylfolate) en complément ou en augmentation des traitements antidépresseurs. La synthèse de ces données mérite d'être lue avec mesure.",
    sections: [
      {
        heading: 'Le signal des méta-analyses',
        body:
          "Une méta-analyse publiée dans Pharmacopsychiatry aurait rassemblé les essais d'augmentation par L-méthylfolate dans les troubles dépressifs et conclu à un bénéfice modeste mais détectable, particulièrement dans les sous-groupes porteurs de polymorphismes MTHFR ou avec carence biologique en folates [#s1]. Le degré de certitude resterait limité par le nombre encore restreint d'essais robustes.",
      },
      {
        heading: 'Le mécanisme suspecté',
        body:
          "Une revue parue dans Fortschritte der Neurologie-Psychiatrie aurait rappelé que le folate participerait à la synthèse des monoamines (sérotonine, dopamine, noradrénaline) via le cycle de méthylation, et que la forme L-méthylfolate franchirait la barrière hémato-encéphalique mieux que l'acide folique de synthèse [#s2]. Le bénéfice clinique resterait néanmoins variable d'une personne à l'autre.",
      },
      {
        heading: 'Au-delà de la dépression',
        body:
          "Une revue narrative dans Endocrine Practice a discuté le rôle potentiel du L-méthylfolate dans la neuropathie diabétique douloureuse, avec des résultats préliminaires plutôt encourageants mais non concluants à ce stade [#s3].",
      },
    ],
    takeaway:
      "Il semblerait que le L-méthylfolate puisse offrir un bénéfice complémentaire dans certaines dépressions, surtout en présence d'un terrain biologique défavorable (carence, polymorphisme MTHFR). Les preuves restent modestes et ne justifient pas un usage systématique sans bilan.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title: 'Systematic Review and Meta-Analysis of L-Methylfolate Augmentation in Depressive Disorders',
        authors: 'Maruf AA, et al.',
        journal: 'Pharmacopsychiatry',
        year: 2022,
        pmid: '34794190',
        url: 'https://pubmed.ncbi.nlm.nih.gov/34794190/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Folates in the treatment of depression',
        authors: 'Erbe S, Köhler S',
        journal: 'Fortschritte der Neurologie-Psychiatrie',
        year: 2014,
        pmid: '24519190',
        url: 'https://pubmed.ncbi.nlm.nih.gov/24519190/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'L-Methylfolate in Diabetic Peripheral Neuropathy: A Narrative Review',
        authors: 'Christofides EA',
        journal: 'Endocrine Practice',
        year: 2023,
        pmid: '37088147',
        url: 'https://pubmed.ncbi.nlm.nih.gov/37088147/',
      },
    ],
    publishedAt: '2026-05-25',
    readingTime: 4,
    tags: ['folates', 'méthylation', 'dépression', 'MTHFR'],
  },

  /* ── 5. Vitamine K2 — os et artères ────────────────────────── */
  {
    slug: 'vitamine-k2-arteres-os',
    category: 'vitamines',
    title: 'Vitamine K2 : ce qu\'un essai randomisé majeur a conclu sur la calcification',
    excerpt:
      "L'essai AVADEC, publié dans Circulation en 2022, a testé K2 + D3 contre la progression de la calcification aortique. Ses résultats étaient attendus.",
    intro:
      "L'hypothèse selon laquelle la vitamine K2 (ménaquinone) « dirigerait » le calcium vers les os plutôt que vers les artères suscite un fort engouement. Plusieurs essais cliniques de qualité ont récemment été publiés, dont les conclusions méritent d'être lues sans filtre.",
    sections: [
      {
        heading: 'L\'essai randomisé AVADEC',
        body:
          "Un essai en double aveugle paru dans Circulation a comparé une supplémentation K2 (MK-7) + vitamine D contre placebo chez des patients avec calcification de la valve aortique [#s1]. Les chercheurs auraient observé une réduction de la progression de la calcification dans le bras intervention, sans modification cliniquement majeure des évènements cardiovasculaires à court terme. Cela ne suffirait pas à conclure à une prévention robuste mais le signal paraît cohérent avec l'hypothèse mécanistique.",
      },
      {
        heading: 'Le rôle physiologique de la K2',
        body:
          "Une revue exhaustive dans Nutrition Reviews aurait détaillé la cinétique, les formes (MK-4, MK-7), les sources alimentaires (natto, fromages affinés) et les déficits potentiels en vitamine K [#s2]. La forme MK-7 paraît avoir une demi-vie plasmatique nettement plus longue que la MK-4 ou la K1, ce qui pourrait expliquer pourquoi les protocoles cliniques l'utilisent préférentiellement.",
      },
      {
        heading: 'Cas particulier des hémodialysés',
        body:
          "L'essai Valkyrie, paru dans Journal of the American Society of Nephrology, a testé l'ajout de K2 chez des patients en hémodialyse avec fibrillation atriale recevant du rivaroxaban [#s3]. Les résultats sur la calcification vasculaire seraient nuancés et ne permettraient pas, à eux seuls, de généraliser la supplémentation K2 dans cette population.",
      },
    ],
    takeaway:
      "Les données récentes suggèrent un effet biologique réel de la K2 sur la calcification vasculaire, mais l'ampleur clinique resterait modeste et le rapport bénéfice-risque doit être discuté individuellement, notamment en cas de traitement anticoagulant.",
    sources: [
      {
        id: 's1',
        type: 'rct',
        title: 'Vitamin K2 and D in Patients With Aortic Valve Calcification: A Randomized Double-Blinded Clinical Trial',
        authors: 'Diederichsen ACP, et al.',
        journal: 'Circulation',
        year: 2022,
        pmid: '35465686',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35465686/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Vitamin K — sources, physiological role, kinetics, deficiency, detection, therapeutic use, and toxicity',
        authors: 'Mladěnka P, et al.',
        journal: 'Nutrition Reviews',
        year: 2022,
        pmid: '34472618',
        url: 'https://pubmed.ncbi.nlm.nih.gov/34472618/',
      },
      {
        id: 's3',
        type: 'rct',
        title: 'Multicenter Randomized Controlled Trial of Vitamin K Antagonist Replacement by Rivaroxaban with or without Vitamin K2 in Hemodialysis Patients with Atrial Fibrillation: the Valkyrie Study',
        authors: 'De Vriese AS, et al.',
        journal: 'Journal of the American Society of Nephrology',
        year: 2020,
        pmid: '31704740',
        url: 'https://pubmed.ncbi.nlm.nih.gov/31704740/',
      },
    ],
    publishedAt: '2026-05-24',
    readingTime: 4,
    tags: ['vitamine K2', 'calcification', 'MK-7', 'os'],
  },
];
