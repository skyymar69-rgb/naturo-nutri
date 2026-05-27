import Link from 'next/link';
import { ArrowRight, Leaf, FlaskConical, Sparkles, BookOpen, Sprout, Pill } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TwoDomains />
      <WhySite />
      <Highlights />
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

      <Container className="py-20 sm:py-28 text-center">
        <Badge variant="earth" className="mb-6">
          <Sparkles className="h-3 w-3" /> Portail de référence francophone
        </Badge>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-forest-900 leading-[1.05] tracking-tight text-balance max-w-5xl mx-auto">
          La santé naturelle,
          <span className="block italic text-earth-600">en profondeur</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-forest-700/85 leading-relaxed max-w-3xl mx-auto text-balance">
          Deux disciplines complémentaires pour reprendre votre santé en main : la naturopathie, qui
          travaille le terrain, et la nutrithérapie, qui apporte au corps ce dont il a besoin avec
          précision.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-forest-700/70">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sage-500" /> Guides détaillés
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-earth-500" /> Protocoles complets
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-forest-500" /> Information vérifiée
          </div>
        </div>
      </Container>
    </section>
  );
}

function TwoDomains() {
  return (
    <section className="py-12 sm:py-16 -mt-8">
      <Container>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <Link href="/naturopathie" className="group">
            <Card hoverable className="overflow-hidden h-full">
              <div className="p-8 lg:p-12 bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900 text-cream-50 relative">
                <div className="absolute -top-6 -right-6 text-[10rem] opacity-10 leading-none select-none">🌿</div>
                <div className="relative">
                  <Badge className="bg-white/20 text-cream-50 ring-white/30 mb-6">
                    <Leaf className="h-3 w-3" /> Naturopathie
                  </Badge>
                  <h2 className="font-display text-4xl lg:text-5xl mb-4 leading-tight">
                    Soigner par le terrain
                  </h2>
                  <p className="text-cream-50/90 leading-relaxed mb-8">
                    Jeûnes, cures de drainage, alimentation vivante, plantes médicinales,
                    hydrothérapie. La médecine du vivant qui agit en amont du symptôme — en
                    rééquilibrant les grandes fonctions du corps.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
                    <div className="flex items-center gap-2 text-cream-50/80">
                      <Sprout className="h-4 w-4 text-sage-300" /> Jeûnes & monodiètes
                    </div>
                    <div className="flex items-center gap-2 text-cream-50/80">
                      <Sprout className="h-4 w-4 text-sage-300" /> Purges & drainages
                    </div>
                    <div className="flex items-center gap-2 text-cream-50/80">
                      <Sprout className="h-4 w-4 text-sage-300" /> Plantes médicinales
                    </div>
                    <div className="flex items-center gap-2 text-cream-50/80">
                      <Sprout className="h-4 w-4 text-sage-300" /> Alimentation vivante
                    </div>
                    <div className="flex items-center gap-2 text-cream-50/80">
                      <Sprout className="h-4 w-4 text-sage-300" /> Hydrothérapie
                    </div>
                    <div className="flex items-center gap-2 text-cream-50/80">
                      <Sprout className="h-4 w-4 text-sage-300" /> Aromathérapie
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-cream-50 font-medium group-hover:gap-3 transition-all">
                    Entrer en naturopathie <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </Card>
          </Link>

          <Link href="/nutritherapie" className="group">
            <Card hoverable className="overflow-hidden h-full">
              <div className="p-8 lg:p-12 bg-gradient-to-br from-earth-500 via-earth-600 to-earth-800 text-cream-50 relative">
                <div className="absolute -top-6 -right-6 text-[10rem] opacity-10 leading-none select-none">⚗️</div>
                <div className="relative">
                  <Badge className="bg-white/20 text-cream-50 ring-white/30 mb-6">
                    <FlaskConical className="h-3 w-3" /> Nutrithérapie
                  </Badge>
                  <h2 className="font-display text-4xl lg:text-5xl mb-4 leading-tight">
                    Nourrir avec précision
                  </h2>
                  <p className="text-cream-50/90 leading-relaxed mb-8">
                    Vitamines, minéraux, oligoéléments, acides gras, antioxydants, adaptogènes. La
                    science des micronutriments pour combler ce que nos aliments modernes n'apportent
                    plus en quantité suffisante.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
                    <div className="flex items-center gap-2 text-cream-50/80">
                      <Pill className="h-4 w-4 text-cream-200" /> 13 vitamines
                    </div>
                    <div className="flex items-center gap-2 text-cream-50/80">
                      <Pill className="h-4 w-4 text-cream-200" /> 15 minéraux
                    </div>
                    <div className="flex items-center gap-2 text-cream-50/80">
                      <Pill className="h-4 w-4 text-cream-200" /> Acides aminés
                    </div>
                    <div className="flex items-center gap-2 text-cream-50/80">
                      <Pill className="h-4 w-4 text-cream-200" /> Acides gras
                    </div>
                    <div className="flex items-center gap-2 text-cream-50/80">
                      <Pill className="h-4 w-4 text-cream-200" /> Microbiote
                    </div>
                    <div className="flex items-center gap-2 text-cream-50/80">
                      <Pill className="h-4 w-4 text-cream-200" /> Compléments ciblés
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-cream-50 font-medium group-hover:gap-3 transition-all">
                    Entrer en nutrithérapie <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </Container>
    </section>
  );
}

