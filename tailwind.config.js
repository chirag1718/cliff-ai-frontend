// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{html,jsx, js}"],
  important: "#root",
  theme: {
    extend: {},
    screens: {
      xs: { min: "100px", max: "700px" },
      md: { min: "701px", max: "1200px" },
      // => @media (min-width: 330px and max-width: 630px) { ... }
    },
  },
  plugins: [],
}