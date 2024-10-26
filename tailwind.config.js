/** @type {import('tailwindcss').Config} */

const { withAnimations } = require('animated-tailwindcss');

module.exports = withAnimations({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light mode variables
        background: "var(--bg-light)",
        text: "var(--text-light)",
        // Dark mode variables
        darkBackground: "var(--bg-dark)",
        darkText: "var(--text-dark)",
      },
    },
  },
});
