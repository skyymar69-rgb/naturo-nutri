import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Alert } from '@/components/ui/Alert';
import { PATHOLOGIES, PATHOLOGIE_GROUPES, getPathologiesByGroupe } from '@/lib/pathologies';
import { countAllPathologies } from '@/lib/pathologie-search';
import { Stethoscope, ArrowRight, Search } from 'lucide-react';

const SITE = 'https://naturo-nutri.vercel.app';

export const metadata: Metadata = {
  title: 'Trouver l\'information par pathologie',
  description: 'Outil de navigation par pathologie ou situation : sommeil, stress, digestion, immunité, circulation, peau, articulations, femme, fatigue, cognition, métabolisme. Agrégation des 4 sections du site + actualités sourcées.',
  alternates: { canonical: `${SITE}/outils/par-pathologie` },
};

export default function ParPathologiePage() {
  const counts = countAllPathologies(PATHOLOGIES);

  return (
    <>
      <section className="hero-bg py-14 sm:py-20 border-b border-forest-100">
        <Container size="prose" className="text-center">
          <div className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-white/80 mb-5">
            <Stethoscope className="h-8 w-8 text-sage-600" aria-hidden="true" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-900 leading-tight text-balance">
            Trouver l'information par pathologie
          </h1>
          <p className="mt-5 text-lg text-forest-700/85 leading-relaxed max-w-2xl mx-auto text-balance">
            Sélectionnez une situation pour voir agrégées les <strong>actualités sourcées PubMed</strong>,
            les <strong>plantes</strong>, les <strong>articles</strong> et les <strong>recettes</strong> du
            site qui peuvent s'y rapporter.
          </p>
        </Container>
      </section>

      <section className="bg-white py-10">
        <Container size="prose">
          <Alert variant="warning" title="Ce n'est pas un outil de diagnostic">
            Cette navigation par pathologie est un <strong>outil éditorial d'orientation</strong> qui aide à
            retrouver les contenus pertinents du site. Elle ne remplace en aucun cas une consultation
            médicale, un diagnostic ou un traitement. En cas de symptômes, consultez un professionnel de santé.
          </Alert>
        </Container>
      </section>

      <section className="bg-cream-50 py-14">
        <Container size="wide">
          {PATHOLOGIE_GROUPES.map((g) => {
            const items = getPathologiesByGroupe(g.slug);
            if (items.length === 0) return null;
            return (
              <section key={g.slug} className="mb-12">
                <h2 className="font-display text-2xl sm:text-3xl text-forest-900 mb-5 flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">{g.icon}</span>
                  {g.nom}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/outils/par-pathologie/${p.slug}`}
                      className="group bg-white hover:bg-forest-50 border border-forest-100 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-md card-glow"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-sage-700 mb-1">
                        {counts[p.slug] ?? 0} ressource{(counts[p.slug] ?? 0) > 1 ? 's' : ''}
                      </p>
                      <h3 className="font-display text-lg text-forest-900 mb-1.5 group-hover:text-forest-700">{p.nom}</h3>
                      <p className="text-xs text-forest-700/80 leading-relaxed line-clamp-2">{p.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-600 mt-3 group-hover:gap-2 transition-all">
                        Explorer <ArrowRight className="h-3 w-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </Container>
      </section>

      <section className="bg-white py-10">
        <Container size="prose">
          <div className="bg-cream-50 border border-forest-100 rounded-2xl p-5 flex gap-3 items-start">
            <Search className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-forest-900 mb-1">Votre situation n'est pas listée ?</p>
              <p className="text-sm text-forest-700/85">
                Utilisez la <Link href="/" className="underline font-medium text-sage-700 hover:text-sage-900">recherche transversale</Link> (raccourci ⌘K)
                pour interroger l'ensemble des articles, plantes, recettes et actualités par mot-clé libre.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
