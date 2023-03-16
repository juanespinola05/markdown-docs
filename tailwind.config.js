/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#27187E',
        secondaryBlue: '#758BFD',
        tertiaryBlue: '#AEB8FE',
        lightGray: '#F1F2F6',
        secondaryYellow: '#ECD444'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
