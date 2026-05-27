import type { QuizQuestion } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'morphologie',
    question: "Comment décririez-vous votre silhouette générale ?",
    options: [
      { label: 'Trapue, ronde, membres plutôt courts, ossature solide', points: { sanguin: 3, bilieux: 0, nerveux: 0, lymphatique: 1 } },
      { label: 'Musclée, sèche, tonique, athlétique', points: { sanguin: 1, bilieux: 3, nerveux: 0, lymphatique: 0 } },
      { label: 'Fine, longiligne, parfois osseuse', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 0 } },
      { label: 'Ronde, graisses diffuses, traits doux', points: { sanguin: 0, bilieux: 0, nerveux: 0, lymphatique: 3 } },
    ],
  },
  {
    id: 2,
    category: 'morphologie',
    question: "Quelle est la forme générale de votre visage ?",
    options: [
      { label: 'Rond, plein, joues colorées', points: { sanguin: 3, bilieux: 0, nerveux: 0, lymphatique: 1 } },
      { label: 'Carré, mâchoire prononcée, traits anguleux', points: { sanguin: 0, bilieux: 3, nerveux: 0, lymphatique: 0 } },
      { label: 'Triangulaire (front large, menton fin), traits fins', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 0 } },
      { label: 'Rond et pâle, parfois un peu bouffi', points: { sanguin: 0, bilieux: 0, nerveux: 0, lymphatique: 3 } },
    ],
  },
  {
    id: 3,
    category: 'morphologie',
    question: "Quel est habituellement le teint de votre peau ?",
    options: [
      { label: 'Coloré, rouge facile, parfois rougeurs', points: { sanguin: 3, bilieux: 0, nerveux: 0, lymphatique: 0 } },
      { label: 'Mat, olivâtre ou légèrement jaune', points: { sanguin: 0, bilieux: 3, nerveux: 0, lymphatique: 0 } },
      { label: 'Pâle, peau fine où les veines se voient', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 1 } },
      { label: 'Très pâle, blanc-laiteux, parfois humide', points: { sanguin: 0, bilieux: 0, nerveux: 0, lymphatique: 3 } },
    ],
  },
  {
    id: 4,
    category: 'energie',
    question: "Comment décririez-vous votre niveau d'énergie au quotidien ?",
    options: [
      { label: 'Très élevée, je déborde de vie, parfois trop', points: { sanguin: 3, bilieux: 2, nerveux: 0, lymphatique: 0 } },
      { label: 'Forte et soutenue, je peux travailler dur longtemps', points: { sanguin: 1, bilieux: 3, nerveux: 0, lymphatique: 0 } },
      { label: 'Variable, je m\'épuise vite mais je récupère par à-coups', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 1 } },
      { label: 'Basse, j\'ai besoin de longues nuits, je démarre lentement', points: { sanguin: 0, bilieux: 0, nerveux: 1, lymphatique: 3 } },
    ],
  },
  {
    id: 5,
    category: 'energie',
    question: "Comment dormez-vous ?",
    options: [
      { label: 'Profondément, je m\'endors vite et beaucoup', points: { sanguin: 2, bilieux: 1, nerveux: 0, lymphatique: 3 } },
      { label: 'Peu mais d\'un sommeil dense, je récupère vite', points: { sanguin: 1, bilieux: 3, nerveux: 0, lymphatique: 0 } },
      { label: 'Difficilement, sommeil léger, je rumine, je me réveille la nuit', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 0 } },
      { label: 'Bien mais j\'ai toujours envie de dormir plus', points: { sanguin: 0, bilieux: 0, nerveux: 0, lymphatique: 3 } },
    ],
  },
  {
    id: 6,
    category: 'energie',
    question: "Comment supportez-vous le froid ?",
    options: [
      { label: 'Très bien, j\'ai souvent chaud', points: { sanguin: 3, bilieux: 2, nerveux: 0, lymphatique: 0 } },
      { label: 'Plutôt bien, je suis tonique', points: { sanguin: 1, bilieux: 3, nerveux: 0, lymphatique: 0 } },
      { label: 'Mal, j\'ai toujours les mains et pieds froids', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 1 } },
      { label: 'Assez mal, je me protège, je préfère la chaleur sèche', points: { sanguin: 0, bilieux: 0, nerveux: 1, lymphatique: 3 } },
    ],
  },
  {
    id: 7,
    category: 'digestion',
    question: "Comment est votre appétit ?",
    options: [
      { label: 'Robuste, je mange volontiers, parfois trop', points: { sanguin: 3, bilieux: 1, nerveux: 0, lymphatique: 1 } },
      { label: 'Vorace par moments, j\'ai faim après l\'effort', points: { sanguin: 1, bilieux: 3, nerveux: 0, lymphatique: 0 } },
      { label: 'Capricieux, variable, fragile aux émotions', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 0 } },
      { label: 'Lent, je n\'ai pas vraiment faim mais je grignote', points: { sanguin: 0, bilieux: 0, nerveux: 1, lymphatique: 3 } },
    ],
  },
  {
    id: 8,
    category: 'digestion',
    question: "Quels problèmes digestifs vous touchent le plus ?",
    options: [
      { label: 'Lourdeurs, lenteur après les gros repas', points: { sanguin: 3, bilieux: 1, nerveux: 0, lymphatique: 1 } },
      { label: 'Brûlures, acidité, ulcère, troubles biliaires', points: { sanguin: 0, bilieux: 3, nerveux: 0, lymphatique: 0 } },
      { label: 'Ballonnements, spasmes, côlon irritable, gaz', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 0 } },
      { label: 'Mucosités, transit lent, intolérance laitages', points: { sanguin: 0, bilieux: 0, nerveux: 0, lymphatique: 3 } },
    ],
  },
  {
    id: 9,
    category: 'caractere',
    question: "Comment vous voient les autres en société ?",
    options: [
      { label: 'Chaleureux, jovial, expansif, sociable', points: { sanguin: 3, bilieux: 1, nerveux: 0, lymphatique: 0 } },
      { label: 'Déterminé, leader, parfois autoritaire', points: { sanguin: 1, bilieux: 3, nerveux: 0, lymphatique: 0 } },
      { label: 'Réservé, sensible, intellectuel, parfois anxieux', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 1 } },
      { label: 'Calme, doux, posé, voire passif', points: { sanguin: 0, bilieux: 0, nerveux: 1, lymphatique: 3 } },
    ],
  },
  {
    id: 10,
    category: 'caractere',
    question: "Face au stress, votre réaction typique est plutôt :",
    options: [
      { label: 'M\'agiter, parler fort, exploser brièvement puis passer à autre chose', points: { sanguin: 3, bilieux: 2, nerveux: 0, lymphatique: 0 } },
      { label: 'Foncer, agir, prendre les choses en main', points: { sanguin: 1, bilieux: 3, nerveux: 0, lymphatique: 0 } },
      { label: 'Me ronger les sangs, ruminer, perdre le sommeil', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 1 } },
      { label: 'M\'effondrer, me replier, attendre que ça passe', points: { sanguin: 0, bilieux: 0, nerveux: 1, lymphatique: 3 } },
    ],
  },
  {
    id: 11,
    category: 'caractere',
    question: "Votre émotion dominante est plutôt :",
    options: [
      { label: 'Optimisme, exaltation, parfois anxiété joviale', points: { sanguin: 3, bilieux: 0, nerveux: 0, lymphatique: 0 } },
      { label: 'Impatience, colère brève, irritation', points: { sanguin: 0, bilieux: 3, nerveux: 0, lymphatique: 0 } },
      { label: 'Anxiété, peur, doute, rumination', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 0 } },
      { label: 'Mélancolie, nostalgie, sentiment d\'inertie', points: { sanguin: 0, bilieux: 0, nerveux: 1, lymphatique: 3 } },
    ],
  },
  {
    id: 12,
    category: 'sante',
    question: "Vos points faibles santé récurrents :",
    options: [
      { label: 'Tension, palpitations, congestion, hémorroïdes', points: { sanguin: 3, bilieux: 0, nerveux: 0, lymphatique: 0 } },
      { label: 'Foie sensible, migraines, tendinites, ulcère', points: { sanguin: 0, bilieux: 3, nerveux: 0, lymphatique: 0 } },
      { label: 'Insomnies, spasmophilie, troubles nerveux, fragilité osseuse', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 0 } },
      { label: 'Infections ORL, fatigue chronique, peau, thyroïde', points: { sanguin: 0, bilieux: 0, nerveux: 0, lymphatique: 3 } },
    ],
  },
  {
    id: 13,
    category: 'morphologie',
    question: "Quand vous prenez du poids, c'est principalement :",
    options: [
      { label: 'Au ventre, partie haute du corps, rapidement', points: { sanguin: 3, bilieux: 1, nerveux: 0, lymphatique: 0 } },
      { label: 'Peu, et au niveau abdominal/musculaire', points: { sanguin: 0, bilieux: 3, nerveux: 1, lymphatique: 0 } },
      { label: 'Je ne prends pas de poids facilement', points: { sanguin: 0, bilieux: 1, nerveux: 3, lymphatique: 0 } },
      { label: 'Partout, surtout cuisses, hanches, bras, difficilement réversible', points: { sanguin: 0, bilieux: 0, nerveux: 0, lymphatique: 3 } },
    ],
  },
  {
    id: 14,
    category: 'reactions',
    question: "Quel est votre rapport à l'alcool ?",
    options: [
      { label: 'J\'aime, je supporte bien, parfois trop', points: { sanguin: 3, bilieux: 2, nerveux: 0, lymphatique: 0 } },
      { label: 'J\'apprécie mais je le supporte mal au foie', points: { sanguin: 0, bilieux: 3, nerveux: 0, lymphatique: 0 } },
      { label: 'Très mauvaise tolérance, ça m\'agite ou m\'angoisse', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 1 } },
      { label: 'Peu d\'intérêt, ça m\'endort', points: { sanguin: 0, bilieux: 0, nerveux: 0, lymphatique: 3 } },
    ],
  },
  {
    id: 15,
    category: 'reactions',
    question: "Le matin au réveil, vous êtes :",
    options: [
      { label: 'En pleine forme, sociable d\'emblée', points: { sanguin: 3, bilieux: 2, nerveux: 0, lymphatique: 0 } },
      { label: 'Direct opérationnel, vite à l\'action', points: { sanguin: 1, bilieux: 3, nerveux: 1, lymphatique: 0 } },
      { label: 'Lent à démarrer mais vif intellectuellement après café', points: { sanguin: 0, bilieux: 1, nerveux: 3, lymphatique: 1 } },
      { label: 'Difficile, j\'ai besoin de temps, je suis lourd, somnolent', points: { sanguin: 0, bilieux: 0, nerveux: 1, lymphatique: 3 } },
    ],
  },
  {
    id: 16,
    category: 'caractere',
    question: "Comment travaillez-vous le mieux ?",
    options: [
      { label: 'En équipe, dans le mouvement et l\'échange', points: { sanguin: 3, bilieux: 1, nerveux: 0, lymphatique: 0 } },
      { label: 'Avec des objectifs clairs, en autonomie et avec efficacité', points: { sanguin: 0, bilieux: 3, nerveux: 0, lymphatique: 0 } },
      { label: 'Seul, dans le calme, avec des sujets profonds', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 1 } },
      { label: 'À mon rythme, sans pression, sur le long terme', points: { sanguin: 0, bilieux: 0, nerveux: 1, lymphatique: 3 } },
    ],
  },
  {
    id: 17,
    category: 'sante',
    question: "Votre transit intestinal est :",
    options: [
      { label: 'Régulier, parfois trop volumineux', points: { sanguin: 3, bilieux: 1, nerveux: 0, lymphatique: 1 } },
      { label: 'Rapide, parfois urgent, sensible au stress', points: { sanguin: 0, bilieux: 3, nerveux: 1, lymphatique: 0 } },
      { label: 'Capricieux, alterne constipation et diarrhée selon les émotions', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 0 } },
      { label: 'Lent, paresseux, constipation chronique', points: { sanguin: 0, bilieux: 0, nerveux: 1, lymphatique: 3 } },
    ],
  },
  {
    id: 18,
    category: 'caractere',
    question: "Vous prenez vos décisions :",
    options: [
      { label: 'Au feeling, à l\'instinct, vite et avec enthousiasme', points: { sanguin: 3, bilieux: 1, nerveux: 0, lymphatique: 0 } },
      { label: 'Rapidement après analyse pragmatique, avec assurance', points: { sanguin: 0, bilieux: 3, nerveux: 0, lymphatique: 0 } },
      { label: 'Lentement, en pesant tout, parfois trop', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 1 } },
      { label: 'Très lentement, je préfère qu\'on décide pour moi', points: { sanguin: 0, bilieux: 0, nerveux: 1, lymphatique: 3 } },
    ],
  },
  {
    id: 19,
    category: 'reactions',
    question: "Quel sport vous correspond le mieux ?",
    options: [
      { label: 'Sports d\'équipe, danses, activités sociales', points: { sanguin: 3, bilieux: 1, nerveux: 0, lymphatique: 0 } },
      { label: 'Sports de combat, course, musculation, performance', points: { sanguin: 1, bilieux: 3, nerveux: 0, lymphatique: 0 } },
      { label: 'Yoga, marche méditative, escalade, sports techniques', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 1 } },
      { label: 'Natation, randonnée longue, sports d\'endurance lente', points: { sanguin: 0, bilieux: 0, nerveux: 1, lymphatique: 3 } },
    ],
  },
  {
    id: 20,
    category: 'sante',
    question: "Face à un jeûne court (24h) :",
    options: [
      { label: 'Je le supporte bien, je me sens léger ensuite', points: { sanguin: 3, bilieux: 2, nerveux: 0, lymphatique: 3 } },
      { label: 'Je tiens facilement, je suis même plus lucide', points: { sanguin: 1, bilieux: 3, nerveux: 0, lymphatique: 2 } },
      { label: 'Je suis affamé, faible, irritable, je tremble', points: { sanguin: 0, bilieux: 0, nerveux: 3, lymphatique: 0 } },
      { label: 'Ça ira mais je préfère mes habitudes', points: { sanguin: 1, bilieux: 0, nerveux: 1, lymphatique: 2 } },
    ],
  },
];

