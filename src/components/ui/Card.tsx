import { cn } from '@/lib/utils';
import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  accent?: 'forest' | 'sage' | 'earth' | 'cream';
}

export function Card({
  hoverable = false,
  accent = 'cream',
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border bg-white/80 backdrop-blur-sm shadow-sm transition-all',
        accent === 'forest' && 'border-forest-100',
        accent === 'sage' && 'border-sage-200',
        accent === 'earth' && 'border-earth-200',
        accent === 'cream' && 'border-forest-100/60',
        hoverable && 'hover:shadow-md hover:border-forest-200 hover:-translate-y-0.5',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('p-6 pb-0', className)}>{children}</div>;
}

export function CardTitle({
  children,
  className,
  as: Tag = 'h3',
}: {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  const Component = Tag as React.ElementType;
  return (
    <Component className={cn('font-display text-xl text-forest-900', className)}>
      {children}
    </Component>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn('mt-2 text-sm text-forest-700/80', className)}>{children}</p>;
}

export function CardContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('p-6', className)}>{children}</div>;
}

export function CardFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>;
}
