import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#DCE9F7',
          light: '#EFF5FD',
          dark: '#C4D6EC',
        },
        charcoal: {
          DEFAULT: '#1A3260',
          light: '#2B4D86',
          muted: '#6680A8',
        },
        silver: '#8aaec7',
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
