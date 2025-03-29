/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ptso: {
          "blue-primary": "#DAEDFE",
          "blue-secondary": "#B6CDE4",
          "blue-accent": "#80AED9",
          "purple-primary": "#7676CC",
          "purple-secondary": "#4545A4",
          "purple-accent": "#151539",
          "pink-primary": "#D092AA",
          "pink-secondary": "#B06985",
          "pink-accent": "#A85173",
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
