/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.jsx",
    "./src/**/components/*.jsx",
    "./src/**/pages/*.jsx",
    "./src/**/pages/**/Auth/*.jsx"
    
  ],
  theme: {
    extend: {
      backgroundColor :{
        'light': '#181818'

      },
      height: {
        '700' : '700px'
      },
      boxShadow : {
        '5xl' : '0 5px 5px' 
      },
      minWidth : {
        'md' : '500px',
      },
      width : {
        '200' : '200px',
        "400" : '400px'
      },
      maxHeight : {
        '3xl' : '800px'
      }

    },
  },
  plugins: [],
}

