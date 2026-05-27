import type { Metadata } from 'next';
import { Quiz } from './Quiz';

export const metadata: Metadata = {
  title: 'Quiz tempérament hippocratique',
  description:
    "Découvrez votre tempérament hippocratique en 20 questions : sanguin, bilieux, nerveux ou lymphatique. Recevez un protocole personnalisé combinant naturopathie (Grosjean) et nutrithérapie (Curtay).",
};

export default function QuizPage() {
  return (
    <div className="min-h-[80vh] grain-bg">
      <Quiz />
    </div>
  );
}
