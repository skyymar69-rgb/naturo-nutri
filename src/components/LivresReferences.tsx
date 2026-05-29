/**
 * Composant d'affichage des livres de référence.
 *
 * Deux usages :
 * - <LivresReferences domaine="jus" /> : grille de cartes pour la page section
 * - <CitationLivre livre={...} /> : citation inline d'un ouvrage avec extrait
 */

import Link from 'next/link';
import { BookOpen, ExternalLink } from 'lucide-react';
import type { LivreReference } from '@/lib/references-livres';
import { getLivresParDomaine } from '@/lib/references-livres';

export function LivresReferences({
  domaine, title = 'Bibliographie de référence', limit,
}: {
  domaine: LivreReference['domaines'][number];
  title?: string;
  limit?: number;
}) {
  const livres = getLivresParDomaine(domaine).slice(0, limit ?? 99);
  if (livres.length === 0) return null;

  return (
    <section aria-labelledby="livres-ref-title" className="not-prose my-12">
      <h2 id="livres-ref-title" className="font-display text-2xl sm:text-3xl text-forest-900 mb-2 flex items-center gap-2">
        <BookOpen className="h-6 w-6 text-sage-600" aria-hidden="true" />
        {title}
      </h2>
      <p className="text-sm text-forest-600/80 mb-6 italic">
        Ouvrages reconnus qui fondent l'approche éditoriale de cette section.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {livres.map((l) => (
          <CitationLivre key={l.slug} livre={l} />
        ))}
      </div>
    </section>
  );
}

export function CitationLivre({ livre, compact = false }: { livre: LivreReference; compact?: boolean }) {
  if (compact) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs text-forest-700 bg-cream-50 border border-forest-100 rounded-md px-2 py-1">
        <BookOpen className="h-3 w-3 text-sage-600" aria-hidden="true" />
        <span className="font-semibold">{livre.auteur}</span>, <em>{livre.titre}</em>{' '}
        <span className="text-forest-500">({livre.anneeOriginale})</span>
      </span>
    );
  }

  return (
    <article className="bg-cream-50 border border-forest-100 rounded-2xl p-5 flex flex-col h-full">
      <p className="text-[10px] font-bold uppercase tracking-wider text-sage-700 mb-1.5">
        {livre.anneeOriginale}
        {livre.editionFr && ` · Éd. fr. ${livre.editionFr.annee}`}
      </p>
      <h3 className="font-display text-lg text-forest-900 leading-tight mb-1">
        {livre.titre}
      </h3>
      {livre.sousTitre && (
        <p className="text-xs italic text-forest-600 mb-2 leading-snug">{livre.sousTitre}</p>
      )}
      <p className="text-xs font-semibold text-sage-700 mb-3">
        {livre.auteur}
        {livre.editionFr && <span className="ml-1.5 text-forest-500 font-normal">· {livre.editionFr.editeur}</span>}
      </p>
      <p className="text-sm text-forest-800/90 leading-relaxed flex-1">{livre.description}</p>
      {livre.citationCle && (
        <blockquote className="text-xs italic text-forest-700 mt-3 border-l-2 border-sage-300 pl-3">
          {livre.citationCle}
        </blockquote>
      )}
    </article>
  );
}

/**
 * Petit bandeau « Référence » inline (pour articles individuels)
 */
export function ReferenceLivreInline({ livre }: { livre: LivreReference }) {
  return (
    <aside
      role="note"
      aria-label={`Référence : ${livre.titre}`}
      className="not-prose flex items-start gap-3 bg-cream-50 border-l-4 border-sage-500 rounded-r-xl p-4 my-6"
    >
      <BookOpen className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
      <div className="text-sm leading-relaxed">
        <p className="font-semibold text-forest-900 mb-0.5">Référence</p>
        <p className="text-forest-800">
          <strong>{livre.auteur}</strong>, <em>{livre.titre}</em>
          {livre.sousTitre && <span className="text-forest-600"> — {livre.sousTitre}</span>}
          <span className="text-forest-500"> ({livre.anneeOriginale}{livre.editionFr && `, éd. fr. ${livre.editionFr.editeur} ${livre.editionFr.annee}`})</span>.
        </p>
        {livre.citationCle && (
          <p className="mt-2 italic text-forest-700 text-xs">{livre.citationCle}</p>
        )}
      </div>
    </aside>
  );
}
