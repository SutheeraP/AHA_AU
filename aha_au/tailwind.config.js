/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

      },
    },
    colors: {
      ...colors,
      primary: "#1BB76C",
      faded: "#ADB7BE",
      darklight: {
        400: "#15191B",
        200: "#15191B90",
      },
      secondary: {
        400: "#121212",
        200: "#12121280",
      },
    },
  },
  plugins: [],
}
