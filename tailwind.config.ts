import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        g: {
          "100": "#c1e5c9",
          "200": "#84cb93",
          "300": "#5BBA6F",
          "500": "#3FA34D",
          "700": "#2A9134",
          "800": "#15623e",
          "900": "#125636",
        },
        w: {
          "300": "#EEEEEE",
          "500": "#DDDDDD",
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
