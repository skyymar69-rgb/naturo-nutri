import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'earth' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

const baseClasses = (variant: Variant, size: Size) =>
  cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    size === 'sm' && 'px-4 py-2 text-xs',
    size === 'md' && 'px-6 py-3 text-sm',
    size === 'lg' && 'px-8 py-4 text-base',
    variant === 'primary' &&
      'bg-forest-700 text-cream-50 hover:bg-forest-800 hover:shadow-lg focus-visible:ring-forest-500',
    variant === 'secondary' &&
      'border border-forest-700/30 text-forest-800 hover:bg-forest-50 hover:border-forest-700/60 focus-visible:ring-forest-400',
    variant === 'earth' &&
      'bg-earth-500 text-cream-50 hover:bg-earth-600 hover:shadow-lg focus-visible:ring-earth-400',
    variant === 'ghost' &&
      'text-forest-700 hover:bg-forest-50 hover:text-forest-900 focus-visible:ring-forest-400',
  );

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(baseClasses(variant, size), className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const isExternal = href.startsWith('http');
  if (isExternal) {
    return (
      <a
        href={href}
        className={cn(baseClasses(variant, size), className)}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(baseClasses(variant, size), className)} {...(rest as object)}>
      {children}
    </Link>
  );
}
