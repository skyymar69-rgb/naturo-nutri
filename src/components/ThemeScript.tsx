/**
 * Script anti-FOUC : applique le thème & les préférences d'accessibilité
 * AVANT le premier rendu, pour éviter tout flash clair→sombre.
 * Doit rester synchrone et autonome (pas d'import).
 */
export function ThemeScript() {
  const code = `(function(){try{
    var p=JSON.parse(localStorage.getItem('nutriea-prefs')||'{}');
    var t=p.theme||'dark';
    var dark=t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);
    var c=document.documentElement.classList;
    c.toggle('dark',dark);
    c.toggle('a11y-reduce-motion',!!p.reduceMotion);
    c.toggle('a11y-contrast',!!p.highContrast);
    c.toggle('a11y-large-text',!!p.largeText);
  }catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
