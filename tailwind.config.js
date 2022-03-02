module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'lokalise-red': '#E36A77',
      'lokalise-blue': '#78A4F6',
      'lokalise-blue-primary': '#5489DC',
      'lokalise-gray': '#BBBBBB',
      'lokalise-gray-light': '#F9F9F9',
      'lokalise-content-secondary': '#808080',
      'white': '#ffffff',
    },
    fontFamily: {
      sans: ['roboto'],
      serif: ['roboto'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}