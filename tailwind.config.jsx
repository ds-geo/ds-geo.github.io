/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          londrina: ['var(--font-londrina)'],
          combo: ['var(--font-combo)'],
          patrick: ['var(--font-patrick)'],
        },
      },
    },
    plugins: [],
  };
 