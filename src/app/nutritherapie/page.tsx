import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FlaskConical, ShieldCheck, BookCheck, Pill } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';
import { REGLES_CURTAY, MICRONUTRIMENTS } from '@/lib/complements';

export const metadata: Metadata = {
  title: 'Nutrithérapie : la science des micronutriments selon Curtay',
  description:
    'Tout sur la nutrithérapie : 8 règles d\'or du Dr Curtay, fiches micronutriments (vitamine D, magnésium, B12, oméga-3...), interactions médicaments.',
};

export default function NutritherapiePage() {
  return (
    <>
      <section className="grain-bg py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Dr Jean-Paul Curtay"
            title="La nutrithérapie"
            description="Compléments ciblés, formes biodisponibles, dosages adaptés : la science de la micronutrition au service de votre vitalité."
            align="center"
          />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <Card hoverable accent="earth">
              <CardContent>
                <ShieldCheck className="h-8 w-8 text-earth-600 mb-3" />
                <CardTitle className="text-lg">8 règles d'or</CardTitle>
                <CardDescription className="mt-2">
                  Les critères Curtay pour choisir un complément digne de ce nom.
                </CardDescription>
                <Link
                  href="/nutritherapie/regles-curtay"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest-700 hover:text-forest-900"
                >
                  Lire les règles <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
            <Card hoverable accent="earth">
              <CardContent>
                <Pill className="h-8 w-8 text-earth-600 mb-3" />
                <CardTitle className="text-lg">{MICRONUTRIMENTS.length} micronutriments essentiels</CardTitle>
                <CardDescription className="mt-2">
                  Vitamines, minéraux, acides gras : fiches détaillées avec formes recommandées.
                </CardDescription>
                <Link
                  href="/nutritherapie/micronutriments"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest-700 hover:text-forest-900"
                >
                  Voir les fiches <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
            <Card hoverable accent="earth">
              <CardContent>
                <FlaskConical className="h-8 w-8 text-earth-600 mb-3" />
                <CardTitle className="text-lg">Par tempérament</CardTitle>
                <CardDescription className="mt-2">
                  Identifiez votre tempérament et trouvez vos priorités de supplémentation.
                </CardDescription>
                <Link
                  href="/quiz-temperament"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest-700 hover:text-forest-900"
                >
                  Passer le quiz <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-earth-50 to-cream-100 p-8 sm:p-12 mb-16">
            <Badge variant="earth" className="mb-4">Pourquoi la nutrithérapie ?</Badge>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-900 mb-4">
              Nos fruits et légumes ne nous nourrissent plus
            </h2>
            <p className="text-forest-800/90 leading-relaxed max-w-3xl">
              Le Dr Curtay a démontré que les sols appauvris, l'agriculture intensive et la cueillette
              prématurée ont divisé par 2 à 4 la densité nutritionnelle de nos aliments en 50 ans.
              Une pomme de 2020 contient autant de vitamines que 4 pommes de 1970. Sans
              complémentation ciblée, atteindre les besoins optimaux devient quasi impossible.
            </p>
            <p className="text-forest-800/90 leading-relaxed max-w-3xl mt-3">
              La nutrithérapie n'est pas une alternative à l'alimentation vivante : c'est son{' '}
              <strong>complément indispensable</strong> dans le monde moderne. Les deux écoles
              (Grosjean + Curtay) sont parfaitement compatibles et synergiques.
            </p>
          </div>

          <section>
            <SectionHeading
              eyebrow="Les fondamentaux"
              title="Les 8 règles d'or du Dr Curtay"
              description="Pour choisir un complément efficace, voici les critères non négociables identifiés par le Dr Jean-Paul Curtay au fil de ses 40 ans de pratique."
              className="mb-10"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              {REGLES_CURTAY.slice(0, 4).map((r) => (
                <Card key={r.numero} accent="cream">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-earth-500 text-cream-50 font-display text-lg">
                        {r.numero}
                      </span>
                      <div>
                        <h3 className="font-display text-base text-forest-900 mb-1">{r.titre}</h3>
                        <p className="text-sm text-forest-700/85 leading-relaxed line-clamp-3">
                          {r.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <ButtonLink href="/nutritherapie/regles-curtay" variant="earth">
                Voir les 8 règles complètes <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </section>

          <section className="mt-20">
            <SectionHeading
              eyebrow="Bibliothèque"
              title="Micronutriments essentiels"
              description="Une fiche détaillée pour chaque nutriment : formes biodisponibles, dosages Curtay, sources alimentaires, signes de carence."
              className="mb-10"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MICRONUTRIMENTS.slice(0, 9).map((n) => (
                <Link key={n.slug} href={`/nutritherapie/micronutriments/${n.slug}`} className="group">
                  <Card hoverable accent="cream" className="h-full">
                    <CardContent className="p-5">
                      <Badge variant="earth" className="mb-2 text-[10px]">
                        {n.categorie.replace('_', ' ')}
                      </Badge>
                      <h3 className="font-display text-base text-forest-900">{n.nom}</h3>
                      <p className="text-xs text-forest-600/80 mt-1">{n.formes_recommandees[0]}</p>
                      <p className="text-xs text-forest-700/80 mt-3 line-clamp-2">{n.roles[0]}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-forest-700 group-hover:text-forest-900">
                        Lire la fiche <ArrowRight className="h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <ButtonLink href="/nutritherapie/micronutriments" variant="primary">
                Voir tous les micronutriments <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </section>
        </Container>
      </section>
    </>
  );
}
