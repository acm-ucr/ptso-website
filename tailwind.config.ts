/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ptso: {
          "white-100": "#FFF4F4",
          "blue-100": "#DAEDFE",
          "blue-200": "#B6CDE4",
          "blue-300": "#80AED9",
          "blue-400": "#151539",
          "purple-100": "#4545A4",
          "purple-200": "#7676CC",
          "pink-100": "#D092AA",
          "pink-200": "#B06985",
          "pink-300": "#A85173",
        },
        fontFamily: {
          be_vietnam_pro: "--beVietnamPro-font)",
          quicksand: "--quicksand-font",
        },
      },
    },
  },
  plugins: [],
};
