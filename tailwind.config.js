const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      slate: colors.slate,
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
  plugins: [],
};
