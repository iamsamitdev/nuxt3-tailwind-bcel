/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  mode: "jit",
  content: [
    "./pages/**/*.vue",
    "./layouts/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./components/**/*.{js,vue,ts}",
    "./app.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans Thai", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

