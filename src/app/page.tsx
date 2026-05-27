import Link from 'next/link';
import { ArrowRight, Leaf, FlaskConical, Heart, Sparkles, BookOpen, Droplets } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TEMPERAMENTS, TEMPERAMENT_SLUGS } from '@/lib/temperaments';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FourPillars />
      <TemperamentsTeaser />
      <TwoMasters />
      <MethodsTeaser />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden grain-bg">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-sage-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-earth-100/40 blur-3xl" />
      </div>

      <Container className="py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-slide-up">
            <Badge variant="earth" className="mb-6">
              <Sparkles className="h-3 w-3" /> Inspiré d'Irène Grosjean & du Dr Curtay
            </Badge>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-forest-900 leading-[1.05] tracking-tight text-balance">
              Retrouvez votre santé par
              <span className="block italic text-earth-600">votre tempérament</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-forest-700/85 leading-relaxed max-w-2xl text-balance">
              Un site de référence combinant la sagesse millénaire d'Hippocrate, l'alimentation
              vivante d'Irène Grosjean et la nutrithérapie de précision du Dr Jean-Paul Curtay.
              Découvrez votre profil et recevez un protocole sur-mesure.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/quiz-temperament" variant="primary" size="lg">
                Passer le quiz tempérament
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/methodes" variant="secondary" size="lg">
                Explorer les méthodes
              </ButtonLink>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-forest-700/70">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sage-500" /> Quiz en 20 questions
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-earth-500" /> Protocoles personnalisés
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-forest-500" /> Sources scientifiques
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {TEMPERAMENT_SLUGS.map((slug, i) => {
                  const t = TEMPERAMENTS[slug];
                  return (
                    <Link
                      key={slug}
                      href={`/temperaments/${slug}`}
                      className="group"
                      style={{ transform: `translateY(${i % 2 === 0 ? '0' : '24px'})` }}
                    >
                      <Card
                        hoverable
                        className="aspect-[4/5] flex flex-col justify-between p-5"
                      >
                        <span className="text-4xl">{t.emoji}</span>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-forest-500/70">
                            Tempérament
                          </p>
                          <p className="font-display text-2xl text-forest-900 mt-1">{t.nom}</p>
                          <p className="text-xs text-forest-600/70 mt-1 capitalize">
                            Élément · {t.element}
                          </p>
                        </div>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FourPillars() {
  const pillars = [
    {
      icon: Leaf,
      title: 'Naturopathie',
      desc: "Les 4 lois du vivant selon Irène Grosjean : respirer, manger, dormir, éliminer.",
    },
    {
      icon: FlaskConical,
      title: 'Nutrithérapie',
      desc: "Compléments ciblés, micronutriments biodisponibles, 8 règles d'or du Dr Curtay.",
    },
    {
      icon: Droplets,
      title: 'Cures de drainage',
      desc: "Jeûnes, monodiètes, purges et drainages adaptés à votre terrain hippocratique.",
    },
    {
      icon: Heart,
      title: 'Personnalisation',
      desc: "Aucune recette universelle : chaque protocole respecte votre tempérament.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Notre approche"
          title="Quatre piliers, une méthode"
          description="Au lieu d'un régime universel, une approche qui s'adapte à votre terrain hippocratique."
          align="center"
          className="mb-16"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <Card key={title} hoverable accent="forest">
              <CardContent>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-700 text-cream-50 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle as="h3" className="text-lg">
                  {title}
                </CardTitle>
                <CardDescription className="mt-2">{desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TemperamentsTeaser() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-cream-50 to-cream-100">
      <Container>
        <SectionHeading
          eyebrow="Les 4 tempéraments"
          title={
            <>
              Vous êtes <span className="italic text-earth-600">unique</span> — votre protocole
              doit l'être aussi
            </>
          }
          description="La classification hippocratique distingue quatre profils physiologiques. Identifier le vôtre, c'est connaître ses points forts, ses fragilités, et adapter chaque conseil."
          align="center"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEMPERAMENT_SLUGS.map((slug) => {
            const t = TEMPERAMENTS[slug];
            return (
              <Link key={slug} href={`/temperaments/${slug}`} className="group block">
                <Card hoverable accent="cream" className="h-full">
                  <CardContent>
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{t.emoji}</span>
                      <Badge variant={slug}>{t.element}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{t.nom}</CardTitle>
                    <p className="text-xs text-forest-500 mt-1 uppercase tracking-wider">
                      Humeur · {t.humeur}
                    </p>
                    <CardDescription className="mt-3 line-clamp-3">{t.description}</CardDescription>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-forest-700 group-hover:text-forest-900 transition-colors">
                      Découvrir <ArrowRight className="h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink href="/quiz-temperament" variant="earth" size="lg">
            Découvrir mon tempérament en 5 minutes
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

function TwoMasters() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Les sources"
          title="Deux maîtres, une vision complémentaire"
          align="center"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <Card accent="forest" className="overflow-hidden">
            <div className="p-8 bg-gradient-to-br from-forest-50 to-sage-50">
              <Badge variant="forest" className="mb-4">École Grosjean</Badge>
              <h3 className="font-display text-3xl text-forest-900 mb-2">Irène Grosjean</h3>
              <p className="text-sm text-forest-700/70 mb-4">Naturopathe — Alimentation vivante</p>
              <p className="text-forest-800/90 leading-relaxed">
                Disciple historique du Dr Marchesseau, Irène Grosjean transmet depuis 50 ans une
                méthode naturopathique authentique fondée sur les{' '}
                <strong>4 lois du vivant</strong> : respirer, se nourrir, dormir, éliminer.
              </p>
            </div>
            <CardContent>
              <ul className="space-y-3 text-sm text-forest-800/90">
                <li className="flex gap-3">
                  <Leaf className="h-4 w-4 mt-0.5 text-sage-600 flex-shrink-0" />
                  <span>Alimentation vivante : crudités, germinations, jus, lacto-fermentations</span>
                </li>
                <li className="flex gap-3">
                  <Leaf className="h-4 w-4 mt-0.5 text-sage-600 flex-shrink-0" />
                  <span>Cures de drainage : jeûnes, monodiètes, purges traditionnelles</span>
                </li>
                <li className="flex gap-3">
                  <Leaf className="h-4 w-4 mt-0.5 text-sage-600 flex-shrink-0" />
                  <span>Toxémie et terrain : comprendre la cause avant le symptôme</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card accent="earth" className="overflow-hidden">
            <div className="p-8 bg-gradient-to-br from-earth-50 to-cream-100">
              <Badge variant="earth" className="mb-4">École Curtay</Badge>
              <h3 className="font-display text-3xl text-forest-900 mb-2">Dr Jean-Paul Curtay</h3>
              <p className="text-sm text-forest-700/70 mb-4">Médecin — Pionnier de la nutrithérapie</p>
              <p className="text-forest-800/90 leading-relaxed">
                Fondateur de la nutrithérapie moderne en France, le Dr Curtay a démontré que la
                supplémentation micronutritionnelle ciblée transforme la santé. Ses{' '}
                <strong>8 règles d'or</strong> guident le choix des compléments alimentaires.
              </p>
            </div>
            <CardContent>
              <ul className="space-y-3 text-sm text-forest-800/90">
                <li className="flex gap-3">
                  <FlaskConical className="h-4 w-4 mt-0.5 text-earth-600 flex-shrink-0" />
                  <span>Formes biodisponibles : glycérophosphate, méthylcobalamine, P5P, MK-7</span>
                </li>
                <li className="flex gap-3">
                  <FlaskConical className="h-4 w-4 mt-0.5 text-earth-600 flex-shrink-0" />
                  <span>Vitamines naturelles : RRR-d-alpha tocophérol, jamais synthétiques</span>
                </li>
                <li className="flex gap-3">
                  <FlaskConical className="h-4 w-4 mt-0.5 text-earth-600 flex-shrink-0" />
                  <span>Interactions médicaments-nutriments : tableaux de référence</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function MethodsTeaser() {
  const methods = [
    {
      slug: 'jeune-hydrique',
      title: 'Jeûne hydrique',
      desc: 'L\'autolyse cellulaire, le repos digestif total. Pilier des cures de régénération.',
      duree: '1 à 21 jours',
    },
    {
      slug: 'alimentation-vivante',
      title: 'Alimentation vivante',
      desc: 'Crudités, jus, graines germées, lacto-fermentations. La pédagogie de Grosjean.',
      duree: 'Au long cours',
    },
    {
      slug: 'monodietes',
      title: 'Monodiètes',
      desc: 'Cure d\'un seul aliment 1 à 7 jours : raisin, pomme, riz, pastèque selon la saison.',
      duree: '1 à 7 jours',
    },
    {
      slug: 'purge-ricin',
      title: 'Purge à l\'huile de ricin',
      desc: 'Méthode traditionnelle de vidange intestinale et drainage hépatique.',
      duree: '1 journée',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-forest-50/30">
      <Container>
        <SectionHeading
          eyebrow="Les méthodes"
          title="Cures, jeûnes, alimentation"
          description="Des protocoles détaillés, leurs bénéfices, leurs contre-indications, et le tempérament idéal pour chacun."
          align="center"
          className="mb-16"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((m) => (
            <Link key={m.slug} href={`/methodes/${m.slug}`} className="group">
              <Card hoverable accent="sage" className="h-full">
                <CardContent>
                  <BookOpen className="h-6 w-6 text-forest-600 mb-3" />
                  <CardTitle className="text-lg">{m.title}</CardTitle>
                  <CardDescription className="mt-2">{m.desc}</CardDescription>
                  <p className="text-xs text-forest-500 mt-4 font-medium">Durée : {m.duree}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24">
      <Container size="prose">
        <div className="rounded-3xl bg-gradient-to-br from-forest-700 to-forest-900 p-12 text-center text-cream-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 text-9xl">🌿</div>
            <div className="absolute bottom-10 left-10 text-9xl">⚗️</div>
          </div>
          <div className="relative">
            <Sparkles className="h-10 w-10 mx-auto mb-6 text-earth-300" />
            <h2 className="font-display text-3xl sm:text-4xl text-balance">
              Prêt à découvrir votre tempérament ?
            </h2>
            <p className="mt-4 text-cream-100/85 max-w-xl mx-auto leading-relaxed">
              20 questions, 5 minutes, et un protocole détaillé combinant alimentation, jeûnes,
              compléments et plantes adaptés à votre profil unique.
            </p>
            <div className="mt-8">
              <ButtonLink
                href="/quiz-temperament"
                variant="earth"
                size="lg"
                className="bg-cream-50 text-forest-900 hover:bg-cream-100"
              >
                Commencer le quiz <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
