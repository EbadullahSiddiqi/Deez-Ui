/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // if using app directory
    './pages/**/*.{js,ts,jsx,tsx}', // if using pages directory
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff4328',
        secondary: '#1c1b1b',
      },
    },
  },
  plugins: [],
};
