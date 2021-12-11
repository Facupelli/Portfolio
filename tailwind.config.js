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
      spacing: {
        "35%": "35%",
      },
      fontFamily: {
        body: ["Lato"],
        title: ["Merriweather"],
      },
    },
  },
  variants: {
    extend: {
      blur: ['hover'],
      display: ["group-hover"],
    },
  },
  plugins: [],
};
