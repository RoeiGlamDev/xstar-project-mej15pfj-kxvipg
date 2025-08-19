import { Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class', // Enable dark mode
  theme: {
    colors: {
      pink: {
        light: '#ff7f7f', // Light pink for accents
        DEFAULT: '#ff0055', // Primary pink color
        dark: '#b3003d', // Dark pink for hover states
      },
      black: {
        DEFAULT: '#000000', // Primary black color
        light: '#1a1a1a', // Light black for backgrounds
      },
      white: '#ffffff', // White for contrast text
    },
    extend: {
      // Custom animations for luxury feel
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        zoomIn: 'zoomIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {
      // Additional variants for hover states
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
}
export default config;