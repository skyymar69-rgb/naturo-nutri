'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Leaf, FlaskConical, Sparkles, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/Logo';
import { SearchDialog } from '@/components/SearchDialog';
import { MegaMenu, type MegaMenuColumn, type MegaMenuFeature } from '@/components/MegaMenu';

/* ------------------------------------------------------------------ */
/*  Données des mega-menus                                            */
/* ------------------------------------------------------------------ */

const NATURO_COLUMNS: MegaMenuColumn[] = [
  {
    title: 'Fondamentaux',
    links: [
      { label: "Vue d'ensemble",  href: '/naturopathie',                emoji: '🌳', description: 'La discipline en un coup d\'œil' },
      { label: 'Jeûnes & monodiètes', href: '/naturopathie/jeunes',      emoji: '💧', description: 'Hydrique, intermittent, sec' },
      { label: 'Purges & drainages',  href: '/naturopathie/purges',      emoji: '🌊', description: 'Émonctoires & détox' },
      { label: 'Alimentation vivante',href: '/naturopathie/alimentation',emoji: '🥗', description: 'Crudivorisme, lacto-ferments' },
    ],
  },
  {
    title: 'Techniques corps',
    links: [
      { label: 'Plantes médicinales', href: '/naturopathie/plantes',         emoji: '🌱', description: 'Encyclopédie phyto' },
      { label: 'Hydrothérapie',       href: '/naturopathie/hydrotherapie',   emoji: '💦', description: 'Eau chaude & froide' },
      { label: 'Aromathérapie',       href: '/naturopathie/aromatherapie',   emoji: '🌸', description: 'Huiles essentielles' },
      { label: 'Cures saisonnières',  href: '/naturopathie/cures-saisonnieres', emoji: '🍂', description: 'Rythmes annuels' },
    ],
  },
  {
    title: 'Esprit & terrain',
    links: [
      { label: 'Respiration & sommeil', href: '/naturopathie/respiration-sommeil', emoji: '🌙', description: 'Cohérence cardiaque' },
      { label: 'Stress & émotions',     href: '/naturopathie/stress-emotions',     emoji: '🧘', description: 'Fleurs de Bach, yoga' },
      { label: 'Les 4 tempéraments',    href: '/naturopathie/temperaments',        emoji: '⚖️', description: 'Typologie hippocratique' },
    ],
  },
];

const NATURO_FEATURE: MegaMenuFeature = {
  title: 'Découvrez votre tempérament',
  description: 'Sanguin, bilieux, nerveux ou lymphatique ? Un quiz de 20 questions pour identifier votre profil et l\'hygiène de vie qui vous correspond.',
  href: '/naturopathie/temperaments/quiz',
  cta: 'Faire le quiz',
  accent: 'forest',
};

const NUTRI_COLUMNS: MegaMenuColumn[] = [
  {
    title: 'Micronutriments',
    links: [
      { label: "Vue d'ensemble", href: '/nutritherapie',           emoji: '🧪', description: 'La discipline expliquée' },
      { label: 'Vitamines',      href: '/nutritherapie/vitamines',  emoji: '☀️', description: 'A, B, C, D, E, K…' },
      { label: 'Minéraux',       href: '/nutritherapie/mineraux',   emoji: '💎', description: 'Mg, Zn, Fe, Se, I…' },
      { label: 'Antioxydants',   href: '/nutritherapie/antioxydants', emoji: '🍇', description: 'Glutathion, CoQ10, polyphénols' },
    ],
  },
  {
    title: 'Macros & terrain',
    links: [
      { label: 'Acides gras',           href: '/nutritherapie/acides-gras',     emoji: '🐟', description: 'Oméga-3, ratios' },
      { label: 'Acides aminés',         href: '/nutritherapie/acides-amines',   emoji: '🧬', description: 'Tryptophane, glutamine…' },
      { label: 'Probiotiques & microbiote', href: '/nutritherapie/probiotiques', emoji: '🦠', description: 'Souches & flore' },
      { label: 'Adaptogènes',           href: '/nutritherapie/adaptogenes',     emoji: '🌿', description: 'Ashwagandha, rhodiole…' },
    ],
  },
  {
    title: 'Applications',
    links: [
      { label: 'Compléments par objectif', href: '/nutritherapie/objectifs', emoji: '🎯', description: 'Sommeil, énergie, immunité…' },
      { label: 'Principes de qualité',     href: '/nutritherapie/principes', emoji: '✅', description: '8 critères pour bien choisir' },
    ],
  },
];

