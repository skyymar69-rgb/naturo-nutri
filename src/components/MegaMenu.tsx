'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export interface MegaMenuColumn {
  title: string;
  links: { label: string; href: string; emoji?: string; description?: string }[];
}

export interface MegaMenuFeature {
  title: string;
  description: string;
  href: string;
  cta: string;
  /** Couleur d'accent : forest, sage, earth */
  accent?: 'forest' | 'sage' | 'earth';
}

interface MegaMenuProps {
  label: string;
  href: string;
  icon: LucideIcon;
  accentClass: string;
  columns: MegaMenuColumn[];
  feature?: MegaMenuFeature;
  /** Largeur du panneau : md (~620px), lg (~780px), xl (~920px) */
  width?: 'md' | 'lg' | 'xl';
}

const WIDTH_CLASS: Record<'md' | 'lg' | 'xl', string> = {
  md: 'w-[620px]',
  lg: 'w-[780px]',
  xl: 'w-[920px]',
};

const ACCENT_BG: Record<NonNullable<MegaMenuFeature['accent']>, { bg: string; btn: string; btnHover: string }> = {
  forest: { bg: 'bg-forest-700', btn: 'bg-white text-forest-700', btnHover: 'hover:bg-forest-50' },
  sage:   { bg: 'bg-sage-500',   btn: 'bg-white text-sage-700',   btnHover: 'hover:bg-sage-50' },
  earth:  { bg: 'bg-earth-500',  btn: 'bg-white text-earth-700',  btnHover: 'hover:bg-earth-50' },
};

export function MegaMenu({
  label, href, icon: Icon, accentClass, columns, feature, width = 'lg',
}: MegaMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  // Close on outside click + Escape
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={href}
        className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-forest-800 hover:text-forest-600 transition-colors rounded-full hover:bg-forest-50"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')} aria-hidden="true" />
      </Link>

      {open && (
        <div
          className={cn(
            'absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50',
            WIDTH_CLASS[width],
          )}
        >
          <div className="rounded-2xl bg-white border border-forest-100 shadow-2xl overflow-hidden">
            {/* Header bar with icon */}
            <div className={cn('flex items-center gap-3 px-6 py-3', accentClass)}>
              <Icon className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="text-sm font-bold uppercase tracking-widest text-white">{label}</span>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-white/90 hover:text-white"
              >
                Tout voir <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </Link>
            </div>

            {/* Body */}
            <div
              className={cn(
                'grid gap-0',
                feature ? 'grid-cols-[1fr_220px]' : columns.length > 2 ? 'grid-cols-3' : 'grid-cols-2',
              )}
            >
              {/* Columns */}
              <div className={cn(
                'p-6 grid gap-x-6 gap-y-1',
                columns.length === 3 && !feature ? 'grid-cols-3' :
                columns.length === 2 ? 'grid-cols-2' :
                'grid-cols-2',
              )}>
                {columns.map((col) => (
                  <div key={col.title} className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-forest-500 mb-3">{col.title}</p>
                    <ul className="space-y-1" role="menu">
                      {col.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            role="menuitem"
                            onClick={() => setOpen(false)}
                            className="group/link flex items-start gap-2 py-1.5 text-sm text-forest-800 hover:text-forest-900 rounded-md hover:bg-cream-50 -mx-2 px-2 transition-colors"
                          >
                            {l.emoji && (
                              <span className="text-base flex-shrink-0 mt-px" aria-hidden="true">{l.emoji}</span>
                            )}
                            <span className="flex-1 min-w-0">
                              <span className="block font-medium leading-tight">{l.label}</span>
                              {l.description && (
                                <span className="block text-[11px] text-forest-500 leading-snug mt-0.5">{l.description}</span>
                              )}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Feature panel */}
              {feature && (
                <div className={cn(
                  'p-5 flex flex-col justify-between',
                  feature.accent ? ACCENT_BG[feature.accent].bg : 'bg-forest-700',
                  'text-white',
                )}>
                  <div>
                    <p className="font-display text-lg leading-tight mb-2">{feature.title}</p>
                    <p className="text-xs text-white/85 leading-relaxed">{feature.description}</p>
                  </div>
                  <Link
                    href={feature.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'mt-4 inline-flex items-center justify-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full transition-colors',
                      feature.accent ? ACCENT_BG[feature.accent].btn : 'bg-white text-forest-700',
                      feature.accent ? ACCENT_BG[feature.accent].btnHover : 'hover:bg-forest-50',
                    )}
                  >
                    {feature.cta}
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
