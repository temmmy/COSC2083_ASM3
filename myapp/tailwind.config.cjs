/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'body': '#151410',
        'selected-text': "#62B6B7",
        'theme': "#97DECE",
        'nav': "#404053",
        "secondary": "#9191A4",
        "badge": "#3F3F51",
        "input-border": "#565666",
        "input": "#2A2A35"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
