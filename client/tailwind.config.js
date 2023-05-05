/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.jsx",
    "./src/**/components/*.jsx",
    "./src/**/pages/*.jsx",
    "./src/**/pages/**/Auth/*.jsx",
    "./src/**/components/**/Buttons/*.jsx",
    "./src/**/components/**/Cards/*.jsx",
    "./src/**/components/**/DetailComponents/*.jsx",
    "./src/**/components/**/Fixed/*.jsx",
    "./src/**/components/**/Logo/*.jsx",
    "./src/**/components/**/Popups  /*.jsx",
    "./src/**/components/**/Skeletons/*.jsx",
    "./src/**/components/**/Sliders/*.jsx",
    "./src/**/components/**/Popups/*.jsx",

    
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : ['Foldit']
      },
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
      maxWidth : {
        '5xl': '1024px'
      },
      width : {
        '200' : '200px',
        "400" : '400px'
      },
      maxHeight : {
        '3xl' : '800px'
      },
    
      
      
    },
  },
  plugins: [],
}

