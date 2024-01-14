/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#040F28",
        primary: "#C4C4C4",
        pink: "#FC3867",
        mediumDark: "#646464",
        lightMedium: "#D8D8D8",
        black: '#070707',
        darkGreey: "#212226"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        selebriSans: ["Cerebri Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
};
