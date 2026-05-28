/**
 * ArticleHero — illustration SVG thématique par catégorie.
 *
 * Remplace les anciennes images Unsplash (IDs hallucinés → photos hors-sujet).
 * 100% vectoriel, sans dépendance réseau, accessible, brand-cohérent.
 *
 * 17 scènes : une par catégorie de contenu.
 */

import { cn } from '@/lib/utils';

type Tone = 'forest' | 'sage' | 'earth' | 'cream';

type Palette = {
  bg1: string;       // gradient start
  bg2: string;       // gradient end
  bgGrain: string;   // soft accent blob
  primary: string;   // main subject color
  secondary: string; // accent subject color
  tertiary: string;  // detail color
  ink: string;       // outline / detail strokes
};

const PALETTES: Record<Tone, Palette> = {
  forest: {
    bg1: '#eef9f2', bg2: '#d2f0db', bgGrain: '#a8e0bb',
    primary: '#0f5e37', secondary: '#33a85f', tertiary: '#f5902c', ink: '#0c4a2c',
  },
  sage: {
    bg1: '#f2fcf5', bg2: '#c0edce', bgGrain: '#90dcaa',
    primary: '#1e6e3c', secondary: '#33a85f', tertiary: '#f27214', ink: '#185731',
  },
  earth: {
    bg1: '#fef7ee', bg2: '#fde9cc', bgGrain: '#fbd095',
    primary: '#b9440c', secondary: '#f27214', tertiary: '#0f5e37', ink: '#762c11',
  },
  cream: {
    bg1: '#f2fbf4', bg2: '#e2f5e7', bgGrain: '#c0edce',
    primary: '#0f5e37', secondary: '#f27214', tertiary: '#33a85f', ink: '#0c4a2c',
  },
};

/* Mapping catégorie → tonalité de palette */
const CATEGORY_TONE: Record<string, Tone> = {
  jeunes: 'sage',
  purges: 'sage',
  plantes: 'forest',
  alimentation: 'sage',
  'cures-saisonnieres': 'earth',
  hydrotherapie: 'sage',
  aromatherapie: 'forest',
  'respiration-sommeil': 'forest',
  'stress-emotions': 'sage',
  vitamines: 'earth',
  mineraux: 'cream',
  'acides-gras': 'earth',
  'acides-amines': 'earth',
  antioxydants: 'forest',
  probiotiques: 'sage',
  adaptogenes: 'forest',
  objectifs: 'earth',
};

/* ─────────────────────────────────────────
   Primitives de scène — réutilisables
───────────────────────────────────────── */

