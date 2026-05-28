import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, ArrowLeft, ChevronRight, Calendar, FileText } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Alert } from '@/components/ui/Alert';
import { ButtonLink } from '@/components/ui/Button';
import { ArticleHero } from '@/components/ArticleHero';
import { ReadingProgress } from '@/components/ReadingProgress';
import { TableOfContents } from '@/components/TableOfContents';
import { ArticleShare } from '@/components/ArticleShare';
import { SourcedParagraph, SourcesList, ToneNotice } from '@/components/Sources';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import {
  ALL_ACTUALITES,
  getActualite,
  getActualitesByCategory,
  getActualiteCategoryMeta,
} from '@/lib/actualites';
import { slugify } from '@/lib/utils';

const SITE = 'https://naturo-nutri.vercel.app';

interface PageProps { params: { slug: string }; }

const HERO_CATEGORY: Record<string, string> = {
  vitamines: 'vitamines',
  mineraux: 'mineraux',
  'adaptogenes-plantes': 'adaptogenes',
  'microbiote-nutrition': 'probiotiques',
};

export function generateStaticParams() {
  return ALL_ACTUALITES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const a = getActualite(params.slug);
  if (!a) return {};
  const canonical = `${SITE}/actualites/${a.slug}`;
  const ogUrl = `${SITE}/api/og?cat=${a.category}&slug=${a.slug}`;
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title: a.title,
      description: a.excerpt,
      url: canonical,
      images: [{ url: ogUrl, width: 1200, height: 630, alt: a.title }],
      publishedTime: a.publishedAt,
      modifiedTime: a.updatedAt ?? a.publishedAt,
    },
    twitter: { card: 'summary_large_image', title: a.title, description: a.excerpt, images: [ogUrl] },
  };
}

