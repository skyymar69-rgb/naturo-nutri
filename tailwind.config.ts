import type { Config } from 'tailwindcss';

const config: Config = {
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
          50: '#f4f8f4',
          100: '#e3eee5',
          200: '#c7ddcb',
          300: '#9cc2a4',
          400: '#6ba075',
          500: '#4a8456',
          600: '#386944',
          700: '#2d5438',
          800: '#264430',
          900: '#1a5c2a',
          950: '#0f2818',
        },
        sage: {
          50: '#f5f8f3',
          100: '#e8efe4',
          200: '#d1dec9',
          300: '#aec4a3',
          400: '#7bc47f',
          500: '#5fa564',
          600: '#48854c',
          700: '#3a6a3e',
          800: '#305534',
          900: '#28462c',
        },
        earth: {
          50: '#fbf6f0',
          100: '#f4e8d8',
          200: '#e8cfae',
          300: '#daad7c',
          400: '#cd8e54',
          500: '#c4722a',
          600: '#a85e23',
          700: '#894920',
          800: '#6f3c20',
          900: '#5b321d',
        },
        cream: {
          DEFAULT: '#f7f3e8',
          50: '#fdfcf7',
          100: '#f7f3e8',
          200: '#ede5cc',
          300: '#ddd0a3',
        },
        sanguin: '#c0392b',
        bilieux: '#d4ac0d',
        nerveux: '#2980b9',
        lymphatique: '#16a085',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            color: '#264430',
            a: { color: '#1a5c2a', textDecoration: 'underline' },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
