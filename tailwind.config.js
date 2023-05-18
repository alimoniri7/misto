/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-gray": "#121212",
        "dark-gray": "#363636",
        " gray": "#9a9a9a",
        "light-gray": "#E6E6E6",
        "white-gray": "#F8F8F8",
        pink: "#E91E63",
        yellow: "#F0CC84",
        error: "#D61313",
        ok: "#0BB17F",
      },
    },
  },
  plugins: [],
};
