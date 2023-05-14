/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        reddit_dark: {
          DEFAULT: "#030303",
          brighter: "#1a1a1a",
          brightest: "#272728",
        },
        reddit_border: {
          DEFAUT: "#343536",
        },
        reddit_text: {
          DEFAULT: "rgb(215,218,220)",
          darker: "#818384",
        },
      },
    },
  },
  plugins: [],
};
