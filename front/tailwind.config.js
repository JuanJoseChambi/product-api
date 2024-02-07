/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Poppins": ['Poppins', "sans-serif"]
      },
      backgroundColor: {
        "primaryColorViolet":"#AA3EFF"
      },
      textColor:{
        "primaryColorViolet":"#AA3EFF",

        "greenCode":"#4cff8f",
        "grayCode":"#abb2bf",
        "pinkCode":"#ff79c6",
        "orangeCode":"#f08d49",
        "blueCode":"#66d9ef",
      },
      borderColor:{
        "primaryColorViolet":"#AA3EFF"
      },
      screens:{
        "mdl":"1215px"
      }
    },
  },
  plugins: [],
}

