/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Bebas Neue", "sans-serif"],
      },
      aspectRatio: {
        "9/16": "9 / 16",
      },
      colors: {
        primary: "#ED1C24",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
