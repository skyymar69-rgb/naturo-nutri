import type { Article } from '../types';

const a = (slug: string, title: string, excerpt: string, intro: string, sections: { heading: string; body: string }[], tags: string[]): Article => ({
  slug, domain: 'nutritherapie', category: 'probiotiques', title, excerpt, readingTime: 4, intro, sections, tags,
});

export const NUTRI_PROBIOTIQUES: Article[] = [
  a('microbiote-bases',
    "Microbiote intestinal : ce qu'il faut savoir",
    "100 000 milliards de bactéries vivent en nous. Diversité, dysbiose, axe intestin-cerveau. Les bases pour comprendre.",
    "Le microbiote intestinal — 100 000 milliards de bactéries pesant ~2 kg — est aujourd'hui reconnu comme un véritable 'organe' à part entière. Il participe à l'immunité (70% est intestinale), produit des vitamines (K, B12, B9), module l'humeur via le nerf vague (axe intestin-cerveau), régule le poids, l'inflammation, et même la cognition. Sa santé conditionne celle de tout l'organisme.",
    [
      { heading: "Composition et fonctions", body: "1000+ espèces bactériennes, dominées par Bacteroidetes et Firmicutes. Ratio Bacteroidetes/Firmicutes influence le poids. Lactobacillus et Bifidobacterium : 'bonnes' bactéries clés. Akkermansia muciniphila : protectrice de la muqueuse intestinale. Diversité = signe de bonne santé. Monoculture (peu d'espèces) = signe de dysbiose." },
      { heading: "L'axe intestin-cerveau", body: "Le nerf vague transmet 90% des informations dans le sens intestin → cerveau (10% inverse). Le microbiote produit 95% de la sérotonine corporelle. Il influence GABA, dopamine, BDNF. Conséquence : dysbiose = troubles de l'humeur, anxiété, dépression, voire troubles neurodégénératifs. Le 'gut feeling' n'est pas une métaphore." },
      { heading: "Causes des dysbioses modernes", body: "Antibiotiques (anéantissent la flore). Pilule contraceptive. IPP (inhibiteurs pompe à protons). Alimentation pauvre en fibres et riche en sucres rapides. Aliments transformés et additifs. Stress chronique. Manque de sommeil. Accouchement par césarienne (microbiote initial différent). Manque de contact avec la nature et les animaux." },
      { heading: "Restaurer le microbiote", body: "Alimentation riche en fibres prébiotiques (légumes, légumineuses, fruits, oléagineux). Aliments lacto-fermentés quotidiens (kéfir, choucroute crue, miso, kombucha). Probiotiques en cure (multi-souches). Diversité alimentaire (~30 plantes différentes/semaine — étude Predict). Réduction des sucres rapides et aliments industriels. Gestion du stress (impact direct sur la flore)." },
    ],
    ['microbiote', 'flore', 'intestin']
  ),
  a('probiotiques-multi-souches',
    "Probiotiques en complément : multi-souches efficaces",
    "Choisir un probiotique : nombre d'UFC, diversité de souches, résistance acide. Cure post-antibiotique.",
    "Tous les probiotiques ne se valent pas. Pour qu'un complément ait des effets démontrables, plusieurs critères sont nécessaires : souches multiples, nombre d'UFC élevé, résistance à l'acidité gastrique, conservation appropriée. Voici comment choisir et utiliser efficacement.",
    [
      { heading: "Critères de qualité", body: "Multi-souches (au moins 5-10 souches) > mono-souche pour effets multiples. Minimum 10 milliards UFC/dose pour les cures (parfois 50-100 milliards). Souches référencées avec numéro précis (Lactobacillus rhamnosus GG, Bifidobacterium longum BB536, etc.) — preuve d'études cliniques. Gélules gastro-résistantes ou enrobées (sinon, 99% des bactéries sont détruites par l'acide gastrique). Conservation au frais (sinon, viabilité diminuée)." },
      { heading: "Souches utiles selon l'indication", body: "Côlon irritable, SII : Bifidobacterium infantis 35624. Diarrhée du voyageur : Saccharomyces boulardii. Anxiété, axe intestin-cerveau : Lactobacillus rhamnosus JB-1. Eczéma atopique : Lactobacillus rhamnosus GG. Immunité hivernale : Lactobacillus plantarum HEAL9 + Lactobacillus paracasei 8700:2. Post-antibiothérapie : large spectre + Saccharomyces boulardii." },
      { heading: "Cure post-antibiothérapie", body: "Démarrer DÈS le premier jour d'antibiotique (à 2-3 heures de distance). Saccharomyces boulardii (levure, donc non touchée par antibiotiques) : 500 mg matin et soir. Poursuivre 1 mois APRÈS la fin des antibiotiques. Puis 1 mois de cure de Lactobacillus + Bifidobacterium multi-souches. Réintroduire en parallèle les aliments lacto-fermentés." },
      { heading: "Dosage et durée", body: "Cure standard : 10-30 milliards UFC/jour, 2-3 mois. Cure intensive (post-antibiotique, dysbiose sévère) : 50-100 milliards UFC/jour, 1 mois puis dégressif. Pour entretien : aliments lacto-fermentés quotidiens > supplément continu. Pas d'effet placebo : si les symptômes s'améliorent, l'effet est réel." },
    ],
    ['probiotiques', 'souches', 'UFC']
  ),
  a('prebiotiques-fibres',
    "Prébiotiques : nourrir les bonnes bactéries",
    "FOS, GOS, inuline, psyllium. Les fibres fermentescibles qui nourrissent le microbiote. Sources et précautions.",
    "Les prébiotiques sont les fibres alimentaires que NOS bactéries intestinales fermentent. Plus efficaces que les probiotiques seuls dans bien des cas : ils nourrissent les bonnes bactéries résidentes plutôt que d'en apporter de nouvelles qui peinent à s'implanter. Une alimentation riche en prébiotiques est la stratégie de base pour un microbiote équilibré.",
    [
      { heading: "Les principaux prébiotiques", body: "FOS (fructo-oligosaccharides) : oignon, ail, poireau, asperge, artichaut. Inuline : chicorée, topinambour, oignon. GOS (galacto-oligosaccharides) : lait maternel, certaines légumineuses. Bêta-glucanes : avoine, orge, champignons. Amidon résistant : pomme de terre cuite refroidie, banane verte, légumineuses. Pectine : pomme, agrumes. Psyllium : téguments." },
      { heading: "Sources alimentaires quotidiennes", body: "Au quotidien : 1 oignon ou 1 poireau dans les plats, 1 c. à café d'ail. Topinambour en saison. Artichaut. Asperges au printemps. Banane légèrement verte. Pomme de terre cuite la veille et réchauffée (amidon résistant). Légumineuses bien cuites 3x/semaine. Poudre de psyllium dans yaourt ou smoothie (1 c. à café/jour)." },
      { heading: "Précautions", body: "Démarrer doucement : les prébiotiques fermentent dans le côlon (= gaz, ballonnements initialement). Augmenter sur 4-6 semaines. SIBO (prolifération bactérienne dans l'intestin grêle) : éviter dans un premier temps les prébiotiques (aggravent les symptômes) — diagnostic test au lactulose. Maladies inflammatoires intestinales en poussée : prudence." },
      { heading: "Synergie probiotiques + prébiotiques (synbiotiques)", body: "Combinaison la plus efficace : apporter les bonnes bactéries (probiotiques) ET de quoi les nourrir (prébiotiques). Synbiotiques en complément. Alimentation : kéfir + smoothie aux oignons grillés + pomme à dessert = synbiotique naturel." },
    ],
    ['prébiotiques', 'fibres', 'FOS']
  ),
  a('perméabilité-intestinale',
    "L'hyperperméabilité intestinale (leaky gut)",
    "Quand la barrière intestinale fuit : inflammation systémique, allergies, auto-immunité. Protocole complet de restauration.",
    "L'hyperperméabilité intestinale ('leaky gut' en anglais) est un état où la barrière intestinale, normalement très sélective, devient anormalement perméable. Des molécules (lipopolysaccharides, fragments alimentaires, toxines) traversent et déclenchent l'inflammation systémique. C'est probablement une cause sous-estimée de nombreuses pathologies chroniques.",
    [
      { heading: "Signes évocateurs", body: "Troubles digestifs récurrents (ballonnements, alternance constipation/diarrhée). Allergies et intolérances alimentaires qui se développent à l'âge adulte. Eczéma, urticaire, psoriasis. Migraines récurrentes. Fatigue chronique. Maladies auto-immunes (Hashimoto, polyarthrite). Brouillard mental. Carences malgré une alimentation correcte." },
      { heading: "Causes principales", body: "Gluten (le gibian active la zonuline qui ouvre les jonctions serrées). Aliments transformés. Sucres rapides. AINS (anti-inflammatoires). Antibiotiques répétés. Alcool. Stress chronique. Candidose intestinale. SIBO. Carence en zinc. Infection à Helicobacter pylori." },
      { heading: "Protocole de restauration (3-6 mois)", body: "1. ÉLIMINATION : retirer gluten, lactose, sucres rapides, alcool, aliments inflammatoires. 2. ÉRADICATION : si parasite, candidose, SIBO — traitement spécifique (avis médical). 3. RÉINOCULATION : probiotiques multi-souches + aliments lacto-fermentés. 4. RÉPARATION : L-glutamine 10g/jour, zinc carnosine 75 mg/jour, butyrate (post-biotique), bouillon d'os, collagène marin, vitamine D. 5. ENTRETIEN : alimentation anti-inflammatoire, gestion stress." },
      { heading: "Suppléments-clés du protocole", body: "L-glutamine : carburant des entérocytes, 5-15 g/jour. Zinc carnosine : réparation des muqueuses, 75-150 mg/jour. Butyrate de calcium et magnésium : carburant des colonocytes. Bouillon d'os : collagène + glycine + acides aminés réparateurs. Aloe vera intérieure : apaisante des muqueuses. Boswellia, curcuma : anti-inflammatoires. Probiotiques. Cure de 3-6 mois minimum." },
    ],
    ['perméabilité', 'leaky gut', 'glutamine']
  ),
  a('candidose-intestinale',
    "Candidose intestinale chronique",
    "Quand Candida albicans prend trop de place : protocole anti-fongique naturel en 3 phases.",
    "La candidose intestinale chronique correspond à une prolifération excessive de Candida albicans dans le tube digestif. Différente des candidoses aiguës (buccale, vaginale), elle est silencieuse mais ravageuse. Sucre raffiné et antibiotiques répétés sont ses meilleurs amis. Protocole de traitement naturel en plusieurs phases.",
    [
      { heading: "Signes évocateurs", body: "Fringales de sucre intenses (Candida 'demande'). Brouillard mental, fatigue. Ballonnements après aliments sucrés. Mycoses récurrentes (vaginales, ongles). Démangeaisons anales ou cutanées. Langue blanche persistante. Sinusites à répétition. Pellicules. Allergies multiples. Souvent post-antibiothérapie ou pilule de longue durée." },
      { heading: "Protocole anti-Candida en 3 phases", body: "PHASE 1 (1-2 mois) - Diète anti-Candida : éviction TOTALE des sucres rapides, alcool, gluten, lait, levures, aliments fermentés (paradoxal mais évite de nourrir Candida). Diète riche en protéines, légumes verts, bonnes graisses. PHASE 2 (1-2 mois) - Anti-fongiques naturels : huile essentielle d'origan compact 2 gouttes 3x/jour dans gélules, extrait pépins de pamplemousse (GSE) 30 gouttes 3x/jour, acide caprylique (huile de coco) 1 c. à soupe/jour, ail cru. PHASE 3 (1-2 mois) - Restauration : probiotiques multi-souches + Saccharomyces boulardii, L-glutamine, zinc, biotine. Réintroduction progressive des aliments." },
      { heading: "La 'die-off' réaction (Herxheimer)", body: "Quand Candida meurt en masse, il libère des toxines qui peuvent provoquer : fatigue intense, maux de tête, irritabilité, fièvre légère, sensation de grippe. C'est BON SIGNE (le candida meurt) mais inconfortable. Hydratation +++, vitamine C, repos. Ralentir si trop intense (réduire les anti-fongiques)." },
      { heading: "Précautions", body: "Diagnostic difficile : aucun test sanguin de référence. La candidose chronique reste controversée en médecine officielle. Mais la réponse au protocole est souvent éloquente. Femmes enceintes : éviter les anti-fongiques puissants. Médicaments multiples : interactions possibles, avis médical." },
    ],
    ['candida', 'mycose', 'anti-fongique']
  ),
];
