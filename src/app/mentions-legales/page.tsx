import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Naturo·Nutri.',
};

export default function MentionsLegalesPage() {
  return (
    <Container size="prose" className="py-16">
      <h1 className="font-display text-4xl text-forest-900 mb-8">Mentions légales</h1>

      <div className="prose prose-natural max-w-none space-y-6 text-forest-800/90 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl">Éditeur du site</h2>
          <p>
            Le site Naturo·Nutri est édité à titre éducatif. Pour toute question relative au
            contenu, contactez l'éditeur via le formulaire de contact.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl">Hébergement</h2>
          <p>
            Le site est hébergé sur Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl">Propriété intellectuelle</h2>
          <p>
            Les contenus du site (textes, illustrations, structure) sont la propriété de l'éditeur
            ou de leurs auteurs respectifs (Dr Jean-Paul Curtay, Irène Grosjean cités selon le droit
            de courte citation). Toute reproduction est soumise à autorisation préalable.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl">Avertissement médical</h2>
          <p>
            Les informations présentées sont à <strong>visée éducative uniquement</strong>. Elles
            ne constituent pas un avis médical et ne remplacent pas une consultation avec un
            professionnel de santé qualifié. Le site décline toute responsabilité quant à
            l'utilisation faite des informations qui y figurent.
          </p>
          <p>
            En particulier, consultez votre médecin avant d'entreprendre :
          </p>
          <ul>
            <li>Un jeûne de plus de 24h</li>
            <li>Une purge à l'huile de ricin</li>
            <li>Un changement alimentaire majeur (crudivorisme, éviction laitages/gluten)</li>
            <li>Une supplémentation prolongée en vitamines ou minéraux</li>
            <li>L'arrêt ou la modification de tout traitement médical</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl">Sources et références</h2>
          <p>Les contenus s'appuient principalement sur :</p>
          <ul>
            <li>
              <strong>Dr Jean-Paul Curtay</strong>, « La Nutrithérapie : bases scientifiques et
              pratique médicale » (Testez Éditions), et autres ouvrages.
            </li>
            <li>
              <strong>Irène Grosjean</strong>, conférences et stages, transmission orale, ainsi que
              son ouvrage « La Vie en Abondance ».
            </li>
            <li>
              Tradition naturopathique de l'école Marchesseau.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl">Données personnelles</h2>
          <p>
            Aucune donnée personnelle n'est collectée par défaut sur ce site. Les résultats du quiz
            tempérament sont calculés en local dans votre navigateur et ne sont pas transmis à un
            serveur. Voir notre <a href="/confidentialite">politique de confidentialité</a> pour
            plus de détails.
          </p>
        </section>
      </div>
    </Container>
  );
}
