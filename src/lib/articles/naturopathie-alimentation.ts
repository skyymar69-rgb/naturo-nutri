import type { Article } from '../types';

const a = (slug: string, title: string, excerpt: string, intro: string, sections: { heading: string; body: string }[], keyPoints?: string[], tags?: string[]): Article => ({
  slug, domain: 'naturopathie', category: 'alimentation', title, excerpt,
  readingTime: 5, intro, sections, keyPoints, tags,
});

export const NATURO_ALIMENTATION: Article[] = [
  a('alimentation-vivante',
    "L'alimentation vivante : principes et transition",
    "Crudités, germinations, lacto-fermentations, jus pressés à froid : l'alimentation qui préserve la vitalité des aliments.",
    "L'alimentation vivante désigne tout aliment non chauffé au-delà de 42°C. Loin d'un dogme cru intégral, c'est une approche progressive qui vise à augmenter la part d'aliments porteurs d'enzymes, de vitamines thermolabiles et de force vitale dans l'alimentation quotidienne.",
    [
      { heading: "Qu'est-ce qu'un aliment vivant", body: "Un aliment est dit vivant tant qu'il porte des enzymes actives et qu'il pourrait, théoriquement, germer s'il était mis dans les bonnes conditions. La cuisson à plus de 42°C dénature les enzymes et certaines vitamines (C, B1, B5). Le cru préserve cette charge enzymatique." },
      { heading: "Les bénéfices observés", body: "Économie d'énergie digestive. Densité nutritionnelle préservée. Régulation du transit (fibres intactes). Effet anti-inflammatoire général. Les bénéfices cliniques durables restent à mieux quantifier par des essais contrôlés à long terme." },
      { heading: "Transition progressive en 4 phases", body: "Phase 1 (25% cru) : 1 repas de crudités par jour. Phase 2 (50%) : petit-déjeuner cru, crudités à 2 repas. Phase 3 (75%) : cuit uniquement le soir. Phase 4 (100%) : crudivorisme — à ne pratiquer qu'avec encadrement et JAMAIS pour le tempérament nerveux pur." },
      { heading: "Techniques pour rendre le cru savoureux", body: "Marinades acides (citron, vinaigre). Déshydrateur à 42°C max. Lacto-fermentations. Trempage des oléagineux. Graines germées. Smoothies verts." },
    ],
    ["Aliment cru = enzymes intactes", "Transition progressive sur 6-12 mois", "Crudivorisme strict : pas pour profil nerveux"],
    ['cru', 'alimentation vivante', 'enzymes']
  ),

  a('graines-germees',
    "Les graines germées : super-aliments à 0 €",
    "Multiplier par 5 à 20 la concentration en vitamines en faisant germer ses graines à la maison. Variétés, méthode, sécurité.",
    "Faire germer des graines est l'acte de naturopathie le plus simple, le plus économique et l'un des plus puissants. Une graine en germination subit une explosion biochimique : ses vitamines augmentent (B, C, E), ses minéraux deviennent biodisponibles, ses anti-nutriments (phytates) sont neutralisés.",
    [
      { heading: "Variétés à privilégier", body: "Alfalfa, brocoli, radis, fenugrec, tournesol, lentilles, pois chiches, sarrasin, quinoa. Mélanges du commerce pour démarrer." },
      { heading: "Matériel et méthode de base", body: "Bocal en verre + tissu fin maintenu par élastique. Étape 1 : tremper les graines 8-12h. Étape 2 : égoutter, rincer, laisser germer à la lumière indirecte. Étape 3 : rincer matin et soir (clef de la réussite, évite moisissures). Étape 4 : consommer après 3-5 jours quand les pousses font 2-5 cm. Conservation au frigo : 5 jours max." },
      { heading: "Sécurité sanitaire", body: "Les graines germées sont un milieu humide tiède = développement bactérien possible. Précautions : graines BIO certifiées « à germer », rinçage 2x/jour, ne pas consommer si odeur suspecte. Personnes immunodéprimées, femmes enceintes : prudence." },
      { heading: "Comment les intégrer au quotidien", body: "Sur salades : alfalfa, radis, brocoli. Dans wraps et sandwichs. Dans smoothies verts. En toppings sur soupes." },
    ],
    ["Augmentation x5-20 des vitamines", "Anti-nutriments désactivés", "Trempage + rinçage 2x/jour"],
    ['graines germées', 'vitamines', 'enzymes']
  ),

  /* ── REFACTOR : lacto-fermentation ─────────────────────────── */
  {
    slug: 'lacto-fermentation',
    domain: 'naturopathie',
    category: 'alimentation',
    title: "Lacto-fermentation : ce que la recherche sur le microbiote suggère",
    excerpt: "Au-delà de la tradition millénaire, plusieurs revues récentes ont évalué l'impact des aliments fermentés sur la flore intestinale.",
    readingTime: 5,
    evidence_level: 'preliminary',
    evidence_note: "L'usage culinaire et hygiénique est consensuel. Des revues récentes documentent un effet probable sur la diversité du microbiote ; les essais cliniques sur des indications précises restent peu nombreux et de petite taille.",
    intro: "La lacto-fermentation transforme les sucres en acide lactique grâce aux bactéries lactiques (Lactobacillus). Cette technique millénaire fait aujourd'hui l'objet d'une attention scientifique renouvelée pour ses effets potentiels sur le microbiote intestinal.",
    sections: [
      { heading: "Aliments fermentés et microbiote", body: "Une revue publiée dans Nutrients aurait synthétisé les liens entre consommation d'aliments fermentés, microbiote intestinal et santé [#s1]. Les auteurs auraient observé qu'une consommation régulière (kéfir, choucroute, yaourt, kimchi…) serait associée à une diversité bactérienne intestinale accrue, marqueur généralement considéré favorable." },
      { heading: "Effets sur la santé gastro-intestinale", body: "Une revue parue également dans Nutrients aurait évalué les effets des aliments fermentés sur les troubles gastro-intestinaux fonctionnels [#s2]. Les bénéfices apparaîtraient modestes mais cohérents — particulièrement chez les sujets souffrant de troubles digestifs légers à modérés. Les essais cliniques contrôlés restent en nombre limité." },
      { heading: "Axe intestin-cerveau", body: "Une revue dans Neuroscience and Biobehavioral Reviews aurait exploré l'impact des aliments fermentés sur l'axe microbiote-intestin-cerveau et la santé mentale [#s3]. Le signal serait suggestif mais préliminaire — la transposition aux indications cliniques de psychiatrie nécessite des essais plus larges." },
      { heading: "Recette universelle", body: "Pour 1 kg de légume : 18 g de sel marin gris (non raffiné, sans additif). Râper ou trancher finement le légume. Mélanger avec le sel, masser fermement. Tasser dans un bocal en verre. Le jus doit recouvrir le légume. Laisser 5-7 jours à température ambiante (20-22 °C), puis transférer au frais." },
      { heading: "Sécurité et précautions", body: "Goûter régulièrement durant la fermentation. À jeter si : moisissure visible, goût/odeur putride, texture devenue molle/visqueuse. Personnes immunodéprimées : prudence avec les fermentations maison ; préférer les versions commerciales pasteurisées-réfrigérées." },
    ],
    sources: [
      { id: 's1', type: 'review', title: "Fermented Foods, Health and the Gut Microbiome", authors: 'Leeuwendaal NK, et al.', journal: 'Nutrients', year: 2022, pmid: '35406140', url: 'https://pubmed.ncbi.nlm.nih.gov/35406140/' },
      { id: 's2', type: 'review', title: "Fermented Foods: Definitions and Characteristics, Impact on the Gut Microbiota and Effects on Gastrointestinal Health and Disease", authors: 'Dimidi E, et al.', journal: 'Nutrients', year: 2019, pmid: '31387262', url: 'https://pubmed.ncbi.nlm.nih.gov/31387262/' },
      { id: 's3', type: 'review', title: "Fermented foods: Harnessing their potential to modulate the microbiota-gut-brain axis for mental health", authors: 'Balasubramanian R, et al.', journal: 'Neuroscience and Biobehavioral Reviews', year: 2024, pmid: '38278378', url: 'https://pubmed.ncbi.nlm.nih.gov/38278378/' },
    ],
    keyPoints: ["18 g de sel pour 1 kg de légume", "5-7 jours à 20°C puis frigo", "Jamais cuire après fermentation", "Diversité microbienne potentiellement accrue"],
    tags: ['lacto-fermentation', 'probiotiques', 'choucroute', 'microbiote'],
    updatedAt: '2026-05-28',
  },

  a('associations-alimentaires',
    "Les associations alimentaires : pour une digestion légère",
    "Pourquoi ne pas mélanger n'importe quoi. Approche traditionnelle d'Herbert Shelton, sans validation par essais cliniques.",
    "L'idée des associations alimentaires, développée par le Dr Herbert Shelton dans les années 1930, repose sur une observation empirique : différents aliments demandent des sucs digestifs différents. Cette approche est traditionnelle ; à ce jour, aucune étude contrôlée ne distingue clairement son efficacité d'une simple modération alimentaire.",
    [
      { heading: "Les associations problématiques", body: "Protéines + amidons au même repas (steak + frites) : milieux digestifs antagonistes (acide pour protéines, alcalin pour amidons). Fruits en fin de repas : ils digèrent vite (15-30 min) mais coincés derrière un repas lourd ils fermenteraient." },
      { heading: "Les associations harmonieuses", body: "Protéine + légumes verts. Amidon + légumes. Protéine + bonnes graisses + légumes. Fruits seuls entre les repas. Mono-repas (un seul type d'aliment) — paraît faciliter la digestion." },
      { heading: "Les exceptions et nuances", body: "L'avocat et les oléagineux se marient avec tout. Les légumes verts feuillus se marient avec tout. Les céréales et légumineuses ensemble = profil aminé plus complet." },
      { heading: "En pratique au quotidien", body: "Petit-déjeuner : soit fruits, soit céréales. Déjeuner : un plat composé d'1 protéine + légumes + un peu de bonne graisse. Dîner : amidon + légumes ou soupe + légumineuses." },
    ],
    ["Approche traditionnelle non validée", "Mono-repas = digestion plus facile", "Légumes verts compatibles avec tout"],
    ['shelton', 'associations', 'digestion']
  ),

  a('chrono-nutrition-naturopathique',
    "Chrono-nutrition naturopathique : tradition et mises au point récentes",
    "Quand manger compte autant que quoi manger. La tradition rencontre la science circadienne.",
    "L'idée que le moment des repas influence le métabolisme a longtemps été traditionnelle. Les recherches récentes en chronobiologie nutritionnelle ont commencé à objectiver certains de ces principes.",
    [
      { heading: "Les rythmes circadiens digestifs", body: "Le rythme circadien gouverne plusieurs paramètres digestifs : sécrétion enzymatique, motilité, sensibilité à l'insuline. L'horloge biologique synchronise ces processus. Manger en décalé chronique perturberait cette synchronisation." },
      { heading: "Petit-déjeuner : protéines et graisses", body: "À 7-9h, la sensibilité à l'insuline est maximale. Tradition naturopathique : favoriser œufs, oléagineux, avocat. La validité scientifique de ces choix précis reste partielle." },
      { heading: "Déjeuner : le repas le plus copieux", body: "12h-14h : optimum digestif selon la tradition. Composition : 1 protéine + légumes + portion modérée d'amidon." },
      { heading: "Dîner : léger et tôt", body: "Idéal : avant 19h-20h, au moins 3h avant le coucher. Composition légère. Le foie pourra faire son travail nocturne de détoxification." },
      { heading: "Vers le jeûne intermittent naturel", body: "Adopter ces règles induit naturellement une fenêtre de jeûne de 12-14h. Voir l'article dédié à la chrono-nutrition sourcée pour les essais contrôlés récents." },
    ],
    ["Petit-déj : protéines et graisses", "Déjeuner : repas principal", "Dîner léger, avant 20h"],
    ['chrono-nutrition', 'rythmes', 'sommeil']
  ),

  a('mastication',
    "La mastication : la base oubliée",
    "30 à 50 mastications par bouchée. Pourquoi c'est crucial et comment retrouver cet automatisme.",
    "Mastiquer correctement transforme la digestion. La salive contient des enzymes (amylase) qui pré-digèrent les amidons. La mastication mécanique broie les fibres, allège le travail de l'estomac. La mastication consciente active le système parasympathique digestif.",
    [
      { heading: "Pourquoi 30-50 mastications par bouchée", body: "Plusieurs études expérimentales suggèrent qu'une mastication prolongée améliorerait la sensation de satiété, et faciliterait la digestion mécanique du bol alimentaire. Les chiffres précis circulant (12% d'absorption supplémentaire, etc.) sont souvent issus de petites études isolées." },
      { heading: "Les bénéfices rapportés", body: "Satiété précoce (cerveau reçoit le signal hormonal). Bol alimentaire prédigéré. Détente nerveuse (mastication = parasympathique). Goûts plus intenses." },
      { heading: "Comment retrouver une bonne mastication", body: "Premier mois : compter consciemment les mastications. Poser ses couverts entre chaque bouchée. S'asseoir pour manger, jamais debout. Pas d'écran ni de lecture. Visez 25-30 min minimum pour un repas." },
      { heading: "Cas particuliers", body: "Profils nerveux : mastication d'autant plus essentielle. Personnes âgées : appareils dentaires bien adaptés indispensables. Enfants : modèle parental." },
    ],
    ["30-50 mastications par bouchée", "Satiété précoce", "Pas d'écran à table"],
    ['mastication', 'digestion', 'satiété']
  ),

  a('hydratation-naturopathique',
    "L'hydratation : qualité, quantité, timing",
    "Combien boire, quoi boire, quand boire. Les règles précises qui changent tout.",
    "« 1,5 L d'eau par jour » : cette règle simplificatrice cache beaucoup de nuances. Hydratation efficace = bonne eau + bonne quantité + bon timing.",
    [
      { heading: "Quelle eau boire", body: "Idéal : eau de source faiblement minéralisée (résidu sec < 200 mg/L) : Mont-Roucous, Montcalm, Volvic. Eau du robinet : à filtrer (charbon, céramique). Bouteilles plastiques à éviter (perturbateurs endocriniens probables)." },
      { heading: "Combien boire", body: "Règle indicative : 30 ml/kg de poids corporel/jour, toutes boissons confondues. Augmenter en cas de chaleur, sport, fièvre, allaitement. Indicateur fiable : couleur des urines (jaune clair = OK)." },
      { heading: "Quand boire", body: "Au réveil : 1-2 verres d'eau tiède. Entre les repas : la majorité de l'eau. Réduire 2h avant le coucher pour éviter les réveils nocturnes." },
      { heading: "Les boissons à éviter", body: "Sodas. Jus de fruits industriels. Alcool en excès. Café en excès. Boissons glacées." },
    ],
    ["30 ml/kg/jour toutes boissons", "Eau faiblement minéralisée", "Urines jaune clair = OK"],
    ['hydratation', 'eau', 'minéralisation']
  ),

  a('gluten-laitages',
    "Gluten et produits laitiers : faut-il les éviter ?",
    "Au-delà des modes, ce que la littérature scientifique et la naturopathie disent.",
    "Le gluten et les produits laitiers font l'objet de débats passionnés. La naturopathie propose une approche personnalisée selon le terrain. Les positions extrêmes (« il faut tous les éviter » vs « ils sont sans danger ») ne reflètent ni la science ni l'expérience clinique.",
    [
      { heading: "Le gluten : entre maladie cœliaque et hypersensibilité", body: "Maladie cœliaque (1% population) : éviction stricte à vie. Hypersensibilité au gluten non cœliaque : décrite dans la littérature, fréquence imprécise (estimée 0,5-6% selon les sources). Pour les autres : tolérance variable." },
      { heading: "Pourquoi le blé moderne pose-t-il question", body: "Hybridations modernes ont modifié la teneur en gluten. Levures industrielles (panification rapide) = pas de fermentation longue qui dégrade partiellement le gluten. Alternative : pain au levain naturel, blés anciens (épeautre, petit épeautre), céréales sans gluten (sarrasin, quinoa, millet)." },
      { heading: "Les produits laitiers : caséine, lactose, hormones", body: "Lactose : digéré par moins de 35% de la population adulte mondiale. Caséine bovine (β-caséine A1) : produirait des bêta-casomorphines aux effets discutés." },
      { heading: "Que choisir en pratique", body: "Tester une éviction stricte de 3-4 semaines, puis réintroduire pour observer. Si bénéfice net : maintenir l'éviction (au moins partielle). Si tolérance : préférer chèvre, brebis bio, lacto-fermentés (kéfir, yaourt artisanal)." },
    ],
    ["Tester par éviction de 3-4 semaines", "Maladie cœliaque : éviction à vie", "Chèvre/brebis souvent mieux tolérés"],
    ['gluten', 'lait', 'intolérance']
  ),

  a('sucres-additifs-perturbateurs',
    "Sucres, additifs et perturbateurs : les vraies menaces",
    "Sucre raffiné, édulcorants, conservateurs, perturbateurs endocriniens. Ce qu'il faut limiter ou éliminer.",
    "Sucres ajoutés, additifs industriels et perturbateurs endocriniens constituent des menaces alimentaires majeures. Apprendre à les reconnaître et à les limiter transforme la santé.",
    [
      { heading: "Sucre raffiné", body: "Consommation moyenne : 35-40 kg/an/personne en France. Effets documentés : pics glycémiques répétés, insulino-résistance progressive, inflammation. Le sucre est un pivot du syndrome métabolique." },
      { heading: "Édulcorants : un compromis discutable", body: "Aspartame, sucralose, acésulfame K : suspectés d'effets négatifs sur le microbiote dans plusieurs travaux récents, mais positions des agences réglementaires variables. Stévia : extrait naturel de meilleur profil. Alternatives : miel cru en quantité modérée, sirop d'érable, dattes." },
      { heading: "Additifs à limiter prioritairement", body: "E249-E250-E252 (nitrites des charcuteries : classés cancérogènes par le CIRC). E407 (carraghénanes : signal d'inflammation intestinale dans certains travaux). E102, E110 (colorants azoïques : suspectés d'hyperactivité enfants). Règle pragmatique : si la liste d'ingrédients est longue et opaque, reposer le produit." },
      { heading: "Perturbateurs endocriniens", body: "Bisphénols (canettes, plastiques chauffés, tickets de caisse). Phtalates. Pesticides organochlorés. Parabens cosmétiques. PFAS. Solutions : alimentation bio quand possible, eau filtrée, ne pas chauffer dans le plastique, cosmétiques certifiés." },
    ],
    ["Sucre raffiné : grand sujet métabolique moderne", "Édulcorants : pas une solution miracle", "Méfiance des E-numéros opaques"],
    ['sucre', 'additifs', 'perturbateurs endocriniens']
  ),

  /* ── NEW : MIND diet ───────────────────────────────────────── */
  {
    slug: 'mind-diet-cognition',
    domain: 'naturopathie',
    category: 'alimentation',
    title: "MIND diet : alimentation et déclin cognitif",
    excerpt: "Hybride entre méditerranéen et DASH, le MIND a fait l'objet d'études prospectives et d'un essai randomisé majeur dans le NEJM.",
    readingTime: 5,
    evidence_level: 'rct',
    evidence_note: "Les études observationnelles initiales étaient prometteuses. L'essai randomisé multicentrique 2023 dans le NEJM a tempéré ces attentes : effet positif, mais ampleur plus modeste que prévu.",
    intro: "Le régime MIND (Mediterranean-DASH Intervention for Neurodegenerative Delay) cible la prévention du déclin cognitif. Les premières études d'observation étaient enthousiasmantes ; un grand essai randomisé publié récemment dans le New England Journal of Medicine a nuancé le tableau.",
    sections: [
      { heading: "Les études d'observation initiales", body: "Deux publications dans Alzheimer's & Dementia ont rapporté qu'une adhésion élevée au MIND serait associée à un ralentissement du déclin cognitif [#s1] et à une réduction de l'incidence de la maladie d'Alzheimer [#s2] dans des cohortes prospectives nord-américaines. Ces résultats observationnels avaient suscité beaucoup d'espoirs cliniques." },
      { heading: "L'essai randomisé du NEJM 2023", body: "Un essai randomisé publié dans le New England Journal of Medicine a comparé le MIND à un régime témoin chez des personnes âgées à risque cognitif [#s3]. Les chercheurs auraient observé une amélioration cognitive dans les deux bras (vraisemblablement liée à l'amélioration globale de la qualité alimentaire), sans supériorité claire du MIND par rapport au témoin sur le critère principal." },
      { heading: "Les piliers du MIND", body: "Privilégier : légumes verts feuillus (≥ 6 portions/semaine), baies (≥ 2/semaine), noix, olive, légumineuses, poisson, volaille, céréales complètes. Limiter : viande rouge, beurre, fromage, pâtisseries, fritures." },
      { heading: "Lecture pragmatique", body: "Il semblerait que le MIND apporte un bénéfice net face à une alimentation industrielle, mais probablement comparable au méditerranéen complet. Pour la pratique : adopter durablement l'un ou l'autre paraît plus impactant que d'en choisir précisément un." },
    ],
    sources: [
      { id: 's1', type: 'cohort', title: "MIND diet slows cognitive decline with aging", authors: 'Morris MC, et al.', journal: "Alzheimer's & Dementia", year: 2015, pmid: '26086182', url: 'https://pubmed.ncbi.nlm.nih.gov/26086182/' },
      { id: 's2', type: 'cohort', title: "MIND diet associated with reduced incidence of Alzheimer's disease", authors: 'Morris MC, et al.', journal: "Alzheimer's & Dementia", year: 2015, pmid: '25681666', url: 'https://pubmed.ncbi.nlm.nih.gov/25681666/' },
      { id: 's3', type: 'rct', title: "Trial of the MIND Diet for Prevention of Cognitive Decline in Older Persons", authors: 'Barnes LL, et al.', journal: 'New England Journal of Medicine', year: 2023, pmid: '37466280', url: 'https://pubmed.ncbi.nlm.nih.gov/37466280/' },
    ],
    tags: ['MIND', 'cognition', 'régime alimentaire', 'Alzheimer'],
    updatedAt: '2026-05-28',
  },

  /* ── NEW : meal timing — chrono-nutrition sourcée ──────────── */
  {
    slug: 'meal-timing-circadien-metabolique',
    domain: 'naturopathie',
    category: 'alimentation',
    title: "Meal timing : impact métabolique des horaires de repas",
    excerpt: "Au-delà du « petit-déjeuner plus copieux » : que disent les travaux récents en chrono-nutrition ?",
    readingTime: 5,
    evidence_level: 'rct',
    evidence_note: "La littérature sur l'horloge circadienne et les apports caloriques est en plein essor. Le signal vers un bénéfice métabolique d'une fenêtre alimentaire concentrée et d'une fin de repas précoce est désormais cohérent.",
    intro: "La chrono-nutrition étudie comment les horaires des repas — indépendamment du contenu — modulent le métabolisme. Plusieurs travaux récents documentent un effet significatif de la fenêtre alimentaire et du moment des prises caloriques.",
    sections: [
      { heading: "Synthèse 2025 dans Nutrients", body: "Une revue parue dans Nutrients a fait le point sur la chrono-nutrition et la régulation pondérale [#s1]. Les auteurs auraient conclu qu'une fenêtre alimentaire concentrée le matin et le midi, et une fin de repas précoce, seraient associées à de meilleurs marqueurs métaboliques (sensibilité à l'insuline, lipides, masse grasse). La perte de poids éventuelle s'expliquerait par une réduction calorique secondaire plutôt que par un effet métabolique propre." },
      { heading: "Étude mécanistique dans Current Biology", body: "Un essai contrôlé publié dans Current Biology a démontré que les horaires de repas modifieraient directement les rythmes circadiens du métabolisme du glucose [#s2]. Un changement d'horaire des repas pourrait décaler partiellement l'horloge métabolique périphérique, indépendamment du sommeil." },
      { heading: "Implications pour l'obésité", body: "Une revue publiée dans Frontiers in Endocrinology a examiné le rôle du meal timing dans l'obésité et les maladies associées [#s3]. Les auteurs auraient observé que des prises caloriques tardives et fréquentes seraient associées à un risque accru, par un effet probablement plurifactoriel (hormonal, comportemental, microbien)." },
      { heading: "En pratique", body: "Concentrer ses apports caloriques sur une fenêtre de 10-12h, avec un dîner pris tôt et léger, semble la stratégie chrono-nutritionnelle la mieux étayée. La rigidité absolue n'est pas nécessaire : la régularité globale paraît compter plus que la perfection ponctuelle." },
    ],
    sources: [
      { id: 's1', type: 'review', title: "Chrononutrition and Energy Balance: How Meal Timing and Circadian Rhythms Shape Weight Regulation and Metabolic Health", authors: 'Reytor-González C, et al.', journal: 'Nutrients', year: 2025, pmid: '40647240', url: 'https://pubmed.ncbi.nlm.nih.gov/40647240/' },
      { id: 's2', type: 'rct', title: "Meal Timing Regulates the Human Circadian System", authors: 'Wehrens SMT, et al.', journal: 'Current Biology', year: 2017, pmid: '28578930', url: 'https://pubmed.ncbi.nlm.nih.gov/28578930/' },
      { id: 's3', type: 'review', title: "Meal timing and its role in obesity and associated diseases", authors: 'Peters B, et al.', journal: 'Frontiers in Endocrinology', year: 2024, pmid: '38586455', url: 'https://pubmed.ncbi.nlm.nih.gov/38586455/' },
    ],
    tags: ['meal timing', 'chrono-nutrition', 'circadien', 'métabolisme'],
    updatedAt: '2026-05-28',
  },

  /* ── NEW : cacao et flavanols ──────────────────────────────── */
  {
    slug: 'cacao-flavanols-cognition',
    domain: 'naturopathie',
    category: 'alimentation',
    title: "Cacao et flavanols : cognition et profil cardiovasculaire",
    excerpt: "L'essai COSMOS, publié dans Alzheimer's & Dementia et le AJCN, a apporté des données contrôlées à grande échelle.",
    readingTime: 5,
    evidence_level: 'rct',
    evidence_note: "Le signal sur les flavanols de cacao pour la cognition à long terme est encourageant dans l'essai COSMOS (Baker 2023) mais reste modeste. Les bénéfices cardiovasculaires sont plus solides dans les méta-analyses méditerranéennes.",
    intro: "Le cacao contient des flavanols (épicatéchine principalement) dont les effets vasculaires aigus sont connus depuis longtemps. L'essai COSMOS apporte récemment des données à plus long terme sur la cognition.",
    sections: [
      { heading: "COSMOS : essai cognition", body: "Un essai randomisé contrôlé publié dans Alzheimer's & Dementia a évalué l'effet d'un extrait de cacao standardisé en flavanols et d'un multivitamine sur la fonction cognitive chez des seniors [#s1]. Les chercheurs auraient observé un bénéfice cognitif modeste mais significatif dans le bras multivitamine, et un signal positif des flavanols sur certains sous-groupes (régime initial pauvre en flavanols)." },
      { heading: "Confirmation dans le American Journal of Clinical Nutrition", body: "Une analyse complémentaire publiée dans American Journal of Clinical Nutrition a confirmé un bénéfice cognitif modéré du multivitamine-minéral sur la cognition globale chez les seniors COSMOS [#s2]. La part propre des flavanols dans cet effet reste discutée." },
      { heading: "Mécanismes proposés", body: "Les flavanols de cacao amélioreraient la vasoréactivité et la perfusion cérébrale via la voie de l'oxyde nitrique (NO). Ils auraient également un effet antioxydant et un impact modulateur sur le microbiote intestinal — autant de mécanismes plausibles pour expliquer l'éventuel bénéfice cognitif." },
      { heading: "En pratique", body: "Pour atteindre des doses pharmacologiques de flavanols, les extraits standardisés (500-900 mg/jour) sont plus reproductibles qu'une consommation alimentaire variable. Le chocolat noir > 70 % et non alcalinisé reste une source alimentaire utile, mais la teneur en flavanols est très variable d'un produit à l'autre." },
    ],
    sources: [
      { id: 's1', type: 'rct', title: "Effects of cocoa extract and a multivitamin on cognitive function: A randomized clinical trial", authors: 'Baker LD, et al.', journal: "Alzheimer's & Dementia", year: 2023, pmid: '36102337', url: 'https://pubmed.ncbi.nlm.nih.gov/36102337/' },
      { id: 's2', type: 'rct', title: "Effect of multivitamin-mineral supplementation versus placebo on cognitive function", authors: 'Vyas CM, et al.', journal: 'American Journal of Clinical Nutrition', year: 2024, pmid: '38244989', url: 'https://pubmed.ncbi.nlm.nih.gov/38244989/' },
    ],
    tags: ['cacao', 'flavanols', 'cognition', 'COSMOS'],
    updatedAt: '2026-05-28',
  },
];
