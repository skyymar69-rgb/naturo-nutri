import Link from 'next/link';
import { Mail, Rss } from 'lucide-react';

/**
 * Encart d'abonnement aux nouveaux articles.
 * Pas de backend marketing : propose mailto + flux RSS.
 * 100% RGPD-friendly, sans données collectées côté Nutriéa.
 */
export function NewsletterCard() {
  return (
    <aside
      role="note"
      aria-label="Suivre les publications"
      className="not-prose bg-gradient-to-br from-forest-700 to-forest-900 text-white rounded-2xl p-6 sm:p-8 my-10 overflow-hidden relative"
    >
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-sage-400/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-sage-300 mb-2">Restez informé</p>
        <h3 className="font-display text-2xl sm:text-3xl text-white mb-3 leading-tight">
          Suivez les nouvelles synthèses sourcées
        </h3>
        <p className="text-sm text-white/85 leading-relaxed mb-5 max-w-lg">
          Chaque article publié vient avec ses PMID vérifiés. Choisissez votre canal — sans inscription
          ni cookie tiers de notre côté.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/feed.xml"
            className="inline-flex items-center gap-2 bg-sage-400 hover:bg-sage-300 text-forest-900 font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            <Rss className="h-4 w-4" aria-hidden="true" /> Flux RSS
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            <Mail className="h-4 w-4" aria-hidden="true" /> Nous écrire
          </Link>
        </div>
      </div>
    </aside>
  );
}
