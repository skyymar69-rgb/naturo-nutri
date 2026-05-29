'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  type Prefs, type ThemeChoice, DEFAULT_PREFS, PREFS_EVENT,
  readPrefs, savePrefs, resolveDark, applyPrefs,
} from '@/lib/theme';

/**
 * Hook partagé : lit les préférences au montage, se synchronise avec les
 * autres instances via l'événement `nutriea:prefs-change`, et réagit aux
 * changements du thème système quand le choix est « system ».
 */
export function useThemePrefs() {
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setPrefs(readPrefs());
    setMounted(true);

    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<Prefs>).detail;
      if (detail) setPrefs(detail);
    };
    window.addEventListener(PREFS_EVENT, onChange);

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onSystem = () => {
      const cur = readPrefs();
      if (cur.theme === 'system') { applyPrefs(cur); setPrefs({ ...cur }); }
    };
    mq.addEventListener('change', onSystem);

    return () => {
      window.removeEventListener(PREFS_EVENT, onChange);
      mq.removeEventListener('change', onSystem);
    };
  }, []);

  const update = useCallback((patch: Partial<Prefs>) => {
    setPrefs((prev) => {
      const next = { ...prev, ...patch };
      savePrefs(next);
      return next;
    });
  }, []);

  const setTheme = useCallback((theme: ThemeChoice) => update({ theme }), [update]);

  const isDark = mounted && resolveDark(prefs.theme);

  return { prefs, mounted, update, setTheme, isDark };
}
