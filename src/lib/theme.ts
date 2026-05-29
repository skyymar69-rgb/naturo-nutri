/**
 * Préférences de thème & accessibilité — persistées en localStorage,
 * appliquées comme classes sur <html>. Une seule source de vérité,
 * partagée par le sélecteur de thème et le menu accessibilité.
 */

export type ThemeChoice = 'light' | 'dark' | 'system';

export interface Prefs {
  theme: ThemeChoice;
  /** true = animations réduites */
  reduceMotion: boolean;
  /** true = contraste renforcé */
  highContrast: boolean;
  /** true = texte agrandi (+12,5 %) */
  largeText: boolean;
}

export const STORAGE_KEY = 'nutriea-prefs';
export const PREFS_EVENT = 'nutriea:prefs-change';

export const DEFAULT_PREFS: Prefs = {
  theme: 'system',
  reduceMotion: false,
  highContrast: false,
  largeText: false,
};

export function readPrefs(): Prefs {
  if (typeof window === 'undefined') return DEFAULT_PREFS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PREFS;
    return { ...DEFAULT_PREFS, ...(JSON.parse(raw) as Partial<Prefs>) };
  } catch {
    return DEFAULT_PREFS;
  }
}

export function prefersDark(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function resolveDark(theme: ThemeChoice): boolean {
  return theme === 'dark' || (theme === 'system' && prefersDark());
}

/** Applique les préférences sur l'élément <html>. */
export function applyPrefs(p: Prefs): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.classList.toggle('dark', resolveDark(p.theme));
  root.classList.toggle('a11y-reduce-motion', p.reduceMotion);
  root.classList.toggle('a11y-contrast', p.highContrast);
  root.classList.toggle('a11y-large-text', p.largeText);
}

/** Enregistre, applique et notifie les abonnés. */
export function savePrefs(p: Prefs): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    /* localStorage indisponible — applique quand même pour la session */
  }
  applyPrefs(p);
  window.dispatchEvent(new CustomEvent<Prefs>(PREFS_EVENT, { detail: p }));
}
