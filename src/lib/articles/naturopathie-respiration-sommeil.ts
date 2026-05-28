import type { Article } from '../types';

const a = (slug: string, title: string, excerpt: string, intro: string, sections: { heading: string; body: string }[], tags: string[]): Article => ({
  slug, domain: 'naturopathie', category: 'respiration-sommeil', title, excerpt, readingTime: 4, intro, sections, tags,
});

export const NATURO_RESPIRATION_SOMMEIL: Article[] = [
  a('respiration-abdominale',
    "La respiration abdominale : la base oubliée",
    "Apprendre à respirer par le ventre. La pratique la plus simple et la plus puissante pour le système nerveux.",
    "La respiration abdominale (ou diaphragmatique) est le mode respiratoire physiologique du nourrisson, abandonné en grandissant au profit d'une respiration thoracique courte et stressée. La réapprendre transforme : système parasympathique activé, anxiété diminuée, digestion soutenue, sommeil amélioré, énergie augmentée. 5 minutes deux fois par jour suffisent.",
    [
      { heading: "Le principe physiologique", body: "Le diaphragme est le muscle respiratoire principal. Quand il descend (inspiration), il pousse les viscères qui font gonfler le ventre. Le poumon se remplit principalement par le bas, qui est la zone la plus richement vascularisée. La respiration abdominale active aussi le nerf vague, principal nerf parasympathique, ce qui apaise tout le système nerveux." },
      { heading: "Comment pratiquer (méthode simple)", body: "Allongé sur le dos, une main sur le ventre, une sur le thorax. Inspirer lentement par le nez en gonflant SEULEMENT le ventre (la main sur le thorax ne doit pas bouger). Expirer lentement par la bouche ou le nez en rentrant le ventre. Allonger l'expiration (deux fois plus longue que l'inspiration). Cycle : 4 sec inspiration / 6 sec expiration. 10 cycles = 1 séance. 2-3 fois par jour." },
      { heading: "Variante : cohérence cardiaque 365", body: "5 minutes, 6 respirations par minute (= 5 sec inspi / 5 sec expi), 3 fois par jour. Étudiée et validée scientifiquement. Effet : régule le système nerveux autonome, baisse cortisol, équilibre humeur. Applications gratuites disponibles pour rythmer la pratique. C'est probablement le 'mini-investissement de santé' avec le meilleur retour sur investissement qui soit." },
      { heading: "Bénéfices observés en 3-4 semaines", body: "Sommeil plus profond. Anxiété diminuée. Tension artérielle régulée. Digestion plus fluide. Capacité de concentration accrue. Réponse au stress modulée. Récupération sportive améliorée. Voix plus posée. Posture plus ouverte." },
    ],
    ['respiration', 'parasympathique', 'cohérence cardiaque']
  ),
  a('respiration-4-7-8',
    "La technique du 4-7-8 : endormissement express",
    "4 secondes d'inspiration, 7 de rétention, 8 d'expiration. La méthode du Dr Andrew Weil pour s'endormir en 60 secondes.",
    "La technique du 4-7-8, popularisée par le Dr Andrew Weil, est une méthode de respiration consciente. La popularité dépasse largement la base de preuves disponible, qui reste à ce jour limitée à quelques essais préliminaires. La technique mérite néanmoins d'être connue.",
    [
      { heading: "Le protocole exact", body: "Position : allongé, langue contre le palais derrière les dents du haut, garder cette position tout le long. Inspirer par le nez en comptant 4 secondes. Retenir la respiration 7 secondes. Expirer par la bouche (en faisant un léger sifflement) en comptant 8 secondes. C'est un cycle. Faire 4 cycles. Au début, possible étourdissement bénin : normal." },
      { heading: "Pourquoi cette technique serait apaisante", body: "L'expiration prolongée activerait le système parasympathique via le tonus vagal — un mécanisme partagé avec la cohérence cardiaque, mieux étudiée. La rétention de 7 secondes augmente le CO2 sanguin, ce qui paradoxalement détend. Le comptage mobilise l'attention et limite les ruminations." },
      { heading: "Usages courants", body: "Endormissement : 4 cycles avant de dormir. Crise d'anxiété : 4 cycles, à répéter au besoin. Avant un événement stressant (entretien, examen) : 4 cycles 15 min avant. Réveil nocturne avec ruminations : 4 cycles pour rendormir. Cette technique est traditionnelle ; ses bénéfices sont rapportés par les utilisateurs sans avoir été formellement comparés à un placebo dans des essais de grande envergure." },
      { heading: "Précautions", body: "Pratique très sûre. Étourdissement les premières fois si pas habitué à retenir sa respiration : normal et bénin. Pas de pratique en conduisant ou en activité dangereuse (effet relaxant). Pas plus de 4 cycles d'affilée au début. Augmenter à 8 cycles maximum après 1 mois de pratique." },
    ],
    ['4-7-8', 'sommeil', 'anxiété']
  ),

  /* ── REFACTOR : hygiène du sommeil ─────────────────────────── */
  {
    slug: 'hygiene-sommeil',
    domain: 'naturopathie',
    category: 'respiration-sommeil',
    title: "Hygiène du sommeil : ce que les méta-analyses confirment",
    excerpt: "Au-delà des conseils traditionnels, quelles règles de sommeil sont réellement validées par la littérature contrôlée ?",
    readingTime: 5,
    evidence_level: 'meta-analysis',
    evidence_note: "Les piliers de l'hygiène de sommeil (régularité, environnement, éviction des écrans, caféine) sont soutenus par des méta-analyses récentes. Certaines pratiques (médecine chinoise des heures de réveil, éviction du Wi-Fi) restent traditionnelles, non démontrées.",
    intro: "L'hygiène de sommeil regroupe les habitudes qui favorisent un endormissement et un sommeil de qualité. Une méta-analyse récente aurait confirmé qu'améliorer le sommeil produit des bénéfices mesurables sur la santé mentale [#s1]. Plusieurs principes sont solidement étayés, d'autres restent traditionnels.",
    sections: [
      { heading: "Régularité et environnement", body: "La régularité des horaires de coucher et de lever, l'obscurité, le silence et une température fraîche (16-19 °C) seraient les piliers les plus solides. Une revue parue dans Family Practice aurait toutefois souligné que l'éducation seule à l'hygiène de sommeil produit un effet modeste en monothérapie face à l'insomnie chronique [#s2]. La thérapie cognitivo-comportementale spécifique de l'insomnie (TCC-i) reste l'approche de première ligne validée." },
      { heading: "Lumière et chronobiologie", body: "La lumière bleue émise par les écrans inhiberait la sécrétion nocturne de mélatonine. Conséquence logique : l'éviction d'écrans 1 h avant le coucher est recommandée. L'exposition à la lumière du jour le matin (15-30 min) consoliderait à l'inverse l'ancrage circadien et améliorerait la qualité du sommeil suivant." },
      { heading: "Plantes et tryptophane", body: "Une méta-analyse publiée dans Nutrition Reviews aurait observé qu'une supplémentation en tryptophane à dose modérée (≥ 1 g/jour) améliorerait significativement la qualité subjective du sommeil [#s3]. Les plantes traditionnelles (passiflore, mélisse, valériane) disposent par ailleurs d'essais randomisés modestes mais cohérents en direction." },
      { heading: "Ce qui relève de la tradition", body: "Les correspondances entre heure de réveil et organes (médecine chinoise) ainsi que la prudence vis-à-vis du Wi-Fi dans la chambre relèvent à ce jour de l'empirisme. Ces pratiques ne sont pas démenties, mais aucune littérature contrôlée ne les a évaluées." },
    ],
    sources: [
      { id: 's1', type: 'meta-analysis', title: "Improving sleep quality leads to better mental health: A meta-analysis of randomised controlled trials", authors: 'Scott AJ, et al.', journal: 'Sleep Medicine Reviews', year: 2021, pmid: '34607184', url: 'https://pubmed.ncbi.nlm.nih.gov/34607184/' },
      { id: 's2', type: 'meta-analysis', title: "Sleep hygiene education as a treatment of insomnia: a systematic review and meta-analysis", authors: 'Chung KF, et al.', journal: 'Family Practice', year: 2018, pmid: '29194467', url: 'https://pubmed.ncbi.nlm.nih.gov/29194467/' },
      { id: 's3', type: 'meta-analysis', title: "The impact of tryptophan supplementation on sleep quality: a systematic review, meta-analysis, and meta-regression", authors: 'Sutanto CN, et al.', journal: 'Nutrition Reviews', year: 2022, pmid: '33942088', url: 'https://pubmed.ncbi.nlm.nih.gov/33942088/' },
    ],
    tags: ['sommeil', 'hygiène', 'mélatonine'],
    updatedAt: '2026-05-28',
  },

  /* ── REFACTOR : cohérence cardiaque ────────────────────────── */
  {
    slug: 'coherence-cardiaque',
    domain: 'naturopathie',
    category: 'respiration-sommeil',
    title: "Cohérence cardiaque (respiration lente) : effets documentés",
    excerpt: "La respiration à 6 cycles/minute fait l'objet d'un nombre croissant d'essais. Synthèse des méta-analyses récentes.",
    readingTime: 5,
    evidence_level: 'meta-analysis',
    evidence_note: "Les effets sur la variabilité de la fréquence cardiaque (HRV) et le tonus parasympathique sont aujourd'hui documentés par méta-analyse. Les bénéfices cliniques (anxiété, performance) restent à confirmer par des essais de plus grande envergure.",
    intro: "La cohérence cardiaque désigne une respiration lente, généralement à 6 cycles par minute, censée maximiser la variabilité de la fréquence cardiaque (HRV). La méta-analyse récente de Laborde et collaborateurs aurait confirmé un effet significatif de la respiration lente sur le tonus vagal et la HRV [#s1]. Les implications cliniques se précisent.",
    sections: [
      { heading: "Le principe physiologique", body: "À 6 respirations par minute, le rythme cardiaque s'accélère à l'inspiration et ralentit à l'expiration de façon ample et régulière. Cette « synchronisation » vasomotrice produirait une activation parasympathique soutenue. Le biofeedback HRV exploiterait ce phénomène pour entraîner l'autorégulation autonome [#s2]." },
      { heading: "Le protocole 365", body: "Pratique répandue en France : 3 fois par jour, 5 minutes, 6 cycles par minute (≈ 5 s inspiration, 5 s expiration). Idéalement le matin, avant le déjeuner et en fin de journée. Cette posologie n'a pas été formellement comparée à d'autres rythmes — le rythme de 6/min étant celui retenu dans la majorité des essais publiés." },
      { heading: "Effets documentés et limites", body: "Les essais auraient mis en évidence une amélioration de la HRV, une réduction de la fréquence cardiaque de repos et une baisse modeste de l'anxiété auto-rapportée [#s3]. Les preuves d'efficacité clinique restent moins solides sur des critères durs (sommeil, performance cognitive, tension artérielle), même si la direction de l'effet est cohérente." },
      { heading: "Outils pratiques", body: "De nombreuses applications gratuites (RespiRelax+, Petit BamBou, Calm) rythment la respiration. Sans outil : compter 5 secondes pour l'inspiration et 5 secondes pour l'expiration. Au bout de quelques semaines, le rythme s'internalise et la pratique devient autonome." },
    ],
    sources: [
      { id: 's1', type: 'meta-analysis', title: "Effects of voluntary slow breathing on heart rate and heart rate variability: A systematic review and a meta-analysis", authors: 'Laborde S, et al.', journal: 'Neuroscience and Biobehavioral Reviews', year: 2022, pmid: '35623448', url: 'https://pubmed.ncbi.nlm.nih.gov/35623448/' },
      { id: 's2', type: 'rct', title: "Heart Rate Variability Biofeedback Based on Slow-Paced Breathing With Immersive Virtual Reality Nature Scenery", authors: 'Blum J, et al.', journal: 'Frontiers in Psychology', year: 2019, pmid: '31616353', url: 'https://pubmed.ncbi.nlm.nih.gov/31616353/' },
      { id: 's3', type: 'rct', title: "Psychophysiological effects of slow-paced breathing at six cycles per minute with or without heart rate variability biofeedback", authors: 'Laborde S, et al.', journal: 'Psychophysiology', year: 2022, pmid: '34633670', url: 'https://pubmed.ncbi.nlm.nih.gov/34633670/' },
    ],
    tags: ['cohérence cardiaque', 'HRV', 'cortisol'],
    updatedAt: '2026-05-28',
  },

  a('insomnie-naturelle',
    "Insomnie : solutions naturelles selon le type",
    "Endormissement, milieu de nuit, petit matin : chaque insomnie a sa cause et son protocole. Approche personnalisée.",
    "L'insomnie n'est pas une mais plusieurs. Selon le moment du trouble (endormissement, milieu de nuit, petit matin), les causes physiologiques et les solutions diffèrent. Une approche personnalisée donne de bien meilleurs résultats qu'un somnifère universel.",
    [
      { heading: "Insomnie d'endormissement (>30 min pour s'endormir)", body: "Causes : ruminations mentales, anxiété, café tardif, écrans, dîner trop tardif. Solutions : passiflore (extrait standardisé 30 min avant coucher), magnésium glycérophosphate (200-400 mg au dîner), respiration 4-7-8 au lit, écriture cathartique des préoccupations 1h avant, lavande en diffusion." },
      { heading: "Réveil milieu de nuit (1h-3h)", body: "En médecine chinoise : heure du foie. Causes possibles : surcharge hépatique (excès alimentaires, alcool, médicaments), colère réprimée, déjeuner et dîner trop lourds, hypoglycémie nocturne. Solutions : alléger considérablement le dîner ; cure de chardon-marie / desmodium ; compresse chaude foie 30 min avant coucher ; gestion émotionnelle de la colère (écriture, marche)." },
      { heading: "Réveil petit matin (3h-5h)", body: "En médecine chinoise : heure des poumons. Causes : tristesse, deuil non exprimé, cortisol bas, surrénales fatiguées, dépression saisonnière. Solutions : adaptogènes (ashwagandha, rhodiole) — pas le soir mais en journée ; thérapie expression émotionnelle ; vitamine D (carence fréquente) ; lumière forte au réveil ; consultation si > 3 semaines." },
      { heading: "Sommeil léger non réparateur", body: "Sensation de ne pas avoir vraiment dormi malgré 8h au lit. Causes : apnée du sommeil (consultation pneumo si ronflements + somnolence diurne) ; carence en magnésium chronique ; chambre trop chaude ou bruyante ; alcool en soirée (déstructure sommeil profond) ; cycle de sommeil perturbé. Solutions : magnésium glycérophosphate 400-600 mg le soir ; température chambre 17°C ; éliminer alcool en soirée 30 jours ; tracker sommeil pour analyser." },
    ],
    ['insomnie', 'sommeil', 'phytothérapie']
  ),
  a('melatonine-naturelle',
    "Mélatonine naturelle : la chimie du sommeil",
    "Comment booster naturellement la production de mélatonine sans en prendre. Lumière, aliments, plantes.",
    "La mélatonine, hormone du sommeil, est sécrétée par la glande pinéale en réponse à l'obscurité. Sa sécrétion est facilement perturbée par la lumière nocturne (écrans), le stress, l'âge. Avant de prendre des compléments, on peut booster sa production naturelle. Quelques règles simples suffisent souvent à retrouver un sommeil profond.",
    [
      { heading: "Le cycle naturel de la mélatonine", body: "Sécrétion débute vers 21h-22h en absence de lumière. Pic vers 2h-4h du matin. Chute progressive jusqu'au réveil. Cycle régulé par les noyaux suprachiasmatiques (horloge biologique cérébrale). Précurseurs : tryptophane → 5-HTP → sérotonine → mélatonine. Donc booster ces précurseurs aide la production." },
      { heading: "Aliments riches en tryptophane", body: "Le tryptophane est l'acide aminé précurseur. Sources : œufs, dinde, poulet, poisson, fromage de chèvre, légumineuses, oléagineux (noix, amandes). Astuce : prendre une petite portion glucidique au dîner avec ces aliments aide le tryptophane à passer la barrière hémato-encéphalique." },
      { heading: "Aliments contenant de la mélatonine", body: "Certains aliments contiennent directement de la mélatonine. Cerises (surtout Montmorency) : top source. Noix de Grenoble. Maïs, riz. Tomate, raisin. Sarrasin. Pistaches. Lait. Un petit bol de cerises Montmorency le soir = équivalent d'un demi-cachet de mélatonine, sans effets secondaires." },
      { heading: "Les ennemis de la mélatonine", body: "Lumière bleue après 21h (écrans surtout). LED blanches du salon le soir (passer en ambiance tamisée). Caféine après 14h (demi-vie de 6h). Stress et cortisol élevé le soir. Vitamines B au soir (stimulantes). Sport intense après 19h." },
      { heading: "Si la prise de mélatonine s'impose", body: "Préférer mélatonine 'à libération immédiate' 1 mg, prise 30 min avant le coucher. Doses faibles plus efficaces que fortes (paradoxe). En cure de 2-3 semaines, pas en continu. Idéal pour décalage horaire (jet lag), travail posté, ou réinitialisation après dérèglement." },
    ],
    ['mélatonine', 'sommeil', 'tryptophane']
  ),

  /* ── NEW : tryptophane sommeil ─────────────────────────────── */
  {
    slug: 'tryptophane-sommeil',
    domain: 'naturopathie',
    category: 'respiration-sommeil',
    title: "Tryptophane et sommeil : un signal robuste",
    excerpt: "Précurseur de la sérotonine et de la mélatonine, le tryptophane bénéficie d'une méta-analyse récente plutôt encourageante.",
    readingTime: 4,
    evidence_level: 'meta-analysis',
    intro: "Le tryptophane est l'acide aminé précurseur de la sérotonine puis de la mélatonine. Son rôle dans le sommeil a fait l'objet de plusieurs essais et d'une méta-analyse récente — la base de preuves est désormais consistante.",
    sections: [
      { heading: "Méta-analyse 2022", body: "Une méta-analyse publiée dans Nutrition Reviews aurait conclu qu'une supplémentation en tryptophane à hauteur d'au moins 1 g/jour améliorerait significativement la qualité subjective du sommeil chez l'adulte [#s1]. L'effet apparaîtrait plus net sur le temps total de sommeil et la latence d'endormissement que sur les paramètres polysomnographiques objectifs." },
      { heading: "Mécanisme physiologique", body: "Le tryptophane traverse la barrière hémato-encéphalique en compétition avec d'autres acides aminés. Une petite portion glucidique stimulerait l'insuline, qui détourne les acides aminés concurrents vers le muscle et favoriserait le passage cérébral du tryptophane. Une fois dans le cerveau, il est converti en 5-HTP, sérotonine, puis mélatonine." },
      { heading: "Sources et précautions", body: "Sources alimentaires : œufs, dinde, fromage, légumineuses, oléagineux. La supplémentation directe en L-tryptophane reste à éviter en cas de traitement antidépresseur sérotoninergique (risque de syndrome sérotoninergique). Le 5-HTP, intermédiaire métabolique, présente le même risque." },
    ],
    sources: [
      { id: 's1', type: 'meta-analysis', title: "The impact of tryptophan supplementation on sleep quality: a systematic review, meta-analysis, and meta-regression", authors: 'Sutanto CN, et al.', journal: 'Nutrition Reviews', year: 2022, pmid: '33942088', url: 'https://pubmed.ncbi.nlm.nih.gov/33942088/' },
    ],
    contre_indications: [
      "Traitement antidépresseur sérotoninergique (ISRS, IRSN, IMAO)",
      "Grossesse et allaitement (données insuffisantes)",
      "Atteinte hépatique sévère",
    ],
    tags: ['tryptophane', 'sommeil', 'sérotonine', 'mélatonine'],
    updatedAt: '2026-05-28',
  },
];