export interface QuizResult {
  scores: Record<string, number>;
  total: number;
  dominant: 'sanguin' | 'bilieux' | 'nerveux' | 'lymphatique';
  secondary: 'sanguin' | 'bilieux' | 'nerveux' | 'lymphatique';
  percentages: Record<string, number>;
}

export function computeQuizResult(answers: Record<number, number>): QuizResult {
  const scores = { sanguin: 0, bilieux: 0, nerveux: 0, lymphatique: 0 };

  for (const question of QUIZ_QUESTIONS) {
    const answerIndex = answers[question.id];
    if (answerIndex === undefined) continue;
    const option = question.options[answerIndex];
    if (!option) continue;
    scores.sanguin += option.points.sanguin;
    scores.bilieux += option.points.bilieux;
    scores.nerveux += option.points.nerveux;
    scores.lymphatique += option.points.lymphatique;
  }

  const total = scores.sanguin + scores.bilieux + scores.nerveux + scores.lymphatique;
  const slugs: Array<'sanguin' | 'bilieux' | 'nerveux' | 'lymphatique'> = [
    'sanguin',
    'bilieux',
    'nerveux',
    'lymphatique',
  ];
  const sorted = slugs.sort((a, b) => scores[b] - scores[a]);

  const percentages = {
    sanguin: total > 0 ? Math.round((scores.sanguin / total) * 100) : 25,
    bilieux: total > 0 ? Math.round((scores.bilieux / total) * 100) : 25,
    nerveux: total > 0 ? Math.round((scores.nerveux / total) * 100) : 25,
    lymphatique: total > 0 ? Math.round((scores.lymphatique / total) * 100) : 25,
  };

  return {
    scores,
    total,
    dominant: sorted[0],
    secondary: sorted[1],
    percentages,
  };
}
