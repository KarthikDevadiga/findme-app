/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary-1": "#4024cd",
        "color-primary-2": "#7752fe",
      },
      minHeight: {
        "height-ratio": "calc(100vh - 2 * 4vw)",
      },
    },
  },
  plugins: [],
};
