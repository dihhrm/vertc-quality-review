import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Lato", "system-ui", "sans-serif"],
    },
    colors: {
      primary: "#00747a",
      extraLight: "#f4f4f4",
      light: "#c9c9c9",
    },
  },
  plugins: [],
} satisfies Config;
