/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(0, 147, 69)', // Base green
        'primary-light': 'rgb(0, 167, 79)', // Lighter green
        'primary-dark': 'rgb(0, 127, 59)', // Darker green
        secondary: 'rgb(147, 0, 69)', // Complementary red
        'secondary-light': 'rgb(167, 0, 79)', // Lighter red
        'secondary-dark': 'rgb(127, 0, 59)', // Darker red
        accent: 'rgb(147, 147, 0)', // Complementary yellow
        'accent-light': 'rgb(167, 167, 0)', // Lighter yellow
        'accent-dark': 'rgb(127, 127, 0)', // Darker yellow
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} 