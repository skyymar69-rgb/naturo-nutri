import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FlaskConical } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { NUTRI_CATEGORIES } from '@/lib/categories';
import { countByCategory } from '@/lib/articles';
import { LivresReferences } from '@/components/LivresReferences';

export const metadata: Metadata = {
  title: 'Nutrithérapie : compléments et micronutriments',
  description:
    'Guide complet en nutrithérapie : vitamines, minéraux, acides gras, acides aminés, antioxydants, probiotiques, adaptogènes, compléments par objectif santé.',
};

export default function NutritherapieHubPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────
          Contraste WCAG 1.4.3 :
          - Fond assombri → from-earth-700 via-earth-800 to-earth-900
          - white (L=1) sur earth-800 (L≈0.10) → 7.00:1 ✅ AAA
          - text-white/90 sur earth-800 ≈ 6.30:1 ✅ AA
      ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-earth-700 via-earth-800 to-earth-900"
        aria-labelledby="nutri-hero-heading"
      >
        {/* Decorative — aria-hidden */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-20 -right-20 text-[20rem] leading-none select-none">⚗️</div>
        </div>

        <Container className="relative py-20 sm:py-28">
          {/* Badge — bg-white/90 : earth-800 texte = très bon contraste ✅ */}
          <Badge className="bg-white/90 text-earth-800 ring-white/60 mb-6">
            <FlaskConical className="h-3 w-3" aria-hidden="true" />
            Nutrithérapie
          </Badge>

          {/* h1 : text-white = 7.00:1 sur earth-800 ✅ */}
          <h1
            id="nutri-hero-heading"
            className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-tight text-white"
          >
            Nourrir avec
            {/* text-white italic = 7.00:1 ✅ */}
            <span className="block italic text-white/90">précision</span>
          </h1>

          {/* text-white/90 ≈ 6.30:1 sur earth-800 ✅ */}
          <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl">
            La science des micronutriments : vitamines, minéraux, oligoéléments, acides gras,
            antioxydants, adaptogènes. Combler ce que nos aliments modernes n&apos;apportent plus en
            quantité suffisante.
          </p>
        </Container>
      </section>

      {/* ── Categories grid ───────────────────────────────────── */}
      <section className="py-16 sm:py-20" aria-labelledby="nutri-themes-heading">
        <Container>
          <SectionHeading
            eyebrow="Explorer"
            title="Les grands thèmes"
            description="Choisissez une thématique pour explorer en profondeur."
            align="center"
            className="mb-12"
            id="nutri-themes-heading"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NUTRI_CATEGORIES.map((cat) => {
              const count = cat.slug === 'principes' ? 1 : countByCategory('nutritherapie', cat.slug);
              return (
                <Link
                  key={cat.slug}
                  href={`/nutritherapie/${cat.slug}`}
                  className="group block"
                  aria-label={`${cat.nom} — ${count} ${count > 1 ? 'articles' : 'article'}`}
                >
                  <Card hoverable accent="earth" className="h-full">
                    <CardContent>
                      <div className="flex items-start justify-between mb-3">
                        {/* Emoji décoratif — catégorie nommée dans le h3 ci-dessous */}
                        <span className="text-4xl" aria-hidden="true">{cat.icon}</span>
                        <Badge variant="earth">{count} {count > 1 ? 'articles' : 'article'}</Badge>
                      </div>
                      <CardTitle className="text-xl">{cat.nom}</CardTitle>
                      {/* text-forest-700 solid sur white : 7.25:1 ✅ */}
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

          <div className="mt-12 pt-12 border-t border-forest-100">
            <LivresReferences domaine="nutritherapie" title="Sources éditoriales — la nutrithérapie francophone" />
          </div>
        </Container>
      </section>
    </>
  );
}
