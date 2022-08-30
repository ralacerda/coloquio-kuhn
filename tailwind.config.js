/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
let plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["src/**/*.html", "src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "4rem",
        xl: "8rem",
        "2xl": "12rem",
      },
    },
    extend: {
      backgroundImage: {
        hero: "url('img/hero/hero_new.png')",
      },
      colors: {
        green: "#3797a4",
        hover: "#24626b",
        "kuhn-white": "#F8F9FA",
        blue: "#004172",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
    plugins: [
      plugin(function ({ addVariant }) {
        addVariant("childs", "&>*");
      }),
    ],
  },
};
