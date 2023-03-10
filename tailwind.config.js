/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
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
          '0%' : { left: '-100%' },
          '100%' : { left: '0' }
        },
        vertMarquee : {
          '0%' : { top: '-100%' },
          '100%' : { top: '0' }
        },
        appear : {
          '0%' : { opacity : '0' },
          '100%' : { opacity : '50' }
        }
      },
      animation: {
        infScroll : 'marquee 10s linear infinite',
        infVertScroll : 'vertMarquee 5s linear infinite',
        appear : 'appear 2s'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
