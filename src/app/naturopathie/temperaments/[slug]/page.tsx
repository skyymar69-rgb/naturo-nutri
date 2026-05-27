import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Heart, Leaf, FlaskConical, Droplets, Sprout, AlertCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';
import { WarningBox, MedicalDisclaimer } from '@/components/ui/WarningBox';
import { TEMPERAMENTS, TEMPERAMENT_SLUGS, getTemperament } from '@/lib/temperaments';
import type { TemperamentSlug } from '@/lib/types';

export function generateStaticParams() {
  return TEMPERAMENT_SLUGS.map((slug) => ({ slug }));
}

interface PageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const t = getTemperament(params.slug);
  if (!t) return {};
  return {
    title: `Tempérament ${t.nom}`,
    description: `Profil ${t.nom.toLowerCase()} : alimentation, compléments, jeûnes, purges et plantes adaptés à ce tempérament hippocratique.`,
  };
}

export default function TemperamentPage({ params }: PageProps) {
  const t = getTemperament(params.slug);
  if (!t) notFound();

  const otherTemperaments = TEMPERAMENT_SLUGS.filter((s) => s !== (params.slug as TemperamentSlug));

  return (
    <>
      <section
        className="relative py-16 sm:py-24 text-cream-50 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${t.couleurHex}, ${t.couleurHex}99)` }}
      >
        <div className="absolute inset-0 opacity-10 text-[18rem] leading-none select-none">
          <span className="absolute -top-10 -right-10">{t.emoji}</span>
        </div>
        <Container className="relative">
          <Link href="/naturopathie/temperaments" className="text-sm text-cream-50/80 hover:text-cream-50 mb-4 inline-block">
            ← Tous les tempéraments
          </Link>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <Badge className="bg-white/20 text-cream-50 ring-white/30 mb-4">
                {t.element} · {t.humeur}
              </Badge>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight">{t.nom}</h1>
              <p className="mt-4 text-cream-50/85 text-sm sm:text-base uppercase tracking-wider">
                Émotion dominante · {t.emotion_dominante}
              </p>
              <p className="mt-6 text-lg text-cream-50/95 leading-relaxed max-w-2xl">{t.description}</p>
              <p className="mt-4 text-base text-cream-50/85 leading-relaxed max-w-2xl">
                <strong className="text-cream-50">Morphologie typique :</strong> {t.morphologie}
              </p>
              <div className="mt-8">
                <ButtonLink
                  href="/naturopathie/temperaments/quiz"
                  variant="secondary"
                  className="bg-cream-50 text-forest-900 hover:bg-cream-100 border-cream-50"
                >
                  Vérifier mon tempérament
                </ButtonLink>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <span className="text-[14rem] leading-none">{t.emoji}</span>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12 space-y-16">
        <section className="grid lg:grid-cols-3 gap-6">
          <Card accent="cream">
            <CardContent>
              <Heart className="h-5 w-5 text-forest-600 mb-2" />
              <CardTitle as="h3" className="text-base">Organes cibles</CardTitle>
              <ul className="mt-3 space-y-1 text-sm text-forest-800/85">
                {t.organes_cibles.map((o) => (
                  <li key={o} className="flex gap-2"><span className="text-sage-600">●</span><span>{o}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card accent="cream">
            <CardContent>
              <Sprout className="h-5 w-5 text-sage-600 mb-2" />
              <CardTitle as="h3" className="text-base">Forces</CardTitle>
              <ul className="mt-3 space-y-1 text-sm text-forest-800/85">
                {t.forces.map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-sage-600">●</span><span>{f}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card accent="cream">
            <CardContent>
              <AlertCircle className="h-5 w-5 text-earth-600 mb-2" />
              <CardTitle as="h3" className="text-base">Vigilance</CardTitle>
              <ul className="mt-3 space-y-1 text-sm text-forest-800/85">
                {t.faiblesses.map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-earth-500">●</span><span>{f}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-6 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-forest-700 text-cream-50">
              <Leaf className="h-5 w-5" />
            </span>
            Alimentation
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <Card accent="forest">
              <CardContent>
                <CardTitle className="text-lg mb-4 text-sage-700">À privilégier</CardTitle>
                <ul className="space-y-2 text-sm text-forest-800/90">
                  {t.alimentation.favoris.map((f) => (
                    <li key={f} className="flex gap-2.5"><span className="text-sage-600 font-bold">+</span><span>{f}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card accent="earth">
              <CardContent>
                <CardTitle className="text-lg mb-4 text-earth-700">À éviter ou limiter</CardTitle>
                <ul className="space-y-2 text-sm text-forest-800/90">
                  {t.alimentation.a_eviter.map((f) => (
                    <li key={f} className="flex gap-2.5"><span className="text-earth-500 font-bold">−</span><span>{f}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <h4 className="font-display text-lg text-forest-900 mb-3">Principes clés</h4>
            <ul className="space-y-2 text-sm text-forest-800/90">
              {t.alimentation.principes.map((p) => (
                <li key={p} className="flex gap-2.5"><span className="text-forest-600 mt-0.5">▸</span><span>{p}</span></li>
              ))}
            </ul>
          </div>
          <WarningBox variant="info" title="À retenir" className="mt-6">
            <p>{t.alimentation.note}</p>
          </WarningBox>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-6 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-forest-700 text-cream-50">
              <FlaskConical className="h-5 w-5" />
            </span>
            Compléments alimentaires prioritaires
          </h2>
          <div className="space-y-4">
            {t.nutritherapie.priorites.map((p) => (
              <Card key={p.nom} accent="earth">
                <CardContent className="p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                    <h4 className="font-display text-lg text-forest-900">{p.nom}</h4>
                    {p.forme && <Badge variant="earth" className="text-xs">{p.forme}</Badge>}
                  </div>
                  <p className="text-sm text-forest-800/90 leading-relaxed">{p.raison}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {t.nutritherapie.a_eviter.length > 0 && (
            <WarningBox variant="warning" title="À éviter en complémentation" className="mt-6">
              <ul className="space-y-1">
                {t.nutritherapie.a_eviter.map((a) => (<li key={a}>• {a}</li>))}
              </ul>
            </WarningBox>
          )}
          <WarningBox variant="info" title="À retenir" className="mt-6">
            <p>{t.nutritherapie.note}</p>
          </WarningBox>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-6 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-forest-700 text-cream-50">
              <Droplets className="h-5 w-5" />
            </span>
            Jeûnes & cures
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.jeunes.map((j) => (
              <Card key={j.type} accent="sage">
                <CardContent className="p-5">
                  <h4 className="font-display text-lg text-forest-900 mb-1">{j.type}</h4>
                  <p className="text-xs uppercase tracking-wider text-forest-600 mb-3">Durée · {j.duree}</p>
                  <p className="text-sm text-forest-800/90 leading-relaxed mb-3">{j.note}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {j.saison_ideale.map((s) => (<Badge key={s} variant="sage" className="text-xs capitalize">{s}</Badge>))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-6 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-forest-700 text-cream-50">
              <Droplets className="h-5 w-5" />
            </span>
            Purges & drainages
          </h2>
          <div className="space-y-4">
            {t.purges.map((p) => (
              <Card key={p.nom} accent="cream">
                <CardContent className="p-5">
                  <h4 className="font-display text-lg text-forest-900 mb-2">{p.nom}</h4>
                  <p className="text-sm text-forest-800/90 mb-2"><strong>Protocole :</strong> {p.protocole}</p>
                  <p className="text-xs text-forest-600"><strong>Fréquence :</strong> {p.frequence}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-forest-900 mb-6 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-forest-700 text-cream-50">
              <Sprout className="h-5 w-5" />
            </span>
            Plantes alliées
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.plantes.map((p) => (
              <Card key={p.nom} accent="sage">
                <CardContent className="p-4">
                  <h4 className="font-display text-base text-forest-900">{p.nom}</h4>
                  <p className="text-sm text-forest-700/80 mt-1">{p.usage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <MedicalDisclaimer />

        <section>
          <h2 className="font-display text-2xl text-forest-900 mb-6">Autres tempéraments</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherTemperaments.map((s) => {
              const other = TEMPERAMENTS[s];
              return (
                <Link key={s} href={`/naturopathie/temperaments/${s}`} className="group">
                  <Card hoverable accent="cream">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{other.emoji}</span>
                        <CardTitle className="text-lg">{other.nom}</CardTitle>
                      </div>
                      <p className="text-xs text-forest-600 mb-3 line-clamp-2">{other.morphologie}</p>
                      <span className="text-xs text-forest-700 group-hover:text-forest-900 font-medium inline-flex items-center gap-1">
                        Voir le profil <ArrowRight className="h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
      </Container>
    </>
  );
}
