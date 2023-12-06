/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary-1": "#4024cd",
        "color-primary-2": "#7752fe",
        "dark-grey": "#918581",
        "light-grey": "#f9f5f3",
        "color-light-3": "#d3c7c3",
        "color-blue-1": "#1778f2",
      },
      minHeight: {
        "height-ratio": "calc(100vh - 2 * 4vw)",
      },
    },
  },
  plugins: [],
};
