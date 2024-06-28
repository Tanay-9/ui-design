/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : 'rgba(220, 74, 45, 1)',
        secondary : 'rgba(61, 61, 61, 1)',
        tertiary  : 'rgba(136, 136, 136, 1)',
        dot : 'rgba(23, 178, 106, 1)',
        bor : 'rgba(6, 118, 71, 1)'
        
      },
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(217, 217, 217, 0.1)',
        sidebar : '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}