const NUTRI_FEATURE: MegaMenuFeature = {
  title: 'Compléments par objectif santé',
  description: 'Protocoles synergiques détaillés : fatigue, anxiété, immunité, sport, cognition, peau, articulations.',
  href: '/nutritherapie/objectifs',
  cta: 'Explorer',
  accent: 'earth',
};

const PHYTO_COLUMNS: MegaMenuColumn[] = [
  {
    title: 'Plantes par usage',
    links: [
      { label: 'Toutes les plantes',   href: '/plantes',                    emoji: '🌿', description: 'Encyclopédie complète' },
      { label: 'Sommeil & nervosité',  href: '/plantes/sommeil',            emoji: '🌙' },
      { label: 'Stress & anxiété',     href: '/plantes/stress-anxiete',     emoji: '🧘' },
      { label: 'Digestion & foie',     href: '/plantes/digestion',          emoji: '🌱' },
      { label: 'Immunité & infections',href: '/plantes/immunite-infections', emoji: '🛡️' },
      { label: 'Circulation & cœur',   href: '/plantes/circulation',        emoji: '❤️' },
      { label: 'Respiration & ORL',    href: '/plantes/respiration',        emoji: '🍃' },
      { label: 'Sphère féminine',      href: '/plantes/feminin',            emoji: '🌸' },
    ],
  },
  {
    title: 'Jus thérapeutiques',
    links: [
      { label: 'Toutes les recettes',  href: '/jus',                     emoji: '🥤', description: 'Catalogue & saisons' },
      { label: 'Méthode Walker',       href: '/jus/walker-fondamentaux', emoji: '📘', description: 'Les associations clés' },
      { label: 'Drainage & dépuration',href: '/jus/detox',               emoji: '💧' },
      { label: 'Énergie & vitalité',   href: '/jus/energie',             emoji: '⚡' },
      { label: 'Immunité saisonnière', href: '/jus/immunite',            emoji: '🛡️' },
      { label: 'Digestion',            href: '/jus/digestion',           emoji: '🌿' },
      { label: 'Peau & cheveux',       href: '/jus/peau-cheveux',        emoji: '✨' },
      { label: 'Sport & récupération', href: '/jus/sport',               emoji: '💪' },
    ],
  },
];

const PHYTO_FEATURE: MegaMenuFeature = {
  title: 'Méthode Norman Walker',
  description: 'Les associations fondamentales documentées dans « Fresh Vegetable and Fruit Juices » (1936/1978), pionnier de l\'extraction thérapeutique.',
  href: '/jus/walker-fondamentaux',
  cta: 'Découvrir',
  accent: 'sage',
};

const OUTILS_COLUMNS: MegaMenuColumn[] = [
  {
    title: 'Outils interactifs',
    links: [
      { label: 'Par pathologie',     href: '/outils/par-pathologie',          emoji: '🩺', description: 'Trouver les contenus par symptôme' },
      { label: 'Quiz tempérament',   href: '/naturopathie/temperaments/quiz', emoji: '⚖️', description: 'Identifier votre profil' },
      { label: 'Recherche globale',  href: '/recherche',                      emoji: '🔍', description: 'Explorer tout le contenu' },
    ],
  },
  {
    title: 'Documentation',
    links: [
      { label: 'Actualités sourcées', href: '/actualites',     emoji: '📰', description: 'Études PubMed vulgarisées' },
      { label: 'Bibliographie',       href: '/bibliographie',  emoji: '📚', description: 'Walker, Curtay, Lagarde…' },
      { label: 'Notre démarche',      href: '/notre-demarche', emoji: '📋', description: 'Ligne éditoriale & sources' },
      { label: 'Tous les tags',       href: '/tags',           emoji: '🏷️', description: 'Index thématique' },
    ],
  },
];

const OUTILS_FEATURE: MegaMenuFeature = {
  title: 'Trouver l\'info par pathologie',
  description: 'Notre nouvel outil agrège articles, plantes, jus et actualités scientifiques pour chaque pathologie ou symptôme.',
  href: '/outils/par-pathologie',
  cta: 'Essayer',
  accent: 'forest',
};

/* ------------------------------------------------------------------ */
/*  Liens mobile aplatis (réutilisent les colonnes ci-dessus)         */
/* ------------------------------------------------------------------ */

