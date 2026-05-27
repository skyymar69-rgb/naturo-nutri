import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/Button';
import { TEMPERAMENTS, TEMPERAMENT_SLUGS } from '@/lib/temperaments';

export const metadata: Metadata = {
  title: 'Les 4 tempéraments hippocratiques',
  description:
    'Sanguin, bilieux, nerveux, lymphatique : découvrez les 4 tempéraments hippocratiques, leurs forces, leurs faiblesses et leurs protocoles de santé personnalisés.',
};

export default function TemperamentsIndexPage() {
  return (
    <>
      <section className="grain-bg py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Médecine hippocratique"
            title="Les 4 tempéraments"
            description="Classification millénaire encore d'une pertinence saisissante : votre tempérament guide tous vos choix de santé."
            align="center"
          />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {TEMPERAMENT_SLUGS.map((slug) => {
              const t = TEMPERAMENTS[slug];
              return (
                <Link key={slug} href={`/temperaments/${slug}`} className="group block">
                  <Card hoverable accent="forest" className="h-full overflow-hidden">
                    <div
                      className="p-6 text-cream-50"
                      style={{
                        background: `linear-gradient(135deg, ${t.couleurHex}dd, ${t.couleurHex}aa)`,
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-5xl">{t.emoji}</span>
                        <Badge className="bg-white/20 text-cream-50 ring-white/30">
                          {t.element}
                        </Badge>
                      </div>
                      <h2 className="font-display text-3xl mt-4">{t.nom}</h2>
                      <p className="text-sm text-cream-50/80 mt-1">
                        Humeur · {t.humeur} · {t.emotion_dominante}
                      </p>
                    </div>
                    <CardContent>
                      <CardDescription className="line-clamp-3">{t.description}</CardDescription>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-sage-700 font-medium mb-1">
                            Forces
                          </p>
                          <p className="text-xs text-forest-800/85">
                            {t.forces.slice(0, 2).join(', ')}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-earth-600 font-medium mb-1">
                            Vigilance
                          </p>
                          <p className="text-xs text-forest-800/85">
                            {t.faiblesses.slice(0, 2).join(', ')}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 group-hover:text-forest-900 transition-colors">
                        Découvrir le profil complet <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-forest-700/80 mb-4">Vous ne savez pas lequel vous correspond ?</p>
            <ButtonLink href="/quiz-temperament" variant="earth" size="lg">
              Passer le quiz tempérament <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
