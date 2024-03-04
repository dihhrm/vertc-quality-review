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
      light: "#c9c9c9",
    },
  },
  plugins: [],
} satisfies Config;
