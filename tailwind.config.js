/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    animation: {
      fadeIn: 'fadeIn 1s ease-in-out',
      slideUp: 'slideUp 0.8s ease-out',
      bounceIn: 'bounceIn 0.6s ease-out',
    },
    keyframes: {
      fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      bounceIn: { '0%': { transform: 'scale(0.3)', opacity: '0' }, '50%': { transform: 'scale(1.05)', opacity: '1' }, '100%': { transform: 'scale(1)' } },
    },
  },
},
  plugins: [],
}