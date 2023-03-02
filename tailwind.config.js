/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "desktop-xl": "1200px",
      },
      colors: {
        "bg-greyish": "#ececec",
      },
      maxWidth: {
        "1/2": "280px",
        1: "560px",
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [],
};
