import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArticlePhoto } from '@/components/ArticlePhoto';
import { getArticleImage } from '@/lib/article-images';
import { ALL_ACTUALITES, ACTUALITE_CATEGORIES, countByActualiteCategory } from '@/lib/actualites';
import { BookOpen, FileText, Calendar, Clock, ArrowRight } from 'lucide-react';

const SITE = 'https://naturo-nutri.vercel.app';

export const metadata: Metadata = {
  title: 'Actualités — synthèses sourcées sur PubMed',
  description:
    "Articles d'actualité sur la naturopathie et la nutrithérapie, chaque affirmation rattachée à une référence PubMed, EFSA ou un essai randomisé.",
  alternates: { canonical: `${SITE}/actualites` },
  openGraph: {
    title: 'Actualités — Nutriéa',
    description: "Synthèses scientifiques sourcées avec citations PubMed sur la naturopathie et la nutrithérapie.",
    url: `${SITE}/actualites`,
    images: [{ url: '/api/og', width: 1200, height: 630 }],
  },
};

/* Map actualite category → article-hero category (réutilise les illustrations SVG) */
const HERO_CATEGORY: Record<string, string> = {
  vitamines: 'vitamines',
  mineraux: 'mineraux',
  'adaptogenes-plantes': 'adaptogenes',
  'microbiote-nutrition': 'probiotiques',
};

export default function ActualitesPage() {
  const total = ALL_ACTUALITES.length;
  const totalSources = ALL_ACTUALITES.reduce((acc, a) => acc + a.sources.length, 0);
  const totalPmid = ALL_ACTUALITES.reduce(
    (acc, a) => acc + a.sources.filter((s) => s.pmid).length,
    0,
  );

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="hero-bg py-14 sm:py-20 border-b border-forest-100">
        <Container size="prose" className="text-center">
          <p className="inline-flex items-center gap-2 bg-white/80 border border-sage-200 text-sage-700 text-xs font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-6 shadow-sm">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            Blog scientifique sourcé
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-900 leading-tight text-balance">
            Actualités
          </h1>
          <p className="mt-5 text-lg text-forest-700/85 leading-relaxed max-w-2xl mx-auto text-balance">
            Synthèses prudentes sur les sujets de naturopathie et nutrithérapie&nbsp;:
            chaque affirmation est rattachée à une référence vérifiable
            (PubMed, méta-analyse, essai randomisé). Ton conditionnel obligatoire — pas
            d'affirmation médicale absolue.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="bg-white/70 border border-forest-100 rounded-xl py-3">
              <p className="font-display text-2xl text-forest-900">{total}</p>
              <p className="text-xs text-forest-600 mt-0.5">Articles</p>
            </div>
            <div className="bg-white/70 border border-forest-100 rounded-xl py-3">
              <p className="font-display text-2xl text-forest-900">{totalSources}</p>
              <p className="text-xs text-forest-600 mt-0.5">Sources</p>
            </div>
            <div className="bg-white/70 border border-forest-100 rounded-xl py-3">
              <p className="font-display text-2xl text-forest-900">{totalPmid}</p>
              <p className="text-xs text-forest-600 mt-0.5">PMID vérifiés</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Catégories ────────────────────────────────────── */}
      <section className="bg-white py-12 sm:py-16">
        <Container size="wide">
          <h2 className="font-display text-2xl sm:text-3xl text-forest-900 mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-sage-600" aria-hidden="true" />
            Explorer par thème
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACTUALITE_CATEGORIES.map((c) => {
              const count = countByActualiteCategory(c.slug);
              return (
                <Link key={c.slug} href={`/actualites/categorie/${c.slug}`} className="group">
                  <div className="h-full bg-cream-50 hover:bg-forest-50 border border-forest-100 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-md card-glow">
                    <p className="text-2xl mb-2" aria-hidden="true">{c.icon}</p>
                    <h3 className="font-display text-lg text-forest-900 mb-1.5 group-hover:text-forest-700">{c.nom}</h3>
                    <p className="text-xs text-forest-700/80 leading-relaxed mb-2">{c.description}</p>
                    <p className="text-xs font-semibold text-sage-600">{count} article{count > 1 ? 's' : ''}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Liste complète ────────────────────────────────── */}
      <section className="bg-cream-50 py-12 sm:py-16">
        <Container size="wide">
          <h2 className="font-display text-2xl sm:text-3xl text-forest-900 mb-8">Tous les articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ALL_ACTUALITES.map((a) => {
              const cat = ACTUALITE_CATEGORIES.find((c) => c.slug === a.category);
              const heroCat = HERO_CATEGORY[a.category] ?? 'plantes';
              return (
                <Link key={a.slug} href={`/actualites/${a.slug}`} className="group block">
                  <Card hoverable className="h-full overflow-hidden flex flex-col">
                    <div className="relative h-36 overflow-hidden">
                      <ArticlePhoto src={getArticleImage(a.slug, heroCat).src} alt={a.title} ratio="16/9" compact />
                      <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-forest-800 text-[10px] font-semibold px-2 py-1 rounded-full shadow-sm">
                        {cat?.icon} {cat?.nom}
                      </span>
                    </div>
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <CardTitle className="text-base leading-snug group-hover:text-forest-700">{a.title}</CardTitle>
                      <p className="text-xs text-forest-700/80 mt-2 line-clamp-3 flex-1">{a.excerpt}</p>
                      <div className="mt-3 flex items-center gap-3 text-[11px] text-forest-500">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3" aria-hidden="true" />
                          {new Date(a.publishedAt).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" aria-hidden="true" />
                          {a.readingTime} min
                        </span>
                        <span className="inline-flex items-center gap-1 text-sage-600 font-semibold">
                          <FileText className="h-3 w-3" aria-hidden="true" />
                          {a.sources.length} src
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-600 mt-3 group-hover:gap-2 transition-all">
                        Lire <ArrowRight className="h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
