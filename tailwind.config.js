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
        "color-blue-2": "#1060c4",
        facebook: "#3b5998",
        "facebook-1": "#304a80",
        linkdin: "#0a66c2",
        "linkdin-1": "#0858a8",
        pinterest: "#E60023",
        "pinterest-1": "#cc0221",
      },
      minHeight: {
        "height-ratio": "calc(100vh - 2 * 4vw)",
      },
      backgroundImage: {
        "map-image": "url('src/assets/images/map.jpg')",
      },
    },
  },
  plugins: [],
};
