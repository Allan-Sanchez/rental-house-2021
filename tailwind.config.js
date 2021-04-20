module.exports = {
  // purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "pink-primary": {
          50: "#fdf4f7",
          100: "#fce9ef",
          200: "#f7c8d7",
          300: "#f2a6bf",
          400: "#e8648e",
          500: "#de215e",
          600: "#c81e55",
          700: "#a71947",
          800: "#851438",
          900: "#6d102e",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
