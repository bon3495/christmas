/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(210, 80%, 54%)',
        secondary: 'hsl(210, 80%, 50%)',
        titleColor: 'hsl(210, 24%, 90%)',
        whiteColor: '#ffffff',
        textColor: 'hsl(210, 16%, 70%)',
        bodyColor: 'hsl(210, 32%, 4%)',
      },
      screens: {
        ssm: '400px',
        sm: '480px',
        md: '640px',
        '2md': '768px',
        lg: '1024px',
        '2lg': '1220px',
        xl: '1366px',
        '2xl': '1620px',
      },
      fontFamily: {
        poppin: ['Poppins', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      keyframes: {
        snowOne: {
          '0%, 100%': { transform: 'scale(0.5)' },
          '50%': { transform: 'scale(1)' },
        },
        snowTwo: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.5)' },
        },
      },
      animation: {
        animationSnow1: 'snowOne 5s infinite ease-in-out',
        animationSnow2: 'snowTwo 5s infinite ease-in-out',
      },
      backgroundImage: {
        gradient1:
          'linear-gradient(180deg, hsl(210, 88%, 20%),hsl(210, 70%, 58%));',
      },
      boxShadow: {
        shadow1: '0 8px 32px hsla(210, 80%, 54%, 0.7)',
      },
    },
  },
  plugins: [],
};
