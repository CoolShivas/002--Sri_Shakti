// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#003366',
//         secondary: '#f5f5f5',
//         accent: '#e63946',
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003366",
        secondary: "#f5f5f5",
        accent: "#e63946",
        "brand-red": "#e63946", // optional alias for accent
        "brand-blue": "#003366", // optional alias for primary
      },
    },
  },
  plugins: [],
};
