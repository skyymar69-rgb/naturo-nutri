import Link from 'next/link';
import { Leaf } from 'lucide-react';

const FOOTER_NAV = [
  {
    title: 'Naturopathie',
    links: [
      { label: 'Vue d\'ensemble', href: '/naturopathie' },
      { label: 'Jeûnes', href: '/naturopathie/jeunes' },
      { label: 'Purges & drainages', href: '/naturopathie/purges' },
      { label: 'Plantes médicinales', href: '/naturopathie/plantes' },
      { label: 'Alimentation', href: '/naturopathie/alimentation' },
      { label: 'Hydrothérapie', href: '/naturopathie/hydrotherapie' },
      { label: 'Aromathérapie', href: '/naturopathie/aromatherapie' },
      { label: 'Tempéraments', href: '/naturopathie/temperaments' },
    ],
  },
  {
    title: 'Nutrithérapie',
    links: [
      { label: 'Vue d\'ensemble', href: '/nutritherapie' },
      { label: 'Vitamines', href: '/nutritherapie/vitamines' },
      { label: 'Minéraux', href: '/nutritherapie/mineraux' },
      { label: 'Acides gras', href: '/nutritherapie/acides-gras' },
      { label: 'Antioxydants', href: '/nutritherapie/antioxydants' },
      { label: 'Probiotiques', href: '/nutritherapie/probiotiques' },
      { label: 'Adaptogènes', href: '/nutritherapie/adaptogenes' },
      { label: 'Par objectif', href: '/nutritherapie/objectifs' },
    ],
  },
  {
    title: 'Outils',
    links: [
      { label: 'Quiz tempérament', href: '/naturopathie/temperaments/quiz' },
      { label: 'Principes de qualité', href: '/nutritherapie/principes' },
    ],
  },
  {
    title: 'Le site',
    links: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Contre-indications', href: '/contre-indications' },
      { label: 'Confidentialité', href: '/confidentialite' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-forest-100 bg-forest-900 text-cream-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-sage-400/20 text-sage-200">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-display text-lg text-cream-50 leading-none">
                Naturo
                <span className="text-earth-300">·</span>
                Nutri
              </span>
            </div>
            <p className="mt-4 text-sm text-cream-100/70 leading-relaxed max-w-xs">
              Portail de référence francophone en naturopathie et nutrithérapie. Guides, protocoles et fiches santé.
            </p>
          </div>

          {FOOTER_NAV.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-sm font-semibold text-cream-50 mb-4 uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream-100/70 hover:text-cream-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-forest-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-cream-100/60">
            © {new Date().getFullYear()} Naturo·Nutri · Informations à visée pédagogique uniquement, ne remplaçant aucun avis médical.
          </p>
        </div>
      </div>
    </footer>
  );
}
