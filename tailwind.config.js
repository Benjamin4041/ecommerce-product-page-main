/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "kumbh": "'Kumbh Sans', sans-serif;",
      },
      colors: {
        transparentBlack: "rgba(0, 0, 0, 0.5)",
      }
    },
  },
  plugins: [],
};
