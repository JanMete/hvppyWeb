/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hvppyGreen: 'rgb(26, 196, 51)',
        hvppyPurple: 'rgb(104, 33, 164)',
        hvppyYellow: 'rgb(255, 184, 0)',
      },
      backgroundImage: {
        hero: "url('./src/assets/hero.jpg')",
      },
      transformOrigin: {
        'left-center': 'left center',
      },
      width: {
        1.5: '2.9rem',
      },
    },
  },
  plugins: [],
};
