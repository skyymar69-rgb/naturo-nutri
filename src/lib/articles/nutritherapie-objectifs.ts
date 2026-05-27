import type { Article } from '../types';

const a = (slug: string, title: string, excerpt: string, intro: string, sections: { heading: string; body: string }[], tags: string[]): Article => ({
  slug, domain: 'nutritherapie', category: 'objectifs', title, excerpt, readingTime: 5, intro, sections, tags,
});

export const NUTRI_OBJECTIFS: Article[] = [
  a('complements-fatigue-chronique',
    "Compléments pour la fatigue chronique",
    "Protocole complet : mitochondries, surrénales, micronutriments. Pyramide d'action sur 3 mois.",
    "La fatigue chronique n'a pas une cause unique mais résulte souvent d'un cocktail : épuisement mitochondrial, surrénales fatiguées, carences micronutritionnelles, dysbiose. Le protocole nutrithérapique aborde tous ces axes simultanément.",
    [
      { heading: "Bilan préalable recommandé", body: "Ferritine, vit B12, vit D 25-OH, TSH + T3/T4 + anticorps thyroïdiens, cortisol salivaire (4 prélèvements/24h si possible), magnésium intra-érythrocytaire, glycémie à jeun + HbA1c, CRP-ultra-sensible. Ce bilan oriente le protocole." },
      { heading: "Protocole de base", body: "Magnésium glycérophosphate : 400 mg/jour matin et soir. Vitamine D3 : 4000 UI/jour le soir + K2 100 µg. Complexe B actif (B6 P5P + B9 méthylfolate + B12 méthylcobalamine) : 1 gélule matin. Vitamine C : 500 mg 2x/jour. Coenzyme Q10 (ubiquinol) : 100-200 mg/jour. Oméga-3 EPA/DHA : 1000 mg/jour." },
      { heading: "Soutien mitochondrial", body: "Acétyl-L-carnitine : 1000 mg matin. NADH : 5-10 mg matin. Acide alpha-lipoïque : 300-600 mg/jour. PQQ (pyrroloquinoléine quinone) : 10-20 mg/jour. D-ribose : 5 g/jour. Cette synergie restaure la production d'ATP en 2-3 mois." },
      { heading: "Soutien surrénal", body: "Si cortisol bas du matin : Rhodiole 200-400 mg le matin + Réglisse 300-500 mg (sauf hypertension) + Vitamine C 1000 mg + Vitamine B5 500 mg. Si cortisol haut soir : Ashwagandha 600 mg soir + Phosphatidylsérine 100 mg." },
      { heading: "Conseils d'hygiène", body: "Coucher avant 23h. Pas d'écran 1h avant le coucher. Marche en nature 30 min/jour. Cohérence cardiaque 3x5 min. Alimentation anti-inflammatoire. Réduire drastiquement le café. Éliminer alcool. Sport DOUX (marche, yoga, natation) — éviter HIIT en phase aiguë de fatigue." },
    ],
    ['fatigue chronique', 'mitochondries', 'surrénales']
  ),
  a('complements-anxiete',
    "Compléments pour l'anxiété",
    "GABA, magnésium, plantes apaisantes. Protocole nutrithérapique pour anxiété généralisée et attaques de panique.",
    "L'anxiété chronique a souvent une dimension biochimique : carences en magnésium, en B6, en GABA, en oméga-3. La nutrithérapie peut transformer le terrain anxieux en quelques mois, en complément d'un accompagnement psychologique.",
    [
      { heading: "Le cocktail magnésium + B6", body: "Pilier absolu : magnésium glycérophosphate 400-600 mg/jour + vitamine B6 P5P 25-50 mg/jour. La B6 permet l'entrée intracellulaire du magnésium. Cure de 3-6 mois pour reconstituer les stocks. Effet souvent net en 4-6 semaines." },
      { heading: "Acides aminés apaisants", body: "L-tryptophane : 500 mg le soir (précurseur sérotonine). L-théanine : 200 mg 1-2x/jour (active relaxation sans somnolence). GABA : 500-750 mg en cas d'anxiété aiguë. Taurine : 1-2 g/jour. Glycine : 3 g le soir pour anxiété d'endormissement." },
      { heading: "Plantes anxiolytiques", body: "Ashwagandha (KSM-66) : 600 mg/jour, le plus étudié, doux. Passiflore : 300-600 mg/jour. Mélisse : en tisane ou extrait. Valériane : pour anxiété aiguë et insomnie associée. Camomille romaine en infusion. Lavande olfactive." },
      { heading: "Oméga-3 et vitamine D", body: "Oméga-3 EPA particulièrement : 1000-2000 mg/jour (étude Sublette 2011 : EPA significativement actif sur dépression-anxiété). Vitamine D3 : 4000 UI/jour (carence fréquente chez anxieux). Probiotiques psychobiotiques (Lactobacillus rhamnosus JB-1) en cure." },
      { heading: "À éviter", body: "Café, thé noir, sodas caféinés (déclenchent anxiété). Sucres rapides (chute glycémique = anxiété rebound). Alcool (effet rebond anxiogène). Régime hypocalorique trop strict. Manque de sommeil. Privilégier : repas réguliers, glucides complexes, protéines régulières." },
    ],
    ['anxiété', 'GABA', 'magnésium']
  ),
  a('complements-sommeil',
    "Compléments pour le sommeil",
    "Mélatonine, magnésium, glycine, plantes. Protocole personnalisé selon le type d'insomnie.",
    "Le bon complément dépend du type d'insomnie : endormissement, milieu de nuit, petit matin. Voici un protocole différencié, basé sur les molécules les mieux documentées.",
    [
      { heading: "Endormissement difficile", body: "Magnésium glycérophosphate 400 mg au dîner. Glycine 3 g 30 min avant le coucher. Mélatonine à libération immédiate 1 mg, 30 min avant coucher (en cure courte de 2-3 semaines). Passiflore 600 mg ou Valériane 400 mg le soir. Tisane mélisse + camomille." },
      { heading: "Réveils nocturnes 1h-3h", body: "En médecine chinoise : foie. Soutien hépatique : chardon-marie 300 mg matin et soir, desmodium 5 ml. Alléger fortement le dîner. Compresse chaude foie 30 min avant coucher. Méditation contemplative." },
      { heading: "Réveils petit matin 3h-5h", body: "Souvent cortisol bas + tristesse. Vitamine D3 (carence fréquente). Adaptogènes EN JOURNÉE (ashwagandha midi). 5-HTP 100-200 mg le soir. Mélatonine à libération prolongée 2 mg. Travail psychologique si deuil/dépression." },
      { heading: "Sommeil léger non réparateur", body: "Magnésium glycérophosphate 600 mg/jour. Glycine 3 g + L-théanine 200 mg le soir. Vitamine B6 P5P. Évaluation apnée du sommeil si ronflements + somnolence diurne. Diminuer alcool + écrans + lumière nocturne." },
      { heading: "Précautions mélatonine", body: "Pas chez l'enfant sauf prescription. Diabète : risque hypoglycémie (avis médical). Sous immunosuppresseurs : à éviter. Maladie auto-immune : controverse. Dépression : peut aggraver. Cures courtes de préférence." },
    ],
    ['sommeil', 'mélatonine', 'insomnie']
  ),
  a('complements-immunite',
    "Compléments pour booster l'immunité",
    "Vitamine D, C, zinc, sureau, échinacée. Protocole hivernal et cure d'urgence aux premiers symptômes.",
    "L'immunité repose sur un état nutritionnel optimal. Cure de fond (octobre-mars) + interventions ciblées dès les premiers symptômes : c'est la stratégie nutrithérapique de l'hiver.",
    [
      { heading: "Cure de fond hivernale (octobre-mars)", body: "Vitamine D3 4000 UI le soir avec repas + K2 100 µg. Vitamine C 500 mg 2x/jour (immunité phagocytaire). Zinc citrate 15-25 mg/jour, à distance des repas. Sélénium 100 µg/jour (en cure de 2 mois). Probiotiques 30 milliards UFC/jour. Champignons (shiitake, maïtake) à l'alimentation 2x/semaine ou en extrait." },
      { heading: "Premiers symptômes (frissons, mal de gorge)", body: "Vitamine C : monter à 3 g/jour répartis. Zinc : 30 mg/jour pendant 5-7 jours. Echinacée : 1 gélule 3x/jour OU 60 gouttes 4x/jour. Propolis : pastilles à sucer toutes les 2h. Sureau noir (sirop) : 1 cuillère à soupe 3x/jour. Huile essentielle ravintsara : 1 goutte sur poignets, à respirer." },
      { heading: "Soutien des muqueuses", body: "L-glutamine 5 g/jour (barrière intestinale = immunité). Vitamine A (bêta-carotène 5-10 mg/jour). Lysine (anti-herpétique). Sirop de plantain (toux). Gargarisme propolis + thym + miel pour la gorge." },
      { heading: "À éviter en période d'infection", body: "Sucres rapides (paralysent les phagocytes pendant 6h après consommation). Alcool. Aliments transformés. Privilégier soupes claires, tisanes, fruits frais, miel cru, jus de citron, ail cru, gingembre." },
    ],
    ['immunité', 'vitamine D', 'zinc']
  ),
  a('complements-articulations',
    "Compléments pour les articulations",
    "Glucosamine, chondroïtine, curcuma, MSM, collagène. Protocole arthrose et arthrite.",
    "Arthrose et inflammation articulaire chronique nécessitent une approche combinée : reconstruction du cartilage + anti-inflammatoire + soutien des tissus conjonctifs. Effets visibles en 8-12 semaines de cure rigoureuse.",
    [
      { heading: "Reconstruction du cartilage", body: "Glucosamine sulfate (forme cristalline) : 1500 mg/jour, en 1-2 prises. Chondroïtine sulfate : 1200 mg/jour. Le duo glucosamine + chondroïtine fait l'objet d'études favorables (GAIT 2008, Hochberg 2015) — efficacité comparable au célécoxib sur arthrose modérée à sévère, sans effets secondaires." },
      { heading: "Anti-inflammatoires naturels", body: "Curcumine standardisée (95% curcuminoïdes) + pipérine : 1000-1500 mg/jour. Boswellia (acide boswellique) : 300-500 mg 3x/jour. Harpagophytum (griffe du diable) : 2000 mg/jour. Oméga-3 EPA/DHA : 2000 mg/jour. MSM (méthylsulfonylméthane) : 1500-3000 mg/jour." },
      { heading: "Soutien des tissus conjonctifs", body: "Collagène hydrolysé marin : 10 g/jour, dans café ou eau, le matin. Acide hyaluronique : 80-150 mg/jour. Silicium organique (G5) : 5-10 mg/jour. Vitamine C 1000 mg/jour (cofacteur du collagène). Manganèse 5-10 mg/jour." },
      { heading: "Soutien anti-âge cellulaire", body: "Vitamine D3 4000 UI/jour. K2 100 µg/jour. Magnésium 400 mg/jour. Cure de 6 mois minimum pour arthrose installée. Effets visibles à partir de 8-12 semaines. Combiner avec activité physique adaptée (marche, vélo, natation), gestion du poids, alimentation anti-inflammatoire." },
    ],
    ['arthrose', 'glucosamine', 'curcuma']
  ),
  a('complements-thyroide',
    "Compléments pour la thyroïde",
    "Iode, sélénium, zinc, tyrosine. Protocole pour hypothyroïdie infraclinique et Hashimoto.",
    "La thyroïde a besoin de nutriments précis pour produire ses hormones. Une hypothyroïdie infraclinique répond souvent à un protocole nutrithérapique ciblé, particulièrement si on a éliminé les facteurs entravants (gluten, métaux lourds, stress chronique).",
    [
      { heading: "Bilan préalable obligatoire", body: "TSH (cible < 2,5 mUI/L pour fonction optimale). T3 libre (cible 4-6 pg/mL). T4 libre (cible 12-15 pg/mL). Anticorps anti-TPO et anti-Tg. Iodurie de 24h. Ferritine. Vitamine D 25-OH. Avant tout protocole." },
      { heading: "Si Hashimoto (anticorps positifs)", body: "Sélénium (sélénométhionine) 100-200 µg/jour : RÉDUIT les anticorps anti-TPO (étude Gärtner 2002). Vitamine D3 5000 UI/jour (carence fréquente, immunomodulation). Zinc 20-30 mg/jour. Éviction GLUTEN stricte (mimétisme moléculaire avec thyroïde). Probiotiques. Pas d'iode haute dose initialement (peut aggraver auto-immunité)." },
      { heading: "Si hypothyroïdie sans auto-immunité", body: "Iode (selon iodurie) : 150-300 µg/jour, en augmentant progressivement. Algues 2-3x/semaine. Sélénium 100 µg/jour. Zinc 15-25 mg. L-tyrosine 500-1000 mg/jour le matin (précurseur T3/T4). Vitamine D, fer si carence." },
      { heading: "Soutien général", body: "Magnésium 400 mg/jour. Complexe B actif. Oméga-3 1000 mg/jour. Adaptogènes anti-stress (ashwagandha 600 mg/jour soutient la conversion T4→T3). Probiotiques. Réduction du stress chronique. Sommeil avant 23h. Sport modéré quotidien." },
    ],
    ['thyroïde', 'hashimoto', 'iode']
  ),
  a('complements-peau',
    "Compléments pour la peau",
    "Collagène, acide hyaluronique, omégas, antioxydants. Cure beauté validée scientifiquement.",
    "Une peau saine reflète l'état nutritionnel intérieur. Les compléments 'beauté' efficaces sont ceux qui apportent au corps les briques pour reconstruire collagène, élastine, et le protéger du stress oxydatif. Effets visibles en 8-12 semaines de cure.",
    [
      { heading: "Collagène : le pilier", body: "Collagène marin hydrolysé : 10 g/jour, en poudre dans café, eau ou smoothie le matin. Études (Proksch 2014, Choi 2019) : amélioration mesurable de l'hydratation cutanée, de l'élasticité, des rides après 8-12 semaines. Choisir collagène marin (peptides type I, mieux absorbé) plutôt que bovin. Avec vitamine C (cofacteur synthèse)." },
      { heading: "Acide hyaluronique oral", body: "Acide hyaluronique 80-150 mg/jour. Études japonaises montrent une amélioration de l'hydratation cutanée dès 6 semaines. Cures de 3 mois. Compatible avec injections esthétiques pour effet potentialisé." },
      { heading: "Antioxydants cutanés", body: "Astaxanthine : 6-12 mg/jour (photoprotection, anti-rides). Vitamine C liposomale : 500-1000 mg/jour. Vitamine E naturelle : 15-30 mg/jour. Bêta-carotène + lycopène (mélange caroténoïdes) : effet photo-protecteur. Resvératrol : 200 mg/jour. Glutathion (NAC + glycine + cystéine)." },
      { heading: "Acides gras essentiels", body: "Oméga-3 EPA/DHA : 1000-2000 mg/jour (anti-inflammatoire cutané, eczéma, acné). Huile d'onagre 1000-3000 mg/jour (GLA, peau sèche, syndrome prémenstruel cutané). Huile de bourrache. Vitamine A (bêta-carotène 5-10 mg/jour)." },
      { heading: "Micronutriments spécifiques", body: "Zinc 15-25 mg/jour (acné, cicatrisation). Sélénium 100 µg/jour. Silicium organique 5-10 mg/jour (fermeté). Vitamine D3 4000 UI/jour. Cure de 3-6 mois pour effets profonds. Photoprotection externe maintenue." },
    ],
    ['peau', 'collagène', 'beauté']
  ),
  a('complements-sport',
    "Compléments pour le sportif",
    "Protéines, BCAA, créatine, électrolytes. Selon discipline et intensité.",
    "Le sportif a des besoins nutritionnels accrus. Mal couverts, ils limitent la performance, ralentissent la récupération, augmentent les blessures. Un protocole adapté multiplie les bénéfices de l'entraînement.",
    [
      { heading: "Bases nutritionnelles", body: "Magnésium glycérophosphate 400-600 mg/jour (crampes, contractions). Vitamine D3 5000 UI/jour (force musculaire). Oméga-3 2000 mg/jour (récupération, anti-inflammation). Complexe B (métabolisme énergétique). Vitamine C 1000 mg/jour (récupération oxydative). Probiotiques (immunité du sportif intensif)." },
      { heading: "Protéines et acides aminés", body: "Protéines whey ou végétales : 25-40 g post-entraînement. Cible journalière : 1,6-2 g protéines/kg de poids pour le pratiquant régulier de musculation. BCAA (leucine, isoleucine, valine) : 5-10 g pendant l'effort long. Glutamine 5-10 g/jour (récupération, immunité)." },
      { heading: "Performance et récupération", body: "Créatine monohydrate : 3-5 g/jour (force, puissance, masse musculaire). Bêta-alanine : 3-5 g/jour (endurance musculaire). Citrulline malate : 6-8 g avant entraînement (NO, endurance). Cordyceps 1-3 g/jour (capacité respiratoire, endurance). Astaxanthine 6-12 mg/jour (endurance, récupération)." },
      { heading: "Hydratation et électrolytes", body: "Sodium 1-2 g/L de boisson pendant effort long (> 90 min). Potassium 200-300 mg/L. Magnésium 80-100 mg/L. Bicarbonates (eau St-Yorre) pour effort intense. Glucides : maltodextrine 60-90 g/h pour endurance longue." },
      { heading: "Récupération post-effort", body: "Repas de récupération dans les 30 min : protéines + glucides ratio 1:3 ou 1:4. Curcumine 1500 mg (anti-inflammatoire). Tart cherry juice (anthocyanes, récupération). Sommeil de qualité (clé absolue). Bains alternés chaud-froid. Massage." },
    ],
    ['sport', 'protéines', 'créatine']
  ),
  a('complements-cognition',
    "Compléments pour la cognition",
    "Mémoire, concentration, prévention déclin cognitif. Oméga-3, ginkgo, phosphatidylsérine, lion's mane.",
    "Le cerveau est un organe extraordinairement gourmand : 20% des besoins énergétiques pour 2% du poids corporel. Ses besoins en oméga-3, vitamines B, antioxydants sont énormes. Un protocole de soutien cognitif transforme concentration, mémoire, créativité — à tout âge.",
    [
      { heading: "Acides gras essentiels", body: "Oméga-3 DHA particulièrement : 1000-2000 mg/jour (DHA est le constituant majeur des membranes neuronales). Huile de krill : phospholipides oméga-3 (absorption cérébrale supérieure). Acide arachidonique modéré : nécessaire mais souvent en excès dans alimentation moderne." },
      { heading: "Vitamines B actives", body: "Complexe B actif : B6 P5P + B9 méthylfolate + B12 méthylcobalamine. Essentiel pour la synthèse des neurotransmetteurs et la méthylation. Carences fréquentes (vegan, > 60 ans, sous IPP) = déclin cognitif accéléré. Bilan + supplémentation justifiée." },
      { heading: "Plantes neuroprotectrices", body: "Ginkgo biloba (EGb 761) : 240 mg/jour, microcirculation cérébrale, mémoire (étude GuidAge négative en prévention démence mais effets sur cognition aiguë). Bacopa monnieri : 300-600 mg/jour, mémoire et apprentissage. Curcumine : neuroprotectrice, anti-inflammation cérébrale. Lion's mane (Hericium erinaceus) : neurogénèse, NGF (Nerve Growth Factor), 1-3 g/jour." },
      { heading: "Phospholipides et précurseurs", body: "Phosphatidylsérine : 100-300 mg/jour (mémoire, cortisol). Phosphatidylcholine ou citicoline : 250-500 mg/jour (précurseur acétylcholine, mémoire). Acétyl-L-carnitine : 1000-2000 mg/jour le matin (énergie cérébrale, neuroprotection)." },
      { heading: "Autres synergies", body: "Magnésium L-thréonate : forme qui traverse mieux la barrière hémato-encéphalique. Vitamine D3 4000 UI/jour. Antioxydants (astaxanthine, glutathion). Caféine + L-théanine 100/200 mg (combinaison vigilance + calme, effet boost cognitif). Réduction du sucre raffiné (inflammation cérébrale)." },
    ],
    ['cognition', 'mémoire', 'cerveau']
  ),
  a('complements-cardio',
    "Compléments cardiovasculaires",
    "CoQ10, oméga-3, vit K2, magnésium. Protocole de prévention et accompagnement.",
    "Le système cardiovasculaire bénéficie largement d'une supplémentation nutritionnelle bien menée. Particulièrement chez les > 50 ans, en pré-hypertension, en surpoids, ou avec antécédents familiaux. Effets démontrés sur lipides, tension, fonction endothéliale.",
    [
      { heading: "Le quatuor essentiel après 50 ans", body: "Coenzyme Q10 (ubiquinol) : 100-300 mg/jour (énergie cardiaque, OBLIGATOIRE sous statines). Oméga-3 EPA/DHA : 1000-2000 mg/jour (réduit risque mort subite, anti-inflammatoire vasculaire). Magnésium glycérophosphate : 400-600 mg/jour (tension, contractions). Vitamine K2 MK-7 : 100-200 µg/jour (oriente Ca vers os, hors artères)." },
      { heading: "Anti-inflammatoires vasculaires", body: "Curcumine + pipérine : 1000-1500 mg/jour. Resvératrol : 200 mg/jour. Quercétine : 500-1000 mg/jour. Vitamine D3 4000 UI/jour. Réduction inflammation = réduction du risque cardiovasculaire (CRP < 1)." },
      { heading: "Hypertension naturelle", body: "Ail vieilli (extrait Kyolic) : 1200 mg/jour. Aubépine : 600-900 mg/jour. Olivier (feuille) : 500-1000 mg/jour. L-citrulline 6 g/jour (NO, vasodilatation). Magnésium 600 mg/jour. K2. Réduction sodium et augmentation potassium (5000 mg/jour)." },
      { heading: "Lipides", body: "Levure rouge de riz (monacoline K) : 5-10 mg/jour (proche statine douce — mais : avec CoQ10 et avis médical). Berbérine 1500 mg/jour (LDL et glycémie). Phytostérols 2 g/jour. Bergamote : 500-1000 mg/jour. Oméga-3 (triglycérides)." },
    ],
    ['cardio', 'CoQ10', 'tension']
  ),
];
