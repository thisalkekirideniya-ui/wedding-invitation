/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        weddingMaroon: "#800000",
        weddingGold: "#D4AF37",
        weddingCream: "#FFFDF5",
      },
      fontFamily: {
        cursive: ["'Great Vibes'", "cursive"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}