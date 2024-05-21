/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('./src/assets/background.svg')",
      },
    },
  },
  plugins: [],
}

