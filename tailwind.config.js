module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'gryffindor-red': '#740001',
        'hufflepuff-yellow': '#FFDB00',
        'ravenclaw-blue': '#0E1A40',
        'slytherin-green': '#2A623D',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
