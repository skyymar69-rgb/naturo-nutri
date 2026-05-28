import type { Article } from '../types';

const a = (slug: string, title: string, excerpt: string, intro: string, sections: { heading: string; body: string }[], tags: string[]): Article => ({
  slug, domain: 'naturopathie', category: 'stress-emotions', title, excerpt, readingTime: 4, intro, sections, tags,
});

export const NATURO_STRESS_EMOTIONS: Article[] = [
  a('stress-chronique-causes',
    "Stress chronique : comprendre les mécanismes",
    "Cortisol, adrénaline, surrénales : ce qui se passe quand le stress dure. Et comment en sortir naturellement.",
    "Le stress aigu est physiologique et utile. Le stress chronique, lui, épuise. Sa biologie : le cortisol reste élevé en permanence, les surrénales s'épuisent, l'inflammation augmente, l'immunité chute, le sommeil se dégrade, l'humeur sombre. Comprendre cette cascade permet de comprendre pourquoi tant de personnes 'tiennent' puis 'craquent'. Et comment intervenir naturellement.",
    [
      { heading: "Le cycle du stress chronique", body: "Phase 1 (alarme) : adrénaline, cortisol haut, énergie disponible, performance possible. Phase 2 (résistance) : cortisol élevé prolongé, hyper-vigilance, sommeil dégradé, mais on 'tient'. Phase 3 (épuisement) : surrénales épuisées, cortisol bas, fatigue chronique, anxiété, dépression. C'est ici que survient le burnout. La récupération demande des mois." },
      { heading: "Les symptômes physiologiques", body: "Stress installé : tension cervicale, mâchoires serrées, jambes lourdes, intestin irrité, peau qui souffre, troubles du sommeil (endormissement, réveils nocturnes), modifications de l'appétit, fringales sucrées/salées, perte de libido, cycle féminin dérégulé, infections à répétition (immunité baissée), fatigue post-effort." },
      { heading: "Plantes adaptogènes (régulatrices)", body: "Ashwagandha (Withania somnifera) : régulateur du cortisol, anxiolytique doux. Cure 8-12 semaines. Rhodiole : action plus rapide, anti-fatigue. Le matin uniquement. Éleuthérocoque : tonique général sans excitation. Ginseng : pour les profils plus robustes. Holy basil (basilic sacré, Tulsi) : très doux, anti-stress émotionnel. Cures de 3 mois minimum pour effet durable." },
      { heading: "Nutriments anti-stress essentiels", body: "Magnésium glycérophosphate : 400-600 mg/jour en cure de 4-6 mois. Vitamine B complexe (B6 P5P, B12 méthylcobalamine, B9 méthylfolate) : soutien synthèse neurotransmetteurs. Vitamine C : surrénales en consomment massivement sous stress. Oméga-3 : anti-inflammatoires neuronaux. Zinc, taurine : régulation glutamate." },
      { heading: "Hygiène anti-stress fondamentale", body: "Cohérence cardiaque 3 fois 5 minutes par jour. Sommeil avant 23h. Limitation des sollicitations numériques. Marche en nature 3-5 fois par semaine. Pratique méditative ou contemplative quotidienne. Caféine modérée. Identification et résolution des sources chroniques de stress." },
    ],
    ['stress', 'cortisol', 'surrénales']
  ),

  /* ── REFACTOR : méditation pleine conscience ───────────────── */
  {
    slug: 'meditation-pleine-conscience',
    domain: 'naturopathie',
    category: 'stress-emotions',
    title: "Méditation de pleine conscience : ce que disent les méta-analyses",
    excerpt: "Le programme MBSR a fait l'objet de dizaines d'essais. Synthèse honnête des bénéfices documentés et des limites.",
    readingTime: 5,
    evidence_level: 'meta-analysis',
    evidence_note: "Le programme MBSR (Mindfulness-Based Stress Reduction) est l'une des interventions « bien-être » les mieux étayées. Les bénéfices sur stress, anxiété et qualité de vie sont documentés ; l'ampleur reste modeste à modérée.",
    intro: "La méditation de pleine conscience est un entraînement de l'attention. Le programme MBSR codifié par Jon Kabat-Zinn a fait l'objet de centaines d'essais. Plusieurs méta-analyses récentes permettent une lecture désormais nuancée — bénéfices réels, ampleur modeste à modérée.",
    sections: [
      { heading: "Méta-analyse chez les sujets sains", body: "Une méta-analyse publiée dans Journal of Psychosomatic Research aurait conclu à un effet modéré du MBSR sur le stress perçu et la qualité de vie chez les adultes en bonne santé [#s1]. L'ampleur de l'effet resterait inférieure à celle observée dans les populations cliniques, mais détectable et reproductible." },
      { heading: "MBSR et yoga sur les marqueurs physiologiques", body: "Une méta-analyse parue dans Psychoneuroendocrinology a examiné les effets du yoga et du MBSR sur des marqueurs physiologiques du stress (cortisol, fréquence cardiaque, tension) [#s2]. Les auteurs auraient observé une réduction significative du cortisol et de la fréquence cardiaque de repos, sans effet majeur sur la tension artérielle." },
      { heading: "Application clinique : exemple du cancer du sein", body: "Une méta-analyse récente parue dans BMC Psychology a évalué l'usage du MBSR chez les patientes atteintes de cancer du sein [#s3]. Le bénéfice apparaîtrait clinique sur l'anxiété, la dépression et la qualité de vie liée au traitement, sans modifier l'évolution oncologique elle-même." },
      { heading: "Démarrer simplement", body: "Posture assise confortable, dos droit, regard mi-clos. Programmer un minuteur : 5 minutes au début, augmenter progressivement. Observer le souffle. Quand l'esprit s'égare, revenir doucement, sans jugement. Ce mouvement de retour EST la méditation. Les programmes structurés en 8 semaines (MBSR) ont l'avantage d'avoir été le plus largement étudiés." },
    ],
    sources: [
      { id: 's1', type: 'meta-analysis', title: "Mindfulness-based stress reduction for healthy individuals: A meta-analysis", authors: 'Khoury B, et al.', journal: 'Journal of Psychosomatic Research', year: 2015, pmid: '25818837', url: 'https://pubmed.ncbi.nlm.nih.gov/25818837/' },
      { id: 's2', type: 'meta-analysis', title: "Yoga, mindfulness-based stress reduction and stress-related physiological measures: A meta-analysis", authors: 'Pascoe MC, et al.', journal: 'Psychoneuroendocrinology', year: 2017, pmid: '28963884', url: 'https://pubmed.ncbi.nlm.nih.gov/28963884/' },
      { id: 's3', type: 'meta-analysis', title: "The use of mindfulness-based stress reduction (MBSR) for breast cancer patients-meta-analysis", authors: 'Dong X, et al.', journal: 'BMC Psychology', year: 2024, pmid: '39487509', url: 'https://pubmed.ncbi.nlm.nih.gov/39487509/' },
    ],
    tags: ['méditation', 'mindfulness', 'MBSR'],
    updatedAt: '2026-05-28',
  },

  a('fleurs-de-bach',
    "Fleurs de Bach : les émotions en harmonie",
    "38 élixirs floraux pour les états émotionnels. Approche traditionnelle, sans validation par essais cliniques contrôlés.",
    "Les fleurs de Bach, élaborées par le Dr Edward Bach (1886-1936), sont 38 élixirs floraux conçus pour accompagner les états émotionnels. La méthode est traditionnelle et popularisée depuis près d'un siècle ; à ce jour, les essais cliniques contrôlés ne mettent pas en évidence d'effet supérieur au placebo. Elle reste utilisée comme accompagnement doux, sans risque connu.",
    [
      { heading: "Le principe et la posologie", body: "Une fleur de Bach ne traite pas une maladie physique mais accompagnerait un état émotionnel sous-jacent. Posologie classique : 4 gouttes 4 fois par jour, directement sous la langue ou dans un verre d'eau. Cure : 3 semaines minimum. À ce jour, les essais cliniques publiés (peu nombreux) ne distinguent pas l'effet propre des fleurs d'un effet placebo, ce qui n'invalide pas l'usage mais incite à la prudence dans les promesses." },
      { heading: "Les fleurs les plus connues", body: "Rescue Remedy (5 fleurs) : choc émotionnel, crise. Mimulus : peur définie. Aspen : angoisse vague. Larch : manque de confiance en soi. Olive : épuisement. White Chestnut : ruminations. Walnut : transitions. Star of Bethlehem : chocs anciens." },
      { heading: "Comment choisir ses fleurs", body: "Maximum 5-6 fleurs simultanées. Choisir selon l'état dominant ACTUEL, pas selon une personnalité figée. État qui change = mélange à adapter. Méthode : lister ses émotions du moment et associer chacune à 1-2 fleurs." },
      { heading: "Et le Rescue Remedy ?", body: "Mélange de 5 fleurs (Star of Bethlehem, Rock Rose, Cherry Plum, Impatiens, Clematis) traditionnellement utilisé en situation de crise émotionnelle. Sans contre-indication documentée, utilisé par tous (y compris enfants et animaux). L'effet est principalement subjectif." },
    ],
    ['fleurs de Bach', 'émotions', 'élixirs floraux']
  ),

  a('ecriture-cathartique',
    "L'écriture cathartique : 20 minutes pour libérer",
    "Écrire sur soi-même 20 min, 3 jours d'affilée. Méthode validée scientifiquement (Pennebaker) pour libérer le stress émotionnel.",
    "James Pennebaker, psychologue américain, a démontré dans les années 1980 qu'un protocole d'écriture très simple produit des effets thérapeutiques mesurables : baisse du stress, amélioration de l'immunité, libération émotionnelle. Outil simple, gratuit, sans effets secondaires.",
    [
      { heading: "Le protocole exact", body: "20 minutes minimum, idéalement chronométrées. 3 à 4 jours consécutifs. Pas de pause, l'écriture coule, peu importe la syntaxe ou l'orthographe. Sujet : ce qui vous préoccupe profondément en ce moment, ou un événement passé non résolu. Écrire à la main de préférence. Personne ne lira : possibilité de brûler après." },
      { heading: "Pourquoi ça marche", body: "Le simple fait de mettre des mots sur un état émotionnel le 'transforme' au niveau neuronal : activation préfrontale (régulation) et diminution amygdalienne (alerte). La mise en récit donne du sens à l'expérience, ce qui réduit son intensité émotionnelle. Les bénéfices se mesurent sur l'immunité (taux d'anticorps), la tension, le sommeil." },
      { heading: "Variantes pratiques", body: "Le journal du soir : 10 minutes avant de dormir. La lettre non envoyée : écrire à quelqu'un (vivant ou décédé) tout ce qu'on n'a jamais pu dire, sans envoyer. La gratitude : 3 choses positives de la journée, chaque soir. Les morning pages (Julia Cameron) : 3 pages écrites au réveil." },
      { heading: "Quand ne pas le faire seul", body: "Traumatisme grave en cours de digestion : faire avec un thérapeute. Risque suicidaire actif : non sans accompagnement. Premier épisode dépressif sévère : avec soutien." },
    ],
    ['écriture', 'catharsis', 'Pennebaker']
  ),

  /* ── REFACTOR : bain de forêt Shinrin-Yoku ─────────────────── */
  {
    slug: 'bain-foret-shinrin-yoku',
    domain: 'naturopathie',
    category: 'stress-emotions',
    title: "Bain de forêt (Shinrin-Yoku) : signal cortisol confirmé par méta-analyse",
    excerpt: "Au-delà de la randonnée, la pratique japonaise codifiée fait l'objet d'une méta-analyse récente sur le stress.",
    readingTime: 5,
    evidence_level: 'meta-analysis',
    evidence_note: "Les effets aigus sur le cortisol et le tonus parasympathique sont confirmés par méta-analyse. Les effets à long terme et la transposition urbaine (parcs) sont moins solidement étayés mais plausibles.",
    intro: "Le Shinrin-Yoku, codifié au Japon dans les années 1980, désigne une immersion sensorielle en forêt à visée thérapeutique. Les méta-analyses récentes ont permis de mesurer plus précisément ses effets sur le cortisol et la santé.",
    sections: [
      { heading: "Méta-analyse sur le cortisol", body: "Une méta-analyse publiée dans International Journal of Biometeorology aurait conclu que la pratique du Shinrin-Yoku abaisserait significativement le cortisol salivaire chez les sujets exposés à la forêt par rapport à un environnement urbain témoin [#s1]. L'effet apparaîtrait aigu (mesuré quelques heures après) ; la persistance dans le temps reste à mieux documenter." },
      { heading: "Mécanismes proposés", body: "Une revue parue dans Environmental Health and Preventive Medicine aurait synthétisé les hypothèses mécanistiques : exposition aux phytoncides (composés organiques volatils sécrétés par les conifères), activation des cellules NK (Natural Killers), effet de restauration attentionnelle de l'environnement naturel, modulation du système nerveux autonome [#s2]. Aucun mécanisme isolé ne suffit à expliquer l'ensemble des effets observés." },
      { heading: "Mise en pratique", body: "2 à 4 heures par semaine en forêt, idéalement forêt de conifères. Marche lente, sans objectif de performance. Activation consciente des 5 sens. Pauses régulières pour respirer profondément. Pas de téléphone. Pas de forêt à proximité : tout espace vert riche en arbres convient (parc urbain dense, jardin botanique, bois communal)." },
      { heading: "Ce qui n'est pas démontré", body: "Les effets curatifs sur des pathologies définies (dépression caractérisée, cancer, hypertension installée) ne sont pas prouvés par essais randomisés. Le Shinrin-Yoku se positionne comme accompagnement du bien-être, sans promesse thérapeutique. Cette nuance est essentielle juridiquement." },
    ],
    sources: [
      { id: 's1', type: 'meta-analysis', title: "Effects of forest bathing (shinrin-yoku) on levels of cortisol as a stress biomarker: a systematic review and meta-analysis", authors: 'Antonelli M, et al.', journal: 'International Journal of Biometeorology', year: 2019, pmid: '31001682', url: 'https://pubmed.ncbi.nlm.nih.gov/31001682/' },
      { id: 's2', type: 'review', title: "Effects of forest environment (Shinrin-yoku/Forest bathing) on health promotion and disease prevention", authors: 'Li Q', journal: 'Environmental Health and Preventive Medicine', year: 2022, pmid: '36328581', url: 'https://pubmed.ncbi.nlm.nih.gov/36328581/' },
    ],
    tags: ['shinrin yoku', 'forêt', 'cortisol'],
    updatedAt: '2026-05-28',
  },

  a('yoga-anti-stress',
    "Le yoga anti-stress : 4 postures essentielles",
    "Quelques postures simples, 15 minutes par jour, transforment le système nerveux. Programme accessible débutant.",
    "Le yoga, dans sa dimension thérapeutique anti-stress, n'a pas besoin d'être complexe ou acrobatique. Quatre postures fondamentales, pratiquées 15 minutes par jour, activent le système parasympathique et apaisent durablement. Voici un mini-programme accessible à tous, sans matériel ni souplesse particulière requis.",
    [
      { heading: "1. Balasana (posture de l'enfant)", body: "À genoux, fesses sur les talons, front au sol, bras le long du corps ou tendus devant soi. Respiration calme, ample. 2 à 5 minutes. Effet : relaxation profonde, étirement doux du dos, retour vers soi." },
      { heading: "2. Viparita Karani (jambes au mur)", body: "Allongé sur le dos, fesses contre le mur, jambes verticales appuyées au mur, bras relâchés au sol. 5 à 15 minutes. Effet : drainage veineux des jambes, retour veineux facilité, parasympathique activé." },
      { heading: "3. Savasana (relaxation profonde)", body: "Allongé sur le dos, jambes légèrement écartées, pieds tombant vers l'extérieur, bras le long du corps paumes vers le haut, yeux fermés. 10 à 20 minutes. Effet : repos profond du système nerveux." },
      { heading: "4. Sukhasana avec respiration alternée", body: "Assis en tailleur, dos droit, mains sur genoux. Respiration alternée (Nadi Shodhana) : inspirer par narine gauche en bouchant la droite, expirer par narine droite en bouchant la gauche, puis inverser. 10 cycles." },
      { heading: "Comment intégrer cela au quotidien", body: "15 minutes le matin : Balasana + Savasana + respiration alternée. 10 minutes en fin de journée : Viparita Karani. En cas de pic de stress : respiration alternée 5 minutes." },
    ],
    ['yoga', 'postures', 'parasympathique']
  ),

  /* ── NEW : thérapie d'acceptation et engagement (ACT) ──────── */
  {
    slug: 'acceptance-commitment-therapie-act',
    domain: 'naturopathie',
    category: 'stress-emotions',
    title: "Thérapie ACT (acceptance and commitment) : effets documentés",
    excerpt: "Cousine des thérapies cognitivo-comportementales, l'ACT a fait l'objet de plusieurs méta-analyses récentes.",
    readingTime: 5,
    evidence_level: 'meta-analysis',
    evidence_note: "Le niveau de preuve global pour l'ACT est élevé (méta-analyses multiples). Elle est aujourd'hui reconnue par plusieurs sociétés savantes comme une intervention validée pour la douleur chronique et la santé mentale.",
    intro: "L'Acceptance and Commitment Therapy (ACT) est une psychothérapie de 3ème génération mêlant pleine conscience, acceptation des émotions difficiles et engagement vers des valeurs personnelles. Plusieurs méta-analyses récentes documentent son efficacité.",
    sections: [
      { heading: "Méta-analyse sur les troubles cliniques", body: "Une méta-analyse parue dans Psychotherapy and Psychosomatics aurait évalué l'efficacité de l'ACT sur un éventail de troubles mentaux et physiques cliniquement pertinents [#s1]. Les chercheurs auraient conclu à une efficacité significative, comparable à celle des thérapies cognitivo-comportementales classiques sur la plupart des indications." },
      { heading: "Douleur chronique : la meilleure indication", body: "Une revue systématique parue dans Clinical Journal of Pain aurait spécifiquement examiné l'ACT dans la douleur chronique [#s2]. Les bénéfices observés concerneraient à la fois l'intensité douloureuse perçue, le fonctionnement quotidien et la souffrance émotionnelle associée. Une overview plus récente parue dans Journal of Pain a confirmé ces résultats [#s3]." },
      { heading: "Le principe central", body: "Plutôt que de chercher à supprimer les pensées et émotions difficiles (souvent contre-productif), l'ACT encourage à les accueillir comme des expériences mentales transitoires et à orienter son action vers des valeurs personnelles. Six processus clés : défusion cognitive, acceptation, pleine conscience, soi observateur, valeurs, action engagée." },
      { heading: "En pratique", body: "L'ACT se pratique généralement avec un psychologue formé, en individuel ou en groupe. Durée typique : 8 à 16 séances. Plusieurs livres d'auto-aide existent (Russ Harris : « Le piège du bonheur » ; Christophe André : préfaces). À ne pas confondre avec une approche naturopathique : il s'agit d'une psychothérapie validée." },
    ],
    sources: [
      { id: 's1', type: 'meta-analysis', title: "A meta-analysis of the efficacy of acceptance and commitment therapy for clinically relevant mental and physical health problems", authors: 'A-Tjak JG, et al.', journal: 'Psychotherapy and Psychosomatics', year: 2015, pmid: '25547522', url: 'https://pubmed.ncbi.nlm.nih.gov/25547522/' },
      { id: 's2', type: 'meta-analysis', title: "Acceptance and Commitment Therapy (ACT) for Chronic Pain: A Systematic Review and Meta-Analyses", authors: 'Hughes LS, et al.', journal: 'Clinical Journal of Pain', year: 2017, pmid: '27479642', url: 'https://pubmed.ncbi.nlm.nih.gov/27479642/' },
      { id: 's3', type: 'meta-analysis', title: "Acceptance and Commitment Therapy for Chronic Pain: An Overview of Systematic Reviews with Meta-Analysis", authors: 'Martinez-Calderon J, et al.', journal: 'Journal of Pain', year: 2024, pmid: '37748597', url: 'https://pubmed.ncbi.nlm.nih.gov/37748597/' },
    ],
    tags: ['ACT', 'psychothérapie', 'douleur chronique', 'pleine conscience'],
    updatedAt: '2026-05-28',
  },

  /* ── NEW : écriture expressive et immunité ─────────────────── */
  {
    slug: 'ecriture-expressive-immunite',
    domain: 'naturopathie',
    category: 'stress-emotions',
    title: "Écriture expressive : effets sur l'immunité documentés",
    excerpt: "Au-delà des effets émotionnels, l'écriture expressive a-t-elle un impact mesurable sur les marqueurs biologiques ?",
    readingTime: 4,
    evidence_level: 'preliminary',
    evidence_note: "Les essais initiaux sont anciens et de petite taille. Les revues plus récentes confirment certains signaux mais soulignent l'hétérogénéité méthodologique. L'effet émotionnel est globalement consensuel, l'effet biologique reste à mieux quantifier.",
    intro: "Le protocole d'écriture expressive développé par James Pennebaker dans les années 1980 a généré une littérature foisonnante. Au-delà des bénéfices émotionnels, certains travaux ont exploré des effets biologiques mesurables — notamment sur l'immunité.",
    sections: [
      { heading: "Revue dans Vaccine : effet adjuvant immunitaire", body: "Une revue systématique parue dans Vaccine aurait examiné les interventions psychologiques susceptibles de renforcer la réponse vaccinale [#s1]. L'écriture expressive y figurerait comme l'une des interventions associées à une amélioration modeste mais détectable de la réponse anticorps post-vaccination, dans certains essais. La portée de ces données reste limitée par la taille des échantillons." },
      { heading: "Essais initiaux et adaptation au contexte VIH", body: "Un essai paru dans AIDS and Behavior aurait évalué l'effet de l'écriture expressive sur l'adaptation psychologique chez des personnes vivant avec le VIH [#s2]. Les chercheurs auraient observé une réduction des symptômes anxieux et dépressifs, sans démontrer d'effet sur les marqueurs biologiques immédiats." },
      { heading: "Le protocole standard de Pennebaker", body: "20 minutes par jour, 3 à 4 jours consécutifs, sur un sujet émotionnellement chargé. Écriture libre, sans contrainte de forme. Le simple fait de mettre des mots semble produire l'essentiel de l'effet, indépendamment du destinataire (personne ne lit). Un essai dans Nursing Administration Quarterly aurait évalué la version électronique du protocole et conclu à des bénéfices similaires [#s3]." },
      { heading: "Précautions", body: "Cette pratique reste à manier avec prudence en cas de traumatisme aigu ou de trouble dépressif sévère. L'accompagnement d'un thérapeute est alors préférable. Pour la majorité des contextes (stress du quotidien, deuil léger, transitions), elle paraît sans risque." },
    ],
    sources: [
      { id: 's1', type: 'review', title: "Psychological interventions as vaccine adjuvants: A systematic review", authors: 'Vedhara K, et al.', journal: 'Vaccine', year: 2019, pmid: '31068258', url: 'https://pubmed.ncbi.nlm.nih.gov/31068258/' },
      { id: 's2', type: 'rct', title: "The effects of expressive writing on adjustment to HIV", authors: 'Rivkin ID, et al.', journal: 'AIDS and Behavior', year: 2006, pmid: '16421649', url: 'https://pubmed.ncbi.nlm.nih.gov/16421649/' },
      { id: 's3', type: 'review', title: "Therapeutic benefits of expressive writing in an electronic format", authors: 'Atkinson R', journal: 'Nursing Administration Quarterly', year: 2009, pmid: '19546740', url: 'https://pubmed.ncbi.nlm.nih.gov/19546740/' },
    ],
    tags: ['écriture expressive', 'Pennebaker', 'immunité'],
    updatedAt: '2026-05-28',
  },
];