function SceneBackground({ palette, seed = 0 }: { palette: Palette; seed?: number }) {
  // Background gradient + 2 soft blobs slightly offset by seed
  const offsetX = (seed * 37) % 60 - 30;
  const offsetY = (seed * 53) % 40 - 20;
  return (
    <>
      <defs>
        <linearGradient id={`bg-${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette.bg1} />
          <stop offset="100%" stopColor={palette.bg2} />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill={`url(#bg-${seed})`} />
      <circle cx={120 + offsetX} cy={100 + offsetY} r="160" fill={palette.bgGrain} opacity="0.45" />
      <circle cx={680 - offsetX} cy={380 + offsetY} r="140" fill={palette.bgGrain} opacity="0.35" />
    </>
  );
}

function Leaf({ x, y, scale = 1, rotate = 0, color, opacity = 0.85 }: {
  x: number; y: number; scale?: number; rotate?: number; color: string; opacity?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale}) rotate(${rotate})`} opacity={opacity}>
      <path
        d="M0,0 C0,0 50,-10 60,40 C68,80 30,100 0,110 C0,110 -10,60 0,0 Z"
        fill={color}
      />
      <path d="M0,0 L5,100" stroke="rgba(0,0,0,0.15)" strokeWidth="1.2" fill="none" />
    </g>
  );
}

function Sparkle({ x, y, size = 6, color }: { x: number; y: number; size?: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d={`M0,-${size} L${size * 0.3},-${size * 0.3} L${size},0 L${size * 0.3},${size * 0.3} L0,${size} L-${size * 0.3},${size * 0.3} L-${size},0 L-${size * 0.3},-${size * 0.3} Z`}
        fill={color}
      />
    </g>
  );
}

function Drop({ x, y, size = 24, color }: { x: number; y: number; size?: number; color: string }) {
  return (
    <path
      d={`M${x},${y - size} C${x - size * 0.6},${y - size * 0.4} ${x - size * 0.7},${y + size * 0.4} ${x},${y + size * 0.6} C${x + size * 0.7},${y + size * 0.4} ${x + size * 0.6},${y - size * 0.4} ${x},${y - size} Z`}
      fill={color}
    />
  );
}

/* ─────────────────────────────────────────
   SCÈNES par catégorie
───────────────────────────────────────── */

function SceneJeunes({ p }: { p: Palette }) {
  // Verre d'eau pure + horloge
  return (
    <>
      {/* Horloge stylisée */}
      <circle cx="220" cy="225" r="100" fill="white" opacity="0.95" />
      <circle cx="220" cy="225" r="100" fill="none" stroke={p.primary} strokeWidth="6" />
      {[0, 1, 2, 3].map((i) => {
        const angle = (i * 90 - 90) * Math.PI / 180;
        return (
          <line
            key={i}
            x1={220 + Math.cos(angle) * 80}
            y1={225 + Math.sin(angle) * 80}
            x2={220 + Math.cos(angle) * 92}
            y2={225 + Math.sin(angle) * 92}
            stroke={p.primary}
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
      })}
      <line x1="220" y1="225" x2="220" y2="165" stroke={p.ink} strokeWidth="5" strokeLinecap="round" />
      <line x1="220" y1="225" x2="265" y2="225" stroke={p.ink} strokeWidth="4" strokeLinecap="round" />
      <circle cx="220" cy="225" r="6" fill={p.ink} />

      {/* Verre d'eau */}
      <path d="M520 150 L590 150 L580 330 L530 330 Z" fill="white" opacity="0.85" stroke={p.primary} strokeWidth="3" />
      <path d="M530 215 Q555 200 580 215 L578 325 L532 325 Z" fill={p.secondary} opacity="0.45" />
      <ellipse cx="555" cy="148" rx="35" ry="6" fill={p.secondary} opacity="0.55" />

      {/* Gouttes flottantes */}
      <Drop x={420} y={140} size={18} color={p.secondary} />
      <Drop x={670} y={220} size={14} color={p.secondary} />
      <Drop x={400} y={340} size={12} color={p.secondary} />
    </>
  );
}

function SceneAlimentation({ p }: { p: Palette }) {
  // Bol coloré, légumes
  return (
    <>
      {/* Bol */}
      <ellipse cx="400" cy="280" rx="220" ry="40" fill={p.ink} opacity="0.15" />
      <path d="M200 270 Q400 360 600 270 L585 330 Q400 410 215 330 Z" fill="white" stroke={p.primary} strokeWidth="3" />
      <ellipse cx="400" cy="265" rx="200" ry="35" fill={p.secondary} opacity="0.85" />

      {/* Tomates */}
      <circle cx="320" cy="245" r="32" fill={p.tertiary} />
      <circle cx="320" cy="245" r="32" fill="white" opacity="0.2" />
      <path d="M315 220 Q320 210 325 220" stroke={p.primary} strokeWidth="3" fill="none" />

      <circle cx="490" cy="252" r="28" fill={p.tertiary} />
      <circle cx="490" cy="252" r="28" fill="white" opacity="0.2" />
      <path d="M486 230 Q490 222 494 230" stroke={p.primary} strokeWidth="3" fill="none" />

      {/* Feuilles */}
      <Leaf x={380} y={210} scale={0.5} rotate={-15} color={p.primary} />
      <Leaf x={430} y={205} scale={0.55} rotate={20} color={p.primary} />
      <Leaf x={355} y={230} scale={0.4} rotate={50} color={p.primary} opacity={0.7} />

      {/* Grains/baies */}
      <circle cx="270" cy="270" r="9" fill={p.primary} />
      <circle cx="540" cy="275" r="8" fill={p.primary} />
      <circle cx="290" cy="285" r="7" fill={p.ink} opacity="0.7" />
    </>
  );
}

function ScenePlantes({ p }: { p: Palette }) {
  // Pot avec plante feuillue
  return (
    <>
      {/* Pot */}
      <path d="M320 320 L480 320 L460 410 L340 410 Z" fill={p.tertiary} />
      <rect x="312" y="310" width="176" height="20" rx="4" fill={p.ink} opacity="0.7" />

      {/* Tige */}
      <path d="M400 320 Q395 220 400 130" stroke={p.primary} strokeWidth="5" fill="none" />

      {/* Feuilles montantes */}
      <Leaf x={400} y={200} scale={1.2} rotate={-30} color={p.primary} />
      <Leaf x={400} y={180} scale={1.0} rotate={45} color={p.secondary} />
      <Leaf x={400} y={150} scale={0.9} rotate={-25} color={p.primary} />
      <Leaf x={400} y={140} scale={0.8} rotate={20} color={p.secondary} />
      <Leaf x={400} y={110} scale={0.7} rotate={-5} color={p.primary} />

      {/* Petites fleurs */}
      <g transform="translate(440 160)">
        <circle cx="0" cy="0" r="6" fill="white" />
        <circle cx="-6" cy="-3" r="6" fill="white" />
        <circle cx="6" cy="-3" r="6" fill="white" />
        <circle cx="-3" cy="6" r="6" fill="white" />
        <circle cx="3" cy="6" r="6" fill="white" />
        <circle cx="0" cy="0" r="4" fill={p.tertiary} />
      </g>
    </>
  );
}

function SceneHydrotherapie({ p }: { p: Palette }) {
  // Vagues d'eau + grosse goutte
  return (
    <>
      <path d="M0 280 Q200 240 400 280 T800 280 L800 450 L0 450 Z" fill={p.secondary} opacity="0.4" />
      <path d="M0 320 Q200 280 400 320 T800 320 L800 450 L0 450 Z" fill={p.secondary} opacity="0.55" />
      <path d="M0 360 Q200 330 400 360 T800 360 L800 450 L0 450 Z" fill={p.primary} opacity="0.6" />

      <Drop x={400} y={180} size={80} color="white" />
      <Drop x={400} y={180} size={80} color={p.secondary} />
      <ellipse cx="380" cy="160" rx="14" ry="20" fill="white" opacity="0.55" />

      <Drop x={200} y={150} size={20} color={p.primary} />
      <Drop x={600} y={170} size={22} color={p.primary} />
      <Drop x={680} y={120} size={14} color={p.secondary} />
      <Drop x={140} y={210} size={16} color={p.secondary} />
    </>
  );
}

function SceneAromatherapie({ p }: { p: Palette }) {
  // Flacons d'huiles essentielles
  return (
    <>
      {/* Flacon 1 */}
      <g transform="translate(280 130)">
        <rect x="-32" y="0" width="64" height="20" fill={p.ink} rx="4" />
        <rect x="-22" y="-12" width="44" height="14" fill={p.ink} rx="2" />
        <path d="M-40 20 L-40 200 Q-40 220 -20 220 L20 220 Q40 220 40 200 L40 20 Z" fill={p.secondary} opacity="0.85" />
        <path d="M-30 80 L-30 195 Q-30 210 -18 210 L18 210 Q30 210 30 195 L30 80 Z" fill={p.primary} opacity="0.5" />
        <rect x="-25" y="120" width="50" height="35" rx="3" fill="white" opacity="0.85" />
        <line x1="-15" y1="135" x2="15" y2="135" stroke={p.ink} strokeWidth="1" />
        <line x1="-15" y1="145" x2="10" y2="145" stroke={p.ink} strokeWidth="1" />
      </g>

      {/* Flacon 2 plus grand */}
      <g transform="translate(440 100)">
        <rect x="-40" y="0" width="80" height="22" fill={p.ink} rx="4" />
        <rect x="-28" y="-14" width="56" height="16" fill={p.ink} rx="2" />
        <path d="M-50 22 L-50 260 Q-50 285 -25 285 L25 285 Q50 285 50 260 L50 22 Z" fill={p.tertiary} opacity="0.8" />
        <path d="M-38 110 L-38 255 Q-38 275 -23 275 L23 275 Q38 275 38 255 L38 110 Z" fill={p.primary} opacity="0.45" />
        <rect x="-32" y="160" width="64" height="45" rx="3" fill="white" opacity="0.85" />
        <line x1="-20" y1="178" x2="20" y2="178" stroke={p.ink} strokeWidth="1" />
        <line x1="-20" y1="190" x2="14" y2="190" stroke={p.ink} strokeWidth="1" />
      </g>

      {/* Petite plante à côté */}
      <Leaf x={580} y={250} scale={0.9} rotate={-15} color={p.primary} />
      <Leaf x={585} y={240} scale={0.7} rotate={30} color={p.secondary} />
      <path d="M585 280 Q583 320 590 360" stroke={p.primary} strokeWidth="3" fill="none" />
    </>
  );
}

function SceneRespirationSommeil({ p }: { p: Palette }) {
  // Croissant de lune + nuage + étoiles
  return (
    <>
      <circle cx="500" cy="200" r="100" fill="white" opacity="0.9" />
      <circle cx="540" cy="180" r="100" fill={p.bg2} />

      <Sparkle x={220} y={140} size={9} color={p.secondary} />
      <Sparkle x={300} y={100} size={6} color={p.tertiary} />
      <Sparkle x={170} y={200} size={5} color={p.secondary} />
      <Sparkle x={380} y={250} size={7} color={p.primary} />
      <Sparkle x={650} y={120} size={6} color={p.secondary} />
      <Sparkle x={680} y={250} size={8} color={p.tertiary} />

      {/* Petit nuage */}
      <g opacity="0.85">
        <circle cx="170" cy="320" r="28" fill="white" />
        <circle cx="200" cy="305" r="34" fill="white" />
        <circle cx="240" cy="320" r="28" fill="white" />
        <rect x="170" y="320" width="80" height="20" fill="white" />
      </g>
    </>
  );
}

function SceneStressEmotions({ p }: { p: Palette }) {
  // Silhouette en méditation
  return (
    <>
      {/* Cercles concentriques (ondes) */}
      <circle cx="400" cy="240" r="180" fill="none" stroke={p.secondary} strokeWidth="2" opacity="0.3" />
      <circle cx="400" cy="240" r="130" fill="none" stroke={p.secondary} strokeWidth="2" opacity="0.4" />
      <circle cx="400" cy="240" r="90" fill="none" stroke={p.secondary} strokeWidth="2" opacity="0.5" />

      {/* Silhouette */}
      <circle cx="400" cy="200" r="32" fill={p.primary} />
      {/* Corps en lotus */}
      <path
        d="M325 290 Q400 240 475 290 Q510 320 475 360 L325 360 Q290 320 325 290 Z"
        fill={p.primary}
      />
      {/* Bras */}
      <path d="M335 305 Q360 320 380 310" stroke={p.primary} strokeWidth="14" strokeLinecap="round" fill="none" />
      <path d="M465 305 Q440 320 420 310" stroke={p.primary} strokeWidth="14" strokeLinecap="round" fill="none" />

      <Leaf x={150} y={350} scale={0.7} rotate={20} color={p.secondary} opacity={0.7} />
      <Leaf x={620} y={350} scale={0.7} rotate={-20} color={p.secondary} opacity={0.7} />
    </>
  );
}

function ScenePurges({ p }: { p: Palette }) {
  // Bocal + plante drainage
  return (
    <>
      {/* Bocal */}
      <path d="M300 180 L500 180 L500 200 L490 220 L490 380 Q490 410 460 410 L340 410 Q310 410 310 380 L310 220 L300 200 Z" fill="white" opacity="0.9" stroke={p.primary} strokeWidth="3" />
      {/* Couvercle */}
      <rect x="290" y="160" width="220" height="28" rx="6" fill={p.primary} />
      {/* Liquide vert */}
      <path d="M315 260 L485 260 L485 380 Q485 405 460 405 L340 405 Q315 405 315 380 Z" fill={p.secondary} opacity="0.7" />
      {/* Feuilles dans le bocal */}
      <Leaf x={380} y={230} scale={0.6} rotate={-20} color={p.primary} opacity={0.85} />
      <Leaf x={420} y={235} scale={0.55} rotate={25} color={p.primary} opacity={0.85} />
      <Leaf x={400} y={250} scale={0.5} rotate={70} color={p.primary} opacity={0.7} />
      {/* Bulles */}
      <circle cx="350" cy="320" r="6" fill="white" opacity="0.7" />
      <circle cx="430" cy="340" r="4" fill="white" opacity="0.8" />
      <circle cx="460" cy="300" r="5" fill="white" opacity="0.7" />
    </>
  );
}

function SceneCuresSaisonnieres({ p }: { p: Palette }) {
  // 4 feuilles 4 saisons
  return (
    <>
      <circle cx="400" cy="225" r="150" fill="white" opacity="0.7" />
      <circle cx="400" cy="225" r="150" fill="none" stroke={p.primary} strokeWidth="3" />

      {/* Printemps — vert tendre */}
      <Leaf x={320} y={140} scale={1.0} rotate={-30} color="#90dcaa" />
      {/* Été — vert vif */}
      <Leaf x={480} y={140} scale={1.0} rotate={30} color="#33a85f" />
      {/* Automne — orange */}
      <Leaf x={480} y={310} scale={1.0} rotate={150} color="#f27214" />
      {/* Hiver — bleuté */}
      <Leaf x={320} y={310} scale={1.0} rotate={-150} color="#a8e0bb" opacity={0.85} />

      {/* Centre */}
      <circle cx="400" cy="225" r="22" fill={p.primary} />
      <circle cx="400" cy="225" r="14" fill={p.secondary} />
    </>
  );
}

function SceneVitamines({ p }: { p: Palette }) {
  // Soleil + agrumes
  return (
    <>
      {/* Soleil */}
      <circle cx="260" cy="180" r="70" fill={p.tertiary} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
        const rad = a * Math.PI / 180;
        const x1 = 260 + Math.cos(rad) * 85;
        const y1 = 180 + Math.sin(rad) * 85;
        const x2 = 260 + Math.cos(rad) * 115;
        const y2 = 180 + Math.sin(rad) * 115;
        return (
          <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke={p.tertiary} strokeWidth="6" strokeLinecap="round" />
        );
      })}

      {/* Orange */}
      <circle cx="520" cy="270" r="80" fill={p.tertiary} />
      <circle cx="520" cy="270" r="80" fill="white" opacity="0.15" />
      <circle cx="500" cy="250" r="14" fill="white" opacity="0.4" />
      {/* Quartiers stylisés */}
      {[0, 45, 90, 135].map((a) => {
        const rad = a * Math.PI / 180;
        return (
          <line
            key={a}
            x1={520 - Math.cos(rad) * 65}
            y1={270 - Math.sin(rad) * 65}
            x2={520 + Math.cos(rad) * 65}
            y2={270 + Math.sin(rad) * 65}
            stroke={p.primary}
            strokeWidth="2"
            opacity="0.6"
          />
        );
      })}

      {/* Feuille de l'orange */}
      <Leaf x={510} y={185} scale={0.6} rotate={-20} color={p.primary} />
    </>
  );
}

function SceneMineraux({ p }: { p: Palette }) {
  // Cristaux / minéraux géométriques
  return (
    <>
      {/* Cristal central */}
      <g transform="translate(400 230)">
        <path d="M0,-100 L60,-30 L40,80 L-40,80 L-60,-30 Z" fill={p.primary} opacity="0.9" />
        <path d="M0,-100 L60,-30 L0,0 Z" fill="white" opacity="0.3" />
        <path d="M0,-100 L-60,-30 L0,0 Z" fill={p.ink} opacity="0.2" />
        <path d="M0,0 L40,80 L-40,80 Z" fill={p.ink} opacity="0.15" />
      </g>

      {/* Cristaux secondaires */}
      <g transform="translate(220 280)">
        <path d="M0,-50 L30,-15 L20,40 L-20,40 L-30,-15 Z" fill={p.secondary} opacity="0.85" />
        <path d="M0,-50 L30,-15 L0,0 Z" fill="white" opacity="0.3" />
      </g>

      <g transform="translate(580 290)">
        <path d="M0,-60 L36,-18 L24,48 L-24,48 L-36,-18 Z" fill={p.tertiary} opacity="0.85" />
        <path d="M0,-60 L36,-18 L0,0 Z" fill="white" opacity="0.3" />
      </g>

      {/* Sparkles */}
      <Sparkle x={150} y={150} size={7} color={p.secondary} />
      <Sparkle x={650} y={140} size={8} color={p.primary} />
      <Sparkle x={500} y={120} size={5} color={p.tertiary} />
    </>
  );
}

function SceneAcidesGras({ p }: { p: Palette }) {
  // Poisson stylisé + huile (goutte)
  return (
    <>
      {/* Poisson */}
      <g transform="translate(400 235)">
        <path d="M-150,0 Q-100,-70 0,-50 Q90,-30 130,0 Q90,30 0,50 Q-100,70 -150,0 Z" fill={p.primary} />
        <path d="M130,0 L180,-40 L180,40 Z" fill={p.primary} />
        <path d="M-140,-10 Q-110,-15 -80,-10 Q-110,-5 -140,-10 Z" fill={p.secondary} opacity="0.6" />
        <circle cx="80" cy="-15" r="8" fill="white" />
        <circle cx="82" cy="-13" r="4" fill={p.ink} />
        {/* Écailles */}
        {[-60, -30, 0, 30, 60].map((x) => (
          <path key={x} d={`M${x},-30 Q${x + 15},0 ${x},30`} stroke={p.ink} strokeWidth="1.5" fill="none" opacity="0.4" />
        ))}
      </g>

      {/* Grosse goutte d'huile dorée */}
      <Drop x={650} y={120} size={36} color={p.tertiary} />
      <ellipse cx="640" cy="100" rx="9" ry="13" fill="white" opacity="0.6" />

      {/* Petites gouttes */}
      <Drop x={130} y={150} size={20} color={p.tertiary} />
      <Drop x={160} y={120} size={12} color={p.tertiary} />
    </>
  );
}

function SceneAcidesAmines({ p }: { p: Palette }) {
  // ADN / hélice stylisée
  return (
    <>
      {/* Hélice */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const y = 110 + i * 50;
        const offset = Math.sin(i * Math.PI / 3) * 50;
        return (
          <g key={i}>
            <circle cx={400 - offset} cy={y} r="12" fill={p.primary} />
            <circle cx={400 + offset} cy={y} r="12" fill={p.secondary} />
            <line x1={400 - offset} y1={y} x2={400 + offset} y2={y} stroke={p.ink} strokeWidth="3" />
          </g>
        );
      })}

      {/* Courbes des brins */}
      <path
        d={`M${400 - Math.sin(0) * 50},110 Q${400 + Math.sin(0.5 * Math.PI / 3) * 50},135 ${400 - Math.sin(Math.PI / 3) * 50},160 T${400 - Math.sin(2 * Math.PI / 3) * 50},210 T${400 - Math.sin(Math.PI) * 50},260 T${400 - Math.sin(4 * Math.PI / 3) * 50},310 T${400 - Math.sin(5 * Math.PI / 3) * 50},360`}
        fill="none"
        stroke={p.primary}
        strokeWidth="4"
        opacity="0.8"
      />
      <path
        d={`M${400 + Math.sin(0) * 50},110 Q${400 - Math.sin(0.5 * Math.PI / 3) * 50},135 ${400 + Math.sin(Math.PI / 3) * 50},160 T${400 + Math.sin(2 * Math.PI / 3) * 50},210 T${400 + Math.sin(Math.PI) * 50},260 T${400 + Math.sin(4 * Math.PI / 3) * 50},310 T${400 + Math.sin(5 * Math.PI / 3) * 50},360`}
        fill="none"
        stroke={p.secondary}
        strokeWidth="4"
        opacity="0.8"
      />
    </>
  );
}

function SceneAntioxydants({ p }: { p: Palette }) {
  // Grappe de baies + atomes/électrons
  return (
    <>
      {/* Grappe */}
      <g transform="translate(380 200)">
        {[
          [0, 0], [-40, 30], [40, 30], [-20, 60], [20, 60], [0, 90],
          [-60, 80], [60, 80], [-40, 110], [40, 110], [0, 140],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="22" fill={p.primary} />
            <circle cx={x - 5} cy={y - 5} r="6" fill="white" opacity="0.4" />
          </g>
        ))}
        {/* Tige */}
        <path d="M0,-50 Q-10,-25 0,0" stroke={p.ink} strokeWidth="3" fill="none" />
        <Leaf x={0} y={-40} scale={0.5} rotate={-30} color={p.secondary} />
      </g>

      {/* Atome stylisé */}
      <g transform="translate(620 180)">
        <ellipse cx="0" cy="0" rx="60" ry="20" fill="none" stroke={p.tertiary} strokeWidth="2.5" />
        <ellipse cx="0" cy="0" rx="60" ry="20" fill="none" stroke={p.tertiary} strokeWidth="2.5" transform="rotate(60)" />
        <ellipse cx="0" cy="0" rx="60" ry="20" fill="none" stroke={p.tertiary} strokeWidth="2.5" transform="rotate(-60)" />
        <circle cx="0" cy="0" r="14" fill={p.tertiary} />
        <circle cx="60" cy="0" r="6" fill={p.primary} />
        <circle cx="-30" cy="52" r="6" fill={p.primary} />
        <circle cx="-30" cy="-52" r="6" fill={p.primary} />
      </g>
    </>
  );
}

function SceneProbiotiques({ p }: { p: Palette }) {
  // Bactéries amicales / yogourt
  return (
    <>
      {/* Pot de yaourt */}
      <path d="M280 180 L420 180 L405 380 L295 380 Z" fill="white" stroke={p.primary} strokeWidth="3" />
      <ellipse cx="350" cy="180" rx="70" ry="14" fill={p.secondary} opacity="0.8" />
      <path d="M310 250 L390 250 L378 370 L322 370 Z" fill={p.secondary} opacity="0.3" />

      {/* Bactéries amicales (formes ovales avec yeux) */}
      <g transform="translate(540 200)">
        <ellipse cx="0" cy="0" rx="50" ry="32" fill={p.primary} />
        <circle cx="-15" cy="-5" r="5" fill="white" />
        <circle cx="15" cy="-5" r="5" fill="white" />
        <circle cx="-15" cy="-5" r="2" fill={p.ink} />
        <circle cx="15" cy="-5" r="2" fill={p.ink} />
        <path d="M-12 12 Q0 22 12 12" stroke="white" strokeWidth="2.5" fill="none" />
        {/* Cils */}
        <line x1="50" y1="0" x2="65" y2="-5" stroke={p.primary} strokeWidth="3" />
        <line x1="50" y1="5" x2="65" y2="8" stroke={p.primary} strokeWidth="3" />
        <line x1="-50" y1="0" x2="-65" y2="-5" stroke={p.primary} strokeWidth="3" />
        <line x1="-50" y1="5" x2="-65" y2="8" stroke={p.primary} strokeWidth="3" />
      </g>

      <g transform="translate(620 320)">
        <ellipse cx="0" cy="0" rx="38" ry="24" fill={p.secondary} />
        <circle cx="-10" cy="-3" r="4" fill="white" />
        <circle cx="10" cy="-3" r="4" fill="white" />
        <circle cx="-10" cy="-3" r="1.5" fill={p.ink} />
        <circle cx="10" cy="-3" r="1.5" fill={p.ink} />
        <path d="M-8 8 Q0 14 8 8" stroke="white" strokeWidth="2" fill="none" />
      </g>
    </>
  );
}

function SceneAdaptogenes({ p }: { p: Palette }) {
  // Racine + plante adaptogène (ginseng-like)
  return (
    <>
      {/* Sol */}
      <path d="M0 320 Q400 280 800 320 L800 450 L0 450 Z" fill={p.tertiary} opacity="0.4" />

      {/* Racine */}
      <g transform="translate(400 280)">
        <path d="M0,0 Q-10,40 -20,80 Q-15,110 -30,130" stroke={p.tertiary} strokeWidth="14" strokeLinecap="round" fill="none" />
        <path d="M0,0 Q15,30 25,60 Q35,90 30,110" stroke={p.tertiary} strokeWidth="12" strokeLinecap="round" fill="none" />
        <path d="M-10,40 Q-25,55 -40,70" stroke={p.tertiary} strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M15,30 Q35,45 50,60" stroke={p.tertiary} strokeWidth="6" strokeLinecap="round" fill="none" />
      </g>

      {/* Tige */}
      <path d="M400 280 Q395 200 400 110" stroke={p.primary} strokeWidth="5" fill="none" />

      {/* Feuilles palmées */}
      <Leaf x={400} y={210} scale={1.3} rotate={-40} color={p.primary} />
      <Leaf x={400} y={210} scale={1.3} rotate={0} color={p.primary} />
      <Leaf x={400} y={210} scale={1.3} rotate={40} color={p.primary} />
      <Leaf x={400} y={150} scale={0.9} rotate={-20} color={p.secondary} />
      <Leaf x={400} y={150} scale={0.9} rotate={20} color={p.secondary} />

      {/* Petites baies */}
      <circle cx="380" cy="120" r="7" fill={p.tertiary} />
      <circle cx="395" cy="115" r="7" fill={p.tertiary} />
      <circle cx="410" cy="120" r="7" fill={p.tertiary} />
    </>
  );
}

function SceneObjectifs({ p }: { p: Palette }) {
  // Cible / objectif
  return (
    <>
      <circle cx="400" cy="225" r="170" fill="white" opacity="0.7" />
      <circle cx="400" cy="225" r="170" fill="none" stroke={p.primary} strokeWidth="3" />
      <circle cx="400" cy="225" r="130" fill={p.bg2} />
      <circle cx="400" cy="225" r="130" fill="none" stroke={p.primary} strokeWidth="3" />
      <circle cx="400" cy="225" r="90" fill={p.secondary} opacity="0.6" />
      <circle cx="400" cy="225" r="90" fill="none" stroke={p.primary} strokeWidth="3" />
      <circle cx="400" cy="225" r="50" fill={p.tertiary} />
      <circle cx="400" cy="225" r="20" fill={p.primary} />

      {/* Flèche piquée */}
      <line x1="600" y1="100" x2="410" y2="220" stroke={p.ink} strokeWidth="5" />
      <polygon points="600,100 580,90 590,115" fill={p.ink} />
      <polygon points="600,100 583,88 605,82" fill={p.tertiary} />

      <Sparkle x={250} y={120} size={9} color={p.secondary} />
      <Sparkle x={580} y={350} size={7} color={p.primary} />
    </>
  );
}

/* Mapping catégorie → composant scène */
const SCENE_BY_CATEGORY: Record<string, (props: { p: Palette }) => JSX.Element> = {
  jeunes: SceneJeunes,
  purges: ScenePurges,
  plantes: ScenePlantes,
  alimentation: SceneAlimentation,
  'cures-saisonnieres': SceneCuresSaisonnieres,
  hydrotherapie: SceneHydrotherapie,
  aromatherapie: SceneAromatherapie,
  'respiration-sommeil': SceneRespirationSommeil,
  'stress-emotions': SceneStressEmotions,
  vitamines: SceneVitamines,
  mineraux: SceneMineraux,
  'acides-gras': SceneAcidesGras,
  'acides-amines': SceneAcidesAmines,
  antioxydants: SceneAntioxydants,
  probiotiques: SceneProbiotiques,
  adaptogenes: SceneAdaptogenes,
  objectifs: SceneObjectifs,
};

/* Hash simple → seed pour décaler les blobs de background par article */
function hashSeed(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/* ─────────────────────────────────────────
   COMPOSANT PUBLIC
───────────────────────────────────────── */

interface ArticleHeroProps {
  category: string;
  slug: string;
  alt: string;
  className?: string;
  /** Aspect ratio container */
  ratio?: '16/9' | '21/9' | '4/3';
  /** Petit format (related cards) */
  compact?: boolean;
}

export function ArticleHero({
  category, slug, alt, className, ratio = '21/9', compact = false,
}: ArticleHeroProps) {
  const tone = CATEGORY_TONE[category] ?? 'sage';
  const palette = PALETTES[tone];
  const Scene = SCENE_BY_CATEGORY[category] ?? ScenePlantes;
  const seed = hashSeed(slug);

  const aspect =
    ratio === '21/9' ? 'aspect-[21/9]' :
    ratio === '4/3' ? 'aspect-[4/3]' : 'aspect-[16/9]';

  return (
    <div className={cn('relative w-full overflow-hidden', aspect, className)}>
      <svg
        viewBox="0 0 800 450"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        role="img"
        aria-label={alt}
      >
        <SceneBackground palette={palette} seed={seed} />
        <Scene p={palette} />
      </svg>
      {!compact && (
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
      )}
    </div>
  );
}
