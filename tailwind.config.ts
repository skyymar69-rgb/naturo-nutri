import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        forest: {
          50:  '#eef9f2',
          100: '#d2f0db',
          200: '#a8e0bb',
          300: '#71c894',
          400: '#3dac6c',
          500: '#1d9354',
          600: '#137644',
          700: '#0f5e37',  // ← primary dark green (CTAs, headings accent)
          800: '#0c4a2c',
          900: '#093a22',
          950: '#051f12',
        },
        sage: {
          50:  '#f2fcf5',
          100: '#def7e6',
          200: '#c0edce',
          300: '#90dcaa',
          400: '#58c47f',
          500: '#33a85f',  // ← vivid green (main CTA buttons)
          600: '#248a4a',
          700: '#1e6e3c',
          800: '#185731',
          900: '#134728',
        },
        earth: {
          50:  '#fef7ee',
          100: '#fde9cc',
          200: '#fbd095',
          300: '#f8b05c',
          400: '#f5902c',
          500: '#f27214',  // ← warm orange (Nutrithérapie accent)
          600: '#e05a0b',
          700: '#b9440c',
          800: '#933511',
          900: '#762c11',
        },
        cream: {
          DEFAULT: '#f2fbf4',
          50:  '#f2fbf4',   // ← très léger vert menthe (fond global)
          100: '#e2f5e7',
          200: '#c8eccf',
          300: '#a0d9ac',
        },
        // Temperament colors — unchanged
        sanguin:    '#c0392b',
        bilieux:    '#d4ac0d',
        nerveux:    '#2980b9',
        lymphatique:'#16a085',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'Cambria', 'serif'],
        serif:   ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            color: '#0c4a2c',
            a: { color: '#0f5e37', textDecoration: 'underline' },
          },
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        'organic': '0 24px 60px -18px rgba(15,94,55,0.28), 0 8px 24px -12px rgba(15,94,55,0.16)',
        'soft':    '0 12px 40px -16px rgba(15,94,55,0.22)',
      },
      animation: {
        'fade-in':  'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float':    'float 6s ease-in-out infinite',
        'blob':     'blobMorph 22s ease-in-out infinite',
        'blob-slow':'blobMorph 30s ease-in-out infinite',
        'spin-slow':'spin 28s linear infinite',
        'sway':     'sway 9s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        blobMorph: {
          '0%, 100%': { borderRadius: '42% 58% 70% 30% / 45% 45% 55% 55%' },
          '33%':      { borderRadius: '63% 37% 38% 62% / 56% 58% 42% 44%' },
          '66%':      { borderRadius: '38% 62% 55% 45% / 48% 40% 60% 52%' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-4deg) translateY(0)' },
          '50%':      { transform: 'rotate(4deg) translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
