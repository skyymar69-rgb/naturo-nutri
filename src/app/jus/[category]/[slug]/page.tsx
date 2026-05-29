import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WarningBox } from '@/components/ui/WarningBox';
import { Alert } from '@/components/ui/Alert';
import { ArticlePhoto } from '@/components/ArticlePhoto';
import { ReadingProgress } from '@/components/ReadingProgress';
import { ArticleShare } from '@/components/ArticleShare';
import { ArticleFeedback } from '@/components/ArticleFeedback';
import { CiteArticle } from '@/components/CiteArticle';
import { LastUpdated } from '@/components/LastUpdated';
import { BottomLegalNotice } from '@/components/LegalNotice';
import { KeyPointsBox } from '@/components/KeyPointsBox';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { JUS_CATEGORIES, getJusCategory } from '@/lib/jus-categories';
import { ALL_JUS, getJus, getJusByCategory } from '@/lib/jus';
import { getArticleImage } from '@/lib/article-images';
import { ArrowLeft, ChevronRight, Sprout, Clock, ListChecks, Hammer, BookOpen } from 'lucide-react';
import { ReferenceLivreInline } from '@/components/LivresReferences';
import { LIVRE_WALKER_JUS } from '@/lib/references-livres';

const SITE = 'https://naturo-nutri.vercel.app';

export function generateStaticParams() {
  return ALL_JUS.map((j) => ({ category: j.category, slug: j.slug }));
}

interface Props { params: { category: string; slug: string }; }

export function generateMetadata({ params }: Props): Metadata {
  const j = getJus(params.slug);
  if (!j) return {};
  return {
    title: j.nom,
    description: j.excerpt,
    alternates: { canonical: `${SITE}/jus/${params.category}/${params.slug}` },
    openGraph: {
      type: 'article',
      title: j.nom,
      description: j.excerpt,
      url: `${SITE}/jus/${params.category}/${params.slug}`,
    },
  };
}

const APPAREIL_LABEL: Record<string, string> = {
  extracteur: "Extracteur à vis (cold-press)",
  centrifugeuse: "Centrifugeuse",
  'les-deux': "Extracteur ou centrifugeuse",
  mortier: "Mortier / blender",
};

