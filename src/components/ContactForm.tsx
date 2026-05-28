'use client';

import { useState, useRef, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Shield } from 'lucide-react';
import Link from 'next/link';

/* ─── Types ─────────────────────────────────────────────────────────────── */
type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  sujet: string;
  message: string;
  rgpdConsent: boolean;
  website: string; // honeypot — must stay empty
}

const SUBJECTS = [
  'Question sur le contenu éditorial',
  "Signalement d'une erreur ou imprécision",
  'Demande de droits RGPD (accès, rectification, suppression)',
  'Demande de partenariat ou collaboration',
  "Signalement d'une atteinte aux droits de propriété intellectuelle",
  'Autre',
] as const;

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [data, setData] = useState<FormData>({
    prenom: '',
    nom: '',
    email: '',
    sujet: '',
    message: '',
    rgpdConsent: false,
    website: '',
  });

  const formRef = useRef<HTMLFormElement>(null);

  /* ── Validation ──────────────────────────────────────────────────────── */
  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!data.prenom.trim()) newErrors.prenom = 'Le prénom est requis.';
    if (!data.nom.trim()) newErrors.nom = 'Le nom est requis.';
    if (!data.email.trim()) {
      newErrors.email = "L'adresse email est requise.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "L'adresse email n'est pas valide.";
    }
    if (!data.sujet) newErrors.sujet = 'Veuillez sélectionner un sujet.';
    if (!data.message.trim()) {
      newErrors.message = 'Le message est requis.';
    } else if (data.message.trim().length < 20) {
      newErrors.message = 'Le message doit contenir au moins 20 caractères.';
    }
    if (!data.rgpdConsent) {
      newErrors.rgpdConsent = 'Vous devez accepter la politique de confidentialité.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  /* ── Submit ──────────────────────────────────────────────────────────── */
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (data.website) return; // honeypot triggered
    if (!validate()) return;
    setFormState('submitting');

    try {
      const subject = encodeURIComponent(`[Nutriéa] ${data.sujet}`);
      const body = encodeURIComponent(
        `Prénom : ${data.prenom}\nNom : ${data.nom}\nEmail : ${data.email}\n\nSujet : ${data.sujet}\n\nMessage :\n${data.message}\n\n---\nConsentement RGPD accordé le ${new Date().toLocaleDateString('fr-FR')}`
      );
      window.location.href = `mailto:contact@kayzen-lyon.fr?subject=${subject}&body=${body}`;
      await new Promise((r) => setTimeout(r, 800));
      setFormState('success');
      formRef.current?.reset();
      setData({ prenom: '', nom: '', email: '', sujet: '', message: '', rgpdConsent: false, website: '' });
    } catch {
      setFormState('error');
    }
  }

  /* ── Field class helper ──────────────────────────────────────────────── */
  const fieldClass = (name: keyof FormData) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-forest-900 placeholder:text-forest-400 bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage-400/60 focus:border-sage-400 ${
      errors[name] ? 'border-red-400 bg-red-50/30' : 'border-forest-200 hover:border-forest-300'
    }`;

  /* ── Success state ───────────────────────────────────────────────────── */
  if (formState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-3xl border border-sage-200 bg-sage-50">
        <CheckCircle2 className="h-16 w-16 text-sage-500 mb-6" aria-hidden="true" />
        <h2 className="font-display text-2xl text-forest-900 mb-3">Message envoyé !</h2>
        <p className="text-forest-700 max-w-sm leading-relaxed">
          Votre messagerie devrait s&apos;ouvrir avec le message pré-rempli. Nous vous répondrons
          dans les meilleurs délais, généralement sous 48&nbsp;h ouvrées.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="mt-8 px-6 py-2.5 bg-sage-500 hover:bg-sage-600 text-white rounded-xl text-sm font-semibold transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  /* ── Form ────────────────────────────────────────────────────────────── */
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulaire de contact Nutriéa"
      className="space-y-5"
    >
      {/* Error banner */}
      {formState === 'error' && (
        <div role="alert" className="flex gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>Une erreur est survenue. Merci de réessayer ou d&apos;écrire à contact@kayzen-lyon.fr.</span>
        </div>
      )}

      {/* ── Honeypot ── */}
      <div aria-hidden="true" className="absolute opacity-0 pointer-events-none -z-10 h-0 overflow-hidden">
        <label htmlFor="website">Ne pas remplir</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={data.website}
          onChange={(e) => setData((d) => ({ ...d, website: e.target.value }))}
        />
      </div>

      {/* ── Prénom + Nom ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-forest-800 mb-1.5">
            Prénom <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="prenom" name="prenom" type="text" autoComplete="given-name"
            required aria-required="true" aria-invalid={!!errors.prenom}
            aria-describedby={errors.prenom ? 'prenom-error' : undefined}
            value={data.prenom}
            onChange={(e) => setData((d) => ({ ...d, prenom: e.target.value }))}
            className={fieldClass('prenom')} placeholder="Votre prénom"
          />
          {errors.prenom && <p id="prenom-error" role="alert" className="mt-1 text-xs text-red-600">{errors.prenom}</p>}
        </div>
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-forest-800 mb-1.5">
            Nom <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="nom" name="nom" type="text" autoComplete="family-name"
            required aria-required="true" aria-invalid={!!errors.nom}
            aria-describedby={errors.nom ? 'nom-error' : undefined}
            value={data.nom}
            onChange={(e) => setData((d) => ({ ...d, nom: e.target.value }))}
            className={fieldClass('nom')} placeholder="Votre nom"
          />
          {errors.nom && <p id="nom-error" role="alert" className="mt-1 text-xs text-red-600">{errors.nom}</p>}
        </div>
      </div>

      {/* ── Email ── */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-forest-800 mb-1.5">
          Adresse email <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="email" name="email" type="email" autoComplete="email"
          required aria-required="true" aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          value={data.email}
          onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
          className={fieldClass('email')} placeholder="vous@exemple.com"
        />
        {errors.email && <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      {/* ── Sujet ── */}
      <div>
        <label htmlFor="sujet" className="block text-sm font-medium text-forest-800 mb-1.5">
          Objet de votre message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="sujet" name="sujet" required aria-required="true" aria-invalid={!!errors.sujet}
          aria-describedby={errors.sujet ? 'sujet-error' : undefined}
          value={data.sujet}
          onChange={(e) => setData((d) => ({ ...d, sujet: e.target.value }))}
          className={fieldClass('sujet')}
        >
          <option value="">— Sélectionnez un sujet —</option>
          {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.sujet && <p id="sujet-error" role="alert" className="mt-1 text-xs text-red-600">{errors.sujet}</p>}
      </div>

      {/* ── Message ── */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-forest-800 mb-1.5">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message" name="message" rows={6}
          required aria-required="true" aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : 'message-hint'}
          value={data.message}
          onChange={(e) => setData((d) => ({ ...d, message: e.target.value }))}
          className={`${fieldClass('message')} resize-y min-h-[120px]`}
          placeholder="Décrivez votre demande en détail…"
        />
        <p id="message-hint" className="mt-1 text-xs text-forest-500">
          {data.message.length} / 2&nbsp;000 caractères
        </p>
        {errors.message && <p id="message-error" role="alert" className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      {/* ── RGPD Consent ── */}
      <div>
        <div className="flex items-start gap-3">
          <input
            id="rgpdConsent" name="rgpdConsent" type="checkbox"
            required aria-required="true" aria-invalid={!!errors.rgpdConsent}
            aria-describedby={errors.rgpdConsent ? 'consent-error' : 'consent-hint'}
            checked={data.rgpdConsent}
            onChange={(e) => setData((d) => ({ ...d, rgpdConsent: e.target.checked }))}
            className="mt-0.5 h-4 w-4 rounded border-forest-300 accent-sage-500 flex-shrink-0"
          />
          <label htmlFor="rgpdConsent" className="text-sm text-forest-700 leading-relaxed">
            J&apos;accepte que mes données personnelles (nom, email, message) soient traitées par
            KAYZEN LYON dans le seul but de traiter ma demande, conformément à la{' '}
            <Link href="/confidentialite" className="underline text-sage-600 hover:text-sage-800" target="_blank" rel="noopener">
              politique de confidentialité
            </Link>
            . Ces données ne seront pas cédées à des tiers.{' '}
            <span className="text-red-500" aria-hidden="true">*</span>
          </label>
        </div>
        <p id="consent-hint" className="mt-1 ml-7 text-xs text-forest-500">
          Durée de conservation : 3 ans à compter de la dernière interaction.
        </p>
        {errors.rgpdConsent && (
          <p id="consent-error" role="alert" className="mt-1 ml-7 text-xs text-red-600">
            {errors.rgpdConsent}
          </p>
        )}
      </div>

      {/* ── RGPD info note ── */}
      <div className="flex gap-3 p-4 rounded-xl bg-sage-50 border border-sage-200">
        <Shield className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <p className="text-xs text-forest-700 leading-relaxed">
          <strong className="text-forest-900">Protection de vos données</strong> — Vos informations sont
          traitées exclusivement pour répondre à votre demande. Aucun démarchage commercial.
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression.
        </p>
      </div>

      {/* ── Submit ── */}
      <div className="flex items-center justify-between pt-2">
        <p className="text-xs text-forest-500">
          <span className="text-red-500">*</span> Champs obligatoires
        </p>
        <button
          type="submit"
          disabled={formState === 'submitting'}
          className="inline-flex items-center gap-2 px-7 py-3 bg-sage-500 hover:bg-sage-600 disabled:bg-sage-300 text-white font-semibold text-sm rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 shadow-sm hover:shadow-md"
          aria-busy={formState === 'submitting'}
        >
          {formState === 'submitting' ? (
            <>
              <span className="inline-block h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true" />
              Envoi en cours…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Envoyer le message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
