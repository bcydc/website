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
        g: {
          300: "#39D353",
          500: "#26A641",
          700: "#006D32",
          800: "#0E4429",
        },
        dark: {
          700: "#161B22",
          900: "#0E1116",
        },
      },
    },
  },
  plugins: [],
};
export default config;
