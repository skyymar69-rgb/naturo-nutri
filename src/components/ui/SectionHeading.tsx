import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center mx-auto', 'max-w-3xl', className)}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-earth-600 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-balance text-forest-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-forest-700/85 leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
