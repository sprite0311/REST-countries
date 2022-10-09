/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/countryList.jsx",
    "./src/countryInfo.jsx",
    "./src/countrySearch.jsx",
    "./src/countryCard.jsx",
  ],
  theme: {
    extend: {
      colors: {
        "dElements": "hsl(209, 23%, 22%)",
        "dBg": "hsl(207, 26%, 17%)",
        "dText": "hsl(0, 0%, 100%)",
        "lElements": "hsl(0, 0%, 100%)",
        "lBg": "hsl(0, 0%, 98%)",
        "lText": "hsl(200, 15%, 8%)",
        "lInput": "hsl(0, 0%, 52%)"
      }
    },
  },
  plugins: [],
}
