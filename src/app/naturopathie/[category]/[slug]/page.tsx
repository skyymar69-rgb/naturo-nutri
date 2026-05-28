import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WarningBox, MedicalDisclaimer } from '@/components/ui/WarningBox';
import { ButtonLink } from '@/components/ui/Button';
import { getCategory } from '@/lib/categories';
import { getArticle, getArticlesByCategory, ALL_ARTICLES } from '@/lib/articles';
import { getArticleImage } from '@/lib/article-images';

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
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: img.src, alt: img.alt, width: 1200, height: 630 }],
    },
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticle('naturopathie', params.category, params.slug);
  if (!article) notFound();
  const cat = getCategory('naturopathie', params.category);
  const heroImg = getArticleImage(article.slug, article.category);

  const related = getArticlesByCategory('naturopathie', params.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      {/* ── Hero header ──────────────────────────────────────── */}
      <section className="hero-bg py-10 sm:py-14 border-b border-forest-100">
        <Container size="prose">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-sm text-forest-600 mb-6 flex-wrap">
            <Link href="/naturopathie" className="hover:text-forest-900 transition-colors">Naturopathie</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400 flex-shrink-0" />
            <Link href={`/naturopathie/${cat?.slug}`} className="hover:text-forest-900 transition-colors capitalize">
              {cat?.nom ?? params.category}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400 flex-shrink-0" />
            <span className="text-forest-400 truncate max-w-[160px]">{article.title}</span>
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
            {article.tags?.map((t) => (
              <Badge key={t} variant="sage" className="text-[10px]">{t}</Badge>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Hero image ───────────────────────────────────────── */}
      <div className="w-full bg-forest-50">
        <Container size="prose" className="pt-8 pb-0">
          <figure className="relative w-full overflow-hidden rounded-2xl shadow-lg">
            <div className="relative aspect-[16/9] sm:aspect-[21/9]">
              <Image
                src={heroImg.src}
                alt={heroImg.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover img-food"
              />
              {/* Subtle gradient overlay at the bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Optional category badge on image */}
            <figcaption className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-forest-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm capitalize">
                {cat?.nom ?? params.category}
              </span>
            </figcaption>
          </figure>
        </Container>
      </div>

      {/* ── Article content ───────────────────────────────────── */}
      <Container size="prose" className="py-12 space-y-10">

        {/* Intro */}
        <div className="prose-natural">
          <p className="text-lg leading-relaxed text-forest-800 border-l-4 border-sage-300 pl-5 py-1 bg-sage-50/50 rounded-r-xl">
            {article.intro}
          </p>
        </div>

        {/* Sections */}
        {article.sections.map((s, i) => (
          <section key={i}>
            <h2 className="font-display text-2xl sm:text-3xl text-forest-900 mb-4 leading-tight pb-2 border-b border-forest-100">
              {s.heading}
            </h2>
            <div className="prose-natural">
              <p className="text-forest-800/90 leading-relaxed">{s.body}</p>
            </div>
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
                    <span className="text-sage-600 font-bold mt-0.5 flex-shrink-0">▸</span>
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
          <section>
            <h2 className="font-display text-2xl sm:text-3xl text-forest-900 mb-6">Questions fréquentes</h2>
            <div className="space-y-4">
              {article.faq.map((q, i) => (
                <Card key={i} accent="cream">
                  <CardContent className="p-5">
                    <h3 className="font-display text-base text-forest-900 mb-2">{q.question}</h3>
                    <p className="text-sm text-forest-800/85 leading-relaxed">{q.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        <MedicalDisclaimer />

        {/* Related articles */}
        {related.length > 0 && (
          <section>
            <h2 className="font-display text-2xl text-forest-900 mb-6">À lire aussi</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => {
                const rImg = getArticleImage(r.slug, r.category);
                return (
                  <Link key={r.slug} href={`/naturopathie/${r.category}/${r.slug}`} className="group">
                    <Card hoverable accent="cream" className="overflow-hidden">
                      <div className="relative h-32 overflow-hidden">
                        <Image
                          src={rImg.src}
                          alt={rImg.alt}
                          fill
                          sizes="240px"
                          className="object-cover img-food group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <CardContent className="p-4">
                        <CardTitle className="text-sm leading-tight">{r.title}</CardTitle>
                        <p className="text-xs text-forest-700/70 mt-1.5 line-clamp-2">{r.excerpt}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <div className="text-center pt-8">
          <ButtonLink href={`/naturopathie/${cat?.slug}`} variant="secondary">
            <ArrowLeft className="h-4 w-4" /> Tous les articles {cat?.nom}
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
