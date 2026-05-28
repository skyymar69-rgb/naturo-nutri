import { CalendarClock } from 'lucide-react';

/**
 * Affiche la date de dernière révision éditoriale d'un article.
 * Améliore la confiance (utilisateur voit que le contenu n'est pas figé)
 * et le SEO (Google valorise les pages mises à jour).
 */
export function LastUpdated({ date }: { date?: string }) {
  if (!date) return null;
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return null;
  const iso = d.toISOString();
  const human = d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  return (
    <p className="inline-flex items-center gap-1.5 text-xs text-forest-500" aria-label={`Dernière révision le ${human}`}>
      <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
      Dernière révision : <time dateTime={iso} className="font-medium">{human}</time>
    </p>
  );
}
