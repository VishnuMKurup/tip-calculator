/** @type {import('tailwindcss').Config} */
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  important: true,
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'Arial', 'Roboto', 'sans-serif', 'Helvetica'],
    },
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'tablet': '960px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      colors: {
        primary: {
          DEFAULT: '#0751A8', // Primary Default
          '50': '#ecfaff',
          '100': '#E6EEF6',
          '200': '#b1e9ff',
          '300': '#7cdeff',
          '400': '#3fc8ff',
          '500': '#13a7ff',
          '600': '#0086ff',
          '700': '#006eff',
          '800': '#0058ce',
          '900': '#0751a8',
          '950': '#0a2f61',
        },
        secondary: '#2ecc71', // Secondary
        neutral: {
          medium: '#5E6667', // Text Secondary
          DEFAULT: '#2B2F2F', // Text Primary
          light: '#858D8D', // Text Tertiary
        },
        red: {
          ...colors.red,
          DEFAULT: '#AC062A',
        },
        green: {
          ...colors.green,
          DEFAULT: '#06A878',
        },
        gray: {
          DEFAULT: '#F7F8F8', // Background
          '500': '#F0F1F1', // Container Background
          '600': '#DDE0E0', // Divider
          '700': '#D0D3D3', // Outline
        }
      }
    },
  },
  plugins: [],
};
