import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, Leaf, FlaskConical, BookOpen, Sprout,
  CheckCircle2, Droplets, Wind, Star, ChevronRight, BookHeart, GlassWater,
  Quote, Stethoscope, Scale,
} from 'lucide-react';
import { AnimatedSection, StaggerChildren } from '@/components/AnimatedSection';
import { NewsletterCard } from '@/components/NewsletterCard';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <StatsBand />
      <ToolsShowcase />
      <VisionBand />
      <WhySection />
      <TopicsGrid />
      <CtaBanner />
      <section className="bg-cream-50 pb-20 pt-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterCard />
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────
   DÉCORATIONS — feuilles organiques réutilisables
───────────────────────────────────────── */
function LeafShape({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M32 3 C32 3, 59 16, 59 39 C59 53, 46 61, 32 61 C32 61, 32 39, 32 3Z" opacity="0.85" />
      <path d="M32 3 C32 3, 5 16, 5 39 C5 53, 18 61, 32 61 C32 61, 32 39, 32 3Z" opacity="0.55" />
      <path d="M32 8 L32 58" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

/* Séparateur organique fluide entre sections */
function OrganicDivider({ fill, flip = false }: { fill: string; flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] -my-px ${flip ? 'rotate-180' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[44px] sm:h-[64px]" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,40 C220,90 420,0 720,32 C1000,62 1180,8 1440,44 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative mesh-organic grain-overlay overflow-hidden pt-12 sm:pt-16 lg:pt-24 pb-8">
      {/* Blobs morphing en arrière-plan */}
      <div className="absolute -top-24 -left-20 w-[28rem] h-[28rem] bg-sage-200/45 blob-a animate-blob blur-2xl" aria-hidden="true" />
      <div className="absolute top-40 -right-24 w-[24rem] h-[24rem] bg-forest-200/40 blob-b animate-blob-slow blur-2xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center">

          {/* ── Colonne texte ── */}
          <AnimatedSection animation="fade-up" duration={800} className="max-w-xl">
            <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur border border-sage-200 text-sage-700 text-[11px] font-bold uppercase tracking-[0.16em] px-4 py-2 rounded-full mb-7 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-sage-500 dot-pulse" />
              Portail de référence francophone
            </div>

            <h1 className="font-display font-medium text-[3.1rem] sm:text-[4rem] lg:text-[4.6rem] xl:text-[5rem] text-forest-900 leading-[0.98] mb-7">
              Mangez mieux.
              <br />
              <span className="italic text-sage-600 marker-sage">Vivez mieux.</span>
              <br />
              Durablement.
            </h1>

            <p className="text-lg sm:text-xl text-forest-700/90 leading-relaxed mb-9 max-w-lg">
              Deux disciplines complémentaires pour reprendre votre santé en main :
              la <strong className="font-semibold text-forest-900">naturopathie</strong>, qui rééquilibre
              le terrain, et la <strong className="font-semibold text-forest-900">nutrithérapie</strong>,
              qui nourrit avec précision.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/naturopathie"
                className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white font-semibold px-7 py-3.5 rounded-full transition-all shadow-soft hover:shadow-organic hover:-translate-y-0.5"
              >
                <Leaf className="h-4 w-4" />
                Explorer la naturopathie
              </Link>
              <Link
                href="/nutritherapie"
                className="inline-flex items-center gap-2 border-2 border-earth-400 text-earth-700 hover:bg-earth-50 font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
              >
                <FlaskConical className="h-4 w-4" />
                La nutrithérapie
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md">
              {[
                { val: '163+', lbl: 'Guides & articles' },
                { val: '100%', lbl: 'Indépendant' },
                { val: 'Gratuit', lbl: 'Accès libre' },
              ].map((s) => (
                <div key={s.lbl} className="relative">
                  <p className="font-display text-3xl sm:text-[2.1rem] text-forest-900 leading-none">{s.val}</p>
                  <p className="text-xs sm:text-sm text-forest-600 mt-1.5">{s.lbl}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* ── Colonne visuelle — médaillon organique ── */}
          <AnimatedSection animation="scale-up" delay={200} duration={900} className="relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[380px] sm:w-[400px] sm:h-[460px] lg:w-[460px] lg:h-[520px]">

              {/* Halo organique derrière */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage-300/60 to-forest-200/50 blob-b animate-blob-slow scale-105" aria-hidden="true" />

              {/* Photo en forme organique */}
              <div className="absolute inset-3 blob-a animate-blob overflow-hidden shadow-organic ring-1 ring-white/60">
                <Image
                  src="https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                  alt="Assiette santé colorée de légumes et protéines"
                  fill
                  className="object-cover img-food"
                  priority
                  sizes="(max-width: 1024px) 400px, 460px"
                />
              </div>

              {/* Badge flottant — haut gauche */}
              <div className="absolute top-2 -left-3 sm:-left-7 bg-white/95 backdrop-blur rounded-2xl shadow-soft px-4 py-3 flex items-center gap-3 badge-float-1 z-10">
                <div className="w-10 h-10 bg-forest-100 rounded-xl grid place-items-center flex-shrink-0">
                  <Sprout className="h-5 w-5 text-forest-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-forest-900">Naturopathie</p>
                  <p className="text-[11px] text-forest-500">11 thèmes</p>
                </div>
              </div>

              {/* Badge flottant — bas droite */}
              <div className="absolute bottom-6 -right-3 sm:-right-7 bg-white/95 backdrop-blur rounded-2xl shadow-soft px-4 py-3 flex items-center gap-3 badge-float-2 z-10">
                <div className="w-10 h-10 bg-earth-100 rounded-xl grid place-items-center flex-shrink-0">
                  <FlaskConical className="h-5 w-5 text-earth-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-forest-900">Nutrithérapie</p>
                  <p className="text-[11px] text-forest-500">9 catégories</p>
                </div>
              </div>

              {/* Feuilles flottantes */}
              <LeafShape className="absolute -top-7 right-10 w-16 h-16 text-sage-400/80 animate-sway" />
              <LeafShape className="absolute bottom-2 -left-6 w-12 h-12 text-forest-400/70 animate-sway" style={{ animationDelay: '-3s' }} />
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="mt-10 sm:mt-14">
        <OrganicDivider fill="#ffffff" />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PILIERS — quatre chemins
───────────────────────────────────────── */
const PILLARS = [
  {
    href: '/naturopathie',
    icon: Leaf,
    badge: 'Terrain',
    title: 'Naturopathie',
    desc: 'La médecine du vivant — rééquilibrer, drainer, régénérer. Agir en amont du symptôme par la nature et le mode de vie.',
    items: ['Jeûnes & monodiètes', 'Purges & drainages', 'Plantes médicinales', 'Hydro & aromathérapie', 'Alimentation vivante', 'Cures saisonnières'],
    cta: 'Explorer la naturopathie',
    theme: { card: 'from-forest-50 to-forest-100/60 border-forest-100', icon: 'bg-forest-700', tint: 'text-forest-700', chip: 'bg-forest-100 text-forest-700', btn: 'bg-forest-700 group-hover:bg-forest-800', blob: 'bg-forest-200/40' },
  },
  {
    href: '/nutritherapie',
    icon: FlaskConical,
    badge: 'Précision',
    title: 'Nutrithérapie',
    desc: "La science des micronutriments — vitamines, minéraux, acides gras, adaptogènes. Combler ce que l'alimentation moderne n'apporte plus.",
    items: ['13 vitamines décryptées', '15 minéraux & oligos', 'Acides gras essentiels', 'Probiotiques & microbiote', 'Adaptogènes & antioxydants', 'Compléments par objectif'],
    cta: 'Explorer la nutrithérapie',
    theme: { card: 'from-earth-50 to-earth-100/50 border-earth-100', icon: 'bg-earth-500', tint: 'text-earth-600', chip: 'bg-earth-100 text-earth-700', btn: 'bg-earth-500 group-hover:bg-earth-600', blob: 'bg-earth-200/40' },
  },
  {
    href: '/plantes',
    icon: BookHeart,
    badge: 'Encyclopédie',
    title: 'Les plantes qui soignent',
    desc: 'Une encyclopédie raisonnée des plantes médicinales, organisée par indication. Niveau de preuve honnête, posologies et contre-indications explicites.',
    items: ['Sommeil & nervosité', 'Stress & anxiété', 'Digestion & foie', 'Immunité & infections', 'Circulation & cœur', 'Respiration, peau, féminin'],
    cta: 'Découvrir les plantes',
    theme: { card: 'from-sage-50 to-sage-100/60 border-sage-200', icon: 'bg-sage-500', tint: 'text-sage-700', chip: 'bg-sage-100 text-sage-700', btn: 'bg-sage-500 group-hover:bg-sage-600', blob: 'bg-sage-200/50' },
  },
  {
    href: '/jus',
    icon: GlassWater,
    badge: 'Walker',
    title: 'Les recettes de jus',
    desc: "Jus de légumes et fruits frais inspirés de l'œuvre de Norman W. Walker (1936), adaptés à l'extracteur ou la centrifugeuse, organisés par indication.",
    items: ['Méthode Walker', 'Drainage & dépuration', 'Énergie & vitalité', 'Immunité saisonnière', 'Digestion, peau, sport', 'Hydratation & légèreté'],
    cta: 'Explorer les recettes',
    theme: { card: 'from-cream-100 to-cream-200/60 border-forest-100', icon: 'bg-forest-700', tint: 'text-forest-700', chip: 'bg-forest-100 text-forest-700', btn: 'bg-forest-700 group-hover:bg-forest-800', blob: 'bg-forest-200/30' },
  },
];

function Pillars() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage-600 mb-3">Nos quatre piliers</p>
          <h2 className="font-display text-[2.5rem] sm:text-5xl lg:text-[3.4rem] text-forest-900 leading-[1.05]">
            Quatre chemins vers le <span className="italic text-sage-600">vivant</span>
          </h2>
          <p className="mt-5 text-forest-700/85 leading-relaxed">
            Deux disciplines complémentaires — naturopathie et nutrithérapie — augmentées d'une encyclopédie
            de plantes par indication et d'un recueil de recettes de jus inspiré de Norman W. Walker.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-7">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimatedSection key={p.href} animation="fade-up" delay={(i % 2) * 120}>
                <Link href={p.href} className="group block h-full">
                  <article className={`relative overflow-hidden h-full bg-gradient-to-br ${p.theme.card} border rounded-4xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-organic`}>
                    {/* Blob décoratif d'angle */}
                    <div className={`absolute -top-10 -right-10 w-40 h-40 ${p.theme.blob} blob-a animate-blob-slow`} aria-hidden="true" />
                    {/* Numéro filigrane */}
                    <span className="absolute top-6 right-7 font-display text-6xl text-forest-900/5 select-none" aria-hidden="true">
                      0{i + 1}
                    </span>

                    <div className="relative">
                      <div className={`w-16 h-16 ${p.theme.icon} rounded-2xl grid place-items-center mb-6 shadow-md`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <h3 className="font-display text-[1.9rem] sm:text-[2.2rem] text-forest-900 leading-tight">{p.title}</h3>
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${p.theme.chip} px-2.5 py-1 rounded-full`}>{p.badge}</span>
                      </div>
                      <p className="text-forest-700/85 leading-relaxed mb-7 max-w-prose">{p.desc}</p>
                      <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2.5 mb-8">
                        {p.items.map((item) => (
                          <li key={item} className="flex items-center gap-2.5 text-sm text-forest-800">
                            <CheckCircle2 className={`h-4 w-4 ${p.theme.tint} flex-shrink-0`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <span className={`inline-flex items-center gap-2 ${p.theme.btn} text-white font-semibold text-sm px-6 py-3 rounded-full transition-all`}>
                        {p.cta}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            );
          })}
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
    { value: '200+', label: 'Articles & guides',   icon: BookOpen },
    { value: '40',   label: 'Actualités sourcées', icon: Star },
    { value: '113',  label: 'PMID vérifiés',       icon: Sprout },
    { value: '0',    label: 'Cookies tiers',       icon: CheckCircle2 },
  ];

  return (
    <section className="relative mesh-forest grain-overlay py-14 sm:py-16 overflow-hidden">
      <div className="absolute -top-16 left-1/4 w-72 h-72 bg-sage-400/15 blob-a animate-blob blur-2xl" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerChildren staggerMs={120} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map(({ value, label, icon: Icon }) => (
            <AnimatedSection key={label} animation="fade-up" threshold={0.05} className="text-center">
              <div className="w-12 h-12 bg-white/10 ring-1 ring-white/15 rounded-2xl grid place-items-center mx-auto mb-3.5">
                <Icon className="h-6 w-6 text-sage-300" />
              </div>
              <p className="font-display text-4xl sm:text-[3.25rem] text-white leading-none">{value}</p>
              <p className="text-sm text-forest-200/90 mt-2">{label}</p>
            </AnimatedSection>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   OUTILS INTERACTIFS — mis en avant
───────────────────────────────────────── */
function ToolsShowcase() {
  return (
    <section className="bg-cream-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-earth-700 mb-3">Vos outils interactifs</p>
          <h2 className="font-display text-[2.4rem] sm:text-5xl text-forest-900 leading-[1.05]">
            Une boussole pour <span className="italic text-earth-600">vous orienter</span>
          </h2>
          <p className="mt-5 text-forest-700/85 leading-relaxed">
            Deux outils gratuits pour personnaliser votre lecture : identifier votre profil de terrain,
            ou retrouver d'un coup tous les contenus liés à votre situation.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
          {/* Quiz tempérament */}
          <AnimatedSection animation="slide-left">
            <Link href="/naturopathie/temperaments/quiz" className="group block h-full">
              <article className="relative h-full overflow-hidden rounded-4xl mesh-forest grain-overlay p-8 lg:p-10 shadow-soft hover:shadow-organic transition-all duration-300 hover:-translate-y-1.5">
                <div className="absolute -bottom-12 -right-10 w-48 h-48 bg-sage-400/20 blob-b animate-blob-slow" aria-hidden="true" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 bg-white/10 ring-1 ring-white/20 text-sage-200 text-[11px] font-bold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full mb-6">
                    <Scale className="h-3.5 w-3.5" /> Quiz · 20 questions
                  </div>
                  <h3 className="font-display text-3xl sm:text-[2.4rem] text-white leading-tight mb-3">
                    Quel est votre <span className="italic text-sage-300">tempérament</span> ?
                  </h3>
                  <p className="text-forest-100/90 leading-relaxed mb-7 max-w-md">
                    Sanguin, bilieux, nerveux ou lymphatique ? Identifiez votre profil hippocratique
                    et recevez un protocole d'hygiène de vie personnalisé.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['😊 Sanguin', '🔥 Bilieux', '💨 Nerveux', '💧 Lymphatique'].map((t) => (
                      <span key={t} className="text-xs font-medium text-white/90 bg-white/10 ring-1 ring-white/15 px-3 py-1.5 rounded-full">{t}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 bg-sage-400 group-hover:bg-sage-300 text-forest-900 font-bold text-sm px-6 py-3.5 rounded-full transition-all">
                    Faire le quiz
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            </Link>
          </AnimatedSection>

          {/* Par pathologie */}
          <AnimatedSection animation="slide-right" delay={120}>
            <Link href="/outils/par-pathologie" className="group block h-full">
              <article className="relative h-full overflow-hidden rounded-4xl bg-white border border-forest-100 p-8 lg:p-10 shadow-soft hover:shadow-organic transition-all duration-300 hover:-translate-y-1.5">
                <div className="absolute -top-12 -right-10 w-44 h-44 bg-earth-100/70 blob-a animate-blob" aria-hidden="true" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 bg-earth-50 ring-1 ring-earth-200 text-earth-700 text-[11px] font-bold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full mb-6">
                    <Stethoscope className="h-3.5 w-3.5" /> Recherche guidée
                  </div>
                  <h3 className="font-display text-3xl sm:text-[2.4rem] text-forest-900 leading-tight mb-3">
                    Trouver par <span className="italic text-earth-600">pathologie</span>
                  </h3>
                  <p className="text-forest-700/85 leading-relaxed mb-7 max-w-md">
                    Choisissez une situation — sommeil, stress, digestion, immunité… — et voyez agrégés
                    articles, plantes, recettes et actualités PubMed qui s'y rapportent.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Sommeil', 'Stress', 'Digestion', 'Immunité', 'Circulation', '+ 20'].map((t) => (
                      <span key={t} className="text-xs font-medium text-forest-700 bg-cream-100 ring-1 ring-forest-100 px-3 py-1.5 rounded-full">{t}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 bg-earth-500 group-hover:bg-earth-600 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all">
                    Ouvrir l'outil
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   VISION — manifeste éditorial
───────────────────────────────────────── */
function VisionBand() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <figure className="relative text-center">
            <LeafShape className="absolute -top-8 -left-3 sm:-left-8 w-16 h-16 sm:w-20 sm:h-20 text-sage-300/70 -rotate-[18deg]" />
            <LeafShape className="absolute -bottom-6 -right-3 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 text-sage-400/60 rotate-[155deg]" />

            <p className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-sage-700 mb-7">
              <span className="h-px w-7 bg-sage-400" aria-hidden="true" />
              Notre vision
              <span className="h-px w-7 bg-sage-400" aria-hidden="true" />
            </p>

            <Quote className="mx-auto h-9 w-9 text-sage-400/70 mb-6 rotate-180" aria-hidden="true" />

            <blockquote>
              <p className="font-display text-[1.75rem] sm:text-4xl lg:text-[2.7rem] leading-[1.25] text-forest-900 text-balance">
                Unir la <span className="italic text-sage-600">rigueur des données scientifiques</span> au{' '}
                <span className="italic text-earth-600">plaisir de la table</span> : telle est notre vision d'une
                nutrition <span className="marker-sage">systémique</span>, respectueuse de l'humain et de son écosystème.
              </p>
            </blockquote>

            <div className="mt-10 flex flex-wrap justify-center gap-2.5">
              {[
                { icon: FlaskConical, label: 'Science', cls: 'bg-sage-50 border-sage-200 text-sage-700' },
                { icon: BookHeart, label: 'Plaisir', cls: 'bg-cream-100 border-earth-200 text-earth-700' },
                { icon: Leaf, label: 'Écosystème', cls: 'bg-forest-50 border-forest-200 text-forest-700' },
              ].map(({ icon: Icon, label, cls }) => (
                <span key={label} className={`inline-flex items-center gap-1.5 text-xs font-semibold border px-3.5 py-1.5 rounded-full ${cls}`}>
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" /> {label}
                </span>
              ))}
            </div>
          </figure>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   POURQUOI — démarche
───────────────────────────────────────── */
function WhySection() {
  const features = [
    { icon: BookOpen,     bg: 'bg-sage-500',   title: 'Guides thématiques', desc: 'Plus de 163 articles organisés par thème. Du jeûne hydrique aux formes biodisponibles des minéraux.' },
    { icon: Droplets,     bg: 'bg-forest-700', title: 'Protocoles détaillés', desc: 'Pour chaque méthode : préparation, déroulé, sortie de cure, contre-indications et fréquence.' },
    { icon: FlaskConical, bg: 'bg-earth-500',  title: 'Dosages précis', desc: 'AJR vs dose optimale, formes chélatées vs oxydes, interactions et profils de population.' },
  ];

  return (
    <section className="mesh-organic py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage-600 mb-3">Notre démarche</p>
          <h2 className="font-display text-[2.4rem] sm:text-5xl text-forest-900 leading-[1.05] text-balance">
            Information sérieuse,<br /><span className="italic text-sage-600">sans dogmatisme</span>
          </h2>
          <p className="mt-5 text-lg text-forest-700/80 leading-relaxed text-balance">
            Loin des modes et des protocoles miracles, nous compilons ce que la naturopathie et la
            nutrithérapie ont de meilleur : des principes éprouvés, des dosages précis, des
            indications et contre-indications honnêtes.
          </p>
          <Link href="/notre-demarche" className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-sage-700 hover:text-sage-900 underline-offset-4 hover:underline">
            Voir notre démarche éditoriale détaillée <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, bg, title, desc }, i) => (
            <AnimatedSection key={title} animation="fade-up" delay={i * 120}>
              <div className="bg-white/80 backdrop-blur rounded-4xl p-8 shadow-sm hover:shadow-soft transition-all border border-forest-100/70 h-full card-glow">
                <div className={`w-14 h-14 ${bg} rounded-2xl grid place-items-center mb-5 shadow-md`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-2xl text-forest-900 mb-2.5">{title}</h3>
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
   THÈMES POPULAIRES
───────────────────────────────────────── */
function TopicsGrid() {
  const topics = [
    { href: '/naturopathie/jeunes',              icon: Droplets,     iconBg: 'bg-forest-700', category: 'Naturopathie', title: 'Jeûnes & monodiètes', desc: 'Hydrique, Buchinger, intermittent, jus, monodiètes — protocoles complets de préparation et de sortie.' },
    { href: '/nutritherapie/vitamines',          icon: Star,         iconBg: 'bg-earth-500',  category: 'Nutrithérapie', title: 'Vitamines essentielles', desc: 'De la vitamine D3 à la B12 : formes biodisponibles, dosages optimaux, signes de déficit.' },
    { href: '/naturopathie/temperaments',        icon: Sprout,       iconBg: 'bg-sage-500',   category: 'Naturopathie', title: 'Les 4 tempéraments', desc: 'Sanguin, bilieux, nerveux, lymphatique — profil personnalisé avec alimentation et compléments adaptés.' },
    { href: '/naturopathie/stress-emotions',     icon: Wind,         iconBg: 'bg-forest-500', category: 'Naturopathie', title: 'Stress & sommeil', desc: 'Cohérence cardiaque, adaptogènes, plantes et rituels du soir pour retrouver un sommeil profond.' },
    { href: '/naturopathie/purges',              icon: Droplets,     iconBg: 'bg-forest-600', category: 'Naturopathie', title: 'Purges & drainages', desc: 'Huile de ricin, lavement, brossage à sec, argile, bentonite — les grandes méthodes de détox.' },
    { href: '/nutritherapie/mineraux',           icon: FlaskConical, iconBg: 'bg-earth-600',  category: 'Nutrithérapie', title: 'Minéraux & oligoéléments', desc: 'Magnésium, zinc, sélénium, iode — formes chélatées vs oxydes, dosages et interactions.' },
    { href: '/nutritherapie/objectifs',          icon: CheckCircle2, iconBg: 'bg-sage-600',   category: 'Nutrithérapie', title: 'Compléments par objectif', desc: 'Fatigue, anxiété, immunité, articulations, cognition — les bonnes associations par besoin.' },
    { href: '/naturopathie/temperaments/quiz',   icon: Scale,        iconBg: 'bg-forest-700', category: 'Quiz', title: 'Découvrir mon tempérament', desc: '20 questions pour identifier votre profil hippocratique et obtenir un protocole personnalisé.' },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="flex items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage-600 mb-3">Explorer</p>
            <h2 className="font-display text-[2.4rem] sm:text-5xl text-forest-900 leading-[1.05]">
              Thèmes <span className="italic text-sage-600">populaires</span>
            </h2>
          </div>
          <Link href="/naturopathie" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900 transition-colors whitespace-nowrap">
            Tout voir <ChevronRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topics.map(({ href, icon: Icon, iconBg, category, title, desc }, i) => (
            <AnimatedSection key={href} animation="fade-up" delay={(i % 4) * 80}>
              <Link href={href} className="group block h-full">
                <div className="relative overflow-hidden bg-cream-50 hover:bg-forest-50 rounded-4xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-soft border border-forest-50 group-hover:border-forest-100 card-glow">
                  <div className={`w-12 h-12 ${iconBg} rounded-2xl grid place-items-center mb-4 shadow-sm`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-forest-500/70 mb-1.5">{category}</p>
                  <h3 className="font-display text-xl text-forest-900 mb-2 leading-snug group-hover:text-forest-700 transition-colors">{title}</h3>
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
    <section className="bg-white pt-4 pb-16 sm:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="scale-up">
          <div className="relative mesh-forest grain-overlay rounded-5xl overflow-hidden shadow-organic">
            <div className="absolute top-0 right-0 w-72 h-72 bg-sage-400/20 blob-a animate-blob blur-2xl translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-forest-400/20 blob-b animate-blob-slow -translate-x-1/4 translate-y-1/4" aria-hidden="true" />

            <div className="relative px-8 sm:px-14 py-14 sm:py-16 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-sage-300 text-xs font-bold uppercase tracking-[0.2em] mb-3">Quiz gratuit</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[3rem] text-white leading-[1.08]">
                  Quel est votre<br /><span className="italic text-sage-300">tempérament</span> ?
                </h2>
                <p className="mt-4 text-forest-100/90 leading-relaxed max-w-md">
                  Sanguin, bilieux, nerveux ou lymphatique — 20 questions pour identifier votre
                  profil hippocratique et recevoir un protocole personnalisé.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:items-start xl:items-center">
                <Link href="/naturopathie/temperaments/quiz" className="inline-flex items-center justify-center gap-2 bg-sage-400 hover:bg-sage-300 text-forest-900 font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl text-base">
                  Faire le quiz <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/naturopathie/temperaments" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all text-base">
                  Voir les 4 profils
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
