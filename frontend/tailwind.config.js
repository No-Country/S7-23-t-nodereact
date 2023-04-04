/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      Manrope: ["manrope", "sans-serif"],
      Kanit: ["kanit", "sans-serif"],
    },
    colors: {
      "primary-color": "#0703D9",
      "color-accent": "#DA3E52",
      text: "#191919",
      "font-text": "#FDFDFD",
      "dark-gray": "#3A3838",
      progress: "#53B830",
      "accent-hover": "#B93243",
      "light-gray": "#F5F5F5",
    },

    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};
