/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background color using CSS variables
        foreground: "var(--foreground)", // Custom foreground color using CSS variables
      },
     
    },
  },
  plugins: [],
};
