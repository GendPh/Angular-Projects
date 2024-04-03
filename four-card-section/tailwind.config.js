/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-red": "#EA5454",
        "custom-light-blue": "#44D3D2",
        "custom-orange": "#FCAE4A",
        "custom-blue": "#549EF2",
        "custom-gray": "#4D4F62",
        "esta": "#ffffff",
      },
    },
  },
  plugins: [],
}