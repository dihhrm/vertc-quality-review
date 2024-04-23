const { mauve, violet, red, blackA } = require("@radix-ui/colors");
import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...mauve,
        ...violet,
        ...red,
        ...blackA,
      },
    },
    keyframes: {
      overlayShow: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      contentShow: {
        from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
        to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
      },
    },
    animation: {
      overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
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