const NATURO_FLAT = [
  { href: '/naturopathie',                     label: "Vue d'ensemble" },
  { href: '/naturopathie/jeunes',              label: 'Jeûnes & monodiètes' },
  { href: '/naturopathie/purges',              label: 'Purges & drainages' },
  { href: '/naturopathie/plantes',             label: 'Plantes médicinales' },
  { href: '/naturopathie/alimentation',        label: 'Alimentation vivante' },
  { href: '/naturopathie/cures-saisonnieres',  label: 'Cures saisonnières' },
  { href: '/naturopathie/hydrotherapie',       label: 'Hydrothérapie' },
  { href: '/naturopathie/aromatherapie',       label: 'Aromathérapie' },
  { href: '/naturopathie/respiration-sommeil', label: 'Respiration & sommeil' },
  { href: '/naturopathie/stress-emotions',     label: 'Stress & émotions' },
  { href: '/naturopathie/temperaments',        label: 'Les 4 tempéraments' },
];

const NUTRI_FLAT = [
  { href: '/nutritherapie',              label: "Vue d'ensemble" },
  { href: '/nutritherapie/vitamines',    label: 'Vitamines' },
  { href: '/nutritherapie/mineraux',     label: 'Minéraux' },
  { href: '/nutritherapie/acides-gras',  label: 'Acides gras' },
  { href: '/nutritherapie/acides-amines',label: 'Acides aminés' },
  { href: '/nutritherapie/antioxydants', label: 'Antioxydants' },
  { href: '/nutritherapie/probiotiques', label: 'Probiotiques' },
  { href: '/nutritherapie/adaptogenes',  label: 'Adaptogènes' },
  { href: '/nutritherapie/objectifs',    label: 'Par objectif' },
  { href: '/nutritherapie/principes',    label: 'Principes de qualité' },
];

const PHYTO_FLAT = [
  { href: '/plantes',                    label: 'Toutes les plantes' },
  { href: '/plantes/sommeil',            label: 'Sommeil & nervosité' },
  { href: '/plantes/stress-anxiete',     label: 'Stress & anxiété' },
  { href: '/plantes/digestion',          label: 'Digestion & foie' },
  { href: '/jus',                        label: 'Toutes les recettes' },
  { href: '/jus/walker-fondamentaux',    label: 'Méthode Walker' },
  { href: '/jus/detox',                  label: 'Drainage' },
  { href: '/jus/energie',                label: 'Énergie & vitalité' },
];

const OUTILS_FLAT = [
  { href: '/outils/par-pathologie',          label: 'Par pathologie' },
  { href: '/naturopathie/temperaments/quiz', label: 'Quiz tempérament' },
  { href: '/actualites',                     label: 'Actualités sourcées' },
  { href: '/bibliographie',                  label: 'Bibliographie' },
  { href: '/notre-demarche',                 label: 'Notre démarche' },
];