export default function JusPage({ params }: Props) {
  const j = getJus(params.slug);
  if (!j) notFound();
  const cat = getJusCategory(j.category);
  const img = getArticleImage(j.slug, 'alimentation');
  const url = `${SITE}/jus/${j.category}/${j.slug}`;
  const otherInCat = getJusByCategory(j.category).filter((x) => x.slug !== j.slug).slice(0, 3);

  return (
    <>
      <ReadingProgress />
      <ArticleJsonLd
        title={j.nom}
        description={j.excerpt}
        url={url}
        authorName="Nutriéa"
        readingTimeMin={3}
      />
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Accueil', url: SITE },
          { name: 'Les recettes de jus', url: `${SITE}/jus` },
          { name: cat?.nom ?? j.category, url: `${SITE}/jus/${j.category}` },
          { name: j.nom, url },
        ]}
      />

      <section className="hero-bg py-10 sm:py-14 border-b border-forest-100">
        <Container size="prose">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-sm text-forest-600 mb-6 flex-wrap">
            <Link href="/" className="hover:text-forest-900">Accueil</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400" />
            <Link href="/jus" className="hover:text-forest-900">Les recettes de jus</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400" />
            <Link href={`/jus/${j.category}`} className="hover:text-forest-900">{cat?.nom}</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400" />
            <span aria-current="page" className="text-forest-400 truncate max-w-[160px]">{j.nom}</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-900 leading-tight text-balance">
            {j.nom}
          </h1>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">{j.excerpt}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-sm text-forest-600 bg-white/70 border border-forest-100 rounded-full px-3 py-1">
              <Hammer className="h-3.5 w-3.5 text-sage-600" aria-hidden="true" />
              {APPAREIL_LABEL[j.appareil] ?? j.appareil}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-forest-600 bg-white/70 border border-forest-100 rounded-full px-3 py-1">
              <Clock className="h-3.5 w-3.5 text-sage-600" aria-hidden="true" />
              {j.frequence}
            </span>
            {j.walkerReference && (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-forest-700 px-3 py-1.5 rounded-full">
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                Méthode Walker
              </span>
            )}
            {j.tags?.map((t) => (
              <Badge key={t} variant="sage" className="text-[10px]">{t}</Badge>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <ArticleShare title={j.nom} />
            <LastUpdated date={j.updatedAt} />
          </div>
        </Container>
      </section>

      <div className="w-full bg-forest-50">
        <Container size="prose" className="pt-8 pb-0">
          <figure className="relative w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-forest-100">
            <ArticlePhoto src={img.src} alt={j.nom} ratio="21/9" priority />
            <figcaption className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-forest-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                {cat?.icon} {cat?.nom}
              </span>
            </figcaption>
          </figure>
        </Container>
      </div>

      <Container size="prose" className="py-12 space-y-8">
        <div className="prose-natural">
          <p className="text-lg leading-relaxed text-forest-800 border-l-4 border-sage-300 pl-5 py-1 bg-sage-50/50 rounded-r-xl drop-cap">
            {j.intro}
          </p>
        </div>

        {j.walkerReference && (
          <ReferenceLivreInline livre={LIVRE_WALKER_JUS} />
        )}

        <section>
          <h2 className="font-display text-2xl sm:text-3xl text-forest-900 mb-4 pb-2 border-b border-forest-100 flex items-center gap-2">
            <Sprout className="h-5 w-5 text-sage-600" aria-hidden="true" />
            Ingrédients
          </h2>
          <ul className="space-y-2 bg-cream-50 border border-forest-100 rounded-2xl p-5">
            {j.ingredients.map((it, i) => (
              <li key={i} className="flex justify-between gap-4 text-sm text-forest-800">
                <span className="font-medium">{it.item}</span>
                <span className="text-sage-700 font-semibold">{it.quantite}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl sm:text-3xl text-forest-900 mb-4 pb-2 border-b border-forest-100 flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-sage-600" aria-hidden="true" />
            Préparation
          </h2>
          <ol className="space-y-3">
            {j.preparation.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-forest-800/95 leading-relaxed">
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 grid place-items-center w-6 h-6 rounded-full bg-sage-500 text-white text-xs font-bold"
                >
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <KeyPointsBox items={j.benefices} title="Bénéfices traditionnellement attribués" />

        {j.contre_indications && j.contre_indications.length > 0 && (
          <WarningBox variant="danger" title="Contre-indications & précautions">
            <ul className="space-y-1">
              {j.contre_indications.map((c) => (
                <li key={c}>• {c}</li>
              ))}
            </ul>
          </WarningBox>
        )}

        {j.tradition && (
          <section>
            <h2 className="font-display text-2xl text-forest-900 mb-3">Origine & tradition</h2>
            <p className="text-forest-800/90 leading-relaxed">{j.tradition}</p>
          </section>
        )}

        <ArticleFeedback slug={j.slug} />
        <BottomLegalNotice />

        <div className="flex flex-wrap items-center gap-3">
          <ArticleShare title={j.nom} />
          <CiteArticle title={j.nom} url={url} updatedAt={j.updatedAt} />
        </div>

        {otherInCat.length > 0 && (
          <section>
            <h2 className="font-display text-2xl text-forest-900 mb-6">Autres recettes · {cat?.nom}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {otherInCat.map((o) => {
                const oImg = getArticleImage(o.slug, 'alimentation');
                return (
                  <Link key={o.slug} href={`/jus/${o.category}/${o.slug}`} className="group">
                    <Card hoverable className="overflow-hidden h-full flex flex-col">
                      <div className="relative h-32 overflow-hidden">
                        <ArticlePhoto src={oImg.src} alt={o.nom} ratio="16/9" compact />
                      </div>
                      <CardContent className="p-4 flex-1">
                        <CardTitle className="text-sm group-hover:text-forest-700">{o.nom}</CardTitle>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <div className="text-center pt-4">
          <Link href={`/jus/${j.category}`} className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900">
            <ArrowLeft className="h-4 w-4" /> Toutes les recettes — {cat?.nom}
          </Link>
        </div>
      </Container>
    </>
  );
}
