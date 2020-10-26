module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accents: "#D060FD"
      }
    }
  },
  variants: {},
  plugins: []
};
