import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
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
          <Link
            href="/nutritherapie"
            className="text-sm text-forest-700/80 hover:text-forest-900 mb-4 inline-block"
          >
            ← Nutrithérapie
          </Link>
          <div className="flex items-start gap-6">
            <span className="text-6xl">{cat.icon}</span>
            <div>
              <Badge variant="earth" className="mb-3">{articles.length} {articles.length > 1 ? 'articles' : 'article'}</Badge>
              <h1 className="font-display text-5xl sm:text-6xl text-forest-900 leading-tight">
                {cat.nom}
              </h1>
              <p className="mt-4 text-lg text-forest-700/85 leading-relaxed max-w-3xl">
                {cat.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          {articles.length === 0 ? (
            <p className="text-center text-forest-700/70 py-12">
              Articles à venir prochainement.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((art) => (
                <Link
                  key={art.slug}
                  href={`/nutritherapie/${cat.slug}/${art.slug}`}
                  className="group block"
                >
                  <Card hoverable accent="earth" className="h-full">
                    <CardContent>
                      <CardTitle className="text-lg leading-tight">{art.title}</CardTitle>
                      <CardDescription className="mt-3 line-clamp-3">{art.excerpt}</CardDescription>
                      <div className="mt-4 flex items-center gap-3 text-xs text-forest-700/70">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {art.readingTime} min
                        </span>
                      </div>
                      <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 group-hover:text-forest-900">
                        Lire <ArrowRight className="h-3 w-3" />
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
