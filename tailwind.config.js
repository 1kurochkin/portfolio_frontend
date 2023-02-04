/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        primary: 'white',
        secondary: 'rgb(42 230 16)',
        background: 'rgb(9 7 58)'
      }
    },
  },
  plugins: [],
}
