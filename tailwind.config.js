/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    'app-container': '100vh',
    'slider-component': '50vh',
    'spline-component': '50vh',
    extend: {
      colors: {
        roseImaginatio: '#F241D5',
        blueImaginatio: {
          light:'#5852f2',
          dark:'#5207f2'
        },
        purpleImaginatio: '#3e2f73',
        orangeImaginatio: '#f27b13' 


      }
    },
  },
  plugins: [],
}