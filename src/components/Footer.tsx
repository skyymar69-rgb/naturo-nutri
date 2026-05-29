import Link from 'next/link';
import { BookOpen, ExternalLink, Heart, Sparkles, FlaskConical, Leaf, Wrench } from 'lucide-react';
import { Logo } from '@/components/Logo';

interface FooterColumn {
  title: string;
  icon: React.ReactNode;
  accent: string;
  links: { label: string; href: string }[];
}

const FOOTER_NAV: FooterColumn[] = [
  {
    title: 'Naturopathie',
    icon: <Leaf className="h-3.5 w-3.5" aria-hidden="true" />,
    accent: 'text-sage-300',
    links: [
      { label: "Vue d'ensemble",      href: '/naturopathie' },
      { label: 'Jeûnes & monodiètes', href: '/naturopathie/jeunes' },
      { label: 'Purges & drainages',  href: '/naturopathie/purges' },
      { label: 'Plantes médicinales', href: '/naturopathie/plantes' },
      { label: 'Alimentation vivante',href: '/naturopathie/alimentation' },
      { label: 'Hydrothérapie',       href: '/naturopathie/hydrotherapie' },
      { label: 'Aromathérapie',       href: '/naturopathie/aromatherapie' },
      { label: 'Les 4 tempéraments',  href: '/naturopathie/temperaments' },
    ],
  },
  {
    title: 'Nutrithérapie',
    icon: <FlaskConical className="h-3.5 w-3.5" aria-hidden="true" />,
    accent: 'text-earth-300',
    links: [
      { label: "Vue d'ensemble",   href: '/nutritherapie' },
      { label: 'Vitamines',        href: '/nutritherapie/vitamines' },
      { label: 'Minéraux',         href: '/nutritherapie/mineraux' },
      { label: 'Acides gras',      href: '/nutritherapie/acides-gras' },
      { label: 'Acides aminés',    href: '/nutritherapie/acides-amines' },
      { label: 'Antioxydants',     href: '/nutritherapie/antioxydants' },
      { label: 'Probiotiques',     href: '/nutritherapie/probiotiques' },
      { label: 'Compléments par objectif', href: '/nutritherapie/objectifs' },
    ],
  },
  {
    title: 'Plantes & Jus',
    icon: <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />,
    accent: 'text-sage-300',
    links: [
      { label: 'Les plantes qui soignent', href: '/plantes' },
      { label: 'Sommeil & nervosité',      href: '/plantes/sommeil' },
      { label: 'Stress & anxiété',         href: '/plantes/stress-anxiete' },
      { label: 'Digestion & foie',         href: '/plantes/digestion' },
      { label: 'Recettes de jus',          href: '/jus' },
      { label: 'Méthode Walker',           href: '/jus/walker-fondamentaux' },
      { label: 'Drainage & dépuration',    href: '/jus/detox' },
      { label: 'Énergie & vitalité',       href: '/jus/energie' },
    ],
  },
  {
    title: 'Outils & Accès',
    icon: <Wrench className="h-3.5 w-3.5" aria-hidden="true" />,
    accent: 'text-earth-300',
    links: [
      { label: 'Par pathologie',        href: '/outils/par-pathologie' },
      { label: 'Quiz tempérament',      href: '/naturopathie/temperaments/quiz' },
      { label: 'Actualités sourcées',   href: '/actualites' },
      { label: 'Bibliographie',         href: '/bibliographie' },
      { label: 'Notre démarche',        href: '/notre-demarche' },
      { label: 'Tous les tags',         href: '/tags' },
      { label: 'Flux RSS',              href: '/feed.xml' },
      { label: 'Contact',               href: '/contact' },
    ],
  },
];

const LEGAL_LINKS = [
  { label: 'Mentions légales',    href: '/mentions-legales' },
  { label: 'CGU',                 href: '/cgu' },
  { label: 'Politique cookies',   href: '/cookies' },
  { label: 'Confidentialité',     href: '/confidentialite' },
  { label: 'Contre-indications',  href: '/contre-indications' },
];

export function Footer() {
  return (
    <footer className="bg-forest-900" aria-label="Pied de page">

      {/* ── Section brand ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 border-b border-white/10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">

          {/* Brand */}
          <div className="space-y-5">
            <Logo variant="full" light />
            <p className="text-sm text-white/75 leading-relaxed max-w-xl">
              Portail de référence francophone en naturopathie et nutrithérapie.
              Guides, protocoles et fiches santé à visée pédagogique, à la croisée des traditions
              et de la recherche contemporaine.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <span className="inline-flex items-center gap-2 text-white/75">
                <BookOpen className="h-4 w-4 text-sage-300" aria-hidden="true" />
                <span>200+ guides gratuits</span>
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="inline-flex items-center gap-2 text-white/75">
                <Sparkles className="h-4 w-4 text-earth-300" aria-hidden="true" />
                <span>Actualités sourcées PubMed</span>
              </span>
            </div>
          </div>

          {/* Disclaimer + CTA */}
          <div className="space-y-3">
            <div className="bg-white/8 rounded-xl p-4 text-xs text-white/70 leading-relaxed border border-white/10">
              <p className="font-semibold text-white mb-1">⚕️ Avertissement médical</p>
              Les informations publiées ici ont une vocation pédagogique et éducative. Elles ne se
              substituent jamais à l&apos;avis d&apos;un professionnel de santé qualifié. Consultez
              un médecin avant toute démarche thérapeutique.
            </div>
            <Link
              href="/notre-demarche"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-300 hover:text-white transition-colors"
            >
              Notre démarche éditoriale
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Nav columns ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {FOOTER_NAV.map((column) => (
            <div key={column.title}>
              <h3 className={`text-xs font-bold uppercase tracking-[0.15em] text-white mb-5 inline-flex items-center gap-2`}>
                <span className={column.accent}>{column.icon}</span>
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Legal strip ── */}
      <div className="border-t border-white/10 bg-forest-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <nav aria-label="Informations légales">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center md:justify-start">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} Nutriéa — Service de KAYZEN LYON (SASU · RCS Lyon 999 418 346)
          </p>

          <a
            href="https://internet.kayzen-lyon.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-white/55 hover:text-white transition-colors group"
            aria-label="Site réalisé par Kayzen Web (ouvre dans un nouvel onglet)"
          >
            <Heart className="h-3 w-3 text-sage-300 group-hover:scale-110 transition-transform" aria-hidden="true" />
            Fièrement réalisé par{' '}
            <span className="font-semibold text-white group-hover:text-sage-200">Kayzen Web</span>
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
