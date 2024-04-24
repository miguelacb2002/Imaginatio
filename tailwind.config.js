/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        neonRave:['NeonRave']
      },
      colors: {
        roseImaginatio: {
          light:'#E55D9B',
          dark:'#BF82A3'
        },
        blueImaginatio: {
          light:'#5852f2',
          dark:'#5207f2'
        },
        purpleImaginatio: '#664797',
        orangeImaginatio: '#F9AA19' 


      }
    },
  },
  plugins: [],
}