import { ImageResponse } from 'next/og';
import { getArticle } from '@/lib/articles';
import { getCategory } from '@/lib/categories';

export const runtime = 'edge';

const SITE_NAME = 'Nutriéa';

const TONES: Record<string, { bg: string; accent: string; ink: string }> = {
  naturopathie: { bg: '#eef9f2', accent: '#0f5e37', ink: '#0c4a2c' },
  nutritherapie: { bg: '#fef7ee', accent: '#b9440c', ink: '#762c11' },
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get('cat') ?? '';
  const slug = searchParams.get('slug') ?? '';

  // Try to find a matching article
  const naturo = getArticle('naturopathie', cat, slug);
  const nutri = naturo ? null : getArticle('nutritherapie', cat, slug);
  const article = naturo ?? nutri;
  const domain = article?.domain ?? 'naturopathie';
  const palette = TONES[domain];
  const category = article ? getCategory(article.domain, article.category) : undefined;

  const title = article?.title ?? SITE_NAME;
  const subtitle = category ? `${category.icon} ${category.nom}` : 'Naturopathie & Nutrithérapie';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: `linear-gradient(135deg, ${palette.bg} 0%, #ffffff 100%)`,
          padding: '64px 80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: palette.ink,
          position: 'relative',
        }}
      >
        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', top: -120, right: -120, width: 360, height: 360,
          borderRadius: '50%', background: palette.accent, opacity: 0.12,
        }} />
        <div style={{
          position: 'absolute', bottom: -100, left: -100, width: 280, height: 280,
          borderRadius: '50%', background: palette.accent, opacity: 0.08,
        }} />

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 24, fontWeight: 700, color: palette.accent }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12, background: palette.accent,
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 24,
          }}>N</div>
          {SITE_NAME}
        </div>

        {/* Subtitle */}
        <div style={{
          marginTop: 'auto',
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: 2,
          textTransform: 'uppercase',
          color: palette.accent,
        }}>
          {subtitle}
        </div>

        {/* Main title */}
        <div style={{
          fontSize: title.length > 60 ? 56 : 72,
          fontWeight: 800,
          lineHeight: 1.05,
          marginTop: 16,
          color: palette.ink,
          maxWidth: 1040,
          letterSpacing: '-0.02em',
        }}>
          {title}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 32,
          fontSize: 22,
          color: palette.ink,
          opacity: 0.7,
        }}>
          naturo-nutri.vercel.app
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