function WhySite() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-earth-600 mb-3">
            Notre démarche
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-balance text-forest-900 leading-tight">
            Une connaissance accessible,
            <br />
            sans dogmatisme
          </h2>
          <p className="mt-6 text-base sm:text-lg text-forest-700/85 leading-relaxed text-balance">
            Loin des modes et des protocoles miracles, nous compilons ce que la naturopathie et la
            nutrithérapie ont de meilleur à offrir : des principes éprouvés, des protocoles
            détaillés, des dosages précis, des indications et des contre-indications honnêtes.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: BookOpen,
              title: 'Guides thématiques',
              desc: 'Plus de 200 articles classés par thèmes. Du jeûne hydrique aux dosages personnalisés.',
            },
            {
              icon: Sprout,
              title: 'Protocoles détaillés',
              desc: 'Pour chaque méthode : préparation, déroulé, sortie de cure, fréquence recommandée.',
            },
            {
              icon: FlaskConical,
              title: 'Dosages précis',
              desc: 'Formes biodisponibles, AJR vs dosage optimal, interactions, contre-indications.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title} hoverable accent="forest">
              <CardContent>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-700 text-cream-50 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl text-forest-900 mb-2">{title}</h3>
                <p className="text-sm text-forest-700/85 leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Highlights() {
  return (
    <section className="py-20 bg-forest-50/30">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-earth-600 mb-3">
              Pour commencer
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-900 leading-tight">
              Trois portes d'entrée
            </h2>
            <p className="mt-4 text-forest-700/85 leading-relaxed">
              Trois façons d'aborder le portail selon votre intuition du moment :
            </p>
            <ul className="mt-6 space-y-3 text-forest-800">
              <li className="flex gap-3">
                <span className="text-sage-600 font-bold mt-0.5">1.</span>
                <span>
                  <Link href="/naturopathie/jeunes" className="font-medium underline underline-offset-2 hover:text-forest-900">
                    Comprendre le jeûne
                  </Link> — la voie royale du repos digestif et de la régénération cellulaire.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-sage-600 font-bold mt-0.5">2.</span>
                <span>
                  <Link href="/nutritherapie/vitamines" className="font-medium underline underline-offset-2 hover:text-forest-900">
                    Découvrir les vitamines essentielles
                  </Link> — vitamine D, magnésium, oméga-3 : les piliers de la santé moderne.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-sage-600 font-bold mt-0.5">3.</span>
                <span>
                  <Link href="/naturopathie/temperaments" className="font-medium underline underline-offset-2 hover:text-forest-900">
                    Identifier votre tempérament
                  </Link> — la connaissance hippocratique au service de votre profil unique.
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card hoverable accent="sage" className="aspect-square">
              <CardContent className="flex flex-col justify-between h-full">
                <span className="text-5xl">🌿</span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-forest-500/70 mb-1">
                    Naturopathie
                  </p>
                  <Link href="/naturopathie" className="font-display text-xl text-forest-900 hover:text-forest-700">
                    Explorer →
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card hoverable accent="earth" className="aspect-square translate-y-8">
              <CardContent className="flex flex-col justify-between h-full">
                <span className="text-5xl">💊</span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-earth-600/70 mb-1">
                    Nutrithérapie
                  </p>
                  <Link href="/nutritherapie" className="font-display text-xl text-forest-900 hover:text-earth-700">
                    Explorer →
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card hoverable accent="cream" className="aspect-square -translate-y-4">
              <CardContent className="flex flex-col justify-between h-full">
                <span className="text-5xl">⚖️</span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-forest-500/70 mb-1">
                    Tempéraments
                  </p>
                  <Link href="/naturopathie/temperaments" className="font-display text-xl text-forest-900 hover:text-forest-700">
                    Explorer →
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card hoverable accent="forest" className="aspect-square translate-y-4">
              <CardContent className="flex flex-col justify-between h-full">
                <span className="text-5xl">🧘</span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-forest-500/70 mb-1">
                    Stress & sommeil
                  </p>
                  <Link href="/naturopathie/stress-emotions" className="font-display text-xl text-forest-900 hover:text-forest-700">
                    Explorer →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
