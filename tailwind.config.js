/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        'xs' : '300px',
        'xsm' : '500px',
        'xlg' : '900px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
