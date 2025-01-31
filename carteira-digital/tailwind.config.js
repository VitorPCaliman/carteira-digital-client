/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#01fd40',
          text: '#555555',
          secondary: '#1e7259',
          grayBg: '#EEEEEE',
          graySecondaryBg: '#F1F3F6',
        },
      },
    },
    plugins: [],
  }