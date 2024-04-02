/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#345ff6",
        "dark-blue": "#253347",
        "dark-electric-blue": "#5E6E85",
        "borders": "#d8e2e7",
      }
    },
  },
  plugins: [],
}