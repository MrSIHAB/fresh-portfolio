import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f111a",
        primary: "#00FFD4",
        accent: "#F48FB1",
        text: "#ECEFF4",
        muted: "#4C566A",
        card: "#1a1c26",
      },
      fontFamily: {
        arimo: "Arimo, sans-serif",
      },
      maxHeight: {
        "36": "9rem",
      },
    },
  },
} satisfies Config;
