/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F2B4AE",
          light: `rgba(242, 180, 174, 0.15)`,
        },
        brown: {
          DEFAULT: "#F2DCC9",
          light: "#FBF5EF",
        },
        lightPink: "#F29188",
        black: {
          DEFAULT: "#414141",
          light: "rgba(65, 65, 65, 0.05)",
        },
        midGray: "#959292",
        lightGray: "#D9D9D9",
      },
      backgroundImage: {
        circle: "url(../images/bg-circle.svg)",
        dots: "url(../images/bg-dots.svg)",
        "dots-r": "url(../images/bg-dots-reverse.svg)",
        paws: "url(../images/bg-paws.svg)",
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
