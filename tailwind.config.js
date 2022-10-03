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
      },
      keyframes: {
        marquee : {
          '0%' : { left: '0' },
          '100%' : { left: '-100%' }
        },
        appear : {
          '0%' : { opacity : '0' },
          '100%' : { opacity : '50' }
        }
      },
      animation: {
        infScroll : 'marquee 20s linear infinite',
        appear : 'appear 2s'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
