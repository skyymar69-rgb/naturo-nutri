import { cn } from '@/lib/utils';
import type { HTMLAttributes, ReactNode } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'forest' | 'sage' | 'earth' | 'sanguin' | 'bilieux' | 'nerveux' | 'lymphatique' | 'neutral';
  children: ReactNode;
}

export function Badge({ variant = 'sage', className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset',
        variant === 'forest' && 'bg-forest-50 text-forest-800 ring-forest-200',
        variant === 'sage' && 'bg-sage-50 text-sage-800 ring-sage-200',
        variant === 'earth' && 'bg-earth-50 text-earth-700 ring-earth-200',
        variant === 'sanguin' && 'bg-red-50 text-red-800 ring-red-200',
        variant === 'bilieux' && 'bg-amber-50 text-amber-800 ring-amber-200',
        variant === 'nerveux' && 'bg-blue-50 text-blue-800 ring-blue-200',
        variant === 'lymphatique' && 'bg-emerald-50 text-emerald-800 ring-emerald-200',
        variant === 'neutral' && 'bg-stone-100 text-stone-700 ring-stone-200',
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
