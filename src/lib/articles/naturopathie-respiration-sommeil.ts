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
    "La technique du 4-7-8, popularisée par le Dr Andrew Weil, est une méthode de respiration consciente conçue pour induire rapidement un état de relaxation profonde. Particulièrement efficace pour s'endormir : nombreux pratiquants rapportent un endormissement en 60 secondes après 2-3 cycles. La technique mérite d'être apprise par tous.",
    [
      { heading: "Le protocole exact", body: "Position : allongé, langue contre le palais derrière les dents du haut, garder cette position tout le long. Inspirer par le nez en comptant 4 secondes. Retenir la respiration 7 secondes. Expirer par la bouche (en faisant un léger sifflement) en comptant 8 secondes. C'est un cycle. Faire 4 cycles. C'est tout. Au début, possible étourdissement bénin : normal." },
      { heading: "Pourquoi ça fonctionne", body: "L'expiration prolongée double active très fortement le système parasympathique. La rétention de 7 secondes augmente le CO2 sanguin, ce qui paradoxalement détend (effet 'soupir profond' contre l'anxiété). Le comptage occupe le mental qui rumine et l'empêche de partir en boucle d'inquiétude. La position fixe de la langue détourne l'attention." },
      { heading: "Usages courants", body: "Endormissement : 4 cycles avant de dormir. Crise d'anxiété : 4 cycles, à répéter au besoin. Avant un événement stressant (entretien, examen) : 4 cycles 15 min avant. Réveil nocturne avec ruminations : 4 cycles pour rendormir. Au lieu de la cigarette/snack émotionnel : 4 cycles à la place." },
      { heading: "Précautions", body: "Pratique très sûre. Étourdissement les premières fois si pas habitué à retenir sa respiration : normal et bénin. Pas de pratique en conduisant ou en activité dangereuse (effet relaxant). Pas plus de 4 cycles d'affilée au début. Augmenter à 8 cycles maximum après 1 mois de pratique. Bénéfices visibles dès la première séance." },
    ],
    ['4-7-8', 'sommeil', 'anxiété']
  ),
  a('hygiene-sommeil',
    "Hygiène du sommeil : 12 règles d'or",
    "Les fondamentaux d'un sommeil profond et réparateur. Ce que la science valide aujourd'hui.",
    "Le sommeil n'est pas un luxe mais une nécessité physiologique. Pendant les 8 heures de sommeil, le cerveau évacue ses déchets (système glymphatique), le foie détoxifie, les hormones se régulent, les souvenirs se consolident, l'immunité se renforce. Une hygiène de sommeil rigoureuse est l'un des plus grands leviers de santé.",
    [
      { heading: "Les 12 règles fondamentales", body: "1. Coucher avant 23h (idéalement 22h). 2. Lever à heure régulière, même le week-end. 3. Chambre fraîche (17-18°C). 4. Obscurité TOTALE (rideaux occultants, masque). 5. Silence (boules quies si besoin). 6. Pas d'écrans 1h avant le coucher. 7. Pas de Wi-Fi dans la chambre, téléphone en mode avion. 8. Dîner léger 3h avant. 9. Pas de café après 14h. 10. Activité physique le jour, pas tard le soir. 11. Exposition au soleil le matin (régulation circadienne). 12. Rituel de coucher constant." },
      { heading: "Le rôle de la lumière", body: "La rétine contient des cellules spécifiques (à mélanopsine) qui régulent la mélatonine selon la lumière reçue. Lumière bleue (écrans, LED blanches) inhibe la sécrétion de mélatonine. Solution : pas d'écrans 1h avant ; sinon filtres anti-lumière bleue (lunettes ambrées, paramétrages logiciels). Inversement : exposition à la lumière du jour le matin (15-30 min) cale l'horloge biologique." },
      { heading: "Les boissons et plantes du soir", body: "Tilleul + verveine + mélisse : trio classique apaisant. Camomille romaine pour les sensibles. Passiflore en cas de ruminations. Valériane en cas d'insomnie sévère ponctuelle. Lait d'or (lait végétal + curcuma + cannelle + miel + poivre). Éviter : café, thé noir, sodas après 14h. Alcool : déstructure le sommeil profond (paradoxal). Diner légèrement, finir 3h avant coucher." },
      { heading: "Ce qui réveille la nuit", body: "Réveil 1-3h : foie (médecine chinoise) ; alimentaire trop riche le soir ; alcool. Réveil 3-5h : poumons (deuil non exprimé) ou cortisol bas du matin. Solutions : dîner léger, gestion émotionnelle, soutien hépatique (chardon-Marie, desmodium en cure). Phytothérapie ciblée selon l'heure de réveil. Magnésium glycérophosphate le soir : aide remarquable au sommeil profond." },
    ],
    ['sommeil', 'hygiène', 'mélatonine']
  ),
  a('coherence-cardiaque',
    "La cohérence cardiaque 365 : 3 fois 5 minutes",
    "5 minutes, 6 respirations par minute, 3 fois par jour. La méthode validée par la science et accessible à tous.",
    "La cohérence cardiaque est la mise en synchronisation du rythme cardiaque avec la respiration. À 6 respirations par minute, le cœur entre dans un état de cohérence où la variabilité du rythme cardiaque (HRV) augmente — signe d'une excellente régulation autonome. 5 minutes pratiquées 3 fois par jour produisent des bénéfices documentés sur le cortisol, l'humeur, la concentration.",
    [
      { heading: "Le principe scientifique", body: "Quand la respiration ralentit à 6/min, les variations du rythme cardiaque s'alignent : le rythme s'accélère à l'inspiration, ralentit à l'expiration, créant une 'onde sinusoïdale' parfaite à l'électrocardiogramme. Cet état (cohérence cardiaque) reflète une optimisation du système nerveux autonome. La pratique régulière 'éduque' le système à revenir spontanément à cet état régulé." },
      { heading: "Le protocole 365", body: "365 = 3 fois par jour, 6 respirations par minute, 5 minutes. Matin (au réveil) : régule la journée. Avant le déjeuner : régule la digestion. Avant le dîner ou en fin de journée : décompresse. Concrètement : inspirer 5 sec, expirer 5 sec (cycle de 10 sec = 6 cycles/min). Penser à 'sourire intérieurement' à l'inspiration aide à enclencher l'état." },
      { heading: "Outils pour rythmer la pratique", body: "Applications gratuites : RespiRelax+ (excellente), Petit BamBou, Calm, Cardiozen. Le rythme visuel guide la respiration (animation montante/descendante). 5 minutes passées sans s'en rendre compte. Sans téléphone : compter dans sa tête ou utiliser une chanson au tempo connu. Au bout de quelques semaines, le rythme s'internalise." },
      { heading: "Bénéfices documentés", body: "Baisse du cortisol salivaire (mesurée). Augmentation de la DHEA. Régulation de la tension artérielle. Amélioration de la variabilité cardiaque. Diminution de l'anxiété (échelles validées). Meilleure performance cognitive. Sommeil plus profond. Récupération sportive accélérée. Études : Servant 2015, Lehrer 2014, McCraty 2010 (Institut HeartMath)." },
    ],
    ['cohérence cardiaque', 'HRV', 'cortisol']
  ),
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
      { heading: "Aliments riches en tryptophane", body: "Le tryptophane est l'acide aminé précurseur. Sources : œufs, dinde, poulet, poisson, fromage de chèvre, légumineuses, oléagineux (noix, amandes). Astuce : prendre une petite portion glucidique au dîner avec ces aliments aide le tryptophane à passer la barrière hémato-encéphalique (insuline éclipse les autres acides aminés concurrents). Ex : œuf coque + tartine pain complet." },
      { heading: "Aliments contenant de la mélatonine", body: "Certains aliments contiennent directement de la mélatonine, en quantités significatives. Cerises (surtout Montmorency) : top source. Noix de Grenoble. Maïs, riz. Tomate, raisin. Sarrasin. Pistaches. Lait. Un petit bol de cerises Montmorency le soir = équivalent d'un demi-cachet de mélatonine, sans effets secondaires." },
      { heading: "Les ennemis de la mélatonine", body: "Lumière bleue après 21h (écrans surtout). LED blanches du salon le soir (passer en ambiance tamisée). Wi-Fi et 5G dans la chambre (controversé mais prudence). Caféine après 14h (demi-vie de 6h). Stress et cortisol élevé le soir. Vitamines B au soir (stimulantes). Sport intense après 19h." },
      { heading: "Si la prise de mélatonine s'impose", body: "Préférer mélatonine 'à libération immédiate' 1 mg, prise 30 min avant le coucher. Doses faibles plus efficaces que fortes (paradoxe). En cure de 2-3 semaines, pas en continu. Idéal pour décalage horaire (jet lag), travail posté, ou réinitialisation après dérèglement. Ne remplace pas l'hygiène de sommeil." },
    ],
    ['mélatonine', 'sommeil', 'tryptophane']
  ),
];
