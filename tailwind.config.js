/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c98c07",
        primaryDark: "#F6B21D",
        primaryBackground: "#FFFFFF",
        secondaryBackground: "#faf8f1",
        tertiaryBackground: "#ecd29b",
        primaryDarkBackground: "#000000",
        secondaryDarkBackground: "#141414",
        tertiaryDarkBackground: "#404142",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
