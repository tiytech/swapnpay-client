/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#002F46',
        "primary-light": '#00ABFF',
      }
    },
  },
  plugins: [],
}
