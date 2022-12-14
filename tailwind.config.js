/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'boxed': '12px 12px 0 0px rgba(0, 0, 0, 0.3)',
        'boxed-small': '8px 8px 0 0px rgba(0, 0, 0, 0.3)',
        'boxed-very-small': '3px 3px 0 0px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}
