/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {   fontFamily: {
        sans: ['Mulish', 'sans-serif'],

      },
      colors: {
        pink: {

          900: '#FF2E65',
        },
      },
    },


  },

  plugins: [],
}
