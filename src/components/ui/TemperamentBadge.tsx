import type { TemperamentSlug } from '@/lib/types';
import { TEMPERAMENTS } from '@/lib/temperaments';
import { Badge } from './Badge';

interface TemperamentBadgeProps {
  slug: TemperamentSlug;
  withEmoji?: boolean;
}

export function TemperamentBadge({ slug, withEmoji = true }: TemperamentBadgeProps) {
  const temp = TEMPERAMENTS[slug];
  return (
    <Badge variant={slug}>
      {withEmoji && <span>{temp.emoji}</span>}
      <span>{temp.nom}</span>
    </Badge>
  );
}
