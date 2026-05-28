import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, ArrowLeft, ChevronRight, ChevronLeft, FileText } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Alert } from '@/components/ui/Alert';
import { WarningBox } from '@/components/ui/WarningBox';
import { ButtonLink } from '@/components/ui/Button';
import { ArticlePhoto } from '@/components/ArticlePhoto';
import { ReadingProgress } from '@/components/ReadingProgress';
import { TableOfContents } from '@/components/TableOfContents';
import { ArticleShare } from '@/components/ArticleShare';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { NaturopathieDisclaimer, TraditionNotice, BottomLegalNotice } from '@/components/LegalNotice';
import { SourcedParagraph, SourcesList } from '@/components/Sources';
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd';
import { getCategory } from '@/lib/categories';
import { getArticle, getArticlesByCategory, ALL_ARTICLES } from '@/lib/articles';
import { getArticleImage, getArticleOgImage } from '@/lib/article-images';
import { slugify } from '@/lib/utils';

const SITE = 'https://naturo-nutri.vercel.app';

export function generateStaticParams() {
  return ALL_ARTICLES
    .filter((a) => a.domain === 'naturopathie')
    .map((a) => ({ category: a.category, slug: a.slug }));
}

interface PageProps {
  params: { category: string; slug: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getArticle('naturopathie', params.category, params.slug);
  if (!article) return {};
  const img = getArticleImage(article.slug, article.category);
  const ogUrl = `${SITE}${getArticleOgImage(article.slug, article.category)}`;
  const canonical = `${SITE}/naturopathie/${params.category}/${params.slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      url: canonical,
      images: [{ url: ogUrl, alt: img.alt, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [ogUrl],
    },
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticle('naturopathie', params.category, params.slug);
  if (!article) notFound();
  const cat = getCategory('naturopathie', params.category);
  const heroImg = getArticleImage(article.slug, article.category);

  const allInCat = getArticlesByCategory('naturopathie', params.category);
  const currentIdx = allInCat.findIndex((a) => a.slug === article.slug);
  const prev = currentIdx > 0 ? allInCat[currentIdx - 1] : null;
  const next = currentIdx >= 0 && currentIdx < allInCat.length - 1 ? allInCat[currentIdx + 1] : null;

  const related = allInCat.filter((a) => a.slug !== article.slug).slice(0, 3);

  const headings = article.sections.map((s) => s.heading);
  const url = `${SITE}/naturopathie/${params.category}/${params.slug}`;
  const ogImage = `${SITE}${getArticleOgImage(article.slug, article.category)}`;

  // Default evidence level pour les articles non encore enrichis :
  // "tradition" → reflète honnêtement la situation (naturopathie traditionnelle, non validée).
  const evidenceLevel = article.evidence_level ?? 'tradition';
  const sources = article.sources ?? [];
  const hasSources = sources.length > 0;

  return (
    <>
      <ReadingProgress />
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        datePublished={article.updatedAt}
        url={url}
        imageUrl={ogImage}
        authorName="Nutriéa"
        readingTimeMin={article.readingTime}
      />
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Accueil', url: SITE },
          { name: 'Naturopathie', url: `${SITE}/naturopathie` },
          { name: cat?.nom ?? params.category, url: `${SITE}/naturopathie/${params.category}` },
          { name: article.title, url },
        ]}
      />
      {article.faq && article.faq.length > 0 && <FAQJsonLd faq={article.faq} />}

      {/* ── Hero header ──────────────────────────────────────── */}
      <section className="hero-bg py-10 sm:py-14 border-b border-forest-100">
        <Container size="prose">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-sm text-forest-600 mb-6 flex-wrap">
            <Link href="/" className="hover:text-forest-900 transition-colors">Accueil</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400 flex-shrink-0" aria-hidden="true" />
            <Link href="/naturopathie" className="hover:text-forest-900 transition-colors">Naturopathie</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400 flex-shrink-0" aria-hidden="true" />
            <Link href={`/naturopathie/${cat?.slug}`} className="hover:text-forest-900 transition-colors capitalize">
              {cat?.nom ?? params.category}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400 flex-shrink-0" aria-hidden="true" />
            <span className="text-forest-400 truncate max-w-[160px]" aria-current="page">{article.title}</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-900 leading-tight text-balance">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">{article.excerpt}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-sm text-forest-600 bg-white/70 border border-forest-100 rounded-full px-3 py-1">
              <Clock className="h-3.5 w-3.5 text-sage-500" aria-hidden="true" />
              {article.readingTime} min de lecture
            </span>
            <EvidenceBadge level={evidenceLevel} compact />
            {hasSources && (
              <span className="inline-flex items-center gap-1.5 text-sm text-sage-700 bg-sage-50 border border-sage-200 rounded-full px-3 py-1 font-semibold">
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                {sources.length} source{sources.length > 1 ? 's' : ''}
              </span>
            )}
            {article.tags?.map((t) => (
              <Badge key={t} variant="sage" className="text-[10px]">{t}</Badge>
            ))}
          </div>

          <div className="mt-5">
            <ArticleShare title={article.title} />
          </div>
        </Container>
      </section>

      {/* ── Hero illustration SVG ───────────────────────────── */}
      <div className="w-full bg-forest-50">
        <Container size="prose" className="pt-8 pb-0">
          <figure className="relative w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-forest-100">
            <ArticlePhoto src={heroImg.src} alt={heroImg.alt} ratio="21/9" priority />
            <figcaption className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-forest-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                {cat?.icon} {cat?.nom ?? params.category}
              </span>
            </figcaption>
          </figure>
        </Container>
      </div>

      {/* ── Article body with sticky TOC ──────────────────── */}
      <Container size="wide" className="py-12">
        <div className="grid lg:grid-cols-[1fr_220px] gap-12">
          <article className="max-w-3xl mx-auto lg:mx-0 w-full space-y-10">

            {/* Disclaimer juridique en tête */}
            <NaturopathieDisclaimer />

            {/* Notice tradition si applicable */}
            {(evidenceLevel === 'tradition' || evidenceLevel === 'no-data') && <TraditionNotice />}

            {/* Niveau de preuve détaillé */}
            <EvidenceBadge level={evidenceLevel} />

            {/* Note État des connaissances */}
            {article.evidence_note && (
              <Alert variant="info" title="État actuel des connaissances">
                {article.evidence_note}
              </Alert>
            )}

            {/* Intro */}
            <div className="prose-natural">
              <p className="text-lg leading-relaxed text-forest-800 border-l-4 border-sage-300 pl-5 py-1 bg-sage-50/50 rounded-r-xl drop-cap">
                {article.intro}
              </p>
            </div>

            {/* Sections — avec rendu sourcé si sources présentes */}
            {article.sections.map((s, i) => (
              <section key={i} id={slugify(s.heading)} className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl text-forest-900 mb-4 leading-tight pb-2 border-b border-forest-100">
                  {s.heading}
                </h2>
                {hasSources ? (
                  <SourcedParagraph
                    text={s.body}
                    sources={sources}
                    className="text-forest-800/90 leading-relaxed"
                  />
                ) : (
                  <div className="prose-natural">
                    <p className="text-forest-800/90 leading-relaxed">{s.body}</p>
                  </div>
                )}
              </section>
            ))}

            {/* Key points */}
            {article.keyPoints && article.keyPoints.length > 0 && (
              <Card accent="sage">
                <CardContent>
                  <CardTitle className="text-lg mb-4">À retenir</CardTitle>
                  <ul className="space-y-2">
                    {article.keyPoints.map((k) => (
                      <li key={k} className="flex gap-2.5 text-forest-800/90 text-sm">
                        <span className="text-sage-600 font-bold mt-0.5 flex-shrink-0" aria-hidden="true">▸</span>
                        <span>{k}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Protocole */}
            {article.protocole && article.protocole.length > 0 && (
              <Card accent="forest">
                <CardContent>
                  <CardTitle className="text-lg mb-4">Protocole pas à pas</CardTitle>
                  <ol className="space-y-2 list-decimal pl-4">
                    {article.protocole.map((step, i) => (
                      <li key={i} className="text-forest-800/90 text-sm leading-relaxed pl-2">{step}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            )}

            {/* Contre-indications */}
            {article.contre_indications && article.contre_indications.length > 0 && (
              <WarningBox variant="danger" title="Contre-indications">
                <ul className="space-y-1">
                  {article.contre_indications.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>
              </WarningBox>
            )}

            {/* FAQ */}
            {article.faq && article.faq.length > 0 && (
              <section id="faq" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl text-forest-900 mb-6">Questions fréquentes</h2>
                <div className="space-y-3">
                  {article.faq.map((q, i) => (
                    <details key={i} className="group bg-cream-50 border border-forest-100 rounded-2xl overflow-hidden open:shadow-sm">
                      <summary className="cursor-pointer list-none px-5 py-4 flex items-start justify-between gap-3 font-display text-base text-forest-900 hover:bg-cream-100/60 transition-colors">
                        <span>{q.question}</span>
                        <ChevronRight className="h-4 w-4 text-forest-500 flex-shrink-0 mt-1 transition-transform group-open:rotate-90" aria-hidden="true" />
                      </summary>
                      <div className="px-5 pb-5 text-sm text-forest-800/85 leading-relaxed">{q.answer}</div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Bibliographie si sources */}
            {hasSources && <SourcesList sources={sources} />}

            {/* Notice juridique pied d'article */}
            <BottomLegalNotice />

            <ArticleShare title={article.title} />

            {(prev || next) && (
              <nav aria-label="Article précédent et suivant" className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-forest-100">
                {prev ? (
                  <Link
                    href={`/naturopathie/${prev.category}/${prev.slug}`}
                    className="group bg-cream-50 hover:bg-forest-50 border border-forest-100 rounded-2xl p-4 transition-colors"
                  >
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-forest-500 mb-1">
                      <ChevronLeft className="h-3 w-3" /> Précédent
                    </p>
                    <p className="font-display text-base text-forest-900 leading-snug group-hover:text-forest-700">{prev.title}</p>
                  </Link>
                ) : <div />}
                {next ? (
                  <Link
                    href={`/naturopathie/${next.category}/${next.slug}`}
                    className="group bg-cream-50 hover:bg-forest-50 border border-forest-100 rounded-2xl p-4 text-right transition-colors"
                  >
                    <p className="flex items-center justify-end gap-1.5 text-xs font-semibold uppercase tracking-wide text-forest-500 mb-1">
                      Suivant <ChevronRight className="h-3 w-3" />
                    </p>
                    <p className="font-display text-base text-forest-900 leading-snug group-hover:text-forest-700">{next.title}</p>
                  </Link>
                ) : <div />}
              </nav>
            )}

            {related.length > 0 && (
              <section aria-labelledby="related-title">
                <h2 id="related-title" className="font-display text-2xl text-forest-900 mb-6">À lire aussi</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {related.map((r) => {
                    const rImg = getArticleImage(r.slug, r.category);
                    return (
                      <Link key={r.slug} href={`/naturopathie/${r.category}/${r.slug}`} className="group">
                        <Card hoverable accent="cream" className="overflow-hidden h-full flex flex-col">
                          <div className="relative h-32 overflow-hidden">
                            <ArticlePhoto src={rImg.src} alt={rImg.alt} ratio="16/9" compact />
                          </div>
                          <CardContent className="p-4 flex-1">
                            <CardTitle className="text-sm leading-tight">{r.title}</CardTitle>
                            <p className="text-xs text-forest-700/70 mt-1.5 line-clamp-2">{r.excerpt}</p>
                            {r.evidence_level && (
                              <div className="mt-2">
                                <EvidenceBadge level={r.evidence_level} compact />
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

            <div className="text-center pt-4">
              <ButtonLink href={`/naturopathie/${cat?.slug}`} variant="secondary">
                <ArrowLeft className="h-4 w-4" /> Tous les articles {cat?.nom}
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
