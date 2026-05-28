import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Breadcrumb unifié avec icône Accueil + séparateurs élégants.
 * Le dernier item est rendu en aria-current="page".
 */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="flex items-center gap-1 text-sm text-forest-600 flex-wrap">
      <Link
        href="/"
        className="inline-flex items-center justify-center w-7 h-7 rounded-md hover:bg-forest-50 text-forest-500 hover:text-forest-900 transition-colors"
        aria-label="Accueil"
      >
        <Home className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} className="inline-flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5 text-forest-300 flex-shrink-0" aria-hidden="true" />
            {it.href && !last ? (
              <Link href={it.href} className="hover:text-forest-900 transition-colors px-1 rounded">
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-forest-400 truncate max-w-[160px] sm:max-w-none px-1">
                {it.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
