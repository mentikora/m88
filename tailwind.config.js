/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./views/*.pug"],
  theme: {
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
