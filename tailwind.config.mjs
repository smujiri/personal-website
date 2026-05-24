import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#EEE9E1',
          light: '#F9F7F4',
          dark: '#E2DDD6',
        },
        charcoal: {
          DEFAULT: '#1C1A17',
          light: '#2D2B28',
          muted: '#8A8278',
        },
        silver: '#B0AA9F',
        gold: {
          DEFAULT: '#c9a84c',
          light: '#d4b96a',
        },
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [typography],
};
