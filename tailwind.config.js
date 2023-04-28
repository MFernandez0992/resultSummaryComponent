/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./dist/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'light-red': "hsl(0, 100%, 67%)",
        'light-red-transparent': "hsla(0, 100%, 67%, 0.1)",
        'orange-yellow': "hsl(39, 100%, 56%)",
        'orange-yellow-transparent': "hsla(39, 100%, 56%, 0.1)",
        'green-teal': "hsl(166, 100%, 37%)",
        'green-teal-transparent': "hsla(166, 100%, 37%, 0.1)",
        'cobalt-blue': "hsl(234, 85%, 45%)",
        'cobalt-blue-transparent': "hsla(234, 85%, 45%, 0.1)",
        'pale-blue': "hsl(221, 100%, 96%)",
        'light-lavender': "hsl(241, 100%, 89%)",
        'dark-grayblue': "hsl(224, 30%, 27%)",
        'light-slate-blue': "(hsla(256, 72%, 46%, 1)",
        'light-royal-blue': "hsla(241, 72%, 46%, 0))",
      },
    },
  },
  plugins: [],
}

