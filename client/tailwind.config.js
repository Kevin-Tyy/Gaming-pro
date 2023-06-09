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
    "./src/**/components/**/User/*.jsx",
    "./src/**/components/**/PostFeed/*.jsx",

    
  ],
  theme: {
    extend: {

      backgroundColor :{
        'light': '#111',
        'dark': '#111'
        

      },
      height: {
        '700' : '700px',
        '40vh': '40vh',
        '2': '1px'
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
      },
      minHeight : {
        '300' : '300px'
      },
      padding : {
        '2px' : '2px'
      }
    
      
      
    },
  },
  plugins: [],
}

