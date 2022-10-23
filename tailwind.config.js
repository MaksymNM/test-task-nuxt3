/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
],
  theme: {
    extend: {
      height: {
        50: "50px",
      },
      width: {
        200: "200px",
      },
      colors: {
        background: "#433b3b",
        orange: "#ff914d",
      }
    },
  },
  plugins: [],
}
