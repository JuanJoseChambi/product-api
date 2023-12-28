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
      textColor:{
        "greenCode":"#4cff8f",
        "grayCode":"#abb2bf",
        "pinkCode":"#ff79c6",
        "orangeCode":"#f08d49",
      }
    },
  },
  plugins: [],
}

