module.exports = {
  purge: ['./src/**/*.{js,mdx,jsx,tsx}', './next.config.js'],

  theme: {
    extend: {
      colors: {
        primary: {
          // orange
          50: '#FFF5E5',
          100: '#FFEBCC',
          200: '#FFD699',
          300: '#FFC266',
          400: '#FFAD33',
          500: '#FF9900',
          600: '#CC7A00',
          700: '#995C00',
          800: '#663D00',
          900: '#331F00',
        },
        secondary: {
          // navy blue
          50: '#FFFFFF',
          100: '#EEF3F9',
          200: '#C8D7EC',
          300: '#A2BCDF',
          400: '#7DA0D1',
          500: '#5785C4',
          600: '#3C6BAC',
          700: '#2F5486',
          800: '#223C60',
          900: '#15253A',
        },
      },
    },
  },
};
