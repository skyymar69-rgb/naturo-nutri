/**
 * Composants de citation pour le blog Actualités.
 *
 * Convention : dans le corps des articles, on insère le marqueur "[#s1]"
 * (ou s2, s3…). Le composant <SourcedText> remplace ces marqueurs par
 * un superscript cliquable qui scrolle vers la bibliographie en bas d'article.
 *
 * Toutes les sources ont un PMID, DOI ou URL vers une autorité (NCBI,
 * EFSA, ANSES, OMS, NEJM, etc.) — vérifiable par le lecteur.
 */

import Link from 'next/link';
import { ExternalLink, BookOpen, FileText, FlaskConical, Globe, Scale } from 'lucide-react';
import type { Source, SourceType } from '@/lib/types';

const SOURCE_ICONS: Record<SourceType, { Icon: typeof FileText; label: string }> = {
  pubmed:          { Icon: FileText,      label: 'PubMed' },
  review:          { Icon: BookOpen,      label: 'Revue' },
  'meta-analysis': { Icon: BookOpen,      label: 'Méta-analyse' },
  rct:             { Icon: FlaskConical,  label: 'Essai randomisé' },
  cohort:          { Icon: FlaskConical,  label: 'Cohorte' },
  guideline:       { Icon: Scale,         label: 'Recommandation' },
  book:            { Icon: BookOpen,      label: 'Ouvrage de référence' },
  web:             { Icon: Globe,         label: 'Web' },
};

/**
 * Transforme un texte contenant des marqueurs [#s1], [#s1,s2] en JSX
 * avec superscripts cliquables.
 */
function renderWithCitations(text: string, sources: Source[]): React.ReactNode {
  const parts = text.split(/(\[#[a-z0-9,]+\])/i);
  return parts.map((part, idx) => {
    const m = part.match(/^\[#([a-z0-9,]+)\]$/i);
    if (!m) return <span key={idx}>{part}</span>;
    const ids = m[1].split(',');
    return (
      <sup key={idx} className="ml-0.5 text-[0.65em] font-semibold">
        {ids.map((id, i) => {
          const idx2 = sources.findIndex((s) => s.id === id);
          const n = idx2 >= 0 ? idx2 + 1 : '?';
          return (
            <span key={id}>
              {i > 0 && <span className="text-forest-400">,</span>}
              <a
                href={`#source-${id}`}
                className="text-sage-600 hover:text-sage-800 underline-offset-2 hover:underline px-0.5"
                aria-label={`Voir la source ${n}`}
              >
                {n}
              </a>
            </span>
          );
        })}
      </sup>
    );
  });
}

export function SourcedParagraph({ text, sources, className }: {
  text: string; sources: Source[]; className?: string;
}) {
  return (
    <p className={className ?? 'text-forest-800/90 leading-relaxed mb-4'}>
      {renderWithCitations(text, sources)}
    </p>
  );
}

/**
 * Liste de sources affichée à la fin de l'article — façon bibliographie.
 * Chaque entrée est ancrée (#source-sX) pour les liens de citation.
 */
export function SourcesList({ sources }: { sources: Source[] }) {
  if (!sources || sources.length === 0) return null;

  return (
    <section aria-labelledby="sources-title" className="not-prose mt-12 pt-8 border-t-2 border-forest-100">
      <h2 id="sources-title" className="font-display text-xl sm:text-2xl text-forest-900 mb-2 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-sage-600" aria-hidden="true" />
        Sources et références
      </h2>
      <p className="text-xs text-forest-600/80 mb-6 italic">
        Toutes les références ci-dessous sont vérifiables sur les bases publiques (PubMed/NCBI,
        EFSA, ANSES) ou sur le site officiel de l'institution citée.
      </p>
      <ol className="space-y-3 text-sm">
        {sources.map((s, i) => {
          const meta = SOURCE_ICONS[s.type];
          const Icon = meta.Icon;
          return (
            <li
              key={s.id}
              id={`source-${s.id}`}
              className="flex gap-3 scroll-mt-24 target:bg-sage-50 target:ring-1 target:ring-sage-300 rounded-lg p-3 -mx-1 transition-colors"
            >
              <span className="flex-shrink-0 inline-grid place-items-center w-7 h-7 rounded-full bg-sage-100 text-sage-700 font-bold text-xs">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-forest-600 bg-forest-50 px-1.5 py-0.5 rounded">
                    <Icon className="h-3 w-3" aria-hidden="true" />
                    {meta.label}
                  </span>
                  {s.year && <span className="text-xs text-forest-500">{s.year}</span>}
                </div>
                <p className="text-forest-900 leading-snug font-medium">{s.title}</p>
                {(s.authors || s.journal) && (
                  <p className="text-xs text-forest-600 mt-0.5">
                    {s.authors && <span>{s.authors}</span>}
                    {s.authors && s.journal && <span> · </span>}
                    {s.journal && <em>{s.journal}</em>}
                  </p>
                )}
                {s.excerpt && (
                  <p className="text-xs text-forest-700 mt-1 italic border-l-2 border-sage-200 pl-2">
                    « {s.excerpt} »
                  </p>
                )}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1 mt-1.5 text-xs font-semibold text-sage-700 hover:text-sage-900 underline-offset-2 hover:underline break-all"
                >
                  {s.pmid ? `PMID ${s.pmid}` : s.doi ? `DOI ${s.doi}` : 'Voir la source'}
                  <ExternalLink className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                </a>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function ToneNotice() {
  return (
    <aside
      role="note"
      className="not-prose bg-cream-50 border border-forest-100 rounded-2xl p-4 my-6 text-sm text-forest-700 leading-relaxed"
    >
      <p className="font-semibold text-forest-900 mb-1">À propos du ton de cet article</p>
      <p>
        Les affirmations sont formulées au conditionnel («&nbsp;il semblerait&nbsp;», «&nbsp;les
        données suggèrent&nbsp;») et chaque assertion est rattachée à une référence cliquable.
        Aucune affirmation médicale absolue. Cet article ne remplace pas un avis médical.
      </p>
    </aside>
  );
}
