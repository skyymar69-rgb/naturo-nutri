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
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { NaturopathieDisclaimer, BottomLegalNotice } from '@/components/LegalNotice';
import { KeyPointsBox } from '@/components/KeyPointsBox';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { PLANTES_CATEGORIES, getPlanteCategory } from '@/lib/plantes-categories';
import { ALL_PLANTES, getPlante, getPlantesByCategory } from '@/lib/plantes';
import { getArticleImage } from '@/lib/article-images';
import { ArrowLeft, ChevronRight, BookHeart, Leaf, ListChecks } from 'lucide-react';

const SITE = 'https://naturo-nutri.vercel.app';

export function generateStaticParams() {
  return ALL_PLANTES.map((p) => ({ category: p.category, slug: p.slug }));
}

interface Props { params: { category: string; slug: string }; }

export function generateMetadata({ params }: Props): Metadata {
  const p = getPlante(params.slug);
  if (!p) return {};
  return {
    title: `${p.nom} — ${p.nomLatin}`,
    description: p.excerpt,
    alternates: { canonical: `${SITE}/plantes/${params.category}/${params.slug}` },
    openGraph: {
      type: 'article',
      title: `${p.nom} — ${p.nomLatin}`,
      description: p.excerpt,
      url: `${SITE}/plantes/${params.category}/${params.slug}`,
    },
  };
}

