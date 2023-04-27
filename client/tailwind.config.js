/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.jsx",
    "./src/**/components/*.jsx",
    "./src/**/pages/*.jsx"
    
  ],
  theme: {
    extend: {
      backgroundColor :{
        'light': '#181818'

      },
      height: {
        '700' : '700px'
      }
    },
  },
  plugins: [],
}

