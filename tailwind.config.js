/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
