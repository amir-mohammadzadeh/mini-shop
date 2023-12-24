/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-17': 'repeat(auto-fill, minmax(0, 17rem))',
        'auto-14': 'repeat(auto-fill, 14rem)',
      },
      boxShadow: {
        '101': '0 0 10px 1px #00000075',
        '5.2': '0 0 5px 2px #46464640',
      },
      screens:{
        'sm1': "570px"
      }
    },
  },
  plugins: [],
}

