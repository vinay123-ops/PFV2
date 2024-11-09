/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hibiscus': {
          '50': '#fcf3f8',
          '100': '#fbe8f3',
          '200': '#f8d2e7',
          '300': '#f4add3',
          '400': '#ed79b4',
          '500': '#e35197',
          '600': '#cc2e72',
          '700': '#b4225d',
          '800': '#951f4c',
          '900': '#7d1e43',
          '950': '#4c0b24',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

