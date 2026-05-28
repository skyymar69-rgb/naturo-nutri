import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez l\'équipe Nutriéa — questions sur le contenu, droits RGPD, signalements, partenariats. Formulaire sécurisé conforme RGPD.',
  robots: { index: true, follow: true },
};

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@kayzen-lyon.fr',
    href: 'mailto:contact@kayzen-lyon.fr',
    color: 'bg-sage-50 text-sage-600',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+33 (0)4 87 77 68 61',
    href: 'tel:+33487776861',
    color: 'bg-forest-50 text-forest-600',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: '6, rue Pierre TERMIER\n69009 LYON',
    href: 'https://maps.google.com/?q=6+rue+Pierre+Termier+69009+Lyon',
    color: 'bg-earth-50 text-earth-600',
  },
] as const;

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg py-14 sm:py-20 border-b border-forest-100">
        <Container size="prose">
          <AnimatedSection animation="fade-up">
            <Badge variant="sage" className="mb-5">
              <Mail className="h-3 w-3" aria-hidden="true" />
              Nous contacter
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl text-forest-900 leading-tight">
              Une question, une suggestion&nbsp;?
            </h1>
            <p className="mt-4 text-lg text-forest-700/85 leading-relaxed max-w-2xl">
              L&apos;équipe Nutriéa est à votre écoute. Pour signaler une erreur, exercer
              vos droits RGPD ou simplement nous écrire, utilisez le formulaire ci-dessous.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Main */}
      <Container size="lg" className="py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

          {/* ── Left: coordonnées ── */}
          <AnimatedSection animation="slide-left" className="space-y-6">
            <div>
              <h2 className="font-display text-2xl text-forest-900 mb-2">Coordonnées</h2>
              <p className="text-sm text-forest-600 leading-relaxed">
                Nutriéa est un service de{' '}
                <strong className="text-forest-800">KAYZEN LYON</strong>, SASU immatriculée
                au RCS de Lyon sous le SIREN 999&nbsp;418&nbsp;346&nbsp;000&nbsp;14.
              </p>
            </div>

            {CONTACT_INFO.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 p-4 rounded-2xl border border-forest-100 bg-white hover:border-sage-300 hover:shadow-md transition-all duration-200 group card-glow"
              >
                <span className={`p-2.5 rounded-xl ${item.color} flex-shrink-0`}>
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-forest-500 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm text-forest-800 group-hover:text-forest-900 whitespace-pre-line">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* RGPD note */}
            <div className="flex gap-3 p-4 rounded-2xl bg-sage-50 border border-sage-200">
              <Shield className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs text-forest-700 leading-relaxed">
                <strong className="text-forest-900">Droits RGPD</strong>
                <br />
                Pour toute demande d&apos;accès, de rectification ou de suppression, sélectionnez
                le sujet <em>Demande de droits RGPD</em> dans le formulaire.{' '}
                <Link href="/confidentialite" className="underline hover:text-sage-700">
                  Politique de confidentialité →
                </Link>
              </p>
            </div>
          </AnimatedSection>

          {/* ── Right: form (client component) ── */}
          <AnimatedSection animation="fade-up" delay={100} className="lg:col-span-2">
            <ContactForm />
          </AnimatedSection>
        </div>
      </Container>
    </>
  );
}
