import type { Actualite } from '../types';

export const ACTUALITES_ADAPTOGENES: Actualite[] = [

  /* ── 11. Ashwagandha — stress ──────────────────────────────── */
  {
    slug: 'ashwagandha-stress-cortisol',
    category: 'adaptogenes-plantes',
    title: 'Ashwagandha et stress : que disent les essais randomisés ?',
    excerpt:
      "L'ashwagandha (Withania somnifera) est l'adaptogène le plus étudié en santé mentale. Synthèse des données contrôlées les plus récentes.",
    intro:
      "L'ashwagandha occupe une place centrale dans la pharmacopée ayurvédique. Une vague d'essais cliniques ces dix dernières années a permis d'évaluer plus rigoureusement ses effets sur le stress, l'anxiété et le cortisol.",
    sections: [
      {
        heading: 'Essai de référence sur le cortisol',
        body:
          "Un essai randomisé en double aveugle paru dans l'Indian Journal of Psychological Medicine a comparé un extrait racine d'ashwagandha à haute concentration contre placebo chez 64 adultes en surcharge de stress [#s1]. Les chercheurs auraient observé une réduction significative du cortisol sérique matinal et des scores de stress perçu après 60 jours dans le bras intervention.",
      },
      {
        heading: 'Confirmation par méta-analyse',
        body:
          "Une méta-analyse plus récente publiée dans Explore a synthétisé les essais randomisés disponibles sur l'ashwagandha pour le stress et l'anxiété [#s2]. La direction de l'effet apparaîtrait cohérente d'un essai à l'autre, avec une réduction modérée mais détectable des marqueurs subjectifs et biologiques de stress.",
      },
      {
        heading: 'Spectre élargi',
        body:
          "Une autre investigation, publiée dans Medicine (Baltimore), aurait également documenté un effet sur le sommeil et des marqueurs hormonaux complémentaires [#s3]. Les protocoles utilisés vont en général de 300 à 600 mg/jour d'extrait standardisé pendant 6 à 8 semaines.",
      },
    ],
    takeaway:
      "Il semblerait que l'ashwagandha présente un signal favorable et reproductible sur le stress et le cortisol, à des doses standardisées. Les contre-indications principales (grossesse, dysthyroïdie, immunosuppresseurs) doivent être respectées et la cure ne devrait pas s'éterniser sans réévaluation.",
    sources: [
      {
        id: 's1',
        type: 'rct',
        title: 'A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of ashwagandha root in reducing stress and anxiety in adults',
        authors: 'Chandrasekhar K, et al.',
        journal: 'Indian Journal of Psychological Medicine',
        year: 2012,
        pmid: '23439798',
        url: 'https://pubmed.ncbi.nlm.nih.gov/23439798/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title: 'Effects of Ashwagandha (Withania Somnifera) on stress and anxiety: A systematic review and meta-analysis',
        authors: 'Arumugam V, et al.',
        journal: 'Explore',
        year: 2024,
        pmid: '39348746',
        url: 'https://pubmed.ncbi.nlm.nih.gov/39348746/',
      },
      {
        id: 's3',
        type: 'rct',
        title: 'An investigation into the stress-relieving and pharmacological actions of an ashwagandha (Withania somnifera) extract: A randomized, double-blind, placebo-controlled study',
        authors: 'Lopresti AL, et al.',
        journal: 'Medicine (Baltimore)',
        year: 2019,
        pmid: '31517876',
        url: 'https://pubmed.ncbi.nlm.nih.gov/31517876/',
      },
    ],
    publishedAt: '2026-05-18',
    readingTime: 4,
    tags: ['ashwagandha', 'adaptogène', 'stress', 'cortisol'],
  },

  /* ── 12. Rhodiole — fatigue ────────────────────────────────── */
  {
    slug: 'rhodiole-fatigue-performance-mentale',
    category: 'adaptogenes-plantes',
    title: 'Rhodiola rosea : ce qu\'on a appris depuis l\'étude SHR-5',
    excerpt:
      "L'essai pionnier mené chez des médecins en garde de nuit reste une référence. Vingt ans plus tard, qu'a confirmé la littérature ?",
    intro:
      "La rhodiole est l'un des rares adaptogènes pour lequel un essai randomisé crédible a été publié dès le début des années 2000. La question est de savoir si ce signal initial a tenu dans le temps.",
    sections: [
      {
        heading: 'L\'essai SHR-5',
        body:
          "L'étude publiée dans Phytomedicine en 2000 avait testé un extrait standardisé SHR-5 de rhodiole, en double aveugle croisé, chez des médecins en garde de nuit [#s1]. Les chercheurs auraient observé une amélioration significative des performances cognitives et une réduction de la fatigue mentale dans le bras actif, à dose faible et répétée. Ce dispositif rigoureux a longtemps fait référence.",
      },
      {
        heading: 'Revue systématique : le bilan',
        body:
          "Une revue systématique parue dans BMC Complementary and Alternative Medicine a passé en revue les essais randomisés disponibles sur la rhodiole pour la fatigue physique et mentale [#s2]. Les conclusions resteraient nuancées : la qualité méthodologique des essais varierait fortement, et si la direction de l'effet paraît positive, l'ampleur n'est pas spectaculaire.",
      },
      {
        heading: 'En pratique',
        body:
          "Les extraits standardisés à 3 % rosavines et 1 % salidroside sont les plus étudiés. Les doses utilisées vont typiquement de 200 à 600 mg/jour, en cure de courte durée (4 à 8 semaines).",
      },
    ],
    takeaway:
      "Il semblerait que la rhodiole offre un bénéfice modeste mais documenté sur la fatigue physique et mentale, particulièrement en situation de stress aigu ou de surcharge cognitive. Elle ne paraît pas adaptée à un usage permanent et reste contre-indiquée en cas de troubles bipolaires.",
    sources: [
      {
        id: 's1',
        type: 'rct',
        title: 'Rhodiola rosea in stress induced fatigue — a double blind cross-over study of a standardized extract SHR-5 with a repeated low-dose regimen on the mental performance of healthy physicians during night duty',
        authors: 'Darbinyan V, et al.',
        journal: 'Phytomedicine',
        year: 2000,
        pmid: '11081987',
        url: 'https://pubmed.ncbi.nlm.nih.gov/11081987/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Rhodiola rosea for physical and mental fatigue: a systematic review',
        authors: 'Ishaque S, et al.',
        journal: 'BMC Complementary and Alternative Medicine',
        year: 2012,
        pmid: '22643043',
        url: 'https://pubmed.ncbi.nlm.nih.gov/22643043/',
      },
    ],
    publishedAt: '2026-05-17',
    readingTime: 4,
    tags: ['rhodiole', 'rhodiola', 'fatigue', 'adaptogène'],
  },

  /* ── 13. Curcuma — piperine ────────────────────────────────── */
  {
    slug: 'curcuma-piperine-biodisponibilite',
    category: 'adaptogenes-plantes',
    title: 'Curcuma : pourquoi la pipérine semblerait incontournable',
    excerpt:
      "Le curcuma seul est très peu absorbé par l'organisme. La pipérine a transformé l'usage thérapeutique de la curcumine.",
    intro:
      "Si la curcumine présente, sur le papier, un large éventail d'effets anti-inflammatoires, sa très faible biodisponibilité orale a longtemps freiné son intérêt clinique réel.",
    sections: [
      {
        heading: 'Une revue qui synthétise',
        body:
          "Une revue parue dans Foods aurait passé en revue l'ensemble des effets documentés de la curcumine sur la santé humaine, en insistant sur la nécessité d'améliorer son absorption pour observer un effet clinique [#s1]. Sans formulation adaptée (pipérine, phytosomes, lipo-conjugaison), une dose orale ordinaire de curcuma alimentaire produirait des taux plasmatiques très faibles.",
      },
      {
        heading: 'Le mécanisme de la pipérine',
        body:
          "Une étude expérimentale dans Neurotoxicity Research aurait illustré l'effet protecteur d'une co-administration curcumine + pipérine [#s2]. La pipérine, principe actif du poivre noir, inhiberait la glucuronidation hépatique et intestinale de la curcumine, conduisant à une augmentation marquée de sa concentration plasmatique. C'est cette synergie qui a popularisé l'association.",
      },
      {
        heading: 'En pratique',
        body:
          "Les compléments les plus étudiés associent un extrait de curcuma standardisé à 95 % curcuminoïdes et 5 mg de pipérine par dose, ou des formes phytosomales/micellaires. L'intérêt clinique principal documenté concerne les douleurs articulaires inflammatoires chroniques.",
      },
    ],
    takeaway:
      "Il semblerait illusoire d'attendre un effet thérapeutique du curcuma alimentaire seul. La pipérine ou les formulations galéniques modernes paraissent indispensables. Précaution : la pipérine modifie aussi l'absorption d'autres médicaments — l'avis d'un professionnel reste recommandé en cas de traitement en cours.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'Curcumin: A Review of Its Effects on Human Health',
        authors: 'Hewlings SJ, Kalman DS',
        journal: 'Foods',
        year: 2017,
        pmid: '29065496',
        url: 'https://pubmed.ncbi.nlm.nih.gov/29065496/',
      },
      {
        id: 's2',
        type: 'pubmed',
        title: 'Protective effect of curcumin and its combination with piperine (bioavailability enhancer) against haloperidol-associated neurotoxicity',
        authors: 'Bishnoi M, et al.',
        journal: 'Neurotoxicity Research',
        year: 2011,
        pmid: '21076901',
        url: 'https://pubmed.ncbi.nlm.nih.gov/21076901/',
      },
    ],
    publishedAt: '2026-05-16',
    readingTime: 4,
    tags: ['curcuma', 'curcumine', 'pipérine', 'inflammation'],
  },

  /* ── 14. Ginseng — fatigue ─────────────────────────────────── */
  {
    slug: 'ginseng-fatigue-meta-analyses',
    category: 'adaptogenes-plantes',
    title: 'Ginseng et fatigue : ce que disent les méta-analyses récentes',
    excerpt:
      "Le ginseng est un classique des adaptogènes. Deux méta-analyses récentes ont synthétisé les données sur son intérêt dans la fatigue.",
    intro:
      "Le Panax ginseng accumule plus d'un siècle de littérature, mais c'est seulement récemment que des méta-analyses ont permis d'évaluer collectivement son efficacité sur la fatigue chronique et liée aux maladies.",
    sections: [
      {
        heading: 'Méta-analyse 2022',
        body:
          "Une méta-analyse parue dans Medicine a évalué l'efficacité de différentes formes de ginseng sur la fatigue liée à la maladie (cancer, sclérose en plaques, fibromyalgie…) [#s1]. Les auteurs auraient observé une amélioration modeste mais significative de l'intensité de la fatigue, avec un profil de tolérance globalement satisfaisant.",
      },
      {
        heading: 'Confirmation dans une seconde synthèse',
        body:
          "Une autre méta-analyse publiée dans le Journal of Integrative and Complementary Medicine a confirmé ces résultats, en y ajoutant l'évaluation des formules traditionnelles incluant du ginseng [#s2]. La direction de l'effet paraît robuste, même si l'ampleur reste cliniquement modérée.",
      },
      {
        heading: 'Différencier les espèces',
        body:
          "Une attention particulière s'imposerait sur la distinction Panax ginseng (asiatique), Panax quinquefolius (américain) et Eleutherococcus senticosus (souvent appelé « ginseng sibérien » mais botaniquement différent). Les profils d'action paraissent dissemblables.",
      },
    ],
    takeaway:
      "Il semblerait que le ginseng puisse offrir un appoint dans les fatigues prolongées, en particulier d'origine pathologique. Les contre-indications classiques (hypertension non contrôlée, hyperthyroïdie, anticoagulants) restent à respecter.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title: 'Efficacy of ginseng supplements on disease-related fatigue: A systematic review and meta-analysis',
        authors: 'Zhu J, et al.',
        journal: 'Medicine',
        year: 2022,
        pmid: '35776997',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35776997/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title: 'Ginseng and Ginseng Herbal Formulas for Symptomatic Management of Fatigue: A Systematic Review and Meta-Analysis',
        authors: 'Li X, et al.',
        journal: 'Journal of Integrative and Complementary Medicine',
        year: 2023,
        pmid: '36730693',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36730693/',
      },
    ],
    publishedAt: '2026-05-15',
    readingTime: 4,
    tags: ['ginseng', 'fatigue', 'panax', 'adaptogène'],
  },

  /* ── 15. Cordyceps — performance ───────────────────────────── */
  {
    slug: 'cordyceps-performance-sportive',
    category: 'adaptogenes-plantes',
    title: 'Cordyceps militaris : un effet réel sur la performance sportive ?',
    excerpt:
      "Champignon médicinal star du marché du sport, le cordyceps cumule promesses et essais cliniques rares. Que dit vraiment la littérature ?",
    intro:
      "Le cordyceps (Cordyceps militaris ou Cordyceps sinensis) est largement présenté comme un soutien à l'endurance et à la VO2 max. Sa popularité dans le monde du fitness mérite confrontation avec les données contrôlées.",
    sections: [
      {
        heading: 'Un essai chez des sportifs',
        body:
          "Une étude parue dans Journal of Dietary Supplements aurait évalué l'effet du Cordyceps militaris sur la tolérance à un effort de haute intensité, en aigu et après supplémentation chronique [#s1]. Les chercheurs auraient observé une amélioration modeste mais détectable du seuil ventilatoire et du temps jusqu'à l'épuisement après plusieurs semaines de supplémentation.",
      },
      {
        heading: 'Revue d\'ensemble des plantes pour le sport',
        body:
          "Une revue narrative publiée dans le Journal of the International Society of Sports Nutrition a passé en revue les principales plantes utilisées dans le contexte sportif, dont le cordyceps [#s2]. Les auteurs auraient classé les plantes selon le niveau de preuve : le cordyceps y figurerait avec un soutien modéré, supérieur à beaucoup d'autres champignons médicinaux mais inférieur à la créatine ou à la caféine.",
      },
      {
        heading: 'Tempérer les attentes',
        body:
          "L'ampleur d'effet rapportée resterait incomparable avec celle des ergogéniques classiques. Le cordyceps ne semble pas un « substitut » mais un complément potentiel intéressant, particulièrement dans les phases de reprise ou de surentraînement.",
      },
    ],
    takeaway:
      "Il semblerait que le Cordyceps militaris dispose d'un signal cohérent sur la tolérance à l'effort, mais l'effet paraît modéré et la qualité des produits commerciaux très variable. Privilégier les extraits standardisés en cordycépine et adénosine.",
    sources: [
      {
        id: 's1',
        type: 'rct',
        title: 'Cordyceps militaris Improves Tolerance to High-Intensity Exercise After Acute and Chronic Supplementation',
        authors: 'Hirsch KR, et al.',
        journal: 'Journal of Dietary Supplements',
        year: 2017,
        pmid: '27408987',
        url: 'https://pubmed.ncbi.nlm.nih.gov/27408987/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Herbal medicine for sports: a review',
        authors: 'Sellami M, et al.',
        journal: 'Journal of the International Society of Sports Nutrition',
        year: 2018,
        pmid: '29568244',
        url: 'https://pubmed.ncbi.nlm.nih.gov/29568244/',
      },
    ],
    publishedAt: '2026-05-14',
    readingTime: 4,
    tags: ['cordyceps', 'sport', 'endurance', 'champignon médicinal'],
  },
];
