import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Scale } from 'lucide-react';

interface Section {
  readonly heading: string;
  readonly content: string;
}

interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  badge?: string;
  intro?: string;
  sections: readonly Section[];
  children?: ReactNode;
}

function renderMarkdown(text: string): ReactNode {
  // Simple markdown-like renderer for bold, lists
  const lines = text.split('\n');
  const elements: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line === '') {
      i++;
      continue;
    }

    // Bold lines (standalone **text**)
    if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      elements.push(
        <p key={i} className="font-semibold text-forest-900 mt-4 mb-1">
          {line.slice(2, -2)}
        </p>
      );
      i++;
      continue;
    }

    // Bullet list item
    if (line.startsWith('- ') || line.startsWith('• ')) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('• '))) {
        listItems.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={i} className="list-disc pl-6 space-y-1.5 my-3 text-forest-800/90 marker:text-sage-500">
          {listItems.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
          ))}
        </ul>
      );
      continue;
    }

    // Regular paragraph — replace **bold**
    elements.push(
      <p key={i} className="text-forest-800/90 leading-relaxed mb-3"
        dangerouslySetInnerHTML={{
          __html: line.replace(/\*\*(.+?)\*\*/g, '<strong class="text-forest-900">$1</strong>')
        }}
      />
    );
    i++;
  }

  return <>{elements}</>;
}

export function LegalPage({
  title,
  lastUpdated,
  badge = 'Information légale',
  intro,
  sections,
  children,
}: LegalPageProps) {
  return (
    <>
      {/* Page header */}
      <section className="hero-bg py-14 sm:py-18 border-b border-forest-100">
        <Container size="prose">
          <Badge variant="sage" className="mb-5">
            <Scale className="h-3 w-3" aria-hidden="true" />
            {badge}
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl text-forest-900 leading-tight">
            {title}
          </h1>
          {lastUpdated && (
            <p className="mt-4 text-sm text-forest-600">
              Dernière mise à jour : <time dateTime={lastUpdated}>{lastUpdated}</time>
            </p>
          )}
          {intro && (
            <p className="mt-4 text-lg text-forest-700/85 leading-relaxed">{intro}</p>
          )}
        </Container>
      </section>

      {/* Content */}
      <Container size="prose" className="py-12 space-y-10">
        {sections.map((section, idx) => (
          <article key={idx} className="prose-natural">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-900 mb-4 pb-2 border-b border-forest-100">
              {section.heading}
            </h2>
            <div className="text-forest-800/90 leading-relaxed space-y-2">
              {renderMarkdown(section.content)}
            </div>
          </article>
        ))}

        {children}

        {/* Signature */}
        <div className="bg-forest-50 rounded-2xl p-6 border border-forest-100 text-sm text-forest-700">
          <p className="font-semibold text-forest-900 mb-1">Nutriéa — Service de KAYZEN LYON</p>
          <p>6, rue Pierre TERMIER · 69009 LYON · contact@kayzen-lyon.fr · +33 (0)4 87 77 68 61</p>
        </div>
      </Container>
    </>
  );
}
