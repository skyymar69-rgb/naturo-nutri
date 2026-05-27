import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WarningBox, MedicalDisclaimer } from '@/components/ui/WarningBox';
import { ButtonLink } from '@/components/ui/Button';
import { getCategory } from '@/lib/categories';
import { getArticle, getArticlesByCategory, ALL_ARTICLES } from '@/lib/articles';

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
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticle('naturopathie', params.category, params.slug);
  if (!article) notFound();
  const cat = getCategory('naturopathie', params.category);

  const related = getArticlesByCategory('naturopathie', params.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <section className="grain-bg py-12 sm:py-16">
        <Container size="prose">
          <div className="flex items-center gap-2 text-sm text-forest-700/80 mb-6">
            <Link href="/naturopathie" className="hover:text-forest-900">Naturopathie</Link>
            <span>/</span>
            <Link href={`/naturopathie/${cat?.slug}`} className="hover:text-forest-900">
              {cat?.nom}
            </Link>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-900 leading-tight text-balance">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">{article.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1 text-sm text-forest-700/70">
              <Clock className="h-4 w-4" /> {article.readingTime} min de lecture
            </span>
            {article.tags?.map((t) => (
              <Badge key={t} variant="sage" className="text-[10px]">{t}</Badge>
            ))}
          </div>
        </Container>
      </section>

      <Container size="prose" className="py-12 space-y-10">
        <div className="prose-natural">
          <p className="text-lg leading-relaxed text-forest-800">{article.intro}</p>
        </div>

        {article.sections.map((s, i) => (
          <section key={i}>
            <h2 className="font-display text-2xl sm:text-3xl text-forest-900 mb-4 leading-tight">
              {s.heading}
            </h2>
            <div className="prose-natural">
              <p className="text-forest-800/90 leading-relaxed">{s.body}</p>
            </div>
          </section>
        ))}

        {article.keyPoints && article.keyPoints.length > 0 && (
          <Card accent="sage">
            <CardContent>
              <CardTitle className="text-lg mb-4">À retenir</CardTitle>
              <ul className="space-y-2">
                {article.keyPoints.map((k) => (
                  <li key={k} className="flex gap-2.5 text-forest-800/90 text-sm">
                    <span className="text-sage-600 font-bold mt-0.5">▸</span>
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {article.protocole && article.protocole.length > 0 && (
          <Card accent="forest">
            <CardContent>
              <CardTitle className="text-lg mb-4">Protocole pas à pas</CardTitle>
              <ol className="space-y-2 list-decimal pl-4">
                {article.protocole.map((p, i) => (
                  <li key={i} className="text-forest-800/90 text-sm leading-relaxed pl-2">{p}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
        )}

        {article.contre_indications && article.contre_indications.length > 0 && (
          <WarningBox variant="danger" title="Contre-indications">
            <ul className="space-y-1">
              {article.contre_indications.map((c) => (
                <li key={c}>• {c}</li>
              ))}
            </ul>
          </WarningBox>
        )}

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

        {related.length > 0 && (
          <section>
            <h2 className="font-display text-2xl text-forest-900 mb-6">À lire aussi</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/naturopathie/${r.category}/${r.slug}`} className="group">
                  <Card hoverable accent="cream">
                    <CardContent className="p-5">
                      <CardTitle className="text-sm leading-tight">{r.title}</CardTitle>
                      <p className="text-xs text-forest-700/70 mt-2 line-clamp-2">{r.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
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
