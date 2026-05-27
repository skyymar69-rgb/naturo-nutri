'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Leaf, Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const NATURO_LINKS = [
  { href: '/naturopathie', label: 'Vue d\'ensemble' },
  { href: '/naturopathie/jeunes', label: 'Jeûnes' },
  { href: '/naturopathie/purges', label: 'Purges & drainages' },
  { href: '/naturopathie/plantes', label: 'Plantes médicinales' },
  { href: '/naturopathie/alimentation', label: 'Alimentation' },
  { href: '/naturopathie/cures-saisonnieres', label: 'Cures saisonnières' },
  { href: '/naturopathie/hydrotherapie', label: 'Hydrothérapie' },
  { href: '/naturopathie/aromatherapie', label: 'Aromathérapie' },
  { href: '/naturopathie/respiration-sommeil', label: 'Respiration & sommeil' },
  { href: '/naturopathie/stress-emotions', label: 'Stress & émotions' },
  { href: '/naturopathie/temperaments', label: 'Les 4 tempéraments' },
];

const NUTRI_LINKS = [
  { href: '/nutritherapie', label: 'Vue d\'ensemble' },
  { href: '/nutritherapie/vitamines', label: 'Vitamines' },
  { href: '/nutritherapie/mineraux', label: 'Minéraux' },
  { href: '/nutritherapie/acides-gras', label: 'Acides gras' },
  { href: '/nutritherapie/acides-amines', label: 'Acides aminés' },
  { href: '/nutritherapie/antioxydants', label: 'Antioxydants' },
  { href: '/nutritherapie/probiotiques', label: 'Probiotiques & microbiote' },
  { href: '/nutritherapie/adaptogenes', label: 'Adaptogènes' },
  { href: '/nutritherapie/objectifs', label: 'Compléments par objectif' },
  { href: '/nutritherapie/principes', label: 'Principes de qualité' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [naturoOpen, setNaturoOpen] = useState(false);
  const [nutriOpen, setNutriOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-100/60 bg-cream-50/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between" aria-label="Navigation principale">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-700 text-cream-50 transition-transform group-hover:rotate-12">
              <Leaf className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg text-forest-900 leading-none">
              Naturo
              <span className="text-earth-500">·</span>
              Nutri
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            <li
              className="relative"
              onMouseEnter={() => setNaturoOpen(true)}
              onMouseLeave={() => setNaturoOpen(false)}
            >
              <Link
                href="/naturopathie"
                className="rounded-full px-4 py-2 text-sm font-medium text-forest-800 hover:bg-forest-50 hover:text-forest-900 inline-flex items-center gap-1"
              >
                Naturopathie <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              {naturoOpen && (
                <div className="absolute left-0 top-full pt-2 w-64">
                  <div className="rounded-2xl border border-forest-100 bg-white shadow-lg overflow-hidden">
                    {NATURO_LINKS.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block px-4 py-2.5 text-sm text-forest-800 hover:bg-forest-50 hover:text-forest-900 transition-colors"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li
              className="relative"
              onMouseEnter={() => setNutriOpen(true)}
              onMouseLeave={() => setNutriOpen(false)}
            >
              <Link
                href="/nutritherapie"
                className="rounded-full px-4 py-2 text-sm font-medium text-forest-800 hover:bg-forest-50 hover:text-forest-900 inline-flex items-center gap-1"
              >
                Nutrithérapie <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              {nutriOpen && (
                <div className="absolute left-0 top-full pt-2 w-64">
                  <div className="rounded-2xl border border-forest-100 bg-white shadow-lg overflow-hidden">
                    {NUTRI_LINKS.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block px-4 py-2.5 text-sm text-forest-800 hover:bg-forest-50 hover:text-forest-900 transition-colors"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          </ul>

          <button
            className="md:hidden grid h-9 w-9 place-items-center rounded-full text-forest-800 hover:bg-forest-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Ouvrir le menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="pt-2 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-earth-600 font-semibold mb-2 px-2">
                  Naturopathie
                </p>
                <ul className="space-y-0.5">
                  {NATURO_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-forest-800 hover:bg-forest-50"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-earth-600 font-semibold mb-2 px-2">
                  Nutrithérapie
                </p>
                <ul className="space-y-0.5">
                  {NUTRI_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-forest-800 hover:bg-forest-50"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
