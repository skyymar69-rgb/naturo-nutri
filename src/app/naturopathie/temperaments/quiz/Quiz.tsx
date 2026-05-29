'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, RotateCcw, Leaf, Scale, Clock, Gift } from 'lucide-react';
import { QUIZ_QUESTIONS, computeQuizResult, type QuizResult } from '@/lib/quiz-data';
import { TEMPERAMENTS, TEMPERAMENT_SLUGS } from '@/lib/temperaments';
import { Container } from '@/components/ui/Container';
import { Button, ButtonLink } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

export function Quiz() {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const answeredCount = currentStep + (showResult ? 1 : 0);
  const progress = Math.round((answeredCount / totalQuestions) * 100);
  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;
  const isLast = currentStep === totalQuestions - 1;

  const result: QuizResult | null = useMemo(() => {
    if (!showResult) return null;
    return computeQuizResult(answers);
  }, [answers, showResult]);

  function selectOption(optionIndex: number) {
    if (!currentQuestion) return;
    setAnswers((a) => ({ ...a, [currentQuestion.id]: optionIndex }));
  }

  function next() {
    if (currentAnswer === undefined) return;
    if (isLast) setShowResult(true);
    else setCurrentStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function previous() {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  }

  function restart() {
    setAnswers({});
    setCurrentStep(0);
    setShowResult(false);
    setStarted(true);
  }

  if (showResult && result) return <Result result={result} onRestart={restart} />;
  if (!started) return <Intro onStart={() => setStarted(true)} totalQuestions={totalQuestions} />;

  return (
    <Container size="prose" className="py-10 sm:py-14">
      {/* Barre de progression + pastilles */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-forest-700/80 mb-2.5">
          <span className="font-semibold uppercase tracking-[0.14em]">
            Question {currentStep + 1} <span className="text-forest-400">/ {totalQuestions}</span>
          </span>
          <span className="font-display text-base text-sage-600">{progress}%</span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-white/70 ring-1 ring-forest-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-forest-600 via-sage-500 to-sage-400 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Carte question */}
      <div className="relative rounded-4xl bg-white/85 backdrop-blur border border-forest-100 shadow-soft p-6 sm:p-10 animate-fade-in overflow-hidden">
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-sage-100/70 blob-a animate-blob-slow pointer-events-none" aria-hidden="true" />
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-sage-700 bg-sage-50 ring-1 ring-sage-200 px-3 py-1.5 rounded-full mb-5 capitalize">
            {currentQuestion.category}
          </span>
          <h2 className="font-display text-[1.7rem] sm:text-[2.1rem] text-forest-900 leading-tight text-balance">
            {currentQuestion.question}
          </h2>

          <div className="mt-8 space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = currentAnswer === idx;
              return (
                <button
                  key={idx}
                  onClick={() => selectOption(idx)}
                  aria-pressed={isSelected}
                  className={cn(
                    'group w-full text-left rounded-2xl border-2 p-4 sm:p-5 transition-all flex items-center gap-4',
                    isSelected
                      ? 'border-forest-700 bg-forest-50 shadow-sm'
                      : 'border-forest-100 bg-white/70 hover:border-sage-400 hover:bg-cream-50 hover:-translate-y-0.5',
                  )}
                >
                  <span className={cn(
                    'grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl border-2 font-display text-base font-semibold transition-colors',
                    isSelected
                      ? 'border-forest-700 bg-forest-700 text-white'
                      : 'border-forest-200 bg-white text-forest-500 group-hover:border-sage-400 group-hover:text-sage-600',
                  )}>
                    {isSelected ? <Check className="h-5 w-5" /> : LETTERS[idx]}
                  </span>
                  <span className="text-sm sm:text-base text-forest-800 leading-relaxed">{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <Button variant="ghost" onClick={previous} disabled={currentStep === 0}
          className={cn(currentStep === 0 && 'opacity-0 pointer-events-none')}>
          <ArrowLeft className="h-4 w-4" /> Précédent
        </Button>
        <Button variant="primary" size="lg" onClick={next} disabled={currentAnswer === undefined}>
          {isLast ? 'Voir mon résultat' : 'Suivant'} <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Container>
  );
}

/* ─────────────────────────────────────────
   ÉCRAN D'ACCUEIL
───────────────────────────────────────── */
function Intro({ onStart, totalQuestions }: { onStart: () => void; totalQuestions: number }) {
  return (
    <Container size="prose" className="py-12 sm:py-20">
      <div className="text-center animate-fade-in">
        <div className="grid h-20 w-20 mx-auto place-items-center rounded-3xl bg-forest-700 text-white shadow-organic mb-8 blob-a">
          <Scale className="h-9 w-9" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage-700 mb-4">Test gratuit · sans inscription</p>
        <h1 className="font-display text-[2.6rem] sm:text-5xl lg:text-[3.6rem] text-forest-900 leading-[1.05] text-balance">
          Découvrez votre <span className="italic text-sage-600">tempérament</span>
        </h1>
        <p className="mt-5 text-lg text-forest-700/85 leading-relaxed max-w-xl mx-auto text-balance">
          Selon la typologie hippocratique, chacun penche vers un terrain dominant. {totalQuestions} questions
          suffisent à identifier le vôtre — et l'hygiène de vie qui vous correspond.
        </p>

        {/* Aperçu des 4 profils */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {TEMPERAMENT_SLUGS.map((slug) => {
            const t = TEMPERAMENTS[slug];
            return (
              <div
                key={slug}
                className="rounded-2xl bg-white/80 backdrop-blur border border-forest-100 p-4 text-center shadow-sm"
                style={{ borderTopColor: t.couleurHex, borderTopWidth: 3 }}
              >
                <span className="text-3xl">{t.emoji}</span>
                <p className="font-display text-base text-forest-900 mt-1.5">{t.nom}</p>
                <p className="text-[11px] text-forest-500 mt-0.5">{t.element}</p>
              </div>
            );
          })}
        </div>

        {/* Méta + CTA */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-forest-600">
          <span className="inline-flex items-center gap-1.5"><Scale className="h-4 w-4 text-sage-600" /> {totalQuestions} questions</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-sage-600" /> ~3 minutes</span>
          <span className="inline-flex items-center gap-1.5"><Gift className="h-4 w-4 text-sage-600" /> Protocole offert</span>
        </div>

        <div className="mt-9">
          <Button variant="primary" size="lg" onClick={onStart} className="text-base px-10">
            Commencer le quiz <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        <p className="mt-6 text-xs text-forest-500 max-w-md mx-auto">
          Outil éducatif d'auto-observation — il ne constitue ni un diagnostic ni un avis médical.
        </p>
      </div>
    </Container>
  );
}

/* ─────────────────────────────────────────
   RÉSULTAT
───────────────────────────────────────── */
function Result({ result, onRestart }: { result: QuizResult; onRestart: () => void }) {
  const dominant = TEMPERAMENTS[result.dominant];
  const secondary = TEMPERAMENTS[result.secondary];
  const sortedTemperaments = [...TEMPERAMENT_SLUGS].sort((a, b) => result.scores[b] - result.scores[a]);

  return (
    <Container size="prose" className="py-12 sm:py-16">
      <div className="text-center mb-10 animate-fade-in">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-sage-700 font-bold mb-5">
          <Leaf className="h-4 w-4 text-sage-500" /> Votre résultat
        </div>
        <h1 className="font-display text-[2.6rem] sm:text-5xl lg:text-[3.4rem] text-forest-900 leading-[1.05] text-balance">
          Vous êtes <span className="italic" style={{ color: dominant.couleurHex }}>{dominant.nom.toLowerCase()}</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-forest-700/85 leading-relaxed">
          Avec une influence <strong className="text-forest-900">{secondary.nom.toLowerCase()}</strong> secondaire.
        </p>
      </div>

      {/* Carte dominante */}
      <div className="rounded-4xl overflow-hidden mb-7 shadow-organic animate-slide-up bg-white border border-forest-100">
        <div
          className="relative p-8 text-white overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${dominant.couleurHex}, ${dominant.couleurHex}cc)` }}
        >
          <div className="absolute -bottom-10 -right-8 w-44 h-44 bg-white/10 blob-b animate-blob-slow" aria-hidden="true" />
          <div className="relative flex items-start gap-5">
            <span className="text-6xl drop-shadow-sm">{dominant.emoji}</span>
            <div>
              <span className="inline-block text-xs font-semibold bg-white/20 ring-1 ring-white/30 text-white px-3 py-1 rounded-full mb-2.5">
                {dominant.element} · {dominant.humeur}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl mb-2 text-white">{dominant.nom}</h2>
              <p className="text-white/90 leading-relaxed">{dominant.description}</p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 p-7 sm:p-8">
          <div>
            <h3 className="font-display text-lg text-forest-900 mb-3">Vos forces</h3>
            <ul className="space-y-2 text-sm text-forest-800/90">
              {dominant.forces.slice(0, 4).map((f) => (
                <li key={f} className="flex gap-2.5"><span className="text-sage-600 mt-0.5">●</span><span>{f}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg text-forest-900 mb-3">Points de vigilance</h3>
            <ul className="space-y-2 text-sm text-forest-800/90">
              {dominant.faiblesses.slice(0, 4).map((f) => (
                <li key={f} className="flex gap-2.5"><span className="text-earth-500 mt-0.5">▲</span><span>{f}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Répartition */}
      <div className="rounded-4xl bg-white/85 backdrop-blur border border-sage-200 shadow-soft p-7 sm:p-8 mb-9">
        <h3 className="font-display text-xl text-forest-900 mb-5">Répartition détaillée</h3>
        <div className="space-y-4">
          {sortedTemperaments.map((slug) => {
            const t = TEMPERAMENTS[slug];
            const pct = result.percentages[slug];
            return (
              <div key={slug}>
                <div className="flex items-center justify-between mb-1.5 text-sm">
                  <span className="flex items-center gap-2"><span>{t.emoji}</span><span className="font-medium text-forest-800">{t.nom}</span></span>
                  <span className="text-forest-700/70 tabular-nums font-semibold">{pct}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-forest-100 overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${pct}%`, background: t.couleurHex }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <ButtonLink href={`/naturopathie/temperaments/${dominant.slug}`} variant="primary" size="lg">
          Voir mon protocole complet <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <Button variant="secondary" size="lg" onClick={onRestart}>
          <RotateCcw className="h-4 w-4" /> Refaire le quiz
        </Button>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-forest-700/70 mb-2">
          Envie d'explorer aussi votre influence <strong>{secondary.nom}</strong> ?
        </p>
        <Link href={`/naturopathie/temperaments/${secondary.slug}`}
          className="text-sm font-semibold text-forest-700 underline underline-offset-4 hover:text-forest-900">
          Découvrir le profil {secondary.nom.toLowerCase()} →
        </Link>
      </div>
    </Container>
  );
}
