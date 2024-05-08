/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      usm:'360px',
      sm2:'390px',
      msm:'430px'
    },
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
        orangeImaginatio: '#230221' 
      }
    },
  },
  plugins: [],
}