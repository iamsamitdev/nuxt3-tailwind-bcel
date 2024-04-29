/** @type {import('tailwindcss').Config} */
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
    extend: {},
  },
  plugins: [],
}