export default function PlantePage({ params }: Props) {
  const p = getPlante(params.slug);
  if (!p) notFound();
  const cat = getPlanteCategory(p.category);
  const img = getArticleImage(p.slug, 'plantes');
  const url = `${SITE}/plantes/${p.category}/${p.slug}`;
  const otherInCat = getPlantesByCategory(p.category).filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <ReadingProgress />
      <ArticleJsonLd
        title={`${p.nom} — ${p.nomLatin}`}
        description={p.excerpt}
        url={url}
        authorName="Nutriéa"
        readingTimeMin={4}
      />
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Accueil', url: SITE },
          { name: 'Les plantes qui soignent', url: `${SITE}/plantes` },
          { name: cat?.nom ?? p.category, url: `${SITE}/plantes/${p.category}` },
          { name: p.nom, url },
        ]}
      />

      <section className="hero-bg py-10 sm:py-14 border-b border-forest-100">
        <Container size="prose">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-sm text-forest-600 mb-6 flex-wrap">
            <Link href="/" className="hover:text-forest-900">Accueil</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400" />
            <Link href="/plantes" className="hover:text-forest-900">Les plantes qui soignent</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400" />
            <Link href={`/plantes/${p.category}`} className="hover:text-forest-900">{cat?.nom}</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400" />
            <span aria-current="page" className="text-forest-400 truncate max-w-[160px]">{p.nom}</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-900 leading-tight text-balance">
            {p.nom}
          </h1>
          <p className="mt-1 text-lg italic text-forest-500">{p.nomLatin}</p>
          <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">{p.excerpt}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-sm text-forest-600 bg-white/70 border border-forest-100 rounded-full px-3 py-1">
              <BookHeart className="h-3.5 w-3.5 text-sage-600" aria-hidden="true" />
              Partie utilisée : <span className="font-semibold">{p.partieUtilisee}</span>
            </span>
            {p.evidence_level && <EvidenceBadge level={p.evidence_level} compact />}
            {p.tags?.map((t) => (
              <Badge key={t} variant="sage" className="text-[10px]">{t}</Badge>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <ArticleShare title={p.nom} />
            <LastUpdated date={p.updatedAt} />
          </div>
        </Container>
      </section>

      <div className="w-full bg-forest-50">
        <Container size="prose" className="pt-8 pb-0">
          <figure className="relative w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-forest-100">
            <ArticlePhoto src={img.src} alt={p.nom} ratio="21/9" priority />
            <figcaption className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-forest-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                {cat?.icon} {cat?.nom}
              </span>
            </figcaption>
          </figure>
        </Container>
      </div>

      <Container size="prose" className="py-12 space-y-8">
        <NaturopathieDisclaimer />

        {p.evidence_level && <EvidenceBadge level={p.evidence_level} />}

        <div className="prose-natural">
          <p className="text-lg leading-relaxed text-forest-800 border-l-4 border-sage-300 pl-5 py-1 bg-sage-50/50 rounded-r-xl drop-cap">
            {p.intro}
          </p>
        </div>

        <section>
          <h2 className="font-display text-2xl sm:text-3xl text-forest-900 mb-4 pb-2 border-b border-forest-100 flex items-center gap-2">
            <Leaf className="h-5 w-5 text-sage-600" aria-hidden="true" />
            Propriétés
          </h2>
          <ul className="space-y-2">
            {p.proprietes.map((it) => (
              <li key={it} className="flex gap-3 text-forest-800/90 text-sm leading-relaxed">
                <span aria-hidden="true" className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sage-500" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl sm:text-3xl text-forest-900 mb-4 pb-2 border-b border-forest-100 flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-sage-600" aria-hidden="true" />
            Indications principales
          </h2>
          <ul className="space-y-2">
            {p.indications.map((it) => (
              <li key={it} className="flex gap-3 text-forest-800/90 text-sm leading-relaxed">
                <span aria-hidden="true" className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-forest-500" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </section>

        <KeyPointsBox items={p.posologie} title="Posologie et formes" />

        {p.contre_indications && p.contre_indications.length > 0 && (
          <WarningBox variant="danger" title="Contre-indications & précautions">
            <ul className="space-y-1">
              {p.contre_indications.map((c) => (
                <li key={c}>• {c}</li>
              ))}
            </ul>
          </WarningBox>
        )}

        {p.precautions && (
          <Alert variant="warning" title="Précautions complémentaires">{p.precautions}</Alert>
        )}

        {p.associations && p.associations.length > 0 && (
          <Card accent="sage">
            <CardContent>
              <CardTitle className="text-lg mb-3">Associations recommandées</CardTitle>
              <div className="flex flex-wrap gap-2">
                {p.associations.map((a) => (
                  <span key={a} className="inline-flex items-center text-xs font-semibold text-sage-700 bg-sage-50 border border-sage-200 px-3 py-1 rounded-full">{a}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {p.tradition && (
          <section>
            <h2 className="font-display text-2xl text-forest-900 mb-3">Origine & tradition</h2>
            <p className="text-forest-800/90 leading-relaxed">{p.tradition}</p>
          </section>
        )}

        <ArticleFeedback slug={p.slug} />
        <BottomLegalNotice />

        <div className="flex flex-wrap items-center gap-3">
          <ArticleShare title={p.nom} />
          <CiteArticle title={p.nom} url={url} updatedAt={p.updatedAt} />
        </div>

        {otherInCat.length > 0 && (
          <section aria-labelledby="other">
            <h2 id="other" className="font-display text-2xl text-forest-900 mb-6">Autres plantes · {cat?.nom}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {otherInCat.map((o) => {
                const oImg = getArticleImage(o.slug, 'plantes');
                return (
                  <Link key={o.slug} href={`/plantes/${o.category}/${o.slug}`} className="group">
                    <Card hoverable className="overflow-hidden h-full flex flex-col">
                      <div className="relative h-32 overflow-hidden">
                        <ArticlePhoto src={oImg.src} alt={o.nom} ratio="16/9" compact />
                      </div>
                      <CardContent className="p-4 flex-1">
                        <CardTitle className="text-sm leading-tight group-hover:text-forest-700">{o.nom}</CardTitle>
                        <p className="text-xs italic text-forest-500 mt-0.5">{o.nomLatin}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <div className="text-center pt-4">
          <Link href={`/plantes/${p.category}`} className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900">
            <ArrowLeft className="h-4 w-4" /> Toutes les plantes — {cat?.nom}
          </Link>
        </div>
      </Container>
    </>
  );
}
