import type { Article } from '../types';

const a = (slug: string, title: string, excerpt: string, intro: string, sections: { heading: string; body: string }[], tags: string[]): Article => ({
  slug, domain: 'nutritherapie', category: 'adaptogenes', title, excerpt, readingTime: 4, intro, sections, tags,
});

export const NUTRI_ADAPTOGENES: Article[] = [
  a('plantes-adaptogenes-introduction',
    "Les plantes adaptogènes : qu'est-ce que c'est",
    "Définition, critères scientifiques (Brekhman 1969), différence avec stimulants. Une famille thérapeutique unique.",
    "Le terme 'adaptogène' a été proposé par le pharmacologue russe Israel Brekhman en 1969 pour désigner une famille de plantes médicinales aux propriétés bien définies : elles aident l'organisme à s'adapter au stress, normalisent les fonctions perturbées, et ne créent ni dépendance ni effet secondaire majeur. Ce sont des modulateurs intelligents — ni stimulants ni sédatifs, mais régulateurs.",
    [
      { heading: "Les 3 critères d'un vrai adaptogène (Brekhman)", body: "1. NON-SPÉCIFIQUE : aide l'organisme à résister à de multiples stress (physique, mental, émotionnel, infectieux). 2. NORMALISATEUR : agit dans les deux sens — baisse ce qui est trop haut, monte ce qui est trop bas (homéostasie). 3. INNOCUITÉ : pas de toxicité significative ni de perturbation du fonctionnement normal. Très peu de plantes remplissent ces 3 critères." },
      { heading: "Les vrais adaptogènes reconnus", body: "Ginseng (Panax ginseng) - le 'roi'. Éleuthérocoque (Eleutherococcus senticosus). Rhodiole (Rhodiola rosea). Ashwagandha (Withania somnifera). Schisandra (Schisandra chinensis). Cordyceps (champignon adaptogène). Holy basil ou Tulsi (Ocimum sanctum). Champignon reishi. Maca (Lepidium meyenii). Astragale (Astragalus membranaceus)." },
      { heading: "Comment ils agissent", body: "Modulation de l'axe hypothalamo-hypophyso-surrénalien (HPA). Normalisation du cortisol. Action sur le NPY (neuropeptide Y) et la résilience au stress. Soutien des mitochondries. Modulation immunitaire intelligente (immunostimulant si bas, immunomodulateur si haut). Effets neuroprotecteurs. Pas d'action 'directe' comme la caféine — action de fond." },
      { heading: "Comment les utiliser", body: "Cures longues (8-12 semaines minimum) pour effets installés. Prise le matin et/ou le midi (pas le soir pour la plupart — sauf reishi). Pause d'1 mois après 3 mois de cure. Combinaisons possibles selon profil. Pas de cumul de plus de 2-3 adaptogènes simultanés (sauf formules expertes). Privilégier extraits standardisés en principes actifs (ginsénosides, rosavines, withanolides...)." },
    ],
    ['adaptogènes', 'Brekhman', 'stress']
  ),
  a('ashwagandha',
    "Ashwagandha (Withania somnifera) : l'adaptogène apaisant",
    "Le plus doux des adaptogènes. Régule cortisol, anxiété, sommeil. 600 mg KSM-66 ou 300 mg Sensoril.",
    "L'ashwagandha — 'cheval de l'Inde' en sanskrit — est l'adaptogène le plus étudié et le plus doux. Contrairement à d'autres adaptogènes plus stimulants, il a un effet apaisant : réduit le cortisol, l'anxiété, soutient le sommeil. Idéal pour les profils nerveux, anxieux, en burn-out.",
    [
      { heading: "Propriétés et études", body: "Études Chandrasekhar 2012 : réduction de 28% du cortisol salivaire chez stressés chroniques (600 mg/jour, 60 jours). Auddy 2008 : amélioration significative de l'anxiété (HAM-A). Effet sur la testostérone (étude Lopresti) : +15-22% chez hommes stressés. Soutien thyroïdien chez hypothyroïdiens (augmente T4)." },
      { heading: "Indications", body: "Anxiété chronique. Stress chronique avec cortisol haut. Burn-out (phase de récupération). Insomnies d'anxiété. Hypothyroïdie infraclinique. Baisse de libido masculine. Sportifs (récupération, performance). Fatigue surrénale. Préparation aux examens. Premier choix pour profil nerveux fragile." },
      { heading: "Forme et dosage", body: "KSM-66 (extrait racine breveté, le mieux étudié) : 600 mg/jour. Sensoril (autre extrait breveté) : 250-500 mg/jour. Effet visible en 4-8 semaines. Cure 3 mois, pause 1 mois. À prendre matin et midi (ou soir si pour sommeil). Avec un repas." },
      { heading: "Précautions", body: "Hyperthyroïdie : éviter (peut aggraver). Maladies auto-immunes (lupus, Hashimoto en poussée) : prudence. Grossesse : déconseillée. Allergie aux Solanacées (rare). Sous sédatifs : potentialisation possible." },
    ],
    ['ashwagandha', 'cortisol', 'anxiété']
  ),
  a('rhodiole-rhodiola',
    "Rhodiole (Rhodiola rosea) : adaptogène rapide",
    "Effet en quelques jours sur la fatigue. 200-400 mg le matin. Burn-out, dépression légère, performance.",
    "La rhodiole est l'adaptogène 'action rapide' : ses effets se font sentir en quelques jours seulement (contrairement aux semaines des autres adaptogènes). Riche en rosavines et salidroside, elle est l'alliée des burn-out, des fatigues chroniques, des dépressions légères, des préparations à un effort intense.",
    [
      { heading: "Particularités", body: "Action rapide (3-7 jours vs 4-8 semaines pour d'autres). Effet anti-fatigue marqué. Anti-dépresseur léger documenté (étude Mao 2015 vs sertraline : efficacité comparable, mieux toléré). Améliore performances cognitives sous stress. N'élève PAS la tension. Tonique sans excitation excessive." },
      { heading: "Indications", body: "Fatigue chronique. Burn-out en récupération. Dépression légère à modérée. Trouble affectif saisonnier. Préparation aux examens ou compétitions. Sport d'endurance. Récupération post-effort. Brouillard mental. Démotivation chronique." },
      { heading: "Forme et dosage", body: "Extrait standardisé : 3% rosavines + 1% salidroside (le ratio important). 200 à 400 mg/jour, le MATIN (à jeun ou au petit-déjeuner). Jamais le soir (peut perturber le sommeil). Cure de 6-12 semaines, pause d'1 mois." },
      { heading: "Précautions", body: "Trouble bipolaire : risque de virage hypomane. Insomnie sévère : commencer petite dose. Hypertension sévère non contrôlée. Grossesse et allaitement : éviter. Avant intervention chirurgicale : arrêt 1 semaine." },
    ],
    ['rhodiole', 'fatigue', 'burn-out']
  ),
  a('ginseng',
    "Ginseng (Panax ginseng) : le roi des adaptogènes",
    "Tonique général, soutien sexuel, performance. 200-400 mg matin et midi. Ginseng rouge > blanc.",
    "Le ginseng coréen ou chinois (Panax ginseng) est utilisé depuis 4000 ans en Asie. C'est l'adaptogène le plus puissant, particulièrement adapté aux fatigues profondes, aux troubles sexuels masculins, aux convalescences. Plus stimulant que d'autres adaptogènes — pas pour tous les terrains.",
    [
      { heading: "Ginsénosides : les principes actifs", body: "Le ginseng contient une trentaine de ginsénosides (saponines triterpéniques). Différentes voies d'action selon les ginsénosides. Le ginseng ROUGE (vapeur cuit) contient plus de ginsénosides actifs que le blanc (séché à l'air). Préférer extrait standardisé à 4-7% de ginsénosides totaux." },
      { heading: "Indications", body: "Asthénie marquée, convalescence. Surmenage chronique. Préparation aux examens, événements sportifs. Baisse de libido masculine, dysfonction érectile légère. Diabète de type 2 (en complément, amélioration sensibilité insuline). Système immunitaire affaibli. Cure annuelle de vitalité (chez seniors)." },
      { heading: "Dosage", body: "Extrait standardisé : 200-400 mg matin et midi (jamais le soir). Cure 6-12 semaines, pause obligatoire d'1 mois. Effet progressif sur 3-4 semaines. Effet visible sur libido, énergie, capacités cognitives." },
      { heading: "Précautions", body: "Hypertension non contrôlée : éviter. Excitation, insomnie : prudence ou éviter. Cancer hormono-dépendant : controverse, avis médical. Anticoagulants : interaction possible. Diabète sous traitement : ajustement nécessaire (hypoglycémie). Grossesse, allaitement : éviter." },
    ],
    ['ginseng', 'tonique', 'libido']
  ),
  a('schisandra',
    "Schisandra (5 saveurs) : adaptogène hépatique",
    "Baies aux 5 saveurs. Hépatoprotectrice et adaptogène. Foie surchargé, fatigue.",
    "La schisandra (Schisandra chinensis), 'baie aux 5 saveurs' en médecine chinoise, est un adaptogène méconnu en Occident mais précieux. Son originalité : action hépatoprotectrice forte combinée à l'adaptogénie. Pour les profils foie + stress + fatigue.",
    [
      { heading: "Propriétés", body: "Adaptogène (résistance au stress, énergie). Hépatoprotectrice (régénère les hépatocytes, baisse les ALAT/ASAT). Antioxydante. Modulation immunitaire. Améliore les performances cognitives. Cardio-tonique douce. Augmente la production de glutathion hépatique." },
      { heading: "Indications", body: "Foie surchargé + fatigue (combinaison où la schisandra excelle). Hépatites chroniques (en complément). Stéatose hépatique. Stress chronique avec digestion lente. Convalescence. Pollution chronique. Préparation chimiothérapie/radiothérapie (sous avis)." },
      { heading: "Dosage", body: "Extrait standardisé en schizandrines : 500-1000 mg/jour. Baies séchées en décoction : 5-10 g/jour. Teinture-mère : 30 gouttes 3 fois/jour. Cure de 2-3 mois. Précautions : ulcère gastrique actif, épilepsie, hypertension sévère, grossesse." },
    ],
    ['schisandra', 'foie', 'adaptogène']
  ),
  a('eleutherocoque',
    "Éleuthérocoque : ginseng sibérien doux",
    "Plus doux que le ginseng asiatique, convient aux hypertendus. Cure annuelle de vitalité.",
    "L'éleuthérocoque (Eleutherococcus senticosus), parfois appelé 'ginseng sibérien', n'est pas un vrai ginseng mais partage ses propriétés adaptogènes. Plus doux que Panax ginseng, il convient aux personnes hypertendues, aux profils nerveux fragiles, aux situations où l'on cherche un soutien sans excitation.",
    [
      { heading: "Propriétés", body: "Adaptogène doux. Tonique général. Immunomodulant. Anti-fatigue progressive. Améliore performances cognitives et physiques sous stress. N'élève PAS la tension (contrairement au ginseng asiatique chez certains). Souvent mieux toléré au long cours." },
      { heading: "Indications", body: "Fatigue chronique modérée. Convalescence. Hypertendus en besoin de soutien adaptogène. Personnes âgées en perte de tonus. Préparation pré-hivernale (avec échinacée). Stress chronique non grave. Trouble affectif saisonnier léger." },
      { heading: "Dosage", body: "Extrait sec standardisé en éleuthérosides : 300-600 mg/jour, matin et midi. Cure de 6 à 12 semaines, pause d'1 mois. Très bien tolérée. Effet progressif sur 3-4 semaines." },
    ],
    ['éleuthérocoque', 'ginseng sibérien']
  ),
  a('cordyceps-maitake-champignons',
    "Champignons médicinaux : cordyceps, reishi, maïtake",
    "La mycothérapie moderne. Immunostimulants, adaptogènes, anti-tumoraux. Doses et formes.",
    "Les champignons médicinaux — utilisés en Asie depuis 2000 ans — connaissent un renouveau scientifique en Occident. Cordyceps, reishi, maïtake, chaga : autant de profils thérapeutiques différents, tous remarquables pour leurs polysaccharides (bêta-glucanes) immunomodulants, leurs effets adaptogènes, leurs propriétés anti-tumorales documentées en complément.",
    [
      { heading: "Cordyceps : tonique cardio-respiratoire", body: "Cordyceps sinensis ou militaris : tonique de l'énergie vitale en médecine chinoise. Améliore endurance sportive (capture d'oxygène). Soutient la fonction sexuelle. Antifatigue. Anti-vieillissement. Modulation immunitaire. Dosage : 1-3 g/jour d'extrait standardisé. Étudié en sport haute performance." },
      { heading: "Reishi : le champignon de longévité", body: "Ganoderma lucidum : le 'champignon de l'immortalité' chinois. Très adaptogène. Sédatif léger (peut être pris le soir). Soutien immunitaire (notamment maladies auto-immunes, cancer en complément). Hépatoprotecteur. Hypotenseur léger. Dosage : 1-3 g/jour d'extrait. Triterpènes + polysaccharides." },
      { heading: "Maïtake et shiitake", body: "Maïtake (Grifola frondosa) : modulation glycémique (diabète T2), immunostimulant majeur (fraction D), anti-tumoral en complément. Shiitake (Lentinula edodes) : lentinane antitumoral, cholestérol, immunité. Tous deux : alimentation 2-3 fois/semaine + extrait en cure." },
      { heading: "Chaga : antioxydant majeur", body: "Inonotus obliquus, champignon noir des bouleaux nordiques. Concentration record en SOD (superoxyde dismutase). Antioxydant exceptionnel. Soutien immunitaire. En décoction longue (2-3h à frémir) ou extrait. 1-3 g/jour. Synergie possible avec autres champignons." },
    ],
    ['champignons', 'cordyceps', 'reishi']
  ),
];
