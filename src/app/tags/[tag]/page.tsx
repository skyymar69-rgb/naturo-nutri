import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { ArticlePhoto } from '@/components/ArticlePhoto';
import { ALL_ARTICLES } from '@/lib/articles';
import { ALL_ACTUALITES } from '@/lib/actualites';
import { getArticleImage } from '@/lib/article-images';
import { ArrowRight, Tag as TagIcon, ChevronRight, ArrowLeft } from 'lucide-react';
import { slugify } from '@/lib/utils';

const SITE = 'https://naturo-nutri.vercel.app';

interface PageProps { params: { tag: string }; }

/* All unique tags across the site */
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

const TAG_MAP = buildTagMap();

export function generateStaticParams() {
  // Only pre-render tag pages with at least 2 articles to limit static surface
  return Array.from(TAG_MAP.entries())
    .filter(([, meta]) => meta.count >= 2)
    .map(([tag]) => ({ tag }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const meta = TAG_MAP.get(params.tag);
  if (!meta) return {};
  return {
    title: `Tag : ${meta.label}`,
    description: `Tous les articles, guides et actualités étiquetés « ${meta.label} » sur Nutriéa (${meta.count} entrées).`,
    alternates: { canonical: `${SITE}/tags/${params.tag}` },
    robots: { index: meta.count >= 2 },
  };
}

export default function TagPage({ params }: PageProps) {
  const meta = TAG_MAP.get(params.tag);
  if (!meta) notFound();

  const matches = [
    ...ALL_ARTICLES
      .filter((a) => (a.tags ?? []).some((t) => slugify(t) === params.tag))
      .map((a) => ({
        type: 'article' as const,
        url: `/${a.domain}/${a.category}/${a.slug}`,
        title: a.title,
        excerpt: a.excerpt,
        slug: a.slug,
        category: a.category,
        domain: a.domain,
      })),
    ...ALL_ACTUALITES
      .filter((a) => (a.tags ?? []).some((t) => slugify(t) === params.tag))
      .map((a) => ({
        type: 'actualite' as const,
        url: `/actualites/${a.slug}`,
        title: a.title,
        excerpt: a.excerpt,
        slug: a.slug,
        category: a.category,
        domain: undefined as string | undefined,
      })),
  ];

  return (
    <>
      <section className="hero-bg py-10 sm:py-14 border-b border-forest-100">
        <Container size="prose">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-sm text-forest-600 mb-6">
            <Link href="/" className="hover:text-forest-900 transition-colors">Accueil</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400" aria-hidden="true" />
            <Link href="/tags" className="hover:text-forest-900 transition-colors">Tags</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400" aria-hidden="true" />
            <span aria-current="page" className="text-forest-400">{meta.label}</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-sage-100 text-sage-700">
              <TagIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h1 className="font-display text-4xl sm:text-5xl text-forest-900 leading-tight">
              # {meta.label}
            </h1>
          </div>
          <p className="text-forest-700/85 leading-relaxed">
            {matches.length} article{matches.length > 1 ? 's' : ''} associé{matches.length > 1 ? 's' : ''} à ce mot-clé.
          </p>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container size="wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {matches.map((m) => {
              const img = getArticleImage(m.slug, m.category);
              return (
                <Link key={m.url} href={m.url} className="group block">
                  <Card hoverable className="h-full overflow-hidden flex flex-col">
                    <div className="relative h-36 overflow-hidden">
                      <ArticlePhoto src={img.src} alt={img.alt || m.title} ratio="16/9" compact />
                    </div>
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-forest-500/70 mb-1.5">
                        {m.type === 'actualite' ? 'Actualité' : m.domain} · {m.category}
                      </p>
                      <CardTitle className="text-base leading-snug group-hover:text-forest-700">{m.title}</CardTitle>
                      <p className="text-xs text-forest-700/80 mt-2 line-clamp-2 flex-1">{m.excerpt}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-600 mt-3 group-hover:gap-2 transition-all">
                        Lire <ArrowRight className="h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/tags" className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900">
              <ArrowLeft className="h-4 w-4" /> Tous les tags
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
