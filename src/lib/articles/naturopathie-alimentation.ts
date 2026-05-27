import type { Article } from '../types';

const a = (slug: string, title: string, excerpt: string, intro: string, sections: { heading: string; body: string }[], keyPoints?: string[], tags?: string[]): Article => ({
  slug, domain: 'naturopathie', category: 'alimentation', title, excerpt,
  readingTime: 5, intro, sections, keyPoints, tags,
});

export const NATURO_ALIMENTATION: Article[] = [
  a('alimentation-vivante',
    "L'alimentation vivante : principes et transition",
    "Crudités, germinations, lacto-fermentations, jus pressés à froid : l'alimentation qui préserve la vitalité des aliments.",
    "L'alimentation vivante désigne tout aliment non chauffé au-delà de 42°C, température à partir de laquelle ses enzymes se dégradent. Loin d'un dogme cru intégral, c'est une approche progressive qui vise à augmenter la part d'aliments porteurs d'enzymes, de vitamines thermolabiles et de force vitale dans l'alimentation quotidienne. La transition se fait par paliers de 25, 50, 75% selon le terrain.",
    [
      { heading: "Qu'est-ce qu'un aliment vivant", body: "Un aliment est dit vivant tant qu'il porte des enzymes actives et qu'il pourrait, théoriquement, germer ou se développer s'il était mis dans les bonnes conditions. Une graine crue est vivante. Une amande trempée est vivante. Une carotte fraîchement arrachée est vivante. La cuisson à plus de 42°C dénature les enzymes et certaines vitamines (C, B1, B5). Le cru préserve cette charge enzymatique." },
      { heading: "Les bénéfices observés", body: "Économie d'énergie digestive (les enzymes de l'aliment co-digèrent). Densité nutritionnelle maximale (vitamines thermolabiles préservées). Alcalinisation du terrain. Énergie vitale supérieure ressentie. Régulation du transit (fibres intactes). Effet sur l'humeur (chimie cérébrale bien nourrie). Effet anti-inflammatoire global." },
      { heading: "Transition progressive en 4 phases", body: "Phase 1 (25% cru) : 1 repas de crudités par jour, crudités en entrée de chaque repas. Phase 2 (50%) : petit-déjeuner cru, crudités à 2 repas, graines germées. Phase 3 (75%) : cuit uniquement le soir, lacto-fermentations quotidiennes. Phase 4 (100%) : crudivorisme — à ne pratiquer qu'avec encadrement et JAMAIS pour le tempérament nerveux pur." },
      { heading: "Techniques pour rendre le cru savoureux", body: "Marinades acides (citron, vinaigre) attendrissent les légumes. Déshydrateur à 42°C max pour crackers de graines, fruits secs maison. Lacto-fermentations apportent saveurs umami. Trempage des oléagineux les rend digestes. Graines germées multiplient les saveurs. Smoothies verts pour les légumes amers." },
    ],
    ["Aliment cru = enzymes intactes", "Transition progressive sur 6-12 mois", "Crudivorisme strict : pas pour profil nerveux", "Bénéfices : énergie, digestion, vitalité"],
    ['cru', 'alimentation vivante', 'enzymes']
  ),
  a('graines-germees',
    "Les graines germées : super-aliments à 0 €",
    "Multiplier par 5 à 20 la concentration en vitamines en faisant germer ses graines à la maison. Variétés, méthode, sécurité.",
    "Faire germer des graines est l'acte de naturopathie le plus simple, le plus économique et l'un des plus puissants. Une graine en germination subit une explosion biochimique : ses vitamines augmentent (B, C, E), ses minéraux deviennent biodisponibles, ses anti-nutriments (phytates) sont neutralisés. C'est littéralement un super-aliment à zéro euro.",
    [
      { heading: "Variétés à privilégier", body: "Alfalfa (luzerne) : la classique, douce. Brocoli : sulforaphane anti-cancer. Radis : piquante, riche en soufre. Fenugrec : amère, équilibrante. Tournesol : croquante, riche en bonnes graisses. Lentilles : douces, protéines. Pois chiches : nourrissantes. Sarrasin : sans gluten. Quinoa : protéines complètes. Mélanges du commerce pour démarrer." },
      { heading: "Matériel et méthode de base", body: "Bocal en verre + tissu fin (étamine) maintenu par élastique, OU germoir à plateaux. Étape 1 : tremper les graines 8-12h dans eau filtrée. Étape 2 : égoutter, rincer, laisser germer à la lumière indirecte, à température ambiante. Étape 3 : rincer matin et soir (clef de la réussite, évite moisissures). Étape 4 : consommer après 3-5 jours quand les pousses font 2-5 cm. Conservation au frigo : 5 jours max." },
      { heading: "Sécurité sanitaire", body: "Les graines germées sont un milieu humide tiède = développement bactérien possible (E. coli, salmonelle). Précautions : graines BIO certifiées spécifiquement 'à germer', rinçage 2x/jour impératif, ne pas consommer si odeur suspecte, conservation au frigo < 5 jours. Personnes immunodéprimées, femmes enceintes, jeunes enfants : prudence, préférer les graines germées brièvement cuites vapeur." },
      { heading: "Comment les intégrer au quotidien", body: "Sur salades : alfalfa, radis, brocoli. Dans wraps et sandwichs. Dans smoothies verts (sarrasin, quinoa germés). En toppings sur soupes (chaudes mais cuillère froide, ne pas cuire). En accompagnement de plats principaux. Mixées dans pestos. Saupoudrées sur fromages végétaux." },
    ],
    ["Augmentation x5-20 des vitamines", "Anti-nutriments désactivés", "Trempage + rinçage 2x/jour", "Conservation < 5 jours au frigo"],
    ['graines germées', 'vitamines', 'enzymes']
  ),
  a('lacto-fermentation',
    "La lacto-fermentation : probiotiques maison",
    "Choucroute, kimchi, légumes lacto-fermentés : conservation millénaire + bombe de probiotiques. Méthode universelle.",
    "La lacto-fermentation est l'une des techniques de conservation les plus anciennes et les plus saines. Les bactéries lactiques naturellement présentes sur les légumes (Lactobacillus) transforment les sucres en acide lactique, créant un milieu acide qui empêche le développement des bactéries pathogènes. Résultat : aliment conservé des mois, ENRICHI en vitamines (B, C, K2) et en probiotiques vivants.",
    [
      { heading: "Recette universelle", body: "Pour 1 kg de légume : 18 g de sel marin gris (non raffiné, sans additif). Râper ou trancher finement le légume. Mélanger avec le sel, masser fermement pendant 5-10 min jusqu'à ce que le légume rende beaucoup d'eau. Tasser fortement dans un bocal en verre. Le jus doit recouvrir entièrement le légume. Laisser 2-3 cm de vide en haut. Couvercle vissé (pas hermétique pour le 1er stade). Laisser 5-7 jours à température ambiante (20-22°C), puis transférer au frais." },
      { heading: "Variétés faciles à fermenter", body: "Choucroute (chou blanc + sel) : la classique. Kimchi (chou chinois + carotte + radis + piment) : la version coréenne. Carottes au gingembre. Betteraves au cumin. Radis daikon. Concombres entiers (cornichons lacto). Légumes mélangés (chou, carotte, betterave). Chou rouge à la pomme. Navets. Poivrons." },
      { heading: "Comment savoir si c'est bon", body: "Goût : légèrement acide (acide lactique). Aspect : couleur peut foncer, c'est normal. Texture : croquante encore. Odeur : franche mais agréable. À jeter si : moisissure visible (poils blancs ou colorés), goût/odeur putride, ou texture devenue molle/visqueuse. La fermentation lactique 'propre' n'a jamais la pourriture pour résultat." },
      { heading: "Conservation et consommation", body: "Une fois fermentation amorcée (5-7 jours), conservation au frigo plusieurs mois. Consommer crue (les probiotiques sont thermosensibles). 1-2 cuillères à soupe par repas suffisent. Excellente avec poissons gras, viandes, légumineuses (aide à la digestion). Le jus de fermentation se boit aussi (très puissant)." },
    ],
    ["18 g de sel pour 1 kg de légume", "5-7 jours à 20°C puis frigo", "Jamais cuire après fermentation", "Conservation plusieurs mois"],
    ['lacto-fermentation', 'probiotiques', 'choucroute']
  ),
  a('associations-alimentaires',
    "Les associations alimentaires : pour une digestion légère",
    "Pourquoi ne pas mélanger n'importe quoi. Les associations qui fatiguent et celles qui soulagent.",
    "L'idée des associations alimentaires, développée par le Dr Herbert Shelton dans les années 1930, repose sur une observation simple : différents aliments demandent des sucs digestifs différents et des temps de digestion différents. Mélanger n'importe quoi à n'importe quel repas surcharge l'estomac et le foie. Adapter ses combinaisons allège considérablement la digestion.",
    [
      { heading: "Les associations problématiques", body: "Protéines + amidons au même repas (steak + frites, poisson + riz) : milieux digestifs antagonistes (acide pour protéines, alcalin pour amidons) = ralentissement et fermentation. Fruits en fin de repas : ils digèrent vite (15-30 min) mais coincés derrière un repas lourd ils fermentent. Mélange de plusieurs protéines (œuf + jambon + fromage) : surcharge enzymatique. Boissons sucrées en repas : ralentissent digestion." },
      { heading: "Les associations harmonieuses", body: "Protéine + légumes verts = excellent (poisson + brocoli). Amidon + légumes = excellent (riz + courgettes). Protéine + bonnes graisses + légumes = excellent (saumon + avocat + salade). Fruits seuls entre les repas (idéalement). Légumes crus avant cuits (entrée crue puis plat cuit). Mono-repas (un seul type d'aliment) = digestion la plus facile." },
      { heading: "Les exceptions et nuances", body: "L'avocat et les oléagineux se marient avec tout (graisses). Les légumes verts feuillus se marient avec tout. Les fruits acides (citron, pamplemousse) peuvent se marier avec protéines (assaisonnement salade au saumon). Le lait demande à être pris seul (les ruminants ne mélangent pas le lait). Les céréales et légumineuses ensemble = protéines complètes." },
      { heading: "En pratique au quotidien", body: "Petit-déjeuner : soit fruits (smoothie, fruits frais), soit céréales (porridge, pain complet), pas le mélange chaotique habituel. Déjeuner : un plat composé d'1 protéine + légumes + un peu de bonne graisse. Dîner : amidon + légumes (légume vapeur + quinoa) ou soupe + légumineuses, plus léger. Fruits 30 min AVANT les repas plutôt qu'après." },
    ],
    ["Protéines + amidons : éviter", "Fruits seuls, avant les repas", "Légumes verts compatibles avec tout", "Mono-repas = digestion la plus facile"],
    ['shelton', 'associations', 'digestion']
  ),
  a('chrono-nutrition-naturopathique',
    "L'alimentation au rythme du corps",
    "Quand manger compte autant que quoi manger. Cycles circadiens, foie, digestion, sommeil.",
    "Le corps humain fonctionne selon des rythmes biologiques précis. Manger à n'importe quelle heure ignore ces rythmes et fatigue les organes. Adapter son alimentation aux phases de la journée — protéines le matin, glucides le midi, légumes le soir — optimise la digestion, l'énergie, le sommeil.",
    [
      { heading: "Les rythmes circadiens digestifs", body: "Estomac maximal vers 7-9h (préparé à recevoir). Pancréas, foie, vésicule actifs 12-14h (gros repas). Décroissance progressive l'après-midi. Le soir, métabolisme ralenti, foie en phase de drainage (entre 1h et 3h du matin). Mélatonine antidigestive le soir. Manger lourd le soir = digestion qui empêche le sommeil profond." },
      { heading: "Petit-déjeuner : protéines et graisses", body: "À 7-9h, l'estomac est prêt pour des aliments denses. Idéal : œufs, oléagineux, avocat, fromage de chèvre/brebis bio, saumon fumé pour les sportifs. Évite les pics glycémiques de la journée. Pour les fruits : préférer en collation 30 min avant ou 2h après. Pas de céréales sucrées industrielles : pic glycémique = fringale 10h." },
      { heading: "Déjeuner : le repas le plus copieux", body: "12h-14h : optimum digestif. C'est le moment du repas principal, le plus copieux. Composition idéale : 1 protéine de qualité (poisson, viande, légumineuses, œufs) + légumes en abondance + une portion modérée d'amidon (riz semi-complet, quinoa, patates douces). Repas terminé par une infusion digestive (gentiane, romarin)." },
      { heading: "Dîner : léger et tôt", body: "Idéal : avant 19h-20h, au moins 3h avant le coucher. Composition : soupe de légumes, salade complète, ou poisson + légumes. PAS d'amidon lourd (pâtes, pain, pomme de terre), PAS de protéines animales lourdes (bœuf, charcuterie), PAS d'alcool. Le foie pourra faire son travail nocturne de détoxification (entre 1h et 3h)." },
      { heading: "Jeûne intermittent naturel", body: "Adopter ces règles induit naturellement une fenêtre de jeûne de 12-14h (dîner 19h - petit-déjeuner 7-9h). C'est déjà du jeûne intermittent doux, avec tous ses bénéfices : régulation glycémique, repos digestif nocturne, autophagie débutante, meilleure qualité du sommeil." },
    ],
    ["Petit-déj : protéines et graisses", "Déjeuner : repas principal", "Dîner léger, avant 20h", "Fenêtre de 12h+ entre dîner et petit-déj"],
    ['chrono-nutrition', 'rythmes', 'sommeil']
  ),
  a('mastication',
    "La mastication : la base oubliée",
    "30 à 50 mastications par bouchée. Pourquoi c'est crucial et comment retrouver cet automatisme.",
    "« Bois ce que tu manges et mange ce que tu bois » disait un vieux dicton de naturopathie. Mastiquer correctement transforme la digestion. La salive contient des enzymes (amylase, lipase linguale) qui pré-digèrent les aliments. La mastication mécanique broie les fibres, allège le travail de l'estomac. La mastication consciente déclenche le système parasympathique digestif. Pourtant, la majorité avale en avalant.",
    [
      { heading: "Pourquoi 30-50 mastications par bouchée", body: "Études (Hsu, 2018) montrent qu'à 40 mastications, l'absorption des nutriments augmente de 12% par rapport à 15 mastications. La satiété arrive plus vite (cerveau reçoit le signal hormonal). Le bol alimentaire arrive prédigéré dans l'estomac. Les fibres sont broyées, libérant leurs nutriments. La mastication active la production de salive, riche en amylase pour les amidons." },
      { heading: "Les bénéfices observés", body: "Perte de poids sans effort (satiété précoce). Disparition des ballonnements (aliments pré-digérés). Goûts plus intenses (papilles sollicitées). Reflux moins fréquent. Sommeil amélioré (digestion plus rapide en fin de journée). Détente nerveuse (mastication = parasympathique). Économie d'énergie digestive disponible pour autre chose." },
      { heading: "Comment retrouver une bonne mastication", body: "Premier mois : compter consciemment les mastications. Poser ses couverts entre chaque bouchée. S'asseoir pour manger, jamais debout. Pas d'écran ni de lecture (vide la conscience). Mâcher jusqu'à l'aliment devienne liquide. Si vous avez fini votre assiette en 10 min : trop vite. Visez 25-30 min minimum pour un repas." },
      { heading: "Cas particuliers", body: "Profils nerveux : mastication d'autant plus essentielle (digestion fragile). Profils bilieux : tendance à engloutir — pratique consciente nécessaire. Personnes âgées : appareils dentaires bien adaptés indispensables. Enfants : apprendre dès le plus jeune âge, modèle parental." },
    ],
    ["30-50 mastications par bouchée", "12% d'absorption en plus", "Satiété précoce = perte de poids", "Pas d'écran à table"],
    ['mastication', 'digestion', 'satiété']
  ),
  a('hydratation-naturopathique',
    "L'hydratation : qualité, quantité, timing",
    "Combien boire, quoi boire, quand boire. Les règles précises qui changent tout.",
    "« 1,5 L d'eau par jour » : cette règle simplificatrice cache beaucoup de nuances. Hydratation efficace = bonne eau + bonne quantité + bon timing + bonnes associations. Boire mal peut être presque aussi délétère que ne pas boire. Voici les règles précises de l'hydratation naturopathique.",
    [
      { heading: "Quelle eau boire", body: "Idéal : eau de source faiblement minéralisée (résidu sec < 200 mg/L) : Mont-Roucous, Montcalm, Volvic, eau filtrée par osmose inverse. Évite la surcharge minérale qui fatigue les reins. Eau du robinet : à filtrer (charbon, céramique, osmoseur) pour retirer chlore, métaux, résidus médicamenteux. Évite les eaux très minéralisées en continu (Hépar, Contrex, San Pellegrino) : pour cures courtes uniquement. Bouteilles plastiques à éviter (perturbateurs endocriniens)." },
      { heading: "Combien boire", body: "Règle générale : 30 ml/kg de poids corporel/jour. Pour 70 kg = 2,1 L (toutes boissons confondues : eau pure + tisanes + soupe + eau des aliments). Augmenter en cas de chaleur, sport, fièvre, allaitement. Diminuer en hiver inactif. Indicateur fiable : couleur des urines (jaune clair = OK ; jaune foncé = pas assez ; transparent = trop)." },
      { heading: "Quand boire", body: "Au réveil : 1-2 verres d'eau tiède pour rincer le tube digestif. Entre les repas : la majorité de l'eau. PAS PENDANT les repas : dilue les sucs digestifs (effet « robinet » nuit à la digestion). Maximum 100 ml pendant un repas si nécessaire. Le soir : réduire 2h avant le coucher (pour éviter de se lever la nuit)." },
      { heading: "Les boissons à éviter", body: "Sodas (acide, sucré, déshydratant net). Jus de fruits industriels (sucre concentré). Alcool (diurétique, déshydratant). Café en excès (diurétique). Boissons glacées (figent la digestion). Lait en grande quantité (mucus). Eau gazeuse trop forte (irrite, ballonnements). Eau du robinet non filtrée chargée en chlore." },
    ],
    ["30 ml/kg/jour toutes boissons", "Eau faiblement minéralisée", "Entre les repas, jamais pendant", "Urines jaune clair = OK"],
    ['hydratation', 'eau', 'minéralisation']
  ),
  a('gluten-laitages',
    "Gluten et produits laitiers : faut-il les éviter ?",
    "Au-delà des modes, ce que la science et la naturopathie disent vraiment de ces deux aliments controversés.",
    "Le gluten et les produits laitiers font l'objet de débats passionnés. Entre les positions extrêmes (« tout le monde devrait les éviter » vs « ils sont sans danger pour la plupart »), la naturopathie propose une approche personnalisée selon le terrain. Décryptage.",
    [
      { heading: "Le gluten : entre intolérance et hypersensibilité", body: "Maladie cœliaque (1% population) : éviction stricte à vie. Allergie au blé : éviction. Hypersensibilité au gluten non cœliaque (estimée 6-10%) : gluten provoque ballonnements, fatigue, brouillard mental sans diagnostic biologique. Sensibilité aux ATIs (inhibiteurs d'amylase-trypsine) : protéines du blé moderne hybridé. Pour les autres : tolérance variable, à tester individuellement." },
      { heading: "Pourquoi le blé moderne pose problème", body: "Hybridations modernes ont multiplié la teneur en gluten (de 12% à 30% en un siècle). Glyphosate utilisé en pré-récolte = perturbateur du microbiote. Levures industrielles (panification rapide) = pas de fermentation longue qui dégrade le gluten. Pain blanc industriel cumule tous ces écueils. Alternative : pain au levain naturel, blés anciens (épeautre, petit épeautre, kamut), céréales sans gluten (sarrasin, quinoa, millet)." },
      { heading: "Les produits laitiers : caséine, lactose, hormones", body: "Lactose : digéré par moins de 35% de la population adulte mondiale (production de lactase chute après l'enfance). Caséine bovine (β-caséine A1) : produit des bêta-casomorphines suspectées d'inflammation. Hormones et facteurs de croissance bovins (IGF-1) : effet de croissance non souhaitable chez l'adulte. Lait industriel pasteurisé : enzymes détruites, aliment dénaturé." },
      { heading: "Que choisir en pratique", body: "Tester une éviction stricte de 3-4 semaines, puis réintroduire pour observer. Si bénéfice net : maintenir l'éviction (au moins partielle). Alternatives au gluten : sarrasin, quinoa, riz, millet, teff, fonio. Alternatives aux laitages : laits végétaux (amande, noisette), fromages végétaux fermentés, yaourts de soja ou de coco. Si tolérance : préférer chèvre, brebis bio, lacto-fermentés (kéfir, yaourt artisanal)." },
    ],
    ["Tester par éviction de 3-4 semaines", "Maladie cœliaque : éviction à vie", "Blés anciens > blé moderne", "Chèvre/brebis > vache"],
    ['gluten', 'lait', 'intolérance']
  ),
  a('sucres-additifs-perturbateurs',
    "Sucres, additifs et perturbateurs : les vraies menaces",
    "Sucre raffiné, édulcorants, conservateurs, perturbateurs endocriniens. Ce qu'il faut vraiment éliminer.",
    "Plus que les graisses ou les protéines, ce sont aujourd'hui les sucres ajoutés, les additifs industriels et les perturbateurs endocriniens qui constituent les véritables menaces alimentaires. Apprendre à les reconnaître et à les éliminer transforme la santé bien plus que n'importe quel régime à la mode.",
    [
      { heading: "Sucre raffiné : poison lent moderne", body: "Consommation moyenne : 35-40 kg/an/personne en France (contre 4 kg en 1900). Effets : pic glycémique → insuline → stockage en graisse abdominale. Inflammation systémique. Glycation des protéines (vieillissement). Addiction (dopamine). Suppression immunitaire pendant 6h après consommation. Caries. Le sucre est aujourd'hui le pivot du syndrome métabolique." },
      { heading: "Édulcorants : pas mieux que le sucre", body: "Aspartame : controverses cancer, troubles neurologiques. Sucralose : altère le microbiote. Acésulfame K : suspecté cancérogène. Stévia : OK si extrait naturel (steviol pur) mais beaucoup de versions industrielles. Alternatives saines : miel cru (modération), sirop d'érable bio, sucre de coco, fruits frais, dattes (tout en restant des sucres). En cure de désaccoutumance : 1 mois sans sucre fait redécouvrir le vrai goût des aliments." },
      { heading: "Additifs à fuir absolument", body: "E102, E110, E122, E124, E129 (colorants azoïques : hyperactivité enfants). E211 (benzoate de sodium). E249, E250, E252 (nitrites des charcuteries : cancérogènes). E407 (carraghénanes : inflammation intestinale). E450, E451 (phosphates : surcharge rénale). E171 (dioxyde de titane : enfin interdit en France). E621 (glutamate monosodique : neurotoxique). Règle : si > 3 ingrédients vous ne comprenez pas, reposez le produit." },
      { heading: "Perturbateurs endocriniens cachés", body: "Bisphénol A et S (canettes, plastiques chauffés, tickets de caisse). Phtalates (plastiques souples, cosmétiques). Pesticides (alimentation conventionnelle). Parabens (cosmétiques). Triclosan (savons antibactériens). PFAS (poêles anti-adhésives, packaging). Solutions : alimentation bio, eau filtrée, ne pas chauffer dans plastique, cosmétiques certifiés, poêles en inox/fonte." },
    ],
    ["Sucre raffiné = poison lent moderne", "Édulcorants pas mieux", "Méfiance des E-numéros opaques", "Perturbateurs endocriniens partout"],
    ['sucre', 'additifs', 'perturbateurs endocriniens']
  ),
];
