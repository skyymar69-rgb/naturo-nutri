import type { Article } from '../types';

const a = (slug: string, title: string, excerpt: string, intro: string, sections: { heading: string; body: string }[], tags: string[]): Article => ({
  slug, domain: 'nutritherapie', category: 'acides-amines', title, excerpt, readingTime: 4, intro, sections, tags,
});

export const NUTRI_ACIDES_AMINES: Article[] = [
  a('tryptophane',
    "Tryptophane : précurseur de la sérotonine",
    "Acide aminé clé du sommeil et de l'humeur. Conversion en 5-HTP puis sérotonine puis mélatonine.",
    "Le tryptophane est l'acide aminé essentiel précurseur direct de la sérotonine (humeur, satiété) et de la mélatonine (sommeil). Sa supplémentation, ou son apport optimisé alimentairement, peut transformer dépression légère, insomnies, fringales sucrées émotionnelles.",
    [
      { heading: "Voie métabolique", body: "Tryptophane → 5-HTP (5-hydroxytryptophane) → Sérotonine → Mélatonine. Cofacteurs nécessaires : magnésium, vitamine B6 (P5P), zinc, vitamine C. Sans ces cofacteurs, la conversion est inefficace. La supplémentation isolée en tryptophane sans cofacteurs donne peu de résultats." },
      { heading: "Indications", body: "Insomnie d'endormissement. Dépression légère à modérée. Fringales sucrées (la sérotonine régule l'appétit). Syndrome prémenstruel sévère. Sevrage tabagique (modulation humeur). Boulimie. Anxiété de fond." },
      { heading: "Dosages et formes", body: "Tryptophane : 500 mg le soir, à distance des repas protéinés (concurrence avec autres acides aminés). 5-HTP (forme convertie une étape plus loin) : 100-200 mg le soir. Toujours avec magnésium + B6. Cure de 6-12 semaines. Précautions : sous antidépresseurs sérotoninergiques (ISRS), avis médical obligatoire (syndrome sérotoninergique)." },
      { heading: "Sources alimentaires", body: "Œufs, dinde, poulet, fromage de chèvre, légumineuses, oléagineux (amandes, noix), bananes, chocolat noir, graines de courge. Astuce : combiner protéines + petite portion de glucides au dîner permet au tryptophane de passer la barrière hémato-encéphalique (l'insuline 'pousse' les autres acides aminés vers les muscles)." },
    ],
    ['tryptophane', 'sérotonine', 'sommeil']
  ),
  a('tyrosine',
    "Tyrosine : précurseur de la dopamine",
    "Pour la concentration, motivation, énergie matinale. 500-1500 mg le matin à jeun.",
    "La tyrosine est l'acide aminé précurseur des catécholamines : dopamine (motivation, plaisir), noradrénaline (vigilance), adrénaline (mobilisation). Sa supplémentation matinale améliore concentration, motivation, énergie mentale — particulièrement utile en cas de fatigue cognitive ou de stress.",
    [
      { heading: "Voie métabolique et indications", body: "Tyrosine → DOPA → Dopamine → Noradrénaline → Adrénaline. Indications : fatigue cognitive, brouillard mental, dépression apathique (manque de motivation), TDAH, sevrage de stimulants (cocaïne, amphétamines), préparation à un effort intellectuel intense, jet lag." },
      { heading: "Dosages", body: "500 à 1500 mg le MATIN à jeun, 30 min avant petit-déjeuner. Jamais le soir (risque insomnie). Cure de 4-8 semaines. À associer à vitamine B6, magnésium, vitamine C (cofacteurs de conversion). Précautions : hypertension non contrôlée, hyperthyroïdie, mélanome (la tyrosine est précurseur de la mélanine), grossesse." },
      { heading: "Sources alimentaires", body: "Fromages (parmesan, cheddar). Œufs. Viandes maigres. Poissons. Soja, tofu. Graines de citrouille, sésame. Amandes. Avocat. Banane. Pour booster naturellement : petit-déjeuner riche en protéines (œufs, fromage, graines)." },
    ],
    ['tyrosine', 'dopamine', 'motivation']
  ),
  a('glutamine',
    "L-glutamine : la barrière intestinale",
    "Carburant principal des entérocytes. Indispensable en hyperperméabilité intestinale (leaky gut).",
    "La L-glutamine est l'acide aminé le plus abondant dans le sang et le carburant principal des entérocytes (cellules de la paroi intestinale). Sa supplémentation est devenue incontournable dans les protocoles d'hyperperméabilité intestinale ('leaky gut'), de récupération sportive, et de soutien post-chimiothérapie.",
    [
      { heading: "Rôles physiologiques", body: "Carburant principal des entérocytes (cellules intestinales). Synthèse du glutathion (antioxydant). Soutien du système immunitaire intestinal. Précurseur du GABA (neurotransmetteur apaisant). Récupération musculaire post-effort." },
      { heading: "Indications principales", body: "Hyperperméabilité intestinale (intestin perméable). Maladies inflammatoires intestinales (en accompagnement). Syndrome du côlon irritable. Post-antibiothérapie. Diarrhée chronique. Sport intensif (récupération). Post-chimiothérapie ou radiothérapie abdominale. Stress chronique (entérocytes fragilisés)." },
      { heading: "Dosages", body: "5 à 15 g/jour, en 2-3 prises à distance des repas. Forme L-glutamine en poudre (la moins chère et la plus utilisée). Mélanger dans eau froide ou tiède, jamais chaude. Cure de 2-3 mois. Précautions : insuffisance rénale ou hépatique sévère, épilepsie, syndrome de Reye." },
      { heading: "Synergies dans le protocole intestinal", body: "L-glutamine + probiotiques + zinc carnosine + butyrate + curcuma + collagène marin + boswellia = protocole complet de restauration intestinale. Cure de 3 mois minimum. Élimination simultanée des aliments inflammatoires (gluten, lait, sucres raffinés)." },
    ],
    ['glutamine', 'intestin', 'perméabilité']
  ),
  a('taurine',
    "Taurine : énergie, vue, sevrage stimulants",
    "Acide aminé soufré aux multiples bénéfices. Différent de ce qu'on croit (pas un stimulant dans les boissons énergisantes).",
    "Contrairement à la croyance populaire (suite aux boissons énergisantes), la taurine n'est PAS un stimulant. C'est au contraire un acide aminé soufré aux effets apaisants, qui module le GABA, soutient le cœur, l'œil, le système nerveux. Très utile en complément.",
    [
      { heading: "Rôles physiologiques", body: "Modulateur GABA (effet calmant). Stabilisation des membranes cellulaires. Conjugaison des sels biliaires (digestion graisses). Antioxydant. Soutien cardiaque (insuffisance cardiaque). Protection rétinienne. Détoxification hépatique." },
      { heading: "Indications", body: "Stress chronique avec hyperactivité nerveuse. Anxiété. Insomnie. Insuffisance cardiaque (en complément médical). Dégénérescence rétinienne (DMLA). Sevrage caféine ou amphétamines. Foie surchargé. Régimes vegan stricts (taurine peu présente dans végétaux)." },
      { heading: "Dosages", body: "500 à 3000 mg/jour, en 1-2 prises. Très bien tolérée. Cure de 2-3 mois. Pour le sommeil : 1000-1500 mg le soir. Sources alimentaires : poissons et fruits de mer (sardine, palourdes, poulpe), viandes (organes notamment), œufs. Quasi absente des végétaux (vegans : supplémentation justifiée)." },
    ],
    ['taurine', 'GABA', 'cœur']
  ),
  a('glycine',
    "Glycine : sommeil et collagène",
    "Acide aminé non essentiel mais précieux. 3 g le soir = sommeil profond. Précurseur du collagène.",
    "La glycine est l'acide aminé le plus simple, longtemps considéré comme non essentiel. La science récente lui redonne sa place : précurseur du collagène, modulateur du sommeil profond, soutien hépatique. Une cure de glycine au coucher transforme la qualité du sommeil pour beaucoup.",
    [
      { heading: "Rôles physiologiques", body: "Synthèse du collagène (1/3 des acides aminés du collagène est glycine). Synthèse du glutathion (avec cystéine et glutamate). Modulation des récepteurs NMDA. Baisse de la température corporelle centrale (favorise endormissement). Conjugaison hépatique (détoxification phase II)." },
      { heading: "Indications", body: "Insomnie, sommeil léger non réparateur. Récupération sportive (collagène, articulations). Vieillissement cutané. Soutien hépatique. Schizophrénie en accompagnement (mécanismes NMDA). Hyperexcitabilité nerveuse. Diabète de type 2 (régulation glycémique)." },
      { heading: "Dosages", body: "3 g (1 cuillère à café) dissous dans eau, 30-60 min avant le coucher. Goût légèrement sucré, agréable. Cure de 1-3 mois pour effet sommeil. Précautions : très bien tolérée, sans accoutumance, sans gueule de bois. Aucun risque connu aux doses usuelles." },
      { heading: "Sources alimentaires", body: "Bouillon d'os mijoté longuement (top source). Gélatine, peau de poulet. Collagène hydrolysé. Tendons, cartilages. La consommation traditionnelle d'animaux 'du nez à la queue' apportait naturellement glycine — l'alimentation moderne (muscle uniquement) en est très pauvre." },
    ],
    ['glycine', 'sommeil', 'collagène']
  ),
  a('arginine-citrulline',
    "L-arginine et L-citrulline : NO et circulation",
    "Précurseurs du monoxyde d'azote (NO), vasodilatateur naturel. Tension, performance sexuelle, sport.",
    "L'arginine et la citrulline sont les précurseurs du monoxyde d'azote (NO), molécule signal qui dilate les vaisseaux sanguins. Bien utilisées, elles peuvent normaliser une tension élevée, améliorer les performances sportives, soutenir la fonction érectile, soulager les jambes lourdes.",
    [
      { heading: "L-arginine vs L-citrulline : laquelle choisir", body: "L-arginine : précurseur direct du NO mais largement dégradée dans l'intestin avant d'arriver dans le sang (arginase intestinale). Biodisponibilité orale médiocre. L-citrulline : convertie en arginine dans le rein (échappe à la dégradation intestinale). Biodisponibilité 3-5x supérieure pour booster l'arginine plasmatique. Choisir la citrulline en première intention." },
      { heading: "Indications", body: "Hypertension artérielle (sous suivi médical). Dysfonction érectile légère à modérée. Performance sportive (endurance, récupération). Jambes lourdes, syndrome de Raynaud. Cicatrisation lente. Récupération post-AVC (sous avis médical)." },
      { heading: "Dosages", body: "L-citrulline malate : 3 à 6 g/jour, en 2 prises, idéalement à jeun ou avant l'effort sportif. L-arginine : 3 à 6 g/jour, plusieurs prises. Cure de 4-12 semaines. Précautions : herpès actif (l'arginine favorise sa réplication), grossesse, hypotension. Sous traitement antihypertenseur : ajustement nécessaire." },
    ],
    ['arginine', 'citrulline', 'NO']
  ),
  a('carnitine-acetyl',
    "L-carnitine et acétyl-L-carnitine : énergie mitochondriale",
    "Transport des acides gras dans les mitochondries. Fatigue chronique, performances cognitives, sport.",
    "La L-carnitine et son dérivé acétyl-L-carnitine (ALC) sont essentielles au transport des acides gras dans les mitochondries pour leur transformation en énergie. La carnitine est synthétisée par le foie mais peut faire défaut chez les seniors, les vegans, les fatigués chroniques. L'ALC traverse la barrière hémato-encéphalique : précieuse pour la cognition.",
    [
      { heading: "Rôles physiologiques", body: "Transport des acides gras à longues chaînes dans les mitochondries (β-oxydation). Production d'ATP à partir des graisses. Acétyl-L-carnitine : neuroprotection, mémoire, énergie mentale. Modulation du métabolisme cellulaire." },
      { heading: "Indications", body: "L-carnitine : fatigue chronique, sport d'endurance, perte de poids (mobilisation des graisses), insuffisance cardiaque (en complément médical). Acétyl-L-carnitine : déclin cognitif lié à l'âge, neuropathies diabétiques, syndrome de fatigue chronique avec brouillard mental, dépression du sujet âgé." },
      { heading: "Dosages", body: "L-carnitine (forme L-tartrate ou base) : 1000 à 3000 mg/jour. Acétyl-L-carnitine : 1000 à 2000 mg/jour, idéalement le matin. Cure de 3 mois minimum. Précautions : hypothyroïdie non équilibrée (peut aggraver), insuffisance rénale, épilepsie, sous traitement anticoagulant (consultation)." },
    ],
    ['carnitine', 'ALC', 'mitochondries']
  ),
];
