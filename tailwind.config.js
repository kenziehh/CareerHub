/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          lg: "5rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: ["Inter"],
      colors: {
        primaryBlue: "#2758BF",
        secBlue: "#D4E1F9",
        darkBlue: "#1E2833;",
        primaryGray: "#666",
        secGray: "rgba(102, 102, 102, 0.60)",
      },
    },
  },
  plugins: [],
};
