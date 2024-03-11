const { mauve, violet } = require("@radix-ui/colors");
import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...mauve,
        ...violet,
      },
    },
    fontFamily: {
      sans: ["Lato", "system-ui", "sans-serif"],
    },
    colors: {
      primary: "#00747a",
      primaryLight: "#e9f0f1",
      extraLight: "#f4f4f4",
      light: "#c9c9c9",
    },
  },
  plugins: [],
} satisfies Config;
