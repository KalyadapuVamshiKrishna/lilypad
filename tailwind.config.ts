import type { Config } from "tailwindcss";
import { COLORS } from "./src/lib/design-tokens";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: COLORS.primary,
        accent: COLORS.accent,
        dark: COLORS.dark,
        surface: COLORS.surface,
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        floating: "0 25px 70px rgba(15, 23, 42, 0.12)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 20% 20%, rgba(219,39,119,0.18), transparent 35%), radial-gradient(circle at 80% 0%, rgba(139,92,246,0.16), transparent 30%)",
      },
    },
  },
  plugins: [],
};

export default config;

