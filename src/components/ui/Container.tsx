import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'prose' | 'default' | 'wide';
  as?: keyof JSX.IntrinsicElements;
}

export function Container({
  size = 'default',
  as: Tag = 'div',
  className,
  ...props
}: ContainerProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        size === 'prose' && 'max-w-3xl',
        size === 'default' && 'max-w-6xl',
        size === 'wide' && 'max-w-7xl',
        className,
      )}
      {...props}
    />
  );
}