/* ------------------------------------------------------------------ */
/*  Composant principal                                               */
/* ------------------------------------------------------------------ */

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  // ESC ferme le menu mobile + lock body scroll
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  const toggleSection = (key: string) =>
    setOpenSection((prev) => (prev === key ? null : key));

  return (
    <>
      {/* ── Top info bar ── */}
      <div className="hidden sm:block bg-forest-800 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="text-forest-200 italic">
            Site à visée pédagogique — les informations ne remplacent pas un avis médical
          </span>
          <Link
            href="/naturopathie/temperaments/quiz"
            className="font-bold text-sage-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span aria-hidden="true">✦</span>
            Quiz tempérament gratuit
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* ── Main nav ── */}
      <header className="sticky top-0 z-50 bg-white/96 backdrop-blur-md border-b border-forest-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex h-[68px] items-center justify-between"
            aria-label="Navigation principale"
          >
            {/* Logo Nutriéa */}
            <Logo variant="compact" />

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-1" role="list">
              <MegaMenu
                label="Naturopathie"
                href="/naturopathie"
                icon={Leaf}
                accentClass="bg-forest-700"
                columns={NATURO_COLUMNS}
                feature={NATURO_FEATURE}
                width="xl"
              />
              <MegaMenu
                label="Nutrithérapie"
                href="/nutritherapie"
                icon={FlaskConical}
                accentClass="bg-earth-500"
                columns={NUTRI_COLUMNS}
                feature={NUTRI_FEATURE}
                width="xl"
              />
              <MegaMenu
                label="Plantes & Jus"
                href="/plantes"
                icon={Sparkles}
                accentClass="bg-sage-500"
                columns={PHYTO_COLUMNS}
                feature={PHYTO_FEATURE}
                width="xl"
              />
              <MegaMenu
                label="Outils"
                href="/outils/par-pathologie"
                icon={Wrench}
                accentClass="bg-forest-700"
                columns={OUTILS_COLUMNS}
                feature={OUTILS_FEATURE}
                width="lg"
              />
              <li>
                <Link
                  href="/actualites"
                  className="px-4 py-2 text-sm font-semibold text-forest-800 hover:text-forest-600 transition-colors rounded-full hover:bg-forest-50 inline-flex items-center gap-1.5"
                >
                  Actualités
                  <span className="text-[10px] font-bold bg-sage-100 text-sage-700 px-1.5 py-0.5 rounded">Sourcé</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="px-4 py-2 text-sm font-semibold text-forest-800 hover:text-forest-600 transition-colors rounded-full hover:bg-forest-50"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Desktop CTA + search */}
            <div className="hidden md:flex items-center gap-3">
              <SearchDialog />
              <Link
                href="/naturopathie/temperaments/quiz"
                className="inline-flex items-center gap-2 bg-sage-500 hover:bg-sage-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md"
              >
                Faire le quiz
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden grid h-9 w-9 place-items-center rounded-xl text-forest-800 hover:bg-forest-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {/* ── Mobile menu ── */}
          {mobileOpen && (
            <div id="mobile-menu" className="md:hidden pb-6 pt-2 border-t border-forest-100 max-h-[calc(100vh-68px)] overflow-y-auto">

              {/* Accordéon Naturopathie */}
              <MobileAccordion
                label="Naturopathie"
                icon={<Leaf className="h-4 w-4" />}
                open={openSection === 'naturo'}
                onToggle={() => toggleSection('naturo')}
                links={NATURO_FLAT}
                onLinkClick={() => setMobileOpen(false)}
              />

              {/* Accordéon Nutrithérapie */}
              <MobileAccordion
                label="Nutrithérapie"
                icon={<FlaskConical className="h-4 w-4" />}
                open={openSection === 'nutri'}
                onToggle={() => toggleSection('nutri')}
                links={NUTRI_FLAT}
                onLinkClick={() => setMobileOpen(false)}
              />

              {/* Accordéon Plantes & Jus */}
              <MobileAccordion
                label="Plantes & Jus"
                icon={<Sparkles className="h-4 w-4" />}
                open={openSection === 'phyto'}
                onToggle={() => toggleSection('phyto')}
                links={PHYTO_FLAT}
                onLinkClick={() => setMobileOpen(false)}
              />

              {/* Accordéon Outils */}
              <MobileAccordion
                label="Outils"
                icon={<Wrench className="h-4 w-4" />}
                open={openSection === 'outils'}
                onToggle={() => toggleSection('outils')}
                links={OUTILS_FLAT}
                onLinkClick={() => setMobileOpen(false)}
              />

              {/* Liens directs */}
              <div className="mt-3 px-4 space-y-1 border-t border-forest-100 pt-3">
                <Link href="/actualites" onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-forest-800 hover:bg-forest-50 rounded-xl">
                  Actualités
                  <span className="text-[10px] font-bold bg-sage-100 text-sage-700 px-1.5 py-0.5 rounded">Sourcé</span>
                </Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm font-semibold text-forest-800 hover:bg-forest-50 rounded-xl">
                  Contact
                </Link>
              </div>

              {/* CTA mobile */}
              <div className="mt-4 px-4 space-y-2">
                <Link href="/naturopathie/temperaments/quiz" onClick={() => setMobileOpen(false)}
                  className="w-full flex justify-center bg-sage-500 hover:bg-sage-600 text-white font-bold text-sm py-3 rounded-full transition-all">
                  Faire le quiz tempérament
                </Link>
                <Link href="/notre-demarche" onClick={() => setMobileOpen(false)}
                  className="block text-center text-xs text-forest-600 hover:text-forest-900 py-2">
                  Notre démarche éditoriale
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Composant interne : accordéon mobile                              */
/* ------------------------------------------------------------------ */

function MobileAccordion({
  label, icon, open, onToggle, links, onLinkClick,
}: {
  label: string;
  icon: React.ReactNode;
  open: boolean;
  onToggle: () => void;
  links: { href: string; label: string }[];
  onLinkClick: () => void;
}) {
  return (
    <div className="mt-1">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-bold text-forest-800 uppercase tracking-wider"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <span className="text-forest-600">{icon}</span>
          {label}
        </span>
        <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>
      {open && (
        <ul className="mt-1 mb-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={onLinkClick}
                className="block pl-10 pr-4 py-2 text-sm text-forest-700 hover:bg-forest-50 rounded-xl"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
