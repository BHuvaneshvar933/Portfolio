/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'neon-glow': {
          '0%': {
            filter: 'drop-shadow(0 0 2px currentColor) drop-shadow(0 0 4px currentColor)',
          },
          '100%': {
            filter: 'drop-shadow(0 0 6px currentColor) drop-shadow(0 0 10px currentColor)',
          },
        },
      },
      animation: {
        'neon-glow': 'neon-glow 1.5s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}