import type { Actualite } from '../types';

export const ACTUALITES_MINERAUX: Actualite[] = [

  /* ── 6. Magnésium — formes et biodisponibilité ─────────────── */
  {
    slug: 'magnesium-formes-biodisponibilite',
    category: 'mineraux',
    title: 'Magnésium : citrate, bisglycinate, oxyde — que dit la littérature ?',
    excerpt:
      "Toutes les formes de magnésium ne se valent pas. Plusieurs études ont comparé leur biodisponibilité réelle.",
    intro:
      "Le rayon des compléments en magnésium est devenu pléthorique. L'oxyde, le citrate, le bisglycinate, le malate, le marin… La question pratique reste simple : qu'est-ce que l'organisme absorbe vraiment ?",
    sections: [
      {
        heading: 'Biodisponibilité comparée des sels',
        body:
          "Une étude par traceurs isotopiques publiée dans Magnesium Research aurait comparé dix sels de magnésium organiques et inorganiques chez des rats appauvris en magnésium [#s1]. Les sels organiques (citrate, lactate, gluconate) auraient montré une biodisponibilité supérieure à l'oxyde et au sulfate. Ce résultat semble cohérent avec ce que l'on observe en pratique clinique : l'oxyde de magnésium, le moins cher, serait aussi le moins bien absorbé.",
      },
      {
        heading: 'Citrate vs autres formes chez l\'humain',
        body:
          "Un essai randomisé en double aveugle paru également dans Magnesium Research aurait comparé citrate, oxyde et chlorure chez des sujets sains [#s2]. Le citrate aurait conduit à une augmentation plus marquée du magnésium intracellulaire après quelques semaines de supplémentation. La marge resterait modeste mais reproductible.",
      },
      {
        heading: 'Au-delà de l\'absorption brute',
        body:
          "Une étude in vitro dans Nutrients aurait examiné l'effet de différentes formulations magnésiennes sur les cellules intestinales et leur capacité à influencer la relaxation musculaire utérine [#s3]. Ce type de travail suggère que les sels ne se résument peut-être pas à leur seule absorption — la disponibilité tissulaire pourrait varier selon les couplages chimiques.",
      },
    ],
    takeaway:
      "Il semblerait préférable, à dose équivalente, de privilégier les formes organiques (citrate, bisglycinate, malate) par rapport à l'oxyde. La tolérance digestive et le coût restent des critères pratiques importants. Aucune forme ne paraît cliniquement « miraculeuse » par rapport aux autres bien absorbées.",
    sources: [
      {
        id: 's1',
        type: 'pubmed',
        title: 'Study of magnesium bioavailability from ten organic and inorganic Mg salts in Mg-depleted rats using a stable isotope approach',
        authors: 'Coudray C, et al.',
        journal: 'Magnesium Research',
        year: 2005,
        pmid: '16548135',
        url: 'https://pubmed.ncbi.nlm.nih.gov/16548135/',
      },
      {
        id: 's2',
        type: 'rct',
        title: 'Mg citrate found more bioavailable than other Mg preparations in a randomised, double-blind study',
        authors: 'Walker AF, et al.',
        journal: 'Magnesium Research',
        year: 2003,
        pmid: '14596323',
        url: 'https://pubmed.ncbi.nlm.nih.gov/14596323/',
      },
      {
        id: 's3',
        type: 'pubmed',
        title: 'Study of Magnesium Formulations on Intestinal Cells to Influence Myometrium Cell Relaxation',
        authors: 'Uberti F, et al.',
        journal: 'Nutrients',
        year: 2020,
        pmid: '32098378',
        url: 'https://pubmed.ncbi.nlm.nih.gov/32098378/',
      },
    ],
    publishedAt: '2026-05-23',
    readingTime: 4,
    tags: ['magnésium', 'biodisponibilité', 'citrate', 'bisglycinate'],
  },

  /* ── 7. Zinc — immunité ────────────────────────────────────── */
  {
    slug: 'zinc-immunite-infections-respiratoires',
    category: 'mineraux',
    title: 'Zinc et immunité : où en sont les méta-analyses récentes ?',
    excerpt:
      "Le rôle du zinc dans la défense contre les infections virales respiratoires fait l'objet d'études depuis plus de vingt ans. Le bilan récent.",
    intro:
      "Le zinc occupe une place particulière dans la nutrithérapie : impliqué dans des centaines d'enzymes, indispensable à la maturation lymphocytaire, il est régulièrement étudié dans la prévention des infections aiguës.",
    sections: [
      {
        heading: 'Effet sur les infections respiratoires',
        body:
          "Une méta-analyse publiée dans BMJ Global Health a examiné l'effet de différentes supplémentations en micronutriments — dont le zinc — sur les infections respiratoires (grippe et autres) chez l'adulte [#s1]. Le zinc apparaîtrait associé à une réduction modeste mais détectable du risque d'épisodes infectieux, avec un effet plus marqué chez les sujets carencés au départ.",
      },
      {
        heading: 'Confirmation par une seconde méta-analyse',
        body:
          "Une autre revue systématique parue dans Allergy a abouti à des conclusions globalement convergentes pour la supplémentation en zinc en prévention des infections respiratoires virales chez les sujets en bonne santé [#s2]. Les auteurs auraient toutefois souligné l'hétérogénéité des protocoles (doses, formes, durées) qui limite la généralisation.",
      },
      {
        heading: 'Soins intensifs : un cas particulier',
        body:
          "Une revue plus ancienne dans JPEN aurait posé la question du zinc comme « pharmaco-nutriment » chez les patients critiques [#s3]. Le contexte est très différent de la prévention courante : il s'agissait de patients dénutris en réanimation, où le déficit aigu pourrait peser lourd sur la réponse immunitaire.",
      },
    ],
    takeaway:
      "Le signal de bénéfice du zinc sur les infections respiratoires paraît réel mais modeste. Il semblerait pertinent en cas de risque de carence (sujets âgés, régimes restrictifs, alcoolisation chronique) plutôt qu'en supplémentation systématique. Au-delà de 40 mg/jour au long cours, le risque d'interférence avec le métabolisme du cuivre mériterait surveillance.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title: 'Effect of micronutrient supplements on influenza and other respiratory tract infections among adults: a systematic review and meta-analysis',
        authors: 'Abioye AI, et al.',
        journal: 'BMJ Global Health',
        year: 2021,
        pmid: '33472840',
        url: 'https://pubmed.ncbi.nlm.nih.gov/33472840/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title: 'Nutrient supplementation for prevention of viral respiratory tract infections in healthy subjects: A systematic review and meta-analysis',
        authors: 'Vlieg-Boerstra B, et al.',
        journal: 'Allergy',
        year: 2022,
        pmid: '34626488',
        url: 'https://pubmed.ncbi.nlm.nih.gov/34626488/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'Zinc supplementation in critically ill patients: a key pharmaconutrient?',
        authors: 'Heyland DK, et al.',
        journal: 'JPEN',
        year: 2008,
        pmid: '18669902',
        url: 'https://pubmed.ncbi.nlm.nih.gov/18669902/',
      },
    ],
    publishedAt: '2026-05-22',
    readingTime: 4,
    tags: ['zinc', 'immunité', 'infections respiratoires'],
  },

  /* ── 8. Fer — bisglycinate ─────────────────────────────────── */
  {
    slug: 'fer-bisglycinate-vs-sulfate',
    category: 'mineraux',
    title: 'Fer : le bisglycinate serait-il vraiment mieux toléré que le sulfate ?',
    excerpt:
      "Constipation, troubles digestifs… Le sulfate de fer est souvent mal toléré. Les sels chélatés type bisglycinate offrent-ils un avantage documenté ?",
    intro:
      "Le fer reste l'un des suppléments les plus prescrits, et l'un de ceux qui posent le plus de problèmes de tolérance. Les formes « chélatées » sont souvent présentées comme une alternative douce — à juste titre ?",
    sections: [
      {
        heading: 'Comparaisons directes',
        body:
          "Une évaluation comparative parue dans Daru aurait passé en revue les différents sels de fer oraux utilisés dans le traitement de l'anémie ferriprive [#s1]. Le bisglycinate ferreux ressortirait avec un profil de tolérance globalement meilleur que le sulfate, à dose absorbée équivalente. La supériorité d'efficacité, elle, paraît moins marquée que la différence de tolérance.",
      },
      {
        heading: 'Cas particulier de la malabsorption',
        body:
          "Une étude publiée dans Minerva Pediatrica aurait testé un test d'absorption orale au bisglycinate ferreux chez des enfants atteints de maladie cœliaque [#s2]. Le bisglycinate aurait été correctement absorbé même dans ce contexte de muqueuse altérée, ce qui suggérerait un intérêt pratique chez les patients ayant échoué avec les sels classiques.",
      },
      {
        heading: 'Limites des comparaisons',
        body:
          "Les essais directs en tête-à-tête à dose égale restent peu nombreux, et beaucoup d'études comparent des formulations de doses différentes — ce qui complique l'interprétation. Le coût plus élevé du bisglycinate mérite d'être mis en regard de la tolérance améliorée.",
      },
    ],
    takeaway:
      "Il semblerait raisonnable, en cas d'intolérance digestive au sulfate, de tester un fer bisglycinate avant d'abandonner la supplémentation orale. La perfusion intraveineuse reste réservée aux situations d'échec ou de malabsorption avérée.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'Comparative evaluation of different oral iron salts in the management of iron deficiency anemia',
        authors: 'Suva MA, et al.',
        journal: 'Daru',
        year: 2024,
        pmid: '38740692',
        url: 'https://pubmed.ncbi.nlm.nih.gov/38740692/',
      },
      {
        id: 's2',
        type: 'pubmed',
        title: 'Oral iron absorption test with ferrous bisglycinate chelate in children with celiac disease',
        authors: 'Mazza GA, et al.',
        journal: 'Minerva Pediatrica',
        year: 2019,
        pmid: '27830928',
        url: 'https://pubmed.ncbi.nlm.nih.gov/27830928/',
      },
    ],
    publishedAt: '2026-05-21',
    readingTime: 4,
    tags: ['fer', 'bisglycinate', 'anémie', 'tolérance'],
  },

  /* ── 9. Iode — thyroïde ────────────────────────────────────── */
  {
    slug: 'iode-thyroide-carence',
    category: 'mineraux',
    title: 'Iode et thyroïde : la carence reste-t-elle un enjeu en Europe ?',
    excerpt:
      "Longtemps considérée comme un problème des pays en développement, la carence iodée semble réémerger dans plusieurs pays européens.",
    intro:
      "La sel iodé a effacé la majorité des grands déficits du XXᵉ siècle. Mais plusieurs synthèses récentes pointent un retour des carences subcliniques, notamment chez les femmes en âge de procréer.",
    sections: [
      {
        heading: 'Une revue de référence',
        body:
          "Une revue parue dans Endocrine Reviews aurait dressé un état des lieux mondial des carences en iode et de leurs conséquences sur la thyroïde, le développement cérébral et la grossesse [#s1]. Le seuil critique d'iodurie médiane (< 100 μg/L) y est rappelé comme marqueur de carence à l'échelle d'une population.",
      },
      {
        heading: 'Épidémiologie thyroïdienne',
        body:
          "Une revue publiée dans Nature Reviews Endocrinology a couvert la prévalence mondiale des hyperthyroïdies et hypothyroïdies, leurs déterminants nutritionnels et environnementaux [#s2]. L'iode y apparaît comme l'un des facteurs majeurs, à la fois en cas de carence (goitre, hypothyroïdie) et d'excès (auto-immunité induite).",
      },
      {
        heading: 'Une carence qui réémerge',
        body:
          "Une revue récente dans Nutrients a documenté la réémergence des carences en iode dans plusieurs pays développés, en lien notamment avec la réduction de la consommation de sel iodé et de produits laitiers [#s3]. La grossesse représenterait une fenêtre particulièrement sensible.",
      },
    ],
    takeaway:
      "Il semblerait que la supplémentation systématique en iode ne soit pas indiquée chez l'adulte sain ne présentant pas de signe de carence. En revanche, un apport surveillé (par exemple 150 μg/j) pourrait se discuter chez les femmes enceintes, allaitantes ou suivant un régime sans sel iodé ni produits de la mer.",
    sources: [
      {
        id: 's1',
        type: 'review',
        title: 'Iodine deficiency',
        authors: 'Zimmermann MB',
        journal: 'Endocrine Reviews',
        year: 2009,
        pmid: '19460960',
        url: 'https://pubmed.ncbi.nlm.nih.gov/19460960/',
      },
      {
        id: 's2',
        type: 'review',
        title: 'Global epidemiology of hyperthyroidism and hypothyroidism',
        authors: 'Taylor PN, et al.',
        journal: 'Nature Reviews Endocrinology',
        year: 2018,
        pmid: '29569622',
        url: 'https://pubmed.ncbi.nlm.nih.gov/29569622/',
      },
      {
        id: 's3',
        type: 'review',
        title: 'Iodine and Iodine Deficiency: A Comprehensive Review of a Re-Emerging Issue',
        authors: 'Hatch-McChesney A, Lieberman HR',
        journal: 'Nutrients',
        year: 2022,
        pmid: '36079737',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36079737/',
      },
    ],
    publishedAt: '2026-05-20',
    readingTime: 4,
    tags: ['iode', 'thyroïde', 'grossesse', 'carence'],
  },

  /* ── 10. Sélénium — thyroïde auto-immune ──────────────────── */
  {
    slug: 'selenium-hashimoto-thyroidite',
    category: 'mineraux',
    title: 'Sélénium et thyroïdite de Hashimoto : le point sur les méta-analyses',
    excerpt:
      "Plusieurs essais ont montré une réduction des auto-anticorps thyroïdiens sous sélénium. Une méta-analyse récente actualise les chiffres.",
    intro:
      "Le sélénium est l'oligo-élément le plus étudié dans la thyroïdite de Hashimoto, en particulier pour son rôle de cofacteur des sélénoprotéines impliquées dans le métabolisme thyroïdien.",
    sections: [
      {
        heading: 'Méta-analyse 2024 dans Thyroid',
        body:
          "Une méta-analyse récente publiée dans Thyroid a rassemblé les essais randomisés sur la supplémentation en sélénium chez les patients atteints de thyroïdite de Hashimoto [#s1]. Les chercheurs auraient observé une réduction significative des anticorps anti-TPO chez les sujets supplémentés (typiquement 200 μg/j sous forme de sélénométhionine ou sélénite). L'impact clinique direct sur la fonction thyroïdienne resterait toutefois plus difficile à isoler.",
      },
      {
        heading: 'Concordance avec une méta-analyse antérieure',
        body:
          "Une méta-analyse plus ancienne, également parue dans Thyroid, avait abouti à des conclusions très similaires [#s2]. Cette concordance entre travaux indépendants conforterait l'idée d'un effet biologique réel sur le marqueur immunitaire, sans pour autant garantir un bénéfice clinique majeur sur les symptômes.",
      },
      {
        heading: 'Précautions de bon sens',
        body:
          "Le sélénium est, parmi les oligo-éléments, l'un de ceux dont la fenêtre thérapeutique est la plus étroite. Au-delà de 400 μg/jour au long cours, le risque de sélénose (chute de cheveux, ongles cassants, troubles neurologiques) deviendrait préoccupant.",
      },
    ],
    takeaway:
      "Une supplémentation à dose modérée (≈ 100–200 μg/j) semblerait raisonnable en accompagnement médical d'une thyroïdite de Hashimoto, surtout dans les régions à faible apport alimentaire (sol pauvre en sélénium). Le suivi régulier des marqueurs thyroïdiens et la durée limitée des cures restent indispensables.",
    sources: [
      {
        id: 's1',
        type: 'meta-analysis',
        title: 'Selenium Supplementation in Patients with Hashimoto Thyroiditis: A Systematic Review and Meta-Analysis of Randomized Clinical Trials',
        authors: 'Huwiler VV, et al.',
        journal: 'Thyroid',
        year: 2024,
        pmid: '38243784',
        url: 'https://pubmed.ncbi.nlm.nih.gov/38243784/',
      },
      {
        id: 's2',
        type: 'meta-analysis',
        title: 'Selenium Supplementation Significantly Reduces Thyroid Autoantibody Levels in Patients with Chronic Autoimmune Thyroiditis: A Systematic Review and Meta-Analysis',
        authors: 'Wichman J, et al.',
        journal: 'Thyroid',
        year: 2016,
        pmid: '27702392',
        url: 'https://pubmed.ncbi.nlm.nih.gov/27702392/',
      },
    ],
    publishedAt: '2026-05-19',
    readingTime: 4,
    tags: ['sélénium', 'Hashimoto', 'thyroïde', 'auto-immunité'],
  },
];
