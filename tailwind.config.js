/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral-dark': '#121212',
        'whte': '#f5f7fa',
        'neutral-white': '#ffffff',
        'bg': '#f5f7fa',
        'white': '#ffffff',
        'primary-colour': '#a259ff',
        'caption-and-label-text': '#858584',
        'text': '#ffffff',
        'background': '#2b2b2b',
      }
    }
  },
  plugins: [],
} 