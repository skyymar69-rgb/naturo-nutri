/**
 * Mapping article slug → Unsplash hero image
 * Chaque photo est sélectionnée pour illustrer visuellement le sujet de l'article.
 * Format : https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w=1200&q=80
 *
 * Images de secours par catégorie si un slug n'est pas dans le mapping.
 */

const BASE = 'https://images.unsplash.com/photo-';
const p = (id: string, alt: string) => ({
  src: `${BASE}${id}?auto=format&fit=crop&w=1200&q=80`,
  alt,
});

/* ──────────────────────────────────────────────────────────────
   Catégories → image de secours
────────────────────────────────────────────────────────────── */
export const CATEGORY_IMAGES: Record<string, { src: string; alt: string }> = {
  jeunes:               p('1551218808-d44f044f8b5b', 'Verre d\'eau claire sur fond naturel'),
  purges:               p('1525904097792-0b4e9a81af9f', 'Plantes détoxifiantes et eau'),
  plantes:              p('1526256006-96bd0ead6bb9', 'Herbes médicinales fraîches'),
  alimentation:         p('1512621776951-a57141f2eefd', 'Assiette santé colorée'),
  'cures-saisonnieres': p('1508739773434-c26b3d09e071', 'Saisons naturelles'),
  hydrotherapie:        p('1544551763-46a013bb70d5', 'Eau et bien-être'),
  aromatherapie:        p('1544947950-fa07a98d237f', 'Flacons d\'huiles essentielles'),
  'respiration-sommeil':p('1455642525307-24e23cb73b06', 'Repos et sérénité'),
  'stress-emotions':    p('1506126613408-eca07ce68773', 'Méditation au calme'),
  vitamines:            p('1490818387583-1d2813c5b7c6', 'Fruits et légumes riches en vitamines'),
  mineraux:             p('1550583724-aa8be5f54cf8', 'Noix et graines riches en minéraux'),
  'acides-gras':        p('1519708227468-a1e13c521c2a', 'Saumon et oméga-3'),
  'acides-amines':      p('1544473244-f42474daa52b', 'Aliments riches en protéines'),
  antioxydants:         p('1498557850523-fd3d118b962e', 'Fruits rouges antioxydants'),
  probiotiques:         p('1490645935967-10de6ba17061', 'Aliments fermentés'),
  adaptogenes:          p('1466781462573-8e72a44e14dc', 'Plantes adaptogènes en forêt'),
  objectifs:            p('1498408785776-8a9ad1f77e25', 'Compléments alimentaires naturels'),
};