export default function ActualitePage({ params }: PageProps) {
  const a = getActualite(params.slug);
  if (!a) notFound();
  const cat = getActualiteCategoryMeta(a.category);
  const heroCat = HERO_CATEGORY[a.category] ?? 'plantes';

  const allInCat = getActualitesByCategory(a.category);
  const otherInCat = allInCat.filter((x) => x.slug !== a.slug).slice(0, 3);

  const headings = a.sections.map((s) => s.heading);
  const url = `${SITE}/actualites/${a.slug}`;
  const ogImage = `${SITE}/api/og?cat=${a.category}&slug=${a.slug}`;

  return (
    <>
      <ReadingProgress />
      <ArticleJsonLd
        title={a.title}
        description={a.excerpt}
        datePublished={a.publishedAt}
        dateModified={a.updatedAt ?? a.publishedAt}
        url={url}
        imageUrl={ogImage}
        authorName="Nutriéa"
        readingTimeMin={a.readingTime}
      />
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Accueil', url: SITE },
          { name: 'Actualités', url: `${SITE}/actualites` },
          { name: cat?.nom ?? a.category, url: `${SITE}/actualites/categorie/${a.category}` },
          { name: a.title, url },
        ]}
      />

      {/* ── Hero header ──────────────────────────────────── */}
      <section className="hero-bg py-10 sm:py-14 border-b border-forest-100">
        <Container size="prose">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-sm text-forest-600 mb-6 flex-wrap">
            <Link href="/" className="hover:text-forest-900 transition-colors">Accueil</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400 flex-shrink-0" aria-hidden="true" />
            <Link href="/actualites" className="hover:text-forest-900 transition-colors">Actualités</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400 flex-shrink-0" aria-hidden="true" />
            <Link href={`/actualites/categorie/${a.category}`} className="hover:text-forest-900 transition-colors">{cat?.nom ?? a.category}</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400 flex-shrink-0" aria-hidden="true" />
            <span className="text-forest-400 truncate max-w-[160px]" aria-current="page">{a.title}</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-900 leading-tight text-balance">
            {a.title}
          </h1>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">{a.excerpt}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-sm text-forest-600 bg-white/70 border border-forest-100 rounded-full px-3 py-1">
              <Calendar className="h-3.5 w-3.5 text-sage-500" aria-hidden="true" />
              <time dateTime={a.publishedAt}>
                {new Date(a.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-forest-600 bg-white/70 border border-forest-100 rounded-full px-3 py-1">
              <Clock className="h-3.5 w-3.5 text-sage-500" aria-hidden="true" />
              {a.readingTime} min
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-sage-700 bg-sage-50 border border-sage-200 rounded-full px-3 py-1 font-semibold">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              {a.sources.length} source{a.sources.length > 1 ? 's' : ''} vérifiée{a.sources.length > 1 ? 's' : ''}
            </span>
            {a.tags?.map((t) => (
              <Badge key={t} variant="sage" className="text-[10px]">{t}</Badge>
            ))}
          </div>

          <div className="mt-5">
            <ArticleShare title={a.title} />
          </div>
        </Container>
      </section>

      {/* ── Hero illustration ────────────────────────────── */}
      <div className="w-full bg-forest-50">
        <Container size="prose" className="pt-8 pb-0">
          <figure className="relative w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-forest-100">
            <ArticleHero category={heroCat} slug={a.slug} alt={a.title} ratio="21/9" />
            <figcaption className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-forest-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                {cat?.icon} {cat?.nom}
              </span>
            </figcaption>
          </figure>
        </Container>
      </div>

      {/* ── Body + sticky TOC ────────────────────────────── */}
      <Container size="wide" className="py-12">
        <div className="grid lg:grid-cols-[1fr_220px] gap-12">
          <article className="max-w-3xl mx-auto lg:mx-0 w-full">
            <ToneNotice />

            <div className="prose-natural">
              <p className="text-lg leading-relaxed text-forest-800 border-l-4 border-sage-300 pl-5 py-1 bg-sage-50/50 rounded-r-xl drop-cap">
                {a.intro}
              </p>
            </div>

            {a.sections.map((s, i) => (
              <section key={i} id={slugify(s.heading)} className="scroll-mt-24 mt-10">
                <h2 className="font-display text-2xl sm:text-3xl text-forest-900 mb-4 leading-tight pb-2 border-b border-forest-100">
                  {s.heading}
                </h2>
                <SourcedParagraph text={s.body} sources={a.sources} className="text-forest-800/90 leading-relaxed" />
              </section>
            ))}

            <section id="a-retenir" className="scroll-mt-24 mt-10">
              <Alert variant="tip" title="À retenir">
                {a.takeaway}
              </Alert>
            </section>

            <SourcesList sources={a.sources} />

            <div className="mt-10 not-prose">
              <Alert variant="warning" title="Avertissement médical">
                Cet article propose une synthèse pédagogique. Il ne remplace pas un avis médical
                individualisé. Les contre-indications, interactions médicamenteuses et terrains
                particuliers doivent être discutés avec un professionnel de santé.
              </Alert>
            </div>

            <div className="mt-10">
              <ArticleShare title={a.title} />
            </div>

            {otherInCat.length > 0 && (
              <section className="mt-12" aria-labelledby="other-actualites">
                <h2 id="other-actualites" className="font-display text-2xl text-forest-900 mb-6">
                  Autres actualités · {cat?.nom}
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {otherInCat.map((o) => (
                    <Link key={o.slug} href={`/actualites/${o.slug}`} className="group">
                      <Card hoverable className="overflow-hidden h-full flex flex-col">
                        <div className="relative h-32 overflow-hidden">
                          <ArticleHero category={heroCat} slug={o.slug} alt={o.title} ratio="16/9" compact />
                        </div>
                        <CardContent className="p-4 flex-1">
                          <CardTitle className="text-sm leading-tight">{o.title}</CardTitle>
                          <p className="text-xs text-forest-700/70 mt-1.5 line-clamp-2">{o.excerpt}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <div className="text-center pt-10">
              <ButtonLink href="/actualites" variant="secondary">
                <ArrowLeft className="h-4 w-4" /> Toutes les actualités
              </ButtonLink>
            </div>
          </article>

          <aside className="hidden lg:block">
            <TableOfContents headings={headings} />
          </aside>
        </div>
      </Container>
    </>
  );
}
