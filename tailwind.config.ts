/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a2332',
        'cyan-accent': '#00d9ff',
      },
    },
  },
  plugins: [],
  // Tilføj denne for bedre hot reload
  future: {
    hoverOnlyWhenSupported: true,
  },
}