'use client';

import { useEffect, useRef, useState } from 'react';
import { Accessibility, Sun, Moon, Monitor, Check, X } from 'lucide-react';
import { useThemePrefs } from '@/components/useThemePrefs';
import type { ThemeChoice } from '@/lib/theme';
import { cn } from '@/lib/utils';

const THEME_OPTIONS: { value: ThemeChoice; label: string; icon: typeof Sun }[] = [
  { value: 'light', label: 'Clair', icon: Sun },
  { value: 'dark', label: 'Sombre', icon: Moon },
  { value: 'system', label: 'Système', icon: Monitor },
];

export function AccessibilityMenu({ className }: { className?: string }) {
  const { prefs, mounted, update, setTheme } = useThemePrefs();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Affichage et accessibilité"
        className="grid h-9 w-9 place-items-center rounded-full text-forest-700 hover:bg-forest-50 transition-colors"
      >
        <Accessibility className="h-[19px] w-[19px]" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Préférences d'affichage et d'accessibilité"
          className="absolute right-0 mt-2 w-72 rounded-2xl border border-forest-100 bg-white shadow-organic p-4 z-[60] animate-fade-in"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="font-display text-base text-forest-900">Affichage</p>
            <button type="button" onClick={() => setOpen(false)} aria-label="Fermer"
              className="grid h-7 w-7 place-items-center rounded-full text-forest-500 hover:bg-forest-50">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Sélecteur de thème */}
          <p className="text-[11px] font-bold uppercase tracking-wider text-forest-500 mb-2">Thème</p>
          <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-forest-50 mb-4">
            {THEME_OPTIONS.map(({ value, label, icon: Icon }) => {
              const active = mounted && prefs.theme === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setTheme(value)}
                  aria-pressed={active}
                  className={cn(
                    'flex flex-col items-center gap-1 py-2 rounded-lg text-xs font-semibold transition-all',
                    active ? 'bg-white text-forest-900 shadow-sm ring-1 ring-forest-100' : 'text-forest-600 hover:text-forest-900',
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              );
            })}
          </div>

          {/* Options d'accessibilité */}
          <p className="text-[11px] font-bold uppercase tracking-wider text-forest-500 mb-2">Accessibilité</p>
          <div className="space-y-1">
            <Toggle label="Animations réduites" checked={mounted && prefs.reduceMotion}
              onChange={(v) => update({ reduceMotion: v })} />
            <Toggle label="Texte agrandi" checked={mounted && prefs.largeText}
              onChange={(v) => update({ largeText: v })} />
          </div>
        </div>
      )}
    </div>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="w-full flex items-center justify-between gap-3 py-2 px-2 rounded-lg hover:bg-forest-50 transition-colors text-left"
    >
      <span className="text-sm text-forest-800">{label}</span>
      <span className={cn(
        'relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors',
        checked ? 'bg-sage-500' : 'bg-forest-900/15 dark:bg-white/20',
      )}>
        <span className={cn(
          'inline-flex h-5 w-5 items-center justify-center rounded-full bg-white shadow transition-transform',
          checked ? 'translate-x-[22px]' : 'translate-x-0.5',
        )}>
          {checked && <Check className="h-3 w-3 text-sage-600" />}
        </span>
      </span>
    </button>
  );
}
