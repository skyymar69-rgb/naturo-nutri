import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, Leaf, FlaskConical, BookOpen, Sprout,
  CheckCircle2, Droplets, Wind, Star, ChevronRight, BookHeart, GlassWater, Quote,
} from 'lucide-react';
import { AnimatedSection, StaggerChildren } from '@/components/AnimatedSection';
import { NewsletterCard } from '@/components/NewsletterCard';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WaveDown fill="white" />
      <TwoDomains />
      <StatsBand />
      <WaveDown fill="#f2fbf4" />
      <VisionBand />
      <WhySection />
      <WaveDown fill="white" />
      <TopicsGrid />
      <WaveDown fill="#f2fbf4" />
      <CtaBanner />
      <section className="bg-cream-50 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterCard />
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────
   WAVE DIVIDERS
───────────────────────────────────────── */
function WaveDown({ fill }: { fill: string }) {
  return (
    <div className="w-full overflow-hidden leading-[0] -my-px">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-[50px] sm:h-[60px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" fill={fill} />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero-bg pb-0 pt-12 sm:pt-16 lg:pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left column ── */}
          <AnimatedSection animation="fade-up" duration={800} className="max-w-xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/70 border border-sage-200 text-sage-700 text-xs font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-7 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-sage-500 animate-pulse" />
              Portail de référence francophone
            </div>

            {/* Headline */}
            <h1 className="font-display text-[3.2rem] sm:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] text-forest-900 leading-[1.0] mb-6">
              Mangez mieux.
              <br />
              <span className="text-sage-500">Vivez mieux.</span>
              <br />
              Durablement.
            </h1>

            {/* Body */}
            <p className="text-lg sm:text-xl text-forest-700/85 leading-relaxed mb-9">
              Deux disciplines complémentaires pour reprendre votre santé en main :
              la <strong className="text-forest-900 font-semibold">naturopathie</strong> qui rééquilibre
              le terrain, et la <strong className="text-forest-900 font-semibold">nutrithérapie</strong>{' '}
              qui nourrit avec précision.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/naturopathie"
                className="inline-flex items-center gap-2 bg-sage-500 hover:bg-sage-600 text-white font-semibold px-7 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                <Leaf className="h-4 w-4" />
                Naturopathie
              </Link>
              <Link
                href="/nutritherapie"
                className="inline-flex items-center gap-2 border-2 border-earth-500 text-earth-600 hover:bg-earth-50 font-semibold px-7 py-3.5 rounded-full transition-all"
              >
                <FlaskConical className="h-4 w-4" />
                Nutrithérapie
              </Link>
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-forest-100 pt-7">
              {[
                { val: '163+', lbl: 'Guides & articles' },
                { val: '100%', lbl: 'Indépendant' },
                { val: 'Gratuit', lbl: 'Accès libre' },
              ].map((s) => (
                <div key={s.lbl}>
                  <p className="font-display text-2xl sm:text-3xl text-forest-900">{s.val}</p>
                  <p className="text-xs sm:text-sm text-forest-600 mt-0.5">{s.lbl}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* ── Right column — circular food photo ── */}
          <AnimatedSection animation="scale-up" delay={200} duration={900} className="relative flex justify-center lg:justify-end pb-0">
            <div className="relative w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px]">

              {/* Background circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sage-200 to-sage-100 shadow-inner" />

              {/* Photo circle */}
              <div className="absolute inset-5 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                  alt="Assiette santé colorée avec viande et légumes"
                  fill
                  className="object-cover img-food"
                  priority
                  sizes="480px"
                />
              </div>

              {/* Floating badge — top left */}
              <div className="absolute -top-4 -left-4 sm:-left-8 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 bg-sage-100 rounded-xl grid place-items-center flex-shrink-0">
                  <Sprout className="h-5 w-5 text-sage-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-forest-900">Naturopathie</p>
                  <p className="text-xs text-forest-500">11 thèmes</p>
                </div>
              </div>

              {/* Floating badge — bottom right */}
              <div className="absolute -bottom-4 -right-4 sm:-right-8 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-10 h-10 bg-earth-100 rounded-xl grid place-items-center flex-shrink-0">
                  <FlaskConical className="h-5 w-5 text-earth-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-forest-900">Nutrithérapie</p>
                  <p className="text-xs text-forest-500">9 catégories</p>
                </div>
              </div>

              {/* Leaf — top right */}
              <svg
                className="absolute -top-6 right-8 w-16 h-16 text-sage-400 opacity-80 rotate-[25deg] animate-float"
                style={{ animationDelay: '1s' }}
                viewBox="0 0 64 64"
                fill="currentColor"
              >
                <path d="M32 4 C32 4, 58 16, 58 38 C58 52, 46 60, 32 60 C32 60, 32 38, 32 4Z" opacity="0.8" />
                <path d="M32 4 C32 4, 6 16, 6 38 C6 52, 18 60, 32 60 C32 60, 32 38, 32 4Z" opacity="0.5" />
              </svg>

              {/* Leaf — bottom left */}
              <svg
                className="absolute bottom-4 -left-8 w-12 h-12 text-sage-500 opacity-70 rotate-[-40deg] animate-float"
                style={{ animationDelay: '3s' }}
                viewBox="0 0 64 64"
                fill="currentColor"
              >
                <path d="M32 4 C32 4, 58 16, 58 38 C58 52, 46 60, 32 60 C32 60, 32 38, 32 4Z" />
              </svg>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   TWO DOMAINS
───────────────────────────────────────── */
function TwoDomains() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection animation="fade-up" className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-sage-600 mb-3">Nos quatre piliers</p>
          <h2 className="font-display text-4xl sm:text-5xl text-forest-900">
            Choisissez votre approche
          </h2>
          <p className="mt-4 text-forest-700/85 max-w-2xl mx-auto">
            Deux disciplines complémentaires — naturopathie et nutrithérapie — augmentées d'une encyclopédie
            de plantes par indication et d'un recueil de recettes de jus inspiré de Norman W. Walker.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Naturopathie */}
          <AnimatedSection animation="slide-left" delay={100}>
            <Link href="/naturopathie" className="group block">
              <div className="bg-forest-50 hover:bg-forest-100 rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-forest-100">
                <div className="w-16 h-16 bg-forest-700 rounded-2xl grid place-items-center mb-6 shadow-md group-hover:bg-forest-600 transition-colors">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-3xl sm:text-4xl text-forest-900">Naturopathie</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-forest-500 bg-forest-100 px-3 py-1.5 rounded-full mt-1">Terrain</span>
                </div>
                <p className="text-forest-700/85 leading-relaxed mb-7">
                  La médecine du vivant — rééquilibrer, drainer, régénérer. Agit en amont du symptôme par la nature et le mode de vie.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {['Jeûnes & monodiètes', 'Purges & drainages', 'Plantes médicinales', 'Hydrothérapie & aromathérapie', 'Alimentation vivante', 'Cures saisonnières'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-forest-800">
                      <CheckCircle2 className="h-4 w-4 text-sage-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 bg-forest-700 group-hover:bg-forest-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all">
                  Explorer la naturopathie
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Nutrithérapie */}
          <AnimatedSection animation="slide-right" delay={200}>
            <Link href="/nutritherapie" className="group block">
              <div className="bg-earth-50 hover:bg-earth-100 rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-earth-100">
                <div className="w-16 h-16 bg-earth-500 rounded-2xl grid place-items-center mb-6 shadow-md group-hover:bg-earth-400 transition-colors">
                  <FlaskConical className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-3xl sm:text-4xl text-forest-900">Nutrithérapie</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-earth-600 bg-earth-100 px-3 py-1.5 rounded-full mt-1">Précision</span>
                </div>
                <p className="text-forest-700/85 leading-relaxed mb-7">
                  La science des micronutriments — vitamines, minéraux, acides gras, adaptogènes. Combler ce que l&apos;alimentation moderne n&apos;apporte plus.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {['13 vitamines décryptées', '15 minéraux & oligoéléments', 'Acides gras essentiels', 'Probiotiques & microbiote', 'Adaptogènes & antioxydants', 'Compléments par objectif'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-forest-800">
                      <CheckCircle2 className="h-4 w-4 text-earth-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 bg-earth-500 group-hover:bg-earth-400 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all">
                  Explorer la nutrithérapie
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>

        {/* Pilier 3 et 4 — plantes + jus */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          {/* Plantes qui soignent */}
          <AnimatedSection animation="slide-left" delay={300}>
            <Link href="/plantes" className="group block">
              <div className="bg-sage-50 hover:bg-sage-100 rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-sage-200">
                <div className="w-16 h-16 bg-sage-500 rounded-2xl grid place-items-center mb-6 shadow-md group-hover:bg-sage-600 transition-colors">
                  <BookHeart className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-3xl sm:text-4xl text-forest-900">Les plantes qui soignent</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-sage-700 bg-sage-100 px-3 py-1.5 rounded-full mt-1">Encyclopédie</span>
                </div>
                <p className="text-forest-700/85 leading-relaxed mb-7">
                  Une encyclopédie raisonnée des plantes médicinales, organisée par indication thérapeutique. Niveau de preuve honnête, posologies traditionnelles, contre-indications explicites.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {['Sommeil & nervosité', 'Stress & anxiété', 'Digestion & foie', 'Immunité & infections', 'Circulation & cœur', 'Respiration, peau, sphère féminine'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-forest-800">
                      <CheckCircle2 className="h-4 w-4 text-sage-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 bg-sage-500 group-hover:bg-sage-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all">
                  Découvrir les plantes
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Recettes de jus */}
          <AnimatedSection animation="slide-right" delay={400}>
            <Link href="/jus" className="group block">
              <div className="bg-cream-100 hover:bg-cream-200 rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-forest-100">
                <div className="w-16 h-16 bg-forest-700 rounded-2xl grid place-items-center mb-6 shadow-md group-hover:bg-forest-600 transition-colors">
                  <GlassWater className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-3xl sm:text-4xl text-forest-900">Les recettes de jus</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-forest-700 bg-forest-100 px-3 py-1.5 rounded-full mt-1">Walker</span>
                </div>
                <p className="text-forest-700/85 leading-relaxed mb-7">
                  Recettes de jus de légumes et fruits frais, inspirées de l'œuvre de <strong className="text-forest-900">Norman W. Walker</strong> (1936) et adaptées à l'extracteur ou à la centrifugeuse. Organisées par indication.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {['Méthode Walker (fondamentaux)', 'Drainage & dépuration', 'Énergie & vitalité', 'Immunité saisonnière', 'Digestion, peau, sport', 'Hydratation & légèreté'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-forest-800">
                      <CheckCircle2 className="h-4 w-4 text-forest-700 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 bg-forest-700 group-hover:bg-forest-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all">
                  Explorer les recettes
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   STATS BAND
───────────────────────────────────────── */
function StatsBand() {
  const stats = [
    { value: '200+', label: 'Articles & guides',    icon: BookOpen },
    { value: '40',   label: 'Actualités sourcées',  icon: Star },
    { value: '113',  label: 'PMID vérifiés',        icon: Sprout },
    { value: '0',    label: 'Cookies tiers',        icon: CheckCircle2 },
  ];

  return (
    <section className="bg-forest-700 py-12 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerChildren staggerMs={120} baseDelay={0} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map(({ value, label, icon: Icon }) => (
            <AnimatedSection key={label} animation="fade-up" threshold={0.05} className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-2xl grid place-items-center mx-auto mb-3">
                <Icon className="h-6 w-6 text-sage-300" />
              </div>
              <p className="font-display text-4xl sm:text-5xl text-white">{value}</p>
              <p className="text-sm text-forest-200 mt-1">{label}</p>
            </AnimatedSection>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   VISION BAND — manifeste éditorial
───────────────────────────────────────── */
function VisionBand() {
  return (
    <section className="bg-cream-50 pt-16 sm:pt-24 pb-4 sm:pb-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <figure className="relative">

            {/* Feuilles décoratives */}
            <svg
              className="absolute -top-6 -left-2 sm:-top-8 sm:-left-6 w-14 h-14 sm:w-20 sm:h-20 text-sage-300/60 rotate-[-18deg] pointer-events-none"
              viewBox="0 0 64 64"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M32 4 C32 4, 58 16, 58 38 C58 52, 46 60, 32 60 C32 60, 32 38, 32 4Z" />
            </svg>
            <svg
              className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 text-sage-400/50 rotate-[155deg] pointer-events-none"
              viewBox="0 0 64 64"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M32 4 C32 4, 58 16, 58 38 C58 52, 46 60, 32 60 C32 60, 32 38, 32 4Z" />
            </svg>

            {/* Carte centrale */}
            <div className="relative bg-white rounded-3xl px-6 sm:px-12 lg:px-16 py-10 sm:py-14 shadow-md border border-sage-100 text-center">

              {/* Eyebrow */}
              <p className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-sage-700 mb-6">
                <span className="h-px w-6 bg-sage-400" aria-hidden="true" />
                Notre vision
                <span className="h-px w-6 bg-sage-400" aria-hidden="true" />
              </p>

              {/* Guillemet visuel */}
              <Quote className="mx-auto h-7 w-7 sm:h-8 sm:w-8 text-sage-400/70 mb-4" aria-hidden="true" />

              {/* Citation */}
              <blockquote>
                <p className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] leading-snug text-forest-900 text-balance">
                  Unir la <span className="text-sage-600 italic">rigueur des données scientifiques</span> au{' '}
                  <span className="text-earth-600 italic">plaisir de la table</span> : telle est notre vision d&apos;une
                  nutrition <span className="underline decoration-sage-300 decoration-2 underline-offset-[6px]">systémique</span>,
                  respectueuse de l&apos;humain et de son écosystème.
                </p>
              </blockquote>

              {/* Trois mots-clefs visuels */}
              <div className="mt-9 flex flex-wrap justify-center gap-2.5 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-700 bg-sage-50 border border-sage-200 px-3 py-1.5 rounded-full">
                  <FlaskConical className="h-3.5 w-3.5 text-sage-600" aria-hidden="true" />
                  Science
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-700 bg-cream-100 border border-earth-200 px-3 py-1.5 rounded-full">
                  <BookHeart className="h-3.5 w-3.5 text-earth-600" aria-hidden="true" />
                  Plaisir
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-700 bg-forest-50 border border-forest-200 px-3 py-1.5 rounded-full">
                  <Leaf className="h-3.5 w-3.5 text-forest-600" aria-hidden="true" />
                  Écosystème
                </span>
              </div>
            </div>
          </figure>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   WHY SECTION
───────────────────────────────────────── */
function WhySection() {
  const features = [
    {
      icon: BookOpen,
      bg: 'bg-sage-500',
      title: 'Guides thématiques',
      desc: 'Plus de 163 articles organisés par thème. Du jeûne hydrique aux formes biodisponibles des minéraux.',
    },
    {
      icon: Droplets,
      bg: 'bg-forest-700',
      title: 'Protocoles détaillés',
      desc: 'Pour chaque méthode : préparation, déroulé, sortie de cure, contre-indications et fréquence.',
    },
    {
      icon: FlaskConical,
      bg: 'bg-earth-500',
      title: 'Dosages précis',
      desc: 'AJR vs dose optimale, formes chélatées vs oxydes, interactions et profils de population.',
    },
  ];

  return (
    <section className="bg-cream-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection animation="fade-up" className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-sage-600 mb-3">Notre démarche</p>
          <h2 className="font-display text-4xl sm:text-5xl text-forest-900 text-balance">
            Information sérieuse,
            <br />
            sans dogmatisme
          </h2>
          <p className="mt-5 text-lg text-forest-700/80 leading-relaxed text-balance">
            Loin des modes et des protocoles miracles, nous compilons ce que la naturopathie et la
            nutrithérapie ont de meilleur : des principes éprouvés, des dosages précis, des
            indications et contre-indications honnêtes.
          </p>
          <Link
            href="/notre-demarche"
            className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-sage-700 hover:text-sage-900 underline-offset-4 hover:underline"
          >
            Voir notre démarche éditoriale détaillée <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </AnimatedSection>

        {/* Feature cards — staggered */}
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, bg, title, desc }, i) => (
            <AnimatedSection key={title} animation="fade-up" delay={i * 120}>
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-forest-50 h-full card-glow">
                <div className={`w-14 h-14 ${bg} rounded-2xl grid place-items-center mb-5 shadow-md`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-2xl text-forest-900 mb-2">{title}</h3>
                <p className="text-sm text-forest-700/80 leading-relaxed">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   TOPICS GRID
───────────────────────────────────────── */
function TopicsGrid() {
  const topics = [
    {
      href: '/naturopathie/jeunes',
      icon: Droplets,
      iconBg: 'bg-forest-700',
      category: 'Naturopathie',
      title: 'Jeûnes & monodiètes',
      desc: 'Jeûne hydrique, Buchinger, intermittent, jus, monodiètes — protocoles complets de préparation et de sortie.',
    },
    {
      href: '/nutritherapie/vitamines',
      icon: Star,
      iconBg: 'bg-earth-500',
      category: 'Nutrithérapie',
      title: 'Vitamines essentielles',
      desc: 'De la vitamine D3 à la B12 : formes biodisponibles, dosages optimaux, signes de déficit.',
    },
    {
      href: '/naturopathie/temperaments',
      icon: Sprout,
      iconBg: 'bg-sage-500',
      category: 'Naturopathie',
      title: 'Les 4 tempéraments',
      desc: 'Sanguin, bilieux, nerveux, lymphatique — profil personnalisé avec alimentation et compléments adaptés.',
    },
    {
      href: '/naturopathie/stress-emotions',
      icon: Wind,
      iconBg: 'bg-forest-500',
      category: 'Naturopathie',
      title: 'Stress & sommeil',
      desc: 'Cohérence cardiaque, adaptogènes, plantes et rituels du soir pour retrouver un sommeil profond.',
    },
    {
      href: '/naturopathie/purges',
      icon: Droplets,
      iconBg: 'bg-forest-600',
      category: 'Naturopathie',
      title: 'Purges & drainages',
      desc: "Huile de ricin, lavement, brossage à sec, argile, bentonite — les grandes méthodes de détox.",
    },
    {
      href: '/nutritherapie/mineraux',
      icon: FlaskConical,
      iconBg: 'bg-earth-600',
      category: 'Nutrithérapie',
      title: 'Minéraux & oligoéléments',
      desc: 'Magnésium, zinc, sélénium, iode — formes chélatées vs oxydes, dosages et interactions.',
    },
    {
      href: '/nutritherapie/objectifs',
      icon: CheckCircle2,
      iconBg: 'bg-sage-600',
      category: 'Nutrithérapie',
      title: 'Compléments par objectif',
      desc: 'Fatigue, anxiété, immunité, articulations, cognition — les bonnes associations par besoin.',
    },
    {
      href: '/naturopathie/temperaments/quiz',
      icon: Star,
      iconBg: 'bg-forest-700',
      category: 'Quiz',
      title: 'Découvrir mon tempérament',
      desc: '20 questions pour identifier votre profil hippocratique et obtenir un protocole personnalisé.',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection animation="fade-up" className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sage-600 mb-3">Explorer</p>
            <h2 className="font-display text-4xl sm:text-5xl text-forest-900">
              Thèmes populaires
            </h2>
          </div>
          <Link
            href="/naturopathie"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900 transition-colors"
          >
            Tout voir <ChevronRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topics.map(({ href, icon: Icon, iconBg, category, title, desc }, i) => (
            <AnimatedSection key={href} animation="fade-up" delay={Math.floor(i / 4) * 80 + (i % 4) * 80}>
              <Link href={href} className="group block h-full">
                <div className="bg-cream-50 hover:bg-forest-50 rounded-3xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-forest-50 group-hover:border-forest-100 card-glow">
                  <div className={`w-12 h-12 ${iconBg} rounded-2xl grid place-items-center mb-4 shadow-sm`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-forest-500/70 mb-1.5">{category}</p>
                  <h3 className="font-display text-lg text-forest-900 mb-2 leading-snug group-hover:text-forest-700 transition-colors">{title}</h3>
                  <p className="text-sm text-forest-600/80 leading-relaxed flex-1">{desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sage-600 mt-4 group-hover:gap-2.5 transition-all">
                    Explorer <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CTA BANNER
───────────────────────────────────────── */
function CtaBanner() {
  return (
    <section className="bg-cream-50 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="scale-up">
          <div className="bg-forest-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative px-8 sm:px-14 py-14 sm:py-16">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-forest-600/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage-400/20 rounded-full blur-2xl -translate-x-1/4 translate-y-1/4" />

              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-sage-300 text-xs font-bold uppercase tracking-[0.18em] mb-3">Quiz gratuit</p>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                    Quel est votre
                    <br />
                    tempérament&nbsp;?
                  </h2>
                  <p className="mt-4 text-forest-200 leading-relaxed">
                    Sanguin, bilieux, nerveux ou lymphatique — 20 questions pour identifier votre
                    profil hippocratique et recevoir un protocole personnalisé.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:items-start xl:items-center">
                  <Link
                    href="/naturopathie/temperaments/quiz"
                    className="inline-flex items-center justify-center gap-2 bg-sage-400 hover:bg-sage-300 text-forest-900 font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl text-base"
                  >
                    Faire le quiz
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/naturopathie/temperaments"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all text-base"
                  >
                    Voir les 4 profils
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
