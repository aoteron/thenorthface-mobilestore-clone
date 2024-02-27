/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
        tertiary: '#898989',
        purchase: '#AA0000',
      },
      fontSize: {
        'x12': '1.2rem',
        'x14': '1.4rem',
        'x16': '1.6rem',
        'x18': '1.8rem',
      },},
  },
  plugins: [],
}