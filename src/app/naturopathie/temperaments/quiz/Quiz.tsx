'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { QUIZ_QUESTIONS, computeQuizResult, type QuizResult } from '@/lib/quiz-data';
import { TEMPERAMENTS, TEMPERAMENT_SLUGS } from '@/lib/temperaments';
import { Container } from '@/components/ui/Container';
import { Button, ButtonLink } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export function Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const progress = Math.round(((currentStep + (showResult ? 1 : 0)) / totalQuestions) * 100);
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
    if (isLast) {
      setShowResult(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function previous() {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  }

  function restart() {
    setAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  }

  if (showResult && result) return <Result result={result} onRestart={restart} />;

  return (
    <Container size="prose" className="py-12 sm:py-16">
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-forest-700/70 mb-2">
          <span className="font-medium uppercase tracking-wider">
            Question {currentStep + 1} sur {totalQuestions}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-forest-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-forest-600 to-sage-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Card accent="cream" className="animate-fade-in">
        <CardContent className="p-6 sm:p-10">
          <Badge variant="sage" className="mb-4 capitalize">{currentQuestion.category}</Badge>
          <h2 className="font-display text-2xl sm:text-3xl text-forest-900 leading-tight text-balance">
            {currentQuestion.question}
          </h2>

          <div className="mt-8 space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = currentAnswer === idx;
              return (
                <button
                  key={idx}
                  onClick={() => selectOption(idx)}
                  className={cn(
                    'w-full text-left rounded-2xl border-2 p-4 sm:p-5 transition-all flex items-start gap-4',
                    isSelected
                      ? 'border-forest-700 bg-forest-50 shadow-sm'
                      : 'border-forest-100 bg-white/60 hover:border-forest-300 hover:bg-cream-50',
                  )}
                >
                  <span className={cn(
                    'mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border-2 transition-colors',
                    isSelected ? 'border-forest-700 bg-forest-700 text-cream-50' : 'border-forest-300 bg-transparent',
                  )}>
                    {isSelected && <CheckCircle2 className="h-4 w-4" />}
                  </span>
                  <span className="text-sm sm:text-base text-forest-800 leading-relaxed">{option.label}</span>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 flex items-center justify-between">
        <Button variant="ghost" onClick={previous} disabled={currentStep === 0}
          className={cn(currentStep === 0 && 'opacity-0 pointer-events-none')}>
          <ArrowLeft className="h-4 w-4" /> Précédent
        </Button>
        <Button variant="primary" onClick={next} disabled={currentAnswer === undefined}>
          {isLast ? 'Voir mon résultat' : 'Suivant'} <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Container>
  );
}

function Result({ result, onRestart }: { result: QuizResult; onRestart: () => void }) {
  const dominant = TEMPERAMENTS[result.dominant];
  const secondary = TEMPERAMENTS[result.secondary];
  const sortedTemperaments = [...TEMPERAMENT_SLUGS].sort((a, b) => result.scores[b] - result.scores[a]);

  return (
    <Container size="prose" className="py-12 sm:py-16">
      <div className="text-center mb-12 animate-fade-in">
        <div className="grid h-16 w-16 mx-auto place-items-center rounded-full bg-forest-700 text-cream-50 mb-6">
          <Sparkles className="h-7 w-7" />
        </div>
        <p className="text-xs uppercase tracking-[0.18em] text-earth-600 mb-3 font-medium">Votre résultat</p>
        <h1 className="font-display text-4xl sm:text-5xl text-forest-900 leading-tight text-balance">
          Vous êtes <span className="italic text-earth-600">{dominant.nom.toLowerCase()}</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-forest-700/85 leading-relaxed">
          Avec une influence <strong className="text-forest-900">{secondary.nom.toLowerCase()}</strong> secondaire.
        </p>
      </div>

      <Card accent="forest" className="overflow-hidden mb-8 animate-slide-up">
        <div className="p-8 text-cream-50"
          style={{ background: `linear-gradient(135deg, ${dominant.couleurHex}cc, ${dominant.couleurHex}99)` }}>
          <div className="flex items-start gap-4">
            <span className="text-5xl">{dominant.emoji}</span>
            <div>
              <Badge className="bg-white/20 text-cream-50 ring-white/30 mb-2">
                {dominant.element} · {dominant.humeur}
              </Badge>
              <h2 className="font-display text-3xl mb-2">{dominant.nom}</h2>
              <p className="text-cream-50/90 leading-relaxed">{dominant.description}</p>
            </div>
          </div>
        </div>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-display text-base font-semibold text-forest-900 mb-2">Vos forces</h3>
              <ul className="space-y-1.5 text-sm text-forest-800/90">
                {dominant.forces.slice(0, 4).map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-sage-600 mt-0.5">●</span><span>{f}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-forest-900 mb-2">Vos points de vigilance</h3>
              <ul className="space-y-1.5 text-sm text-forest-800/90">
                {dominant.faiblesses.slice(0, 4).map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-earth-500 mt-0.5">●</span><span>{f}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card accent="sage" className="mb-8">
        <CardContent>
          <h3 className="font-display text-lg font-semibold text-forest-900 mb-4">Répartition détaillée</h3>
          <div className="space-y-3">
            {sortedTemperaments.map((slug) => {
              const t = TEMPERAMENTS[slug];
              const pct = result.percentages[slug];
              return (
                <div key={slug}>
                  <div className="flex items-center justify-between mb-1.5 text-sm">
                    <span className="flex items-center gap-2"><span>{t.emoji}</span><span className="font-medium text-forest-800">{t.nom}</span></span>
                    <span className="text-forest-700/70 tabular-nums font-medium">{pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-forest-100 overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${pct}%`, background: t.couleurHex }} />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <ButtonLink href={`/naturopathie/temperaments/${dominant.slug}`} variant="primary" size="lg">
          Voir mon protocole complet <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <Button variant="secondary" size="lg" onClick={onRestart}>
          <RotateCcw className="h-4 w-4" /> Refaire le quiz
        </Button>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-forest-700/70 mb-3">
          Vous voulez aussi explorer votre influence <strong>{secondary.nom}</strong> ?
        </p>
        <Link href={`/naturopathie/temperaments/${secondary.slug}`}
          className="text-sm text-forest-700 underline underline-offset-4 hover:text-forest-900">
          Découvrir le profil {secondary.nom.toLowerCase()} →
        </Link>
      </div>
    </Container>
  );
}
