import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Alert } from '@/components/ui/Alert';
import { ArticlePhoto } from '@/components/ArticlePhoto';
import { JUS_CATEGORIES } from '@/lib/jus-categories';
import { ALL_JUS, countJusByCategory } from '@/lib/jus';
import { getArticleImage } from '@/lib/article-images';
import { ArrowRight, Sprout, BookOpen } from 'lucide-react';
import { LivresReferences } from '@/components/LivresReferences';

const SITE = 'https://naturo-nutri.vercel.app';

export const metadata: Metadata = {
  title: 'Les recettes de jus',
  description: "Recettes de jus santé inspirées de Norman W. Walker et de la naturopathie. Extracteur ou centrifugeuse, par indication : drainage, énergie, immunité, digestion, peau, sport.",
  alternates: { canonical: `${SITE}/jus` },
};

export default function JusPage() {
  const total = ALL_JUS.length;
  return (
    <>
      <section className="hero-bg py-14 sm:py-20 border-b border-forest-100">
        <Container size="prose" className="text-center">
          <div className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-white/80 mb-5">
            <Sprout className="h-8 w-8 text-sage-600" aria-hidden="true" />
          </div>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sage-700 bg-white/70 px-3 py-1.5 rounded-full mb-4">
            Tradition Walker · {total} recettes
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-900 leading-tight text-balance">
            Les recettes de jus
          </h1>
          <p className="mt-5 text-lg text-forest-700/85 leading-relaxed max-w-2xl mx-auto text-balance">
            Jus de légumes et de fruits frais inspirés de l'œuvre fondatrice de
            <strong className="text-forest-900"> Norman W. Walker</strong> (« Fresh Vegetable and Fruit Juices », 1936),
            organisés par indication et adaptés aux appareils modernes — extracteur ou centrifugeuse.
          </p>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <Container size="prose">
          <Alert variant="tip" title="Extracteur ou centrifugeuse ?">
            <p className="mb-2">
              L'<strong>extracteur à vis</strong> (cold-press) presse les ingrédients lentement et préserve mieux les
              enzymes, vitamines thermosensibles et chlorophylle. C'est ce que Norman Walker préconisait via son
              Norwalk Press (pressage en deux temps).
            </p>
            <p>
              La <strong>centrifugeuse</strong> est plus rapide et plus abordable, mais l'oxydation y est plus marquée :
              il est traditionnellement recommandé de boire le jus dans les 15 minutes après extraction. La majorité de
              nos recettes fonctionnent avec les deux types d'appareils.
            </p>
          </Alert>

          <div className="mt-8 bg-forest-50/60 border border-forest-100 rounded-2xl p-6">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-700 mb-2">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              À propos de Norman W. Walker
            </p>
            <p className="text-sm text-forest-800 leading-relaxed">
              Pionnier américano-britannique du jus de légumes frais, Walker (1886–1985) a publié dans les années 1930
              un ouvrage fondateur — « Raw Vegetable Juices: What's Missing in Your Body? » — qui propose des
              combinaisons spécifiques par indication. La majorité de ses formules relèvent d'un usage traditionnel ;
              certaines (céleri, cresson, persil) ont depuis fait l'objet de travaux scientifiques modernes. Nous
              indiquons systématiquement les références Walker pour les recettes qui en sont directement issues.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-cream-50 py-12 sm:py-16">
        <Container size="wide">
          <h2 className="font-display text-3xl text-forest-900 mb-6">Explorer par indication</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {JUS_CATEGORIES.map((c) => {
              const n = countJusByCategory(c.slug);
              return (
                <Link key={c.slug} href={`/jus/${c.slug}`} className="group block">
                  <div className="h-full bg-white hover:bg-forest-50 border border-forest-100 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-md card-glow">
                    <p className="text-2xl mb-2" aria-hidden="true">{c.icon}</p>
                    <h3 className="font-display text-lg text-forest-900 mb-1.5 group-hover:text-forest-700">{c.nom}</h3>
                    <p className="text-xs text-forest-700/80 leading-relaxed mb-2 line-clamp-3">{c.description}</p>
                    <p className="text-xs font-semibold text-sage-600">{n} recette{n > 1 ? 's' : ''}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container size="prose">
          <LivresReferences domaine="jus" title="Sources éditoriales — Norman W. Walker et au-delà" />
        </Container>
      </section>

      <section className="bg-white pb-14">
        <Container size="wide">
          <h2 className="font-display text-3xl text-forest-900 mb-8">Toutes les recettes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ALL_JUS.map((j) => {
              const img = getArticleImage(j.slug, 'alimentation');
              return (
                <Link key={j.slug} href={`/jus/${j.category}/${j.slug}`} className="group block">
                  <Card hoverable className="h-full overflow-hidden flex flex-col">
                    <div className="relative h-36 overflow-hidden">
                      <ArticlePhoto src={img.src} alt={j.nom} ratio="16/9" compact />
                      {j.walkerReference && (
                        <span className="absolute top-2 right-2 bg-forest-700 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                          Walker
                        </span>
                      )}
                    </div>
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-forest-500/70 mb-1">{j.category}</p>
                      <CardTitle className="text-base group-hover:text-forest-700">{j.nom}</CardTitle>
                      <p className="text-xs text-forest-700/80 mt-2 line-clamp-3 flex-1">{j.excerpt}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-600 mt-3 group-hover:gap-2 transition-all">
                        Voir la recette <ArrowRight className="h-3 w-3" />
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
