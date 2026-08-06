/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
   extend: {
  colors: {
    bluishZinc: {
      50: '#f0f4f9',
      100: '#e1e9f2',
      200: '#c9d4e4',
      300: '#a7b9d1',
      400: '#869fbc',
      500: '#6986a7',  
      600: '#526b88',
      700: '#3b4e66',
      800: '#263243',
      900: '#161c25',
    },
  },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
