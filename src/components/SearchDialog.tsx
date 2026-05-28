'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Search, X, FileText, BookOpen, Command } from 'lucide-react';
import { searchIndex, type SearchEntry } from '@/lib/search-index';

/**
 * Recherche client-side dans tout le contenu.
 * Ouverture par bouton header ou raccourci ⌘K / Ctrl+K.
 */
export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchEntry[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setResults([]);
  }, []);

  // Open with ⌘K / Ctrl+K, close with Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === 'Escape' && open) {
        e.preventDefault();
        close();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  // Focus input on open + lock scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, [open]);

  // Live search
  useEffect(() => {
    setResults(searchIndex(query, 12));
  }, [query]);

  return (
    <>
      {/* Trigger button — header */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Rechercher dans le site (raccourci : Ctrl+K)"
        className="inline-flex items-center gap-2 text-sm text-forest-600 bg-forest-50 hover:bg-forest-100 rounded-full pl-3 pr-2 py-1.5 transition-colors"
      >
        <Search className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">Rechercher</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-mono bg-white border border-forest-200 rounded px-1.5 py-0.5 text-forest-500">
          <Command className="h-2.5 w-2.5" aria-hidden="true" />K
        </kbd>
      </button>

      {/* Dialog */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="search-title"
          className="fixed inset-0 z-[60] flex items-start justify-center p-4 sm:p-8"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Fermer la recherche"
            onClick={close}
            className="absolute inset-0 bg-forest-900/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <div className="relative bg-white rounded-2xl shadow-2xl ring-1 ring-forest-100 w-full max-w-2xl mt-[8vh]">
            <div className="flex items-center gap-3 border-b border-forest-100 px-4 py-3">
              <Search className="h-5 w-5 text-sage-500 flex-shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Rechercher un article, une plante, une vitamine…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-base text-forest-900 placeholder:text-forest-400"
                id="search-title"
                aria-label="Recherche"
              />
              <button
                type="button"
                onClick={close}
                aria-label="Fermer"
                className="grid place-items-center w-8 h-8 rounded-full hover:bg-forest-50 text-forest-500 hover:text-forest-800"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {query.length < 2 ? (
                <div className="p-8 text-center text-sm text-forest-500">
                  <Search className="h-8 w-8 mx-auto mb-3 text-forest-300" aria-hidden="true" />
                  Tapez au moins 2 caractères pour rechercher dans tous les articles.
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {['vitamine c', 'magnésium', 'ashwagandha', 'jeûne', 'mélatonine'].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setQuery(s)}
                        className="text-xs px-3 py-1 rounded-full bg-sage-50 text-sage-700 hover:bg-sage-100"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : results.length === 0 ? (
                <div className="p-8 text-center text-sm text-forest-500">
                  Aucun résultat pour « {query} ».
                </div>
              ) : (
                <ul role="listbox" aria-label="Résultats de recherche" className="p-2">
                  {results.map((r) => (
                    <li key={r.url} role="option" aria-selected="false">
                      <Link
                        href={r.url}
                        onClick={close}
                        className="flex gap-3 items-start p-3 rounded-xl hover:bg-cream-50 transition-colors group"
                      >
                        <span
                          className={`flex-shrink-0 grid place-items-center w-9 h-9 rounded-lg ${
                            r.type === 'actualite' ? 'bg-sage-100 text-sage-700' : 'bg-forest-50 text-forest-700'
                          }`}
                          aria-hidden="true"
                        >
                          {r.type === 'actualite' ? <FileText className="h-4 w-4" /> : <BookOpen className="h-4 w-4" />}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="font-display text-base text-forest-900 group-hover:text-forest-700 truncate">
                              {r.title}
                            </p>
                            {r.type === 'actualite' && (
                              <span className="text-[10px] font-bold uppercase tracking-wider bg-sage-100 text-sage-700 px-1.5 py-0.5 rounded">
                                Sourcé
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-forest-600/80 mt-0.5 line-clamp-2">{r.excerpt}</p>
                          <p className="text-[10px] text-forest-500 mt-1 uppercase tracking-wider">
                            {r.domain ? `${r.domain} · ` : 'Actualité · '}{r.category}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-forest-100 px-4 py-2.5 flex items-center gap-4 text-[10px] text-forest-500 bg-cream-50 rounded-b-2xl">
              <span className="inline-flex items-center gap-1">
                <kbd className="font-mono bg-white border border-forest-200 rounded px-1.5 py-0.5">↵</kbd>
                ouvrir
              </span>
              <span className="inline-flex items-center gap-1">
                <kbd className="font-mono bg-white border border-forest-200 rounded px-1.5 py-0.5">Esc</kbd>
                fermer
              </span>
              <span className="ml-auto">{SEARCH_INDEX_COUNT} articles indexés</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Counted at module-load time
import { SEARCH_INDEX } from '@/lib/search-index';
const SEARCH_INDEX_COUNT = SEARCH_INDEX.length;
