import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'radial': '0 0 15px 5px rgba(0, 0, 0, 0.2)',
        'small': '0 0 10px 5px rgba(0, 0, 0, 0.2)',
        'block': '0 0 9px 4px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
