const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      stone: colors.stone,
      gray: colors.gray,
      zinc: colors.zinc,
      teal: colors.teal,
      cyan: colors.cyan,
      indigo: colors.indigo,
      violet: colors.violet,
      pink: colors.pink,
    },
    extend: {
      height: {
        parallaxLG: "500px",
      },
      spacing: {
        "25%": "25%",
        "35%": "35%",
        "75%": "75%",
        "90%": "90%",
      },
      fontFamily: {
        body: ["Lato"],
        title: ["Merriweather"],
      },
      boxShadow: {
        worksImagesLeft:
          "-7px -7px 0 -3px #1f2937, -7px -7px #9decf9, -14px -14px 0 -3px #1f2937, -14px -14px #ed64a6",
        worksImagesRight:
          "7px -7px 0 -3px #1f2937, 7px -7px #9decf9, 14px -14px 0 -3px #1f2937, 14px -14px #ed64a6",
        quotes: "3px 3px #67e8f9, 6px 6px #1f2937, 9px 9px #ed64a6",
        quotesHover: "5px 5px #ed64a6, 10px 10px #1f2937, 15px 15px #67e8f9",
      },
      backgroundImage: {
        intro: "url('/src/imgs/mountain2.jpg')",
      },
      backgroundPosition: {
        "bottom-18": "center top -18rem",
      },
    },
  },
  variants: {
    extend: {
      blur: ["hover"],
      display: ["group-hover"],
    },
  },
  plugins: [],
};
