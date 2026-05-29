import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Alert } from '@/components/ui/Alert';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { PATHOLOGIES, getPathologie, PATHOLOGIE_GROUPES } from '@/lib/pathologies';
import { aggregateByPathologie, type PathologieResult, type ResultType } from '@/lib/pathologie-search';
import { Stethoscope, ChevronRight, ArrowLeft, ArrowRight, FileText, Leaf, BookOpen, GlassWater, Sprout } from 'lucide-react';

const SITE = 'https://naturo-nutri.vercel.app';

export function generateStaticParams() {
  return PATHOLOGIES.map((p) => ({ slug: p.slug }));
}

interface Props { params: { slug: string }; }

export function generateMetadata({ params }: Props): Metadata {
  const p = getPathologie(params.slug);
  if (!p) return {};
  return {
    title: `${p.nom} — ressources Nutriéa`,
    description: `Articles, plantes, recettes et actualités sourcées relatifs à : ${p.description}`,
    alternates: { canonical: `${SITE}/outils/par-pathologie/${params.slug}` },
    robots: { index: true, follow: true },
  };
}

const TYPE_META: Record<ResultType, { label: string; icon: typeof FileText; bg: string; color: string }> = {
  actualite:                { label: 'Actualité sourcée', icon: FileText,   bg: 'bg-sage-100',   color: 'text-sage-700' },
  plante:                   { label: 'Plante médicinale', icon: Leaf,       bg: 'bg-forest-100', color: 'text-forest-700' },
  'article-naturopathie':   { label: 'Naturopathie',      icon: Sprout,     bg: 'bg-cream-100',  color: 'text-forest-800' },
  'article-nutritherapie':  { label: 'Nutrithérapie',     icon: BookOpen,   bg: 'bg-earth-50',   color: 'text-earth-700' },
  jus:                      { label: 'Recette de jus',    icon: GlassWater, bg: 'bg-forest-50',  color: 'text-forest-700' },
};

function groupByType(results: PathologieResult[]) {
  const groups = new Map<ResultType, PathologieResult[]>();
  for (const r of results) {
    const arr = groups.get(r.type) ?? [];
    arr.push(r);
    groups.set(r.type, arr);
  }
  return groups;
}

const TYPE_ORDER: ResultType[] = ['actualite', 'plante', 'article-nutritherapie', 'article-naturopathie', 'jus'];

export default function PathologiePage({ params }: Props) {
  const p = getPathologie(params.slug);
  if (!p) notFound();
  const groupe = PATHOLOGIE_GROUPES.find((g) => g.slug === p.groupe);
  const results = aggregateByPathologie(p, 60);
  const grouped = groupByType(results);

  return (
    <>
      <section className="hero-bg py-10 sm:py-14 border-b border-forest-100">
        <Container size="prose">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-sm text-forest-600 mb-6 flex-wrap">
            <Link href="/" className="hover:text-forest-900">Accueil</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400" />
            <Link href="/outils/par-pathologie" className="hover:text-forest-900">Par pathologie</Link>
            <ChevronRight className="h-3.5 w-3.5 text-forest-400" />
            <span aria-current="page" className="text-forest-400">{p.nom}</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-white/80 text-sage-700">
              <Stethoscope className="h-6 w-6" aria-hidden="true" />
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-900 leading-tight">{p.nom}</h1>
          </div>
          <p className="mt-2 text-lg text-forest-700/85 leading-relaxed">{p.description}</p>
          <p className="mt-4 text-sm text-forest-600">
            {groupe && (<span className="inline-flex items-center gap-1.5 bg-white/70 border border-forest-100 rounded-full px-3 py-1 mr-2"><span aria-hidden="true">{groupe.icon}</span>{groupe.nom}</span>)}
            <span className="text-sage-700 font-semibold">{results.length} ressource{results.length > 1 ? 's' : ''} trouvée{results.length > 1 ? 's' : ''}</span>
          </p>
        </Container>
      </section>

      <section className="bg-white pt-10">
        <Container size="prose">
          <Alert variant="warning" title="Cet outil n'est pas un avis médical">
            La liste ci-dessous regroupe les contenus du site éditorialement liés à la situation choisie.
            Elle ne diagnostique ni ne prescrit. Toute symptomatologie persistante doit conduire à une
            consultation médicale.
          </Alert>
        </Container>
      </section>

      <section className="bg-cream-50 py-12">
        <Container size="wide">
          {results.length === 0 ? (
            <p className="text-center text-forest-600">
              Aucun contenu spécifique n'est encore référencé pour cette pathologie. Utilisez la recherche
              transversale (⌘K) ou explorez par catégorie.
            </p>
          ) : (
            TYPE_ORDER.map((type) => {
              const items = grouped.get(type);
              if (!items || items.length === 0) return null;
              const meta = TYPE_META[type];
              const Icon = meta.icon;
              return (
                <section key={type} className="mb-10">
                  <h2 className="font-display text-2xl text-forest-900 mb-5 flex items-center gap-2">
                    <span className={`grid place-items-center w-9 h-9 rounded-xl ${meta.bg} ${meta.color}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {meta.label}{items.length > 1 ? 's' : ''} <span className="text-sm font-normal text-forest-500">({items.length})</span>
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((r) => (
                      <Link key={r.url} href={r.url} className="group block">
                        <Card hoverable className="h-full flex flex-col">
                          <CardContent className="p-5 flex-1 flex flex-col">
                            {r.badge && (
                              <span className={`self-start inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2 ${
                                r.badge === 'PubMed' ? 'bg-sage-100 text-sage-700' : 'bg-forest-700 text-white'
                              }`}>
                                {r.badge}
                              </span>
                            )}
                            <CardTitle className="text-base group-hover:text-forest-700 leading-snug">{r.title}</CardTitle>
                            <p className="text-xs text-forest-700/80 mt-2 line-clamp-3 flex-1">{r.excerpt}</p>
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-600 mt-3 group-hover:gap-2 transition-all">
                              Lire <ArrowRight className="h-3 w-3" />
                            </span>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })
          )}
          <div className="text-center mt-10">
            <Link href="/outils/par-pathologie" className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900">
              <ArrowLeft className="h-4 w-4" /> Toutes les pathologies
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
