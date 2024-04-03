/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular: ['"Pixely Sans"'],
        secondRegular: ['"FutureFont"'],
        thirdRegular: ['"Comfortaa"'],
      },
    },
  },
  plugins: [],
};
