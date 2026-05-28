import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ALL_ARTICLES } from '@/lib/articles';
import { ALL_ACTUALITES } from '@/lib/actualites';
import { slugify } from '@/lib/utils';
import { Tag as TagIcon } from 'lucide-react';

const SITE = 'https://naturo-nutri.vercel.app';

export const metadata: Metadata = {
  title: 'Tous les tags',
  description: 'Tous les mots-clés et tags du site Nutriéa. Naviguez par thématique.',
  alternates: { canonical: `${SITE}/tags` },
};

function buildTagMap() {
  const map = new Map<string, { label: string; count: number }>();
  for (const a of ALL_ARTICLES) for (const t of a.tags ?? []) {
    const s = slugify(t);
    const e = map.get(s) ?? { label: t, count: 0 };
    map.set(s, { label: t, count: e.count + 1 });
  }
  for (const a of ALL_ACTUALITES) for (const t of a.tags ?? []) {
    const s = slugify(t);
    const e = map.get(s) ?? { label: t, count: 0 };
    map.set(s, { label: t, count: e.count + 1 });
  }
  return map;
}

export default function TagsIndexPage() {
  const all = Array.from(buildTagMap().entries())
    .map(([slug, { label, count }]) => ({ slug, label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, 'fr'));

  // Group into size buckets for visual hierarchy
  const max = all[0]?.count ?? 1;
  const sizeFor = (n: number) => {
    const r = n / max;
    if (r > 0.7) return 'text-2xl';
    if (r > 0.4) return 'text-xl';
    if (r > 0.2) return 'text-lg';
    return 'text-base';
  };

  return (
    <>
      <section className="hero-bg py-12 sm:py-16 border-b border-forest-100">
        <Container size="prose" className="text-center">
          <div className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-white/80 mb-4">
            <TagIcon className="h-7 w-7 text-sage-600" aria-hidden="true" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-forest-900 leading-tight">Tous les tags</h1>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed max-w-xl mx-auto">
            {all.length} mots-clés répartis sur l'ensemble du site. Cliquez pour explorer les articles associés.
          </p>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container size="wide">
          <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto leading-tight">
            {all.map((t) => (
              <Link
                key={t.slug}
                href={`/tags/${t.slug}`}
                className={`font-display ${sizeFor(t.count)} text-forest-700 hover:text-sage-600 transition-colors`}
              >
                #&nbsp;{t.label}
                <span className="text-xs text-forest-400 align-top ml-1">{t.count}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
