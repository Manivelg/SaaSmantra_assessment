/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsc,ts,tsx}",
  ],
  theme: {
    extend: {
      height : {
        '82' : '330px',
      },
      width : {
        '95' : '95%',
      },
    },
    color: {
      borcol: "#c6c6c6",
      hborcol: "#a66768",
      btn: "#f2f2f2",
    },
  },
  plugins: [],
}
