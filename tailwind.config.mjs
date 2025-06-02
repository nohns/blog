import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "terminal-bg": "#1E1E1E",
        "terminal-text": "#D4D4D4",
        "terminal-green": "#32CD32",
        "terminal-amber": "#FFBF00",
        "terminal-cyan": "#00FFFF",
      },
      fontFamily: {
        mono: ["Fira Code", "Consolas", "monospace"],
      },
    },
  },
  plugins: [typography],
};
