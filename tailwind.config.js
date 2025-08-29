// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          // your default body text
          sans: ["var(--font-sans)", "system-ui", "sans-serif"],
          // for headings / CTAs
          display: ["var(--font-display)", "Georgia", "serif"],
        },
      },
    },
    plugins: [],
  };
  