import type { Metadata } from 'next';
import { Quiz } from './Quiz';

export const metadata: Metadata = {
  title: 'Quiz tempérament hippocratique',
  description:
    "Découvrez votre tempérament hippocratique en 20 questions : sanguin, bilieux, nerveux ou lymphatique. Protocole personnalisé.",
};

export default function QuizPage() {
  return (
    <div className="relative min-h-[85vh] mesh-organic grain-overlay overflow-hidden">
      {/* Blobs organiques d'ambiance */}
      <div className="absolute -top-24 -left-24 w-[26rem] h-[26rem] bg-sage-200/40 blob-a animate-blob blur-2xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 -right-24 w-[22rem] h-[22rem] bg-forest-200/35 blob-b animate-blob-slow blur-2xl pointer-events-none" aria-hidden="true" />
      <div className="relative">
        <Quiz />
      </div>
    </div>
  );
}
