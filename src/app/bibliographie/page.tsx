import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { CitationLivre } from '@/components/LivresReferences';
import { ALL_LIVRES } from '@/lib/references-livres';
import { BookOpen, ShieldCheck } from 'lucide-react';

const SITE = 'https://naturo-nutri.vercel.app';

export const metadata: Metadata = {
  title: 'Bibliographie de référence',
  description: "Ouvrages fondateurs qui sous-tendent la démarche éditoriale de Nutriéa : Norman W. Walker (jus), Dr Jean-Paul Curtay et Dr Claude Lagarde (nutrithérapie), et autres références reconnues.",
  alternates: { canonical: `${SITE}/bibliographie` },
};

export default function BibliographiePage() {
  // Group by author for readability
  const grouped = new Map<string, typeof ALL_LIVRES>();
  for (const l of ALL_LIVRES) {
    const key = l.auteur;
    grouped.set(key, [...(grouped.get(key) ?? []), l]);
  }
  const groups = Array.from(grouped.entries());

  return (
    <>
      <section className="hero-bg py-14 sm:py-20 border-b border-forest-100">
        <Container size="prose" className="text-center">
          <div className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-white/80 mb-5">
            <BookOpen className="h-8 w-8 text-sage-600" aria-hidden="true" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-900 leading-tight text-balance">
            Bibliographie de référence
          </h1>
          <p className="mt-5 text-lg text-forest-700/85 leading-relaxed max-w-2xl mx-auto text-balance">
            Les ouvrages fondateurs et de référence sur lesquels s'appuie la démarche éditoriale de Nutriéa.
            Pour les amateurs qui veulent prolonger la lecture à la source.
          </p>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container size="prose">
          <div className="bg-cream-50 border border-forest-100 rounded-2xl p-5 mb-10 flex gap-3">
            <ShieldCheck className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-sm text-forest-800 leading-relaxed">
              <p className="font-semibold text-forest-900 mb-1">À propos de cette bibliographie</p>
              <p>
                Tous les ouvrages cités ici sont disponibles en bibliothèque ou en librairie. Nous ne vendons
                rien, aucun lien d'affiliation, aucune commission. Les citations clés sont reproduites en
                respect des usages académiques (courte citation à des fins de référence).
              </p>
            </div>
          </div>

          {groups.map(([auteur, livres]) => (
            <section key={auteur} className="mb-12">
              <h2 className="font-display text-3xl text-forest-900 mb-2 border-b border-forest-100 pb-2">
                {auteur}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {livres.map((l) => (
                  <CitationLivre key={l.slug} livre={l} />
                ))}
              </div>
            </section>
          ))}
        </Container>
      </section>
    </>
  );
}
