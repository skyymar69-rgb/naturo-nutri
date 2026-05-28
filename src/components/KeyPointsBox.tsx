import { Sparkles } from 'lucide-react';

/**
 * Boîte "À retenir" — version améliorée avec design plus marqué.
 * Remplace les anciennes Cards génériques pour les keyPoints.
 */
export function KeyPointsBox({ items, title = 'À retenir' }: { items: string[]; title?: string }) {
  if (!items || items.length === 0) return null;
  return (
    <aside
      role="note"
      aria-labelledby="keypoints-title"
      className="not-prose bg-gradient-to-br from-sage-50 via-white to-cream-50 border-l-4 border-sage-500 rounded-r-2xl p-6 my-8 shadow-sm"
    >
      <p id="keypoints-title" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-sage-700 mb-4">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        {title}
      </p>
      <ul className="space-y-3">
        {items.map((k, i) => (
          <li key={i} className="flex gap-3 text-forest-800/95 text-sm leading-relaxed">
            <span
              aria-hidden="true"
              className="flex-shrink-0 grid place-items-center w-5 h-5 rounded-full bg-sage-500 text-white text-[10px] font-bold mt-0.5"
            >
              {i + 1}
            </span>
            <span>{k}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
