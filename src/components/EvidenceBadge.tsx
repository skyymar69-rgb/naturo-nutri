/**
 * EvidenceBadge — niveau de preuve scientifique.
 *
 * Affiché en haut de chaque article naturopathie pour informer
 * honnêtement le lecteur de la robustesse des données disponibles.
 *
 * 5 paliers : méta-analyse / RCT / préliminaire / tradition / pas de données.
 *
 * Indispensable juridiquement : on ne fait jamais passer une pratique
 * traditionnelle pour une pratique validée scientifiquement.
 */

import { Microscope, FlaskConical, FileText, BookHeart, HelpCircle } from 'lucide-react';
import type { EvidenceLevel } from '@/lib/types';
import { cn } from '@/lib/utils';

const LEVELS: Record<EvidenceLevel, {
  label: string;
  description: string;
  bg: string;
  text: string;
  ring: string;
  Icon: typeof Microscope;
}> = {
  'meta-analysis': {
    label: 'Méta-analyse',
    description: "Synthèses Cochrane, revues systématiques cumulant plusieurs essais randomisés. Niveau de preuve le plus élevé en médecine fondée sur les preuves.",
    bg: 'bg-emerald-50',
    text: 'text-emerald-900',
    ring: 'ring-emerald-300',
    Icon: Microscope,
  },
  rct: {
    label: 'Essai contrôlé',
    description: "Un ou plusieurs essais randomisés contrôlés publiés. Niveau de preuve élevé, conclusions robustes mais à confirmer par d'autres travaux.",
    bg: 'bg-sage-50',
    text: 'text-sage-900',
    ring: 'ring-sage-300',
    Icon: FlaskConical,
  },
  preliminary: {
    label: 'Données préliminaires',
    description: "Études d'observation, essais de faible puissance, données expérimentales animales ou in vitro. Les conclusions cliniques restent à confirmer.",
    bg: 'bg-amber-50',
    text: 'text-amber-900',
    ring: 'ring-amber-300',
    Icon: FileText,
  },
  tradition: {
    label: 'Pratique traditionnelle',
    description: "Usage transmis par la tradition (naturopathie, médecines empiriques, pharmacopées anciennes). Aucun ou très peu d'essais cliniques contrôlés évaluent à ce jour cette pratique.",
    bg: 'bg-stone-100',
    text: 'text-stone-800',
    ring: 'ring-stone-300',
    Icon: BookHeart,
  },
  'no-data': {
    label: 'Pas de données',
    description: "Aucune donnée scientifique exploitable disponible à ce jour. Cet article décrit une pratique sans pouvoir en évaluer la pertinence clinique.",
    bg: 'bg-red-50',
    text: 'text-red-900',
    ring: 'ring-red-300',
    Icon: HelpCircle,
  },
};

interface EvidenceBadgeProps {
  level: EvidenceLevel;
  className?: string;
  /** Variante compacte (sans description, juste le badge) */
  compact?: boolean;
}

export function EvidenceBadge({ level, className, compact = false }: EvidenceBadgeProps) {
  const meta = LEVELS[level];
  const Icon = meta.Icon;

  if (compact) {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ring-1',
          meta.bg, meta.text, meta.ring, className,
        )}
        title={meta.description}
      >
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        {meta.label}
      </span>
    );
  }

  return (
    <div
      className={cn(
        'flex gap-3 rounded-2xl ring-1 px-4 py-3.5',
        meta.bg, meta.ring, className,
      )}
      role="note"
      aria-label={`Niveau de preuve : ${meta.label}`}
    >
      <div className={cn('flex-shrink-0 mt-0.5', meta.text)}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        <p className={cn('text-xs font-bold uppercase tracking-wider', meta.text)}>
          Niveau de preuve
        </p>
        <p className={cn('font-display text-base leading-tight mt-0.5', meta.text)}>
          {meta.label}
        </p>
        <p className={cn('text-xs leading-relaxed mt-1.5 opacity-90', meta.text)}>
          {meta.description}
        </p>
      </div>
    </div>
  );
}
