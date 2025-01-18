/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          violet: "hsl(257, 40%, 49%)",
          softMagenta: "hsl(300, 69%, 71%)",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        "bottom-darkBlue": "0 10px 15px hsla(0, 0%, 0%, 0.25)",
      },
    },
  },
  plugins: [],
};
