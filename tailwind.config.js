/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2B4AE",
        secondary: "#F2DCC9",
        lightPink: "#F29188",
        gray: "#DFE4EA",
        black: "#414141",
        lightGray: "#D9D9D9",
      },
    },
    maxWidth: {
      "grid-lg": "1360px",
      "grid-md": "736px",
    },
    fontFamily: {
      sans: ["Noto Sans TC", "sans-serif"],
    },
  },
  plugins: [],
};
