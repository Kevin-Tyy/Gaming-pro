/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.jsx",
    "./src/**/components/*.jsx"
  ],
  theme: {
    extend: {
      backgroundColor :{
        'dark' : '#141414',
        'light': '#181818'

      }
    },
  },
  plugins: [],
}

