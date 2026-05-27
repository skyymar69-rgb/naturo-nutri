import type { Source } from '@/lib/types';
import { Badge } from './Badge';

const SOURCE_LABELS: Record<Source, { label: string; variant: 'forest' | 'sage' | 'earth' | 'neutral' }> = {
  grosjean: { label: 'École Grosjean', variant: 'forest' },
  curtay: { label: 'Dr Curtay', variant: 'earth' },
  les_deux: { label: 'Grosjean & Curtay', variant: 'sage' },
  tradition: { label: 'Tradition', variant: 'neutral' },
};

export function SourceBadge({ source }: { source: Source }) {
  const { label, variant } = SOURCE_LABELS[source];
  return <Badge variant={variant}>{label}</Badge>;
}
