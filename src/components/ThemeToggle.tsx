'use client';

import { Sun, Moon } from 'lucide-react';
import { useThemePrefs } from '@/components/useThemePrefs';
import { cn } from '@/lib/utils';

/** Bascule rapide clair ↔ sombre. */
export function ThemeToggle({ className }: { className?: string }) {
  const { isDark, setTheme, mounted } = useThemePrefs();

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Activer le thème clair' : 'Activer le thème sombre'}
      aria-pressed={isDark}
      className={cn(
        'grid h-9 w-9 place-items-center rounded-full text-forest-700 hover:bg-forest-50 transition-colors',
        className,
      )}
    >
      {mounted && (isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />)}
    </button>
  );
}
