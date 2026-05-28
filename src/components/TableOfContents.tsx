'use client';

import { useEffect, useState } from 'react';
import { slugify } from '@/lib/utils';
import { List } from 'lucide-react';

interface TocItem {
  heading: string;
  id: string;
}

/**
 * Sommaire d'article — sticky en desktop.
 * Met en surbrillance la section actuellement visible.
 */
export function TableOfContents({ headings }: { headings: string[] }) {
  const items: TocItem[] = headings.map((h) => ({ heading: h, id: slugify(h) }));
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the first entry that intersects
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: [0, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Sommaire de l'article" className="sticky top-24 hidden lg:block">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-forest-500 mb-4">
        <List className="h-3.5 w-3.5" />
        Sommaire
      </p>
      <ul className="space-y-1.5 border-l border-forest-100 text-sm">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className={`block pl-4 -ml-px border-l-2 leading-snug transition-colors py-1 ${
                active === it.id
                  ? 'border-sage-500 text-forest-900 font-semibold'
                  : 'border-transparent text-forest-600 hover:text-forest-900 hover:border-forest-200'
              }`}
            >
              {it.heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
