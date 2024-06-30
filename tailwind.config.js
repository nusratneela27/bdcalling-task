/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor1: '#e1f5fe',
        customColor2: '#fafafa',
      },
    },
  },
  plugins: [],
}
