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
