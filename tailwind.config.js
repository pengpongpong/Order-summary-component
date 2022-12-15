/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.html"],
  theme: {
    screens: {
      sm: "400px"
    },
    extend: {
      fontFamily: {
        red_hat_display: ['Red Hat Display', "sans-serif"]
      }
    },
    colors: {
      pale_blue: "hsl(225, 100%, 94%)",
      bright_blue: "hsl(245, 75%, 52%)",
      pale_blue2: "hsl(225, 100%, 98%)",
      desaturated_blue: "hsl(224, 23%, 55%)",
      dark_blue: "hsl(223, 47%, 23%)",
      white: "hsl(0, 0%, 100%)",
      purple: "#581c87",
      light_purple: "#6366F1"
    }
  },
  plugins: [],
}
