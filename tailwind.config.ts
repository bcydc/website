import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
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
        notion: {
          dark: "#2A2E30",
        },
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};

export default config;
