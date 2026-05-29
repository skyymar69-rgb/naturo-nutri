import type { Article } from '../types';

/**
 * BATCH 3 — Pathologies & approches nutrithérapeutiques.
 *
 * Ces articles ont un ton volontairement prudent : aucune affirmation
 * thérapeutique n'est faite à la place d'un médecin. Les références
 * aux travaux de Jean-Paul Curtay et Jean-Robert Rapin / Christian Lagarde
 * sont citées quand l'approche s'en inspire directement.
 *
 * Les contre-indications sont systématiques : anticoagulants pour le
 * curcuma, ISRS pour le tryptophane, maladies auto-immunes pour l'iode,
 * etc. Toute supplémentation doit être validée par un professionnel de
 * santé, en particulier en cas de pathologie chronique ou de traitement
 * médicamenteux en cours.
 */

export const NUTRI_BATCH3_PATHOLOGIES: Article[] = [
  // ─────────────────────────────────────────────────────────────────────
  // 1. SYNDROME MÉTABOLIQUE
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'syndrome-metabolique-nutritherapie',
    domain: 'nutritherapie',
    category: 'objectifs',
    title: "Syndrome métabolique : approche nutrithérapeutique",
    excerpt:
      "Tour de taille, glycémie, triglycérides, HDL, tension : 5 critères, 3 suffisent. Approche nutritionnelle intégrative, prudente et sourcée.",
    readingTime: 7,
    intro:
      "Le syndrome métabolique réunit un ensemble de signaux (tour de taille élevé, glycémie à jeun perturbée, triglycérides hauts, HDL bas, tension limite) qui, ensemble, multiplient le risque cardiovasculaire et de diabète de type 2. La nutrithérapie, dans la lignée des travaux de Jean-Paul Curtay sur la prévention cardio-métabolique, propose un faisceau d'interventions qui n'a jamais pour vocation de remplacer le suivi médical, mais de soutenir le terrain.",
    sections: [
      {
        heading: "Définition et bilan préalable",
        body: "Critères NCEP-ATP III : tour de taille > 94 cm (homme) / 80 cm (femme), triglycérides ≥ 1,5 g/L, HDL < 0,4 g/L (H) / 0,5 g/L (F), tension ≥ 130/85 mmHg, glycémie à jeun ≥ 1,0 g/L. Trois critères sur cinq définissent le syndrome. Bilan utile en amont : HbA1c, insuline à jeun (HOMA-IR), bilan lipidique complet, CRP-us, vitamine D, magnésium érythrocytaire, ferritine. Toute supplémentation se discute avec le médecin traitant.",
      },
      {
        heading: "Pilier alimentaire : régime méditerranéen",
        body: "Le régime méditerranéen est l'intervention la plus solidement documentée (PREDIMED, Estruch 2018). Privilégier huile d'olive vierge, légumes, légumineuses, poissons gras, fruits à coque, céréales complètes ; limiter sucres rapides, charcuteries, produits ultra-transformés. Curtay insiste également sur la chronobiologie nutritionnelle : petit-déjeuner protéiné, dîner léger, fenêtre de jeûne nocturne d'au moins 12 h.",
      },
      {
        heading: "Micronutriments documentés",
        body: "Magnésium (300-400 mg/j, forme glycérophosphate ou bisglycinate) : déficits associés à la résistance à l'insuline. Vitamine D3 (selon dosage, viser 30-50 ng/mL). Oméga-3 EPA/DHA (1-2 g/j) : effet sur triglycérides documenté par méta-analyses. Berbérine (500 mg × 2-3/j) : RCT et méta-analyses suggèrent un effet sur glycémie et HbA1c comparable, à court terme, à des hypoglycémiants oraux légers — à manier avec un médecin si traitement antidiabétique en cours.",
      },
      {
        heading: "Activité physique et sommeil",
        body: "L'activité physique régulière (marche rapide 30-45 min/j, 2 séances de renforcement/semaine) améliore la sensibilité à l'insuline indépendamment de la perte de poids. Le sommeil court (< 6 h) et de mauvaise qualité aggrave la résistance à l'insuline : viser 7-8 h, coucher régulier, exposition à la lumière naturelle matinale.",
      },
      {
        heading: "État des connaissances",
        body: "Le régime méditerranéen et l'activité physique sont des interventions de niveau méta-analyse. Les compléments (magnésium, oméga-3, berbérine) ont des données RCT favorables mais n'ont pas vocation à remplacer un traitement médical. Aucune supplémentation ne corrige seule un syndrome métabolique installé.",
      },
    ],
    keyPoints: [
      "5 critères, 3 suffisent pour le diagnostic",
      "Régime méditerranéen : intervention de premier niveau",
      "Magnésium, vitamine D, oméga-3 : bases nutritionnelles",
      "Berbérine : à discuter avec le médecin si antidiabétiques",
      "Activité physique et sommeil non négociables",
    ],
    contre_indications: [
      "Berbérine : contre-indiquée pendant la grossesse, l'allaitement, chez l'enfant ; interactions avec ciclosporine, certains antidiabétiques (risque d'hypoglycémie), inducteurs du CYP3A4.",
      "Oméga-3 hautes doses : prudence sous anticoagulants ou avant chirurgie.",
      "Toute supplémentation doit être validée par un médecin si traitement cardiovasculaire ou antidiabétique en cours.",
    ],
    tags: ['syndrome métabolique', 'insulinorésistance', 'régime méditerranéen', 'berbérine', 'curtay'],
    evidence_level: 'meta-analysis',
    evidence_note:
      "Le régime méditerranéen bénéficie de méta-analyses solides (cardiovasculaire, diabète). Les supplémentations citées ont des RCT favorables mais ne remplacent pas le traitement médical.",
    updatedAt: '2026-05-29',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 2. FIBROMYALGIE (CURTAY)
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'fibromyalgie-protocole-curtay',
    domain: 'nutritherapie',
    category: 'objectifs',
    title: "Fibromyalgie : le protocole nutritionnel de Jean-Paul Curtay",
    excerpt:
      "Magnésium, antioxydants, mitochondries, oméga-3 : grille de lecture nutrithérapique de la fibromyalgie, en complément du suivi médical.",
    readingTime: 7,
    intro:
      "La fibromyalgie reste une affection mal comprise, sans cause unique identifiée, dont la prise en charge médicale repose surtout sur l'activité physique adaptée, la psychothérapie et certains antalgiques. Jean-Paul Curtay a proposé, dans une logique de soutien et non de substitution, un protocole nutritionnel ciblant le déficit énergétique, le stress oxydatif et l'inflammation de bas grade fréquemment observés. Ces approches ne remplacent en aucun cas une prise en charge médicale et leur niveau de preuve reste préliminaire.",
    sections: [
      {
        heading: "Hypothèses physiopathologiques",
        body: "Plusieurs pistes coexistent : sensibilisation centrale à la douleur, dysfonction mitochondriale musculaire, déficit en sérotonine, stress oxydatif, microinflammation, perturbations du sommeil profond. Curtay insiste sur la convergence entre fatigue, troubles du sommeil et douleurs diffuses, qui oriente vers un soutien énergétique mitochondrial.",
      },
      {
        heading: "Magnésium et cofacteurs",
        body: "Magnésium glycérophosphate ou bisglycinate 300-400 mg/j, fractionné, avec vitamine B6 P5P (25-50 mg/j) pour favoriser l'entrée intracellulaire. Plusieurs petits essais suggèrent une amélioration de la douleur et de la qualité de vie, sans constituer une preuve définitive. Cure de 3 mois renouvelable.",
      },
      {
        heading: "Soutien mitochondrial",
        body: "CoQ10 (ubiquinol 100-200 mg/j) : RCT pilotes (Cordero) ont rapporté une réduction de la fatigue et des douleurs. Acétyl-L-carnitine 1-2 g/j : essais positifs sur la douleur et la fatigue. Acide alpha-lipoïque 300-600 mg/j. Vitamine D3 si 25-OH < 30 ng/mL : carence fréquente, à corriger.",
      },
      {
        heading: "Anti-inflammatoires nutritionnels",
        body: "Oméga-3 EPA/DHA 2 g/j. Curcumine standardisée (biodisponibilité optimisée) 500-1000 mg/j. Régime anti-inflammatoire de type méditerranéen, limitation des sucres rapides et des aliments ultra-transformés. Évaluation d'une éventuelle intolérance au gluten ou aux FODMAP si syndrome digestif associé.",
      },
      {
        heading: "Sommeil, mouvement, gestion du stress",
        body: "Le sommeil profond est la pierre angulaire : magnésium au dîner, glycine 3 g au coucher, hygiène du sommeil stricte. Activité physique adaptée (marche, natation, tai-chi, yoga doux) — niveau de preuve élevé. Cohérence cardiaque, méditation : effet sur la modulation centrale de la douleur.",
      },
    ],
    keyPoints: [
      "Approche multimodale : douleur centrale + mitochondries + sommeil",
      "Magnésium + B6 : base à 3 mois",
      "CoQ10 et acétyl-L-carnitine : RCT pilotes favorables",
      "Activité physique adaptée : meilleure preuve disponible",
      "Aucune supplémentation ne remplace le suivi médical",
    ],
    contre_indications: [
      "CoQ10 : interaction possible avec warfarine (surveillance INR).",
      "Curcumine : prudence sous anticoagulants, calculs biliaires actifs, obstruction des voies biliaires.",
      "Acide alpha-lipoïque : prudence chez les diabétiques (potentialisation hypoglycémiante).",
      "Toujours informer le médecin traitant et le rhumatologue des compléments pris.",
    ],
    tags: ['fibromyalgie', 'curtay', 'mitochondries', 'magnésium', 'douleur chronique'],
    evidence_level: 'preliminary',
    evidence_note:
      "Les supplémentations citées disposent d'essais cliniques pilotes mais pas de méta-analyses concluantes. L'activité physique adaptée reste l'intervention la mieux documentée.",
    updatedAt: '2026-05-29',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 3. MIGRAINE
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'migraine-mg-b2-coq10',
    domain: 'nutritherapie',
    category: 'objectifs',
    title: "Migraine : magnésium, riboflavine (B2) et coenzyme Q10",
    excerpt:
      "Trois micronutriments documentés par RCT en prévention de la migraine. Posologies, niveaux de preuve, précautions.",
    readingTime: 6,
    intro:
      "Le magnésium, la riboflavine (B2) et la coenzyme Q10 figurent dans plusieurs recommandations internationales (American Headache Society, Canadian Headache Society) comme options de prévention de la migraine, avec un niveau de preuve modéré et un excellent profil de tolérance. Cette approche complète, et ne remplace pas, le suivi neurologique habituel.",
    sections: [
      {
        heading: "Magnésium : le plus étudié",
        body: "Plusieurs RCT et méta-analyses (Chiu 2016) suggèrent une réduction de la fréquence des crises avec du magnésium oral 400-600 mg/j (formes bien tolérées : bisglycinate, glycérophosphate, citrate). Effet attribué à la modulation de la dépression corticale envahissante et à la régulation du NMDA. Délai d'action : 6-12 semaines.",
      },
      {
        heading: "Riboflavine (vitamine B2)",
        body: "Schoenen 1998 : RCT montrant une réduction de la fréquence des crises avec 400 mg/j de riboflavine pendant 3 mois. Plusieurs travaux ultérieurs confortent cet effet, avec une tolérance excellente (urines jaune fluorescent attendues). Mécanisme : soutien de la chaîne respiratoire mitochondriale.",
      },
      {
        heading: "Coenzyme Q10",
        body: "Sandor 2005 (RCT) puis méta-analyses : CoQ10 100 mg × 3/j (soit 300 mg/j) réduit la fréquence et l'intensité des crises chez l'adulte ; études pédiatriques également positives. Action mitochondriale. Délai d'action : 4-12 semaines. Ubiquinol mieux absorbé que ubiquinone.",
      },
      {
        heading: "Soutien complémentaire",
        body: "Oméga-3 EPA/DHA 1-2 g/j : données positives sur la fréquence des migraines. Identification des déclencheurs alimentaires individuels (tyramine, glutamate, aspartame, alcool, jeûne prolongé). Régularité des repas et du sommeil. Hydratation. Limitation de la caféine.",
      },
      {
        heading: "Quand consulter",
        body: "Toute migraine nouvelle, modifiée dans son caractère, accompagnée de signes neurologiques persistants, ou résistante au traitement habituel nécessite un avis neurologique. La supplémentation est un soutien, pas un traitement de la crise.",
      },
    ],
    keyPoints: [
      "Magnésium 400-600 mg/j : RCT et méta-analyses",
      "B2 400 mg/j : RCT de Schoenen 1998 et suivants",
      "CoQ10 300 mg/j : RCT et méta-analyses",
      "Délai d'action : 6-12 semaines en moyenne",
      "Approche préventive, pas de traitement de crise",
    ],
    contre_indications: [
      "Magnésium hautes doses : prudence en cas d'insuffisance rénale.",
      "CoQ10 : interaction possible avec warfarine (surveillance INR).",
      "Riboflavine : très bien tolérée ; urines jaune fluorescent sans gravité.",
      "Avis médical impératif si migraine récente, sévère, avec aura prolongée ou symptômes neurologiques inhabituels.",
    ],
    tags: ['migraine', 'magnésium', 'riboflavine', 'B2', 'CoQ10', 'mitochondries'],
    evidence_level: 'rct',
    evidence_note:
      "Magnésium, B2 et CoQ10 disposent chacun de RCT et de revues systématiques en prévention de la migraine. Le niveau de preuve est modéré ; le profil de tolérance est excellent.",
    updatedAt: '2026-05-29',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 4. SII / FODMAP / GLUTAMINE
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'sii-fodmap-glutamine',
    domain: 'nutritherapie',
    category: 'objectifs',
    title: "Syndrome de l'intestin irritable (SII) : régime FODMAP et glutamine",
    excerpt:
      "Le régime pauvre en FODMAP a le niveau de preuve le plus élevé. La glutamine est étudiée dans les formes post-infectieuses. Précautions et limites.",
    readingTime: 7,
    intro:
      "Le syndrome de l'intestin irritable touche 5 à 10 % de la population. Le régime pauvre en FODMAP, développé à Monash University, est aujourd'hui l'intervention nutritionnelle la mieux documentée. La glutamine a été étudiée dans certaines formes post-infectieuses avec hyperperméabilité intestinale. Ces approches s'intègrent dans une prise en charge globale et ne remplacent pas le diagnostic différentiel médical.",
    sections: [
      {
        heading: "Diagnostic et bilan préalable",
        body: "Le SII se diagnostique cliniquement (critères de Rome IV) après exclusion des causes organiques : sérologie cœliaque, calprotectine fécale, NFS, CRP, voire coloscopie selon le contexte. Tout symptôme d'alarme (perte de poids, sang dans les selles, anémie, antécédents familiaux de cancer colorectal, début après 50 ans) impose un bilan médical complet.",
      },
      {
        heading: "Le régime pauvre en FODMAP",
        body: "FODMAP = Fermentescibles Oligo-, Di-, Mono-saccharides And Polyols (lactose, fructose excédentaire, fructanes, GOS, polyols). Méta-analyses (Black 2022) : amélioration significative des symptômes chez 50-70 % des patients. Protocole en 3 phases : 1) éviction stricte 4-6 semaines, 2) réintroductions ciblées, 3) personnalisation à long terme. L'accompagnement par un diététicien formé est vivement recommandé pour éviter les carences et l'appauvrissement du microbiote.",
      },
      {
        heading: "Glutamine et barrière intestinale",
        body: "Zhou 2019 (RCT) : L-glutamine 5 g × 3/j sur 8 semaines a montré une amélioration significative chez des patients SII post-infectieux avec hyperperméabilité. Cette donnée reste à confirmer sur d'autres formes de SII. Posologie usuelle : 5-15 g/j à jeun, en cure de 4-8 semaines. Pas de données chez la femme enceinte ou l'enfant.",
      },
      {
        heading: "Probiotiques ciblés",
        body: "Certaines souches (Lactobacillus plantarum 299v, Bifidobacterium infantis 35624, Saccharomyces boulardii) ont des essais favorables sur le SII. L'effet est souche-dépendant : un probiotique générique ne se vaut pas. Cure de 4 à 8 semaines, à évaluer individuellement. Prudence en cas d'immunodépression ou de cathéter central.",
      },
      {
        heading: "Soutien complémentaire",
        body: "Huile essentielle de menthe poivrée en capsules gastro-résistantes : antispasmodique, méta-analyses favorables. Psyllium (fibres solubles) plutôt que son de blé. Gestion du stress (TCC, hypnose ciblée SII : haut niveau de preuve). Alimentation lente, mastication, repas réguliers.",
      },
    ],
    keyPoints: [
      "Diagnostic clinique après exclusion d'une cause organique",
      "FODMAP : intervention la mieux documentée (méta-analyses)",
      "Glutamine : prometteuse dans les formes post-infectieuses",
      "Probiotiques : effet souche-dépendant",
      "Accompagnement diététique vivement conseillé",
    ],
    contre_indications: [
      "Régime FODMAP : pas en autoprescription longue, risque d'appauvrissement du microbiote et de carences ; déconseillé chez l'enfant et l'adolescent sans encadrement.",
      "Glutamine : prudence en cas de pathologie hépatique sévère, d'insuffisance rénale, ou de cancer (avis spécialisé).",
      "Probiotiques : prudence chez les patients immunodéprimés, porteurs de cathéter central, en réanimation.",
      "Huile essentielle de menthe poivrée : contre-indiquée en cas de RGO sévère sans capsule gastro-résistante, grossesse, enfant < 8 ans.",
    ],
    tags: ['SII', 'FODMAP', 'glutamine', 'probiotiques', 'microbiote'],
    evidence_level: 'meta-analysis',
    evidence_note:
      "Le régime FODMAP est soutenu par des méta-analyses. La glutamine et les probiotiques disposent de RCT favorables mais d'un niveau de preuve plus hétérogène, souche- ou contexte-dépendant.",
    updatedAt: '2026-05-29',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 5. HASHIMOTO
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'thyroidite-hashimoto-selenium',
    domain: 'nutritherapie',
    category: 'objectifs',
    title: "Thyroïdite de Hashimoto : sélénium, iode et précautions",
    excerpt:
      "Le sélénium a montré une réduction des anti-TPO dans plusieurs RCT. L'iode est un sujet plus complexe et potentiellement délétère à hautes doses. Approche prudente.",
    readingTime: 7,
    intro:
      "La thyroïdite de Hashimoto est la première cause d'hypothyroïdie dans les pays à apport iodé suffisant. Sa prise en charge médicale repose sur l'hormonothérapie substitutive quand elle est nécessaire. La nutrithérapie peut soutenir le terrain auto-immun, à condition d'éviter les pièges, notamment iodés. Toute supplémentation doit être discutée avec l'endocrinologue.",
    sections: [
      {
        heading: "Sélénium : preuve la plus solide",
        body: "Gärtner 2002 puis plusieurs RCT et méta-analyses : 200 µg/j de sélénométhionine pendant 3-6 mois réduit significativement les anti-TPO. L'effet sur les symptômes et l'évolution de la maladie reste plus discuté. Forme conseillée : sélénométhionine. Ne pas dépasser 200 µg/j en cure prolongée (toxicité au-delà). Avis médical si traitement par lévothyroxine.",
      },
      {
        heading: "Iode : prudence absolue",
        body: "Contrairement à une croyance répandue, l'iode à fortes doses peut aggraver une thyroïdite auto-immune (induction et révélation de Hashimoto bien documentées). En présence d'anticorps anti-TPO positifs, ne pas se supplémenter en iode sans dosage de l'iodurie et avis endocrinologique. L'apport alimentaire normal (sel iodé, produits laitiers, poissons) est en général suffisant.",
      },
      {
        heading: "Vitamine D et zinc",
        body: "Vitamine D : carence très fréquente dans les pathologies auto-immunes ; viser 30-50 ng/mL de 25-OH vitamine D, supplémentation adaptée au dosage. Zinc : 15-25 mg/j (cofacteur de la conversion T4 → T3). Magnésium : pertinent dans les contextes de fatigue associée.",
      },
      {
        heading: "Inflammation et alimentation",
        body: "Plusieurs séries de cas et études observationnelles suggèrent qu'un régime sans gluten peut réduire les anti-TPO chez certains patients. Le niveau de preuve reste limité (peu de RCT). Approche pragmatique : tester sur 3 mois, évaluer les marqueurs et le ressenti. Régime anti-inflammatoire, oméga-3, micro-nutrition du microbiote.",
      },
      {
        heading: "Suivi médical et hormonothérapie",
        body: "La supplémentation ne remplace en aucun cas la lévothyroxine quand elle est indiquée. Bilan régulier : TSH, T4L, T3L, anti-TPO, ferritine, vitamine D. Les ajustements de traitement sont du ressort du médecin endocrinologue.",
      },
    ],
    keyPoints: [
      "Sélénium 200 µg/j : RCT et méta-analyses sur la baisse des anti-TPO",
      "Iode hautes doses : à éviter sans avis spécialisé",
      "Vitamine D et zinc : à corriger si déficit",
      "Régime sans gluten : à tester individuellement",
      "Aucune substitution à la lévothyroxine",
    ],
    contre_indications: [
      "Sélénium > 200 µg/j en cure prolongée : risque de toxicité (sélénose).",
      "Iode hautes doses : contre-indiqué dans Hashimoto sans dosage de l'iodurie et avis endocrinologique.",
      "Toujours informer l'endocrinologue ; les compléments peuvent modifier l'équilibre de la lévothyroxine (notamment le fer et le calcium à distance de la prise).",
    ],
    tags: ['Hashimoto', 'thyroïde', 'sélénium', 'iode', 'auto-immunité'],
    evidence_level: 'rct',
    evidence_note:
      "Le sélénium dispose de plusieurs RCT et méta-analyses sur la baisse des anti-TPO ; l'effet clinique global reste discuté. L'iode hautes doses dans Hashimoto est à proscrire en l'absence d'évaluation spécialisée.",
    updatedAt: '2026-05-29',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 6. MÉNOPAUSE
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'menopause-phytoestrogenes',
    domain: 'nutritherapie',
    category: 'objectifs',
    title: "Ménopause : phyto-œstrogènes, oméga-3 et approche globale",
    excerpt:
      "Isoflavones de soja, lin, sauge, actée à grappes : que disent les études ? Bénéfices, limites et contre-indications.",
    readingTime: 7,
    intro:
      "La ménopause n'est pas une maladie mais une transition physiologique qui peut s'accompagner de symptômes (bouffées de chaleur, sueurs nocturnes, sécheresse, troubles du sommeil et de l'humeur, fragilité osseuse). L'approche nutrithérapique peut soutenir cette transition, sans se substituer aux décisions médicales (THM, suivi gynécologique).",
    sections: [
      {
        heading: "Phyto-œstrogènes : ce que disent les études",
        body: "Méta-analyses (Taku 2012, Li 2015) : les isoflavones de soja (génistéine, daidzéine) réduisent la fréquence et l'intensité des bouffées de chaleur de façon modeste mais significative, à des doses de 50-100 mg/j d'isoflavones, sur 12 semaines minimum. Effet plus marqué chez les femmes 'producteurs d'équol' (capacité bactérienne individuelle).",
      },
      {
        heading: "Plantes traditionnelles",
        body: "Actée à grappes (Cimicifuga racemosa) : données contrastées, plusieurs RCT positifs sur les bouffées de chaleur ; rares cas d'hépatotoxicité décrits (surveillance). Sauge officinale : tradition contre les sueurs, quelques RCT favorables. Houblon : phyto-œstrogène doux, intéressant en cas de troubles du sommeil associés.",
      },
      {
        heading: "Oméga-3, vitamine D, calcium",
        body: "Oméga-3 EPA/DHA : effet modeste sur l'humeur et les bouffées de chaleur, intérêt cardiovasculaire global. Vitamine D et calcium : essentiels pour la prévention osseuse, à adapter aux dosages individuels et aux apports alimentaires. Vitamine K2 (MK-7 90-180 µg/j) : intéresse la fixation osseuse du calcium.",
      },
      {
        heading: "Hygiène de vie",
        body: "Activité physique (renforcement musculaire et impact contre l'ostéoporose) : niveau de preuve élevé. Limitation de l'alcool, de la caféine, des plats épicés (déclencheurs des bouffées de chaleur). Gestion du stress, sommeil régulier. Alimentation méditerranéenne avec légumineuses et soja modéré (édamame, tofu, tempeh) plutôt que compléments isolés à forte dose.",
      },
      {
        heading: "Place du THM",
        body: "Le traitement hormonal de la ménopause reste, pour les femmes symptomatiques sans contre-indication, l'option la plus efficace sur les bouffées de chaleur et la prévention osseuse. La nutrithérapie est une alternative ou un complément, à discuter au cas par cas avec le médecin.",
      },
    ],
    keyPoints: [
      "Isoflavones de soja : effet modeste mais documenté sur bouffées de chaleur",
      "Actée à grappes : intéressante mais surveiller le foie",
      "Vitamine D + K2 + activité physique : prévention osseuse",
      "Alcool et caféine : déclencheurs fréquents",
      "Discussion avec le gynécologue indispensable, surtout en cas d'antécédents",
    ],
    contre_indications: [
      "Phyto-œstrogènes : contre-indication relative en cas d'antécédent de cancer hormono-dépendant (sein, endomètre) — avis oncologique impératif.",
      "Actée à grappes : prudence chez les patientes ayant une pathologie hépatique ; arrêt si signes d'hépatite (ictère, douleurs hépatiques).",
      "Sauge officinale (HE ou extraits concentrés) : contre-indiquée en cas d'épilepsie, de cancer hormono-dépendant, de grossesse, d'allaitement.",
      "Interactions possibles avec tamoxifène, anticoagulants.",
    ],
    tags: ['ménopause', 'phyto-œstrogènes', 'isoflavones', 'ostéoporose', 'bouffées de chaleur'],
    evidence_level: 'meta-analysis',
    evidence_note:
      "Les méta-analyses sur les isoflavones de soja montrent un effet modeste mais réel sur les bouffées de chaleur. Les phyto-œstrogènes ne sont pas un substitut au THM, et leur prescription nécessite une évaluation individuelle, notamment oncologique.",
    updatedAt: '2026-05-29',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 7. ARTHROSE
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'arthrose-curcuma-collagene',
    domain: 'nutritherapie',
    category: 'objectifs',
    title: "Arthrose : curcuma, collagène et antioxydants",
    excerpt:
      "Le curcuma a un niveau de preuve élevé sur la douleur arthrosique. Collagène, glucosamine, oméga-3 : panorama des données.",
    readingTime: 7,
    intro:
      "L'arthrose est une affection dégénérative articulaire dont la prise en charge associe activité physique adaptée, kinésithérapie, antalgiques et chirurgie en dernière intention. La nutrithérapie offre des soutiens intéressants, particulièrement le curcuma dont le niveau de preuve s'est consolidé ces dix dernières années. Approche complémentaire, jamais substitutive.",
    sections: [
      {
        heading: "Curcuma : méta-analyses convergentes",
        body: "Daily 2016, Bannuru 2018, Wang 2021 : méta-analyses montrant que la curcumine (extraits standardisés à biodisponibilité optimisée, 500-1500 mg/j) est non inférieure à l'ibuprofène ou au diclofénac sur la douleur arthrosique, avec une bien meilleure tolérance digestive. Effet visible en 4-12 semaines. Formes biodisponibles : Meriva (phytosome), BCM-95, Theracurmin, ou curcumine + pipérine.",
      },
      {
        heading: "Collagène hydrolysé",
        body: "García-Coronado 2019 (méta-analyse) : le collagène hydrolysé (peptides type II non dénaturé 40 mg/j ou collagène hydrolysé 10 g/j) améliore modestement la douleur et la fonction articulaire dans l'arthrose, en 12-24 semaines. Données de bonne qualité méthodologique mais effet de taille modérée.",
      },
      {
        heading: "Glucosamine et chondroïtine",
        body: "Données contrastées. Les méta-analyses globales sont mitigées, mais des analyses de sous-groupes (glucosamine sulfate cristalline, chondroïtine sulfate pharmaceutique) suggèrent un effet structurel modeste sur l'arthrose modérée du genou. Posologies : glucosamine sulfate 1500 mg/j, chondroïtine 800-1200 mg/j. Cure prolongée nécessaire.",
      },
      {
        heading: "Anti-inflammatoires nutritionnels",
        body: "Oméga-3 EPA/DHA 1-2 g/j : effet modeste mais consistant. Boswellia serrata (extrait standardisé en AKBA 100-250 mg/j) : RCT favorables sur la douleur et la fonction. Vitamine D si carence : corriger systématiquement. Antioxydants globaux (régime méditerranéen) : effet protecteur cumulatif.",
      },
      {
        heading: "Non négociable : mouvement",
        body: "L'exercice thérapeutique (renforcement musculaire, mobilité, aérobie modérée) reste l'intervention la mieux documentée dans l'arthrose, toutes méta-analyses confondues. La perte de poids, quand elle est nécessaire, multiplie l'efficacité de toutes les autres interventions. Aucune supplémentation ne remplace ces deux piliers.",
      },
    ],
    keyPoints: [
      "Curcumine : méta-analyses fortes, non inférieure aux AINS classiques",
      "Collagène : effet modeste mais documenté",
      "Glucosamine/chondroïtine : effet modeste, forme et dose pharmaceutiques",
      "Oméga-3 et boswellia : compléments cohérents",
      "Activité physique adaptée : intervention n°1",
    ],
    contre_indications: [
      "Curcuma : prudence sous anticoagulants (warfarine, AOD, aspirine), en cas de calculs biliaires ou d'obstruction des voies biliaires ; arrêt 2 semaines avant chirurgie.",
      "Glucosamine : prudence chez les diabétiques (surveillance glycémique), en cas d'allergie aux crustacés (selon source).",
      "Boswellia : prudence pendant la grossesse.",
      "Toujours signaler les compléments au médecin traitant, rhumatologue et anesthésiste avant chirurgie.",
    ],
    tags: ['arthrose', 'curcuma', 'curcumine', 'collagène', 'glucosamine', 'boswellia'],
    evidence_level: 'meta-analysis',
    evidence_note:
      "Le curcuma dispose de méta-analyses de haut niveau sur l'arthrose du genou. Le collagène hydrolysé a un effet plus modeste mais documenté. L'exercice thérapeutique reste l'intervention de premier rang.",
    updatedAt: '2026-05-29',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 8. DÉPRESSION LÉGÈRE
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'depression-tryptophane-omega3',
    domain: 'nutritherapie',
    category: 'objectifs',
    title: "Dépression légère : tryptophane, oméga-3 et précautions",
    excerpt:
      "EPA et tryptophane font partie des pistes nutrithérapiques étudiées dans les dépressions légères à modérées. Interactions médicamenteuses majeures à connaître.",
    readingTime: 7,
    intro:
      "La dépression est une maladie sérieuse dont la prise en charge relève d'un médecin. Dans les formes légères à modérées, des interventions nutritionnelles ont fait l'objet d'études cliniques, en complément (rarement à la place) du traitement médical et psychothérapeutique. Tout protocole nutritionnel doit être validé par le médecin prescripteur, en particulier en raison du risque de syndrome sérotoninergique avec certains antidépresseurs.",
    sections: [
      {
        heading: "Oméga-3 EPA : les meilleures données",
        body: "Méta-analyses (Mocking 2016, Liao 2019) : l'EPA, à des doses de 1-2 g/j, ratio EPA/DHA élevé (≥ 60 % EPA), montre un effet antidépresseur modeste mais significatif, particulièrement en association à un antidépresseur. L'effet est plus marqué dans la dépression unipolaire que bipolaire. Délai d'action : 4-8 semaines.",
      },
      {
        heading: "Tryptophane et 5-HTP : prudence",
        body: "Le tryptophane (précurseur de la sérotonine) a été étudié dans la dépression, avec des résultats hétérogènes. ATTENTION : association strictement contre-indiquée avec les ISRS, IMAO, IRSN, certains antimigraineux (triptans), tramadol — risque de syndrome sérotoninergique potentiellement mortel. Une supplémentation en tryptophane ou 5-HTP ne peut s'envisager qu'en l'absence de tout médicament sérotoninergique et sous contrôle médical.",
      },
      {
        heading: "Vitamines B, D, magnésium",
        body: "Folates (B9 sous forme méthylfolate) : intéressants en cas de polymorphisme MTHFR et de déficit documenté. Vitamine D : carence très fréquente chez les patients déprimés ; corriger jusqu'à 30-50 ng/mL. Vitamine B12 : à doser systématiquement, particulièrement chez les végétariens, les > 60 ans, les patients sous IPP ou metformine. Magnésium : pertinent dans les contextes anxio-dépressifs.",
      },
      {
        heading: "Microbiote et axe intestin-cerveau",
        body: "Des données préliminaires (essais sur psychobiotiques) suggèrent un effet de certaines souches probiotiques (Lactobacillus helveticus R0052, Bifidobacterium longum R0175) sur les symptômes anxio-dépressifs. Niveau de preuve encore préliminaire. Régime méditerranéen (étude SMILES, Jacka 2017) : effet documenté sur la dépression majeure.",
      },
      {
        heading: "Activité physique et thérapies",
        body: "L'activité physique régulière (méta-analyses) a un effet antidépresseur comparable à certains traitements pharmacologiques sur les formes légères à modérées. La psychothérapie (TCC, thérapies interpersonnelles) reste un pilier. La nutrithérapie est un complément, pas un substitut.",
      },
    ],
    keyPoints: [
      "Oméga-3 EPA : 1-2 g/j en complément, données solides",
      "Tryptophane / 5-HTP : interaction MAJEURE avec ISRS et autres",
      "Vitamine D, B12, folates : corriger les déficits",
      "Régime méditerranéen : effet documenté (SMILES)",
      "Activité physique et psychothérapie : piliers",
    ],
    contre_indications: [
      "Tryptophane et 5-HTP : CONTRE-INDIQUÉS avec ISRS, IRSN, IMAO, tramadol, triptans, millepertuis — risque de syndrome sérotoninergique.",
      "Millepertuis : interactions multiples (contraceptifs, AVK, antirétroviraux, immunosuppresseurs, antidépresseurs) — à proscrire sans validation médicale.",
      "Aucune supplémentation ne remplace une consultation devant des idées noires, un risque suicidaire ou une dépression sévère.",
      "Avis psychiatrique systématique en cas de pathologie bipolaire ou psychotique connue.",
    ],
    tags: ['dépression', 'tryptophane', '5-HTP', 'oméga-3 EPA', 'sérotonine', 'curtay'],
    evidence_level: 'rct',
    evidence_note:
      "L'EPA dispose de méta-analyses favorables en complément des antidépresseurs. Le tryptophane et le 5-HTP, ainsi que le millepertuis, présentent des risques d'interaction majeurs qui imposent un encadrement médical strict.",
    updatedAt: '2026-05-29',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 9. INSOMNIE
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'insomnie-melatonine-magnesium',
    domain: 'nutritherapie',
    category: 'objectifs',
    title: "Insomnie : mélatonine, magnésium et hygiène du sommeil",
    excerpt:
      "Mélatonine validée pour les troubles d'endormissement et les décalages horaires. Magnésium, glycine, plantes : panorama et précautions.",
    readingTime: 7,
    intro:
      "L'insomnie chronique est un problème de santé publique. La prise en charge de référence reste la thérapie cognitivo-comportementale de l'insomnie (TCC-I), suivie par les hypnotiques en deuxième intention. Plusieurs compléments alimentaires ont des données scientifiques sérieuses et peuvent être intégrés dans une approche prudente.",
    sections: [
      {
        heading: "Hygiène du sommeil : la base",
        body: "Avant toute supplémentation : horaires réguliers, exposition à la lumière naturelle le matin, pénombre le soir, arrêt des écrans 1 h avant le coucher, chambre fraîche (18-19 °C), pas de café après 14-16 h, alcool évité (fragmente le sommeil), activité physique en journée mais pas tardive. La TCC-I est l'intervention de référence dans l'insomnie chronique.",
      },
      {
        heading: "Mélatonine : indications précises",
        body: "Méta-analyses (Auld 2017, Low 2020) : la mélatonine 0,5-3 mg, 30-60 min avant le coucher, est efficace dans les troubles d'endormissement liés à un retard de phase et dans le décalage horaire. Effet plus modeste dans l'insomnie primaire de l'adulte. Mélatonine LP 2 mg utile chez le sujet > 55 ans (forme prescrite en France : Circadin). Pas un sédatif : ne marche que si rythme désynchronisé.",
      },
      {
        heading: "Magnésium et glycine",
        body: "Magnésium glycérophosphate 300-400 mg au dîner : effet documenté sur le sommeil chez le sujet âgé (Abbasi 2012). Glycine 3 g 1 h avant le coucher : RCT japonais (Bannai 2012) montrant amélioration du sommeil profond et de la vigilance au réveil. Très bien tolérée.",
      },
      {
        heading: "Plantes documentées",
        body: "Valériane : méta-analyses contrastées, effet modeste sur la latence d'endormissement. Passiflore : essais favorables sur l'anxiété d'endormissement. Mélisse, camomille : tradition + petits essais positifs. L-théanine 200 mg : effet documenté sur la qualité subjective du sommeil sans somnolence diurne.",
      },
      {
        heading: "Causes à rechercher",
        body: "Toute insomnie chronique mérite un bilan médical : apnée du sommeil (signes : ronflements, fatigue diurne, hypertension), syndrome des jambes sans repos (carence martiale fréquente), pathologie thyroïdienne, dépression, douleurs chroniques, médicaments (corticoïdes, bêta-bloquants, stimulants). La supplémentation est un soutien, pas un palliatif d'une cause non traitée.",
      },
    ],
    keyPoints: [
      "Hygiène du sommeil et TCC-I : interventions de premier rang",
      "Mélatonine 0,5-3 mg : utile dans retard de phase, jet lag, > 55 ans",
      "Magnésium et glycine : bonnes données chez le sujet âgé",
      "Plantes : effet modeste, profil de tolérance favorable",
      "Bilan médical en cas d'insomnie chronique",
    ],
    contre_indications: [
      "Mélatonine : prudence en cas de maladie auto-immune, d'épilepsie, sous immunosuppresseurs, anticoagulants, antidiabétiques ; non recommandée chez la femme enceinte ou allaitante et l'enfant sans avis spécialisé.",
      "Valériane : prudence sous sédatifs, alcool, anesthésiques ; arrêt avant chirurgie.",
      "Magnésium hautes doses : prudence en cas d'insuffisance rénale.",
      "Toute insomnie persistante > 3 mois doit être évaluée médicalement.",
    ],
    tags: ['insomnie', 'sommeil', 'mélatonine', 'magnésium', 'glycine', 'valériane'],
    evidence_level: 'meta-analysis',
    evidence_note:
      "La mélatonine dispose de méta-analyses dans des indications précises (retard de phase, jet lag, > 55 ans). Magnésium et glycine ont des RCT favorables. La TCC-I reste l'intervention de référence dans l'insomnie chronique.",
    updatedAt: '2026-05-29',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 10. STRESS OXYDATIF / GLUTATHION (LAGARDE)
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'stress-oxydatif-glutathion',
    domain: 'nutritherapie',
    category: 'objectifs',
    title: "Stress oxydatif : le rôle pivot du glutathion (approche Lagarde)",
    excerpt:
      "Glutathion, NAC, sélénium, vitamine C, glycine : comment soutenir le système antioxydant endogène selon une lecture nutrithérapique prudente.",
    readingTime: 7,
    intro:
      "Le stress oxydatif (déséquilibre entre production de radicaux libres et capacités antioxydantes) est impliqué dans de nombreux processus de vieillissement et de maladies chroniques. Le glutathion est l'antioxydant endogène majeur. L'approche nutrithérapique défendue notamment par Christian Lagarde insiste sur le soutien des cofacteurs et précurseurs, plus que sur la supplémentation directe en glutathion oral, dont la biodisponibilité est discutée.",
    sections: [
      {
        heading: "Le glutathion : antioxydant pivot",
        body: "Le glutathion (GSH) est un tripeptide (glutamate-cystéine-glycine) synthétisé dans toutes les cellules. Il neutralise les peroxydes, régénère les vitamines C et E oxydées, et conjugue les xénobiotiques (foie). Son taux diminue avec l'âge, le stress chronique, l'exposition aux polluants, certaines pathologies (diabète, BPCO, maladies neurodégénératives).",
      },
      {
        heading: "Précurseurs : NAC, glycine, glutamate",
        body: "La cystéine est l'acide aminé limitant : la N-acétylcystéine (NAC) 600-1200 mg/j est la voie la mieux étudiée pour augmenter le glutathion intracellulaire, avec des RCT en BPCO, en mucoviscidose, dans certaines hépatopathies. La glycine et le glutamate sont les deux autres briques. Une étude de Sekhar (2011, 2021) suggère qu'apporter glycine + NAC ensemble restaure le glutathion chez le sujet âgé.",
      },
      {
        heading: "Cofacteurs enzymatiques",
        body: "Le sélénium (sélénométhionine 100-200 µg/j) est cofacteur de la glutathion peroxydase. La riboflavine (B2) est cofacteur de la glutathion réductase. Le zinc et le magnésium soutiennent l'ensemble des enzymes antioxydantes. Une approche nutrithérapique cohérente combine précurseurs et cofacteurs plutôt qu'un seul antioxydant isolé.",
      },
      {
        heading: "Vitamine C, E, polyphénols",
        body: "La vitamine C (500-1000 mg/j) régénère la vitamine E oxydée et participe au cycle antioxydant. La vitamine E (forme tocophérols et tocotriénols mélangés) protège les membranes. Les polyphénols alimentaires (thé vert, baies, cacao, légumes colorés) modulent les voies Nrf2 — base du discours antioxydant nutritionnel.",
      },
      {
        heading: "Limites et nuances",
        body: "L'antioxydant n'est pas une catégorie thérapeutique homogène : à très hautes doses, certains antioxydants peuvent devenir pro-oxydants (vitamine E haute dose dans HOPE-TOO, bêta-carotène chez les fumeurs : essais CARET et ATBC). L'approche prudente consiste à privilégier l'alimentation (régime méditerranéen) et à supplémenter ciblé, à doses raisonnables, sous suivi.",
      },
    ],
    keyPoints: [
      "Glutathion : antioxydant endogène pivot",
      "NAC + glycine : précurseurs documentés",
      "Sélénium et B2 : cofacteurs des enzymes du glutathion",
      "Approche systémique > antioxydant isolé",
      "Hautes doses prolongées d'antioxydants : potentielle inversion pro-oxydante",
    ],
    contre_indications: [
      "NAC : prudence en cas d'asthme (rare bronchospasme), ulcère gastro-duodénal, sous nitroglycérine (potentialisation hypotensive) ; éviter avant chirurgie.",
      "Bêta-carotène hautes doses : contre-indiqué chez le fumeur (essais ATBC, CARET).",
      "Vitamine E hautes doses : prudence sous anticoagulants.",
      "Sélénium > 200 µg/j en cure prolongée : risque de sélénose.",
    ],
    tags: ['stress oxydatif', 'glutathion', 'NAC', 'antioxydants', 'lagarde', 'sélénium'],
    evidence_level: 'rct',
    evidence_note:
      "Le rôle du glutathion est bien établi sur le plan biochimique. Le soutien par NAC est documenté dans plusieurs indications (BPCO, mucoviscidose, hépatologie). L'utilité des antioxydants en prévention primaire reste discutée, avec quelques signaux négatifs aux hautes doses.",
    updatedAt: '2026-05-29',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 11. MITOCHONDRIES (LAGARDE)
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'mitochondries-energie-cellulaire',
    domain: 'nutritherapie',
    category: 'objectifs',
    title: "Mitochondries et énergie cellulaire (approche Lagarde)",
    excerpt:
      "CoQ10, carnitine, B-complexe, NAD+, alpha-lipoïque : comment soutenir la production d'ATP dans une logique nutrithérapique sourcée.",
    readingTime: 7,
    intro:
      "Les mitochondries produisent l'ATP, monnaie énergétique cellulaire. Leur dysfonctionnement est impliqué dans la fatigue chronique, certaines myopathies, plusieurs maladies neurodégénératives, et accompagne le vieillissement. L'approche nutrithérapique défendue notamment par Christian Lagarde et Jean-Paul Curtay propose un soutien multimodal : cofacteurs du cycle de Krebs, transporteurs (carnitine), antioxydants membranaires, précurseurs du NAD+.",
    sections: [
      {
        heading: "Cycle de Krebs et vitamines B",
        body: "Les enzymes du cycle de Krebs et de la chaîne respiratoire nécessitent des vitamines B comme cofacteurs : B1 (thiamine), B2 (riboflavine, FAD), B3 (niacine, NAD+), B5 (acide pantothénique, CoA), B6 (P5P). Un complexe B actif (formes méthylées et phosphorylées) couvre ce socle. Carences fréquentes : B1 dans l'alcoolisme et l'alimentation raffinée, B12 chez le sujet âgé et sous IPP/metformine.",
      },
      {
        heading: "Coenzyme Q10",
        body: "La CoQ10 est un transporteur d'électrons essentiel de la chaîne respiratoire. Sa synthèse endogène diminue avec l'âge et est inhibée par les statines. Posologie courante : ubiquinol 100-200 mg/j. Données positives en insuffisance cardiaque (Q-SYMBIO, Mortensen 2014), migraine, fibromyalgie. La forme ubiquinol est mieux absorbée que l'ubiquinone, en particulier après 40 ans.",
      },
      {
        heading: "Carnitine et acétyl-L-carnitine",
        body: "La L-carnitine transporte les acides gras à longue chaîne dans la mitochondrie pour leur bêta-oxydation. L'acétyl-L-carnitine (ALC) traverse la barrière hémato-encéphalique et soutient le métabolisme cérébral. Posologies usuelles : 1-2 g/j d'ALC. RCT en fatigue chronique, neuropathies diabétiques, fonctions cognitives chez le sujet âgé.",
      },
      {
        heading: "NAD+ et ses précurseurs",
        body: "Le NAD+ est un coenzyme central. Ses précurseurs (nicotinamide riboside NR, nicotinamide mononucléotide NMN, niacine, niacinamide) augmentent les taux de NAD+ tissulaires dans plusieurs études. Données encore préliminaires sur les effets cliniques de longévité ; intérêt suggéré en performance métabolique du sujet âgé. La niacine (B3) reste la forme historique et économique.",
      },
      {
        heading: "Antioxydants mitochondriaux",
        body: "L'acide alpha-lipoïque (300-600 mg/j) est à la fois hydro- et liposoluble, régénère d'autres antioxydants et participe au métabolisme du pyruvate. PQQ (10-20 mg/j) : données préliminaires suggérant un effet sur la biogenèse mitochondriale. Magnésium (cofacteur de plus de 300 enzymes, dont l'ATP-synthase). Activité physique : meilleur stimulant connu de la biogenèse mitochondriale.",
      },
    ],
    keyPoints: [
      "Vitamines B actives : cofacteurs incontournables",
      "CoQ10 ubiquinol : données solides, intéressant sous statines",
      "Acétyl-L-carnitine : transport et métabolisme cérébral",
      "NAD+ et précurseurs : piste émergente, données préliminaires",
      "Activité physique : stimulus mitochondrial n°1",
    ],
    contre_indications: [
      "CoQ10 : interaction possible avec warfarine (surveillance INR).",
      "Acide alpha-lipoïque : prudence chez le diabétique (potentialisation hypoglycémiante), arrêt avant chirurgie.",
      "Niacine hautes doses (> 500 mg/j) : risque de flush, d'hépatotoxicité, d'aggravation glycémique — encadrement médical.",
      "Acétyl-L-carnitine : prudence en cas d'épilepsie, d'hyperthyroïdie ; éviter en hémodialyse.",
    ],
    tags: ['mitochondries', 'CoQ10', 'carnitine', 'NAD', 'énergie', 'lagarde', 'curtay'],
    evidence_level: 'rct',
    evidence_note:
      "Plusieurs RCT et méta-analyses soutiennent l'usage de la CoQ10 en insuffisance cardiaque et en migraine, et de l'acétyl-L-carnitine dans la fatigue chronique et certaines neuropathies. Les pistes NAD+ restent prometteuses mais préliminaires sur le plan clinique.",
    updatedAt: '2026-05-29',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 12. MÉTHYLATION / MTHFR
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'methylation-b9-b12-mthfr',
    domain: 'nutritherapie',
    category: 'objectifs',
    title: "Méthylation, vitamines B9, B12 et polymorphismes MTHFR",
    excerpt:
      "Folate, cobalamine, choline, bétaïne : comment soutenir le cycle de la méthylation, avec un regard prudent sur les polymorphismes MTHFR.",
    readingTime: 7,
    intro:
      "Le cycle de la méthylation est central : synthèse des neurotransmetteurs, expression des gènes (épigénétique), métabolisme de l'homocystéine, détoxification. Les polymorphismes du gène MTHFR (C677T, A1298C) sont fréquents et ont fait l'objet d'un engouement nutrithérapique parfois excessif. L'approche prudente, défendue notamment par Jean-Paul Curtay, consiste à corriger les déficits documentés et à utiliser des formes actives quand c'est justifié, sans extrapoler à des effets cliniques non démontrés.",
    sections: [
      {
        heading: "Le cycle de la méthylation en bref",
        body: "Le donneur universel de méthyles est la SAMe (S-adénosylméthionine), produite à partir de la méthionine. Le cycle de l'homocystéine régénère la méthionine grâce au méthylfolate (issu de la B9) et à la B12 (méthylcobalamine). La bétaïne et la choline offrent une voie alternative. Une homocystéine élevée est un marqueur indirect d'un cycle perturbé.",
      },
      {
        heading: "Vitamines B9 et B12 : socle",
        body: "Le déficit en B12 est fréquent (sujets âgés, végétariens stricts, sous IPP, sous metformine) et peut donner des troubles neurologiques irréversibles s'il n'est pas corrigé. Dosage : B12 sérique + idéalement holo-transcobalamine ou MMA urinaire. Supplémentation : 1000 µg/j de méthylcobalamine ou hydroxocobalamine PO, voire IM selon le contexte. Folate : forme méthylfolate (5-MTHF) 400-800 µg/j, qui contourne le polymorphisme MTHFR.",
      },
      {
        heading: "Polymorphismes MTHFR : nuances",
        body: "Le polymorphisme C677T homozygote est associé à une activité enzymatique réduite (~30-70 %) et à une homocystéine légèrement plus élevée. L'extrapolation à des risques cliniques majeurs est, à ce jour, peu soutenue par les méta-analyses. Pour la grossesse, la supplémentation en folate est recommandée chez toutes les femmes en âge de procréer, indépendamment du génotype. L'idée 'MTHFR = ne tolère pas l'acide folique synthétique' est très répandue mais peu démontrée cliniquement ; le méthylfolate reste néanmoins un choix raisonnable.",
      },
      {
        heading: "Choline, bétaïne, B6, B2",
        body: "La choline (250-500 mg/j ou apport alimentaire suffisant : œufs, foie) et la bétaïne offrent une voie indépendante du méthylfolate. La B6 (P5P) intervient dans la transsulfuration de l'homocystéine. La B2 (riboflavine) est cofacteur de la MTHFR elle-même : intéressante chez les porteurs de C677T.",
      },
      {
        heading: "Limites et bon sens",
        body: "Avant tout protocole 'méthylation', doser homocystéine, B12, folates érythrocytaires. Ne pas multiplier les compléments en l'absence de marqueur perturbé. Une supplémentation excessive en méthyles peut, chez certains sujets sensibles, induire anxiété, irritabilité, troubles du sommeil — surtout en cas d'association avec la SAMe. Prudence chez les patients bipolaires.",
      },
    ],
    keyPoints: [
      "Cycle méthylation = B9, B12, SAMe, homocystéine",
      "Méthylfolate (5-MTHF) : contourne le polymorphisme MTHFR",
      "Méthylcobalamine ou hydroxocobalamine 1000 µg/j si déficit",
      "MTHFR : importance clinique souvent surestimée hors grossesse",
      "Bilan biologique avant supplémentation systématique",
    ],
    contre_indications: [
      "Méthylfolate et SAMe : prudence chez les patients bipolaires (risque de virage maniaque).",
      "Supplémentation en B12 : ne JAMAIS masquer un déficit non exploré (anémie pernicieuse non diagnostiquée) — la B9 isolée peut corriger l'anémie sans corriger les troubles neurologiques de la carence en B12.",
      "Grossesse : la supplémentation en folate (400-800 µg/j) débute idéalement 1 mois avant la conception, sur avis médical.",
      "Toute homocystéine élevée mérite une enquête (B12, B9, B6, fonction rénale, hypothyroïdie) avant supplémentation aveugle.",
    ],
    tags: ['méthylation', 'MTHFR', 'B9', 'B12', 'méthylfolate', 'homocystéine', 'curtay'],
    evidence_level: 'rct',
    evidence_note:
      "La correction des déficits en B9 et B12 est solidement documentée. L'utilité clinique d'une 'optimisation' de la méthylation hors grossesse et hors déficit est, à ce jour, peu soutenue par les essais. La supplémentation en folate périconceptionnelle bénéficie d'un niveau de preuve élevé pour la prévention des anomalies du tube neural.",
    updatedAt: '2026-05-29',
  },
];
