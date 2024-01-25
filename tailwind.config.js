/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {

      backgroundImage: {
        'gradient-radial-1': 'radial-gradient(96% 96% at 70.4% 31.2%, #838FFF 0%, rgba(227, 230, 255, 0) 100%, #030092)  ',
        'gradiant-2': 'background: radial-gradient(96% 96% at 70.4% 31.2%, #3244E8 0%, rgba(0, 2, 16, 0) 100%), #030092;',
      },
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
      colors: {
        ghostwhite: '#eef0fa',
        steelblue: '#5a5a89',
        snow: '#fff',
        'night-blue1': '#383874',
        gray: '#171725',
        'electric-green': '#00b929',
        black: '#000',
        lightslategray: '#8484a0',
        darkslateblue: '#5756b3',
        orange: '#ffa63f',
        'fervent-pink': '#ff708b',
        'purple-heart': '#8676ff',
        lavender: '#dbdff1',
      },
      fontFamily: {
        'body-body-2': 'Roboto',
        'headline-h5': 'Poppins',
        archivo: 'Archivo',
      },
      borderRadius: { small: '10px', base: '100px' },
    },

  },
  corePlugins: { preflight: false },
};
