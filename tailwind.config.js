/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17231e",
        moss: "#315c45",
        lime: "#c5e36b",
        paper: "#f7f6f2",
        muted: "#737b75",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 55px rgba(23, 35, 30, 0.08)",
      },
    },
  },
  plugins: [],
};
