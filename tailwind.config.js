/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,scss}',
  ],
  theme: {
    extend: {
      appearance: ['webkit', 'moz'],
      colors: {
        pastelRed: '#FFADAD',
        pastelOrange: '#FFD6A5',
        pastelYellow: '#FDFFB6',
        pastelGreen: '#CAFFBF',
        pastelBlue: '#A0C4FF',
        pastelIndigo: '#BDB2FF',
        pastelViolet: '#FFC6FF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1920px',
      },
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
    require('daisyui'),
  ],
}
