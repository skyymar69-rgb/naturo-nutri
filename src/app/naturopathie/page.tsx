import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Leaf, Wind, Moon, Droplet, Apple } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Naturopathie selon Irène Grosjean',
  description:
    "Les fondamentaux de la naturopathie selon l'école Grosjean : 4 lois du vivant, toxémie, terrain, vitalisme, alimentation vivante et cures de drainage.",
};

export default function NaturopathiePage() {
  return (
    <>
      <section className="grain-bg py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Irène Grosjean"
            title="La naturopathie"
            description="Une méthode de santé naturelle fondée sur la respiration, l'alimentation vivante, le sommeil et l'élimination. Aucun médicament, aucune contrainte — juste les lois du vivant."
            align="center"
          />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid lg:grid-cols-3 gap-6 mb-20">
            <Card hoverable accent="forest">
              <CardContent>
                <Leaf className="h-8 w-8 text-forest-600 mb-3" />
                <CardTitle className="text-lg">4 lois du vivant</CardTitle>
                <CardDescription className="mt-2">
                  Respirer, se nourrir, dormir, éliminer : les fondations universelles de la santé.
                </CardDescription>
                <Link
                  href="/naturopathie/4-lois-vivant"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest-700"
                >
                  Lire <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
            <Card hoverable accent="forest">
              <CardContent>
                <Droplet className="h-8 w-8 text-forest-600 mb-3" />
                <CardTitle className="text-lg">Toxémie & terrain</CardTitle>
                <CardDescription className="mt-2">
                  Comprendre la cause avant le symptôme. Le rôle des émonctoires et du vitalisme.
                </CardDescription>
                <Link
                  href="/naturopathie/toxemie"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest-700"
                >
                  Lire <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
            <Card hoverable accent="forest">
              <CardContent>
                <Apple className="h-8 w-8 text-forest-600 mb-3" />
                <CardTitle className="text-lg">Cures de drainage</CardTitle>
                <CardDescription className="mt-2">
                  Jeûnes, monodiètes, purges : les techniques traditionnelles enseignées.
                </CardDescription>
                <Link
                  href="/methodes"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest-700"
                >
                  Voir les méthodes <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <section className="rounded-3xl bg-gradient-to-br from-forest-50 to-sage-50 p-8 sm:p-12 mb-16">
            <Badge variant="forest" className="mb-4">L'enseignement</Badge>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-900 mb-4">
              Une transmission de 50 ans
            </h2>
            <div className="prose prose-natural max-w-3xl text-forest-800/90 leading-relaxed">
              <p>
                <strong>Irène Grosjean</strong>, née en 1930, est l'une des figures majeures de la
                naturopathie francophone. Disciple du Dr Pierre-Valentin <strong>Marchesseau</strong>,
                fondateur de la naturopathie moderne en France, elle transmet depuis cinq décennies
                un enseignement vivant fondé sur l'observation, l'expérimentation et le bon sens
                paysan.
              </p>
              <p>
                Son approche réintègre des pratiques que la modernité avait évacuées :
                <strong> alimentation vivante</strong> (crudités, germinations, jus, lacto-fermentations),
                <strong> cures de drainage</strong> (jeûnes courts ou longs, monodiètes saisonnières,
                purges traditionnelles), et <strong>respect du tempérament</strong> hippocratique de
                chacun.
              </p>
              <p>
                Au-delà de la technique, c'est une <strong>philosophie de vie</strong> : ralentir,
                écouter, observer son corps comme un allié sage. Le symptôme n'est pas l'ennemi mais
                un signal. La maladie n'est pas un accident mais une crise de nettoyage à
                accompagner.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Les concepts clés"
              title="Le vocabulaire de la naturopathie"
              className="mb-10"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Vitalisme',
                  desc: "Conviction que l'organisme possède une intelligence d'auto-guérison. Le rôle du naturopathe : créer les conditions du retour à l'équilibre.",
                },
                {
                  title: 'Toxémie',
                  desc: "Accumulation de déchets métaboliques et toxines dans le terrain. Cause profonde de la plupart des troubles chroniques.",
                },
                {
                  title: 'Émonctoires',
                  desc: "Les 5 portes de sortie : foie, reins, intestins, peau, poumons. Leur fluidité = la santé.",
                },
                {
                  title: 'Crise de guérison',
                  desc: "Symptômes intenses pendant une cure (maux de tête, fatigue, éruptions). Signaux POSITIFS d'élimination active.",
                },
                {
                  title: 'Terrain',
                  desc: "Ensemble des paramètres physiologiques et énergétiques propres à chacun. Ce que le tempérament hippocratique décrit.",
                },
                {
                  title: 'Naturopathie vitaliste',
                  desc: "Lignée Marchesseau/Grosjean : alimentation vivante + drainage + respect du tempérament. La forme la plus traditionnelle.",
                },
              ].map((c) => (
                <Card key={c.title} accent="cream">
                  <CardContent className="p-5">
                    <h3 className="font-display text-lg text-forest-900 mb-2">{c.title}</h3>
                    <p className="text-sm text-forest-700/85">{c.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mt-16 text-center">
            <p className="text-forest-700/80 mb-4">Prêt à découvrir votre tempérament ?</p>
            <ButtonLink href="/quiz-temperament" variant="primary" size="lg">
              Passer le quiz <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </section>
        </Container>
      </section>
    </>
  );
}
