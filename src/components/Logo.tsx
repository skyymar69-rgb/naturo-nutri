import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  /** 'full' = name + slogan, 'compact' = name only, 'icon' = name compact (no slogan) */
  variant?: 'full' | 'compact' | 'icon';
  /** Light version for dark backgrounds */
  light?: boolean;
  className?: string;
  linkWrapper?: boolean;
}

/**
 * Logo textuel Nutriéa — wordmark sans icône.
 * Le slogan n'est affiché qu'en variante `full`.
 */
export function Logo({
  variant = 'compact',
  light = false,
  className,
  linkWrapper = true,
}: LogoProps) {
  const content = (
    <span className={cn('inline-flex flex-col leading-none group', className)}>
      {/* Brand name */}
      <span
        className={cn(
          'font-display tracking-tight leading-none',
          variant === 'full' ? 'text-3xl sm:text-[2rem]' : 'text-2xl sm:text-[1.75rem]',
          light ? 'text-white' : 'text-forest-900',
        )}
      >
        Nutri<span className={light ? 'text-sage-300' : 'text-sage-500'}>é</span>a
      </span>

      {/* Slogan — full only */}
      {variant === 'full' && (
        <span
          className={cn(
            'text-[11px] sm:text-xs italic mt-1.5 tracking-wide leading-tight max-w-[14rem]',
            light ? 'text-white/85' : 'text-forest-500',
          )}
        >
          L'alliance de la nature et de la nutrition
        </span>
      )}
    </span>
  );

  if (!linkWrapper) return content;

  return (
    <Link href="/" aria-label="Nutriéa — Accueil" className="hover:opacity-90 transition-opacity">
      {content}
    </Link>
  );
}
