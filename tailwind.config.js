/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        conversly_color: {
          DEFAULT: "#014A41",
          light: "#C1E5D7",
          lighthover:"#b2dfcd",
          defaulthover: "#01342D",
          blush: "#E5D6C4",
          blushhover: "#deccb5",
          snow: "#F9F8F2",
          snowhover: "#f1efe1",
        },
      },
      fontFamily: {
        title: ['Limelight', 'regular'],
        body: ['Bellota Text', 'regular'],
        boldBody: ['Bellota Text', 'bold'],
      }
    },
  },
  plugins: [],
  
}
