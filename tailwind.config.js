import colors from "tailwindcss/colors";

export default {
  mode: "jit",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
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
