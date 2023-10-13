/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blueIshColor': '#2a68ff',
        'greyIsh': '#f1f4f7', 
        'cardShadow': '#f7f8f8', 
        'textColor': '#252b36',
      }
    },
  },
  plugins: [],
}

//Go to https://tailwindcss.com/docs/guides/vite

//Terminal:
//npm install -D tailwindcss postcss autoprefixer
//npx tailwindcss init -p

//Add the current tailwind.config.js configuration inside of content
//add colors:{'blueColor': '#2a68ff', 'greyIsh': '#f1f4f8', 'cardShadow': '#f7f8f9', 'textColor': '#252b36',}