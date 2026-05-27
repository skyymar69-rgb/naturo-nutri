import type { Article } from '../types';

// Format plante : 3-4 sections concises, propriétés, posologie, contre-indications
const plante = (
  slug: string,
  title: string,
  excerpt: string,
  intro: string,
  proprietes: string,
  usages: string,
  posologie: string,
  contre_indications: string[],
  tags: string[]
): Article => ({
  slug, domain: 'naturopathie', category: 'plantes',
  title, excerpt, readingTime: 4, intro,
  sections: [
    { heading: 'Propriétés thérapeutiques', body: proprietes },
    { heading: 'Indications principales', body: usages },
    { heading: 'Modes d\'utilisation et posologie', body: posologie },
  ],
  contre_indications, tags,
});

export const NATURO_PLANTES: Article[] = [
  plante(
    'achillee-millefeuille',
    'Achillée millefeuille',
    "Plante des femmes par excellence : régulatrice du cycle menstruel, anti-hémorragique, digestive.",
    "L'achillée millefeuille (Achillea millefolium) est l'une des plantes les plus polyvalentes de la pharmacopée européenne. Connue depuis l'Antiquité (Achille soignait ses blessures avec, d'où son nom), elle est aujourd'hui utilisée pour ses propriétés hémostatiques, digestives, et surtout régulatrices du cycle menstruel féminin.",
    "Anti-hémorragique léger, hémostatique. Cholérétique. Antispasmodique. Régulatrice du cycle menstruel (oestrogen-like doux). Vulnéraire (cicatrisante). Tonique amer digestif. Anti-inflammatoire. Riche en flavonoïdes, en azulènes (anti-inflammatoires), en lactones sesquiterpéniques.",
    "Règles douloureuses, irrégulières, peu abondantes. Pré-ménopause (bouffées de chaleur). Digestion difficile, ballonnements. Plaies superficielles (cataplasme). Hémorroïdes (bain de siège). Foie paresseux.",
    "Infusion : 1 c. à café de plante sèche pour 250 ml d'eau bouillante, 10 min. 2-3 tasses/jour avant les règles, 1 semaine. Teinture mère : 25 gouttes 3 fois/jour. Application externe : décoction concentrée en compresse.",
    ["Grossesse (utérotonique)", "Allergie aux Astéracées", "Photosensibilisante à forte dose"],
    ['achillée', 'cycle menstruel', 'cicatrisation']
  ),
  plante(
    'aubepine',
    'Aubépine',
    "La plante du cœur, à la fois physique et émotionnel. Régule rythme, tension, anxiété cardiaque.",
    "L'aubépine (Crataegus monogyna) est la plante du cœur par excellence. Ses fleurs et ses baies contiennent des proanthocyanidines (OPC) et des flavonoïdes qui agissent en douceur sur le muscle cardiaque, le rythme et la tension artérielle. Elle est aussi un anxiolytique léger, utile pour les chocs émotionnels et les insomnies anxieuses.",
    "Cardiotonique douce. Régulatrice du rythme cardiaque. Hypotensive légère. Vasodilatatrice coronarienne. Anxiolytique légère. Sédative. Inotrope positive (renforce la contraction cardiaque sans accélérer le rythme).",
    "Palpitations émotionnelles, tachycardie nerveuse. Hypertension légère. Insuffisance cardiaque légère (en complément). Anxiété, nervosité. Insomnies, sommeil léger. Convalescence post-infarctus.",
    "Infusion : 1 c. à soupe de sommités fleuries pour 250 ml d'eau bouillante, 10 min. 2-3 tasses/jour, cure de 21 jours. Teinture mère : 30 gouttes 3 fois/jour. Extrait fluide standardisé : selon prescription.",
    ["Sous traitement cardiaque : avis médical (potentialisation possible)", "Pas d'usage chronique sans suivi"],
    ['aubépine', 'cœur', 'tension', 'anxiété']
  ),
  plante(
    'artichaut',
    'Artichaut',
    "Le grand dépuratif hépato-biliaire. Stimule la production et l'évacuation de la bile.",
    "L'artichaut (Cynara scolymus) est l'un des grands draineurs hépatiques. La cynarine, son principe actif phare, stimule la production de bile (cholérétique) et son évacuation (cholagogue). Idéal pour les digestions lourdes, les foies surchargés, les troubles dyspeptiques.",
    "Cholérétique (production de bile). Cholagogue (évacuation). Hépatoprotecteur. Hypocholestérolémiant léger. Diurétique. Régénérateur hépatique (effet sur la régénération hépatocytaire).",
    "Foie surchargé, lourdeurs après les repas. Hypercholestérolémie modérée. Mauvaise digestion des graisses. Constipation par insuffisance biliaire. Cure de drainage de printemps.",
    "Infusion de feuilles (amer prononcé) : 1 c. à café pour 250 ml, 10 min, avant les repas. Jus de feuilles fraîches : 30 ml/jour. Comprimés ou ampoules : selon dosage. Manger des artichauts entiers : bénéfice nutritionnel sans goût amer.",
    ["Calculs biliaires obstructifs", "Allergie aux Astéracées", "Allaitement (peut réduire la lactation)"],
    ['artichaut', 'foie', 'bile', 'cholestérol']
  ),
  plante(
    'bardane',
    'Bardane',
    "La plante de la peau : eczéma, acné, psoriasis, furoncles. Détoxifiante puissante.",
    "La bardane (Arctium lappa), avec sa grande racine pivotante, est l'une des plantes dépuratives les plus puissantes pour la peau. Elle agit à la fois sur le foie, les reins et la lymphe, ce qui en fait l'alliée n°1 des problèmes cutanés chroniques : eczéma, acné, psoriasis, furoncles à répétition.",
    "Dépurative générale. Diurétique. Sudorifique (drainage par la sueur). Antibactérienne. Antifongique. Hypoglycémiante légère. Régulatrice du sébum (action sur les troubles séborrhéiques). Riche en inuline, mucilages, polyènes antifongiques.",
    "Acné juvénile et adulte (cure de 2-3 mois). Eczéma sec ou suintant. Psoriasis. Furoncles, abcès récidivants. Diabète de type 2 (en accompagnement). Calculs urinaires.",
    "Décoction de racine fraîche : 30 g pour 1 L d'eau, faire bouillir 15 min, infuser 10 min. 2-3 tasses/jour. Cure de 6 semaines minimum. Teinture mère : 50 gouttes 3 fois/jour. En cataplasme sur les furoncles.",
    ["Allergie aux Astéracées", "Grossesse", "Hypoglycémiants : prudence"],
    ['bardane', 'peau', 'acné', 'eczéma']
  ),
  plante(
    'boldo',
    'Boldo',
    "Le grand cholagogue : draine la vésicule biliaire avec efficacité. Cure de 21 jours.",
    "Le boldo (Peumus boldus) est un arbre du Chili dont les feuilles sont utilisées depuis des siècles pour les troubles digestifs. C'est un cholagogue puissant, particulièrement adapté aux vésicules biliaires paresseuses, aux constipations par insuffisance biliaire, aux lourdeurs après les repas gras.",
    "Cholagogue marqué. Cholérétique modéré. Antispasmodique digestif. Légèrement diurétique. Hépatoprotecteur léger. Contient de la boldine, alcaloïde caractéristique. À ne pas confondre avec l'épicéa local.",
    "Vésicule biliaire paresseuse. Migraine hépatique. Constipation par insuffisance biliaire. Digestion lente. Cures de drainage. Souvent associé à artichaut et radis noir.",
    "Infusion : 1 c. à café pour 250 ml, 10 min. 1-2 tasses/jour APRÈS les repas, 21 jours. Teinture mère : 25 gouttes après les repas. Toujours en cures discontinues (jamais en continu).",
    ["Calculs biliaires obstructifs", "Pathologies hépatiques sévères", "Grossesse, allaitement", "Pas plus de 4 semaines en continu"],
    ['boldo', 'foie', 'vésicule biliaire']
  ),
  plante(
    'camomille-romaine',
    'Camomille romaine',
    "Anti-stress digestif, digestion nerveuse, anxiété infantile. La plus douce des plantes apaisantes.",
    "La camomille romaine (Chamaemelum nobile) est l'une des plantes les plus douces de la pharmacopée. Sa réputation est ancienne et solidement établie : elle apaise le système nerveux et la sphère digestive. Idéale pour les enfants, les terrains nerveux fragiles, les digestions tendues.",
    "Antispasmodique digestif. Carminative (anti-flatulences). Sédative douce. Anxiolytique légère. Anti-inflammatoire. Antalgique léger. Vulnéraire (cicatrisante). Très bien tolérée par tous les âges.",
    "Coliques du nourrisson. Anxiété infantile, peurs nocturnes. Migraines digestives. Côlon irritable, ballonnements. Insomnie légère. Gencives douloureuses (gargarismes). Conjonctivite (compresses tièdes).",
    "Infusion : 1 c. à café de fleurs pour 250 ml, 5 min. 2-3 tasses/jour. Pour bébé : 1 c. à café pour 500 ml, 1-2 c. à soupe dans le biberon. Huile essentielle : olfactive uniquement chez l'enfant.",
    ["Allergie aux Astéracées (rare)"],
    ['camomille', 'enfant', 'digestion', 'sommeil']
  ),
  plante(
    'cassis-bourgeons',
    'Cassis (bourgeons)',
    "Le 'cortisone-like' naturel. Anti-inflammatoire majeur en gemmothérapie.",
    "Les bourgeons de cassis (Ribes nigrum), utilisés en gemmothérapie (macérât glycériné de bourgeons frais), constituent l'un des anti-inflammatoires naturels les plus puissants. Leur action ressemble à celle de la cortisone, sans les effets secondaires : ils stimulent le cortex surrénal et modulent l'inflammation.",
    "Anti-inflammatoire général. Stimulant cortico-surrénalien. Antiallergique. Anti-arthritique. Anti-asthmatique léger. Diurétique. Tonique des glandes surrénales. Action documentée sur l'inflammation chronique.",
    "Arthrose, polyarthrite, tendinites. Allergies saisonnières (pollen, acariens). Fatigue chronique surrénalienne. Asthme (en complément). États inflammatoires chroniques. Récupération sportive.",
    "Macérât glycériné 1D : 50 à 100 gouttes/jour, en 1 ou 2 prises, idéalement le matin. Cure de 3 semaines, à renouveler. Effet souvent visible en 7-15 jours sur l'inflammation.",
    ["Hypertension non contrôlée", "Anticoagulants : prudence"],
    ['cassis', 'gemmothérapie', 'anti-inflammatoire', 'surrénales']
  ),
  plante(
    'chardon-marie',
    'Chardon-Marie',
    "Le protecteur hépatique de référence. Régénère les cellules du foie.",
    "Le chardon-Marie (Silybum marianum) contient un complexe unique de flavonolignanes appelé silymarine (composée de silybine, silidiamine et silichristine). Ces molécules ont une action hépatoprotectrice et régénératrice unique au monde végétal : elles protègent les cellules hépatiques des toxines et stimulent leur régénération. C'est la plante de référence pour les pathologies hépatiques chroniques.",
    "Hépatoprotecteur majeur. Régénérateur des cellules hépatiques. Antioxydant hépatique. Stabilisateur des membranes cellulaires. Cholérétique léger. Hypoglycémiant léger. Hypolipémiant léger. Antidote partiel à l'intoxication par les champignons (amanite phalloïde).",
    "Hépatite chronique (B, C). Cirrhose (en accompagnement). Stéatose hépatique non alcoolique. Foie surchargé. Cure détox. Prévention pendant chimiothérapie. Diabète de type 2 (en complément).",
    "Extrait standardisé à 80% de silymarine : 150 à 300 mg, 2 à 3 fois/jour. Cure de 3 mois minimum. Décoction : 1 c. à café de fruits broyés pour 250 ml, faire bouillir 5 min. 2 tasses/jour. Teinture mère : 30 gouttes 3 fois/jour.",
    ["Allergie aux Astéracées", "Grossesse : par précaution"],
    ['chardon-marie', 'silymarine', 'foie', 'hépatoprotecteur']
  ),
  plante(
    'desmodium',
    'Desmodium',
    "Plante africaine de référence en hépatologie. Protection majeure du foie.",
    "Le Desmodium adscendens, plante grimpante d'Afrique tropicale, est l'un des hépatoprotecteurs les plus puissants connus. Utilisé traditionnellement contre l'asthme et les hépatites, il est aujourd'hui prescrit en France pour accompagner les chimiothérapies, protéger le foie des médicaments, ou traiter les hépatites virales.",
    "Hépatoprotecteur exceptionnel. Antispasmodique (notamment des bronches). Anti-allergique. Anti-asthmatique. Cytoprotecteur. Action documentée sur la régénération hépatique.",
    "Hépatite virale (B, C). Hépatites médicamenteuses. Accompagnement chimiothérapie. Stéatose hépatique. Asthme allergique. Prévention chez forts consommateurs d'alcool. Cures détox profondes.",
    "Décoction de tiges feuillées : 10 g pour 1 L d'eau, faire bouillir 15 min. 1 L réparti sur la journée. Cure de 21 jours. Extrait fluide : 5 ml 2-3 fois/jour. Extrait sec : selon dosage du fabricant.",
    ["Grossesse, allaitement (par précaution)"],
    ['desmodium', 'foie', 'hépatoprotecteur', 'chimiothérapie']
  ),
  plante(
    'echinacee',
    'Échinacée',
    "L'immunostimulante de référence en cure courte. Active les défenses dès le premier symptôme.",
    "L'échinacée (Echinacea purpurea, angustifolia, pallida) est la plante immunostimulante la plus utilisée au monde. Originaire d'Amérique du Nord, elle stimule l'activité des macrophages, des lymphocytes T et NK. Indication phare : prise en cure courte aux premiers signes d'infection ORL, elle accélère la guérison et réduit la durée des symptômes.",
    "Immunostimulante. Anti-inflammatoire. Antibactérienne. Antivirale. Antifongique. Cicatrisante. Stimule les phagocytes. Augmente la production d'interféron.",
    "Premiers signes d'infection ORL (rhume, angine, grippe). Cure préventive automnale (10 jours sur 30). Plaies, ulcères cutanés (usage externe). Infections urinaires récidivantes (cure courte). NE PAS prendre en continu plus de 10 jours.",
    "Teinture mère : 50 gouttes 3 à 5 fois par jour aux premiers symptômes, pendant 5-7 jours. Extrait standardisé : selon dosage. Cure préventive : 10 jours par mois, pas plus.",
    ["Maladies auto-immunes (SEP, lupus, polyarthrite)", "Greffe d'organe sous immunosuppresseurs", "Pas de cure continue > 10 jours"],
    ['échinacée', 'immunité', 'rhume', 'infection']
  ),
  plante(
    'eleutherocoque',
    'Éleuthérocoque (Ginseng sibérien)',
    "Adaptogène majeur, tonique général sans excitation. Convient à tous, y compris hypertendus.",
    "L'éleuthérocoque (Eleutherococcus senticosus), aussi appelé ginseng sibérien, n'est pas un vrai ginseng botaniquement mais partage ses propriétés adaptogènes. Plus doux que le ginseng asiatique, il convient particulièrement aux personnes hypertendues, anxieuses, ou aux profils nerveux. Tonique général sans effet excitant.",
    "Adaptogène. Tonique général. Immunostimulant doux. Anti-fatigue. Hypoglycémiant léger. Améliore les performances cognitives et physiques. Augmente la résistance au stress.",
    "Fatigue chronique. Convalescence. Surmenage intellectuel. Préparation à un examen ou un événement sportif. Burnout en récupération. Hypertendus (contrairement au ginseng asiatique). Personnes âgées en perte de tonus.",
    "Extrait sec standardisé : 200 à 400 mg matin et midi (pas le soir). Cure de 6 à 12 semaines, pause d'1 mois, reprise. Teinture mère : 30 gouttes matin et midi. JAMAIS le soir (peut perturber le sommeil).",
    ["Hypertension sévère non contrôlée", "Insomnie sévère", "Grossesse, allaitement", "Pas en continu plus de 3 mois"],
    ['éleuthérocoque', 'adaptogène', 'fatigue', 'tonique']
  ),
  plante(
    'fenouil',
    'Fenouil',
    "Digestion, allaitement, ballonnements. La plante carminative la plus douce.",
    "Le fenouil (Foeniculum vulgare), connu depuis l'Antiquité, est utilisé pour ses graines aromatiques riches en huile essentielle. C'est l'un des grands carminatifs (anti-gaz) de la pharmacopée européenne. Particulièrement précieux pour les nourrissons (coliques) et les femmes allaitantes (galactogène).",
    "Carminative (anti-flatulences). Digestive. Antispasmodique. Galactogène (stimule la lactation). Légèrement oestrogénique. Mucolytique léger (toux grasse). Diurétique léger.",
    "Coliques du nourrisson, ballonnements infantiles. Aérophagie, gaz. Indigestion. Insuffisance de lait chez la femme allaitante. Toux grasse en complément. Spasmes digestifs.",
    "Infusion de graines : 1 c. à café pour 250 ml d'eau bouillante, 10 min. 2-3 tasses/jour, après les repas. Pour bébé : 1 c. à café pour 500 ml, refroidir, en biberon ou cuillère.",
    ["Cancer hormono-dépendant (effet oestrogénique)", "Allergie aux Apiacées", "Modération en cas de grossesse"],
    ['fenouil', 'digestion', 'bébé', 'allaitement']
  ),
  plante(
    'gentiane',
    'Gentiane jaune',
    "Tonique amer suprême. Stimule l'appétit, la digestion et toute la sphère gastro-hépatique.",
    "La gentiane jaune (Gentiana lutea), grande plante de montagne, contient les principes amers les plus intenses du règne végétal. Quelques gouttes suffisent pour stimuler immédiatement la sécrétion salivaire, gastrique et biliaire. C'est le grand tonique amer de la pharmacopée, idéal en cas d'inappétence, de digestion paresseuse, de convalescence.",
    "Eupeptique (favorise la digestion). Tonique amer. Apéritif (stimule l'appétit). Cholérétique. Antipyrétique léger. Fébrifuge. Tonique général. Stimule les sécrétions digestives.",
    "Inappétence, anorexie. Digestion paresseuse. Convalescence. Asthénie générale. Constipation par insuffisance biliaire. Fièvre légère récurrente. Anémie (en synergie avec d'autres plantes).",
    "Teinture mère : 5-15 gouttes dans un peu d'eau, 15 min avant les repas. Très petites doses suffisent (extrême amertume). Vin de gentiane traditionnel : 30 ml apéritif.",
    ["Ulcère gastrique en poussée", "Hyperacidité gastrique", "Grossesse"],
    ['gentiane', 'amer', 'digestion', 'appétit']
  ),
  plante(
    'gingembre',
    'Gingembre',
    "Stimulant digestif, antinauséeux, anti-inflammatoire. L'épice-médicament universelle.",
    "Le gingembre (Zingiber officinale), racine aromatique utilisée en Asie depuis 5000 ans, est à la fois épice culinaire et médicament puissant. Ses gingérols et shogaols expliquent ses propriétés : anti-nauséeuses, anti-inflammatoires, digestives, circulatoires. Polyvalent et bien toléré, c'est une plante du quotidien.",
    "Antinauséeux (efficace dans nausées de grossesse, mal des transports, post-chimio). Stimulant digestif. Anti-inflammatoire (effet anti-COX). Antalgique. Tonique circulatoire. Antiagrégant plaquettaire léger. Antibactérien.",
    "Nausées (grossesse, transport, chimio). Digestion paresseuse. Frilosité, mauvaise circulation. Douleurs articulaires (arthrose, arthrite). Règles douloureuses. Refroidissement, frissons. Toux grasse.",
    "Infusion de racine fraîche : 3-5 rondelles dans 250 ml d'eau bouillante, 10 min. 2-3 tasses/jour. Râpé frais dans les plats. Comprimés (anti-nauséeux) : 250 à 500 mg, 3 fois/jour.",
    ["Calculs biliaires", "Anticoagulants : prudence (effet antiagrégant)", "Reflux gastro-œsophagien sévère"],
    ['gingembre', 'digestion', 'nausée', 'inflammation']
  ),
  plante(
    'ginkgo',
    'Ginkgo biloba',
    "L'arbre aux mille écus. Microcirculation cérébrale, mémoire, audition, troubles cognitifs.",
    "Le ginkgo (Ginkgo biloba), arbre vivant fossile inchangé depuis 250 millions d'années, est l'une des plantes les plus étudiées pour la circulation cérébrale. Ses flavonoïdes et ginkgolides améliorent la microcirculation, protègent les neurones, et soutiennent les fonctions cognitives chez le sujet âgé.",
    "Vasodilatateur cérébral. Antioxydant neuronal. Neuroprotecteur. Antiagrégant plaquettaire modéré. Anti-inflammatoire. Mnémo-protecteur. Améliore l'oxygénation des tissus distaux.",
    "Troubles cognitifs liés à l'âge. Maladie d'Alzheimer débutante (en complément). Vertiges, acouphènes. Mauvaise circulation périphérique (jambes lourdes, mains/pieds froids). Maculopathie (DMLA). Migraines vasculaires.",
    "Extrait standardisé EGb 761 (24% flavonoïdes, 6% terpénolactones) : 120 à 240 mg/jour en 2 prises, avec les repas. Cure de 3 à 6 mois minimum pour bénéfices cognitifs. Effets visibles à partir de 4-8 semaines.",
    ["Anticoagulants ou antiagrégants", "Avant chirurgie (arrêt 7 jours)", "Épilepsie (controversé)", "Grossesse"],
    ['ginkgo', 'mémoire', 'circulation', 'cerveau']
  ),
  plante(
    'ginseng',
    'Ginseng (Panax ginseng)',
    "Le 'roi des plantes' chinoises. Tonique général, adaptogène, aphrodisiaque léger.",
    "Le ginseng asiatique (Panax ginseng) est considéré comme la plante reine en Asie depuis 4000 ans. Ses ginsénosides en font un adaptogène puissant, tonique général, qui agit sur la résistance au stress, la performance physique et intellectuelle, la vitalité globale. Plus puissant que l'éleuthérocoque, mais moins universel.",
    "Adaptogène majeur. Tonique général. Stimulant cognitif. Aphrodisiaque léger. Hypoglycémiant. Cardioprotecteur. Améliore les performances physiques et intellectuelles. Augmente la résistance au stress chronique.",
    "Asthénie marquée, convalescence. Surmenage chronique. Préparation aux examens, événements sportifs. Baisse de libido masculine. Diabète de type 2 (en complément). Vieillissement actif (cure annuelle).",
    "Extrait standardisé (4-5% ginsénosides) : 200 à 400 mg matin et midi (pas le soir). Cure de 6 à 12 semaines, pause obligatoire d'1 mois. Préférer ginseng rouge (transformé, plus actif) à blanc.",
    ["Hypertension non contrôlée", "Excitation, insomnie", "Grossesse, allaitement", "Cancer hormono-dépendant", "Anticoagulants"],
    ['ginseng', 'adaptogène', 'tonique', 'vitalité']
  ),
  plante(
    'harpagophytum',
    'Harpagophytum (griffe du diable)',
    "Anti-inflammatoire articulaire majeur. L'alternative naturelle aux AINS pour arthrose.",
    "L'harpagophytum (Harpagophytum procumbens), originaire du désert du Kalahari, contient des harpagosides puissamment anti-inflammatoires. Cliniquement validé pour le traitement de l'arthrose, c'est l'un des meilleurs anti-inflammatoires articulaires naturels, souvent utilisé en alternative aux AINS.",
    "Anti-inflammatoire articulaire. Antalgique. Antipyrétique léger. Action sur les cytokines pro-inflammatoires. Effet comparable au diclofénac dans plusieurs études d'arthrose. Action progressive (2-3 semaines).",
    "Arthrose (genou, hanche, doigts, cervicales). Polyarthrite rhumatoïde (en complément). Tendinites chroniques. Lombalgies inflammatoires. Goutte (en complément). Crises d'inflammation articulaire.",
    "Extrait standardisé en harpagosides (≥ 50 mg/jour) : 1000 à 2000 mg/jour en 2-3 prises avec les repas. Cure de 3 mois minimum pour effet optimal. Effets visibles dès la 3e semaine.",
    ["Ulcère gastrique ou duodénal", "Calculs biliaires", "Hypotension", "Grossesse", "Diabète sous traitement (potentialisation)"],
    ['harpagophytum', 'arthrose', 'articulations', 'inflammation']
  ),
  plante(
    'lavande-vraie',
    'Lavande vraie',
    "Anxiolytique olfactive, sommeil, anti-pou. La grande dame de la Provence en aromathérapie.",
    "La lavande vraie (Lavandula angustifolia) — à distinguer du lavandin moins noble — est l'une des huiles essentielles les plus polyvalentes et les mieux tolérées. Son linalol et son acétate de linalyle expliquent ses propriétés calmantes, antispasmodiques, cicatrisantes. C'est l'une des rares huiles essentielles utilisables pure sur la peau.",
    "Calmante du système nerveux. Anxiolytique. Hypotensive légère. Antispasmodique. Cicatrisante. Antibactérienne large spectre. Antifongique. Insectifuge (anti-poux notamment). Antalgique.",
    "Anxiété, agitation, stress. Insomnie. Migraines (massage des tempes). Brûlures légères, coupures. Piqûres d'insectes. Poux (frottement à sec des cheveux). Crampes musculaires. Démangeaisons.",
    "Huile essentielle : 2 gouttes sur les poignets ou les tempes pour anxiété. Diffusion atmosphérique le soir pour le sommeil. Application pure : la seule HE qui le tolère bien sur petite surface. Infusion de fleurs : 1 c. à café pour 250 ml, 5 min, le soir.",
    ["Allergie aux Lamiacées (rare)", "Grossesse 1er trimestre (huile essentielle)"],
    ['lavande', 'anxiété', 'sommeil', 'huile essentielle']
  ),
  plante(
    'melisse',
    'Mélisse',
    "L'anti-stress digestif. Apaise les nerfs et les viscères en même temps. Idéale pour enfants.",
    "La mélisse (Melissa officinalis), au parfum citronné délicat, est l'une des plantes médicinales les plus polyvalentes et les mieux tolérées. Elle agit simultanément sur le système nerveux et le système digestif — ce qui en fait l'alliée des digestions nerveuses, des spasmes émotionnels, des troubles psychosomatiques.",
    "Antispasmodique digestif. Sédative douce. Anxiolytique légère. Antivirale (contre herpès en application). Digestive. Carminative. Stomachique. Antimigraineuse.",
    "Anxiété digestive. Côlon irritable. Migraine digestive. Insomnie d'endormissement. Palpitations émotionnelles. Herpès labial (application locale). Trouble du sommeil de l'enfant. Stress avec retentissement digestif.",
    "Infusion : 1 c. à soupe de feuilles fraîches ou 1 c. à café sèche pour 250 ml d'eau bouillante, 5-10 min. 2-3 tasses/jour, dont une le soir. Teinture mère : 30 gouttes 3 fois/jour. Hydrolat : 1 c. à café dans un verre d'eau.",
    ["Hypothyroïdie sévère (effet thyréostatique léger)", "Sous traitement thyroïdien : avis médical"],
    ['mélisse', 'anxiété', 'digestion', 'enfant']
  ),
  plante(
    'menthe-poivree',
    'Menthe poivrée',
    "Stimulante digestive et neurologique. Anti-nausée, anti-migraine, anti-fatigue.",
    "La menthe poivrée (Mentha × piperita), hybride spontané entre menthe aquatique et menthe verte, contient une concentration exceptionnelle de menthol. Ses propriétés : stimulante digestive, antinauséeuse, antimigraineuse, anti-fatigue mentale. C'est l'une des huiles essentielles les plus utilisées en aromathérapie.",
    "Digestive, carminative. Antinauséeuse. Antalgique (le menthol active les récepteurs au froid). Stimulante neurologique. Hépato-stimulante légère. Antibactérienne. Antalgique des migraines.",
    "Digestion paresseuse. Mal des transports. Nausées. Migraines (massage des tempes). Côlon irritable (huile essentielle en gélules gastro-résistantes). Coup de fatigue (1 goutte HE diluée dans miel). Bouffées de chaleur.",
    "Infusion : 1 c. à café de feuilles pour 250 ml, 5 min, après les repas. Huile essentielle : 1 goutte sur un sucre/comprimé neutre pour les nausées. Capsules gastro-résistantes (IBS) : 1-2 capsules avant chaque repas.",
    ["Enfants de moins de 6 ans (menthol)", "Femmes enceintes et allaitantes", "Reflux gastro-œsophagien sévère", "Calculs biliaires"],
    ['menthe', 'digestion', 'nausée', 'migraine']
  ),
  plante(
    'ortie',
    'Ortie',
    "Reminéralisante de référence. Riche en fer, silicium, chlorophylle. La plante des carences.",
    "L'ortie (Urtica dioica), si mal-aimée, est l'une des plantes les plus nutritives qui existent. Riche en fer (très assimilable), silicium, calcium, magnésium, chlorophylle, protéines végétales — c'est un véritable concentré alimentaire. Indiquée dans toutes les situations de déminéralisation et de fatigue chronique.",
    "Reminéralisante. Diurétique léger. Galactogène (stimule lactation). Hémostatique. Anti-allergique (contre rhume des foins). Anti-arthritique. Anti-anémique. Hypoglycémiante légère.",
    "Anémie ferriprive. Déminéralisation. Fatigue chronique. Convalescence. Rhumatismes inflammatoires. Allergies saisonnières (cure de fond). Chute de cheveux, ongles cassants. Insuffisance de lait.",
    "Infusion : 2 c. à soupe de feuilles sèches pour 500 ml d'eau bouillante, 15 min. À boire dans la journée. Cure de 3 semaines. Poudre d'ortie : 1-2 c. à café/jour dans aliments. Soupe d'ortie fraîche au printemps (cuire détruit le piquant).",
    ["Œdèmes cardiaques ou rénaux (avis médical)", "Insuffisance rénale (potassium)"],
    ['ortie', 'minéraux', 'fer', 'anémie']
  ),
  plante(
    'passiflore',
    'Passiflore',
    "Anxiolytique naturelle pour l'agitation mentale et l'insomnie d'endormissement.",
    "La passiflore (Passiflora incarnata), liane à fleurs spectaculaires, est l'une des plantes anxiolytiques les mieux validées scientifiquement. Elle agit sur le système GABA — comme les benzodiazépines mais sans accoutumance ni dépendance. Idéale pour l'anxiété généralisée, l'agitation mentale, l'insomnie d'endormissement.",
    "Anxiolytique. Sédative douce. Hypnotique (favorise endormissement). Antispasmodique. Hypotensive légère. Action GABAergique. Pas d'accoutumance ni de dépendance.",
    "Anxiété généralisée. Anxiété d'anticipation. Ruminations mentales. Insomnie d'endormissement. Sevrage tabagique ou de benzodiazépines (en accompagnement). Palpitations émotionnelles. Stress de l'enfant.",
    "Infusion : 1 c. à soupe de plante pour 250 ml, 10 min. 2-3 tasses/jour. Une le soir 30 min avant le coucher. Teinture mère : 30 à 60 gouttes 3 fois/jour. Extrait standardisé : selon dosage.",
    ["Grossesse", "Sous benzodiazépines : avis médical (potentialisation)", "Pas d'usage chronique > 3 mois sans avis"],
    ['passiflore', 'anxiété', 'insomnie', 'GABA']
  ),
  plante(
    'pissenlit',
    'Pissenlit',
    "Le grand draineur du foie et des reins. Plante des cures de printemps.",
    "Le pissenlit (Taraxacum officinale), si banal et pourtant si puissant, est l'une des plantes dépuratives majeures. Toute la plante est utilisable : les feuilles diurétiques, les racines hépato-biliaires, les fleurs cardioprotectrices. C'est le grand draineur du printemps.",
    "Cholérétique et cholagogue. Diurétique notable (apporte du potassium, donc 'diurétique d'épargne potassique'). Dépurative générale. Hypoglycémiante légère. Hypolipémiante légère. Stimulante hépatique. Légèrement laxative.",
    "Foie surchargé. Vésicule biliaire paresseuse. Rétention d'eau, cellulite. Constipation par insuffisance biliaire. Calculs urinaires en prévention. Cures de printemps. Diabète de type 2 (en complément).",
    "Décoction de racine : 1 c. à soupe pour 250 ml, faire bouillir 5 min, infuser 10 min. 2 tasses/jour. Feuilles en salade (printemps). Suc de feuilles fraîches : 30 ml/jour. Teinture mère : 30 gouttes 3 fois/jour. Cure de 21 jours.",
    ["Obstruction des voies biliaires", "Calculs biliaires obstructifs"],
    ['pissenlit', 'foie', 'reins', 'cure printemps']
  ),
  plante(
    'prele-des-champs',
    'Prêle des champs',
    "Reminéralisante par le silicium. Pour les os, ongles, cheveux, tissus conjonctifs.",
    "La prêle des champs (Equisetum arvense), plante 'fossile' inchangée depuis le Carbonifère, est extraordinairement riche en silicium organique. Le silicium est essentiel à la structure du collagène, à la solidité osseuse, à la qualité des ongles et cheveux. C'est LA plante reminéralisante des tissus conjonctifs.",
    "Reminéralisante (silice). Diurétique léger. Reconstituante des tissus conjonctifs. Hémostatique. Antalgique articulaire. Antioxydante. Améliore la fixation calcique.",
    "Ostéoporose, fragilité osseuse, fractures. Ongles cassants, dédoublés. Chute de cheveux. Arthrose. Cellulite. Vergetures (en cure et application). Cicatrisation osseuse (post-fracture). Convalescence.",
    "Décoction : 2 c. à soupe pour 500 ml d'eau, faire bouillir 30 min (silice plus lente à extraire). Infuser 15 min. 2 tasses/jour. Cure de 3 mois minimum. Comprimés de prêle séchée : selon dosage.",
    ["Œdèmes cardiaques ou rénaux", "Insuffisance cardiaque", "Carence en thiamine (pas plus de 6 semaines en continu)"],
    ['prêle', 'silicium', 'os', 'cheveux']
  ),
  plante(
    'reine-des-pres',
    'Reine-des-prés',
    "L'aspirine végétale. Anti-inflammatoire articulaire, anti-fièvre, anti-rhumatismal.",
    "La reine-des-prés (Filipendula ulmaria), riche en dérivés salicylés (précurseurs de l'aspirine de synthèse), est l'un des grands anti-inflammatoires végétaux. Elle agit sur les douleurs articulaires, la fièvre, les rhumatismes. Avantage sur l'aspirine : aucune toxicité gastrique grâce aux mucilages naturellement associés.",
    "Anti-inflammatoire (par les salicylés naturels). Antalgique. Antipyrétique. Diurétique. Anti-rhumatismale. Anti-acide gastrique. Sudorifique.",
    "Arthrose, polyarthrite rhumatoïde. Douleurs articulaires inflammatoires. Goutte. États fébriles (rhume, grippe). Tendinites. Rétention d'eau, cellulite. Maux de tête inflammatoires.",
    "Infusion : 1 c. à soupe de sommités fleuries pour 250 ml d'eau bouillante (PAS frémissante, pour préserver les salicylés). 2-3 tasses/jour. Teinture mère : 30 gouttes 3 fois/jour. Extrait fluide : selon dosage.",
    ["Allergie à l'aspirine ou aux salicylés", "Asthme à l'aspirine", "Anticoagulants (potentialisation)", "Enfants de moins de 12 ans (par précaution)"],
    ['reine-des-prés', 'salicylés', 'arthrose', 'fièvre']
  ),
  plante(
    'rhodiole',
    'Rhodiole',
    "Adaptogène arctique pour la fatigue chronique et l'anxiété d'épuisement. Action rapide.",
    "La rhodiole (Rhodiola rosea), plante des régions arctiques, contient des rosavines et salidroside qui en font un adaptogène unique : effet sur la fatigue chronique en quelques jours seulement, contrairement aux autres adaptogènes qui nécessitent plusieurs semaines. C'est la plante de l'épuisement et du burnout en début de récupération.",
    "Adaptogène puissant et rapide. Anti-fatigue. Anti-stress chronique. Anti-dépresseur léger. Améliore les performances cognitives sous stress. Cardioprotectrice. Régulatrice du cortisol.",
    "Fatigue chronique. Burnout, épuisement professionnel. Dépression légère à modérée. Anxiété d'épuisement. Préparation à un défi (examen, sport, événement). Trouble affectif saisonnier. Récupération sportive.",
    "Extrait standardisé (3% rosavines, 1% salidroside) : 200 à 400 mg matin et midi (pas le soir). Effet généralement visible en 7-15 jours. Cure de 6 à 12 semaines, pause d'1 mois.",
    ["Trouble bipolaire (peut déclencher hypomanie)", "Hypertension non contrôlée", "Grossesse, allaitement"],
    ['rhodiole', 'adaptogène', 'fatigue', 'burnout']
  ),
  plante(
    'romarin',
    'Romarin',
    "Stimulant général, cholagogue, antioxydant majeur. La plante du foie et de la mémoire.",
    "Le romarin (Salvia rosmarinus) est à la fois une herbe culinaire et un médicament de premier ordre. Riche en acide carnosique et carnosol, c'est un antioxydant exceptionnel. Stimulant hépatique, mémoriel, circulatoire, il accompagne aussi bien les digestions difficiles que les baisses de tonus.",
    "Cholérétique et cholagogue. Hépato-protecteur. Antioxydant majeur. Tonique général. Stimulant nerveux. Circulatoire. Anti-spasmodique digestif. Anti-microbien. Mnémo-protecteur.",
    "Foie paresseux, digestion lente. Hypotension, fatigue matinale. Troubles cognitifs liés à l'âge. Migraine hépatique. Rhumatismes. Convalescence. Asthénie chronique. Stimulation matinale (alternative au café).",
    "Infusion : 1 c. à café pour 250 ml, 5 min. 2-3 tasses/jour, idéalement matin et midi. Teinture mère : 30 gouttes 3 fois/jour. Huile essentielle (romarin verbénone pour le foie, à cinéole pour les voies respiratoires) : selon indication.",
    ["Hypertension non contrôlée (effet hypertenseur)", "Épilepsie", "Grossesse (huile essentielle)"],
    ['romarin', 'foie', 'tonique', 'mémoire']
  ),
  plante(
    'sauge-officinale',
    'Sauge officinale',
    "Plante des femmes, anti-suée, anti-bouffées de chaleur. Antimicrobienne puissante.",
    "La sauge officinale (Salvia officinalis), 'salvia' = celle qui sauve, mérite sa réputation antique. Anti-transpirante remarquable, elle est précieuse en péri-ménopause et ménopause pour les bouffées de chaleur et les sueurs nocturnes. Aussi puissante antimicrobienne, antiseptique buccale, digestive.",
    "Anti-transpirante (anti-bouffées de chaleur, sueurs nocturnes). Oestrogen-like. Antimicrobienne. Antiseptique buccale. Digestive. Spasmolytique. Mnémo-protectrice. Régule la sphère ORL.",
    "Bouffées de chaleur, sueurs nocturnes (péri-ménopause, ménopause). Sudation excessive. Aphtes, gingivites (en gargarismes). Maux de gorge. Digestion lente. Diminution du lait pour sevrage. Récupération post-grippe.",
    "Infusion : 1 c. à café de feuilles pour 250 ml, 5 min. 2 tasses/jour, dont une le soir pour les sueurs nocturnes. Cure de 3 mois. Teinture mère : 30 gouttes 3 fois/jour. Gargarisme : décoction concentrée.",
    ["Cancer hormono-dépendant (sein, utérus, ovaire)", "Grossesse, allaitement (réduit la lactation)", "Épilepsie (thuyone)", "Pas plus de 3 mois en continu (HE)"],
    ['sauge', 'ménopause', 'bouffées de chaleur', 'sueurs']
  ),
  plante(
    'thym',
    'Thym',
    "Anti-infectieux respiratoire puissant. Cure d'hiver et d'urgence ORL.",
    "Le thym (Thymus vulgaris) est l'antiseptique végétal par excellence pour la sphère ORL. Son thymol et son carvacrol sont des anti-microbiens à large spectre, validés contre bactéries, virus et champignons. C'est la plante de la cure d'hiver, des infections respiratoires aiguës, du soutien immunitaire.",
    "Antimicrobien à large spectre (bactéries, virus, champignons). Expectorant. Mucolytique. Antitussif. Stimulant immunitaire. Vermifuge. Antioxydant. Stimulant général. Digestif.",
    "Infections respiratoires (rhume, bronchite, sinusite, angine). Toux grasse. Prévention hivernale immunitaire. Mycoses digestives (en complément). Parasitoses intestinales. Aphtes (gargarismes).",
    "Infusion : 1 c. à café pour 250 ml, 5 min, couvert. 2-3 tasses/jour aux premiers signes. Avec du miel et du citron. Teinture mère : 30 gouttes 3 fois/jour. Huile essentielle (thym à thymol agressif, à linalol plus doux) : selon indication.",
    ["Grossesse et allaitement (HE)", "Enfants de moins de 6 ans (HE)", "Hypothyroïdie (effet stimulant)"],
    ['thym', 'infection', 'respiratoire', 'immunité']
  ),
  plante(
    'valeriane',
    'Valériane',
    "L'anxiolytique-hypnotique végétal de référence. Action rapide sur l'insomnie aiguë.",
    "La valériane (Valeriana officinalis) est la plante du sommeil par excellence. Ses valépotriates et son acide valérique agissent sur le GABA, comme les benzodiazépines, mais sans accoutumance ni dépendance. Action rapide sur l'insomnie d'endormissement et l'anxiété aiguë.",
    "Anxiolytique. Hypnotique. Sédative. Spasmolytique. Action GABAergique. Pas d'effet 'gueule de bois' au réveil. Pas d'accoutumance ni de dépendance.",
    "Insomnie aiguë (endormissement et maintien). Anxiété aiguë, attaques de panique. Stress avant événement (examen, voyage en avion). Sevrage de benzodiazépines (en accompagnement). Spasmes musculaires d'origine nerveuse.",
    "Pour le sommeil : 400 à 600 mg d'extrait standardisé 30-60 min avant le coucher. Pour l'anxiété : 200 à 400 mg, 2-3 fois/jour. Teinture mère : 60 gouttes le soir. Goût et odeur déplaisants : préférer les gélules.",
    ["Grossesse, allaitement (par précaution)", "Avant conduite (somnolence)", "Sous benzodiazépines : avis médical", "Pas d'usage chronique > 1-2 mois sans pause"],
    ['valériane', 'sommeil', 'anxiété', 'GABA']
  ),
];
