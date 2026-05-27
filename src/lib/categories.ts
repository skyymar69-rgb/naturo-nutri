import type { Category } from './types';

export const CATEGORIES: Category[] = [
  // Naturopathie
  { slug: 'jeunes', domain: 'naturopathie', nom: 'Jeûnes', description: "Les différentes formes de jeûne : hydrique, intermittent, aux jus, sec. Protocoles complets, bénéfices et contre-indications.", icon: '💧', order: 1 },
  { slug: 'purges', domain: 'naturopathie', nom: 'Purges & drainages', description: "Méthodes de drainage des émonctoires (foie, reins, intestins, peau, poumons) : huile de ricin, lavements, drainages hépato-biliaires.", icon: '🌊', order: 2 },
  { slug: 'plantes', domain: 'naturopathie', nom: 'Plantes médicinales', description: "Encyclopédie des plantes médicinales : usages, préparations, dosages, contre-indications. De l'absinthe à la valériane.", icon: '🌱', order: 3 },
  { slug: 'alimentation', domain: 'naturopathie', nom: 'Alimentation', description: "Alimentation vivante, crudivorisme, mono-diètes, associations alimentaires, lacto-fermentations, graines germées.", icon: '🥗', order: 4 },
  { slug: 'cures-saisonnieres', domain: 'naturopathie', nom: 'Cures saisonnières', description: "Les cures rythmées par les saisons : printemps détox foie, été drainage, automne reminéralisation, hiver immunité.", icon: '🍂', order: 5 },
  { slug: 'hydrotherapie', domain: 'naturopathie', nom: 'Hydrothérapie', description: "L'eau comme thérapeute : douches écossaises, bains dérivatifs, bains chauds, hammam, thalassothérapie.", icon: '💦', order: 6 },
  { slug: 'aromatherapie', domain: 'naturopathie', nom: 'Aromathérapie', description: "Huiles essentielles : propriétés thérapeutiques, modes d'utilisation (cutané, olfactif, oral), précautions.", icon: '🌸', order: 7 },
  { slug: 'respiration-sommeil', domain: 'naturopathie', nom: 'Respiration & sommeil', description: "Techniques de respiration consciente, cohérence cardiaque, hygiène du sommeil, chronobiologie.", icon: '🌙', order: 8 },
  { slug: 'stress-emotions', domain: 'naturopathie', nom: 'Stress & émotions', description: "Gestion du stress par voie naturelle : méditation, yoga, fleurs de Bach, gestion des émotions.", icon: '🧘', order: 9 },
  { slug: 'temperaments', domain: 'naturopathie', nom: 'Les 4 tempéraments', description: "La typologie hippocratique : sanguin, bilieux, nerveux, lymphatique. Quiz et profils détaillés.", icon: '⚖️', order: 10 },

  // Nutrithérapie
  { slug: 'vitamines', domain: 'nutritherapie', nom: 'Vitamines', description: "Les 13 vitamines essentielles : rôles, formes biodisponibles, dosages optimaux, signes de carence, sources alimentaires.", icon: '☀️', order: 1 },
  { slug: 'mineraux', domain: 'nutritherapie', nom: 'Minéraux', description: "Magnésium, zinc, fer, calcium, iode, sélénium, chrome... Tous les minéraux essentiels avec leurs spécificités.", icon: '💎', order: 2 },
  { slug: 'acides-gras', domain: 'nutritherapie', nom: 'Acides gras', description: "Oméga-3 (EPA, DHA, ALA), oméga-6, oméga-9. Ratios, sources, qualité, oxydation, antioxydants associés.", icon: '🐟', order: 3 },
  { slug: 'acides-amines', domain: 'nutritherapie', nom: 'Acides aminés', description: "Acides aminés essentiels et conditionnellement essentiels : tryptophane, tyrosine, glutamine, lysine, taurine...", icon: '🧬', order: 4 },
  { slug: 'antioxydants', domain: 'nutritherapie', nom: 'Antioxydants', description: "Glutathion, CoQ10, resvératrol, polyphénols, caroténoïdes : les défenses contre le stress oxydatif.", icon: '🍇', order: 5 },
  { slug: 'probiotiques', domain: 'nutritherapie', nom: 'Probiotiques & microbiote', description: "Le microbiote intestinal : probiotiques, prébiotiques, postbiotiques, dysbiose, perméabilité intestinale.", icon: '🦠', order: 6 },
  { slug: 'adaptogenes', domain: 'nutritherapie', nom: 'Adaptogènes', description: "Ashwagandha, rhodiole, ginseng, éleuthérocoque, basilic sacré : les plantes qui aident à s'adapter au stress.", icon: '🌿', order: 7 },
  { slug: 'objectifs', domain: 'nutritherapie', nom: 'Compléments par objectif', description: "Protocoles complets par objectif santé : fatigue, anxiété, sommeil, immunité, sport, peau, articulations, thyroïde, cognition.", icon: '🎯', order: 8 },
  { slug: 'principes', domain: 'nutritherapie', nom: 'Principes de qualité', description: "Comment choisir un complément alimentaire : critères de qualité, formes biodisponibles, écueils à éviter.", icon: '✅', order: 9 },
];

export const NATURO_CATEGORIES = CATEGORIES.filter((c) => c.domain === 'naturopathie').sort((a, b) => a.order - b.order);
export const NUTRI_CATEGORIES = CATEGORIES.filter((c) => c.domain === 'nutritherapie').sort((a, b) => a.order - b.order);

export function getCategory(domain: string, slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.domain === domain && c.slug === slug);
}
