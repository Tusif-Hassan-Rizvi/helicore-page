/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#1B1B1B',
        'golden': '#DAA520',
        'dark-section': '#000000',
        'cream-primary': '#F7EED9',
        'cream-secondary': '#FAF4E6',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg, #C18C2C 0%, #FCF38A 50.52%, #C18C2C 100%)',
      },
      fontFamily: {
        abhaya: ['"Abhaya Libre"', 'serif'],
        work: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
