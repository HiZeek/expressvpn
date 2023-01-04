/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#001d2f',
        greenColor: '#0f866c',
        footerBottom: '#001827',
        footerText: '#ccd2d5',
        yellowColor: '#d4e300',
        lightGreenColor: '#f9f8f2',
        boxShadowColor: '0 0.2rem 1.5rem rgb(0 0 0 / 10%)',
        back: 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
