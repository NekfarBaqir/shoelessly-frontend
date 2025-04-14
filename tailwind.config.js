/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C3313E",  // red
        secondary: "#00D2FF", // lightBlue
        wheat: "#FFF5E4",  // wheat
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        apercu: ['var(--font-apercu)'],
        futura: ['var(--font-futura)'],
        'futura-condensed': ['var(--font-futura-condensed)'],
        roboto: ['var(--font-roboto)'],
        verdana: ['var(--font-verdana)'],
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
