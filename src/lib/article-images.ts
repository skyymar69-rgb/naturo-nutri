/**
 * Mapping slug/category → vraie photo Pexels.
 *
 * Sources : https://www.pexels.com — licence gratuite usage commercial
 * sans attribution obligatoire (https://www.pexels.com/license/).
 *
 * Chaque URL/ID a été vérifié par recherche réelle sur Pexels via
 * l'agent de recherche (WebFetch). Plus de risque d'ID halluciné.
 *
 * Priorité de résolution :
 *   ARTICLE_PHOTOS[slug] → CATEGORY_PHOTOS[category] → fallback générique
 */

import { CATEGORIES } from './categories';

interface PhotoMeta {
  src: string;
  alt: string;
}

const px = (id: string, ext: string, alt: string): PhotoMeta => ({
  src: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&w=1200&q=80`,
  alt,
});

/* ──────────────────────────────────────────────────────────────
   17 photos par catégorie — fournée 1
────────────────────────────────────────────────────────────── */
export const CATEGORY_PHOTOS: Record<string, PhotoMeta> = {
  jeunes:                px('8164799', 'jpeg', "Verre d'eau et dattes — jeûne et hydratation"),
  purges:                px('1585849', 'jpeg', 'Citron et basilic — drainage hépatique'),
  plantes:               px('5480048', 'jpeg', 'Mortier et pilon, herbes médicinales en bocaux'),
  alimentation:          px('6950759', 'jpeg', 'Légumes grillés colorés — alimentation saine'),
  'cures-saisonnieres':  px('34427614','jpeg', "Forêt d'automne aux feuilles dorées"),
  hydrotherapie:         px('7222184', 'jpeg', 'Femme entrant dans une piscine intérieure — hydrothérapie'),
  aromatherapie:         px('672051',  'jpeg', "Flacons d'huiles essentielles et fleurs"),
  'respiration-sommeil': px('6541081', 'jpeg', 'Femme endormie avec masque dans une chambre tamisée'),
  'stress-emotions':     px('9463223', 'jpeg', 'Femme en méditation dans un environnement de verdure'),
  vitamines:             px('17820718','jpeg', 'Vitamines et compléments sur fond vert vif'),
  mineraux:              px('7779878', 'jpeg', "Cristaux de sel rose de l'Himalaya"),
  'acides-gras':         px('5639482', 'jpeg', 'Plat de saumon avec légumes frais et citron'),
  'acides-amines':       px('4110225', 'jpeg', "Œufs bruns et blancs — protéines complètes"),
  antioxydants:          px('718143',  'jpeg', 'Myrtilles fraîches gros plan — antioxydants'),
  probiotiques:          px('10809146','jpeg', 'Yaourt maison en pot céramique avec cuillère bois'),
  adaptogenes:           px('16122465','jpeg', 'Racines de ginseng frais sur assiette noire'),
  objectifs:             px('7615558', 'jpeg', 'Gélules et herbes en bols céramique sur surface verte'),
};

/* ──────────────────────────────────────────────────────────────
   81 photos par-article vérifiées (batch 1)
────────────────────────────────────────────────────────────── */
export const ARTICLE_PHOTOS: Record<string, PhotoMeta> = {
  // VITAMINES
  'vitamine-a':  px('24031498','jpeg', 'Carottes oranges riches en vitamine A'),
  'vitamine-b1': px('5114289', 'jpeg', 'Céréales complètes et riz brun — vitamine B1'),
  'vitamine-b2': px('7118897', 'jpeg', 'Œufs et produits laitiers — vitamine B2'),
  'vitamine-b3': px('8112380', 'jpeg', 'Viande et protéines riches en niacine'),
  'vitamine-b5': px('3850623', 'jpeg', 'Avocat — vitamine B5 acide pantothénique'),
  'vitamine-b6': px('36021103','jpeg', 'Bananes et légumineuses — vitamine B6'),
  'vitamine-b9': px('7456546', 'jpeg', 'Légumes verts feuillus — folates B9'),
  'vitamine-b12':px('20571455','jpeg', 'Saumon et protéines animales — vitamine B12'),
  'vitamine-c':  px('7676963', 'jpeg', 'Agrumes et kiwi riches en vitamine C'),
  'vitamine-d':  px('13849252','jpeg', 'Lumière du soleil — vitamine D'),
  'vitamine-e':  px('7420735', 'jpeg', 'Noix, graines et amandes — vitamine E'),
  'vitamine-k2': px('30874699','jpeg', 'Aliments fermentés et fromage — vitamine K2'),

  // MINÉRAUX
  magnesium:    px('8524288', 'jpeg', 'Chocolat noir et amandes — magnésium'),
  zinc:         px('7772003', 'jpeg', 'Graines de courge — zinc'),
  fer:          px('6824475', 'jpeg', 'Épinards et lentilles — fer'),
  calcium:      px('6585008', 'jpeg', 'Produits laitiers et brocoli — calcium'),
  iode:         px('13677969','jpeg', 'Algues marines — iode'),
  selenium:     px('25067701','jpeg', 'Noix du Brésil — sélénium'),
  chrome:       px('7676045', 'jpeg', 'Brocoli et légumes verts — chrome'),
  cuivre:       px('18606644','jpeg', 'Fruits de mer et abats — cuivre'),
  silicium:     px('11519186','jpeg', 'Bambou et céréales — silicium'),
  manganese:    px('7421448', 'jpeg', 'Noix et céréales complètes — manganèse'),
  potassium:    px('108059',  'jpeg', 'Bananes et avocat — potassium'),
  molybdene:    px('36498028','jpeg', 'Légumineuses et haricots — molybdène'),
  'lithium-oligo': px('13230440','jpeg', 'Eau minérale — lithium oligo-élément'),
  bore:         px('31508567','jpeg', 'Raisins et fruits secs — bore'),

  // ACIDES GRAS
  'omega-3-fondamentaux': px('3029526',  'jpeg', 'Saumon riche en oméga-3'),
  'omega-3-vegetaux':     px('971078',   'jpeg', 'Graines de lin, noix et chia'),
  'huile-cco-mct':        px('17721574', 'jpeg', 'Bouteille d\'huile de coco'),
  'huiles-cuisson':       px('31275834', 'jpeg', 'Bouteille d\'huile d\'olive'),
  'huile-perilla':        px('35663682', 'jpeg', 'Feuilles de perilla'),
  'ghee-beurre-clarifie': px('20689446', 'jpeg', 'Ghee — beurre clarifié doré'),

  // ACIDES AMINÉS
  tryptophane:        px('29802845','jpeg', 'Dinde et œufs — tryptophane'),
  tyrosine:           px('28452543','jpeg', 'Viande et produits laitiers — tyrosine'),
  glutamine:          px('35064953','jpeg', 'Bouillon d\'os aux légumes — glutamine'),
  taurine:            px('2919591', 'jpeg', 'Complément énergétique pour le cœur'),
  glycine:            px('6475108', 'jpeg', 'Bouillon d\'os riche en collagène — glycine'),
  'arginine-citrulline': px('5460885','jpeg', 'Pastèque — arginine citrulline'),
  'carnitine-acetyl': px('36319682','jpeg', 'Viande rouge — carnitine'),

  // ANTIOXYDANTS
  glutathion:                  px('5966439', 'jpeg', 'Brocoli et asperges — glutathion'),
  'coenzyme-q10-detail':       px('992816',  'jpeg', 'Aliments sains pour le cœur — CoQ10'),
  resveratrol:                 px('7657243', 'jpeg', 'Grappe de raisins rouges — resvératrol'),
  astaxanthine:                px('28172684','jpeg', 'Saumon sauvage rose — astaxanthine'),
  'acide-alpha-lipoique':      px('4506877', 'jpeg', 'Épinards — acide alpha-lipoïque'),
  quercetine:                  px('33736637','jpeg', 'Pommes et oignons — quercétine'),
  'polyphenols-fruits-rouges': px('6004723', 'jpeg', 'Framboises et mûres — polyphénols'),

  // ADAPTOGÈNES
  ashwagandha:                       px('10902685','jpeg', 'Racine d\'ashwagandha'),
  'rhodiole-rhodiola':               px('19499716','jpeg', 'Rhodiola en milieu rocheux'),
  schisandra:                        px('5336050', 'jpeg', 'Baies de schisandra rouges'),
  'cordyceps-maitake-champignons':   px('13383491','jpeg', 'Champignons médicinaux reishi'),
  'plantes-adaptogenes-introduction':px('35011278','png',  'Herbes adaptogènes en forêt'),

  // PROBIOTIQUES
  'microbiote-bases':           px('6823321', 'jpeg', 'Microbiote intestinal — yaourt sain'),
  'probiotiques-multi-souches': px('7615410', 'jpeg', 'Gélules probiotiques multi-souches'),
  'prebiotiques-fibres':        px('33654488','jpeg', 'Fibres prébiotiques — artichaut et légumes'),
  'permeabilite-intestinale':   px('8471875', 'jpeg', 'Santé intestinale — perméabilité'),
  'candidose-intestinale':      px('7615459', 'jpeg', 'Approche naturelle — candidose'),

  // COMPLÉMENTS PAR OBJECTIF
  'complements-fatigue-chronique': px('7513211', 'jpeg', 'Fatigue chronique et récupération'),
  'complements-anxiete':           px('20367722','jpeg', 'Apaisement — anxiété et compléments'),
  'complements-sommeil':           px('920380',  'jpeg', 'Sommeil profond — oreiller et nuit'),
  'complements-immunite':          px('30431320','jpeg', 'Immunité — citron, gingembre'),
  'complements-articulations':     px('20860607','jpeg', 'Articulations — mobilité'),
  'complements-thyroide':          px('13677969','jpeg', 'Thyroïde — algues et iode'),
  'complements-peau':              px('15327096','jpeg', 'Peau et beauté naturelle'),
  'complements-sport':             px('5961849', 'jpeg', 'Sportif et compléments'),
  'complements-cognition':         px('8378726', 'jpeg', 'Cerveau et cognition'),
  'complements-cardio':            px('992816',  'jpeg', 'Cœur et compléments cardio'),

  // NATUROPATHIE JEÛNES
  'jeune-hydrique':       px('5421109', 'jpeg', "Verre d'eau pure — jeûne hydrique"),
  'jeune-intermittent':   px('2950325', 'jpeg', "Horloge et assiette — jeûne intermittent"),
  'jeune-aux-jus':        px('30635728','jpeg', 'Jus verts pressés à froid'),
  'jeune-sec':            px('18555425','jpeg', 'Désert et pureté — jeûne sec'),
  'methode-buchinger':    px('3559899', 'jpeg', 'Bouillon clair — méthode Buchinger'),
  'preparation-jeune':    px('4113884', 'jpeg', 'Légumes et herbes — préparation au jeûne'),
  'sortie-jeune':         px('36511370','jpeg', 'Soupe de légumes — sortie de jeûne'),
  'monodiete-raisin':     px('32753871','jpeg', 'Raisins noirs — monodiète'),
  'monodiete-pomme':      px('34844892','jpeg', 'Pommes rouges — monodiète'),
  'monodiete-riz':        px('8108169', 'jpeg', 'Bol de riz blanc — monodiète'),

  // NATUROPATHIE PURGES
  'huile-de-ricin':            px('10607643','jpeg', 'Graines de ricin et huile'),
  'lavement-colon':            px('11066339','jpeg', 'Eau pure — purification intérieure'),
  'drainage-hepatique-citron': px('39587',  'jpeg', 'Citrons frais — drainage hépatique'),
  'cure-radis-noir':           px('8827285', 'jpeg', 'Radis noirs — cure dépurative'),
  'brossage-peau-sec':         px('7020257', 'jpeg', 'Brosse naturelle pour la peau'),
  'bentonite-psyllium':        px('6104931', 'jpeg', 'Argile et fibres — détox interne'),
  'argile-verte-cataplasme':   px('28868048','jpeg', 'Argile verte — cataplasme'),
  'bain-derivatif':            px('8926131', 'jpeg', 'Bain dérivatif — eau froide'),

  // PLANTES MÉDICINALES
  'achillee-millefeuille': px('27168245','jpeg', 'Achillée millefeuille'),
  aubepine:                px('18458010','jpeg', 'Aubépine et baies rouges'),
  artichaut:               px('27666309','jpeg', 'Artichaut frais'),
  bardane:                 px('37524934','jpeg', 'Racine de bardane'),
  boldo:                   px('34056415','jpeg', 'Feuilles de boldo'),
  'camomille-romaine':     px('18346043','jpeg', 'Camomille romaine en fleurs'),
  'cassis-bourgeons':      px('17412399','jpeg', 'Bourgeons de cassis'),
  'chardon-marie':         px('8090367', 'jpeg', 'Chardon-Marie fleur violette'),
  desmodium:               px('27745125','jpeg', 'Feuilles de Desmodium'),
  echinacee:               px('189386',  'jpeg', 'Échinacée pourpre'),
  eleutherocoque:          px('16122309','jpeg', 'Éleuthérocoque'),
  fenouil:                 px('7511809', 'jpeg', 'Bulbe de fenouil frais'),
  gentiane:                px('32161038','jpeg', 'Gentiane bleue en montagne'),
  gingembre:               px('10112136','jpeg', 'Rhizomes de gingembre'),
  ginkgo:                  px('35090160','jpeg', 'Feuilles de ginkgo biloba dorées'),
  ginseng:                 px('16122465','jpeg', 'Racine de ginseng coréen'),
  harpagophytum:           px('8249059', 'jpeg', 'Harpagophytum — griffe du diable'),
  'lavande-vraie':         px('128883',  'jpeg', 'Champs de lavande violette'),
  melisse:                 px('34056433','jpeg', 'Mélisse — feuilles vertes citronnées'),
  'menthe-poivree':        px('9893128', 'jpeg', 'Menthe poivrée — feuilles fraîches'),
  ortie:                   px('37339649','jpeg', 'Orties — feuilles vertes'),
  passiflore:              px('5309700', 'jpeg', 'Fleur de passiflore exotique'),
  pissenlit:               px('32054127','jpeg', 'Pissenlit en fleur jaune'),
  'prele-des-champs':      px('36333975','jpeg', 'Prêle des champs'),
  'reine-des-pres':        px('20887709','jpeg', 'Reine-des-prés en fleur'),
  rhodiole:                px('36751511','jpeg', 'Rhodiole rosea en fleur rose'),
  romarin:                 px('10098889','jpeg', 'Romarin — brin frais'),
  'sauge-officinale':      px('5852277', 'jpeg', 'Sauge officinale — feuilles'),
  thym:                    px('4198139', 'jpeg', 'Thym frais'),
  valeriane:               px('27240244','jpeg', 'Valériane — racine et fleurs roses'),

  /* ── NATUROPATHIE — ALIMENTATION ── */
  'alimentation-vivante':          px('36346265','jpeg', 'Légumes frais et germinations — alimentation vivante'),
  'graines-germees':               px('11579272','jpeg', 'Graines germées en bocal'),
  'lacto-fermentation':            px('6823261', 'jpeg', 'Choucroute et légumes lacto-fermentés en bocal'),
  'associations-alimentaires':     px('5966432', 'jpeg', 'Assiette équilibrée — groupes alimentaires'),
  'chrono-nutrition-naturopathique': px('19917466','jpeg', 'Petit-déjeuner sain — chrono-nutrition'),
  mastication:                     px('30692940','jpeg', 'Mastication consciente — repas attentif'),
  'hydratation-naturopathique':    px('33743597','jpeg', 'Verre d\'eau pure versée — hydratation'),
  'gluten-laitages':               px('37377279','jpeg', 'Pain et produits laitiers — gluten et laitages'),
  'sucres-additifs-perturbateurs': px('6823676', 'jpeg', 'Sucres et additifs à éviter'),
  'mind-diet-cognition':           px('8286759', 'jpeg', 'Bol méditerranéen — MIND diet et cognition'),
  'meal-timing-circadien-metabolique': px('1194234','jpeg', 'Horloge et assiette — fenêtre alimentaire'),
  'cacao-flavanols-cognition':     px('4113347', 'jpeg', 'Chocolat noir et cacao — flavanols'),

  /* ── NATUROPATHIE — CURES SAISONNIÈRES ── */
  'cure-printemps':                px('37016164','jpeg', 'Fleurs de printemps — cure printanière'),
  'cure-ete':                      px('8093448', 'jpeg', "Fruits d'été colorés — cure estivale"),
  'cure-automne':                  px('13885791','jpeg', "Légumes d'automne et citrouilles"),
  'cure-hiver':                    px('35650189','jpeg', "Thé chaud et neige — cure hivernale"),
  'luminotherapie-depression-saisonniere': px('6940346','jpeg', 'Luminothérapie — lampe du matin'),

  /* ── NATUROPATHIE — HYDROTHÉRAPIE ── */
  'douche-ecossaise':               px('161502',  'jpeg', "Douche écossaise — eau chaude et froide"),
  'bain-chaud-detox':               px('6724375', 'jpeg', "Bain chaud relaxant aux sels"),
  'bains-pieds':                    px('19695967','jpeg', "Bain de pieds aux herbes"),
  'compresse-chaude-foie':          px('5833316', 'jpeg', "Compresse chaude thérapeutique"),
  'hydrotherapie-colon':            px('4499400', 'jpeg', "Eau pure — hydrothérapie du côlon"),
  'exposition-froid-immersion':     px('14815629','jpeg', "Immersion en eau froide"),
  'sauna-finlandais-cardiovasculaire': px('36818206','jpeg', "Sauna finlandais en bois"),

  /* ── NATUROPATHIE — JEÛNES (additionnels) ── */
  'crises-guerison':               px('33340473','jpeg', "Guérison et renouveau"),
  'monodiete-pasteque':            px('3429784', 'jpeg', "Tranches de pastèque fraîche"),
  'monodiete-carotte':             px('4193418', 'jpeg', "Carottes oranges en botte"),
  'jeune-court-vs-long':           px('8573370', 'jpeg', "Sablier — durée du jeûne"),
  'restriction-calorique-autophagie': px('11516492','jpeg', "Cellules et longévité — autophagie"),

  /* ── NATUROPATHIE — PURGES (additionnels) ── */
  'fumeterre-cure-printemps':      px('37268815','jpeg', "Fumeterre — plante de printemps drainante"),
  'drainage-lymphatique-manuel':   px('4599428', 'jpeg', "Drainage lymphatique manuel — massage"),
  'sauna-hammam':                  px('7598363', 'jpeg', "Sauna en bois — séance détoxifiante"),

  /* ── NATUROPATHIE — PLANTES (additionnels — articles sourcés batch 2) ── */
  'millepertuis-hypericum-depression': px('16975103','jpeg', "Millepertuis — Hypericum perforatum"),
  '5-htp-griffonia-serotonine':       px('28200604','jpeg', "Griffonia simplicifolia — source de 5-HTP"),
  'safran-crocus-depression':         px('33654800','jpeg', "Safran — stigmates rouges du Crocus"),

  /* ── NATUROPATHIE — AROMATHÉRAPIE ── */
  'huiles-essentielles-introduction': px('5682924', 'jpeg', "Flacons d'huiles essentielles ambrés"),
  'he-lavande-vraie':                 px('128883',  'jpeg', "Champ de lavande violette"),
  'he-arbre-a-the':                   px('6187185', 'jpeg', "Feuilles de tea tree Melaleuca"),
  'he-eucalyptus-radie':              px('6168330', 'jpeg', "Eucalyptus — branche et feuilles"),
  'he-ravintsara':                    px('4091215', 'jpeg', "Feuilles tropicales — ravintsara"),
  'he-menthe-poivree':                px('9893134', 'jpeg', "Menthe poivrée — feuilles vert vif"),
  'he-helichryse-italienne':          px('10382454','jpeg', "Hélichryse — fleurs jaunes immortelle"),
  'he-niaouli':                       px('36576265','jpeg', "Niaouli — feuilles tropicales"),
  'synergies-aromatherapeutiques':    px('7321710', 'jpeg', "Mélange d'huiles essentielles au compte-gouttes"),
  'silexan-lavande-anxiete':          px('17604908','jpeg', "Capsules de lavande — extrait Silexan"),
  'aromatherapie-post-operatoire':    px('6129491', 'jpeg', "Aromathérapie en soins hospitaliers"),

  /* ── NATUROPATHIE — RESPIRATION & SOMMEIL ── */
  'respiration-abdominale':         px('4534858', 'jpeg', "Respiration abdominale relaxante"),
  'respiration-4-7-8':              px('8795388', 'jpeg', "Respiration consciente en méditation"),
  // 'hygiene-sommeil' refactor — photo dédiée
  'hygiene-sommeil':                px('9911439', 'jpeg', "Chambre sombre et paisible — sommeil"),
  // 'coherence-cardiaque' refactor — photo dédiée
  'coherence-cardiaque':            px('7500709', 'jpeg', "Cohérence cardiaque — respiration"),
  'insomnie-naturelle':             px('6944018', 'jpeg', "Insomnie nocturne"),
  'melatonine-naturelle':           px('32088272','jpeg', "Lune et étoiles — mélatonine"),
  'tryptophane-sommeil':            px('29802845','jpeg', "Aliments riches en tryptophane"),

  /* ── NATUROPATHIE — STRESS & ÉMOTIONS ── */
  'stress-chronique-causes':            px('4226215', 'jpeg', "Femme en burnout — stress chronique"),
  // 'meditation-pleine-conscience' refactor
  'meditation-pleine-conscience':       px('24801656','jpeg', "Méditation de pleine conscience"),
  'fleurs-de-bach':                     px('17579364','jpeg', "Fleurs sauvages — fleurs de Bach"),
  'ecriture-cathartique':               px('159538',  'jpeg', "Stylo et carnet — écriture cathartique"),
  // 'bain-foret-shinrin-yoku' refactor
  'bain-foret-shinrin-yoku':            px('2380827', 'jpeg', "Forêt avec lumière entre les arbres"),
  'yoga-anti-stress':                   px('2529365', 'jpeg', "Posture de yoga en pleine nature"),
  'acceptance-commitment-therapie-act': px('6255599', 'jpeg', "Thérapie ACT — écoute bienveillante"),
  'ecriture-expressive-immunite':       px('6711843', 'jpeg', "Écriture expressive — journal"),

  /* ── ACTUALITÉS — sujets supplémentaires (curcuma, reishi, maca…) ── */
  'curcuma-piperine-biodisponibilite':              px('6220710', 'jpeg', "Curcuma en poudre dorée — pipérine"),
  'reishi-ganoderma-immunite-cancer':               px('28430922','jpeg', "Reishi — Ganoderma lucidum"),
  'maca-lepidium-meyenii-fonction-sexuelle':        px('27392066','jpeg', "Maca — Lepidium meyenii andin"),
  'astragale-membranaceus-immunite':                px('16122304','jpeg', "Astragale — racine séchée"),
  'bacopa-monnieri-memoire-cognition':              px('32761885','jpeg', "Bacopa monnieri — Brahmi"),
  'regime-cetogene-epilepsie-pediatrique':          px('1305063', 'jpeg', "Régime cétogène — avocat et œufs"),
  'nmn-nad-anti-vieillissement':                    px('29107595','jpeg', "NMN / NAD+ — anti-vieillissement"),

  /* ── ACTUALITÉS — VITAMINES (réutilise les photos par-thème) ── */
  'vitamine-c-non-toxicite-limites':                  px('7676963', 'jpeg', 'Agrumes et kiwi — vitamine C'),
  'vitamine-d-supplementation-infections-respiratoires': px('13849252','jpeg', 'Lumière du soleil — vitamine D'),
  'vitamine-b12-vegetariens-deficit':                 px('20571455','jpeg', 'Saumon et œufs — vitamine B12'),
  'folates-methylfolate-depression':                  px('7456546', 'jpeg', 'Légumes verts feuillus — folates B9'),
  'vitamine-k2-arteres-os':                           px('30874699','jpeg', 'Aliments fermentés et fromage — vitamine K2'),
  'vitamine-a-toxicite-retinol':                      px('24031498','jpeg', 'Carottes oranges — vitamine A'),
  'vitamine-e-alpha-gamma-tocopherol':                px('7420735', 'jpeg', 'Noix et graines — vitamine E'),
  'vitamine-b6-neuropathie-dose-elevee':              px('36021103','jpeg', 'Bananes et légumineuses — vitamine B6'),
  'niacine-vitamine-b3-flush-lipides':                px('8112380', 'jpeg', 'Viande et protéines — niacine B3'),
  'thiamine-wernicke-alcool':                         px('5114289', 'jpeg', 'Céréales complètes — thiamine B1'),

  /* ── ACTUALITÉS — MINÉRAUX ── */
  'magnesium-formes-biodisponibilite':                px('8524288', 'jpeg', 'Chocolat noir et amandes — magnésium'),
  'zinc-immunite-infections-respiratoires':           px('7772003', 'jpeg', 'Graines de courge — zinc'),
  'fer-bisglycinate-vs-sulfate':                      px('6824475', 'jpeg', 'Épinards et lentilles — fer'),
  'iode-thyroide-carence':                            px('13677969','jpeg', 'Algues marines — iode'),
  'selenium-hashimoto-thyroidite':                    px('25067701','jpeg', 'Noix du Brésil — sélénium'),
  'calcium-supplementation-cardiovasculaire-controverse': px('6585008','jpeg','Produits laitiers et brocoli — calcium'),
  'potassium-tension-arterielle-meta-analyses':       px('108059',  'jpeg', 'Bananes et avocat — potassium'),
  'manganese-neurotoxicite-exposition':               px('7421448', 'jpeg', 'Noix et céréales — manganèse'),
  'cuivre-zinc-equilibre-ratio':                      px('18606644','jpeg', 'Fruits de mer — cuivre'),
  'chrome-picolinate-diabete-type-2':                 px('7676045', 'jpeg', 'Brocoli — chrome'),

  /* ── ACTUALITÉS — ADAPTOGÈNES & PLANTES (réutilise quand possible) ── */
  'ashwagandha-stress-cortisol':                      px('10902685','jpeg', 'Racine d\'ashwagandha'),
  'rhodiole-fatigue-performance-mentale':             px('19499716','jpeg', 'Rhodiola en milieu rocheux'),
  'ginseng-fatigue-meta-analyses':                    px('16122465','jpeg', 'Racine de ginseng'),
  'cordyceps-performance-sportive':                   px('13383491','jpeg', 'Champignons médicinaux'),
  'ginkgo-biloba-cognition-dementia':                 px('35090160','jpeg', 'Feuilles de ginkgo dorées'),

  /* ── ACTUALITÉS — MICROBIOTE & NUTRITION ── */
  'probiotiques-axe-intestin-cerveau':                px('6823321', 'jpeg', 'Microbiote — yaourt'),
  'omega-3-epa-dha-cardiovasculaire':                 px('3029526', 'jpeg', 'Saumon riche en oméga-3'),
  'jeune-intermittent-autophagie-metabolisme':        px('2950325', 'jpeg', 'Horloge et assiette — jeûne intermittent'),
  'polyphenols-regime-mediterraneen-cardiovasculaire': px('6004723','jpeg', 'Fruits rouges — polyphénols'),
  'fibres-prebiotiques-acides-gras-chaine-courte':    px('33654488','jpeg', 'Fibres prébiotiques — artichaut'),
  'probiotiques-prevention-diarrhee-antibiotiques':   px('6823321', 'jpeg', 'Microbiote — yaourt'),
  'resveratrol-sirtuines-vieillissement':             px('7657243', 'jpeg', 'Raisins rouges — resvératrol'),
  'coq10-myopathie-statines':                         px('992816',  'jpeg', 'Cœur — CoQ10'),
};

/**
 * Récupère la photo d'un article.
 * Priorité : slug → catégorie → fallback générique.
 */
export function getArticleImage(slug: string, category: string): PhotoMeta {
  if (ARTICLE_PHOTOS[slug]) return ARTICLE_PHOTOS[slug];
  if (CATEGORY_PHOTOS[category]) return CATEGORY_PHOTOS[category];
  const cat = CATEGORIES.find((c) => c.slug === category);
  return {
    src: 'https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    alt: cat ? `${cat.nom} — alimentation et bien-être` : 'Naturopathie et nutrithérapie',
  };
}

/**
 * URL d'image Open Graph pour partage social.
 */
export function getArticleOgImage(slug: string, category: string): string {
  const params = new URLSearchParams({ cat: category, slug });
  return `/api/og?${params.toString()}`;
}
