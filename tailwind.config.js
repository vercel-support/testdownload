/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ac_color: {
          DEFAULT: "#2D2532",
          light: "#8D7C86",
          purple:"#4F3763",
          gold: "#BFAD8F",
          lightgold: "#B8AF97",
          dark: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ['var(--font-mulish)'],
        serif: ['var(--font-roboto-serif)'],
      }
    },
  },
  plugins: [],
  
}
