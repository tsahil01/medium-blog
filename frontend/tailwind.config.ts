/** @type {import('tailwindcss').Config} */
declare const module: any; // Add this line
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}