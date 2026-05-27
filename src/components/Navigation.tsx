'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Leaf, FlaskConical } from 'lucide-react';
import { cn } from '@/lib/utils';

const NATURO_LINKS = [
  { href: '/naturopathie',                    label: "Vue d'ensemble" },
  { href: '/naturopathie/jeunes',             label: 'Jeûnes & monodiètes' },
  { href: '/naturopathie/purges',             label: 'Purges & drainages' },
  { href: '/naturopathie/plantes',            label: 'Plantes médicinales' },
  { href: '/naturopathie/alimentation',       label: 'Alimentation vivante' },
  { href: '/naturopathie/cures-saisonnieres', label: 'Cures saisonnières' },
  { href: '/naturopathie/hydrotherapie',      label: 'Hydrothérapie' },
  { href: '/naturopathie/aromatherapie',      label: 'Aromathérapie' },
  { href: '/naturopathie/respiration-sommeil',label: 'Respiration & sommeil' },
  { href: '/naturopathie/stress-emotions',    label: 'Stress & émotions' },
  { href: '/naturopathie/temperaments',       label: 'Les 4 tempéraments' },
];

const NUTRI_LINKS = [
  { href: '/nutritherapie',             label: "Vue d'ensemble" },
  { href: '/nutritherapie/vitamines',   label: 'Vitamines' },
  { href: '/nutritherapie/mineraux',    label: 'Minéraux' },
  { href: '/nutritherapie/acides-gras', label: 'Acides gras (Oméga-3…)' },
  { href: '/nutritherapie/acides-amines',label: 'Acides aminés' },
  { href: '/nutritherapie/antioxydants',label: 'Antioxydants' },
  { href: '/nutritherapie/probiotiques',label: 'Probiotiques & microbiote' },
  { href: '/nutritherapie/adaptogenes', label: 'Adaptogènes' },
  { href: '/nutritherapie/objectifs',   label: 'Compléments par objectif' },
  { href: '/nutritherapie/principes',   label: '8 principes de qualité' },
];

function Dropdown({
  label,
  href,
  links,
  icon: Icon,
  accentClass,
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
      >
        {label}
        <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')} />
      </Link>

      {open && (
        <div className="absolute left-0 top-full pt-2 w-72 z-50 animate-fade-in">
          <div className="rounded-2xl bg-white border border-forest-100 shadow-xl overflow-hidden">
            {/* Header */}
            <div className={cn('px-5 py-3 flex items-center gap-2', accentClass)}>
              <Icon className="h-4 w-4 text-white" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">{label}</span>
            </div>
            {/* Links */}
            <div className="py-1.5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm text-forest-800 hover:bg-forest-50 hover:text-forest-900 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-sage-400 flex-shrink-0" />
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

  return (
    <>
      {/* ── Top info bar ── */}
      <div className="hidden sm:block bg-forest-700 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="text-forest-200">
            Site à visée pédagogique · Les informations ne remplacent pas un avis médical
          </span>
          <Link
            href="/naturopathie/temperaments/quiz"
            className="font-semibold text-sage-300 hover:text-white transition-colors flex items-center gap-1"
          >
            Quiz tempérament gratuit →
          </Link>
        </div>
      </div>

      {/* ── Main nav ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-forest-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex h-16 items-center justify-between" aria-label="Navigation principale">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-forest-700 text-white shadow-sm group-hover:bg-forest-600 transition-colors">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="font-display text-xl text-forest-900 leading-none tracking-tight">
                NaturoNutri
                <span className="text-sage-500">.</span>
              </span>
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-1">
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
                  href="/naturopathie/temperaments"
                  className="px-4 py-2 text-sm font-semibold text-forest-800 hover:text-forest-600 transition-colors rounded-full hover:bg-forest-50"
                >
                  Tempéraments
                </Link>
              </li>
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/naturopathie/temperaments/quiz"
                className="inline-flex items-center gap-2 bg-sage-500 hover:bg-sage-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md"
              >
                Faire le quiz
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden grid h-9 w-9 place-items-center rounded-xl text-forest-800 hover:bg-forest-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Ouvrir le menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {/* ── Mobile menu ── */}
          {mobileOpen && (
            <div className="md:hidden pb-6 pt-2 border-t border-forest-100 animate-fade-in">

              {/* Naturopathie section */}
              <div className="mt-3">
                <button
                  onClick={() => setMobileNaturo(!mobileNaturo)}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-bold text-forest-800 uppercase tracking-wider"
                >
                  Naturopathie
                  <ChevronDown className={cn('h-4 w-4 transition-transform', mobileNaturo && 'rotate-180')} />
                </button>
                {mobileNaturo && (
                  <ul className="mt-1 space-y-0.5">
                    {NATURO_LINKS.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={() => setMobileOpen(false)}
                          className="block pl-8 pr-4 py-2 text-sm text-forest-700 hover:bg-forest-50 rounded-xl"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Nutrithérapie section */}
              <div className="mt-2">
                <button
                  onClick={() => setMobileNutri(!mobileNutri)}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-bold text-forest-800 uppercase tracking-wider"
                >
                  Nutrithérapie
                  <ChevronDown className={cn('h-4 w-4 transition-transform', mobileNutri && 'rotate-180')} />
                </button>
                {mobileNutri && (
                  <ul className="mt-1 space-y-0.5">
                    {NUTRI_LINKS.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={() => setMobileOpen(false)}
                          className="block pl-8 pr-4 py-2 text-sm text-forest-700 hover:bg-forest-50 rounded-xl"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-4 px-4">
                <Link
                  href="/naturopathie/temperaments/quiz"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex justify-center bg-sage-500 hover:bg-sage-600 text-white font-semibold text-sm py-3 rounded-full transition-all"
                >
                  Faire le quiz tempérament
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
