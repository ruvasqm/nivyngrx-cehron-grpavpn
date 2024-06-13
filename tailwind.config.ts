import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": {
          "fg": "#FFFFFF",
          "bg": "#7F56D9",
          DEFAULT: "#101828",
        },
        "secondary": {
          "bg": "#FFFFFF",
          "fg": "#344054",
          DEFAULT: "#667085",
        },
        "quaterary": "#667085",
        "placeholder": "#667085",
        "tertiary": {
          DEFAULT: "#475467",
          "bg": "#6941C6",
          "fg": "#475467",
          "brand": "#E9D7FE",
        },
        "utility": {
          "brand": "#6941C6",
        },
        "brand": {
          "section": "#53389E",
        },
      },
    },
    plugins: [],
  }
};

export default config;
