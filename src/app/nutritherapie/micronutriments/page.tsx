import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TemperamentBadge } from '@/components/ui/TemperamentBadge';
import { MICRONUTRIMENTS } from '@/lib/complements';
import type { Micronutriment } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Micronutriments essentiels : fiches complètes',
  description:
    'Bibliothèque complète des micronutriments : vitamines, minéraux, oméga-3, antioxydants. Formes biodisponibles, dosages Curtay, signes de carence.',
};

const CATEGORIES: { key: Micronutriment['categorie']; label: string }[] = [
  { key: 'vitamine', label: 'Vitamines' },
  { key: 'mineral', label: 'Minéraux' },
  { key: 'acide_gras', label: 'Acides gras' },
  { key: 'antioxydant', label: 'Antioxydants' },
  { key: 'acide_amine', label: 'Acides aminés' },
  { key: 'autre', label: 'Autres' },
];

export default function MicronutrimentsIndexPage() {
  return (
    <>
      <section className="grain-bg py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Bibliothèque Curtay"
            title="Micronutriments essentiels"
            description="Chaque fiche présente : rôles, signes de carence, sources alimentaires, formes biodisponibles, dosages Curtay, contre-indications et tempéraments prioritaires."
            align="center"
          />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          {CATEGORIES.map((cat) => {
            const items = MICRONUTRIMENTS.filter((m) => m.categorie === cat.key);
            if (items.length === 0) return null;
            return (
              <div key={cat.key} className="mb-12 last:mb-0">
                <h2 className="font-display text-2xl text-forest-900 mb-6 flex items-center gap-3">
                  {cat.label}
                  <span className="text-sm font-sans text-forest-600/70">({items.length})</span>
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((n) => (
                    <Link key={n.slug} href={`/nutritherapie/micronutriments/${n.slug}`} className="group">
                      <Card hoverable accent="cream" className="h-full">
                        <CardContent className="p-5">
                          <h3 className="font-display text-base text-forest-900">{n.nom}</h3>
                          <p className="text-xs text-earth-600 mt-1 font-medium">
                            {n.formes_recommandees[0]}
                          </p>
                          <p className="text-xs text-forest-700/80 mt-3 line-clamp-2">{n.roles[0]}</p>
                          {n.temperaments_prioritaires.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1">
                              {n.temperaments_prioritaires.slice(0, 2).map((t) => (
                                <Badge key={t} variant={t} className="text-[10px]">
                                  {t}
                                </Badge>
                              ))}
                            </div>
                          )}
                          <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-forest-700 group-hover:text-forest-900">
                            Lire <ArrowRight className="h-3 w-3" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}
