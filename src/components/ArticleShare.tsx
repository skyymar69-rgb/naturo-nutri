'use client';

import { useState } from 'react';
import { Link2, Check, Share2, Printer, Facebook } from 'lucide-react';

/**
 * Boutons de partage discrets — copie d'URL, partage natif (mobile), impression.
 * Pas de tracking, pas de pixel tiers.
 */
export function ArticleShare({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    if (typeof window === 'undefined') return;
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function share() {
    if (typeof window === 'undefined') return;
    if (navigator.share) {
      navigator.share({ title, url: window.location.href }).catch(() => {});
    } else {
      copy();
    }
  }

  function shareFacebook() {
    if (typeof window === 'undefined') return;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'noopener,noreferrer,width=600,height=400');
  }

  function print() {
    if (typeof window !== 'undefined') window.print();
  }

  const btn = 'inline-flex items-center gap-1.5 text-xs font-semibold text-forest-700 bg-white hover:bg-forest-50 border border-forest-200 rounded-full px-3 py-1.5 transition-colors focus-visible:outline-2';

  return (
    <div className="flex flex-wrap items-center gap-2 print:hidden" role="group" aria-label="Partage de l'article">
      <button type="button" onClick={share} className={btn} aria-label="Partager l'article">
        <Share2 className="h-3.5 w-3.5" aria-hidden="true" /> Partager
      </button>
      <button type="button" onClick={copy} className={btn} aria-label={copied ? 'Lien copié' : 'Copier le lien'}>
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-sage-600" aria-hidden="true" /> Copié
          </>
        ) : (
          <>
            <Link2 className="h-3.5 w-3.5" aria-hidden="true" /> Lien
          </>
        )}
      </button>
      <button type="button" onClick={shareFacebook} className={btn} aria-label="Partager sur Facebook">
        <Facebook className="h-3.5 w-3.5" aria-hidden="true" /> Facebook
      </button>
      <button type="button" onClick={print} className={btn} aria-label="Imprimer l'article">
        <Printer className="h-3.5 w-3.5" aria-hidden="true" /> Imprimer
      </button>
    </div>
  );
}
