/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    `./src/common/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      iMac: '2560px',
    },
    extend: {
      maxWidth: {
        iMac: '2000px',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: ['trajan probold', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        gold: '#D4B77C',
        softBlack: '#2C2B2A',
      },
    },
  },
  plugins: [],
};
