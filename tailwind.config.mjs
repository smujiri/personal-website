/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F4EEE4',
          light: '#FAF8F4',
          dark: '#E8E0D4',
        },
        charcoal: {
          DEFAULT: '#141414',
          light: '#252525',
          muted: '#6B6B6B',
        },
        silver: '#B8B4AC',
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
  plugins: [],
};
