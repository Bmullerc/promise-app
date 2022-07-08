/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'boxed': '12px 12px 0 0px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}
