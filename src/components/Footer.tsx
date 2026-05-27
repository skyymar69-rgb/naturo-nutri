import Link from 'next/link';
import { Leaf, Mail, BookOpen } from 'lucide-react';

const FOOTER_NAV = [
  {
    title: 'Naturopathie',
    links: [
      { label: 'Vue d\'ensemble',     href: '/naturopathie' },
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
      { label: 'Vue d\'ensemble',    href: '/nutritherapie' },
      { label: 'Vitamines',          href: '/nutritherapie/vitamines' },
      { label: 'Minéraux',           href: '/nutritherapie/mineraux' },
      { label: 'Acides gras',        href: '/nutritherapie/acides-gras' },
      { label: 'Antioxydants',       href: '/nutritherapie/antioxydants' },
      { label: 'Probiotiques',       href: '/nutritherapie/probiotiques' },
      { label: 'Adaptogènes',        href: '/nutritherapie/adaptogenes' },
      { label: 'Par objectif',       href: '/nutritherapie/objectifs' },
    ],
  },
  {
    title: 'Informations',
    links: [
      { label: 'Mentions légales',       href: '/mentions-legales' },
      { label: 'Contre-indications',     href: '/contre-indications' },
      { label: 'Confidentialité',        href: '/confidentialite' },
      { label: 'Quiz tempérament',       href: '/naturopathie/temperaments/quiz' },
      { label: 'Principes de qualité',   href: '/nutritherapie/principes' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-forest-900 text-cream-100">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1 space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-sage-500/20 text-sage-300 group-hover:bg-sage-500/30 transition-colors">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="font-display text-xl text-white leading-none">
                NaturoNutri
                <span className="text-sage-400">.</span>
              </span>
            </Link>

            <p className="text-sm text-forest-300 leading-relaxed max-w-xs">
              Portail de référence francophone en naturopathie et nutrithérapie.
              Guides, protocoles et fiches santé à visée pédagogique.
            </p>

            <div className="flex items-center gap-2 text-sm text-forest-300">
              <BookOpen className="h-4 w-4 text-sage-400 flex-shrink-0" />
              <span>163+ guides disponibles</span>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-sage-400 mb-5">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-forest-300 hover:text-white transition-colors"
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
      <div className="border-t border-forest-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-forest-400">
            © {new Date().getFullYear()} NaturoNutri — Informations à visée pédagogique, ne remplaçant aucun avis médical.
          </p>
          <Link
            href="/contre-indications"
            className="text-xs text-forest-400 hover:text-forest-200 transition-colors flex items-center gap-1.5"
          >
            <Mail className="h-3 w-3" />
            Voir les contre-indications
          </Link>
        </div>
      </div>
    </footer>
  );
}
