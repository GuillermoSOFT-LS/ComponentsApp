/** @type {import('tailwindcss').Config} */
const {Colors} = require("./constants/Colors");
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app", "./componenst/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {

        light: {
          primary: Colors.light.primary,
          secundary: Colors.light.secondary,
          tertiary: Colors.light.tertiary,
          background: Colors.light.background,
          textColor: Colors.light.text,
        },

        dark: {
          primary: Colors.dark.primary,
          secundary: Colors.dark.secondary,
          tertiary: Colors.dark.tertiary,
          background: Colors.dark.background,
          textColor: Colors.dark.text,
        }
      }
    },
  },
  plugins: [],
}