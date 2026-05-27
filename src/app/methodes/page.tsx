import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SourceBadge } from '@/components/ui/SourceBadge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TemperamentBadge } from '@/components/ui/TemperamentBadge';
import { METHODES } from '@/lib/methodes';

export const metadata: Metadata = {
  title: 'Méthodes : jeûnes, monodiètes, purges, alimentation vivante',
  description:
    "Toutes les méthodes naturopathiques de l'école Grosjean : jeûne hydrique, jeûne aux jus, monodiètes, purge à l'huile de ricin, alimentation vivante. Protocoles détaillés, bénéfices et contre-indications.",
};

export default function MethodesPage() {
  return (
    <>
      <section className="grain-bg py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Cures & protocoles"
            title="Les méthodes naturopathiques"
            description="Jeûnes, monodiètes, purges, alimentation vivante : les piliers de la naturopathie selon Irène Grosjean, présentés avec leurs bénéfices, indications et contre-indications."
            align="center"
          />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid sm:grid-cols-2 gap-6">
            {METHODES.map((m) => (
              <Link key={m.slug} href={`/methodes/${m.slug}`} className="group">
                <Card hoverable accent="forest" className="h-full">
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <SourceBadge source={m.source} />
                      <Badge variant="neutral" className="capitalize">
                        {m.niveau}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{m.nom}</CardTitle>
                    <CardDescription className="mt-2 line-clamp-3">{m.resume}</CardDescription>
                    <div className="mt-4 flex flex-wrap gap-3 text-xs text-forest-700/80">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {m.duree}
                      </span>
                      <span className="inline-flex items-center gap-1.5 capitalize">
                        <Calendar className="h-3.5 w-3.5" /> {m.saisons.join(', ')}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {m.temperaments_recommandes.map((t) => (
                        <TemperamentBadge key={t} slug={t} />
                      ))}
                    </div>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 group-hover:text-forest-900">
                      Lire le protocole <ArrowRight className="h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
