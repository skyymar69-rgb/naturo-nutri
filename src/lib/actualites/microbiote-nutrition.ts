import type { Actualite } from '../types';

export const ACTUALITES_MICROBIOTE: Actualite[] = [

  /* ── 16. Probiotiques — axe intestin-cerveau ───────────────── */
  {
    slug: 'probiotiques-axe-intestin-cerveau',
    category: 'microbiote-nutrition',
    title: 'Axe intestin-cerveau : les probiotiques agissent-ils vraiment sur l\'humeur ?',
    excerpt:
      "L'axe microbiote-cerveau est l'un des chantiers les plus actifs en neurosciences. Synthèse des données chez l'humain.",
    intro:
      "L'idée que la flore intestinale puisse influencer l'humeur et la cognition n'est plus marginale : elle alimente une littérature dense, dont les conclusions méritent toutefois une lecture nuancée.",
    sections: [
      {
        heading: 'Une revue fondatrice',
        body:
          "Une revue parue dans Trends in Neurosciences a posé les bases conceptuelles de l'axe intestin-cerveau, en passant en revue les voies nerveuses (vague), immunitaires (cytokines) et métaboliques (acides gras à chaîne courte, tryptophane) [#s1]. Le microbiote y apparaît comme un modulateur potentiel des comportements anxieux et dépressifs, principalement démontré chez l'animal à ce stade.",
      },
      {
        heading: 'Données cliniques',
        body:
          "Une revue dans Annals of Gastroenterology a synthétisé les interactions entre microbiote intestinal et systèmes nerveux entérique et central [#s2]. Les essais cliniques avec probiotiques en santé mentale auraient produit des résultats inconsistants : certains montrant un effet modeste sur le stress perçu ou les symptômes dépressifs légers, d'autres non.",
      },
      {
        heading: 'Une revue récente',
        body:
          "Une revue publiée dans Pharmacological Research a examiné le rôle de l'axe microbiote-intestin-cerveau dans divers troubles neuropsychiatriques et neurologiques [#s3]. Elle souligne que les essais positifs concerneraient surtout des souches spécifiques (Lactobacillus helveticus, Bifidobacterium longum…) et des durées de plusieurs semaines.",
      },
    ],
    takeaway:
      "Il semblerait prématuré de présenter les probiotiques comme un traitement de la dépression ou de l'anxiété. Le signal sur des marqueurs de stress est réel mais modeste, et fortement dépendant de la souche, de la dose et de la durée. Les effets supposés varieraient probablement aussi selon l'état initial du microbiote.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'Gut–brain axis: how the microbiome influences anxiety and depression',
        authors: 'Foster JA, Neufeld KAM',
        journal: 'Trends in Neurosciences',
        year: 2013,
        pmid: '23384445',
        url: 'https://pubmed.ncbi.nlm.nih.gov/23384445/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'The gut-brain axis: interactions between enteric microbiota, central and enteric nervous systems',
        authors: 'Carabotti M, et al.',
        journal: 'Annals of Gastroenterology',
        year: 2015,
        pmid: '25830558',
        url: 'https://pubmed.ncbi.nlm.nih.gov/25830558/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'The role of microbiota-gut-brain axis in neuropsychiatric and neurological disorders',
        authors: 'Socała K, et al.',
        journal: 'Pharmacological Research',
        year: 2021,
        pmid: '34450312',
        url: 'https://pubmed.ncbi.nlm.nih.gov/34450312/',
      },
    ],
    publishedAt: '2026-05-13',
    readingTime: 4,
    tags: ['probiotiques', 'microbiote', 'axe intestin-cerveau', 'humeur'],
  },

  /* ── 17. Oméga-3 — cardiovasculaire ────────────────────────── */
  {
    slug: 'omega-3-epa-dha-cardiovasculaire',
    category: 'microbiote-nutrition',
    title: 'Oméga-3 EPA/DHA : les méta-analyses convergent-elles enfin ?',
    excerpt:
      "Pendant vingt ans, les conclusions cardiovasculaires des oméga-3 ont oscillé. Les dernières revues Cochrane et grandes méta-analyses dessinent une image plus claire.",
    intro:
      "La question du bénéfice cardiovasculaire des oméga-3 alimentaires et supplémentés a fait l'objet de dizaines d'essais. La synthèse de ces données est devenue un exercice particulièrement utile.",
    sections: [
      {
        heading: 'Méta-analyse 2021',
        body:
          "Une méta-analyse parue dans EClinicalMedicine a examiné 38 essais cliniques cumulant plus de 149 000 participants et conclu à une réduction modeste mais significative de la mortalité cardiovasculaire chez les sujets supplémentés en EPA/DHA [#s1]. Le bénéfice paraissait dose-dépendant et plus marqué chez les sujets à haut risque initial.",
      },
      {
        heading: 'La revue Cochrane',
        body:
          "La revue Cochrane sur la prévention primaire et secondaire des maladies cardiovasculaires par oméga-3 [#s2] aurait pour sa part conclu à un effet plus tempéré sur la mortalité globale. Elle confirmerait cependant une réduction des évènements coronariens majeurs. Une version antérieure de cette même revue avait préfiguré ces conclusions [#s3].",
      },
      {
        heading: 'Lire les chiffres avec mesure',
        body:
          "Les divergences entre méta-analyses semblent largement dues au choix des essais inclus, à la définition des évènements et à la population de référence. L'ampleur réelle du bénéfice clinique paraît modeste à l'échelle individuelle, plus visible à l'échelle d'une population.",
      },
    ],
    takeaway:
      "Il semblerait raisonnable de viser un apport régulier en EPA/DHA (poissons gras 2 à 3 fois par semaine, ou supplémentation 1–2 g/j chez les sujets à risque). Le bénéfice ne paraît pas spectaculaire mais reproductible. La qualité du complément (taux d'oxydation, EPA+DHA réel) reste essentielle.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title: 'Effect of omega-3 fatty acids on cardiovascular outcomes: A systematic review and meta-analysis',
        authors: 'Khan SU, et al.',
        journal: 'EClinicalMedicine',
        year: 2021,
        pmid: '34505026',
        url: 'https://pubmed.ncbi.nlm.nih.gov/34505026/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Omega-3 fatty acids for the primary and secondary prevention of cardiovascular disease',
        authors: 'Abdelhamid AS, et al.',
        journal: 'Cochrane Database of Systematic Reviews',
        year: 2020,
        pmid: '32114706',
        url: 'https://pubmed.ncbi.nlm.nih.gov/32114706/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'Omega-3 fatty acids for the primary and secondary prevention of cardiovascular disease',
        authors: 'Abdelhamid AS, et al.',
        journal: 'Cochrane Database of Systematic Reviews',
        year: 2018,
        pmid: '30019766',
        url: 'https://pubmed.ncbi.nlm.nih.gov/30019766/',
      },
    ],
    publishedAt: '2026-05-12',
    readingTime: 4,
    tags: ['oméga-3', 'EPA', 'DHA', 'cardiovasculaire'],
  },

  /* ── 18. Jeûne intermittent — autophagie ───────────────────── */
  {
    slug: 'jeune-intermittent-autophagie-metabolisme',
    category: 'microbiote-nutrition',
    title: 'Jeûne intermittent : la promesse de l\'autophagie tient-elle ses promesses ?',
    excerpt:
      "Le jeûne intermittent est devenu phénomène de société. Les mécanismes biologiques sont fascinants — les preuves chez l'humain le sont moins.",
    intro:
      "Le jeûne intermittent (16/8, 5:2, jours alternés) est étudié à plusieurs niveaux : effet sur le poids, le métabolisme glucidique, et l'autophagie cellulaire. La hiérarchie des preuves reste essentielle à garder en tête.",
    sections: [
      {
        heading: 'Une revue de référence',
        body:
          "Un article paru dans Ageing Research Reviews aurait fait le point sur l'impact du jeûne intermittent sur la santé et le processus du vieillissement [#s1]. Les mécanismes proposés — autophagie, cétogenèse modérée, amélioration de la sensibilité à l'insuline — y sont documentés principalement chez l'animal et en partie chez l'humain. L'extrapolation des bénéfices animaux à long terme reste prudente.",
      },
      {
        heading: 'Mécanismes promoteurs de santé',
        body:
          "Une revue publiée dans Journal of Diabetes Research aurait synthétisé les effets bénéfiques rapportés et les mécanismes biologiques sous-jacents du jeûne intermittent [#s2]. Les marqueurs métaboliques (HbA1c, lipides, marqueurs inflammatoires) semblent s'améliorer chez les sujets en surpoids ou avec syndrome métabolique, à condition de tenir le protocole sur plusieurs mois.",
      },
      {
        heading: 'Ce que les essais humains ne disent pas encore',
        body:
          "Les essais cliniques contrôlés à long terme sur la mortalité ou la prévention des maladies chroniques restent rares et hétérogènes. La comparaison avec une simple restriction calorique équivalente — qui pourrait expliquer une grande partie des bénéfices — reste un point de débat dans la littérature.",
      },
    ],
    takeaway:
      "Il semblerait que le jeûne intermittent puisse apporter des bénéfices métaboliques chez les sujets en surpoids ou présentant un syndrome métabolique. La promesse d'une activation massive de l'autophagie par un jeûne de 16 heures relève davantage de l'extrapolation que d'une preuve clinique solide. Contre-indications : grossesse, troubles du comportement alimentaire, dénutrition.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'Impact of intermittent fasting on health and disease processes',
        authors: 'Mattson MP, et al.',
        journal: 'Ageing Research Reviews',
        year: 2017,
        pmid: '27810402',
        url: 'https://pubmed.ncbi.nlm.nih.gov/27810402/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'The Health-Promoting Effects and the Mechanism of Intermittent Fasting',
        authors: 'Liu S, et al.',
        journal: 'Journal of Diabetes Research',
        year: 2023,
        pmid: '36911497',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36911497/',
      },
    ],
    publishedAt: '2026-05-11',
    readingTime: 4,
    tags: ['jeûne intermittent', 'autophagie', 'métabolisme', 'sensibilité insuline'],
  },

  /* ── 19. Polyphénols — méditerranéen ───────────────────────── */
  {
    slug: 'polyphenols-regime-mediterraneen-cardiovasculaire',
    category: 'microbiote-nutrition',
    title: 'Polyphénols et santé cardiovasculaire : ce qu\'on tire de l\'épidémiologie méditerranéenne',
    excerpt:
      "La richesse du régime méditerranéen en polyphénols est l'une des explications avancées de son bénéfice cardiovasculaire. Synthèse des preuves.",
    intro:
      "Les polyphénols — vaste famille incluant flavonoïdes, tanins, anthocyanes, resvératrol — sont étudiés depuis trente ans pour leur potentiel cardio-protecteur. La grande question est de distinguer effet matrice (aliment complet) et effet molécule isolée.",
    sections: [
      {
        heading: 'Le régime méditerranéen comme modèle',
        body:
          "Une revue d'ensemble parue dans Circulation Research a synthétisé les preuves accumulées sur le régime méditerranéen et la santé cardiovasculaire [#s1]. Les auteurs avancent que la combinaison polyphénols + acides gras mono-insaturés + fibres expliquerait l'essentiel du bénéfice observé dans les grandes cohortes prospectives. L'effet propre d'un polyphénol isolé serait beaucoup plus difficile à démontrer cliniquement.",
      },
      {
        heading: 'Performance et alimentation',
        body:
          "Dans un registre voisin, une méta-analyse parue dans Nutrients sur les ergogéniques alimentaires féminins suggère que certains aliments riches en polyphénols (cacao, baies, jus de betterave) pourraient avoir un effet aigu modeste sur la performance ou la récupération musculaire [#s2]. Là encore, le signal reste modéré.",
      },
      {
        heading: 'L\'importance de la matrice',
        body:
          "Une leçon récurrente de la littérature : les essais avec polyphénols extraits et purifiés donnent souvent des résultats moins concluants que les études observationnelles sur la consommation alimentaire. La biodisponibilité, les co-facteurs nutritionnels et le microbiote (qui métabolise les polyphénols en composés actifs) joueraient un rôle clé.",
      },
    ],
    takeaway:
      "Il semblerait sage de privilégier les sources alimentaires riches en polyphénols (huile d'olive vierge, baies, cacao non sucré, thé vert, légumes colorés) plutôt que des compléments isolés à fort dosage. Le « tout » paraît supérieur à la somme de ses parties dans ce domaine.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'The Mediterranean Diet and Cardiovascular Health',
        authors: 'Martínez-González MA, et al.',
        journal: 'Circulation Research',
        year: 2019,
        pmid: '30817261',
        url: 'https://pubmed.ncbi.nlm.nih.gov/30817261/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title: 'Ergogenic Aids to Improve Physical Performance in Female Athletes: A Systematic Review with Meta-Analysis',
        authors: 'López-Torres O, et al.',
        journal: 'Nutrients',
        year: 2022,
        pmid: '36615738',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36615738/',
      },
    ],
    publishedAt: '2026-05-10',
    readingTime: 4,
    tags: ['polyphénols', 'régime méditerranéen', 'cardiovasculaire', 'flavonoïdes'],
  },

  /* ── 20. Fibres prébiotiques — SCFA ────────────────────────── */
  {
    slug: 'fibres-prebiotiques-acides-gras-chaine-courte',
    category: 'microbiote-nutrition',
    title: 'Fibres prébiotiques et acides gras à chaîne courte : la nouvelle frontière',
    excerpt:
      "Butyrate, propionate, acétate : les acides gras à chaîne courte produits par la fermentation des fibres seraient les véritables messagers du microbiote.",
    intro:
      "On parle beaucoup de microbiote et de probiotiques. Les fibres alimentaires — substrat de fermentation du microbiote — semblent en réalité être le levier d'action le plus solide.",
    sections: [
      {
        heading: 'Le rôle central des SCFA',
        body:
          "Une revue de référence parue dans Nature Reviews Gastroenterology & Hepatology aurait détaillé le rôle des acides gras à chaîne courte (SCFA) — principalement acétate, propionate et butyrate — comme messagers du microbiote dans l'axe intestin-cerveau [#s1]. Ces molécules, produites par la fermentation bactérienne des fibres fermentescibles, agiraient à la fois localement (intégrité de la barrière intestinale) et systémiquement (modulation immunitaire, signalisation cérébrale).",
      },
      {
        heading: 'Métabolisme et santé',
        body:
          "Une revue publiée dans Beneficial Microbes a examiné l'impact des SCFA sur la santé métabolique humaine [#s2]. Les auteurs auraient observé que les niveaux de butyrate et de propionate sériques pourraient corréler avec la sensibilité à l'insuline, l'inflammation systémique et certains marqueurs de risque cardiovasculaire. Le lien de causalité, lui, reste plus complexe à démontrer.",
      },
      {
        heading: 'En pratique',
        body:
          "Les sources alimentaires majeures de fibres fermentescibles seraient les légumineuses, les céréales complètes, certains légumes (poireau, asperge, artichaut, ail, oignon, banane peu mûre), ainsi que des compléments type inuline, FOS, GOS ou amidon résistant. Une augmentation progressive sur plusieurs semaines paraît préférable à un changement brutal, souvent mal toléré.",
      },
    ],
    takeaway:
      "Il semblerait que les fibres prébiotiques aient un impact biologique plus solidement démontré que beaucoup de probiotiques ciblés. L'effet n'est cependant ni immédiat ni spectaculaire, et il dépendrait largement de la composition initiale du microbiote.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'The role of short-chain fatty acids in microbiota-gut-brain communication',
        authors: 'Dalile B, et al.',
        journal: 'Nature Reviews Gastroenterology & Hepatology',
        year: 2019,
        pmid: '31123355',
        url: 'https://pubmed.ncbi.nlm.nih.gov/31123355/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Short chain fatty acids in human gut and metabolic health',
        authors: 'Blaak EE, et al.',
        journal: 'Beneficial Microbes',
        year: 2020,
        pmid: '32865024',
        url: 'https://pubmed.ncbi.nlm.nih.gov/32865024/',
      },
    ],
    publishedAt: '2026-05-09',
    readingTime: 4,
    tags: ['fibres', 'prébiotiques', 'SCFA', 'butyrate', 'microbiote'],
  },
];
