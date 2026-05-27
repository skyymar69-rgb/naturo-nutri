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
      { heading: "Nutriments anti-stress essentiels", body: "Magnésium glycérophosphate : 400-600 mg/jour en cure de 4-6 mois. Vitamine B complexe (B6 P5P, B12 méthylcobalamine, B9 méthylfolate) : soutien synthèse neurotransmetteurs. Vitamine C : surrénales en consomment massivement sous stress. Oméga-3 : anti-inflammatoires neuronaux. Zinc, taurine : régulation glutamate. Ces nutriments combinés transforment souvent le terrain en quelques mois." },
      { heading: "Hygiène anti-stress fondamentale", body: "Cohérence cardiaque 3 fois 5 minutes par jour (non négociable). Sommeil avant 23h. Limitation des sollicitations numériques. Marche en nature 3-5 fois par semaine. Pratique méditative ou contemplative quotidienne. Caféine modérée. Identification et résolution des sources chroniques de stress (relations toxiques, surcharge, valeurs non respectées)." },
    ],
    ['stress', 'cortisol', 'surrénales']
  ),
  a('meditation-pleine-conscience',
    "Méditation de pleine conscience : démarrer simple",
    "Pas besoin de moine, pas besoin de monastère. 10 minutes par jour transforment l'état mental.",
    "La méditation n'est pas un état mystique réservé à quelques initiés, mais un entraînement de l'attention accessible à tous. La 'pleine conscience' (mindfulness) — observation simple de ce qui est, sans jugement — a fait l'objet de centaines d'études depuis 30 ans : effets démontrés sur stress, anxiété, dépression, immunité, tension, cognition. 10 minutes par jour suffisent pour observer les changements en 6-8 semaines.",
    [
      { heading: "Comment démarrer (très simple)", body: "Asseyez-vous confortablement (chaise, coussin, peu importe). Dos droit, épaules détendues. Yeux fermés ou regard mi-clos. Programmez un minuteur : 5 minutes au début, puis 10, puis 15-20. Pendant ce temps : observez votre respiration. Quand votre esprit s'égare (et il s'égarera mille fois) : remarquez-le sans jugement, et revenez à la respiration. C'est tout. Ce mouvement de retour EST la méditation." },
      { heading: "Ce qu'il faut NE PAS faire", body: "Ne pas essayer de 'ne penser à rien'. Impossible et inutile. Le mental pense, c'est sa fonction. Ne pas se juger quand on s'égare. Le retour à la respiration est l'exercice. Ne pas attendre d'illumination. Ce n'est pas l'objectif. Ne pas viser la performance. Pratique douce, sans effort excessif. Ne pas comparer ses séances. Chacune est différente." },
      { heading: "Bénéfices documentés", body: "8 semaines de pratique régulière (programme MBSR de Jon Kabat-Zinn) : diminution mesurable du cortisol, baisse de l'anxiété (échelles standardisées), amélioration de la qualité du sommeil, diminution des symptômes inflammatoires, amélioration du contrôle émotionnel, modifications neuroplastiques mesurées en IRM (épaississement préfrontal, atrophie de l'amygdale)." },
      { heading: "Ressources gratuites pour commencer", body: "Petit BamBou (application française, excellent fondamentaux gratuits). Calm, Headspace (anglophones). Sur YouTube : 'méditation guidée 10 minutes' avec Christophe André ou Jon Kabat-Zinn. Pleine présence (livre + audios de Fabrice Midal). Pour les laïcs : 'Manuel du méditant' de Christophe André. Pour la version bouddhiste contemporaine : Jack Kornfield." },
    ],
    ['méditation', 'mindfulness', 'attention']
  ),
  a('fleurs-de-bach',
    "Fleurs de Bach : les émotions en harmonie",
    "38 élixirs floraux pour les états émotionnels : peur, doute, abattement, indifférence, hypersensibilité. Tableau pratique.",
    "Les fleurs de Bach, élaborées par le Dr Edward Bach (médecin homéopathe anglais, 1886-1936), sont 38 élixirs floraux conçus pour les états émotionnels. Méthode douce, sans risque, particulièrement adaptée aux émotions difficiles à verbaliser. La formule de secours (Rescue Remedy) est la plus connue. Pour aller plus loin, chaque fleur correspond à un état émotionnel précis.",
    [
      { heading: "Le principe et la posologie", body: "Une fleur de Bach ne traite pas une maladie physique mais l'état émotionnel sous-jacent. Posologie standard : 4 gouttes 4 fois par jour, directement sous la langue ou dans un verre d'eau bue tout au long de la journée. Ou : 2 gouttes du mélange personnalisé dans un flacon de 30 ml d'eau + 1 c. à café d'alcool de conservation. Cure : 3 semaines minimum pour effet de fond, à renouveler si besoin." },
      { heading: "Les fleurs les plus utiles à connaître", body: "Rescue Remedy (5 fleurs) : choc émotionnel, crise. Mimulus : peur définie (peur de parler en public, des araignées). Aspen : angoisse vague, sans cause définie. Rock Rose : panique, terreur. Cherry Plum : peur de perdre le contrôle, de craquer. Larch : manque de confiance en soi. Olive : épuisement total après long effort. Hornbeam : 'fatigue du lundi matin', démotivation. White Chestnut : ruminations mentales obsessionnelles. Walnut : périodes de changement, transitions. Star of Bethlehem : chocs anciens non digérés. Wild Rose : indifférence, résignation, manque d'élan." },
      { heading: "Comment choisir ses fleurs", body: "Maximum 5-6 fleurs simultanées (au-delà : dilution d'effet). Choisir selon l'état dominant ACTUEL, pas selon une personnalité figée. État qui change = mélange à adapter. Méthode : lister ses émotions du moment (anxiété, tristesse, colère, etc.) et associer chacune à 1-2 fleurs. Personne en colère + frustrée + dépassée : Vervain + Holly + Elm + Olive par exemple." },
      { heading: "Et le Rescue Remedy ?", body: "Mélange de 5 fleurs (Star of Bethlehem, Rock Rose, Cherry Plum, Impatiens, Clematis) conçu pour les situations de crise émotionnelle aiguë : accident, mauvaise nouvelle, attaque de panique, fou rire qui ne s'arrête pas, examen. 4 gouttes en bouche, à répéter chaque 15 min si besoin jusqu'à apaisement. Existe en spray, en pastilles, en crème pour application cutanée. Sans contre-indication, utilisable par tous (y compris enfants et animaux)." },
    ],
    ['fleurs de Bach', 'émotions', 'élixirs floraux']
  ),
  a('ecriture-cathartique',
    "L'écriture cathartique : 20 minutes pour libérer",
    "Écrire sur soi-même 20 min, 3 jours d'affilée. Méthode validée scientifiquement (Pennebaker) pour libérer le stress émotionnel.",
    "James Pennebaker, psychologue américain, a démontré dans les années 1980 qu'un protocole d'écriture très simple — 20 minutes par jour pendant 3-4 jours d'affilée, sur ce qui nous préoccupe profondément — produit des effets thérapeutiques mesurables : baisse du stress, amélioration de l'immunité, libération émotionnelle. Outil simple, gratuit, sans effets secondaires.",
    [
      { heading: "Le protocole exact", body: "20 minutes minimum, idéalement chronométrées. 3 à 4 jours consécutifs. Pas de pause, l'écriture coule, peu importe la syntaxe ou l'orthographe. Sujet : ce qui vous préoccupe profondément en ce moment, ou un événement passé non résolu. Écrire à la main de préférence (plus connecté au corps). Personne ne lira : possibilité de brûler après. Aucun jugement, aucune censure." },
      { heading: "Pourquoi ça marche", body: "Le simple fait de mettre des mots sur un état émotionnel le 'transforme' au niveau neuronal : activation préfrontale (régulation) et diminution amygdalienne (alerte). La mise en récit donne du sens à l'expérience, ce qui réduit son intensité émotionnelle (Foa, 1995). Sur 3-4 jours, on parvient souvent à des prises de conscience inattendues. Les bénéfices se mesurent sur l'immunité (taux d'anticorps), la tension, le sommeil." },
      { heading: "Variantes pratiques", body: "Le journal du soir : 10 minutes avant de dormir, on vide la journée par écrit. Particulièrement utile pour ceux qui ruminent au lit. La lettre non envoyée : écrire à quelqu'un (vivant ou décédé) tout ce qu'on n'a jamais pu dire, sans envoyer. La gratitude : 3 choses positives de la journée, chaque soir, transforme la perception en 21 jours (étude Seligman). Les morning pages (Julia Cameron) : 3 pages écrites au réveil." },
      { heading: "Quand ne pas le faire seul", body: "Traumatisme grave en cours de digestion : faire avec un thérapeute. Risque suicidaire actif : non sans accompagnement. Premier épisode dépressif sévère : avec soutien. Sinon : l'écriture est probablement l'outil de gestion émotionnelle le plus accessible et le plus puissant qui soit." },
    ],
    ['écriture', 'catharsis', 'Pennebaker']
  ),
  a('bain-foret-shinrin-yoku',
    "Bain de forêt (Shinrin Yoku) : la nature qui soigne",
    "2 heures par semaine en forêt = cortisol diminué de 12%, tension artérielle régulée, immunité boostée. Étude validée.",
    "Le Shinrin Yoku (« bain de forêt »), pratique japonaise codifiée dans les années 1980, désigne l'immersion sensorielle en forêt pour ses bénéfices thérapeutiques. Au-delà de la randonnée sportive, il s'agit de marcher lentement, en respirant amplement, en activant les 5 sens. Plus de 200 études scientifiques japonaises documentent ses effets : baisse du cortisol, augmentation des cellules NK (immunité), régulation de la tension.",
    [
      { heading: "Le protocole standard", body: "2 à 4 heures par semaine en forêt, idéalement forêt de conifères (production de phytoncides bénéfiques). Marche lente, pas d'objectif de performance. Activation consciente des 5 sens : observer les couleurs, écouter les sons, sentir l'odeur des résines, toucher les écorces, goûter l'air. Pauses régulières pour respirer profondément. Téléphone en mode avion, idéalement laissé en voiture." },
      { heading: "Pourquoi ça marche scientifiquement", body: "Les conifères libèrent des phytoncides (composés organiques volatils) qui activent les cellules NK (Natural Killers) du système immunitaire — effet persistant 30 jours. Les ondes alpha cérébrales (relaxation) augmentent. Cortisol baisse de 12% en moyenne en 2h. Tension artérielle régulée. Variabilité cardiaque améliorée. Système parasympathique activé (réparation, digestion, immunité)." },
      { heading: "Variantes accessibles", body: "Pas de forêt à proximité ? Tout espace vert riche en arbres convient : parc urbain dense, jardin botanique, bois communal. Idéalement 2h/semaine au minimum. Moins de 30 min : peu d'effet documenté. Possible en groupe (effet renforcé) ou seul. Hiver et pluie : protégez-vous mais sortez quand même — les bénéfices sont là aussi (l'air froid augmente même l'effet)." },
      { heading: "Ce qu'il faut éviter", body: "Marche sportive intense (l'effet n'est plus le même — c'est du sport). Téléphone ou musique aux oreilles. Conversations soutenues. Course d'orientation. Faire 'plusieurs choses' en même temps. L'essence est dans la lenteur consciente et l'éveil sensoriel. Mieux vaut 30 min de présence pleine que 2h de course distraite." },
    ],
    ['shinrin yoku', 'forêt', 'cortisol']
  ),
  a('yoga-anti-stress',
    "Le yoga anti-stress : 4 postures essentielles",
    "Quelques postures simples, 15 minutes par jour, transforment le système nerveux. Programme accessible débutant.",
    "Le yoga, dans sa dimension thérapeutique anti-stress, n'a pas besoin d'être complexe ou acrobatique. Quatre postures fondamentales, pratiquées 15 minutes par jour, activent le système parasympathique et apaisent durablement. Voici un mini-programme accessible à tous, sans matériel ni souplesse particulière requis.",
    [
      { heading: "1. Balasana (posture de l'enfant)", body: "À genoux, fesses sur les talons, front au sol, bras le long du corps ou tendus devant soi. Respiration calme, ample. 2 à 5 minutes. Effet : relaxation profonde, étirement doux du dos, retour vers soi. C'est la posture-refuge à pratiquer en cas de surcharge mentale ou de fatigue émotionnelle. À faire au réveil ou avant de dormir." },
      { heading: "2. Viparita Karani (jambes au mur)", body: "Allongé sur le dos, fesses contre le mur, jambes verticales appuyées au mur, bras relâchés au sol. 5 à 15 minutes. Effet : drainage veineux des jambes, retour veineux facilité, parasympathique activé, repos profond du système nerveux. À pratiquer en fin de journée pour décompresser. Probablement la posture au meilleur rapport effort/bénéfice." },
      { heading: "3. Savasana (relaxation profonde)", body: "Allongé sur le dos, jambes légèrement écartées, pieds tombant vers l'extérieur, bras le long du corps paumes vers le haut, yeux fermés. 10 à 20 minutes. Respiration naturelle. Effet : repos profond du système nerveux, équivalent énergétique d'une courte sieste. À pratiquer après une séance de sport, en milieu de journée, ou en début de soirée." },
      { heading: "4. Sukhasana avec respiration alternée", body: "Assis en tailleur (ou sur chaise si inconfortable), dos droit, mains sur genoux. Respiration alternée (Nadi Shodhana) : inspirer par narine gauche en bouchant la droite, expirer par narine droite en bouchant la gauche, puis inverser. 10 cycles. Effet : équilibrage des hémisphères cérébraux, apaisement mental profond, recentrage. Pratique de transition entre le travail et le retour à la maison." },
      { heading: "Comment intégrer cela au quotidien", body: "15 minutes le matin (au réveil) : Balasana + Savasana + respiration alternée. 10 minutes en fin de journée : Viparita Karani (jambes au mur). En cas de pic de stress : respiration alternée 5 minutes. Cette pratique fondamentale, intégrée 6 semaines, transforme la régulation du stress chronique. Pas besoin de pratiquer le yoga en cours, ces quatre postures à elles seules sont thérapeutiques." },
    ],
    ['yoga', 'postures', 'parasympathique']
  ),
];
