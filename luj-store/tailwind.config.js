/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'reg-pattern': 'url("../public/assets/backgrounds/3.jpg")',
        'login-pattern': 'url("../public/assets/backgrounds/1.jpg")',
        'product-pattern': 'url("../public/assets/backgrounds/5.jpg")',
        'contact-bg': 'url("../public/assets/backgrounds/c1.svg")',
        'contactform-bg': 'url("../public/assets/backgrounds/c2.svg")'


      },
      animation: {
        fade: 'fadeOut 1s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.transparent') },
          '100%': { backgroundColor: theme('colors.zinc-50') },
        },
      }),
    },
  },
  plugins: [],
}

