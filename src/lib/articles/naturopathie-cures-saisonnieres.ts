import type { Article } from '../types';

const a = (slug: string, title: string, excerpt: string, intro: string, sections: { heading: string; body: string }[], tags: string[]): Article => ({
  slug, domain: 'naturopathie', category: 'cures-saisonnieres', title, excerpt, readingTime: 4, intro, sections, tags,
});

export const NATURO_CURES_SAISONNIERES: Article[] = [
  a('cure-printemps',
    "La cure de printemps : drainage du foie",
    "Le foie est l'organe du printemps en médecine traditionnelle. Drainage hépato-biliaire, plantes amères, sortie d'hiver.",
    "Au printemps, après l'hiver chargé en aliments riches, le foie demande à être déchargé. Les sèves remontent dans les arbres ; en nous aussi, les fonctions vitales se réactivent. C'est la saison par excellence pour le drainage hépato-biliaire. Trois semaines de cure suffisent à transformer le terrain pour toute l'année.",
    [
      { heading: "Pourquoi le printemps", body: "Selon les médecines traditionnelles (chinoise, ayurvédique, hippocratique), le printemps correspond à l'élément Bois et à l'organe Foie. C'est aussi le moment où la nature produit les plantes amères dépuratives (pissenlit, fumeterre, jeunes pousses) — coïncidence ou intelligence du vivant. Profiter de cette synchronicité multiplie les bénéfices." },
      { heading: "Protocole de cure (21 jours minimum)", body: "Semaine 1 : Fumeterre (1 c. à café en infusion, 2 fois/jour). Semaine 2 : Pissenlit (décoction de racine, 2 tasses/jour). Semaine 3 : Chardon-Marie (gélules ou teinture). En parallèle : citron tiède chaque matin, huile d'olive + citron (cure hépatique douce), 3 jus verts par semaine, monodiète de pomme 1 jour/semaine." },
      { heading: "Alimentation à privilégier", body: "Verdures de printemps : asperges, artichauts, fenouil, jeunes épinards, mâche, pissenlit en salade, oseille. Légumes amers : endive, chicorée, roquette. Pommes (2 par jour). Citrons (jus dans eau tiède matin). Curcuma frais. Radis noir, radis rose. Bourgeons frais de salades sauvages." },
      { heading: "À retirer pendant la cure", body: "Alcool entièrement. Café réduit à 1 tasse/jour maximum. Viandes rouges et charcuteries. Produits laitiers gras (beurre cuit, fromages affinés). Sucres rapides. Fritures. Plats en sauce. Aliments industriels. Compresses d'huile de ricin sur le foie 1 fois par semaine bonus." },
    ],
    ['printemps', 'foie', 'détox']
  ),
  a('cure-ete',
    "La cure d'été : drainage du cœur et des reins",
    "Chaleur, hydratation, drainage rénal, monodiètes de fruits aqueux. L'été appelle à la légèreté.",
    "L'été, élément Feu en médecine chinoise, sollicite le cœur et les reins (drainage par la sueur). C'est le moment de cures hydratantes, des monodiètes de fruits aqueux (pastèque, melon, raisin précoce), du drainage rénal. Privilégier la légèreté absolue.",
    [
      { heading: "Saisonnalité estivale", body: "L'été, le corps est naturellement orienté vers l'élimination cutanée (sudation) et rénale. Les fruits aqueux disponibles (pastèque, melon, prunes, abricots, raisin précoce) sont des hydratants et drainants naturels. C'est aussi la saison la plus propice aux jeûnes longs (climat chaud, abondance de fruits, journées longues énergisantes)." },
      { heading: "Cure de citron (lemon detox)", body: "1 citron pressé dans 250 ml d'eau tiède, chaque matin à jeun. Pendant 21 jours. Démarre l'élimination dès le réveil. Possibilité d'ajouter : pincée de cayenne, 1 c. à café de sirop d'érable, 1 cm de gingembre frais (variante 'Master Cleanse')." },
      { heading: "Monodiètes d'été", body: "Pastèque : 1,5-2 kg/jour, 1-3 jours, en canicule. Melon : 1,5 kg/jour, 1-3 jours. Raisin précoce (août) : 1-1,5 kg/jour, 3-7 jours. Cerises : 1 kg/jour (riches en mélatonine et anthocyanes), 1-3 jours. Tomates anciennes : moins courant mais excellent drainage." },
      { heading: "Plantes d'été", body: "Reine-des-prés (anti-rétention, drainage). Pissenlit (drainage rénal). Hibiscus (rafraîchissant, hypotenseur). Bouleau (drainage rénal majeur). Aubier de tilleul (alcalinisant). Verveine citronnée (rafraîchissante, digestive). Tisanes consommées fraîches ou à température ambiante." },
    ],
    ['été', 'reins', 'pastèque']
  ),
  a('cure-automne',
    "La cure d'automne : préparation à l'hiver",
    "Renforcement immunitaire, monodiète de raisin, reminéralisation. Octobre est le mois charnière.",
    "L'automne, élément Métal en médecine chinoise, correspond aux poumons et au gros intestin. C'est la saison de l'intériorisation, de la préparation à l'hiver. La cure d'automne combine la reine des monodiètes (le raisin), le renforcement immunitaire pré-hivernal, et la reminéralisation après la sudation estivale.",
    [
      { heading: "Monodiète de raisin (la cure phare)", body: "Septembre-octobre, raisin local mûr à point. 1-1,5 kg/jour, avec pépins, en 4-6 prises. Cure de 3 à 7 jours. Drainage hépatique majeur, hydratation cellulaire, apport massif en antioxydants (resvératrol, OPC). C'est la cure la plus puissante de l'année calendaire." },
      { heading: "Renforcement immunitaire pré-hivernal", body: "Cure d'échinacée : 10 jours par mois (octobre, novembre, décembre). Vitamine D : démarrer la cure d'hiver dès octobre (4000 UI/jour le soir). Probiotiques : 1 mois de cure pour reconstituer la flore. Champignons immunostimulants : reishi, shiitake, maïtake. Propolis : cure de 3 semaines." },
      { heading: "Reminéralisation post-été", body: "Tisane d'ortie : 2-3 tasses/jour pendant 21 jours. Algues : ajouter régulièrement (wakamé, dulse, nori). Bouillon d'os ou de légumes long mijoté. Magnésium en glycérophosphate : cure de 3 mois. Silice (prêle, ortie, bambou) : pour les tissus conjonctifs." },
      { heading: "Aliments d'automne à privilégier", body: "Courges et potirons : bêta-carotène, fibres. Châtaignes : minéraux, énergie douce. Pommes (pectine). Poires (mucilages digestifs). Noix fraîches (oméga-3). Champignons (vitamine D, polysaccharides immunostimulants). Choux (rapprès de l'hiver, vitamine C). Racines (carottes, panais, navets, topinambours)." },
    ],
    ['automne', 'raisin', 'immunité']
  ),
  a('cure-hiver',
    "La cure d'hiver : chaleur intérieure et immunité",
    "Tisanes chaudes, épices, soupes nourrissantes. L'hiver demande de la chaleur intérieure, pas du froid.",
    "L'hiver, élément Eau en médecine chinoise, correspond aux reins. C'est paradoxalement la saison où la naturopathie recommande le moins de crudités et le plus de soupes chaudes. L'objectif : entretenir la chaleur interne, soutenir l'immunité, soutenir les surrénales. La cure d'hiver n'est pas drainante mais réchauffante et reminéralisante.",
    [
      { heading: "Principe : chaleur et nourrissement", body: "Contrairement à la cure de printemps qui draine, la cure d'hiver nourrit. Le froid extérieur demande à brûler des calories pour maintenir la température corporelle. Mauvais moment pour les jeûnes longs (sauf en climat chaud). Privilégier les bouillons longs, les soupes mijotées, les épices stimulantes." },
      { heading: "Tisanes chaudes essentielles", body: "Le matin : gingembre frais + citron + miel cru = stimule la circulation et l'immunité. Journée : tisane de thym (anti-infectieux) ou de cannelle (chauffante). Soir : tilleul, verveine, mélisse (apaisantes, digestives). À tout moment : tisane de gingembre + cannelle + clous de girofle (chai façon naturo). Hydratation préservée." },
      { heading: "Épices stimulantes à intégrer", body: "Gingembre frais (râpé dans plats, infusions). Cannelle (régulatrice glycémique, chauffante). Cardamome (digestion, respiration). Clou de girofle (antiseptique, chauffant). Curcuma + poivre (anti-inflammatoire). Cayenne (stimulant cardiaque, métabolique). Cumin (digestif). Aneth (carminatif). Toutes ajoutées en fin de cuisson pour préserver leurs propriétés." },
      { heading: "Aliments d'hiver", body: "Soupes mijotées longuement (4-6h en cocotte). Bouillon d'os (riche en collagène, minéraux). Légumes-racines (carottes, panais, navets, betteraves, topinambours, rutabagas). Choux (chou frisé, chou rouge, choux de Bruxelles, chou-fleur). Poireaux. Patates douces. Châtaignes. Légumineuses bien cuites (lentilles, haricots, pois chiches). Avocats, oléagineux pour les bonnes graisses." },
    ],
    ['hiver', 'soupes', 'épices']
  ),

  /* ── NEW : luminothérapie / SAD ─────────────────────────────── */
  {
    slug: 'luminotherapie-depression-saisonniere',
    domain: 'naturopathie',
    category: 'cures-saisonnieres',
    title: "Luminothérapie et trouble affectif saisonnier : un traitement validé",
    excerpt: "Le trouble affectif saisonnier (SAD) répond bien à l'exposition à une lumière vive le matin. Méta-analyse 2020.",
    readingTime: 5,
    evidence_level: 'meta-analysis',
    evidence_note: "C'est l'une des interventions « naturelles » avec le niveau de preuve le plus élevé : méta-analyse robuste, recommandation officielle. À ne pas confondre avec une luminothérapie « bien-être » sans cadre.",
    intro: "Le trouble affectif saisonnier (Seasonal Affective Disorder, SAD) — dépression hivernale liée à la baisse de luminosité — répond favorablement à la luminothérapie. Les méta-analyses récentes confirment cette indication avec un niveau de preuve solide.",
    sections: [
      { heading: "Méta-analyse 2020 dans Psychotherapy and Psychosomatics", body: "Une méta-analyse parue dans Psychotherapy and Psychosomatics a évalué l'efficacité de la luminothérapie dans le trouble affectif saisonnier [#s1]. Les chercheurs auraient observé une amélioration cliniquement significative comparable, voire supérieure, à celle des antidépresseurs classiques dans cette indication précise." },
      { heading: "Comparaison réseau des traitements", body: "Une méta-analyse en réseau publiée dans Journal of Affective Disorders aurait comparé l'ensemble des traitements disponibles pour le SAD : luminothérapie, antidépresseurs, psychothérapies [#s2]. La luminothérapie matinale ressortirait avec un excellent rapport bénéfice-risque. Le combiné lumière + antidépresseur paraît également intéressant dans les formes sévères." },
      { heading: "Dépression non saisonnière", body: "Une méta-analyse parue dans Psychiatry Research a évalué la luminothérapie dans la dépression non saisonnière [#s3]. Les chercheurs auraient observé un effet plus modeste qu'en SAD, mais détectable — la luminothérapie pourrait constituer un appoint utile dans certaines dépressions chroniques résistantes." },
      { heading: "Protocole standard", body: "Lampe de luminothérapie certifiée délivrant 10 000 lux, exposition de 20-30 minutes le matin (idéalement dans l'heure suivant le réveil), à 30-50 cm du visage, pendant la saison hivernale (octobre à mars). Réponse habituellement perceptible en 1-2 semaines. Contre-indications : pathologies oculaires sévères, certains traitements photosensibilisants, trouble bipolaire (risque de virage maniaque)." },
    ],
    sources: [
      { id: 's1', type: 'meta-analysis', title: "The Efficacy of Light Therapy in the Treatment of Seasonal Affective Disorder: A Meta-Analysis of Randomized Controlled Trials", authors: 'Pjrek E, et al.', journal: 'Psychotherapy and Psychosomatics', year: 2020, pmid: '31574513', url: 'https://pubmed.ncbi.nlm.nih.gov/31574513/' },
      { id: 's2', type: 'meta-analysis', title: "Treatment measures for seasonal affective disorder: A network meta-analysis", authors: 'Chen ZW, et al.', journal: 'Journal of Affective Disorders', year: 2024, pmid: '38220102', url: 'https://pubmed.ncbi.nlm.nih.gov/38220102/' },
      { id: 's3', type: 'meta-analysis', title: "Light therapy in non-seasonal depression: An update meta-analysis", authors: 'Tao L, et al.', journal: 'Psychiatry Research', year: 2020, pmid: '32622169', url: 'https://pubmed.ncbi.nlm.nih.gov/32622169/' },
    ],
    contre_indications: [
      "Trouble bipolaire (risque de virage maniaque)",
      "Pathologies ophtalmologiques sévères (dégénérescence rétinienne)",
      "Traitements photosensibilisants (avis médical)",
      "Lupus érythémateux disséminé (prudence)",
    ],
    tags: ['luminothérapie', 'SAD', 'dépression saisonnière', 'lumière'],
    updatedAt: '2026-05-28',
  },
];
