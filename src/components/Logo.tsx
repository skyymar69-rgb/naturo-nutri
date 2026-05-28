import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  /** 'full' = icon + name + slogan, 'compact' = icon + name, 'icon' = icon only */
  variant?: 'full' | 'compact' | 'icon';
  /** Light version for dark backgrounds (texte en blanc + fond blanc pour l'icône SVG) */
  light?: boolean;
  className?: string;
  linkWrapper?: boolean;
}

/**
 * Logo Nutriéa.
 *
 * Le fichier SVG /logo-nutriea.svg est dessiné en vert foncé (#0f3718)
 * et ne supporte pas de surimpression directe sur fond sombre.
 * En mode `light` (header/footer sombres) on enrobe l'icône dans une
 * pastille blanche pour garantir la visibilité du logo (WCAG contrast).
 */
export function Logo({
  variant = 'compact',
  light = false,
  className,
  linkWrapper = true,
}: LogoProps) {
  const iconSize = variant === 'icon' ? 64 : variant === 'full' ? 56 : 48;

  const content = (
    <span className={cn('inline-flex items-center gap-3 group', className)}>
      {/* SVG icon — sur fond clair en mode light, brut sinon */}
      <span
        className={cn(
          'relative flex-shrink-0 grid place-items-center',
          light
            ? 'bg-white rounded-2xl shadow-md ring-1 ring-white/40 p-1.5'
            : '',
        )}
        style={light ? { width: iconSize + 16, height: iconSize + 16 } : undefined}
      >
        <Image
          src="/logo-nutriea.svg"
          alt="Nutriéa logo"
          width={iconSize}
          height={iconSize}
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
              variant === 'full' ? 'text-2xl sm:text-[1.65rem]' : 'text-xl sm:text-[1.4rem]',
              light ? 'text-white' : 'text-forest-900',
            )}
          >
            Nutri<span className={light ? 'text-sage-300' : 'text-sage-500'}>é</span>a
          </span>

          {/* Slogan — full only */}
          {variant === 'full' && (
            <span
              className={cn(
                'text-[11px] italic mt-1 tracking-wide',
                light ? 'text-white/85' : 'text-forest-500',
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
