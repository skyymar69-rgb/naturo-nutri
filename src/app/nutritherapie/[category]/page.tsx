import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { getCategory, NUTRI_CATEGORIES } from '@/lib/categories';
import { getArticlesByCategory } from '@/lib/articles';

export function generateStaticParams() {
  return NUTRI_CATEGORIES.filter((c) => c.slug !== 'principes').map((c) => ({ category: c.slug }));
}

interface PageProps {
  params: { category: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const cat = getCategory('nutritherapie', params.category);
  if (!cat) return {};
  return {
    title: `${cat.nom} — Nutrithérapie`,
    description: cat.description,
  };
}

export default function CategoryPage({ params }: PageProps) {
  const cat = getCategory('nutritherapie', params.category);
  if (!cat) notFound();

  const articles = getArticlesByCategory('nutritherapie', params.category);

  return (
    <>
      <section className="grain-bg py-16 sm:py-20">
        <Container>
          {/* Breadcrumb / back link */}
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <Link
              href="/nutritherapie"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 hover:text-forest-900 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Nutrithérapie
            </Link>
          </nav>

          <div className="flex items-start gap-6">
            {/* Emoji décoratif */}
            <span className="text-6xl shrink-0" aria-hidden="true">{cat.icon}</span>
            <div>
              <Badge variant="earth" className="mb-3">
                {articles.length} {articles.length > 1 ? 'articles' : 'article'}
              </Badge>
              <h1 className="font-display text-5xl sm:text-6xl text-forest-900 leading-tight">
                {cat.nom}
              </h1>
              <p className="mt-4 text-lg text-forest-700 leading-relaxed max-w-3xl">
                {cat.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12" aria-label={`Articles — ${cat.nom}`}>
        <Container>
          {articles.length === 0 ? (
            <p className="text-center text-forest-700 py-12">
              Articles à venir prochainement.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((art) => (
                <Link
                  key={art.slug}
                  href={`/nutritherapie/${cat.slug}/${art.slug}`}
                  className="group block"
                  aria-label={`${art.title} — ${art.readingTime} min de lecture`}
                >
                  <Card hoverable accent="earth" className="h-full">
                    <CardContent>
                      <CardTitle className="text-lg leading-tight">{art.title}</CardTitle>
                      <CardDescription className="mt-3 line-clamp-3 text-forest-700">
                        {art.excerpt}
                      </CardDescription>
                      <div className="mt-4 flex items-center gap-3 text-xs text-forest-700">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" aria-hidden="true" />
                          <span>{art.readingTime} min de lecture</span>
                        </span>
                      </div>
                      <div
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 group-hover:text-forest-900 transition-colors"
                        aria-hidden="true"
                      >
                        Lire l&apos;article
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
