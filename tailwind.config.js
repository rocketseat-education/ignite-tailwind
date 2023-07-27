/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      maxWidth: {
        app: '700px'
      },

      colors: {
        diego: '#333'
      }
    },
  },
  plugins: [],
}
