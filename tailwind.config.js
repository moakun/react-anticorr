/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      phone: '320px',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        tinos: ['Times New Roman'],
      },
    },
  },
  plugins: [],
});
