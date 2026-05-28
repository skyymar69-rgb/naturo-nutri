import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  /** 'full' = icon + name + slogan, 'compact' = icon + name, 'icon' = icon only */
  variant?: 'full' | 'compact' | 'icon';
  /** Light version for dark backgrounds */
  light?: boolean;
  className?: string;
  linkWrapper?: boolean;
}

export function Logo({
  variant = 'compact',
  light = false,
  className,
  linkWrapper = true,
}: LogoProps) {
  const content = (
    <span className={cn('inline-flex items-center gap-3 group', className)}>
      {/* SVG icon mark */}
      <span className="relative flex-shrink-0">
        <Image
          src="/logo-nutriea.svg"
          alt="Nutriéa logo"
          width={variant === 'icon' ? 44 : 40}
          height={variant === 'icon' ? 44 : 40}
          className="object-contain"
          priority
        />
      </span>

      {variant !== 'icon' && (
        <span className="flex flex-col leading-none">
          {/* Brand name */}
          <span
            className={cn(
              'font-display tracking-tight leading-none',
              variant === 'full' ? 'text-2xl' : 'text-xl',
              light ? 'text-white' : 'text-forest-900',
            )}
          >
            Nutri<span className={light ? 'text-sage-300' : 'text-sage-500'}>é</span>a
          </span>

          {/* Slogan — full only */}
          {variant === 'full' && (
            <span
              className={cn(
                'text-[10px] italic mt-0.5 tracking-wide',
                light ? 'text-forest-200' : 'text-forest-500',
              )}
            >
              L'alliance de la nature et de la nutrition
            </span>
          )}
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
