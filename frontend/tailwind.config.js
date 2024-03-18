/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      clarityCity: ['Clarity City', 'sans-serif']
    },
    // container: {
    //   // default breakpoints but with 40px removed
    //   screens: {
    //     sm: '600px',
    //     md: '728px',
    //     lg: '984px',
    //     xl: '1240px',
    //     '2xl': '1496px'
    //   }
    // },
    extend: {}
  },
  plugins: []
}
