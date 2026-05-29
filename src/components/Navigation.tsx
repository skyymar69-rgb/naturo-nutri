'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Leaf, FlaskConical } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/Logo';
import { SearchDialog } from '@/components/SearchDialog';

const NATURO_LINKS = [
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

const NUTRI_LINKS = [
  { href: '/nutritherapie',              label: "Vue d'ensemble" },
  { href: '/nutritherapie/vitamines',    label: 'Vitamines' },
  { href: '/nutritherapie/mineraux',     label: 'Minéraux' },
  { href: '/nutritherapie/acides-gras',  label: 'Acides gras (Oméga-3…)' },
  { href: '/nutritherapie/acides-amines',label: 'Acides aminés' },
  { href: '/nutritherapie/antioxydants', label: 'Antioxydants' },
  { href: '/nutritherapie/probiotiques', label: 'Probiotiques & microbiote' },
  { href: '/nutritherapie/adaptogenes',  label: 'Adaptogènes' },
  { href: '/nutritherapie/objectifs',    label: 'Compléments par objectif' },
  { href: '/nutritherapie/principes',    label: '8 principes de qualité' },
];

function Dropdown({
  label, href, links, icon: Icon, accentClass,
}: {
  label: string;
  href: string;
  links: typeof NATURO_LINKS;
  icon: React.ElementType;
  accentClass: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={href}
        className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-forest-800 hover:text-forest-600 transition-colors rounded-full hover:bg-forest-50"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')} aria-hidden="true" />
      </Link>

      {open && (
        <div className="absolute left-0 top-full pt-2 w-72 z-50">
          <div className="rounded-2xl bg-white border border-forest-100 shadow-xl overflow-hidden">
            <div className={cn('px-5 py-3 flex items-center gap-2', accentClass)}>
              <Icon className="h-4 w-4 text-white" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">{label}</span>
            </div>
            <div className="py-1.5" role="menu">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm text-forest-800 hover:bg-forest-50 hover:text-forest-900 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sage-400 flex-shrink-0" aria-hidden="true" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileNaturo, setMobileNaturo] = useState(false);
  const [mobileNutri, setMobileNutri] = useState(false);

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

  return (
    <>
      {/* ── Top info bar ──
           - Pas de role="banner" ici : le banner landmark est le <header> ci-dessous
           - Les caractères ✦ et → sont purement décoratifs → aria-hidden
           - text-forest-200 sur forest-800 : (L≈0.77)/(L≈0.022) = 8.9:1 ✅
      ── */}
      <div className="hidden sm:block bg-forest-800 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="text-forest-200 italic">
            Site à visée pédagogique — les informations ne remplacent pas un avis médical
          </span>
          <Link
            href="/naturopathie/temperaments/quiz"
            className="font-bold text-sage-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            {/* Caractères décoratifs — aria-hidden */}
            <span aria-hidden="true">✦</span>
            Quiz tempérament gratuit
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* ── Main nav ──
           - <header> est le landmark "banner" implicitement (pas besoin de role)
           - L'aria-label va sur le <nav>, pas le <header>
           - WCAG 2.4.1 : skip link déjà présent dans layout.tsx
      ── */}
      <header
        className="sticky top-0 z-50 bg-white/96 backdrop-blur-md border-b border-forest-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex h-[68px] items-center justify-between"
            aria-label="Navigation principale"
          >

            {/* Logo Nutriéa */}
            <Logo variant="compact" />

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-1" role="list">
              <Dropdown
                label="Naturopathie"
                href="/naturopathie"
                links={NATURO_LINKS}
                icon={Leaf}
                accentClass="bg-forest-700"
              />
              <Dropdown
                label="Nutrithérapie"
                href="/nutritherapie"
                links={NUTRI_LINKS}
                icon={FlaskConical}
                accentClass="bg-earth-500"
              />
              <li>
                <Link
                  href="/plantes"
                  className="px-4 py-2 text-sm font-semibold text-forest-800 hover:text-forest-600 transition-colors rounded-full hover:bg-forest-50"
                >
                  Plantes
                </Link>
              </li>
              <li>
                <Link
                  href="/jus"
                  className="px-4 py-2 text-sm font-semibold text-forest-800 hover:text-forest-600 transition-colors rounded-full hover:bg-forest-50"
                >
                  Jus
                </Link>
              </li>
              <li>
                <Link
                  href="/outils/par-pathologie"
                  className="px-4 py-2 text-sm font-semibold text-forest-800 hover:text-forest-600 transition-colors rounded-full hover:bg-forest-50 inline-flex items-center gap-1.5"
                >
                  Par pathologie
                  <span className="text-[10px] font-bold bg-forest-100 text-forest-700 px-1.5 py-0.5 rounded">Outil</span>
                </Link>
              </li>
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
            <div id="mobile-menu" className="md:hidden pb-6 pt-2 border-t border-forest-100">

              <div className="mt-3">
                <button
                  onClick={() => setMobileNaturo(!mobileNaturo)}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-bold text-forest-800 uppercase tracking-wider"
                  aria-expanded={mobileNaturo}
                >
                  Naturopathie
                  <ChevronDown className={cn('h-4 w-4 transition-transform', mobileNaturo && 'rotate-180')} />
                </button>
                {mobileNaturo && (
                  <ul className="mt-1">
                    {NATURO_LINKS.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} onClick={() => setMobileOpen(false)}
                          className="block pl-8 pr-4 py-2 text-sm text-forest-700 hover:bg-forest-50 rounded-xl">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-2">
                <button
                  onClick={() => setMobileNutri(!mobileNutri)}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-bold text-forest-800 uppercase tracking-wider"
                  aria-expanded={mobileNutri}
                >
                  Nutrithérapie
                  <ChevronDown className={cn('h-4 w-4 transition-transform', mobileNutri && 'rotate-180')} />
                </button>
                {mobileNutri && (
                  <ul className="mt-1">
                    {NUTRI_LINKS.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} onClick={() => setMobileOpen(false)}
                          className="block pl-8 pr-4 py-2 text-sm text-forest-700 hover:bg-forest-50 rounded-xl">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-2 px-4 space-y-2">
                <Link href="/plantes" onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm font-semibold text-forest-800 hover:bg-forest-50 rounded-xl">
                  Les plantes qui soignent
                </Link>
                <Link href="/jus" onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm font-semibold text-forest-800 hover:bg-forest-50 rounded-xl">
                  Les recettes de jus
                </Link>
                <Link href="/naturopathie/temperaments" onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm font-semibold text-forest-800 hover:bg-forest-50 rounded-xl">
                  Tempéraments
                </Link>
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
      </header>{/* banner landmark implicite */}
    </>
  );
}
