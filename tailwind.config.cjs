/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/img/hero_bg.jpg')",
        "header-dark": "url('/img/hero_bg-dark.jpg')",
      },
    },
  },
  plugins: [],
};
