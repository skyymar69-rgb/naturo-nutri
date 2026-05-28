import type { Actualite } from '../types';

export const ACTUALITES_MICROBIOTE_2: Actualite[] = [

  /* ── 36. Probiotiques + antibiotiques ──────────────────────── */
  {
    slug: 'probiotiques-prevention-diarrhee-antibiotiques',
    category: 'microbiote-nutrition',
    title: 'Probiotiques et antibiothérapie : indication la plus solide',
    excerpt:
      "Si une seule indication des probiotiques est robuste, c'est celle-ci. Plusieurs méta-analyses convergent — synthèse.",
    intro:
      "Parmi les nombreuses indications attribuées aux probiotiques, la prévention de la diarrhée associée aux antibiotiques est celle qui dispose de la base de données la plus solide. La littérature récente l'a confirmée.",
    sections: [
      {
        heading: 'Méta-analyse JAMA',
        body:
          "Une méta-analyse publiée dans JAMA aurait évalué l'utilisation des probiotiques pour la prévention et le traitement de la diarrhée associée aux antibiotiques [#s1]. Les chercheurs auraient observé une réduction significative du risque de diarrhée, particulièrement avec certaines souches (Lactobacillus rhamnosus GG, Saccharomyces boulardii). Le nombre nécessaire à traiter ressortirait raisonnable, ce qui justifierait une indication ciblée.",
      },
      {
        heading: 'Confirmation 2021',
        body:
          "Une méta-analyse plus récente publiée dans Journal of Clinical Gastroenterology a confirmé ces résultats sur la population adulte [#s2]. Les auteurs auraient souligné l'importance du début précoce de la prise (idéalement dans les 2 jours suivant le début de l'antibiothérapie) pour maximiser l'effet protecteur.",
      },
      {
        heading: 'Lecture critique 2021',
        body:
          "Une autre revue parue dans BMJ Open a évalué de façon critique cette indication, soulignant l'hétérogénéité des souches, des doses et des durées [#s3]. La conclusion globale resterait favorable mais inviterait à choisir des souches dont l'efficacité a été spécifiquement démontrée, plutôt qu'un produit générique.",
      },
    ],
    takeaway:
      "Il semblerait pertinent, en cas d'antibiothérapie à risque digestif (clindamycine, ampicilline, céphalosporines de spectre large), d'associer un probiotique à souche documentée (S. boulardii ou L. rhamnosus GG), à commencer dès les premiers jours du traitement, à distance de la prise de l'antibiotique.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title: 'Probiotics for the prevention and treatment of antibiotic-associated diarrhea: a systematic review and meta-analysis',
        authors: 'Hempel S, et al.',
        journal: 'JAMA',
        year: 2012,
        pmid: '22570464',
        url: 'https://pubmed.ncbi.nlm.nih.gov/22570464/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title: 'Probiotics for the Prevention of Antibiotic-associated Diarrhea in Adults: A Meta-Analysis of Randomized Placebo-Controlled Trials',
        authors: 'Liao W, et al.',
        journal: 'Journal of Clinical Gastroenterology',
        year: 2021,
        pmid: '33234881',
        url: 'https://pubmed.ncbi.nlm.nih.gov/33234881/',
      },
      {
        id: 's3',
        type: 'meta-analysis',
        title: 'Probiotics for the prevention of antibiotic-associated diarrhoea: a systematic review and meta-analysis',
        authors: 'Goodman C, et al.',
        journal: 'BMJ Open',
        year: 2021,
        pmid: '34385227',
        url: 'https://pubmed.ncbi.nlm.nih.gov/34385227/',
      },
    ],
    publishedAt: '2026-04-23',
    readingTime: 4,
    tags: ['probiotiques', 'antibiotiques', 'diarrhée', 'Saccharomyces boulardii'],
  },

  /* ── 37. Régime cétogène — épilepsie ───────────────────────── */
  {
    slug: 'regime-cetogene-epilepsie-pediatrique',
    category: 'microbiote-nutrition',
    title: 'Régime cétogène : l\'indication la plus solidement validée reste pédiatrique',
    excerpt:
      "Le régime cétogène est un traitement reconnu de l'épilepsie pharmacorésistante de l'enfant. État des lieux des méta-analyses récentes.",
    intro:
      "Né dans les années 1920 comme traitement de l'épilepsie résistante, le régime cétogène a connu une popularité tardive pour la perte de poids et la performance. Son indication thérapeutique la mieux établie reste cependant pédiatrique, neurologique et très encadrée.",
    sections: [
      {
        heading: 'Vue d\'ensemble 2022',
        body:
          "Une revue d'ensemble des méta-analyses parue dans European Journal of Clinical Nutrition aurait synthétisé les preuves cumulées de l'efficacité du régime cétogène dans l'épilepsie [#s1]. Le bénéfice apparaîtrait robuste chez l'enfant atteint d'épilepsie pharmacorésistante, avec une réduction de plus de 50 % des crises chez une part substantielle des patients.",
      },
      {
        heading: 'Méta-analyse pédiatrique 2022',
        body:
          "Une méta-analyse spécifiquement pédiatrique publiée dans Expert Review of Neurotherapeutics a confirmé l'efficacité du régime cétogène en deuxième ou troisième ligne dans les épilepsies de l'enfant [#s2]. Les auteurs auraient également souligné le profil d'effets indésirables (acidose, hypoglycémies, troubles digestifs) nécessitant un encadrement diététique spécialisé.",
      },
      {
        heading: 'Mise au point dans Child\'s Nervous System',
        body:
          "Une revue parue dans Child's Nervous System aurait dressé un tableau actualisé du régime cétogène en pédiatrie [#s3]. La place de cette intervention nutritionnelle dans l'arsenal thérapeutique de neuro-pédiatrie y apparaît bien établie pour certaines épilepsies spécifiques (syndrome de Dravet, déficit en GLUT1, etc.).",
      },
    ],
    takeaway:
      "Il semblerait que le régime cétogène thérapeutique reste avant tout une intervention spécialisée dans les épilepsies pharmacorésistantes, encadrée par un service de neuro-pédiatrie. Son adaptation à d'autres usages (perte de poids, performance) ne saurait être assimilée à cette indication clinique.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'Ketogenic diet for epilepsy: an overview of systematic review and meta-analysis',
        authors: 'Ruan Y, et al.',
        journal: 'European Journal of Clinical Nutrition',
        year: 2022,
        pmid: '35027683',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35027683/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title: 'Ketogenic diet in pediatric seizures: a randomized controlled trial review and meta-analysis',
        authors: 'Pizzo F, et al.',
        journal: 'Expert Review of Neurotherapeutics',
        year: 2022,
        pmid: '35144527',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35144527/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'Ketogenic diet for the treatment of pediatric epilepsy: review and meta-analysis',
        authors: 'Sourbron J, et al.',
        journal: "Child's Nervous System",
        year: 2020,
        pmid: '32173786',
        url: 'https://pubmed.ncbi.nlm.nih.gov/32173786/',
      },
    ],
    publishedAt: '2026-04-22',
    readingTime: 4,
    tags: ['régime cétogène', 'épilepsie', 'pédiatrie', 'neurologie'],
  },

  /* ── 38. Resvératrol — sirtuines ───────────────────────────── */
  {
    slug: 'resveratrol-sirtuines-vieillissement',
    category: 'microbiote-nutrition',
    title: 'Resvératrol et sirtuines : la promesse anti-vieillissement à l\'épreuve des essais',
    excerpt:
      "Star des polyphénols depuis vingt ans, le resvératrol a vu son aura ternie par les données cliniques humaines. Mise au point.",
    intro:
      "Le resvératrol — polyphénol présent notamment dans le raisin et le vin rouge — a longtemps cristallisé les espoirs en gérontologie nutritionnelle via son interaction avec les sirtuines (SIRT1). Les données humaines ont nuancé ces promesses initiales.",
    sections: [
      {
        heading: 'Mécanisme : SIRT1 et vieillissement',
        body:
          "Une revue parue dans Frontiers in Genetics a synthétisé l'état des connaissances sur SIRT1, le resvératrol et le vieillissement [#s1]. Les auteurs auraient confirmé qu'in vitro et chez l'animal, le resvératrol active SIRT1 et reproduit certains effets de la restriction calorique. Le saut vers l'humain reste néanmoins beaucoup plus complexe : la biodisponibilité orale du resvératrol est très faible.",
      },
      {
        heading: 'Synthèse des indications cliniques',
        body:
          "Une revue parue dans Clinical Interventions in Aging avait tôt tenté de cartographier les indications cliniques du resvératrol dans les conditions associées au vieillissement [#s2]. Le tableau dressé reste celui d'un nutriment intéressant en complément, sans démonstration d'effet clinique robuste sur des marqueurs durs (mortalité, événements cardiovasculaires).",
      },
      {
        heading: 'Arthrose et SIRT1',
        body:
          "Une revue parue dans Bioscience Reports a examiné le rôle de SIRT1 et du resvératrol dans l'arthrose [#s3]. Les auteurs auraient relevé des résultats précliniques encourageants sur la dégénérescence cartilagineuse, sans donnée clinique humaine suffisamment robuste pour proposer une indication concrète à ce jour.",
      },
    ],
    takeaway:
      "Il semblerait que le resvératrol garde un intérêt mécanistique mais que sa biodisponibilité orale limitée fasse barrière à un effet clinique large. Les sources alimentaires (raisin, baies, cacao) restent privilégiées, dans le cadre d'un régime globalement riche en polyphénols.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'SIRT1, resveratrol and aging',
        authors: 'Rogina B',
        journal: 'Frontiers in Genetics',
        year: 2024,
        pmid: '38784035',
        url: 'https://pubmed.ncbi.nlm.nih.gov/38784035/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Resveratrol in prevention and treatment of common clinical conditions of aging',
        authors: 'Markus MA, Morris BJ',
        journal: 'Clinical Interventions in Aging',
        year: 2008,
        pmid: '18686754',
        url: 'https://pubmed.ncbi.nlm.nih.gov/18686754/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'The role of sirtuin 1 and its activator, resveratrol in osteoarthritis',
        authors: 'Deng Z, et al.',
        journal: 'Bioscience Reports',
        year: 2019,
        pmid: '30996115',
        url: 'https://pubmed.ncbi.nlm.nih.gov/30996115/',
      },
    ],
    publishedAt: '2026-04-21',
    readingTime: 4,
    tags: ['resvératrol', 'sirtuines', 'vieillissement', 'polyphénols'],
  },

  /* ── 39. CoQ10 — statines ──────────────────────────────────── */
  {
    slug: 'coq10-myopathie-statines',
    category: 'microbiote-nutrition',
    title: 'Coenzyme Q10 et myopathie sous statines : signal réel mais modeste',
    excerpt:
      "Les statines abaissent le taux de CoQ10. Sa supplémentation soulagerait-elle les douleurs musculaires fréquentes sous traitement ?",
    intro:
      "Les statines, traitements pivots de la prévention cardiovasculaire, sont associées à des plaintes musculaires chez 5 à 20 % des patients. Le rôle d'une supplémentation en coenzyme Q10 est étudié depuis des décennies. Synthèse des données récentes.",
    sections: [
      {
        heading: 'Méta-analyse 2018',
        body:
          "Une méta-analyse parue dans le Journal of the American Heart Association a évalué l'effet de la CoQ10 sur la myopathie induite par les statines à partir d'essais randomisés [#s1]. Les chercheurs auraient observé une réduction significative des douleurs musculaires et des CPK chez les patients supplémentés, sans effet sur la fatigue. L'ampleur reste cependant modeste.",
      },
      {
        heading: 'Revue systématique 2024',
        body:
          "Une revue systématique récente parue dans Cureus a confirmé ces résultats, en y intégrant les essais publiés depuis [#s2]. Le bénéfice serait surtout net chez les patients dont la plainte musculaire est subjective, sans atteinte enzymatique majeure. L'efficacité varie aussi selon la dose (typiquement 100–200 mg/j d'ubiquinol).",
      },
      {
        heading: 'Applications cliniques larges',
        body:
          "Une revue parue dans Frontiers in Bioscience a passé en revue les applications cliniques de la CoQ10 au-delà des statines (insuffisance cardiaque, migraine, fertilité, vieillissement cellulaire) [#s3]. Les signaux varient selon l'indication, mais le profil de tolérance globalement excellent en fait un nutriment souvent positionné comme « low risk » dans les protocoles.",
      },
    ],
    takeaway:
      "Il semblerait raisonnable de proposer une supplémentation en CoQ10 (100–200 mg/j d'ubiquinol) chez les patients sous statines présentant des plaintes musculaires, après échange avec le prescripteur. L'effet attendu est modeste mais peut suffire à améliorer la tolérance et l'adhérence.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title: 'Effects of Coenzyme Q10 on Statin-Induced Myopathy: An Updated Meta-Analysis of Randomized Controlled Trials',
        authors: 'Qu H, et al.',
        journal: 'Journal of the American Heart Association',
        year: 2018,
        pmid: '30371340',
        url: 'https://pubmed.ncbi.nlm.nih.gov/30371340/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Effectiveness of Coenzyme Q10 Supplementation in Statin-Induced Myopathy: A Systematic Review',
        authors: 'Ahmad K, et al.',
        journal: 'Cureus',
        year: 2024,
        pmid: '39350827',
        url: 'https://pubmed.ncbi.nlm.nih.gov/39350827/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'Clinical applications of coenzyme Q10',
        authors: 'Garrido-Maraver J, et al.',
        journal: 'Frontiers in Bioscience',
        year: 2014,
        pmid: '24389208',
        url: 'https://pubmed.ncbi.nlm.nih.gov/24389208/',
      },
    ],
    publishedAt: '2026-04-20',
    readingTime: 4,
    tags: ['CoQ10', 'coenzyme Q10', 'statines', 'myopathie'],
  },

  /* ── 40. NMN — NAD+ et anti-âge ────────────────────────────── */
  {
    slug: 'nmn-nad-anti-vieillissement',
    category: 'microbiote-nutrition',
    title: 'NMN et NAD+ : que disent les premiers essais cliniques humains ?',
    excerpt:
      "Le nicotinamide mononucléotide est l'une des nouvelles stars du marché du « longevity ». Les essais humains commencent à apporter des données.",
    intro:
      "Le NMN (nicotinamide mononucléotide), précurseur du NAD+, est l'un des compléments les plus médiatisés du moment dans le champ du vieillissement. Plusieurs essais cliniques chez l'humain permettent désormais de mesurer la distance entre les promesses et les preuves.",
    sections: [
      {
        heading: 'Revue de sécurité 2023',
        body:
          "Une revue parue dans Advances in Nutrition a synthétisé les essais cliniques humains disponibles sur le NMN, avec un focus sur la sécurité et les effets anti-vieillissement [#s1]. Les auteurs auraient conclu à une bonne tolérance globale aux doses étudiées (≤ 1 200 mg/jour), avec une élévation détectable du NAD+ sanguin. Les effets cliniques restent en revanche modestes et hétérogènes selon les paramètres mesurés.",
      },
      {
        heading: 'Promesses et limites',
        body:
          "Une autre revue publiée dans Journal of Advanced Research a discuté la place du NMN comme produit anti-vieillissement, en pointant à la fois ses promesses et les inquiétudes en matière de sécurité au long cours [#s2]. Les auteurs auraient souligné le manque d'études chez l'humain dépassant quelques mois.",
      },
      {
        heading: 'Essai randomisé multicentrique',
        body:
          "Un essai randomisé en double aveugle paru dans GeroScience a évalué l'efficacité et la sécurité de différentes doses de NMN chez des adultes d'âge moyen en bonne santé [#s3]. Les chercheurs auraient observé une élévation dose-dépendante du NAD+ sanguin et certains paramètres physiologiques améliorés, sans démontrer de bénéfice clinique majeur dans cette durée d'étude.",
      },
    ],
    takeaway:
      "Il semblerait prématuré de positionner le NMN comme un complément anti-vieillissement validé. Les essais humains confirment l'élévation du NAD+ et une bonne tolérance à court terme, sans démontrer encore un bénéfice clinique substantiel ni la sécurité au long cours. Le statut réglementaire varie selon les pays.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'The Safety and Antiaging Effects of Nicotinamide Mononucleotide in Human Clinical Trials: an Update',
        authors: 'Song Q, et al.',
        journal: 'Advances in Nutrition',
        year: 2023,
        pmid: '37619764',
        url: 'https://pubmed.ncbi.nlm.nih.gov/37619764/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Nicotinamide mononucleotide (NMN) as an anti-aging health product — Promises and safety concerns',
        authors: 'Nadeeshani H, et al.',
        journal: 'Journal of Advanced Research',
        year: 2022,
        pmid: '35499054',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35499054/',
      },
      {
        id: 's3',
        type: 'rct',
        title: 'The efficacy and safety of β-nicotinamide mononucleotide (NMN) supplementation in healthy middle-aged adults: a randomized, multicenter, double-blind, placebo-controlled, parallel-group, dose-dependent clinical trial',
        authors: 'Yi L, et al.',
        journal: 'GeroScience',
        year: 2023,
        pmid: '36482258',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36482258/',
      },
    ],
    publishedAt: '2026-04-19',
    readingTime: 4,
    tags: ['NMN', 'NAD+', 'longevity', 'vieillissement'],
  },
];
