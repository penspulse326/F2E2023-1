/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/partials/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: "#F2B4AE",
          mid: "#F29188",
          light: `#FDF4F3`,
        },
        brown: {
          DEFAULT: "#F2DCC9",
          light: "#FBF5EF",
        },
        black: {
          DEFAULT: "#414141",
          mid: "rgba(65, 65, 65, 0.9)",
          light: "rgba(65, 65, 65, 0.05)",
        },
        gray: {
          DEFAULT: "#959292",
          light: "#D9D9D9",
        },
        slate: {
          DEFAULT: "#64748B",
          light: "#CBD5E1",
        },
      },
      backgroundImage: {
        circle: "url(../src/images/bg-circle.svg)",
        dots: "url(../src/images/bg-dots.svg)",
        "dots-r": "url(../src/images/bg-dots-reverse.svg)",
        "dots-r-sm": "url(../src/images/bg-dots-reverse-sm.svg)",
        paws: "url(../src/images/bg-paws.svg)",
        "paws-sm": "url(../src/images/bg-paws-sm.svg)",
      },
    },
    fontFamily: {
      sans: ["Noto Sans TC", "sans-serif"],
    },
  },
  plugins: [],
};
