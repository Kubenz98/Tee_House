/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'desktop-xl': '1200px',
    },
    extend: {
      maxWidth: {
        '1/2': '280px',
        '1': '560px'
      },
      scale: {
        '102': '1.02'
      }
    },
  },
  plugins: [],
};
