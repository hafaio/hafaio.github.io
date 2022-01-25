const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: { teal: colors.teal },
      fontFamily: { cursive: ["Niconne", "ui-cursive", "cursive"] },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
