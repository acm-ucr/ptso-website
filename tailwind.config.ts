/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ptso: {
          "blue-100": "#DAEDFE",
          "blue-200": "#B6CDE4",
          "purple-100": "#4545A4",
          "purple-200": "#7676CC",
          "pink-100": "#D092AA",
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
