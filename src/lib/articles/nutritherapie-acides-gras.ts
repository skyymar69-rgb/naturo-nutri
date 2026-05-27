import type { Article } from '../types';

const a = (slug: string, title: string, excerpt: string, intro: string, sections: { heading: string; body: string }[], tags: string[]): Article => ({
  slug, domain: 'nutritherapie', category: 'acides-gras', title, excerpt, readingTime: 5, intro, sections, tags,
});

export const NUTRI_ACIDES_GRAS: Article[] = [
  a('omega-3-fondamentaux',
    "Oméga-3 : EPA, DHA, ALA — les bases",
    "Différencier les trois oméga-3, leurs rôles, leurs sources. Pourquoi le ratio oméga-6/oméga-3 est crucial.",
    "Les oméga-3 sont une famille d'acides gras polyinsaturés essentiels (le corps ne sait pas les fabriquer). Trois principaux : ALA (acide alpha-linolénique, végétal), EPA (acide eicosapentaénoïque), DHA (acide docosahexaénoïque). Anti-inflammatoires, neuroprotecteurs, cardio-protecteurs, ils sont massivement déficitaires dans l'alimentation moderne. Une supplémentation bien menée transforme l'inflammation et l'humeur.",
    [
      { heading: "Les trois oméga-3 et leurs rôles", body: "ALA (huile de lin, cameline, noix) : précurseur, faiblement converti en EPA/DHA (5-10% chez l'homme, 0-4% chez la femme). Doit donc être complété par EPA/DHA directs. EPA : anti-inflammatoire majeur, agit sur l'humeur, soutient cœur et vaisseaux. DHA : composant structural des membranes neuronales et de la rétine, essentiel au développement fœtal, à la mémoire, à la vision." },
      { heading: "Le ratio oméga-6/oméga-3 catastrophique", body: "Ratio physiologique idéal : 1/1 à 4/1 (oméga-6/oméga-3). Ratio alimentation moderne : 15/1 à 30/1. Cause : huiles de tournesol, maïs, soja (oméga-6), aliments transformés, élevages aux céréales. Conséquence : inflammation chronique généralisée. Rétablir ce ratio par baisse oméga-6 ET augmentation oméga-3 est un levier de santé majeur." },
      { heading: "Sources et doses", body: "Petits poissons gras (sardine, maquereau, hareng, anchois) 2-3 fois par semaine : meilleure source nutritionnelle. Supplémentation : 1000 à 2000 mg EPA+DHA par jour, forme triglycérides (TG, supérieure aux esters éthyliques EE). Toujours avec antioxydants (vit E naturelle) — sinon oxydation contre-productive. Certification IFOS 5 étoiles = qualité maximale." },
      { heading: "Indications principales", body: "Inflammation chronique. Maladies cardiovasculaires (prévention et accompagnement). Dépression, anxiété (EPA particulièrement). Concentration, mémoire (DHA). TDAH. Sécheresse cutanée, eczéma. Maladies inflammatoires articulaires. Grossesse et allaitement (DHA pour le développement neural fœtal). Cures de 3-6 mois minimum." },
      { heading: "Précautions", body: "Anticoagulants : prudence (effet fluidifiant). Avant chirurgie : arrêt 7-10 jours. Allergie poisson : opter pour huile d'algue (Schizochytrium). Qualité : choisir produits testés en métaux lourds et PCBs. Stockage frigo après ouverture." },
    ],
    ['oméga-3', 'EPA', 'DHA', 'inflammation']
  ),
  a('omega-3-vegetaux',
    "Oméga-3 végétaux : huiles et graines",
    "Huile de lin, cameline, chanvre, périlla, sacha inchi. Conservation, dosage, intérêt pour les vegans.",
    "Pour les vegans et ceux qui préfèrent les sources végétales, les huiles riches en ALA (acide alpha-linolénique) sont la voie. La conversion ALA → EPA/DHA est faible mais existe ; couplée à une alimentation riche, elle peut suffire. Les huiles concernées sont fragiles : conservation et utilisation à froid impérativement.",
    [
      { heading: "Les meilleures huiles oméga-3 végétales", body: "Huile de lin : 55% ALA (la plus riche). Très fragile, se rancit rapidement. Achat petites bouteilles, frigo, dates courtes. Huile de cameline : 38% ALA + plus stable que le lin. Goût agréable. Huile de chanvre : 18% ALA + ratio idéal oméga-6/3 (3:1). Huile de périlla : 60% ALA (au Japon). Huile de sacha inchi : 50% ALA + protéines. Huile de noix : 13% ALA, plus stable." },
      { heading: "Sources solides", body: "Graines de lin moulues : 2 c. à soupe/jour fournissent l'AJR en ALA. Moudre juste avant consommation (oxydation rapide). Graines de chia : alternative stable, à hydrater avant ingestion. Graines de chanvre décortiquées. Noix de Grenoble (10 g = AJR). Conservation : graines entières au sec, fraîches une fois moulues." },
      { heading: "Pour les vegans : stratégie complète", body: "1 cuillère à soupe d'huile de lin ou cameline par jour (ALA). + supplémentation huile d'algue Schizochytrium (200-400 mg DHA + EPA — la seule source vegane d'EPA et DHA). + 30 g d'oléagineux variés. Vit B12 (méthylcobalamine) obligatoire. Vit D3 (lichen, vegan-friendly). Avec cela, profil oméga-3 satisfaisant." },
      { heading: "Précautions de conservation", body: "Les huiles oméga-3 s'oxydent VITE. Frigo après ouverture. Bouteille opaque ou en verre ambré. Petites quantités (250 ml). Utilisation à FROID uniquement (jamais cuisson, jamais friture). Mention 'pression à froid' et 'biologique' obligatoire. Goût rance = poubelle. Une huile oxydée est PIRE que pas d'oméga-3 du tout." },
    ],
    ['ALA', 'lin', 'cameline', 'vegan']
  ),
  a('huile-cco-mct',
    "Huile de coco et huile MCT : carburant cétogène",
    "Acides gras à chaînes moyennes. Énergie cérébrale rapide, soutien cétogène, antifongique. Indications et limites.",
    "L'huile de coco (60% MCT) et les huiles MCT purifiées (Triglycérides à Chaînes Moyennes : C8, C10) ont une particularité métabolique unique : elles sont directement transformées en énergie ou en corps cétoniques par le foie, sans nécessiter de transporteur. Carburant rapide pour le cerveau, soutien des régimes cétogènes, action antifongique : un produit polyvalent.",
    [
      { heading: "MCT vs huile de coco classique", body: "Huile de coco entière : ~60% MCT (acides lauriques, capriques, capryliques). Reste en acides gras à longues chaînes. Goût neutre à coco. Huile MCT pure : 100% MCT, surtout C8 (caprylique) et C10 (caprique), les plus rapidement convertis en énergie. Plus concentrée, plus chère, sans goût. Pour usage cétogène, la MCT pure est plus efficace." },
      { heading: "Indications", body: "Régime cétogène (entrer en cétose plus vite). Énergie cérébrale en jeûne intermittent. Performance cognitive (les MCT C8 sont précurseurs de cétones cérébrales). Maladie d'Alzheimer débutante (recherche prometteuse). Candidose intestinale (acide caprylique antifongique). Sport d'endurance. Perte de poids modérée." },
      { heading: "Dosage et utilisation", body: "Démarrer doucement : 1 c. à café par jour, augmenter progressivement jusqu'à 1-2 c. à soupe. Démarrage trop rapide = troubles digestifs (diarrhée). Usages : dans café matinal (\"bulletproof coffee\"), salades, smoothies. NE PAS cuire à haute température (perte des bénéfices). Cuisson à feu doux possible." },
      { heading: "Précautions", body: "Pas en cas de stéatose hépatique aiguë (avis médical). Maladies hépatiques sévères : prudence. Diarrhée si dose excessive. À conserver à température ambiante (huile de coco se solidifie à <24°C — normal)." },
    ],
    ['MCT', 'coco', 'cétogène']
  ),
  a('huiles-cuisson',
    "Bien choisir ses huiles de cuisson",
    "Olive, coco, ghee, avocat pour la cuisson. Lin, chanvre, noix pour le froid. Tableau de stabilité thermique.",
    "Toutes les huiles ne supportent pas la cuisson. Une huile dégradée par la chaleur produit des composés toxiques (HNE, acroléine, aldéhydes oxydés). Choisir la bonne huile pour le bon usage est crucial — particulièrement pour les huiles dites 'santé' qui peuvent devenir délétères mal utilisées.",
    [
      { heading: "Hiérarchie de stabilité thermique", body: "Point de fumée et stabilité oxydative déterminent la résistance à la cuisson. Très stables (cuisson haute) : ghee (250°C), huile de coco (200°C), huile d'avocat raffinée (270°C). Moyennement stables (cuisson moyenne) : huile d'olive vierge extra (190°C — peut surprendre, elle est très stable grâce aux polyphénols), huile d'arachide. Instables (cru uniquement) : lin (107°C), chanvre, noix, cameline, périlla, sacha inchi. Ne JAMAIS cuire ces dernières." },
      { heading: "Les bonnes huiles pour la cuisson", body: "Ghee (beurre clarifié) : stable, savoureux, bénéfice ayurvédique. Idéal pour saisir, sauter. Huile de coco : stable, antibactérienne, utile pour wok et cuisine asiatique. Huile d'olive vierge extra : pour cuisson modérée (≤180°C), idéale pour la cuisine méditerranéenne. Riche en polyphénols antioxydants. Huile d'avocat (raffinée) : haute température, neutre." },
      { heading: "Les huiles à utiliser à froid uniquement", body: "Huile de lin, cameline, chanvre, noix, sacha inchi, périlla : à utiliser en assaisonnement, dans des smoothies froids, sur des salades. Riches en oméga-3 mais détruites par la chaleur. Stockage frigo après ouverture, bouteille ambrée." },
      { heading: "Huiles à éviter", body: "Tournesol oléique : massivement oméga-6, déséquilibre le ratio. Maïs : idem. Colza raffinée industrielle : raffinage agressif, perte des qualités. Soja : largement OGM hors bio, oméga-6. Palme : impact écologique + cuisson industrielle dégradante. Margarines : huiles raffinées + additifs. Privilégier toujours 'première pression à froid', 'extra vierge', 'biologique'." },
    ],
    ['huiles', 'cuisson', 'stabilité']
  ),
  a('huile-perilla',
    "Huile de périlla : star japonaise du oméga-3",
    "60% d'ALA, la plus riche en oméga-3 végétaux. Petite production, mais excellence nutritionnelle.",
    "L'huile de périlla (Perilla frutescens) est traditionnellement utilisée au Japon depuis des siècles. Avec 60% d'ALA, c'est la plus riche en oméga-3 des huiles végétales communément disponibles. Sa saveur subtile et sa relative stabilité en font une excellente alternative ou complément à l'huile de lin.",
    [
      { heading: "Composition unique", body: "60% acide alpha-linolénique (oméga-3). 14% acide linoléique (oméga-6). Ratio oméga-3/oméga-6 = 4:1 (exceptionnel). Antioxydants : tocophérols, acide rosmarinique. Saveur douce, herbacée, légèrement noisette. Plus stable que l'huile de lin (moins fragile à l'oxydation)." },
      { heading: "Indications", body: "Apport en ALA végétal (alternative ou complément à l'huile de lin). Allergie aux poissons. Régime végétal. Soutien anti-inflammatoire. Soutien cardiovasculaire. Sécheresse cutanée. Saveur agréable pour assaisonnement quotidien." },
      { heading: "Utilisation", body: "1 cuillère à soupe par jour, à froid. Sur salades, légumes vapeur, dans yaourts ou smoothies. Ne JAMAIS chauffer (oxydation rapide). Conservation : frigo après ouverture, bouteille opaque. Date courte (3 mois max après ouverture)." },
      { heading: "Sources et qualité", body: "Privilégier huile de périlla biologique, pression à froid, certifiée. Petites bouteilles (250 ml) pour qualité préservée. Marques spécialisées en huiles santé. Plus chère que le lin (5-15€ les 250 ml) mais qualité justifiée." },
    ],
    ['périlla', 'ALA', 'vegan']
  ),
  a('ghee-beurre-clarifie',
    "Le ghee : beurre purifié des yogis",
    "Beurre clarifié sans caséine ni lactose. Utilisable en cuisson haute température. Recette maison facile.",
    "Le ghee est un beurre purifié, débarrassé de l'eau, des protéines (caséine) et du lactose. Pilier de l'ayurvéda et de la cuisine indienne, c'est l'une des meilleures matières grasses pour la cuisson — stable jusqu'à 250°C, sans les composants laitiers problématiques. Facile à fabriquer chez soi.",
    [
      { heading: "Pourquoi le ghee plutôt que le beurre", body: "Le beurre brûle dès 130°C (la caséine se carbonise). Le ghee, sans caséine, supporte 250°C — utilisable pour saisir, frire, sauter. Sans lactose : tolérable par les intolérants. Sans caséine : tolérable par les sensibles aux laitages. Conservation à température ambiante plusieurs mois (sans eau = pas de fermentation)." },
      { heading: "Bienfaits du ghee de qualité", body: "Vitamines liposolubles A, D, E, K2 (si beurre de vache au pâturage). Butyrate (acide gras à chaîne courte) : nourrit les colonocytes, anti-inflammatoire intestinal. Acide linoléique conjugué (CLA) : effet métabolique. En ayurvéda : considéré comme l'aliment le plus 'sattvique' (élévateur de conscience)." },
      { heading: "Recette maison", body: "500 g de beurre bio de qualité (pâturage idéal). Faire fondre à feu très doux dans une casserole. Une fois fondu, laisser frémir doucement 20-30 minutes. L'eau s'évapore (bouillonnement). Les protéines remontent en mousse (écumer) ou se déposent au fond (filtrer). Quand le liquide est doré clair et que les protéines au fond sont brunes : couper. Filtrer dans un linge fin ou filtre café. Stocker en bocal en verre, température ambiante ou frigo." },
      { heading: "Usages", body: "Cuisson à haute température (sauté, poêlé, saisi). En finition sur légumes vapeur. Dans porridge du matin. Pour la confection de currys. Dans le café (\"ghee coffee\"). En cosmétique (massage ayurvédique). Une cuillère à café par jour est une source naturelle de butyrate." },
    ],
    ['ghee', 'beurre clarifié', 'ayurvéda']
  ),
];
