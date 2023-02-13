/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary1": "#00509D",
        "primary2": "#FDC500",
        "secondary1": "#252422",
        "secondary2": "#25A18E",
        "secondary3": "#C32F27",
        "grey": "#E4E4E4",
        "bg_primary": "#FCFCFC",
        "bg_primary2": "#F2F2F2",
      },
      borderStyle: ['hover'],
    },
  },
  plugins: [],
};
