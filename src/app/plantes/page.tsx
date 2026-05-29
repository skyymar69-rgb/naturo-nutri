import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { ArticlePhoto } from '@/components/ArticlePhoto';
import { PLANTES_CATEGORIES } from '@/lib/plantes-categories';
import { ALL_PLANTES, countPlantesByCategory } from '@/lib/plantes';
import { getArticleImage } from '@/lib/article-images';
import { ArrowRight, Leaf, BookHeart } from 'lucide-react';

const SITE = 'https://naturo-nutri.vercel.app';

export const metadata: Metadata = {
  title: 'Les plantes qui soignent',
  description: "Encyclopédie raisonnée des plantes médicinales par indication thérapeutique : sommeil, stress, digestion, immunité, circulation, respiration, peau, sphère féminine.",
  alternates: { canonical: `${SITE}/plantes` },
};

export default function PlantesPage() {
  const total = ALL_PLANTES.length;
  return (
    <>
      <section className="hero-bg py-14 sm:py-20 border-b border-forest-100">
        <Container size="prose" className="text-center">
          <div className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-white/80 mb-5">
            <Leaf className="h-8 w-8 text-sage-600" aria-hidden="true" />
          </div>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sage-700 bg-white/70 px-3 py-1.5 rounded-full mb-4">
            Encyclopédie raisonnée · {total} plantes
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-900 leading-tight text-balance">
            Les plantes qui soignent
          </h1>
          <p className="mt-5 text-lg text-forest-700/85 leading-relaxed max-w-2xl mx-auto text-balance">
            Une approche organisée par indication — sommeil, stress, digestion, immunité, circulation,
            respiration, peau, sphère féminine. Chaque plante porte un niveau de preuve honnête, des
            posologies traditionnelles, des contre-indications explicites.
          </p>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container size="wide">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sage-700 mb-6">
            <BookHeart className="h-3.5 w-3.5" aria-hidden="true" />
            Explorer par indication
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLANTES_CATEGORIES.map((c) => {
              const n = countPlantesByCategory(c.slug);
              return (
                <Link key={c.slug} href={`/plantes/${c.slug}`} className="group block">
                  <div className="h-full bg-cream-50 hover:bg-forest-50 border border-forest-100 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-md card-glow">
                    <p className="text-2xl mb-2" aria-hidden="true">{c.icon}</p>
                    <h3 className="font-display text-lg text-forest-900 mb-1.5 group-hover:text-forest-700">{c.nom}</h3>
                    <p className="text-xs text-forest-700/80 leading-relaxed mb-2 line-clamp-3">{c.description}</p>
                    <p className="text-xs font-semibold text-sage-600">{n} plante{n > 1 ? 's' : ''}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-cream-50 py-14">
        <Container size="wide">
          <h2 className="font-display text-3xl sm:text-4xl text-forest-900 mb-8">Toutes les plantes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ALL_PLANTES.map((p) => {
              const img = getArticleImage(p.slug, 'plantes');
              return (
                <Link key={p.slug} href={`/plantes/${p.category}/${p.slug}`} className="group block">
                  <Card hoverable className="h-full overflow-hidden flex flex-col">
                    <div className="relative h-36 overflow-hidden">
                      <ArticlePhoto src={img.src} alt={p.nom} ratio="16/9" compact />
                    </div>
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-forest-500/70 mb-1">
                        {p.category}
                      </p>
                      <CardTitle className="text-base leading-snug group-hover:text-forest-700">{p.nom}</CardTitle>
                      <p className="text-xs italic text-forest-500 mt-0.5">{p.nomLatin}</p>
                      <p className="text-xs text-forest-700/80 mt-2 line-clamp-2 flex-1">{p.excerpt}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-600 mt-3 group-hover:gap-2 transition-all">
                        Découvrir <ArrowRight className="h-3 w-3" />
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
