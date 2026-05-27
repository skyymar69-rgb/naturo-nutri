'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/quiz-temperament', label: 'Quiz tempérament', highlight: true },
  { href: '/temperaments', label: 'Tempéraments' },
  { href: '/methodes', label: 'Méthodes' },
  { href: '/nutritherapie', label: 'Nutrithérapie' },
  { href: '/naturopathie', label: 'Naturopathie' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

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
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    link.highlight
                      ? 'bg-forest-700 text-cream-50 hover:bg-forest-800'
                      : 'text-forest-800 hover:bg-forest-50 hover:text-forest-900',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden grid h-9 w-9 place-items-center rounded-full text-forest-800 hover:bg-forest-50"
            onClick={() => setOpen(!open)}
            aria-label="Ouvrir le menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden pb-4 animate-fade-in">
            <ul className="flex flex-col gap-1 pt-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                      link.highlight
                        ? 'bg-forest-700 text-cream-50'
                        : 'text-forest-800 hover:bg-forest-50',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
