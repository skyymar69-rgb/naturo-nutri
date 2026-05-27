import type { Article } from '../types';

const a = (slug: string, title: string, excerpt: string, intro: string, sections: { heading: string; body: string }[], tags: string[]): Article => ({
  slug, domain: 'nutritherapie', category: 'antioxydants', title, excerpt, readingTime: 4, intro, sections, tags,
});

export const NUTRI_ANTIOXYDANTS: Article[] = [
  a('glutathion',
    "Glutathion : l'antioxydant maître",
    "GSH, le plus puissant antioxydant intracellulaire. Liposomal, NAC, glycine : comment vraiment l'augmenter.",
    "Le glutathion (GSH) est considéré comme le maître antioxydant : il neutralise les radicaux libres, régénère les vitamines C et E, soutient la détoxification hépatique phase II, module l'immunité. Son taux diminue avec l'âge, le stress, les pollutions. Mais le supplémenter directement est inefficace (digéré) — il faut optimiser sa synthèse interne.",
    [
      { heading: "Pourquoi le supplément classique ne marche pas", body: "Le glutathion oral classique est digéré dans l'estomac : très peu atteint la cellule. Solutions efficaces : Glutathion liposomal (encapsulé dans liposomes, atteint les cellules). NAC (N-acétylcystéine) : précurseur direct, le plus efficace. Synergie cystéine + glycine + glutamate (les 3 acides aminés constitutifs). S-acétyl-glutathion (forme stable orale)." },
      { heading: "Le pivot : la NAC", body: "N-acétylcystéine (NAC) : 600 à 1800 mg/jour. Précurseur de la cystéine, acide aminé limitant pour la synthèse du glutathion. Le plus simple et le moins cher. Utilisée en médecine d'urgence (intoxication paracétamol) — efficacité avérée pour booster le glutathion hépatique. Cure de 1-3 mois." },
      { heading: "Indications", body: "Détoxification hépatique. Métaux lourds. Stéatose hépatique. Maladies inflammatoires. Soutien immunitaire viral. Anti-âge cellulaire. Sport intense (récupération oxydative). Préparation/accompagnement chimiothérapie (sous avis oncologique)." },
      { heading: "Synergies avec autres antioxydants", body: "Vitamine C : régénère le glutathion oxydé. Sélénium : cofacteur de la glutathion peroxydase. Vitamine E : antioxydant membranaire complémentaire. Curcuma : augmente la synthèse via Nrf2. Sulforaphane (brocoli germé) : booster majeur de la voie Nrf2." },
    ],
    ['glutathion', 'NAC', 'antioxydant']
  ),
  a('coenzyme-q10-detail',
    "CoQ10 (ubiquinol) : énergie mitochondriale",
    "Cofacteur de la chaîne respiratoire. Indispensable après 40 ans et sous statines. Ubiquinol > ubiquinone.",
    "La Coenzyme Q10 est l'élément essentiel de la chaîne respiratoire mitochondriale : sans elle, les mitochondries ne peuvent produire d'ATP. Sa synthèse endogène diminue avec l'âge et est bloquée par les statines. Sa supplémentation est devenue incontournable après 40-50 ans, en cas de fatigue chronique, ou sous statines.",
    [
      { heading: "Ubiquinol vs ubiquinone", body: "Ubiquinone : forme oxydée, la plus courante en supplémentation classique. Doit être réduite par l'organisme — capacité diminuée avec l'âge. Ubiquinol : forme réduite, directement utilisable, 4x plus biodisponible après 50 ans. Plus chère mais nettement plus efficace pour les seniors." },
      { heading: "Indications", body: "Fatigue chronique inexpliquée. Insuffisance cardiaque (en complément). Sous statines (obligation morale : les statines bloquent la synthèse endogène de CoQ10 — supplémenter systématiquement). Migraine. Maladie de Parkinson (en complément). Diabète de type 2 (sensibilité insuline). Sport intense. Anti-âge (mitochondrial)." },
      { heading: "Dosages", body: "Maintenance après 40 ans : 100-200 mg/jour. Cure thérapeutique : 200-400 mg/jour. Sous statines : minimum 200 mg/jour. Forme : ubiquinol pour les > 50 ans. Toujours avec un repas (liposoluble — graisses nécessaires pour absorption). Effets visibles à partir de 2-3 semaines." },
      { heading: "Sources alimentaires", body: "Cœur de bœuf (top source). Foie. Poissons gras (sardine, maquereau). Huile de soja, colza (modeste). Cacahuètes. La synthèse endogène hépatique est la principale source, mais diminue avec l'âge et sous statines." },
    ],
    ['CoQ10', 'ubiquinol', 'mitochondries']
  ),
  a('resveratrol',
    "Resvératrol : la molécule du vin rouge",
    "Polyphénol activateur des sirtuines. Anti-âge, cardio-protecteur. Trans-resvératrol micronisé pour absorption.",
    "Le resvératrol, polyphénol du raisin (peau) et de la renouée du Japon, a connu un essor médiatique dans les années 2000 pour ses effets sur les sirtuines (enzymes de longévité). Au-delà du buzz, les études confirment des effets cardiovasculaires et métaboliques réels, à condition de bien choisir la forme.",
    [
      { heading: "Mécanismes d'action", body: "Activation des sirtuines (SIRT1 notamment) : enzymes de régulation du métabolisme et de l'inflammation, impliquées dans la longévité. Antioxydant. Anti-inflammatoire. Module la voie AMPK (similaire au jeûne). Effet hormétique (légère stress oxydatif qui active les défenses)." },
      { heading: "Indications", body: "Anti-âge cellulaire. Soutien cardiovasculaire (LDL oxydé, athérosclérose). Pré-diabète, syndrome métabolique. Inflammation chronique. Soutien cognitif. En préparation et après chimiothérapie (synergie possible, sous avis)." },
      { heading: "Forme et dosage", body: "Trans-resvératrol (forme active, à distinguer du cis-resvératrol). Idéalement micronisé ou liposomal (biodisponibilité multipliée). Dosage : 150 à 500 mg/jour, en cure de 3 mois. Avec graisses (liposoluble). Boire un verre de vin rouge = 1-3 mg de resvératrol seulement — supplémentation justifiée pour effet thérapeutique." },
      { heading: "Précautions", body: "Anticoagulants : potentialisation (avis médical). Avant chirurgie : arrêt 7 jours. Cancer hormono-dépendant : controverse (effet phytoestrogène léger). Hépatite active : prudence. Plutôt en cures qu'en continu sur des années." },
    ],
    ['resvératrol', 'sirtuines', 'anti-âge']
  ),
  a('astaxanthine',
    "Astaxanthine : le caroténoïde le plus puissant",
    "Antioxydant 500x plus puissant que la vit E. Yeux, peau, sport, inflammation. Issue des microalgues.",
    "L'astaxanthine est un caroténoïde rouge produit par certaines microalgues (Haematococcus pluvialis), qui colore les flamants roses et les saumons. C'est l'antioxydant le plus puissant connu : 500 fois plus que la vitamine E, 10 fois plus que les autres caroténoïdes. Excellent pour la peau, les yeux, l'inflammation, le sport.",
    [
      { heading: "Pourquoi si puissante", body: "Structure moléculaire unique : extrémités hydrophiles + corps lipophile = capacité à se loger dans les membranes ET dans le cytosol. Traverse les barrières (hémato-encéphalique, rétinienne). Ne devient JAMAIS pro-oxydante (contrairement à d'autres antioxydants à forte dose). Effet anti-inflammatoire majeur." },
      { heading: "Indications", body: "Vieillissement cutané (photoprotection, rides). Fatigue oculaire (écran, presbytie). DMLA. Cataracte (prévention). Sport intense (récupération, endurance). Inflammation chronique. Stress oxydatif post-radiothérapie. Cardio-protection (LDL oxydé)." },
      { heading: "Dosages", body: "4 à 12 mg/jour avec un repas (liposoluble). Cure de 2-3 mois minimum. Forme : extrait de Haematococcus pluvialis (la seule source naturelle d'astaxanthine commercialisée). Effets cutanés visibles à 8-12 semaines. Sécurité : très large fenêtre, pas de toxicité connue." },
      { heading: "Synergies", body: "Astaxanthine + vit E : protection lipidique majeure. Astaxanthine + lutéine + zéaxanthine : protection oculaire complète. Astaxanthine + acide alpha-lipoïque + CoQ10 : protocole anti-âge cellulaire." },
    ],
    ['astaxanthine', 'caroténoïde', 'peau']
  ),
  a('acide-alpha-lipoique',
    "Acide alpha-lipoïque (ALA) : antioxydant universel",
    "Hydrosoluble ET liposoluble. Détoxification métaux lourds. Diabète, neuropathies. R-ALA > S-ALA.",
    "L'acide alpha-lipoïque (ALA) est unique : c'est le seul antioxydant à la fois hydrosoluble ET liposoluble. Il agit donc partout. Cofacteur du métabolisme énergétique, il chélate les métaux lourds, régénère les autres antioxydants (vit C, E, glutathion), et améliore la sensibilité à l'insuline.",
    [
      { heading: "R-ALA vs S-ALA", body: "L'ALA synthétique est un mélange racémique 50/50 R-ALA + S-ALA. Mais seul le R-ALA est la forme naturelle, biologiquement active. Le S-ALA peut même bloquer les transporteurs. Préférer R-ALA pur (plus cher mais plus efficace). À défaut, ALA racémique en dosage supérieur." },
      { heading: "Indications", body: "Diabète, pré-diabète, résistance à l'insuline. Neuropathies diabétiques (efficacité clinique démontrée). Détoxification métaux lourds (mercure, arsenic). Hépatite chronique (en complément). Sclérose en plaques (effet neuroprotecteur). Vieillissement mitochondrial. Stéatose hépatique." },
      { heading: "Dosages", body: "Forme R-ALA : 100-300 mg/jour. Forme racémique : 300-600 mg/jour, en 2 prises. À distance des repas (l'absorption est meilleure à jeun). Cure de 2-3 mois. Précautions : hypoglycémie sous traitement (potentialisation insuline), allergie au soufre (rare), insuffisance hépatique sévère." },
    ],
    ['ALA', 'lipoïque', 'diabète']
  ),
  a('quercetine',
    "Quercétine : anti-allergique naturelle",
    "Polyphénol stabilisateur des mastocytes. Allergies saisonnières, asthme léger, inflammation.",
    "La quercétine est un flavonoïde abondamment présent dans l'oignon, la pomme, les baies. Elle stabilise les mastocytes (cellules immunitaires libérant l'histamine), ce qui en fait un anti-allergique naturel puissant. Aussi anti-inflammatoire, anti-virale, et soutien immunitaire.",
    [
      { heading: "Indications principales", body: "Allergies saisonnières (rhume des foins, pollen). Asthme allergique léger (en complément). Urticaire. Eczéma. Inflammation chronique. Prévention virale hivernale. Soutien cardiovasculaire (LDL oxydé). Récupération sportive." },
      { heading: "Forme et dosage", body: "Quercétine dihydratée standard ou Quercetin Phytosome (lié à la lécithine, biodisponibilité x20). 500 à 1500 mg/jour, en 2-3 prises. Cure de 2-3 mois en prévention allergique, à démarrer 1 mois avant la saison. Synergies : vitamine C, bromélaïne (multiplie l'effet anti-allergique). Précautions : hypothyroïdie (peut interférer)." },
      { heading: "Sources alimentaires", body: "Oignon rouge (top source). Pomme avec peau. Câpres. Cassis, baies. Brocoli. Thé vert. Cacao. Vin rouge (modéré). Une alimentation riche apporte 25-50 mg/jour — supplémentation justifiée pour effet thérapeutique." },
    ],
    ['quercétine', 'allergie', 'histamine']
  ),
  a('polyphenols-fruits-rouges',
    "Anthocyanes : polyphénols des fruits rouges",
    "Cassis, myrtille, mûre, açai, sureau. Antioxydants vasculaires, vision, mémoire. Préférer frais et entier.",
    "Les anthocyanes sont les pigments rouges-violets-bleus des fruits rouges et noirs. Au-delà de leur couleur, ce sont de puissants antioxydants ciblant la microcirculation, la rétine, le cerveau. Une consommation quotidienne de fruits rouges variés est l'une des stratégies anti-âge les plus simples et efficaces.",
    [
      { heading: "Les meilleures sources", body: "Cassis (top : 700 mg anthocyanes / 100g). Mûre. Myrtille sauvage. Aronia. Sureau noir. Açai (Amazonie). Cerise Montmorency. Grenade. Raisin noir avec peau. Préférer fruits frais entiers ; surgelés bons aussi. Jus pasteurisés : perte significative des anthocyanes. Confitures : trop sucrées." },
      { heading: "Bénéfices documentés", body: "Microcirculation rétinienne (vision nocturne, prévention DMLA). Microcirculation cérébrale (mémoire, prévention déclin cognitif — étude Cherubini sur myrtilles). Régulation tension artérielle. LDL oxydé diminué. Soutien lymphatique. Effet anti-cellulite." },
      { heading: "Dosages", body: "Consommation alimentaire : 1 portion de fruits rouges (150 g) par jour, idéalement de variétés différentes sur la semaine. Compléments : extrait de myrtille standardisé (25% anthocyanosides), 500-1000 mg/jour. Cure d'aronia : ~200 ml de jus/jour. Sureau noir en sirop pour soutien immunitaire viral." },
    ],
    ['anthocyanes', 'fruits rouges', 'vision']
  ),
];
