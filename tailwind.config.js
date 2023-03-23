/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        blue: '#27187E',
        lightBlue: '#758BFD',
        lighterBlue: '#AEB8FE',
        lightGray: '#F1F2F6',
        yellow: '#ECD444',
        darkBlue: '#150d44'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
