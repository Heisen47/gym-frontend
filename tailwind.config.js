
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#2E073F', 
        'secondary': '#7A1CAC', 
        'tertiary': '#AD49E1',
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@mui/material/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}