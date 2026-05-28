/**
 * ArticlePhoto — composant photo réelle pour les heroes article.
 *
 * Remplace l'ancien composant ArticleHero (illustration SVG) par
 * de vraies photos hébergées sur Pexels.
 *
 * Toutes les photos viennent de la banque Pexels, sous licence
 * gratuite incluant l'usage commercial sans attribution obligatoire.
 * Voir https://www.pexels.com/license/
 *
 * Le fallback est une couleur de catégorie (jamais une image cassée).
 */

import Image from 'next/image';
import { cn } from '@/lib/utils';

type Ratio = '21/9' | '16/9' | '4/3' | '1/1';

interface ArticlePhotoProps {
  src: string;
  alt: string;
  ratio?: Ratio;
  className?: string;
  /** Mode compact (vignettes "À lire aussi") */
  compact?: boolean;
  priority?: boolean;
  /** Couleur de fallback pendant le chargement (hex) */
  fallbackColor?: string;
}

const RATIOS: Record<Ratio, string> = {
  '21/9': 'aspect-[21/9]',
  '16/9': 'aspect-[16/9]',
  '4/3':  'aspect-[4/3]',
  '1/1':  'aspect-square',
};

export function ArticlePhoto({
  src, alt, ratio = '21/9', className, compact = false, priority = false,
  fallbackColor = '#d2f0db',
}: ArticlePhotoProps) {
  return (
    <div
      className={cn('relative w-full overflow-hidden', RATIOS[ratio], className)}
      style={{ backgroundColor: fallbackColor }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={compact ? '320px' : '(max-width: 768px) 100vw, 800px'}
        priority={priority}
        className="object-cover img-food"
      />
      {!compact && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/25 to-transparent pointer-events-none"
        />
      )}
    </div>
  );
}
