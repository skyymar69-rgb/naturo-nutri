import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { ArticlePhoto } from '@/components/ArticlePhoto';
import { JUS_CATEGORIES, getJusCategory } from '@/lib/jus-categories';
import { getJusByCategory } from '@/lib/jus';
import { getArticleImage } from '@/lib/article-images';
import type { JusCategory } from '@/lib/types';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';

const SITE = 'https://naturo-nutri.vercel.app';

export function generateStaticParams() {
  return JUS_CATEGORIES.map((c) => ({ category: c.slug }));
}

interface Props { params: { category: string }; }

export function generateMetadata({ params }: Props): Metadata {
  const cat = getJusCategory(params.category);
  if (!cat) return {};
  return {
    title: cat.nom,
    description: cat.description,
    alternates: { canonical: `${SITE}/jus/${params.category}` },
  };
}

export default function JusCategoryPage({ params }: Props) {
  const cat = getJusCategory(params.category);
  if (!cat) notFound();
  const recipes = getJusByCategory(cat.slug as JusCategory);

  return (
    <>
      <section className="hero-bg py-10 sm:py-14 border-b border-forest-100">
        <Container size="prose">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-sm text-forest-600 mb-6 flex-wrap">
            <Link href="/" className="hover:text-forest-900">Accueil</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400" />
            <Link href="/jus" className="hover:text-forest-900">Les recettes de jus</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400" />
            <span aria-current="page" className="text-forest-400">{cat.nom}</span>
          </nav>
          <p className="text-3xl mb-3" aria-hidden="true">{cat.icon}</p>
          <h1 className="font-display text-4xl sm:text-5xl text-forest-900 leading-tight">{cat.nom}</h1>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">{cat.description}</p>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container size="wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recipes.map((r) => {
              const img = getArticleImage(r.slug, 'alimentation');
              return (
                <Link key={r.slug} href={`/jus/${cat.slug}/${r.slug}`} className="group block">
                  <Card hoverable className="h-full overflow-hidden flex flex-col">
                    <div className="relative h-40 overflow-hidden">
                      <ArticlePhoto src={img.src} alt={r.nom} ratio="16/9" compact />
                      {r.walkerReference && (
                        <span className="absolute top-2 right-2 bg-forest-700 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                          Walker
                        </span>
                      )}
                    </div>
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <CardTitle className="text-base group-hover:text-forest-700">{r.nom}</CardTitle>
                      <p className="text-xs text-forest-700/80 mt-2 line-clamp-3 flex-1">{r.excerpt}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-600 mt-3 group-hover:gap-2 transition-all">
                        Voir la recette <ArrowRight className="h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/jus" className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900">
              <ArrowLeft className="h-4 w-4" /> Toutes les catégories
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
