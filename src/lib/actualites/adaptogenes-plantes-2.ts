import type { Actualite } from '../types';

export const ACTUALITES_ADAPTOGENES_2: Actualite[] = [

  /* ── 31. Reishi (Ganoderma lucidum) ────────────────────────── */
  {
    slug: 'reishi-ganoderma-immunite-cancer',
    category: 'adaptogenes-plantes',
    title: 'Reishi (Ganoderma lucidum) : quelle réalité derrière les promesses ?',
    excerpt:
      "Le reishi est l'un des champignons médicinaux les plus vendus au monde. Les revues Cochrane et phytothérapeutiques apportent un regard prudent.",
    intro:
      "Connue depuis des siècles dans la médecine traditionnelle chinoise, le Ganoderma lucidum (reishi) est aujourd'hui largement supplémenté. La littérature scientifique contemporaine permet d'évaluer ce que ces usages traditionnels gardent ou non comme pertinence en santé moderne.",
    sections: [
      {
        heading: 'Revue exhaustive 2021',
        body:
          "Une revue critique parue dans Phytotherapy Research aurait synthétisé les propriétés nutritionnelles, pharmacologiques et toxicologiques du reishi [#s1]. Les auteurs auraient identifié plusieurs polysaccharides et triterpènes biologiquement actifs (immuno-modulation, effets antioxydants), tout en soulignant que la qualité des compléments commerciaux varie largement et que les essais humains restent modestes.",
      },
      {
        heading: 'Revue Cochrane en oncologie',
        body:
          "Une revue Cochrane a évalué l'utilisation du reishi en accompagnement des traitements du cancer [#s2]. Les conclusions seraient prudentes : un signal possible sur la qualité de vie et la réponse immunitaire, mais sans démonstration d'effet sur la survie ou la réponse tumorale. Les données restent insuffisantes pour positionner le reishi comme un traitement adjuvant validé.",
      },
      {
        heading: 'Modulation immunitaire chez les seniors',
        body:
          "Un essai paru dans British Journal of Nutrition aurait évalué l'effet d'un extrait sec de Ganoderma lucidum sur la fonction des lymphocytes T chez des femmes âgées [#s3]. Une modulation détectable de certains marqueurs immunitaires aurait été observée, sans bénéfice clinique direct documenté à ce stade.",
      },
    ],
    takeaway:
      "Il semblerait que le reishi présente des effets biologiques réels mais modestes, et que son usage en accompagnement de traitements lourds nécessite l'avis du médecin traitant. La standardisation des produits (taux en bêta-glucanes et triterpènes) reste un critère décisif.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'Ganoderma lucidum (Reishi) an edible mushroom; a comprehensive and critical review of its nutritional, cosmeceutical, mycochemical, pharmacological, clinical, and toxicological properties',
        authors: 'Ahmad R, et al.',
        journal: 'Phytotherapy Research',
        year: 2021,
        pmid: '34411377',
        url: 'https://pubmed.ncbi.nlm.nih.gov/34411377/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Ganoderma lucidum (Reishi mushroom) for cancer treatment',
        authors: 'Jin X, et al.',
        journal: 'Cochrane Database of Systematic Reviews',
        year: 2016,
        pmid: '27045603',
        url: 'https://pubmed.ncbi.nlm.nih.gov/27045603/',
      },
      {
        id: 's3',
        type: 'rct',
        title: 'Ganoderma lucidum dry extract supplementation modulates T lymphocyte function in older women',
        authors: 'Iser-Bem PN, et al.',
        journal: 'British Journal of Nutrition',
        year: 2024,
        pmid: '38800991',
        url: 'https://pubmed.ncbi.nlm.nih.gov/38800991/',
      },
    ],
    publishedAt: '2026-04-28',
    readingTime: 4,
    tags: ['reishi', 'Ganoderma', 'champignon médicinal', 'immunité'],
  },

  /* ── 32. Maca (Lepidium meyenii) ───────────────────────────── */
  {
    slug: 'maca-lepidium-meyenii-fonction-sexuelle',
    category: 'adaptogenes-plantes',
    title: 'Maca (Lepidium meyenii) : effet sur la libido sans modifier la testostérone',
    excerpt:
      "L'effet de la maca sur la fonction sexuelle a été testé dans plusieurs essais cliniques. Le résultat semble surprenant : oui pour la libido, sans variation hormonale.",
    intro:
      "Originaire des Andes, la maca jouit d'une réputation d'aphrodisiaque naturel. La littérature contrôlée disponible apporte un éclairage assez précis sur ce que la plante fait — et ne fait pas.",
    sections: [
      {
        heading: 'Premier essai référence',
        body:
          "Un essai paru dans Andrologia a testé l'effet de la maca sur le désir sexuel chez des hommes adultes en bonne santé [#s1]. Les auteurs auraient observé une augmentation significative du désir sexuel auto-rapporté sans modification des taux sériques de testostérone, LH ou FSH. Ce dissocié signal/hormone a depuis été repris dans plusieurs études.",
      },
      {
        heading: 'Revue systématique 2010',
        body:
          "Une revue parue dans BMC Complementary and Alternative Medicine aurait synthétisé les essais cliniques disponibles sur la maca pour l'amélioration de la fonction sexuelle [#s2]. Le signal global resterait modeste mais cohérent — l'effet sur le désir sexuel et la fonction érectile serait détectable, sans démontrer un mécanisme hormonal direct.",
      },
      {
        heading: 'Études récentes en fertilité masculine',
        body:
          "Une étude expérimentale parue dans Journal of Ethnopharmacology aurait évalué l'effet d'un extrait de maca dans un modèle d'azoospermie non-obstructive chez la souris [#s3]. Les résultats sur la spermatogenèse seraient encourageants mais préliminaires — ce type de donnée préclinique ne se transpose pas directement à la clinique humaine.",
      },
    ],
    takeaway:
      "Il semblerait que la maca puisse offrir un bénéfice modeste sur la libido, par un mécanisme qui resterait à élucider (probablement non hormonal direct). Bien tolérée, elle reste un complément raisonnable, sans constituer un traitement de pathologies de la fertilité ou de la dysfonction érectile.",
    sources: [
      {
        id: 's1',
        type: 'rct',
        title: 'Effect of Lepidium meyenii (MACA) on sexual desire and its absent relationship with serum testosterone levels in adult healthy men',
        authors: 'Gonzales GF, et al.',
        journal: 'Andrologia',
        year: 2002,
        pmid: '12472620',
        url: 'https://pubmed.ncbi.nlm.nih.gov/12472620/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Maca (L. meyenii) for improving sexual function: a systematic review',
        authors: 'Shin BC, et al.',
        journal: 'BMC Complementary and Alternative Medicine',
        year: 2010,
        pmid: '20691074',
        url: 'https://pubmed.ncbi.nlm.nih.gov/20691074/',
      },
      {
        id: 's3',
        type: 'pubmed',
        title: 'Effect of maca (Lepidium meyenii) extract on non-obstructive azoospermia in male mice',
        authors: 'Zhou B, et al.',
        journal: 'Journal of Ethnopharmacology',
        year: 2023,
        pmid: '36758913',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36758913/',
      },
    ],
    publishedAt: '2026-04-27',
    readingTime: 4,
    tags: ['maca', 'libido', 'fonction sexuelle', 'adaptogène'],
  },

  /* ── 33. Astragale ─────────────────────────────────────────── */
  {
    slug: 'astragale-membranaceus-immunite',
    category: 'adaptogenes-plantes',
    title: 'Astragale (Astragalus membranaceus) : modulation immunitaire documentée',
    excerpt:
      "Pilier de la pharmacopée chinoise, l'astragale a fait l'objet de plusieurs travaux contrôlés sur l'immunité, notamment dans un cadre cardiologique.",
    intro:
      "L'astragale, racine traditionnellement utilisée comme « tonique du Qi », occupe une place croissante dans les protocoles d'accompagnement immunitaire et cardiaque. La littérature contrôlée reste modeste mais cohérente.",
    sections: [
      {
        heading: 'Activation immunitaire mesurable',
        body:
          "Une étude humaine parue dans Phytotherapy Research aurait évalué l'effet d'extraits d'astragale, d'échinacée et de glycyrrhiza sur les marqueurs d'activation lymphocytaire (CD69) chez l'humain [#s1]. Les auteurs auraient observé une augmentation détectable de cette activation après plusieurs jours de prise, suggérant une modulation immunitaire mesurable, sans pouvoir affirmer un bénéfice clinique direct.",
      },
      {
        heading: 'Revue préclinique et clinique en myocardite virale',
        body:
          "Une revue systématique parue dans Oxidative Medicine and Cellular Longevity aurait synthétisé les données précliniques et cliniques sur l'astragale dans la myocardite virale [#s2]. Le bilan suggèrerait un effet potentiellement protecteur, mais la majorité des essais sont menés en Chine, sur des protocoles hétérogènes, ce qui limite la portée des conclusions.",
      },
      {
        heading: 'Utilisation chez l\'animal',
        body:
          "Une étude publiée dans Journal of Animal Physiology and Animal Nutrition aurait évalué un mélange à base d'astragale chez le porc d'engraissement, observant un effet sur la performance, la digestibilité et certains marqueurs immunitaires [#s3]. Bien que vétérinaire, ce travail illustre les modes d'action investigués et reste pertinent pour comprendre le mécanisme.",
      },
    ],
    takeaway:
      "Il semblerait que l'astragale possède une activité immunomodulatrice détectable, sans qu'elle soit pour autant un traitement spécifique d'une pathologie immunitaire chez l'humain. Sa contre-indication classique reste l'auto-immunité active et les traitements immunosuppresseurs.",
    sources: [
      {
        id: 's1',
        type: 'pubmed',
        title: 'The effect of Echinacea purpurea, Astragalus membranaceus and Glycyrrhiza glabra on CD69 expression and immune cell activation in humans',
        authors: 'Brush J, et al.',
        journal: 'Phytotherapy Research',
        year: 2006,
        pmid: '16807880',
        url: 'https://pubmed.ncbi.nlm.nih.gov/16807880/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Clinical and Preclinical Systematic Review of Astragalus Membranaceus for Viral Myocarditis',
        authors: 'Zheng Q, et al.',
        journal: 'Oxidative Medicine and Cellular Longevity',
        year: 2020,
        pmid: '33204391',
        url: 'https://pubmed.ncbi.nlm.nih.gov/33204391/',
      },
      {
        id: 's3',
        type: 'pubmed',
        title: 'Effects of Astragalus membranaceus, Codonopsis pilosula and allicin mixture on growth performance, nutrient digestibility, faecal microbial shedding, immune response and meat quality in finishing pigs',
        authors: 'Lan RX, et al.',
        journal: 'Journal of Animal Physiology and Animal Nutrition',
        year: 2017,
        pmid: '27868250',
        url: 'https://pubmed.ncbi.nlm.nih.gov/27868250/',
      },
    ],
    publishedAt: '2026-04-26',
    readingTime: 4,
    tags: ['astragale', 'astragalus', 'immunité', 'pharmacopée chinoise'],
  },

  /* ── 34. Bacopa monnieri — cognition ───────────────────────── */
  {
    slug: 'bacopa-monnieri-memoire-cognition',
    category: 'adaptogenes-plantes',
    title: 'Bacopa monnieri : signal cognitif modeste mais documenté',
    excerpt:
      "Plante ayurvédique utilisée pour la mémoire, le Bacopa a fait l'objet d'essais randomisés et de méta-analyses dont les conclusions méritent d'être lues précisément.",
    intro:
      "Le Bacopa monnieri (Brahmi) est l'une des plantes ayurvédiques pour laquelle la littérature occidentale s'est le plus densifiée. Les essais cliniques disponibles permettent une lecture nuancée de son efficacité cognitive réelle.",
    sections: [
      {
        heading: 'Essai contrôlé chez le sujet âgé',
        body:
          "Un essai randomisé en double aveugle paru dans le Journal of Alternative and Complementary Medicine a testé un extrait standardisé de Bacopa monnieri sur la cognition, l'anxiété et la dépression chez le sujet âgé [#s1]. Les chercheurs auraient observé une amélioration significative des scores de mémoire associative et une réduction des scores d'anxiété par rapport au placebo, sans modification majeure de la fonction exécutive.",
      },
      {
        heading: 'Méta-analyse 2014',
        body:
          "Une méta-analyse parue dans Journal of Ethnopharmacology aurait rassemblé les essais randomisés disponibles sur les effets cognitifs du Bacopa [#s2]. Le bénéfice détecté serait modeste mais reproductible sur certains tests de mémoire et d'attention. La durée minimale de traitement nécessaire (souvent ≥ 8 semaines) ressort comme un point pratique important.",
      },
      {
        heading: 'Maladie d\'Alzheimer',
        body:
          "Une revue systématique des essais randomisés dans la démence Alzheimer publiée dans Interactive Journal of Medical Research a évalué le Bacopa comme thérapeutique complémentaire [#s3]. Les conclusions resteraient prudentes : signal possible mais nombre d'essais insuffisant pour conclure à un effet clinique stable.",
      },
    ],
    takeaway:
      "Il semblerait que le Bacopa monnieri puisse offrir un soutien cognitif modeste chez le sujet âgé ou en surcharge mentale, à condition d'une durée de prise suffisante. Le profil de tolérance est globalement bon ; quelques troubles digestifs en début de cure sont fréquents.",
    sources: [
      {
        id: 's1',
        type: 'rct',
        title: 'Effects of a standardized Bacopa monnieri extract on cognitive performance, anxiety, and depression in the elderly: a randomized, double-blind, placebo-controlled trial',
        authors: 'Calabrese C, et al.',
        journal: 'Journal of Alternative and Complementary Medicine',
        year: 2008,
        pmid: '18611150',
        url: 'https://pubmed.ncbi.nlm.nih.gov/18611150/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title: 'Meta-analysis of randomized controlled trials on cognitive effects of Bacopa monnieri extract',
        authors: 'Kongkeaw C, et al.',
        journal: 'Journal of Ethnopharmacology',
        year: 2014,
        pmid: '24252493',
        url: 'https://pubmed.ncbi.nlm.nih.gov/24252493/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'Use of Bacopa monnieri in the Treatment of Dementia Due to Alzheimer Disease: Systematic Review of Randomized Controlled Trials',
        authors: 'Basheer A, et al.',
        journal: 'Interactive Journal of Medical Research',
        year: 2022,
        pmid: '35612544',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35612544/',
      },
    ],
    publishedAt: '2026-04-25',
    readingTime: 4,
    tags: ['bacopa', 'brahmi', 'mémoire', 'cognition'],
  },

  /* ── 35. Ginkgo biloba — démence ───────────────────────────── */
  {
    slug: 'ginkgo-biloba-cognition-dementia',
    category: 'adaptogenes-plantes',
    title: 'Ginkgo biloba : ce que les méta-analyses concluent réellement',
    excerpt:
      "L'extrait EGb 761 du Ginkgo est l'un des phytomédicaments les plus étudiés. Synthèse mise à jour des méta-analyses récentes.",
    intro:
      "Le Ginkgo biloba a accumulé plus de cinquante ans de littérature clinique. La question reste : ses bénéfices documentés justifient-ils son usage en routine chez le sujet présentant un trouble cognitif léger ?",
    sections: [
      {
        heading: 'Méta-analyse 2015 dans Alzheimer\'s Disease',
        body:
          "Une méta-analyse parue dans Journal of Alzheimer's Disease a évalué l'efficacité du Ginkgo dans les troubles cognitifs et les démences, ainsi que ses effets indésirables [#s1]. Le bénéfice détecté serait modeste mais significatif chez les patients atteints de troubles cognitifs établis, particulièrement avec l'extrait standardisé EGb 761.",
      },
      {
        heading: 'Méta-analyse 2025',
        body:
          "Une méta-analyse récente publiée dans The World Journal of Biological Psychiatry s'est concentrée sur les sous-groupes de patients atteints de démence légère traités par EGb 761 [#s2]. Les auteurs auraient confirmé l'efficacité et la sécurité de l'extrait dans cette indication, avec un profil bénéfice-risque favorable.",
      },
      {
        heading: 'Comparaison entre traitements',
        body:
          "Une méta-analyse de réseau publiée dans Psychopharmacology a comparé plusieurs traitements de la dysfonction cognitive dans la démence, dont le Ginkgo [#s3]. Le Ginkgo y apparaîtrait avec un effet inférieur aux inhibiteurs de la cholinestérase, mais avec un profil de tolérance plus favorable — d'où son intérêt potentiel en cas d'intolérance aux traitements de première ligne.",
      },
    ],
    takeaway:
      "Il semblerait que le Ginkgo biloba (forme standardisée EGb 761) constitue une option raisonnable chez les patients présentant des troubles cognitifs légers, en particulier ceux qui ne tolèrent pas les traitements de référence. La prudence reste de mise en cas de traitement anticoagulant ou antiagrégant associé.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title: 'Efficacy and adverse effects of ginkgo biloba for cognitive impairment and dementia: a systematic review and meta-analysis',
        authors: 'Tan MS, et al.',
        journal: "Journal of Alzheimer's Disease",
        year: 2015,
        pmid: '25114079',
        url: 'https://pubmed.ncbi.nlm.nih.gov/25114079/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title: 'Ginkgo biloba extract EGb 761 is safe and effective in the treatment of mild dementia — a meta-analysis of patient subgroups in randomised controlled trials',
        authors: 'Riepe M, et al.',
        journal: 'The World Journal of Biological Psychiatry',
        year: 2025,
        pmid: '39895346',
        url: 'https://pubmed.ncbi.nlm.nih.gov/39895346/',
      },
      {
        id: 's3',
        type: 'meta-analysis',
        title: 'The treatment of cognitive dysfunction in dementia: a multiple treatments meta-analysis',
        authors: 'Perng CH, et al.',
        journal: 'Psychopharmacology',
        year: 2018,
        pmid: '29502274',
        url: 'https://pubmed.ncbi.nlm.nih.gov/29502274/',
      },
    ],
    publishedAt: '2026-04-24',
    readingTime: 4,
    tags: ['ginkgo', 'EGb 761', 'cognition', 'démence'],
  },
];
