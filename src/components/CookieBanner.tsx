'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Cookie, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type Consent = {
  necessary: true;      // always true — non-configurable
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

const STORAGE_KEY = 'nutriea_cookie_consent_v1';
const CONSENT_EXPIRY_DAYS = 395; // ~13 mois — plafond CNIL

function saveConsent(consent: Consent) {
  const payload = {
    ...consent,
    timestamp: new Date().toISOString(),
    expires: new Date(Date.now() + CONSENT_EXPIRY_DAYS * 86400000).toISOString(),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // localStorage unavailable (private browsing, etc.)
  }
}

function loadConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Check expiry
    if (parsed.expires && new Date(parsed.expires) < new Date()) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed as Consent;
  } catch {
    return null;
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<Omit<Consent, 'necessary'>>({
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const stored = loadConsent();
    if (!stored) {
      // Small delay to avoid flash on page load
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  if (!visible) return null;

  function acceptAll() {
    saveConsent({ necessary: true, analytics: true, marketing: true, preferences: true });
    setVisible(false);
  }

  function refuseAll() {
    saveConsent({ necessary: true, analytics: false, marketing: false, preferences: false });
    setVisible(false);
  }

  function saveCustom() {
    saveConsent({ necessary: true, ...prefs });
    setVisible(false);
  }

  const Toggle = ({
    label,
    description,
    value,
    onChange,
    disabled = false,
  }: {
    label: string;
    description: string;
    value: boolean;
    onChange?: (v: boolean) => void;
    disabled?: boolean;
  }) => (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-forest-100 last:border-0">
      <div className="flex-1">
        <p className="text-sm font-semibold text-forest-900">{label}</p>
        <p className="text-xs text-forest-600 mt-0.5 leading-relaxed">{description}</p>
      </div>
      <button
        role="switch"
        aria-checked={value}
        disabled={disabled}
        onClick={() => onChange?.(!value)}
        className={cn(
          'relative flex-shrink-0 h-6 w-11 rounded-full transition-colors duration-200',
          value ? 'bg-sage-500' : 'bg-forest-200',
          disabled && 'opacity-60 cursor-not-allowed',
        )}
        aria-label={`${label}: ${value ? 'activé' : 'désactivé'}`}
      >
        <span
          className={cn(
            'absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200',
            value && 'translate-x-5',
          )}
        />
      </button>
    </div>
  );

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-modal="true"
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6 pointer-events-none"
    >
      <div className="mx-auto max-w-2xl bg-white rounded-2xl shadow-2xl border border-forest-100 pointer-events-auto animate-slide-up">

        {/* Header */}
        <div className="flex items-start gap-3 p-5 pb-3">
          <div className="w-10 h-10 bg-sage-100 rounded-xl grid place-items-center flex-shrink-0">
            <Cookie className="h-5 w-5 text-sage-600" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h2 id="cookie-banner-title" className="font-display text-lg text-forest-900">
              Gérer mes préférences cookies
            </h2>
            <p className="text-sm text-forest-600 mt-0.5 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience. Seuls les cookies
              strictement nécessaires sont actifs par défaut.{' '}
              <Link href="/cookies" className="underline hover:text-forest-900 transition-colors">
                En savoir plus
              </Link>
            </p>
          </div>
          <button
            onClick={refuseAll}
            className="text-forest-400 hover:text-forest-700 transition-colors p-1"
            aria-label="Fermer et refuser les cookies optionnels"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Personalisation toggle */}
        {showDetails && (
          <div className="px-5 pb-3 border-t border-forest-50">
            <div className="mt-3">
              <Toggle
                label="Cookies strictement nécessaires"
                description="Indispensables au fonctionnement du site (navigation, accessibilité). Exemptés de consentement conformément à la délibération CNIL n° 2020-091."
                value={true}
                disabled
              />
              <Toggle
                label="Cookies de performance & analytiques"
                description="Mesure d'audience anonyme pour améliorer le site. Durée de conservation : 13 mois maximum (CNIL)."
                value={prefs.analytics}
                onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
              <Toggle
                label="Cookies de préférences"
                description="Mémorisation de vos paramètres d'affichage et préférences de navigation."
                value={prefs.preferences}
                onChange={(v) => setPrefs((p) => ({ ...p, preferences: v }))}
              />
              <Toggle
                label="Cookies marketing"
                description="Ce site n'utilise actuellement aucun cookie à des fins publicitaires ou de profilage commercial."
                value={false}
                disabled
              />
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="px-5 pb-5 pt-3 flex flex-wrap gap-2 items-center">
          <button
            onClick={acceptAll}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-sage-500 hover:bg-sage-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all"
          >
            <Check className="h-4 w-4" />
            Tout accepter
          </button>
          <button
            onClick={refuseAll}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 border-2 border-forest-200 hover:border-forest-400 text-forest-700 font-semibold text-sm px-5 py-2.5 rounded-full transition-all"
          >
            Tout refuser
          </button>
          {showDetails ? (
            <button
              onClick={saveCustom}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-800 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all"
            >
              Enregistrer mes choix
            </button>
          ) : (
            <button
              onClick={() => setShowDetails(true)}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 text-forest-600 hover:text-forest-900 text-sm font-medium px-3 py-2 transition-colors"
            >
              Personnaliser
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
