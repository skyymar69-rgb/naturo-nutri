import Link from 'next/link';
import { BookOpen, ExternalLink, Heart } from 'lucide-react';
import { Logo } from '@/components/Logo';

const FOOTER_NAV = [
  {
    title: 'Naturopathie',
    links: [
      { label: "Vue d'ensemble",      href: '/naturopathie' },
      { label: 'Jeûnes',              href: '/naturopathie/jeunes' },
      { label: 'Purges & drainages',  href: '/naturopathie/purges' },
      { label: 'Plantes médicinales', href: '/naturopathie/plantes' },
      { label: 'Alimentation',        href: '/naturopathie/alimentation' },
      { label: 'Hydrothérapie',       href: '/naturopathie/hydrotherapie' },
      { label: 'Aromathérapie',       href: '/naturopathie/aromatherapie' },
      { label: 'Tempéraments',        href: '/naturopathie/temperaments' },
    ],
  },
  {
    title: 'Nutrithérapie',
    links: [
      { label: "Vue d'ensemble",   href: '/nutritherapie' },
      { label: 'Vitamines',        href: '/nutritherapie/vitamines' },
      { label: 'Minéraux',         href: '/nutritherapie/mineraux' },
      { label: 'Acides gras',      href: '/nutritherapie/acides-gras' },
      { label: 'Antioxydants',     href: '/nutritherapie/antioxydants' },
      { label: 'Probiotiques',     href: '/nutritherapie/probiotiques' },
      { label: 'Adaptogènes',      href: '/nutritherapie/adaptogenes' },
      { label: 'Par objectif',     href: '/nutritherapie/objectifs' },
    ],
  },
  {
    title: 'Plantes & Jus',
    links: [
      { label: 'Les plantes qui soignent', href: '/plantes' },
      { label: 'Sommeil & nervosité',      href: '/plantes/sommeil' },
      { label: 'Stress & anxiété',         href: '/plantes/stress-anxiete' },
      { label: 'Digestion & foie',         href: '/plantes/digestion' },
      { label: 'Les recettes de jus',      href: '/jus' },
      { label: 'Méthode Walker',           href: '/jus/walker-fondamentaux' },
    ],
  },
  {
    title: 'Outils & Accès',
    links: [
      { label: 'Actualités sourcées',   href: '/actualites' },
      { label: 'Quiz tempérament',      href: '/naturopathie/temperaments/quiz' },
      { label: 'Notre démarche',        href: '/notre-demarche' },
      { label: 'Bibliographie',         href: '/bibliographie' },
      { label: 'Tous les tags',         href: '/tags' },
      { label: 'Flux RSS',              href: '/feed.xml' },
      { label: 'Contact',               href: '/contact' },
    ],
  },
  {
    title: 'Informations légales',
    links: [
      { label: 'Mentions légales',    href: '/mentions-legales' },
      { label: 'CGU',                 href: '/cgu' },
      { label: 'Politique cookies',   href: '/cookies' },
      { label: 'Confidentialité',     href: '/confidentialite' },
      { label: 'Contre-indications',  href: '/contre-indications' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-forest-900" aria-label="Pied de page">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <Logo variant="full" light />

            <p className="text-sm text-white/75 leading-relaxed max-w-xs">
              Portail de référence francophone en naturopathie et nutrithérapie.
              Guides, protocoles et fiches santé à visée pédagogique et éducative.
            </p>

            <div className="flex items-center gap-2 text-sm text-white/75">
              <BookOpen className="h-4 w-4 text-sage-300 flex-shrink-0" aria-hidden="true" />
              <span>163+ guides disponibles gratuitement</span>
            </div>

            {/* Disclaimer */}
            <div className="bg-white/10 rounded-xl p-3 text-xs text-white/65 leading-relaxed border border-white/15">
              ⚕️ Informations à visée pédagogique uniquement. Ne remplacent pas un avis médical.
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-5">
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

      {/* Bottom bar */}
      <div className="border-t border-white/15">
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
