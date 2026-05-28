'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown, Check } from 'lucide-react';

/**
 * Widget « Cet article vous a-t-il été utile ? »
 * UI seule, pas de tracking ni d'envoi serveur (RGPD-friendly).
 * Le retour se stocke en localStorage par slug pour ne pas redemander.
 */
export function ArticleFeedback({ slug }: { slug: string }) {
  const [voted, setVoted] = useState<null | 'up' | 'down'>(() => {
    if (typeof window === 'undefined') return null;
    return (localStorage.getItem(`vote:${slug}`) as 'up' | 'down' | null) ?? null;
  });

  function vote(v: 'up' | 'down') {
    setVoted(v);
    try {
      localStorage.setItem(`vote:${slug}`, v);
    } catch { /* private mode */ }
  }

  return (
    <div className="not-prose bg-cream-50 border border-forest-100 rounded-2xl p-5 my-8 print:hidden">
      <p className="font-display text-base text-forest-900 mb-3">
        Cet article vous a-t-il été utile ?
      </p>
      {voted ? (
        <p className="inline-flex items-center gap-2 text-sm text-sage-700 bg-sage-50 border border-sage-200 px-3 py-1.5 rounded-full">
          <Check className="h-4 w-4" aria-hidden="true" />
          Merci pour votre retour.
        </p>
      ) : (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => vote('up')}
            className="inline-flex items-center gap-2 bg-white hover:bg-sage-50 border border-forest-200 text-forest-800 rounded-full px-4 py-2 text-sm font-semibold transition-colors"
            aria-label="Oui, cet article m'a été utile"
          >
            <ThumbsUp className="h-4 w-4" aria-hidden="true" /> Oui
          </button>
          <button
            type="button"
            onClick={() => vote('down')}
            className="inline-flex items-center gap-2 bg-white hover:bg-amber-50 border border-forest-200 text-forest-800 rounded-full px-4 py-2 text-sm font-semibold transition-colors"
            aria-label="Non, cet article ne m'a pas été utile"
          >
            <ThumbsDown className="h-4 w-4" aria-hidden="true" /> Non
          </button>
        </div>
      )}
      <p className="text-[11px] text-forest-500 mt-3">
        Aucun envoi serveur — votre retour reste sur votre appareil.
      </p>
    </div>
  );
}
