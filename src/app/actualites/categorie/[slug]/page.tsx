import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { ArticlePhoto } from '@/components/ArticlePhoto';
import { getArticleImage } from '@/lib/article-images';
import { ACTUALITE_CATEGORIES, getActualitesByCategory } from '@/lib/actualites';
import type { ActualiteCategory } from '@/lib/types';
import { Calendar, Clock, FileText, ArrowLeft, ArrowRight } from 'lucide-react';

const SITE = 'https://naturo-nutri.vercel.app';

interface PageProps { params: { slug: string }; }

const HERO_CATEGORY: Record<string, string> = {
  vitamines: 'vitamines',
  mineraux: 'mineraux',
  'adaptogenes-plantes': 'adaptogenes',
  'microbiote-nutrition': 'probiotiques',
};

export function generateStaticParams() {
  return ACTUALITE_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const cat = ACTUALITE_CATEGORIES.find((c) => c.slug === params.slug);
  if (!cat) return {};
  const canonical = `${SITE}/actualites/categorie/${cat.slug}`;
  return {
    title: `Actualités · ${cat.nom}`,
    description: cat.description,
    alternates: { canonical },
    openGraph: { title: `Actualités · ${cat.nom}`, description: cat.description, url: canonical },
  };
}

export default function ActualiteCategoryPage({ params }: PageProps) {
  const cat = ACTUALITE_CATEGORIES.find((c) => c.slug === params.slug);
  if (!cat) notFound();
  const articles = getActualitesByCategory(cat.slug as ActualiteCategory);
  const heroCat = HERO_CATEGORY[cat.slug] ?? 'plantes';

  return (
    <>
      <section className="hero-bg py-10 sm:py-14 border-b border-forest-100">
        <Container size="prose">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-sm text-forest-600 mb-6 flex-wrap">
            <Link href="/" className="hover:text-forest-900 transition-colors">Accueil</Link>
            <span className="text-forest-400" aria-hidden="true">›</span>
            <Link href="/actualites" className="hover:text-forest-900 transition-colors">Actualités</Link>
            <span className="text-forest-400" aria-hidden="true">›</span>
            <span className="text-forest-400" aria-current="page">{cat.nom}</span>
          </nav>
          <p className="text-3xl mb-3" aria-hidden="true">{cat.icon}</p>
          <h1 className="font-display text-4xl sm:text-5xl text-forest-900 leading-tight">{cat.nom}</h1>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">{cat.description}</p>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container size="wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((a) => (
              <Link key={a.slug} href={`/actualites/${a.slug}`} className="group block">
                <Card hoverable className="h-full overflow-hidden flex flex-col">
                  <div className="relative h-36 overflow-hidden">
                    <ArticlePhoto src={getArticleImage(a.slug, heroCat).src} alt={a.title} ratio="16/9" compact />
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col">
                    <CardTitle className="text-base leading-snug group-hover:text-forest-700">{a.title}</CardTitle>
                    <p className="text-xs text-forest-700/80 mt-2 line-clamp-3 flex-1">{a.excerpt}</p>
                    <div className="mt-3 flex items-center gap-3 text-[11px] text-forest-500">
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(a.publishedAt).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{a.readingTime} min</span>
                      <span className="inline-flex items-center gap-1 text-sage-600 font-semibold"><FileText className="h-3 w-3" />{a.sources.length}</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-600 mt-3 group-hover:gap-2 transition-all">
                      Lire <ArrowRight className="h-3 w-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/actualites" className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900">
              <ArrowLeft className="h-4 w-4" /> Toutes les actualités
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
