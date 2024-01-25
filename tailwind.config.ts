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
          "300": "#39d353",
          "500": "#26a641",
          "700": "#006d32",
          "800": "#0e4429",
        },
        w: {
          "300": "#EEEEEE",
          "500": "#DDDDDD",
        },
      },
    },
  },
  plugins: [],
};
export default config;
