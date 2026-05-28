import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Leaf } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { NATURO_CATEGORIES } from '@/lib/categories';
import { countByCategory } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Naturopathie : guides et protocoles',
  description:
    'Guide complet en naturopathie : jeûnes, purges, plantes médicinales, alimentation vivante, cures saisonnières, hydrothérapie, aromathérapie, tempéraments hippocratiques.',
};

export default function NaturopathieHubPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────
          Contraste WCAG 1.4.3 :
          - text-white (L=1) sur forest-700 (L=0.088) → 7.85:1 ✅ AAA
          - sage-200 (L=0.769) sur forest-700 → 6.07:1 ✅ AA
      ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900"
        aria-labelledby="naturo-hero-heading"
      >
        {/* Decorative element — aria-hidden: purement décoratif */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-20 -right-20 text-[20rem] leading-none select-none">🌿</div>
        </div>

        <Container className="relative py-20 sm:py-28">
          {/* Badge — bg-white/90 sur forest-700 : forest-800 texte = 8.6:1 ✅ */}
          <Badge className="bg-white/90 text-forest-800 ring-white/60 mb-6">
            <Leaf className="h-3 w-3" aria-hidden="true" />
            Naturopathie
          </Badge>

          {/* h1 : text-white = 7.85:1 sur forest-700 ✅ */}
          <h1
            id="naturo-hero-heading"
            className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-tight text-white"
          >
            Soigner par
            {/* sage-200 = 6.07:1 sur forest-700 ✅ — texte grand (>18pt) */}
            <span className="block italic text-sage-200">le terrain</span>
          </h1>

          {/* text-white/90 sur forest-700 ≈ 7.07:1 ✅ */}
          <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl">
            La médecine du vivant qui agit en amont du symptôme. Jeûnes, cures de drainage,
            alimentation vivante, plantes médicinales, hydrothérapie, aromathérapie : tout ce qui
            permet de rééquilibrer les grandes fonctions du corps.
          </p>
        </Container>
      </section>

      {/* ── Categories grid ───────────────────────────────────── */}
      <section className="py-16 sm:py-20" aria-labelledby="naturo-themes-heading">
        <Container>
          <SectionHeading
            eyebrow="Explorer"
            title="Les grands thèmes"
            description="Choisissez une thématique pour explorer en profondeur."
            align="center"
            className="mb-12"
            id="naturo-themes-heading"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NATURO_CATEGORIES.map((cat) => {
              const count = cat.slug === 'temperaments' ? 4 : countByCategory('naturopathie', cat.slug);
              return (
                <Link
                  key={cat.slug}
                  href={`/naturopathie/${cat.slug}`}
                  className="group block"
                  aria-label={`${cat.nom} — ${count} ${count > 1 ? 'articles' : 'article'}`}
                >
                  <Card hoverable accent="forest" className="h-full">
                    <CardContent>
                      <div className="flex items-start justify-between mb-3">
                        {/* Emoji purement décoratif — la catégorie est nommée dans le h3 */}
                        <span className="text-4xl" aria-hidden="true">{cat.icon}</span>
                        {/* text-forest-800 sur bg-forest-50 (badge) — contraste suffisant */}
                        <Badge variant="forest">{count} {count > 1 ? 'articles' : 'article'}</Badge>
                      </div>
                      <CardTitle className="text-xl">{cat.nom}</CardTitle>
                      {/* text-forest-700 solid (sans opacity) sur white : 7.25:1 ✅ */}
                      <CardDescription className="mt-2 line-clamp-3 text-forest-700">
                        {cat.description}
                      </CardDescription>
                      <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 group-hover:text-forest-900 transition-colors">
                        Explorer
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </div>
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