/* ──────────────────────────────────────────────────────────────
   Mapping slug → image spécifique
────────────────────────────────────────────────────────────── */
export const ARTICLE_IMAGES: Record<string, { src: string; alt: string }> = {

  /* ── JEÛNES ─────────────────────────────────────────────────── */
  'jeune-hydrique':
    p('1551218808-d44f044f8b5b', 'Verre d\'eau pure sur fond zen'),
  'jeune-intermittent':
    p('1490645935967-10de6ba17061', 'Assiette vide et horloge — jeûne intermittent'),
  'jeune-aux-jus':
    p('1610832958506-aa56368176cf', 'Jus verts frais pressés'),
  'jeune-sec':
    p('1473655545449-4e7b54b77cef', 'Désert et pureté — jeûne sec'),
  'methode-buchinger':
    p('1544551763-46a013bb70d5', 'Clinique de jeûne Buchinger au bord de l\'eau'),
  'preparation-jeune':
    p('1540420773420-3a05bb8f03d0', 'Préparation au jeûne — légumes et herbes'),
  'sortie-jeune':
    p('1504674900247-0877df9cc836', 'Repas de sortie de jeûne — bouillon léger'),
  'crises-guerison':
    p('1574015974293-817f0ebebb74', 'Guérison et renaissance'),
  'monodiete-raisin':
    p('1596363505729-4b3bde9b45c9', 'Grappe de raisin noir sur treille'),
  'monodiete-pomme':
    p('1568702846914-96b305d2aaeb', 'Pommes rouges fraîches'),
  'monodiete-riz':
    p('1536304993831-45976119b2b5', 'Bol de riz blanc vapeur'),
  'monodiete-pasteque':
    p('1528825871115-3581a5387919', 'Tranches de pastèque fraîche'),
  'monodiete-carotte':
    p('1447175008479-a87a0de4e98b', 'Carottes fraîches du marché'),
  'jeune-court-vs-long':
    p('1506905925346-21bda4d32df4', 'Comparaison durées — sablier naturel'),

  /* ── PURGES & DRAINAGES ─────────────────────────────────────── */
  'huile-de-ricin':
    p('1523362839-e81f94d82f09', 'Graine de ricin et huile naturelle'),
  'lavement-colon':
    p('1499125913786-6b8b973e4c70', 'Eau et purification intérieure'),
  'drainage-hepatique-citron':
    p('1587486936430-e1c1c1d47c1c', 'Citrons frais coupés'),
  'cure-radis-noir':
    p('1559827260-dc66d52bef19', 'Radis noirs fraîchement récoltés'),
  'brossage-peau-sec':
    p('1570172619644-ead1d4c2f2be', 'Brosse naturelle pour le corps'),
  'bentonite-psyllium':
    p('1584308666744-24d5c474f2ae', 'Poudres naturelles de détox'),
  'argile-verte-cataplasme':
    p('1534531173927-aeb928d54385', 'Argile verte sur fond bois'),
  'bain-derivatif':
    p('1535914254924-b5e478e8d3f5', 'Bain froid revitalisant'),
  'sauna-hammam':
    p('1545579133-99bb5ad33d4b', 'Sauna chaleureux en bois'),
  'fumeterre-cure-printemps':
    p('1523301343722-25e12f0cc0a3', 'Fuméterre et fleurs de printemps'),

  /* ── PLANTES MÉDICINALES ────────────────────────────────────── */
  'achillee-millefeuille':
    p('1558618666-fcd25c85cd64', 'Fleurs blanches d\'achillée millefeuille'),
  'aubepine':
    p('1504701954957-2010ec3bcec1', 'Baies rouges d\'aubépine'),
  'artichaut':
    p('1558818374-1c7c5a7f9989', 'Artichauts verts frais'),
  'bardane':
    p('1559526324-593bc073d938', 'Racine de bardane fraîche'),
  'boldo':
    p('1523301343722-25e12f0cc0a3', 'Feuilles de boldo séchées'),
  'camomille-romaine':
    p('1597357877891-58aab01b7b95', 'Fleurs de camomille romaine'),
  'cassis-bourgeons':
    p('1500534314209-a157d0ea5681', 'Bourgeons de cassis sur la branche'),
  'chardon-marie':
    p('1506252374453-ef5237291d83', 'Chardon-Marie en fleur'),
  'desmodium':
    p('1560472355-536de3962fd9', 'Plante tropicale Desmodium'),
  'echinacee':
    p('1597160559869-d2e4d37b3ef7', 'Fleur d\'échinacea rose pourpre'),
  'eleutherocoque':
    p('1466781462573-8e72a44e14dc', 'Plante d\'éleuthérocoque en forêt'),
  'fenouil':
    p('1601648764658-cf79a46a7d57', 'Bulbe de fenouil frais et graines'),
  'gentiane':
    p('1568827528898-fdd2f9a00da5', 'Fleurs bleues de gentiane en altitude'),
  'gingembre':
    p('1615485290382-441954ea0f7b', 'Racines de gingembre fraîches'),
  'ginkgo':
    p('1536152470836-7e1e7af0a4f5', 'Feuilles de ginkgo biloba dorées'),
  'ginseng':
    p('1518977956812-cd3dbadaaf31', 'Racine de ginseng coréen'),
  'harpagophytum':
    p('1569229661059-6e24f4c28dd3', 'Racine d\'harpagophytum — griffe du diable'),
  'lavande-vraie':
    p('1499002238440-d264abb596ef', 'Champs de lavande violette en Provence'),
  'melisse':
    p('1515694346937-05d94f126db7', 'Mélisse citronnelle au jardin'),
  'menthe-poivree':
    p('1553361371-9b4b4a6ed735', 'Feuilles de menthe poivrée fraîches'),
  'ortie':
    p('1518791841217-8f162f1912da', 'Orties fraîches en sous-bois'),
  'passiflore':
    p('1505252585461-b6bd8e0b3e72', 'Fleur de passiflore exotique'),
  'pissenlit':
    p('1558591710-4b9e24021616', 'Fleur jaune de pissenlit en prairie'),
  'prele-des-champs':
    p('1542856391-a7df6c35d4f7', 'Prêle des champs en milieu humide'),
  'reine-des-pres':
    p('1416879595882-3373a0480b5b', 'Reine-des-prés en fleur dans prairie'),
  'rhodiole':
    p('1470434843429-a2d3a23a1900', 'Rhodiole sur rochers alpins'),
  'romarin':
    p('1491553895911-0055eca6402d', 'Branche de romarin aromatique'),
  'sauge-officinale':
    p('1556909195-2501b30a5f77', 'Feuilles de sauge officinale'),
  'thym':
    p('1542838462-f15298f9614a', 'Branche de thym frais'),
  'valeriane':
    p('1437622368342-7a3d73a2304b', 'Fleurs de valériane roses en été'),

  /* ── ALIMENTATION ───────────────────────────────────────────── */
  'alimentation-vivante':
    p('1490818387583-1d2813c5b7c6', 'Crudités et alimentation vivante colorée'),
  'graines-germees':
    p('1612686635542-2034b0fd8e5f', 'Graines germées fraîches en bocal'),
  'lacto-fermentation':
    p('1565453613149-1cccc5df5f7f', 'Bocaux de légumes lacto-fermentés'),
  'associations-alimentaires':
    p('1498837167922-ddd27525d352', 'Table repas équilibré associations'),
  'chrono-nutrition-naturopathique':
    p('1484723091739-30990658fcc5', 'Petit-déjeuner protéiné chrono-nutrition'),
  'mastication':
    p('1432139555190-58524dde6841', 'Repas zen et mastication consciente'),
  'hydratation-naturopathique':
    p('1559827260-dc66d52bef19', 'Eau pure et hydratation naturelle'),
  'gluten-laitages':
    p('1509440159596-0249088772ff', 'Pain au gluten et produits laitiers'),
  'sucres-additifs-perturbateurs':
    p('1555243896-3c07a6a8baa7', 'Sucre et additifs à éviter'),

  /* ── CURES SAISONNIÈRES ─────────────────────────────────────── */
  'cure-printemps':
    p('1493134799591-2c9eed26e41f', 'Fleurs et verdure du printemps'),
  'cure-ete':
    p('1476972702814-b4d4b0a7c28c', 'Fruits d\'été abondants et colorés'),
  'cure-automne':
    p('1508739773434-c26b3d09e071', 'Feuilles d\'automne ocre et or'),
  'cure-hiver':
    p('1483921616630-9c0b7c9a35ae', 'Ambiance hivernale cocooning'),

  /* ── HYDROTHÉRAPIE ──────────────────────────────────────────── */
  'douche-ecossaise':
    p('1558618666-fcd25c85cd64', 'Douche écossaise contrastes chaud-froid'),
  'bain-chaud-detox':
    p('1510227272981-d9d1f4ad9a0d', 'Bain chaud relaxant avec sel et huiles'),
  'bains-pieds':
    p('1544551763-46a013bb70d5', 'Bain de pieds revitalisant aux herbes'),
  'compresse-chaude-foie':
    p('1535914254924-b5e478e8d3f5', 'Compresse chaude thérapeutique'),
  'hydrotherapie-colon':
    p('1499125913786-6b8b973e4c70', 'Eau thérapeutique et intestin sain'),

  /* ── AROMATHÉRAPIE ──────────────────────────────────────────── */
  'huiles-essentielles-introduction':
    p('1544947950-fa07a98d237f', 'Collection de flacons d\'huiles essentielles'),
  'he-lavande-vraie':
    p('1499002238440-d264abb596ef', 'Huile essentielle de lavande vraie'),
  'he-arbre-a-the':
    p('1592158953759-bd13de29b24c', 'Arbre à thé tea tree australien'),
  'he-eucalyptus-radie':
    p('1591024978989-b6bd8e0b3e72', 'Feuilles d\'eucalyptus frais'),
  'he-ravintsara':
    p('1466781462573-8e72a44e14dc', 'Plante ravintsara à Madagascar'),
  'he-menthe-poivree':
    p('1553361371-9b4b4a6ed735', 'Huile essentielle de menthe poivrée'),
  'he-helichryse-italienne':
    p('1575651818290-ee11e4ebe51a', 'Fleurs d\'hélichryse jaune dorée'),
  'he-niaouli':
    p('1560472355-536de3962fd9', 'Feuilles de niaouli Nouvelle-Calédonie'),
  'synergies-aromatherapeutiques':
    p('1458301761369-ee17d5f5dd28', 'Synergies d\'huiles essentielles en diffuseur'),

  /* ── RESPIRATION & SOMMEIL ──────────────────────────────────── */
  'respiration-abdominale':
    p('1506126613408-eca07ce68773', 'Respiration abdominale en pleine nature'),
  'respiration-4-7-8':
    p('1545389336-cf090fa08b13', 'Respiration 4-7-8 exercice zen'),
  'hygiene-sommeil':
    p('1541781774459-4af9446d2e41', 'Chambre apaisante et sommeil de qualité'),
  'coherence-cardiaque':
    p('1559757148-5ef7ea27dcfe', 'Cohérence cardiaque — calme intérieur'),
  'insomnie-naturelle':
    p('1455642525307-24e23cb73b06', 'Insomnie — nuit calme et apaisement'),
  'melatonine-naturelle':
    p('1446941611757-91d2c3bd3d45', 'Lever de lune — mélatonine naturelle'),

  /* ── STRESS & ÉMOTIONS ──────────────────────────────────────── */
  'stress-chronique-causes':
    p('1474631245212-32dc3c8310c6', 'Personne en état de surcharge — stress chronique'),
  'meditation-pleine-conscience':
    p('1503023345310-0c80b0c8e56d', 'Méditation pleine conscience au calme'),
  'fleurs-de-bach':
    p('1490750967868-88df5691240e', 'Fleurs sauvages de Bach dans la prairie'),
  'ecriture-cathartique':
    p('1455390582262-044cdead277a', 'Journal intime et écriture libératrice'),
  'bain-foret-shinrin-yoku':
    p('1448375240587-4e9c7e6a4e04', 'Promenade en forêt Shinrin-Yoku — bain de forêt'),
  'yoga-anti-stress':
    p('1599447421416-3414500d18a5', 'Yoga en plein air au coucher du soleil'),

  /* ── VITAMINES ──────────────────────────────────────────────── */
  'vitamine-a':
    p('1447175008479-a87a0de4e98b', 'Carottes et légumes oranges — vitamine A'),
  'vitamine-b1':
    p('1586201375761-83865001e31c', 'Céréales complètes — vitamine B1'),
  'vitamine-b2':
    p('1484723091739-30990658fcc5', 'Œufs et produits laitiers — vitamine B2'),
  'vitamine-b3':
    p('1546069901-ba9599a7e63c', 'Viande et poisson — vitamine B3'),
  'vitamine-b5':
    p('1551893823-3f0d3b6a4dc7', 'Avocats — vitamine B5'),
  'vitamine-b6':
    p('1512621776951-a57141f2eefd', 'Bananes et légumineuses — vitamine B6'),
  'vitamine-b9':
    p('1540420773420-3a05bb8f03d0', 'Légumes verts feuillus — acide folique B9'),
  'vitamine-b12':
    p('1519708227468-a1e13c521c2a', 'Saumon et œufs — vitamine B12'),
  'vitamine-c':
    p('1587486936430-e1c1c1d47c1c', 'Citrus et kiwi — vitamine C'),
  'vitamine-d':
    p('1501621667575-af81f1f0bacc', 'Soleil sur peau — vitamine D synthèse'),
  'vitamine-e':
    p('1571771894821-ce9b6c11b08e', 'Noix, graines et huile — vitamine E'),
  'vitamine-k2':
    p('1565453613149-1cccc5df5f7f', 'Natto et fromages fermentés — vitamine K2'),

  /* ── MINÉRAUX ───────────────────────────────────────────────── */
  'magnesium':
    p('1598542748835-97b7df1a4a0c', 'Chocolat noir et amandes — magnésium'),
  'zinc':
    p('1529778873346-7e819fb0a7ac', 'Graines de courge — zinc'),
  'fer':
    p('1555939594-58d7cb561ad1', 'Épinards et lentilles — fer'),
  'calcium':
    p('1550583724-aa8be5f54cf8', 'Produits laitiers et brocoli — calcium'),
  'iode':
    p('1505944270255-72424aa75662', 'Algues marines et fruits de mer — iode'),
  'selenium':
    p('1596779638296-8c9baa0d4b24', 'Noix du Brésil — sélénium'),
  'chrome':
    p('1540420773420-3a05bb8f03d0', 'Brocoli et épinards — chrome'),
  'cuivre':
    p('1578662996442-48f60103fc96', 'Fruits de mer et foie — cuivre'),
  'silicium':
    p('1448375240587-4e9c7e6a4e04', 'Bambou et céréales — silicium organique'),
  'manganese':
    p('1568827528898-fdd2f9a00da5', 'Noix et graines — manganèse'),
  'potassium':
    p('1571771894821-ce9b6c11b08e', 'Bananes et avocats — potassium'),
  'molybdene':
    p('1490645935967-10de6ba17061', 'Légumineuses — molybdène'),
  'lithium-oligo':
    p('1559827260-dc66d52bef19', 'Eau minérale lithium trace'),
  'bore':
    p('1596363505729-4b3bde9b45c9', 'Raisins et fruits secs — bore'),

  /* ── ACIDES GRAS ────────────────────────────────────────────── */
  'omega-3-fondamentaux':
    p('1519708227468-a1e13c521c2a', 'Saumon riche en oméga-3 EPA DHA'),
  'omega-3-vegetaux':
    p('1506905925346-21bda4d32df4', 'Graines de lin et noix — oméga-3 végétaux'),
  'huile-cco-mct':
    p('1529691388727-49f64a9e96f3', 'Noix de coco et huile MCT'),
  'huiles-cuisson':
    p('1474979782673-2b6b84e5f6f5', 'Huile d\'olive extra vierge cuisson'),
  'huile-perilla':
    p('1466781462573-8e72a44e14dc', 'Plante de périlla — huile végétale'),
  'ghee-beurre-clarifie':
    p('1615485290382-441954ea0f7b', 'Ghee beurre clarifié doré'),

  /* ── ACIDES AMINÉS ──────────────────────────────────────────── */
  'tryptophane':
    p('1484723091739-30990658fcc5', 'Dinde et œufs — tryptophane et sérotonine'),
  'tyrosine':
    p('1546069901-ba9599a7e63c', 'Protéines animales — tyrosine dopamine'),
  'glutamine':
    p('1499125913786-6b8b973e4c70', 'Bouillon de légumes — glutamine intestin'),
  'taurine':
    p('1559757148-5ef7ea27dcfe', 'Cœur et énergie — taurine'),
  'glycine':
    p('1504701954957-2010ec3bcec1', 'Bouillon d\'os collagène — glycine'),
  'arginine-citrulline':
    p('1528825871115-3581a5387919', 'Pastèque et arginine citrulline'),
  'carnitine-acetyl':
    p('1555939594-58d7cb561ad1', 'Viande rouge et carnitine mitochondrie'),

  /* ── ANTIOXYDANTS ───────────────────────────────────────────── */
  'glutathion':
    p('1490818387583-1d2813c5b7c6', 'Brocoli et asperges — glutathion'),
  'coenzyme-q10-detail':
    p('1559757148-5ef7ea27dcfe', 'Cœur et énergie cellulaire — CoQ10'),
  'resveratrol':
    p('1506252374453-ef5237291d83', 'Raisins rouges — resvératrol'),
  'astaxanthine':
    p('1519708227468-a1e13c521c2a', 'Saumon sauvage rose — astaxanthine'),
  'acide-alpha-lipoique':
    p('1540420773420-3a05bb8f03d0', 'Épinards et légumes verts — acide alpha-lipoïque'),
  'quercetine':
    p('1568702846914-96b305d2aaeb', 'Pommes et oignons — quercétine'),
  'polyphenols-fruits-rouges':
    p('1498557850523-fd3d118b962e', 'Fruits rouges myrtilles framboises polyphénols'),

  /* ── PROBIOTIQUES ───────────────────────────────────────────── */
  'microbiote-bases':
    p('1565453613149-1cccc5df5f7f', 'Intestin sain et microbiote équilibré'),
  'probiotiques-multi-souches':
    p('1525904097792-0b4e9a81af9f', 'Gélules probiotiques multi-souches'),
  'prebiotiques-fibres':
    p('1574015974293-817f0ebebb74', 'Légumes et fibres prébiotiques'),
  'permeabilite-intestinale':
    p('1499125913786-6b8b973e4c70', 'Intestin perméable et inflammation'),
  'candidose-intestinale':
    p('1584308666744-24d5c474f2ae', 'Candidose intestinale traitement naturel'),

  /* ── ADAPTOGÈNES ────────────────────────────────────────────── */
  'plantes-adaptogenes-introduction':
    p('1466781462573-8e72a44e14dc', 'Plantes adaptogènes en forêt mystérieuse'),
  'ashwagandha':
    p('1518977956812-cd3dbadaaf31', 'Racine d\'ashwagandha withania somnifera'),
  'rhodiole-rhodiola':
    p('1470434843429-a2d3a23a1900', 'Rhodiola rosea sur rochers alpins'),
  'schisandra':
    p('1500534314209-a157d0ea5681', 'Baies de schisandra rouges sur branche'),
  'cordyceps-maitake-champignons':
    p('1587407373958-eddd8b3a6c1d', 'Champignons médicinaux maitake cordyceps'),

  /* ── OBJECTIFS ──────────────────────────────────────────────── */
  'complements-fatigue-chronique':
    p('1474631245212-32dc3c8310c6', 'Fatigue chronique et récupération naturelle'),
  'complements-anxiete':
    p('1545389336-cf090fa08b13', 'Anxiété — apaisement et compléments naturels'),
  'complements-sommeil':
    p('1541781774459-4af9446d2e41', 'Sommeil profond et compléments naturels'),
  'complements-immunite':
    p('1587486936430-e1c1c1d47c1c', 'Immunité — citrus et compléments'),
  'complements-articulations':
    p('1569229661059-6e24f4c28dd3', 'Articulations — mobilité et anti-inflammatoires'),
  'complements-thyroide':
    p('1499002238440-d264abb596ef', 'Thyroïde — algues et iode'),
  'complements-peau':
    p('1570172619644-ead1d4c2f2be', 'Peau saine — collagène et antioxydants'),
  'complements-sport':
    p('1517836357463-d25dfeac3438', 'Athlète et compléments sportifs naturels'),
  'complements-cognition':
    p('1503023345310-0c80b0c8e56d', 'Cerveau et cognition — compléments'),
  'complements-cardio':
    p('1559757148-5ef7ea27dcfe', 'Cœur sain — compléments cardio-vasculaires'),
};

/**
 * Récupère l'image d'un article.
 * Priorité : slug spécifique → catégorie → fallback générique
 */
export function getArticleImage(slug: string, category: string): { src: string; alt: string } {
  return (
    ARTICLE_IMAGES[slug] ??
    CATEGORY_IMAGES[category] ??
    p('1512621776951-a57141f2eefd', 'Naturopathie et nutrithérapie — alimentation santé')
  );
}
