import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { ArrowRight, Home, Leaf, BookOpen } from 'lucide-react';
import { NATURO_CATEGORIES, NUTRI_CATEGORIES } from '@/lib/categories';

export const metadata = {
  title: 'Page introuvable (404)',
  description: 'Cette page n\'existe pas ou a été déplacée.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const suggestions = [
    ...NATURO_CATEGORIES.slice(0, 4).map((c) => ({ href: `/naturopathie/${c.slug}`, label: c.nom, icon: c.icon })),
    ...NUTRI_CATEGORIES.slice(0, 4).map((c) => ({ href: `/nutritherapie/${c.slug}`, label: c.nom, icon: c.icon })),
  ];

  return (
    <Container size="prose" className="py-20 sm:py-28 text-center">
      <div className="relative inline-block mb-6">
        <p className="font-display text-[7rem] sm:text-[10rem] leading-none text-sage-100 select-none">404</p>
        <Leaf className="absolute top-4 right-0 h-8 w-8 text-sage-500 -rotate-12" aria-hidden="true" />
      </div>

      <h1 className="font-display text-3xl sm:text-4xl text-forest-900 mb-3 text-balance">
        Cette page n'a pas trouvé son terrain
      </h1>
      <p className="text-forest-700/85 mb-8 text-lg leading-relaxed text-balance max-w-xl mx-auto">
        Elle a peut-être été déplacée, supprimée, ou n'a jamais existé. Mais votre quête de santé, elle, continue.
      </p>

      <div className="flex flex-wrap gap-3 justify-center mb-12">
        <ButtonLink href="/" variant="primary">
          <Home className="h-4 w-4" /> Retour à l'accueil
        </ButtonLink>
        <ButtonLink href="/naturopathie/temperaments/quiz" variant="secondary">
          Découvrir mon tempérament
        </ButtonLink>
      </div>

      <div className="text-left">
        <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-forest-500 mb-4">
          <BookOpen className="h-3.5 w-3.5" /> Suggestions
        </p>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {suggestions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-center gap-3 bg-cream-50 hover:bg-forest-50 border border-forest-100 rounded-xl px-4 py-3 transition-colors"
            >
              <span className="text-xl" aria-hidden="true">{s.icon}</span>
              <span className="flex-1 font-display text-sm text-forest-900 group-hover:text-forest-700">{s.label}</span>
              <ArrowRight className="h-4 w-4 text-forest-400 group-hover:text-forest-700 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
