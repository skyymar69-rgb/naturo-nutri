import type { Article } from '../types';

export const NATURO_JEUNES: Article[] = [
  {
    slug: 'jeune-hydrique',
    domain: 'naturopathie',
    category: 'jeunes',
    title: 'Le jeûne hydrique : guide complet',
    excerpt: "Abstinence alimentaire totale, eau seule. Le jeûne hydrique est la voie royale de la régénération cellulaire. Protocole jour par jour, bénéfices, contre-indications.",
    readingTime: 9,
    intro:
      "Le jeûne hydrique consiste à s'abstenir de toute nourriture solide et liquide calorique, ne consommant que de l'eau pure. Pratiqué depuis des millénaires dans toutes les traditions, il est aujourd'hui validé scientifiquement : la découverte de l'autophagie (Yoshinori Ohsumi, Nobel 2016) confirme que dès 16-24 heures de jeûne, l'organisme recycle ses composants endommagés. Bien préparé et bien encadré, c'est l'un des outils de santé les plus puissants qui existent.",
    sections: [
      {
        heading: "Qu'est-ce que le jeûne hydrique exactement ?",
        body: "Le jeûne hydrique strict autorise uniquement l'eau pure (1,5 à 2 litres par jour). Certaines écoles tolèrent les tisanes douces non sucrées (verveine, mélisse, fenouil), considérées comme proches de l'eau. À distinguer du jeûne aux jus (avec apport calorique) et du jeûne sec (sans eau, plus extrême). Le jeûne hydrique active les mécanismes profonds de régénération cellulaire sans contraindre la digestion.",
      },
      {
        heading: "Les mécanismes biologiques activés",
        body: "Dès 12 heures sans nourriture, le foie commence à épuiser ses réserves de glycogène. Vers 16-24 heures, l'organisme bascule en cétose : il puise dans les graisses pour produire des corps cétoniques, carburant alternatif du cerveau. L'autophagie se déclenche : les cellules digèrent leurs propres composants défectueux. L'insuline chute, la sensibilité insulinique remonte. Les cellules immunitaires se renouvellent (étude Longo, 2014). L'organisme fait littéralement le ménage.",
      },
      {
        heading: "Les bénéfices observés",
        body: "Régénération immunitaire, perte de poids ciblée sur la masse grasse, amélioration de la sensibilité à l'insuline (utile en pré-diabète), baisse de l'inflammation chronique, clarté mentale et baisse de l'anxiété, repos digestif total avec régénération des muqueuses intestinales, décongestion vasculaire et lymphatique. Sur les paramètres biologiques : baisse de la CRP, de la ferritine, de la glycémie, normalisation de la tension chez l'hypertendu.",
      },
      {
        heading: "Préparation : les 3 jours qui précèdent",
        body: "Une préparation trop rapide multiplie les crises de guérison difficiles. Trois jours avant le jeûne, on retire progressivement : J-3 : café, alcool, viandes rouges, produits laitiers, sucres raffinés. J-2 : on passe aux céréales complètes, légumineuses, légumes vapeur, fruits frais. J-1 : uniquement fruits crus, légumes crus, jus de légumes. Le soir précédant le jeûne : monodiète de pomme ou bouillon de légumes filtré. Cette descente alimentaire prépare le terrain et adoucit l'entrée en jeûne.",
      },
      {
        heading: "Pendant le jeûne : comment se comporter",
        body: "Boire 1,5 à 2 litres d'eau pure par jour, à température ambiante. Repos relatif : éviter les sports intenses, privilégier la marche lente, la sieste, la lecture. Garder le corps au chaud (frilosité fréquente en jeûne). Aérer la chambre, marcher au moins 30 min en plein air. Ne pas conduire si vertiges. Tenir un journal de jeûne pour noter émotions, ressentis, crises éventuelles. Bains chauds réguliers pour soutenir l'élimination cutanée.",
      },
      {
        heading: "Sortie de jeûne : la phase la plus délicate",
        body: "La sortie doit durer aussi longtemps que le jeûne lui-même. Une réalimentation trop rapide est dangereuse (syndrome de renutrition). J+1 : bouillon de légumes, jus de pomme dilué (200 ml toutes les 3h). J+2 : fruits frais, légumes crus en très petites quantités. J+3 : légumes vapeur, oléagineux trempés. J+5 : céréales complètes, légumineuses. J+7 : retour à l'alimentation normale. Mastiquer abondamment à chaque bouchée. Aucune protéine animale les 3 premiers jours.",
      },
      {
        heading: "Les crises de guérison : ne pas s'inquiéter",
        body: "Maux de tête, langue chargée, mauvaise haleine, nausées, fatigue intense, irritabilité émotionnelle, urines très foncées : ce sont des signaux POSITIFS d'élimination. L'organisme largue les toxines accumulées. Il faut accompagner par l'hydratation, le repos, parfois un bain chaud. Si une crise devient ingérable (vomissements répétés, vertiges sévères, douleurs inhabituelles), arrêter le jeûne et consulter.",
      },
    ],
    keyPoints: [
      "Activation de l'autophagie cellulaire dès 16-24 heures",
      "Préparation de 3 jours indispensable",
      "1,5 à 2 L d'eau pure par jour minimum",
      "Sortie aussi longue que le jeûne",
      "Crises de guérison = signaux positifs d'élimination",
      "Repos physique et chaleur essentiels",
    ],
    protocole: [
      "J-3 : éviction café/alcool/viande rouge/laitages",
      "J-2 : céréales complètes, légumes, fruits",
      "J-1 : crudités + jus uniquement",
      "J0 à Jn : eau pure (1,5-2 L/j) + tisanes douces",
      "J+1 : bouillon + jus de pomme dilué",
      "J+2 à J+5 : réalimentation crescendo",
      "Toute la cure : repos, marche douce, chaleur, journal de jeûne",
    ],
    contre_indications: [
      "Grossesse et allaitement",
      "Diabète insulinodépendant",
      "Troubles du comportement alimentaire",
      "Insuffisance rénale ou hépatique sévère",
      "Dénutrition (IMC < 18)",
      "Pathologie cardiaque sévère non stabilisée",
      "Tempérament nerveux pur : limiter à 48h sans encadrement",
    ],
    faq: [
      {
        question: "Quelle durée pour un premier jeûne ?",
        answer: "24 à 48 heures pour un débutant, idéalement encadré. Puis 3 jours après quelques expériences. Au-delà de 5 jours, un encadrement médical ou naturopathique est fortement recommandé.",
      },
      {
        question: "Peut-on travailler en jeûne ?",
        answer: "Pour un jeûne court (24-48h) : oui pour un travail intellectuel léger. Pour un jeûne de 3 jours et plus : repos vivement conseillé, prévoir cette période en congé.",
      },
      {
        question: "Faut-il faire des lavements ?",
        answer: "Pas obligatoire, mais utile en cas de constipation préalable ou pour adoucir les crises de guérison. Un lavement à l'eau tiède en début de jeûne peut être bénéfique.",
      },
      {
        question: "Le jeûne fait-il vraiment perdre du poids durablement ?",
        answer: "La perte initiale concerne surtout l'eau (glycogène) et la masse grasse. La pérennité dépend entièrement de la qualité de l'alimentation reprise après. Un jeûne suivi d'une malbouffe ne sert à rien.",
      },
    ],
    tags: ['jeûne', 'détox', 'autophagie', 'régénération'],
  },
  {
    slug: 'jeune-intermittent',
    domain: 'naturopathie',
    category: 'jeunes',
    title: "Le jeûne intermittent : 16/8, 18/6, OMAD",
    excerpt: "Le jeûne intermittent quotidien est la pratique la plus accessible : 14 à 20 heures sans nourriture chaque jour. Effets métaboliques majeurs, mode d'emploi.",
    readingTime: 7,
    intro:
      "Le jeûne intermittent (Intermittent Fasting, IF) consiste à concentrer ses repas sur une fenêtre courte et à jeûner le reste du temps, quotidiennement. C'est la forme de jeûne la plus accessible, la plus durable, et probablement la plus impactante sur la santé métabolique à long terme. Loin d'être une mode, c'est en réalité une pratique très ancienne — nos ancêtres ne grignotaient pas entre les repas.",
    sections: [
      {
        heading: "Les différents protocoles",
        body: "12/12 : fenêtre alimentaire de 12 heures, jeûne de 12 heures. Niveau débutant. 14/10 : 14h de jeûne. 16/8 : le plus populaire — 16h de jeûne, 8h de repas (ex : repas de 12h à 20h). 18/6 : version intermédiaire. 20/4 (Warrior Diet) : un seul gros repas le soir. OMAD (One Meal A Day) : 23h de jeûne, 1 repas. 5:2 : alimentation normale 5 jours, jeûne ou très faible apport 2 jours non consécutifs.",
      },
      {
        heading: "Les bénéfices documentés",
        body: "Amélioration de la sensibilité à l'insuline (utile en surpoids, syndrome métabolique, pré-diabète). Perte de masse grasse abdominale. Activation modérée mais régulière de l'autophagie. Régulation des hormones de la faim (ghréline, leptine). Amélioration des marqueurs inflammatoires. Réduction du grignotage compulsif. Pour beaucoup : meilleure concentration le matin (cerveau en cétose légère).",
      },
      {
        heading: "Comment démarrer",
        body: "Commencer doucement : 12/12 pendant une semaine (sauter le snack du soir). Puis 14/10. Puis 16/8. Choisir une fenêtre qui convient à son rythme social : la majorité opte pour 12h-20h ou 13h-21h. Le matin : eau, café noir, thé, tisane sans sucre, eau citronnée — tout cela ne casse pas le jeûne. Pas de lait, pas de sucre, pas de jus.",
      },
      {
        heading: "Pendant la fenêtre alimentaire : qualité avant quantité",
        body: "Le jeûne intermittent n'autorise pas la malbouffe pendant la fenêtre. La qualité reste essentielle : aliments entiers, protéines de qualité, légumes en abondance, bonnes graisses, glucides à index glycémique modéré. Sinon : peu de bénéfices. Bien manger pendant la fenêtre conditionne 80% du résultat.",
      },
      {
        heading: "Erreurs fréquentes à éviter",
        body: "Démarrer trop fort (16/8 d'emblée pour un débutant) → fringales, fatigue, abandon. Compenser par des gros repas malsains pendant la fenêtre. Boire des boissons sucrées le matin en pensant que ça ne compte pas (jus de fruits, lait dans le café). Pratiquer le jeûne intermittent en cas de TCA. Ignorer les signaux du corps (cycle féminin notamment : adapter la pratique).",
      },
      {
        heading: "Femmes : précautions particulières",
        body: "Les femmes sont plus sensibles aux signaux de restriction calorique. Un jeûne trop strict peut perturber le cycle menstruel, le sommeil, ou créer du stress hormonal. Recommandations : commencer doucement (12-14h), éviter les jeûnes longs juste avant les règles, ne pas pratiquer en cas de grossesse, allaitement, hypothyroïdie active. Adapter la durée selon la phase du cycle (plus de jeûne en début, moins en seconde moitié).",
      },
    ],
    keyPoints: [
      "Protocole le plus accessible et durable",
      "16/8 = standard pour la majorité",
      "Amélioration métabolique et sensibilité insuline",
      "Démarrer progressivement (12/12 puis 14/10 puis 16/8)",
      "Qualité de l'alimentation dans la fenêtre essentielle",
      "Adapter pour les femmes selon le cycle",
    ],
    contre_indications: [
      "Grossesse et allaitement",
      "Troubles du comportement alimentaire",
      "Diabète insulinodépendant (sauf encadrement)",
      "Hypoglycémie sévère",
      "Hypothyroïdie non contrôlée",
      "Adolescents en croissance",
    ],
    faq: [
      {
        question: "Le café noir casse-t-il le jeûne ?",
        answer: "Non, le café noir sans sucre ni lait préserve les effets métaboliques du jeûne et peut même les amplifier (effet sur l'autophagie). Idem pour le thé, les tisanes sans édulcorant.",
      },
      {
        question: "Peut-on faire du sport à jeun ?",
        answer: "Oui pour le sport modéré (marche, vélo léger, yoga). Pour le sport intense (HIIT, musculation lourde) : préférer une fenêtre alimentaire avant. Écoutez votre corps.",
      },
      {
        question: "Combien de temps pour voir les effets ?",
        answer: "2 à 4 semaines pour les premiers effets métaboliques. 8 à 12 semaines pour des changements significatifs sur le poids et l'inflammation.",
      },
    ],
    tags: ['jeûne intermittent', 'IF', '16:8', 'autophagie'],
  },
  {
    slug: 'jeune-aux-jus',
    domain: 'naturopathie',
    category: 'jeunes',
    title: "Le jeûne aux jus de légumes",
    excerpt: "Plus doux que le jeûne hydrique, le jeûne aux jus apporte enzymes, vitamines et minéraux sans solliciter la digestion. Recettes par profil et planning.",
    readingTime: 6,
    intro:
      "Le jeûne aux jus représente un compromis entre alimentation normale et jeûne strict. Pendant 3 à 21 jours, on ne consomme que des jus pressés à froid (de préférence à l'extracteur), riches en enzymes vivantes, vitamines et minéraux biodisponibles. Plus accessible que le jeûne hydrique, particulièrement intéressant pour qui n'ose pas se lancer dans l'abstinence totale.",
    sections: [
      {
        heading: "Différence fondamentale avec le jeûne hydrique",
        body: "Le jeûne hydrique active pleinement l'autophagie cellulaire mais épuise rapidement le terrain fragile. Le jeûne aux jus apporte 500 à 1000 kcal par jour sous forme de micronutriments hautement assimilables, sans solliciter la digestion (les jus sont prédigérés mécaniquement). L'autophagie est moins intense mais bien réelle, et la cure peut durer plus longtemps en sécurité.",
      },
      {
        heading: "Extracteur ou centrifugeuse ?",
        body: "L'extracteur à froid (Kuvings, Hurom, Versapers) presse les ingrédients sans chauffer ni oxyder. Conservation maximale des enzymes et vitamines. Plus cher mais investissement durable. La centrifugeuse, plus accessible, chauffe légèrement par friction et oxyde davantage : à consommer dans les 15 minutes. Le smoothie garde les fibres : plus rassasiant mais demande plus de digestion, donc pas idéal en pur jeûne aux jus.",
      },
      {
        heading: "Planning type d'une journée",
        body: "7h : eau citronnée tiède au réveil. 9h : jus vert (concombre/épinards/citron/gingembre) - 500 ml. 12h : jus carotte/betterave/céleri/curcuma - 500 ml. 15h : tisane douce (verveine, mélisse, ortie). 17h : jus pomme/citron/gingembre - 400 ml. 19h : bouillon de légumes filtré ou jus végétal sans amidon. Entre les jus : eau pure (1 à 1,5 L au total).",
      },
      {
        heading: "Recettes par objectif",
        body: "Détox foie : pomme verte + artichaut + gingembre + citron + branche de céleri. Reminéralisant : 3 carottes + petite betterave + 2 céleris + curcuma frais. Drainant lymphatique : concombre + citron entier + persil + gingembre + 1/4 d'ananas. Cardiovasculaire : betterave + 1/2 grenade + carotte + curcuma. Vert universel : kale + concombre + pomme verte + citron + épinards + gingembre.",
      },
      {
        heading: "Durée selon profil",
        body: "Débutant : 3 jours suffisent pour ressentir des effets nets. Intermédiaire : 5 à 7 jours, idéal pour une cure de printemps. Avancé : 10 à 14 jours en encadrement. Pour profils nerveux fragiles : préférer plusieurs cures courtes (3 jours) à intervalles. Pour profils robustes (sanguin, lymphatique, bilieux) : la cure de 7 à 14 jours est très bien tolérée.",
      },
    ],
    keyPoints: [
      "Compromis idéal entre alimentation et jeûne strict",
      "Apport en enzymes et micronutriments biodisponibles",
      "Extracteur à froid recommandé",
      "Planning de 4 à 5 jus par jour",
      "3 à 21 jours selon profil et expérience",
    ],
    contre_indications: [
      "Diabète insulinodépendant",
      "Grossesse",
      "Hypoglycémie sévère",
      "Reflux gastro-œsophagien sévère (jus acides)",
      "Troubles du comportement alimentaire",
    ],
    tags: ['jeûne', 'jus', 'détox', 'extracteur'],
  },
  {
    slug: 'jeune-sec',
    domain: 'naturopathie',
    category: 'jeunes',
    title: "Le jeûne sec : la voie radicale",
    excerpt: "Jeûne sans eau ni nourriture. Méthode très puissante mais réservée aux praticiens expérimentés et encadrés. Bénéfices, dangers, encadrement.",
    readingTime: 8,
    intro:
      "Le jeûne sec — jeûner sans eau ni nourriture — est la forme la plus extrême et la plus puissante de jeûne. Pratiqué dans certaines traditions religieuses (Ramadan : forme partielle, du lever au coucher du soleil), il fait l'objet de recherches scientifiques sérieuses. Ses effets sont rapides et profonds, mais il s'accompagne de risques réels qui imposent un encadrement strict. Cette page le présente à titre informatif : son usage doit être confié à un praticien expérimenté.",
    sections: [
      {
        heading: "Pourquoi le jeûne sec est-il si puissant ?",
        body: "Privé d'eau, l'organisme active des mécanismes radicalement différents. Il extrait l'eau métabolique des cellules les moins nécessaires : tissus morts, cellules pré-cancéreuses, déchets accumulés. Le système immunitaire chasse activement les agents pathogènes. La cétose s'installe en 12 heures au lieu de 24. L'autophagie est multipliée par 3. Une journée de jeûne sec équivaut, selon certains chercheurs, à trois jours de jeûne hydrique.",
      },
      {
        heading: "Variantes possibles",
        body: "Jeûne sec léger : abstention d'eau interne mais douches autorisées (la peau absorbe une partie de l'eau). Jeûne sec dur : aucun contact avec l'eau, même externe (pas de douche, pas de brossage de dents). Durées : 12 à 36 heures pour les débutants, jusqu'à 72-96 heures pour les expérimentés. Au-delà : danger vital, jamais sans encadrement médical.",
      },
      {
        heading: "Préparation indispensable",
        body: "Une semaine avant : hyperhydratation et alimentation vivante riche en fruits et légumes aqueux (concombre, pastèque, courgette). Trois jours avant : monodiète ou jeûne aux jus pour vider le tube digestif et précondditionner. Veille : repas du soir TRÈS léger, hydratation maximale. Aucune protéine animale les 4 jours précédents.",
      },
      {
        heading: "Sortie de jeûne sec : un art délicat",
        body: "La sortie est la phase la plus dangereuse. Premier verre d'eau : 100 ml seulement, à température ambiante, jus de citron dilué possible. Patientez 30 min. Puis 200 ml. Patientez 1h. Puis tisane, bouillon de légumes filtré. Premier solide après 6 à 12 heures : fruit doux (raisin, pomme). Alimentation normale après 2 à 3 jours. Le syndrome de renutrition est réel : fractionner les apports.",
      },
      {
        heading: "Risques et dangers",
        body: "Déshydratation : risque cardiaque, rénal, hypotension orthostatique. Acidose métabolique. Lithiase rénale (formation de calculs). Aggravation des pathologies cardiaques préexistantes. Confusion mentale, vertiges sévères. Pour ces raisons, le jeûne sec dépasse les 24 heures requiert absolument un encadrement professionnel.",
      },
    ],
    keyPoints: [
      "Forme la plus puissante de jeûne",
      "1 jour de sec ≈ 3 jours de jeûne hydrique",
      "Activation maximale de l'autophagie",
      "RÉSERVÉ aux praticiens expérimentés",
      "Encadrement obligatoire au-delà de 24h",
    ],
    contre_indications: [
      "Toute pathologie cardiaque, rénale, hépatique",
      "Grossesse et allaitement",
      "Diabète sous traitement",
      "Antécédents de lithiase rénale",
      "Sujets fragiles, âgés, dénutris",
      "Première expérience de jeûne (commencer par hydrique)",
    ],
    tags: ['jeûne sec', 'jeûne avancé', 'autophagie', 'détox profonde'],
  },
  {
    slug: 'methode-buchinger',
    domain: 'naturopathie',
    category: 'jeunes',
    title: "Le jeûne Buchinger : la méthode allemande",
    excerpt: "Jeûne thérapeutique légèrement modifié avec apport calorique minimal (250-500 kcal/j). La méthode médicale de référence en Europe.",
    readingTime: 6,
    intro:
      "Otto Buchinger, médecin allemand des années 1920, a développé une méthode de jeûne thérapeutique qui porte son nom et qui reste aujourd'hui la référence en jeûne médical encadré en Europe. À mi-chemin entre le jeûne hydrique strict et le jeûne aux jus, la méthode Buchinger inclut un apport calorique minimal (250 à 500 kcal/jour) sous forme de bouillons et de jus dilués, ce qui adoucit la cure et la rend accessible en cure prolongée (14 à 21 jours).",
    sections: [
      {
        heading: "Les apports caloriques Buchinger",
        body: "Matin : tisane de plantes (achillée, sauge, mélisse). Midi : 250 ml de jus de fruit dilué dans l'eau (pomme, raisin), apportant ~100 kcal. Après-midi : tisane et eau. Soir : bouillon de légumes filtré, parfois 1 cuillère de miel, apportant ~150-200 kcal. Total : 250 à 500 kcal/jour. Cet apport minimal maintient un peu d'énergie sans rompre les mécanismes de cétose et d'autophagie.",
      },
      {
        heading: "Le déroulé d'une cure de 21 jours",
        body: "Jours 1-2 : préparation par allègement alimentaire. Jour 3 : purge intestinale (sulfate de magnésium 30 g dans 500 ml d'eau). Jours 4-18 : jeûne Buchinger proprement dit. Jours 19-21 : reprise alimentaire progressive (3 jours minimum). Pendant la cure : 2 à 3 lavements par semaine pour soutenir l'élimination. Marche quotidienne, hydrothérapie, massages. Cure encadrée en clinique de jeûne ou à domicile avec suivi.",
      },
      {
        heading: "Études cliniques",
        body: "De nombreuses études allemandes (Wilhelmi de Toledo, 2019, 1422 sujets) ont validé l'innocuité et l'efficacité du jeûne Buchinger en clinique : perte de poids contrôlée, baisse de la tension, baisse de la glycémie, amélioration des marqueurs inflammatoires, amélioration de l'humeur. Effets secondaires bénins : céphalées, fatigue les premiers jours.",
      },
      {
        heading: "À qui s'adresse cette méthode",
        body: "Excellent compromis pour quiconque veut bénéficier d'un jeûne prolongé sans la rigueur du jeûne hydrique strict. Particulièrement adapté en cas de surpoids, syndrome métabolique, hypertension, douleurs articulaires chroniques, troubles digestifs fonctionnels, fatigue chronique. À pratiquer idéalement en clinique de jeûne pour la sécurité.",
      },
    ],
    keyPoints: [
      "Méthode allemande de référence médicale",
      "250-500 kcal/jour (bouillons + jus dilués)",
      "Cure type : 7 à 21 jours en clinique",
      "Études cliniques solides",
      "Idéal pour le syndrome métabolique",
    ],
    tags: ['Buchinger', 'jeûne thérapeutique', 'clinique', 'long jeûne'],
  },
  {
    slug: 'preparation-jeune',
    domain: 'naturopathie',
    category: 'jeunes',
    title: "La descente alimentaire avant le jeûne",
    excerpt: "Une préparation soignée multiplie les bénéfices et adoucit les crises. Protocole jour par jour, aliments à éviter, ce qu'il faut prévoir.",
    readingTime: 5,
    intro:
      "Beaucoup d'échecs ou de difficultés en jeûne proviennent d'une préparation négligée. La descente alimentaire — ces 3 à 7 jours qui précèdent le jeûne — conditionne 60% de la réussite de la cure. Plus la descente est progressive, plus l'entrée en jeûne est douce, et plus les crises de guérison sont supportables. Voici comment préparer son corps intelligemment.",
    sections: [
      {
        heading: "Pourquoi préparer absolument",
        body: "Passer brutalement d'une alimentation moderne (café, sucre, viande) au jeûne déclenche un choc métabolique. Le foie n'a pas le temps de se vider, les surrénales paniquent, les sevrages (caféine, sucre) ajoutent leurs symptômes à ceux de l'élimination. Résultat : maux de tête sévères, irritabilité, parfois abandon. À l'inverse, une descente sur 5-7 jours donne au foie le temps de se mettre en condition.",
      },
      {
        heading: "Protocole J-7 à J-1",
        body: "J-7 et J-6 : arrêt de l'alcool, des charcuteries, des plats industriels. J-5 et J-4 : réduction progressive du café (passer à 1 tasse/jour, puis demi-tasse, puis arrêt) et du sucre raffiné. Privilégier les fruits, légumes, céréales complètes. J-3 : éviction totale du café, du sucre, des protéines animales lourdes (viande rouge, charcuterie, fromage). J-2 : alimentation végétale dominante, légumineuses, légumes vapeur, fruits crus. J-1 : crudités, fruits frais, jus de légumes, soupes claires. Soir J-1 : monodiète de pomme ou bouillon.",
      },
      {
        heading: "Aliments à privilégier dans la descente",
        body: "Légumes verts (épinards, blettes, kale) : magnésium, chlorophylle. Pommes : pectine pour le ménage intestinal. Citron : drainant hépatique. Gingembre : digestif et anti-inflammatoire. Oléagineux trempés : minéraux. Avocat, huile d'olive : bonnes graisses. Bouillon d'os ou de légumes : minéraux et collagène.",
      },
      {
        heading: "Aliments à éviter absolument",
        body: "Sucres rapides (sodas, pâtisseries, bonbons) : addictifs, créent des fringales. Aliments transformés industriels : surchargent le foie. Charcuterie, viande rouge : digestion lourde, accumulation purinique. Produits laitiers : mucus et inflammation. Alcool : surchage hépatique avant la cure. Café : déconseillé même décaféiné (sevrage à anticiper).",
      },
      {
        heading: "Ce qu'il faut prévoir matériellement",
        body: "Stock d'eau pure (idéalement faiblement minéralisée). Tisanes de qualité (mélisse, verveine, ortie). Brosse pour la peau (drainage). Bouillotte (pour les soirs froids). Livre, journal, audio inspirants. Planning libéré, sans engagement social pressant. Espace de repos confortable. Pesée non-quotidienne (pour ne pas se focaliser sur le poids).",
      },
    ],
    keyPoints: [
      "Préparation conditionne 60% de la réussite",
      "Descente sur 5-7 jours pour les jeûnes longs",
      "Éviction progressive du café et du sucre",
      "Légumes verts et pommes en abondance",
      "Préparer aussi le matériel et l'organisation",
    ],
    tags: ['jeûne', 'préparation', 'descente alimentaire'],
  },
  {
    slug: 'sortie-jeune',
    domain: 'naturopathie',
    category: 'jeunes',
    title: "La sortie de jeûne : la phase à ne pas rater",
    excerpt: "La sortie est plus délicate que le jeûne lui-même. Mal faite, elle annule les bénéfices et présente des risques. Protocole de réalimentation jour par jour.",
    readingTime: 5,
    intro:
      "« Le jeûne, ce n'est pas l'arrêt qui compte, c'est le redémarrage » — adage des naturopathes traditionnels. Une sortie de jeûne expéditive est l'erreur n°1 commise par les débutants : un gros repas après 3 jours de jeûne peut provoquer des troubles digestifs sévères, voire un syndrome de renutrition dangereux. La règle d'or : la sortie doit être aussi longue, voire plus longue, que le jeûne lui-même.",
    sections: [
      {
        heading: "Le syndrome de renutrition : un danger réel",
        body: "Après un jeûne prolongé, le métabolisme est ralenti, les enzymes digestives moins actives, les électrolytes (phosphore, magnésium, potassium) en équilibre fragile. Une réalimentation trop rapide peut provoquer une chute brutale du phosphore et du magnésium intracellulaires, avec risque de troubles cardiaques. Plus le jeûne a été long, plus le risque est sérieux. La progression lente est non négociable au-delà de 7 jours de jeûne.",
      },
      {
        heading: "Protocole de sortie pour jeûne de 3-5 jours",
        body: "J+1 matin : verre d'eau citronnée tiède. 10h : 250 ml de jus de pomme dilué dans l'eau. 12h : bouillon de légumes filtré. 15h : 1 pomme bien mûre, mâchée longuement. 18h : 1 fruit + 1 yaourt végétal nature OU 200 ml jus de légumes. J+2 : crudités en petite quantité, fruits frais, soupes. J+3 : légumes vapeur, oléagineux trempés. J+4-5 : céréales complètes, légumineuses. J+6-7 : alimentation normale, qualité maintenue.",
      },
      {
        heading: "Protocole pour jeûne long (7 jours +)",
        body: "Sortie minimum 7 à 10 jours. Premières 24h : uniquement bouillons et jus de fruits dilués. J+2 : ajout d'un fruit, d'un jus de légumes complet. J+3 : crudités en petite quantité, soupes maison. J+4-5 : légumes vapeur, oléagineux. J+6-7 : céréales complètes (riz, sarrasin). J+8-9 : légumineuses cuites longuement. J+10 : retour graduel. Mastication +++. Pas d'excès même quand l'appétit revient. Aucune protéine animale les 5 premiers jours.",
      },
      {
        heading: "Les erreurs classiques",
        body: "« Je vais juste manger un steak, j'en rêve depuis 5 jours » : douleurs abdominales garanties. « Une part de pizza ne peut pas faire de mal » : oui, elle peut. « J'ai très faim, je peux manger normalement » : la sensation de faim revient bien avant que l'estomac soit prêt. « Je vais reprendre le café » : à éviter au moins 7 jours après le jeûne, sinon palpitations.",
      },
      {
        heading: "Ancrer les changements",
        body: "La sortie est aussi le moment opportun pour ancrer de nouvelles habitudes. Si vous avez supprimé le café pendant 10 jours, c'est l'occasion de tester si vous allez bien sans. Si vous avez retrouvé une digestion légère, profitez-en pour éliminer durablement certains aliments problématiques. Le jeûne offre une « page blanche » digestive — autant en profiter.",
      },
    ],
    keyPoints: [
      "Sortie aussi longue (ou plus) que le jeûne",
      "Liquides puis fruits puis légumes puis céréales puis légumineuses",
      "Aucune protéine animale les 3-5 premiers jours",
      "Mastication très soignée",
      "Risque de syndrome de renutrition réel au-delà de 7 jours",
    ],
    tags: ['jeûne', 'sortie de jeûne', 'réalimentation'],
  },
  {
    slug: 'crises-guerison',
    domain: 'naturopathie',
    category: 'jeunes',
    title: "Les crises de guérison : comprendre et accompagner",
    excerpt: "Maux de tête, langue chargée, mauvaise haleine, irritabilité : ces signaux désagréables sont en réalité des indices positifs d'élimination. Décryptage.",
    readingTime: 4,
    intro:
      "Lors d'un jeûne, d'une monodiète, ou simplement après un changement alimentaire profond, des symptômes désagréables surgissent souvent : céphalées, nausées, fatigue, irritabilité. Le réflexe est de paniquer, d'abandonner, de croire que « ça ne marche pas pour moi ». En réalité, ces crises sont des signes que ça FONCTIONNE — l'organisme largue ses toxines. Apprendre à les reconnaître et à les accompagner change tout.",
    sections: [
      {
        heading: "Pourquoi ces symptômes apparaissent",
        body: "L'organisme stocke depuis des années des déchets métaboliques, des résidus médicamenteux, des polluants alimentaires, des métaux lourds. Tant qu'on continue à le surcharger, il les met de côté dans les graisses et les tissus conjonctifs. Quand on lui donne du repos (jeûne, monodiète) ou une vitalité nouvelle (alimentation vivante), il en profite pour ressortir ces toxines — qui doivent transiter à nouveau dans la circulation avant d'être éliminées. C'est ce passage qui provoque les symptômes.",
      },
      {
        heading: "Les manifestations classiques",
        body: "Maux de tête, parfois sévères les 2-3 premiers jours (sevrage caféine + élimination). Langue très chargée (blanche, jaune, parfois brune). Mauvaise haleine prononcée. Urines très foncées, odorantes. Selles abondantes et malodorantes. Sueur âcre. Éruptions cutanées passagères (acné, eczéma). Sensations de froid. Émotions exacerbées : irritabilité, larmes, vieilles colères qui remontent. Sommeil parfois agité, rêves intenses.",
      },
      {
        heading: "Comment les accompagner sans les faire taire",
        body: "Hydratation massive : eau pure, tisanes (verveine, mélisse, fenouil). Repos physique : moins on demande à l'organisme, plus il peut éliminer. Chaleur : bouillotte, bain chaud, sauna léger. Aération : grandes ouvertures de fenêtre, marches en plein air. Brossage à sec de la peau (drainage). Massage doux des reins et du foie. Lavement intestinal si constipation. NE PAS prendre d'antalgique (qui demanderait au foie un travail supplémentaire).",
      },
      {
        heading: "Quand s'inquiéter et stopper",
        body: "Une crise est physiologique tant que les symptômes restent supportables et n'évoluent pas vers du grave. Stoppez et consultez si : vomissements répétés et incoercibles, vertiges sévères avec chute, palpitations cardiaques importantes, douleur thoracique, douleur abdominale aiguë et localisée (pas le diffus du jeûne), confusion mentale marquée, fièvre élevée, sang dans les selles ou les urines, hypotension extrême.",
      },
      {
        heading: "Une perspective philosophique",
        body: "La crise de guérison rappelle ce que la médecine moderne a souvent oublié : le symptôme n'est pas l'ennemi. C'est un message. La fièvre brûle les pathogènes. La toux expulse les mucosités. La diarrhée nettoie. L'eczéma sort ce que le foie n'a pas pu traiter. Au lieu de réprimer le symptôme avec un médicament, accompagner son expression dans des limites raisonnables peut être une approche plus respectueuse de l'intelligence du corps.",
      },
    ],
    keyPoints: [
      "Symptômes = signaux positifs d'élimination",
      "Maux de tête, langue chargée, mauvaise haleine sont classiques",
      "Hydratation + repos + chaleur = accompagnement",
      "Pas d'antalgique pendant une crise de guérison",
      "Stopper en cas de symptômes graves ou alarmants",
    ],
    tags: ['crise de guérison', 'jeûne', 'élimination', 'détox'],
  },
  {
    slug: 'monodiete-raisin',
    domain: 'naturopathie',
    category: 'jeunes',
    title: "Monodiète de raisin : la reine des cures d'automne",
    excerpt: "Considérée comme la cure naturopathique la plus puissante de l'année. Antioxydants exceptionnels, drainage hépatique, hydratation cellulaire profonde.",
    readingTime: 5,
    intro:
      "Quand vient l'automne et que les vignes ploient sous les grappes, la tradition naturopathique recommande une cure qui ne se discute pas : la monodiète de raisin. Pendant 3 à 7 jours, on ne consomme que ce fruit-roi, à volonté, avec ses pépins. C'est probablement la cure la plus puissante du calendrier annuel. Les bénéfices documentés sont impressionnants : drainage hépato-biliaire profond, hydratation cellulaire, apport massif en polyphénols et en resvératrol.",
    sections: [
      {
        heading: "Le raisin : un super-aliment naturel",
        body: "Le raisin combine sucres rapides (glucose, fructose) immédiatement disponibles, eau structurée (jus de fruit cellulaire), polyphénols anti-inflammatoires (anthocyanes de la peau), resvératrol (concentré dans la peau), OPC (oligo-proanthocyanidines des pépins, antioxydant majeur), fibres (pulpe), minéraux (potassium, magnésium, fer), vitamines (B, C). Chaque grappe est un cocktail complet.",
      },
      {
        heading: "Protocole de la cure",
        body: "Durée : 1 à 7 jours. Quantité : 1 à 1,5 kg de raisin bio par jour, en 4 à 6 prises. Idéalement avec pépins (mâchés ou broyés pour libérer les OPC). Variétés : chasselas, muscat, raisin de cuve bio. Préférer les variétés à pépins, qui apportent les OPC. Eau pure entre les prises. Aucun autre aliment. Aucune épice. Aucune préparation : juste le fruit lavé.",
      },
      {
        heading: "Les bénéfices observés",
        body: "Drainage hépato-biliaire profond (rôle du fructose et des polyphénols). Hydratation cellulaire (90% d'eau cellulaire). Apport antioxydant massif (resvératrol, anthocyanes). Régulation du transit (fibres de la pulpe). Effet régulateur sur la glycémie à long terme (paradoxal mais documenté). Sensation de légèreté, clarté mentale, peau plus lumineuse.",
      },
      {
        heading: "À qui convient cette cure",
        body: "Particulièrement indiquée pour les tempéraments sanguin et bilieux (drainage hépatique). Lymphatique : également très bénéfique pour le drainage. Nerveux : à pratiquer modérément (1-2 jours), le raisin restant sucré et stimulant. Personnes en surpoids : effet amaigrissant. Personnes fatiguées : effet revitalisant grâce aux sucres rapides du raisin.",
      },
      {
        heading: "Précautions",
        body: "Diabétiques : prudence et avis médical (charge en sucres rapides). Diverticulose intestinale : pépins potentiellement irritants — choisir variétés sans pépins. Allergie aux salicylates : raisin riche en salicylates. Candidose : préférer le raisin de cuve bio (variétés à fermentation lente) plutôt que les raisins sucrés.",
      },
    ],
    keyPoints: [
      "Cure de référence en automne (septembre-octobre)",
      "1 à 1,5 kg de raisin bio par jour",
      "Avec les pépins (OPC antioxydants)",
      "1 à 7 jours selon expérience",
      "Drainage hépato-biliaire et antioxydant majeur",
    ],
    contre_indications: [
      "Diabète insulinodépendant",
      "Candidose intestinale active",
      "Diverticulose (sauf raisin sans pépins)",
    ],
    tags: ['monodiète', 'raisin', 'automne', 'cure'],
  },
  {
    slug: 'monodiete-pomme',
    domain: 'naturopathie',
    category: 'jeunes',
    title: "Monodiète de pomme : la cure douce universelle",
    excerpt: "Accessible à tous, la monodiète de pomme nettoie le foie et l'intestin en douceur. Variétés à privilégier, durées, protocoles selon objectif.",
    readingTime: 5,
    intro:
      "La pomme est ce fruit dont on dit qu'« une par jour éloigne le médecin ». Sa monodiète, plus douce que celle du raisin, est probablement l'entrée idéale en monodiète pour les débutants. Riche en pectine (fibre soluble), elle nettoie l'intestin tout en nourrissant la flore bénéfique. Le jus naturel de la pomme draine le foie et stimule la vésicule biliaire. Pratiquée 1 à 3 jours, elle convient à presque tous les profils.",
    sections: [
      {
        heading: "Pourquoi la pomme",
        body: "La pomme contient de la pectine (3-5 g pour une grosse pomme), fibre soluble qui forme un gel dans l'intestin et entraîne les déchets vers l'évacuation. Elle régule le transit (constipation comme diarrhée). Sa charge acide (acide malique) draine le foie et la vésicule biliaire. Sa charge glycémique modérée n'épuise pas le pancréas. Sa vitamine C et ses polyphénols protègent les vaisseaux. Le tout dans un format presque universellement bien toléré.",
      },
      {
        heading: "Quantités et variétés",
        body: "1,5 kg de pommes bio par jour, en 6 à 8 prises (toutes les 1h30 à 2h). Préférer les variétés acides : Granny Smith, Reinette, Boskoop, Pink Lady. Éviter les Gala et Golden trop sucrées et molles. Croquer la pomme entière, peau comprise (lavée), avec ses pépins (en petite quantité — pas en excès). En compote sans sucre si problèmes dentaires. Toujours bio (pesticides concentrés en surface).",
      },
      {
        heading: "Durée selon objectif",
        body: "1 jour par semaine en entretien : excellent pour maintenir la légèreté. 1 à 3 jours en cure : drainage hépatique, perte de poids douce, ménage intestinal. Au-delà de 3 jours : pas recommandé en raison de l'apport calorique faible (~700 kcal/j). Combiner alors avec d'autres monodiètes ou passer en jeûne aux jus.",
      },
      {
        heading: "Saisons idéales",
        body: "Printemps : excellente cure hépatique en sortie d'hiver (le foie est fatigué des aliments riches). Automne : pommes locales fraîchement cueillies, sucres modérés. Été : préférer la pastèque ou le raisin (cures plus rafraîchissantes). Hiver : possible mais nécessite de chauffer le corps en parallèle (tisanes chaudes, bouillotte).",
      },
      {
        heading: "Cas pratiques",
        body: "Détox post-fêtes : 1 jour de monodiète de pomme le 2 ou 3 janvier après les excès. Sortie de gastro-entérite : la pomme râpée régule le transit en 24-48h. Cures préventives : 1 jour par semaine le lundi, pour reposer du week-end. Préparation à un jeûne : 1 journée de monodiète de pomme comme dernière étape avant le jeûne hydrique.",
      },
    ],
    keyPoints: [
      "La plus accessible des monodiètes",
      "1,5 kg/jour, pommes bio, variétés acides de préférence",
      "Pectine = ménage intestinal majeur",
      "1 jour/semaine excellent en entretien",
      "Convient quasi universellement",
    ],
    tags: ['monodiète', 'pomme', 'détox foie', 'pectine'],
  },
  {
    slug: 'monodiete-riz',
    domain: 'naturopathie',
    category: 'jeunes',
    title: "Monodiète de riz semi-complet : la cure d'hiver",
    excerpt: "Pour les tempéraments fragiles (nerveux, lymphatique) qui ne supportent pas le froid des monodiètes de fruits. Reminéralisante, chauffante, apaisante.",
    readingTime: 4,
    intro:
      "Toutes les monodiètes ne sont pas faites de fruits crus. La monodiète de riz semi-complet est l'option idéale pour les terrains fragiles, frileux, qui ne supportent pas l'effet rafraîchissant des cures de fruits. Pratiquée 1 à 3 jours, elle offre les bénéfices du repos digestif et de la détox sans épuiser le terrain. C'est la cure de prédilection pour les hivers froids et pour le tempérament nerveux.",
    sections: [
      {
        heading: "Pourquoi le riz semi-complet",
        body: "Le riz blanc est trop pauvre en minéraux. Le riz complet est trop riche en acide phytique (anti-nutriment qui chélate les minéraux). Le riz SEMI-complet (basmati, thaï, rond) offre un excellent compromis : conserve la majorité des minéraux et des fibres, sans excès de phytates. Très bien toléré digestivement. Apporte du magnésium, du sélénium, des vitamines B, des fibres. Energie disponible mais douce, pas de pics glycémiques.",
      },
      {
        heading: "Protocole",
        body: "200 g de riz semi-complet bio sec/jour. Cuisson longue dans 5 fois son volume d'eau (riz fondu, crémeux). Sans sel, sans matière grasse, sans accompagnement. Réparti en 3 à 4 prises tièdes. Mastication très lente (le riz crémeux paraît facile à avaler — mais il faut insaliver). Tisanes douces et chaudes acceptées (verveine, mélisse). Eau pure entre les repas.",
      },
      {
        heading: "Pour qui",
        body: "Tempérament nerveux pur : la monodiète qui ne va pas le décompenser. Tempérament lymphatique fatigué : nourrissante, chauffante. Femmes en post-partum, post-grossesse, ou pendant les règles : douce, reminéralisante. Personnes convalescentes ou âgées. Tout praticien en hiver froid qui veut une cure sans frigorifier son terrain.",
      },
      {
        heading: "Combinaisons possibles",
        body: "Riz + courge cuite vapeur : version reminéralisante et chauffante pour la nerveuse. Riz + bouillon de légumes le soir : version pseudo-monodiète mais très adoucissante. Riz seul 2 jours puis introduction de légumes vapeur : sortie progressive. Riz le matin et midi, soupe le soir : très bien toléré sur 5-7 jours pour terrains fragiles.",
      },
    ],
    keyPoints: [
      "La monodiète des terrains fragiles et frileux",
      "200 g de riz semi-complet bio, cuisson crémeuse",
      "Pas de sel, pas de matière grasse",
      "1 à 3 jours, idéal en hiver",
      "Reminéralisante et apaisante",
    ],
    tags: ['monodiète', 'riz', 'hiver', 'tempérament nerveux'],
  },
  {
    slug: 'monodiete-pasteque',
    domain: 'naturopathie',
    category: 'jeunes',
    title: "Monodiète de pastèque : la cure d'été",
    excerpt: "Drainante et hydratante, la pastèque convient aux journées caniculaires. Lycopène, citrulline et drainage rénal majeur.",
    readingTime: 3,
    intro:
      "Quand l'été pousse la canicule à son paroxysme, la monodiète de pastèque devient l'option idéale. 90% d'eau, riche en lycopène (antioxydant cardiovasculaire) et en citrulline (acide aminé vasodilatateur), elle hydrate, draine les reins, rafraîchit profondément. C'est une cure courte mais d'une efficacité remarquable pour les terrains lymphatiques surchargés en été ou les sanguins congestionnés.",
    sections: [
      {
        heading: "Les vertus de la pastèque",
        body: "Citrulline : vasodilatateur, draine la rétention d'eau, soulage la fatigue musculaire. Lycopène : antioxydant cardio-protecteur (4 fois plus que dans la tomate cuite). 90% d'eau structurée : hydratation cellulaire profonde. Potassium : équilibre sodium-potassium, anti-rétention. Faible charge calorique (~30 kcal pour 100 g). Magnésium et vitamines A, B, C.",
      },
      {
        heading: "Protocole",
        body: "1,5 à 2 kg de pastèque bio par jour. 4 à 6 prises (toutes les 2h). Mâcher les graines aussi — elles concentrent magnésium, zinc, fer, protéines. Eau plate à température ambiante en complément (1 L environ). Tisane fraîche d'hibiscus possible. Aucun autre aliment. 1 à 3 jours en cure, idéalement par températures > 30°C.",
      },
      {
        heading: "Effets attendus",
        body: "Drainage rénal très important : urines abondantes — prévoir accès facile aux toilettes. Sensation de légèreté abdominale. Refroidissement corporel marqué (utile en canicule). Peau qui « respire » mieux. Possibles maux de tête le premier jour (drainage). Constipation paradoxale possible le 2e-3e jour (faibles fibres) : compenser par un peu de tisane laxative douce.",
      },
      {
        heading: "Précautions",
        body: "Diabétiques : la pastèque a un index glycémique élevé mais une charge glycémique modérée (90% d'eau). Avis médical conseillé. Personnes très frileuses : la pastèque refroidit le corps — éviter si on est déjà très yin. Diverticulose : prudence avec les graines. Crus uniquement : ne JAMAIS cuire la pastèque.",
      },
    ],
    keyPoints: [
      "Cure d'été par excellence (canicule)",
      "1,5 à 2 kg/jour, avec les graines",
      "Drainage rénal et lymphatique majeur",
      "1 à 3 jours suffisent",
      "Lycopène, citrulline, hydratation cellulaire",
    ],
    tags: ['monodiète', 'pastèque', 'été', 'drainage'],
  },
  {
    slug: 'monodiete-carotte',
    domain: 'naturopathie',
    category: 'jeunes',
    title: "Monodiète de carotte : la cure douce toute saison",
    excerpt: "Riche en bêta-carotène, douce pour les muqueuses, accessible toute l'année. La cure préférée pour les peaux, les yeux et le transit.",
    readingTime: 3,
    intro:
      "La carotte est probablement le légume le plus universel : disponible toute l'année, peu chère, riche en bêta-carotène (précurseur de la vitamine A), bien tolérée par tous les profils. La monodiète de carotte n'est pas la plus puissante en termes de drainage, mais elle est probablement la plus accessible. Idéale pour démarrer en monodiète, ou pour les terrains très fragiles.",
    sections: [
      {
        heading: "Les vertus de la carotte",
        body: "Bêta-carotène : précurseur vitamine A, antioxydant majeur, soutien des muqueuses (peau, yeux, intestins). Falcarinol : composé anticancer documenté. Pectine : fibre soluble, régule le transit. Magnésium et potassium : minéraux essentiels. Sucres modérés (glycémie maîtrisée). Excellente pour les muqueuses digestives irritées.",
      },
      {
        heading: "Protocole",
        body: "1 à 1,5 kg de carottes bio par jour. Variété ancienne idéalement (carottes de couleurs). Préparation : râpées crues, en jus à l'extracteur, ou cuites vapeur douce. Combinaison possible avec persil frais (drainage rénal) et citron. Aucun autre aliment. 1 à 3 jours en cure.",
      },
      {
        heading: "Indications privilégiées",
        body: "Problèmes de peau (acné, eczéma léger, peau terne) : grâce au bêta-carotène. Fatigue oculaire, sécheresse oculaire. Troubles digestifs légers (côlon irritable, constipation, gastrite). Convalescence. Préparation au jeûne pour personnes fragiles. Cure printemps ou automne — toute saison en fait.",
      },
      {
        heading: "À savoir",
        body: "La consommation prolongée (semaines) et massive de carotte peut colorer la peau en orange légère — c'est inoffensif et réversible en quelques jours après arrêt. Le bêta-carotène se convertit en vitamine A selon les besoins du corps, sans risque de surdosage. Si les selles deviennent orangées : c'est normal (pigments).",
      },
    ],
    keyPoints: [
      "Monodiète douce et universelle, toute saison",
      "1 à 1,5 kg/jour, crue ou cuite vapeur",
      "Bêta-carotène, pectine, falcarinol",
      "Idéale pour la peau, les yeux, les muqueuses",
      "Bien tolérée par tous les profils",
    ],
    tags: ['monodiète', 'carotte', 'bêta-carotène', 'peau'],
  },
  {
    slug: 'jeune-court-vs-long',
    domain: 'naturopathie',
    category: 'jeunes',
    title: "Jeûne court vs jeûne long : que choisir ?",
    excerpt: "24h, 3 jours, 7 jours, 21 jours ? Chaque durée a ses indications, ses bénéfices, ses risques. Tableau comparatif et stratégies.",
    readingTime: 5,
    intro:
      "Plus c'est long, mieux c'est ? Pas si simple. Chaque durée de jeûne active des mécanismes différents et présente des bénéfices et risques propres. Bien choisir la durée du jeûne, c'est ajuster l'outil à l'objectif et au terrain. Voici comment penser cette décision.",
    sections: [
      {
        heading: "Jeûne de 16-24 heures (intermittent quotidien)",
        body: "Mécanismes : entrée en cétose légère, début d'autophagie. Bénéfices : régulation glycémique, perte de poids progressive, clarté matinale. Risques : très faibles. Indications : entretien quotidien de la santé métabolique. Fréquence : tous les jours possible. Pour qui : tout le monde sauf cas particulier. C'est probablement la pratique la plus durablement bénéfique.",
      },
      {
        heading: "Jeûne de 36-48 heures",
        body: "Mécanismes : cétose installée, autophagie active. Bénéfices : reset digestif, anti-inflammatoire, perte de poids ciblée. Risques : maux de tête, fatigue le 2e jour. Indications : cure mensuelle de remise à zéro, sortie de fêtes. Fréquence : 1 à 2 fois par mois maximum. Pour qui : adultes en bonne santé.",
      },
      {
        heading: "Jeûne de 3-5 jours",
        body: "Mécanismes : cétose profonde, autophagie maximale, régénération immunitaire (étude Longo). Bénéfices : tous les précédents + régénération immunitaire documentée. Risques : modérés. Indications : cures trimestrielles ou semestrielles. Fréquence : 2 à 4 fois par an. Pour qui : adultes sains avec expérience de jeûne court.",
      },
      {
        heading: "Jeûne de 7-21 jours",
        body: "Mécanismes : tous les précédents amplifiés + renouvellement profond des tissus. Bénéfices : transformation métabolique majeure, cures thérapeutiques sur pathologies chroniques. Risques : significatifs sans encadrement (carences, syndrome de renutrition, troubles cardiaques). Indications : cures thérapeutiques en clinique. Fréquence : 1 fois par an grand maximum. Pour qui : encadrement médical OBLIGATOIRE.",
      },
      {
        heading: "Stratégie annuelle équilibrée",
        body: "Pratique quotidienne : jeûne intermittent 14/10 ou 16/8 (au choix). Pratique hebdomadaire : 1 jour de monodiète. Pratique trimestrielle : 3 à 5 jours de jeûne aux jus ou hydrique selon expérience. Pratique annuelle : cure printanière de 7-10 jours (jeûne aux jus + monodiètes) pour le grand nettoyage. Cette progression respecte le corps et installe des bénéfices durables sans risque.",
      },
    ],
    keyPoints: [
      "Plus long ≠ toujours mieux",
      "16-24h quotidien = pratique la plus durablement bénéfique",
      "3-5 jours = régénération immunitaire majeure",
      "7+ jours = encadrement médical obligatoire",
      "Stratégie : combiner courtes pratiques quotidiennes et cures annuelles",
    ],
    tags: ['jeûne', 'durée', 'stratégie', 'planification'],
  },

  /* ── NEW : restriction calorique et autophagie ─────────────── */
  {
    slug: 'restriction-calorique-autophagie',
    domain: 'naturopathie',
    category: 'jeunes',
    title: "Restriction calorique et autophagie : ce que disent les données",
    excerpt: "L'autophagie est très populaire dans les discours sur le jeûne. La littérature scientifique sur l'humain mérite une lecture mesurée.",
    readingTime: 5,
    evidence_level: 'preliminary',
    evidence_note: "Les mécanismes d'autophagie sont solidement démontrés chez l'animal et in vitro. Chez l'humain, leur quantification reste indirecte, et l'association à des bénéfices cliniques durables nécessite encore des études à long terme.",
    intro: "L'autophagie cellulaire, ce mécanisme de recyclage cellulaire activé par le jeûne, est devenue un argument majeur du discours « longevity ». Que dit vraiment la littérature scientifique sur sa stimulation par la restriction calorique chez l'humain ?",
    sections: [
      { heading: "Revue de référence", body: "Une revue publiée dans Ageing Research Reviews aurait synthétisé les données existantes sur l'induction de l'autophagie par le jeûne ou la restriction calorique [#s1]. L'essentiel des preuves directes provient de modèles cellulaires et animaux ; les marqueurs humains (LC3, p62) ne sont pas systématiquement mesurés et les interpretations restent indirectes." },
      { heading: "Mécanismes moléculaires partagés", body: "Une publication récente dans Nature Cell Biology a montré que la spermidine — molécule produite naturellement lors du jeûne — serait essentielle à l'autophagie médiée par le jeûne et à la longévité chez la souris [#s2]. Cette donnée illustre la complexité des voies impliquées : le jeûne n'agit pas par un mécanisme unique." },
      { heading: "Stratégies anti-vieillissement", body: "Une revue parue dans Cell Communication and Signaling aurait mis l'autophagie dans le cadre plus large des mécanismes du vieillissement et des stratégies anti-âge [#s3]. La restriction calorique et le jeûne intermittent y figurent parmi les interventions prometteuses, mais sans démonstration robuste d'effets cliniques durables sur la longévité humaine." },
      { heading: "Lecture honnête pour la pratique", body: "Il semblerait abusif de présenter le jeûne intermittent ou la restriction calorique comme un « activateur d'autophagie cliniquement validé » pour la longévité humaine. Les bénéfices métaboliques (sensibilité à l'insuline, marqueurs inflammatoires) sont mieux étayés ; les bénéfices anti-âge restent, à ce stade, davantage extrapolés que démontrés chez l'humain." },
    ],
    sources: [
      { id: 's1', type: 'review', title: "The effect of fasting or calorie restriction on autophagy induction: A review of the literature", authors: 'Bagherniya M, et al.', journal: 'Ageing Research Reviews', year: 2018, pmid: '30172870', url: 'https://pubmed.ncbi.nlm.nih.gov/30172870/' },
      { id: 's2', type: 'pubmed', title: "Spermidine is essential for fasting-mediated autophagy and longevity", authors: 'Hofer SJ, et al.', journal: 'Nature Cell Biology', year: 2024, pmid: '39117797', url: 'https://pubmed.ncbi.nlm.nih.gov/39117797/' },
      { id: 's3', type: 'review', title: "Molecular mechanisms of aging and anti-aging strategies", authors: 'Li Y, et al.', journal: 'Cell Communication and Signaling', year: 2024, pmid: '38790068', url: 'https://pubmed.ncbi.nlm.nih.gov/38790068/' },
    ],
    tags: ['autophagie', 'restriction calorique', 'jeûne', 'longévité'],
    updatedAt: '2026-05-28',
  },
];
