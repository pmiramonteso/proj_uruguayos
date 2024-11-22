/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,scss}',
  ],
  theme: {
    extend: {
      animation: {
      draw: 'draw 2s ease-out forwards',
    },
    keyframes: {
      draw: {
        '0%': { 'stroke-dashoffset': '300' },
        '100%': { 'stroke-dashoffset': '0' },
      },
  },
},
},
  plugins: [
    require('daisyui')
  ],
}
