// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['var(--font-anton)', 'sans-serif'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
