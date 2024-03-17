/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#150B2B',
        'dark-70': '#150B2BB2',
        'dark-60': '#150B2B99',
        'dark-06': '#878787',
        'dark-02': '#282828',
        'dark-08': '#282828CC',
        'dark-07': '#282828B2',
        'color-success': '#0BE58A'
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}
