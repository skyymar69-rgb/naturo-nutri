import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  /** Optionnel : id pour aria-labelledby sur la section parente */
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center mx-auto', 'max-w-3xl', className)}>
      {eyebrow && (
        /* text-earth-700 sur cream-50 → 5.6:1 ✅ (was /70 opacity = fail) */
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-earth-700 mb-3">
          {eyebrow}
        </p>
      )}
      {/* text-forest-900 sur cream-50 → 10.6:1 ✅ */}
      <h2
        id={id}
        className="font-display text-3xl sm:text-4xl lg:text-5xl text-balance text-forest-900 leading-tight"
      >
        {title}
      </h2>
      {description && (
        /* text-forest-700 solid → 7.25:1 ✅ (was /85 opacity = 4.57:1, borderline) */
        <p className="mt-4 text-base sm:text-lg text-forest-700 leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
