const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans JP", "system-ui"],
      },
      colors: {
        blue: colors.blueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
