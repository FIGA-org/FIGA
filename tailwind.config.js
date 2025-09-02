// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1) Make sure every place you keep TSX is scanned
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",       // <- if you have a src/ folder
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
    },
  },

  // 2) Safelist any “arbitrary” utilities we rely on for the navbar/menu
  safelist: [
    "z-[2147483647]", "z-[9999]", "z-[10000]", "z-[9998]", "z-[9997]",
    "scale-y-100", "scale-y-95", "origin-top",
    "bg-[#001f3f]",
    "from-blue-700/30", "via-blue-500/10", "to-red-400/30",
    "backdrop-blur-md", "backdrop-saturate-150",
    // if you use gradient-on-hover classes anywhere, list them too
  ],

  // 3) Small QoL: only show :hover styles on devices that support hover
  future: { hoverOnlyWhenSupported: true },

  plugins: [],
};

  