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
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900 text-cream-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 text-[20rem] leading-none select-none">🌿</div>
        </div>
        <Container className="relative py-20 sm:py-28">
          <Badge className="bg-white/20 text-cream-50 ring-white/30 mb-6">
            <Leaf className="h-3 w-3" /> Naturopathie
          </Badge>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-tight">
            Soigner par
            <span className="block italic text-sage-200">le terrain</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-cream-50/85 leading-relaxed max-w-3xl">
            La médecine du vivant qui agit en amont du symptôme. Jeûnes, cures de drainage,
            alimentation vivante, plantes médicinales, hydrothérapie, aromathérapie : tout ce qui
            permet de rééquilibrer les grandes fonctions du corps.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Explorer"
            title="Les grands thèmes"
            description="Choisissez une thématique pour explorer en profondeur."
            align="center"
            className="mb-12"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NATURO_CATEGORIES.map((cat) => {
              const count = cat.slug === 'temperaments' ? 4 : countByCategory('naturopathie', cat.slug);
              return (
                <Link key={cat.slug} href={`/naturopathie/${cat.slug}`} className="group block">
                  <Card hoverable accent="forest" className="h-full">
                    <CardContent>
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-4xl">{cat.icon}</span>
                        <Badge variant="forest">{count} {count > 1 ? 'articles' : 'article'}</Badge>
                      </div>
                      <CardTitle className="text-xl">{cat.nom}</CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">{cat.description}</CardDescription>
                      <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 group-hover:text-forest-900 transition-colors">
                        Explorer <ArrowRight className="h-3 w-3" />
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
