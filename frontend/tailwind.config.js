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
    screens: {
      xs: '100%',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px'
    },
    container: {
      center: true,
      padding: '1rem',
      maxWidth: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px'
      }
    },
    extend: {
      colors: {
        midnight: '#181a20',
        f7f7f7: '#f7f7f7',
        fff: '#fff',
        orangePrimary: '#eb6753'
      }
    }
  },
  plugins: []
}
