import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ed1b23",
        secondary: "#303393",
        accent: "#00a64b",
        dark: "#1a1a1a",
        warm: {
          brown: "#8B4513",
          sienna: "#D2691E",
          tan: "#CD853F",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
        script: ["Dancing Script", "cursive"],
      },
      fontSize: {
        "hero": "clamp(2.5rem, 5vw, 4rem)",
        "h1": "clamp(2rem, 4vw, 3rem)",
        "h2": "clamp(1.5rem, 3vw, 2rem)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-in-out",
        "slide-down": "slideDown 0.5s ease-in-out",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-warm": "linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #CD853F 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
