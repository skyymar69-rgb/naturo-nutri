import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Alert } from '@/components/ui/Alert';
import { PATHOLOGIES, PATHOLOGIE_GROUPES, getPathologiesByGroupe } from '@/lib/pathologies';
import { countAllPathologies } from '@/lib/pathologie-search';
import { Stethoscope, ArrowRight, Search, Layers, FileText } from 'lucide-react';

const SITE = 'https://naturo-nutri.vercel.app';

export const metadata: Metadata = {
  title: 'Trouver l\'information par pathologie',
  description: 'Outil de navigation par pathologie ou situation : sommeil, stress, digestion, immunité, circulation, peau, articulations, femme, fatigue, cognition, métabolisme. Agrégation des 4 sections du site + actualités sourcées.',
  alternates: { canonical: `${SITE}/outils/par-pathologie` },
};

export default function ParPathologiePage() {
  const counts = countAllPathologies(PATHOLOGIES);
  const totalRessources = Object.values(counts).reduce((a, b) => a + (b ?? 0), 0);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative mesh-organic grain-overlay overflow-hidden py-16 sm:py-24 border-b border-forest-100/70">
        <div className="absolute -top-20 -left-16 w-80 h-80 bg-sage-200/45 blob-a animate-blob blur-2xl pointer-events-none" aria-hidden="true" />
        <div className="absolute top-10 -right-20 w-72 h-72 bg-earth-100/50 blob-b animate-blob-slow blur-2xl pointer-events-none" aria-hidden="true" />
        <Container size="prose" className="relative text-center">
          <div className="inline-grid place-items-center w-20 h-20 rounded-3xl bg-forest-700 text-white shadow-organic mb-7 blob-a">
            <Stethoscope className="h-9 w-9" aria-hidden="true" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage-700 mb-4">Recherche guidée</p>
          <h1 className="font-display text-[2.6rem] sm:text-5xl lg:text-[3.6rem] text-forest-900 leading-[1.05] text-balance">
            Trouver l'information <span className="italic text-earth-600">par pathologie</span>
          </h1>
          <p className="mt-5 text-lg text-forest-700/85 leading-relaxed max-w-2xl mx-auto text-balance">
            Sélectionnez une situation pour voir agrégées les <strong className="text-forest-900">actualités sourcées PubMed</strong>,
            les <strong className="text-forest-900">plantes</strong>, les <strong className="text-forest-900">articles</strong> et les{' '}
            <strong className="text-forest-900">recettes</strong> du site qui peuvent s'y rapporter.
          </p>

          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm text-forest-700 bg-white/70 backdrop-blur border border-forest-100 rounded-full px-6 py-3 shadow-sm">
            <span className="inline-flex items-center gap-1.5 font-semibold"><Layers className="h-4 w-4 text-sage-600" /> {PATHOLOGIES.length} situations</span>
            <span className="h-4 w-px bg-forest-200" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5 font-semibold"><FileText className="h-4 w-4 text-sage-600" /> {totalRessources}+ ressources reliées</span>
          </div>
        </Container>
      </section>

      {/* ── Avertissement ── */}
      <section className="bg-white py-10">
        <Container size="prose">
          <Alert variant="warning" title="Ce n'est pas un outil de diagnostic">
            Cette navigation par pathologie est un <strong>outil éditorial d'orientation</strong> qui aide à
            retrouver les contenus pertinents du site. Elle ne remplace en aucun cas une consultation
            médicale, un diagnostic ou un traitement. En cas de symptômes, consultez un professionnel de santé.
          </Alert>
        </Container>
      </section>

      {/* ── Groupes ── */}
      <section className="mesh-organic py-14 sm:py-20">
        <Container size="wide">
          {PATHOLOGIE_GROUPES.map((g) => {
            const items = getPathologiesByGroupe(g.slug);
            if (items.length === 0) return null;
            return (
              <section key={g.slug} className="mb-14 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <span className="grid place-items-center w-12 h-12 rounded-2xl bg-white shadow-sm border border-forest-100 text-2xl" aria-hidden="true">{g.icon}</span>
                  <div>
                    <h2 className="font-display text-2xl sm:text-[1.9rem] text-forest-900 leading-tight">{g.nom}</h2>
                    <p className="text-xs font-semibold uppercase tracking-wider text-forest-500">{items.length} situation{items.length > 1 ? 's' : ''}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {items.map((p) => {
                    const n = counts[p.slug] ?? 0;
                    return (
                      <Link
                        key={p.slug}
                        href={`/outils/par-pathologie/${p.slug}`}
                        className="group relative overflow-hidden bg-white hover:bg-forest-50/60 border border-forest-100 rounded-4xl p-6 transition-all hover:-translate-y-1 hover:shadow-soft card-glow"
                      >
                        <div className="absolute -top-8 -right-8 w-24 h-24 bg-sage-100/60 blob-a animate-blob-slow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                        <div className="relative">
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-sage-700 bg-sage-50 ring-1 ring-sage-200 px-2.5 py-1 rounded-full mb-3">
                            {n} ressource{n > 1 ? 's' : ''}
                          </span>
                          <h3 className="font-display text-xl text-forest-900 mb-1.5 leading-snug group-hover:text-forest-700 transition-colors">{p.nom}</h3>
                          <p className="text-sm text-forest-700/80 leading-relaxed line-clamp-2">{p.description}</p>
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sage-600 mt-4 group-hover:gap-2.5 transition-all">
                            Explorer <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </Container>
      </section>

      {/* ── Aide ── */}
      <section className="bg-white py-12">
        <Container size="prose">
          <div className="bg-cream-50 border border-forest-100 rounded-4xl p-6 flex gap-4 items-start">
            <span className="grid place-items-center w-11 h-11 rounded-2xl bg-white border border-forest-100 flex-shrink-0">
              <Search className="h-5 w-5 text-sage-600" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-lg text-forest-900 mb-1">Votre situation n'est pas listée ?</p>
              <p className="text-sm text-forest-700/85 leading-relaxed">
                Utilisez la <Link href="/" className="underline font-semibold text-sage-700 hover:text-sage-900">recherche transversale</Link> (raccourci ⌘K)
                pour interroger l'ensemble des articles, plantes, recettes et actualités par mot-clé libre.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
