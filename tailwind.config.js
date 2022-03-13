// https://play.tailwindcss.com/YelhilBeHb

// helper to get opacity value when using theming from css variables
const withOpacityValue =
  colorValue =>
  ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${colorValue}), ${opacityValue})`
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${colorValue}), var(${opacityVariable}, 1))`
    }
    return `rgb(var(${colorValue}))`
  }

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1920px',
      },

      fontFamily: {
        sans: ['IBM Plex Sans', ...fontFamily.sans],
      },

      colors: {
        primary: withOpacityValue('--primary'),
        'primary-2': withOpacityValue('--primary-2'),
        secondary: withOpacityValue('--secondary'),
        'secondary-2': withOpacityValue('--secondary-2'),
        'border-primary': withOpacityValue('--border-primary'),
      },

      textColor: {
        primary: withOpacityValue('--text-primary'),
        'primary-2': withOpacityValue('--text-primary-2'),
        secondary: withOpacityValue('--text-secondary'),
      },

      screens: {
        sm: '40em',
        // => @media (min-width: 640px) { ... }
        md: '48em',
        // => @media (min-width: 768px) { ... }
        lg: '64em',
        // => @media (min-width: 1024px) { ... }
        xl: '80em',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
}
