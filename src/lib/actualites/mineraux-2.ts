import type { Actualite } from '../types';

export const ACTUALITES_MINERAUX_2: Actualite[] = [

  /* ── 26. Calcium — controverse cardio-vasculaire ───────────── */
  {
    slug: 'calcium-supplementation-cardiovasculaire-controverse',
    category: 'mineraux',
    title: 'Calcium en supplément : le débat cardiovasculaire est-il tranché ?',
    excerpt:
      "Après plusieurs alertes en 2010, la question d'un sur-risque cardio-vasculaire associé aux suppléments de calcium continue d'agiter la littérature.",
    intro:
      "Depuis une dizaine d'années, plusieurs méta-analyses successives ont nourri le débat sur un éventuel risque cardio-vasculaire associé à la supplémentation isolée en calcium. La synthèse des données les plus récentes mérite d'être lue avec précaution.",
    sections: [
      {
        heading: 'Méta-analyse 2023',
        body:
          "Une méta-analyse parue dans Heart, Lung & Circulation aurait synthétisé l'ensemble des essais cliniques et études observationnelles disponibles sur l'association calcium supplément ↔ risque cardiovasculaire et AVC [#s1]. Le signal global resterait modeste mais ferait apparaître une légère tendance défavorable lorsque le calcium est apporté en supplément isolé et à dose élevée, surtout chez les femmes âgées.",
      },
      {
        heading: 'Calcium alimentaire vs supplément',
        body:
          "Une revue dans Journal of the American College of Nutrition aurait distingué calcium alimentaire (souvent neutre voire bénéfique) et calcium supplémentaire (signal légèrement défavorable dans certains sous-groupes) [#s2]. Cette distinction reproduirait un schéma déjà vu pour d'autres micronutriments : la matrice alimentaire semblerait plus protectrice que la molécule isolée.",
      },
      {
        heading: 'Recommandations actualisées',
        body:
          "Un focus seminar publié dans Journal of the American College of Cardiology aurait passé en revue les vitamines et minéraux à visée cardio-protectrice et rappelé que le calcium en complément ne ferait pas partie des recommandations préventives de routine [#s3]. Sa prescription resterait justifiée en cas d'apport alimentaire très insuffisant ou de risque ostéoporotique majeur.",
      },
    ],
    takeaway:
      "Il semblerait préférable de couvrir les besoins en calcium par l'alimentation (laitages, certaines eaux minérales, légumes verts foncés, amandes, sardines) plutôt que par des suppléments à haute dose. En cas de supplémentation justifiée, fractionner les apports et associer la vitamine D paraît plus prudent.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title: 'Association Between Calcium Supplementation and the Risk of Cardiovascular Disease and Stroke: A Systematic Review and Meta-Analysis',
        authors: 'Sim MG, et al.',
        journal: 'Heart, Lung & Circulation',
        year: 2023,
        pmid: '37743221',
        url: 'https://pubmed.ncbi.nlm.nih.gov/37743221/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title: 'The Evidence and Controversy Between Dietary Calcium Intake and Calcium Supplementation and the Risk of Cardiovascular Disease: A Systematic Review and Meta-Analysis of Cohort Studies and Randomized Controlled Trials',
        authors: 'Yang C, et al.',
        journal: 'Journal of the American College of Nutrition',
        year: 2020,
        pmid: '31625814',
        url: 'https://pubmed.ncbi.nlm.nih.gov/31625814/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'Supplemental Vitamins and Minerals for Cardiovascular Disease Prevention and Treatment: JACC Focus Seminar',
        authors: 'Jenkins DJA, et al.',
        journal: 'Journal of the American College of Cardiology',
        year: 2021,
        pmid: '33509399',
        url: 'https://pubmed.ncbi.nlm.nih.gov/33509399/',
      },
    ],
    publishedAt: '2026-05-03',
    readingTime: 4,
    tags: ['calcium', 'cardiovasculaire', 'controverse', 'ostéoporose'],
  },

  /* ── 27. Potassium — tension artérielle ────────────────────── */
  {
    slug: 'potassium-tension-arterielle-meta-analyses',
    category: 'mineraux',
    title: 'Potassium et tension : l\'effet est-il vraiment dose-dépendant ?',
    excerpt:
      "Méta-analyse 2020 dans le Journal of the American Heart Association : la relation entre apports en potassium et baisse tensionnelle a été précisée.",
    intro:
      "L'effet du potassium sur la tension artérielle est connu depuis longtemps. Les méta-analyses récentes ont permis de modéliser plus précisément la relation dose-réponse, et la place du potassium aux côtés du sodium.",
    sections: [
      {
        heading: 'Modélisation dose-réponse',
        body:
          "Une méta-analyse parue dans le Journal of the American Heart Association aurait modélisé la relation entre apports croissants en potassium et baisse de la pression artérielle systolique et diastolique [#s1]. Le bénéfice tensionnel deviendrait significatif au-delà d'environ 3,5 g/jour, avec un effet plus marqué chez les sujets hypertendus que normotendus. Au-delà de 4,5 g/jour, l'effet additionnel paraîtrait plus limité.",
      },
      {
        heading: 'Revue plus ancienne du BMJ',
        body:
          "Une revue systématique de référence publiée dans le BMJ aurait évalué l'effet d'apports accrus en potassium sur les facteurs de risque cardiovasculaire et la maladie cardio-vasculaire elle-même [#s2]. La conclusion suggérerait qu'une augmentation modérée des apports — accessible via l'alimentation — réduirait probablement le risque d'AVC.",
      },
      {
        heading: 'Interaction avec le sodium',
        body:
          "Une autre méta-analyse, parue dans Journal of Human Hypertension, aurait examiné comment l'apport de base en potassium modulerait l'effet hypotenseur d'une réduction du sodium [#s3]. Cette interaction explique partiellement pourquoi les régimes appauvris en sel sont plus efficaces sur fond d'apport potassique optimal (légumes, légumineuses, fruits).",
      },
    ],
    takeaway:
      "Il semblerait que viser un apport en potassium ≥ 3,5 g/jour, principalement via l'alimentation (légumes, fruits, légumineuses), constitue une stratégie de prévention tensionnelle robuste. Prudence pour les patients insuffisants rénaux ou sous traitements épargneurs de potassium.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title: 'Potassium Intake and Blood Pressure: A Dose-Response Meta-Analysis of Randomized Controlled Trials',
        authors: 'Filippini T, et al.',
        journal: 'Journal of the American Heart Association',
        year: 2020,
        pmid: '32500831',
        url: 'https://pubmed.ncbi.nlm.nih.gov/32500831/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title: 'Effect of increased potassium intake on cardiovascular risk factors and disease: systematic review and meta-analyses',
        authors: 'Aburto NJ, et al.',
        journal: 'BMJ',
        year: 2013,
        pmid: '23558164',
        url: 'https://pubmed.ncbi.nlm.nih.gov/23558164/',
      },
      {
        id: 's3',
        type: 'meta-analysis',
        title: 'The impact of baseline potassium intake on the dose-response relation between sodium reduction and blood pressure change: systematic review and meta-analysis of randomized trials',
        authors: 'Huang L, et al.',
        journal: 'Journal of Human Hypertension',
        year: 2021,
        pmid: '33674705',
        url: 'https://pubmed.ncbi.nlm.nih.gov/33674705/',
      },
    ],
    publishedAt: '2026-05-02',
    readingTime: 4,
    tags: ['potassium', 'tension', 'sodium', 'hypertension'],
  },

  /* ── 28. Manganèse — neurotoxicité ─────────────────────────── */
  {
    slug: 'manganese-neurotoxicite-exposition',
    category: 'mineraux',
    title: 'Manganèse : un cofacteur indispensable, mais à respecter',
    excerpt:
      "Indispensable en oligoélément, le manganèse devient neurotoxique en excès. Les seuils ont été affinés par la littérature occupationnelle.",
    intro:
      "Le manganèse occupe une place ambivalente : strictement nécessaire au métabolisme à dose physiologique, il est aussi l'un des oligoéléments dont la toxicité chronique a été le plus étudiée, notamment en santé occupationnelle.",
    sections: [
      {
        heading: 'Biomarqueurs d\'exposition',
        body:
          "Une revue critique parue dans Critical Reviews in Toxicology aurait fait le point sur les biomarqueurs validés pour évaluer l'exposition occupationnelle au manganèse [#s1]. Le dosage sanguin reste limité par une cinétique rapide ; les approches IRM (signal hyperintense des ganglions de la base) seraient plus sensibles pour détecter une accumulation cérébrale chronique.",
      },
      {
        heading: 'Définition de seuils d\'exposition',
        body:
          "Un article publié dans Neurotoxicology aurait évalué les limites d'exposition occupationnelle au manganèse fondées sur les données neurotoxicologiques [#s2]. Les seuils protecteurs auraient été révisés à la baisse au cours des deux dernières décennies, traduisant une meilleure prise en compte des atteintes neurologiques subcliniques.",
      },
      {
        heading: 'Rôle physiologique et déficit',
        body:
          "Une revue parue dans Metal Ions in Life Sciences aurait synthétisé le rôle du manganèse dans la santé humaine, sa biologie et les pathologies liées au déficit ou à l'excès [#s3]. Le déficit nutritionnel reste extrêmement rare chez l'adulte alimenté normalement, ce qui pose la question de la pertinence des suppléments multivitaminés qui en contiennent systématiquement.",
      },
    ],
    takeaway:
      "Il semblerait inutile dans la majorité des cas de supplémenter en manganèse, l'apport alimentaire couvrant largement les besoins. La question d'une exposition cumulative au long cours (compléments + eau + alimentation) mériterait d'être posée, surtout en présence d'une atteinte hépatique réduisant l'élimination biliaire.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'Biomarkers for occupational manganese exposure',
        authors: 'Karyakina NA, et al.',
        journal: 'Critical Reviews in Toxicology',
        year: 2022,
        pmid: '36705643',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36705643/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Setting evidence-based occupational exposure limits for manganese',
        authors: 'Bevan R, et al.',
        journal: 'Neurotoxicology',
        year: 2017,
        pmid: '27519548',
        url: 'https://pubmed.ncbi.nlm.nih.gov/27519548/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'Manganese: Its Role in Disease and Health',
        authors: 'Erikson KM, Aschner M',
        journal: 'Metal Ions in Life Sciences',
        year: 2019,
        pmid: '30855111',
        url: 'https://pubmed.ncbi.nlm.nih.gov/30855111/',
      },
    ],
    publishedAt: '2026-05-01',
    readingTime: 4,
    tags: ['manganèse', 'neurotoxicité', 'oligoélément', 'cofacteur'],
  },

  /* ── 29. Cuivre / Zinc — équilibre ─────────────────────────── */
  {
    slug: 'cuivre-zinc-equilibre-ratio',
    category: 'mineraux',
    title: 'Zinc et cuivre : pourquoi le ratio compterait autant que la dose',
    excerpt:
      "Supplémenter en zinc seul à haute dose pourrait perturber le statut en cuivre. Le ratio Zn:Cu apparaît comme un marqueur intéressant.",
    intro:
      "Une supplémentation prolongée en zinc à dose élevée modifie l'absorption intestinale du cuivre. La question pratique : à partir de quel seuil et dans quelles conditions ce déséquilibre devient-il préoccupant ?",
    sections: [
      {
        heading: 'Le bilan zinc-cuivre dans la maladie de Wilson',
        body:
          "Un article paru dans Metallomics a exploré, sur modèle murin de maladie de Wilson, comment la balance zinc-cuivre est altérée et comment elle révèle des mécanismes de toxicité [#s1]. Bien que centré sur une pathologie spécifique, ce travail éclaire la physiologie des interactions entre les deux métaux dans l'absorption intestinale et la distribution hépatique.",
      },
      {
        heading: 'Ratio Zn:Cu et athérosclérose',
        body:
          "Une étude parue dans Clinical Nutrition ESPEN aurait évalué le ratio diététique Zn:Cu comme marqueur de risque athéroscléreux chez des patients diabétiques de type 2 [#s2]. Un ratio élevé serait associé à un risque accru, soulignant que l'équilibre entre les deux métaux pourrait peser davantage que les apports absolus.",
      },
      {
        heading: 'Implication pour la supplémentation',
        body:
          "Une étude observationnelle publiée dans Nutrients aurait par ailleurs constaté que des patients sous traitements nutritionnels prolongés montraient des déséquilibres oligoélémentaires fréquents, dont une baisse du cuivre sérique en cas de supplémentation zinc à dose pharmacologique [#s3]. Ce signal conforterait la pratique d'associer une petite dose de cuivre à toute supplémentation zinc soutenue.",
      },
    ],
    takeaway:
      "Il semblerait prudent, dès qu'une supplémentation en zinc dépasse 15–25 mg/jour pendant plusieurs semaines, d'envisager un apport associé de cuivre (typiquement 1–2 mg/jour) pour préserver l'équilibre. La surveillance des marqueurs hématologiques (NFS) reste pertinente en cas de cure prolongée à haute dose.",
    sources: [
      {
        id: 's1',
        type: 'pubmed',
        title: 'Altered zinc balance in the Atp7b(-/-) mouse reveals a mechanism of copper toxicity in Wilson disease',
        authors: 'Meacham KA, et al.',
        journal: 'Metallomics',
        year: 2018,
        pmid: '30277246',
        url: 'https://pubmed.ncbi.nlm.nih.gov/30277246/',
      },
      {
        id: 's2',
        type: 'cohort',
        title: 'Raised dietary Zn:Cu ratio increases the risk of atherosclerosis in type 2 diabetes',
        authors: 'Kärberg K, et al.',
        journal: 'Clinical Nutrition ESPEN',
        year: 2022,
        pmid: '35871927',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35871927/',
      },
      {
        id: 's3',
        type: 'cohort',
        title: 'Nutritional Status of Patients with Facioscapulohumeral Muscular Dystrophy',
        authors: 'Amzali S, et al.',
        journal: 'Nutrients',
        year: 2023,
        pmid: '37049513',
        url: 'https://pubmed.ncbi.nlm.nih.gov/37049513/',
      },
    ],
    publishedAt: '2026-04-30',
    readingTime: 4,
    tags: ['zinc', 'cuivre', 'ratio', 'oligoéléments'],
  },

  /* ── 30. Chrome — diabète type 2 ───────────────────────────── */
  {
    slug: 'chrome-picolinate-diabete-type-2',
    category: 'mineraux',
    title: 'Chrome picolinate dans le diabète de type 2 : un effet réel ?',
    excerpt:
      "Le chrome est souvent mentionné pour la régulation glycémique. Que disent les revues systématiques sur son intérêt réel ?",
    intro:
      "Le chrome trivalent occupe une place régulière dans les protocoles de soutien glycémique. Plusieurs revues systématiques permettent aujourd'hui d'objectiver la réalité de son effet.",
    sections: [
      {
        heading: 'Revue extensive 2024',
        body:
          "Une revue systématique extensive parue dans Environmental Geochemistry and Health aurait évalué l'effet de la supplémentation en chrome sur le diabète de type 2 [#s1]. Les auteurs auraient conclu à un effet modeste sur la glycémie à jeun et l'HbA1c chez certains sous-groupes (carence en chrome marquée, mauvais équilibre glycémique initial), mais sans bénéfice constant ni cliniquement majeur.",
      },
      {
        heading: 'Essai clinique chez les sujets à risque',
        body:
          "Une étude parue dans Endocrine Practice aurait évalué l'effet du chrome sur la tolérance au glucose et la sensibilité à l'insuline chez des sujets à risque de diabète [#s2]. Les résultats observés seraient modestes, et la réponse hétérogène d'un sujet à l'autre — ce qui rend la généralisation difficile.",
      },
      {
        heading: 'Revue plus ancienne dans Diabetes Educator',
        body:
          "Une revue scientifique publiée dans The Diabetes Educator avait dressé un état des lieux des données sur le rôle du chrome dans la résistance à l'insuline [#s3]. Elle soulignait déjà les limites méthodologiques de la littérature et l'absence de marqueur biologique fiable pour identifier les patients « répondeurs ».",
      },
    ],
    takeaway:
      "Il semblerait que le chrome ne soit pas un traitement du diabète de type 2, mais qu'il puisse offrir un soutien modeste chez certains profils. Les essais cliniques restent hétérogènes et l'effet documenté reste éloigné de celui des thérapeutiques médicamenteuses validées. L'alimentation suffit chez la plupart des adultes en bonne santé.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'Chromium supplementation and type 2 diabetes mellitus: an extensive systematic review',
        authors: 'Georgaki MN, et al.',
        journal: 'Environmental Geochemistry and Health',
        year: 2024,
        pmid: '39541030',
        url: 'https://pubmed.ncbi.nlm.nih.gov/39541030/',
      },
      {
        id: 's2',
        type: 'rct',
        title: 'Chromium effects on glucose tolerance and insulin sensitivity in persons at risk for diabetes mellitus',
        authors: 'Ali A, et al.',
        journal: 'Endocrine Practice',
        year: 2011,
        pmid: '20634174',
        url: 'https://pubmed.ncbi.nlm.nih.gov/20634174/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'A scientific review: the role of chromium in insulin resistance',
        authors: 'Havel PJ',
        journal: 'The Diabetes Educator',
        year: 2004,
        pmid: '15208835',
        url: 'https://pubmed.ncbi.nlm.nih.gov/15208835/',
      },
    ],
    publishedAt: '2026-04-29',
    readingTime: 4,
    tags: ['chrome', 'picolinate', 'diabète type 2', 'glycémie'],
  },
];
