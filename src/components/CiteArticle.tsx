'use client';

import { useState } from 'react';
import { Quote, Copy, Check } from 'lucide-react';

/**
 * Bouton « Citer cet article » — génère une citation au format APA
 * ainsi qu'un lien permanent. Pratique pour les usagers académiques.
 */
export function CiteArticle({
  title, url, updatedAt,
}: {
  title: string; url: string; updatedAt?: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const year = updatedAt ? new Date(updatedAt).getFullYear() : new Date().getFullYear();
  const date = updatedAt
    ? new Date(updatedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
    : new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

  const apa = `Nutriéa. (${year}). ${title}. Récupéré le ${date} de ${url}`;

  function copy() {
    if (typeof navigator === 'undefined') return;
    navigator.clipboard.writeText(apa).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="print:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-700 bg-white hover:bg-forest-50 border border-forest-200 rounded-full px-3 py-1.5 transition-colors"
        aria-expanded={open}
        aria-label="Citer cet article"
      >
        <Quote className="h-3.5 w-3.5" aria-hidden="true" />
        Citer cet article
      </button>

      {open && (
        <div className="mt-3 not-prose bg-cream-50 border border-forest-100 rounded-2xl p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-forest-500 mb-2">Format APA</p>
          <p className="text-sm text-forest-800 font-mono leading-snug">{apa}</p>
          <button
            type="button"
            onClick={copy}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-sage-700 hover:text-sage-900 underline-offset-2 hover:underline"
          >
            {copied ? (<><Check className="h-3.5 w-3.5" /> Copié</>) : (<><Copy className="h-3.5 w-3.5" /> Copier</>)}
          </button>
        </div>
      )}
    </div>
  );
}
