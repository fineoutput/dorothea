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
        primary: {
          light: "#E8E6E0",
          dark: "#E8E6E0",
          default: "#E8E6E0",
        },
        secondary: {
          light: "#7F1328",
          dark: "#251121", // Using the darker color from the gradient
          default: "#2D3F59",
        },
        gold: "#A89269",
        customGray: "#6B7280",
        customGreen: "#10B981",
        customYellow: "#FBBF24",
        white: "#ffffff",
        black: "#000000",
        grey: "#181818",
        red: {
          default: "#D82B23",
          light: "#E73235",
          dark: "#DC2F32",
        },
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(to right, #7F1328 5%, rgb(37, 17, 33) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
