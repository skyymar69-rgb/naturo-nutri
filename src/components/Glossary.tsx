'use client';

import { useState } from 'react';
import { HelpCircle } from 'lucide-react';

/**
 * Tooltip inline avec définition.
 * Utilisation : <Gloss term="PMID">Identifiant unique d'un article PubMed.</Gloss>
 * Click + hover, accessible clavier (focus visible).
 */
export function Gloss({ term, children }: { term: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="inline-flex items-baseline gap-0.5 underline decoration-dotted underline-offset-2 decoration-sage-500 hover:text-forest-900 font-medium"
        aria-describedby={`gloss-${term}`}
        aria-expanded={open}
      >
        {term}
        <HelpCircle className="h-3 w-3 text-sage-500 self-center" aria-hidden="true" />
      </button>
      {open && (
        <span
          id={`gloss-${term}`}
          role="tooltip"
          className="absolute z-50 left-1/2 -translate-x-1/2 mt-2 w-72 bg-forest-900 text-white text-xs leading-relaxed rounded-xl p-3 shadow-2xl"
        >
          <strong className="block font-display text-sage-300 mb-1">{term}</strong>
          {children}
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-forest-900 rotate-45" aria-hidden="true" />
        </span>
      )}
    </span>
  );
}
