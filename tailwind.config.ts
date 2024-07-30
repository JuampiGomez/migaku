import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary-gradient-orange": "#ff9345",
        "primary-gradient-red": "#fe4670",
        "card-purple": "#472589",
        "button-purple": "#672fc3",
        "primary-gradient-bluegreen": "#43ECA9",
        "primary-gradient-lima": "#BEF214",
        "primary-gradient-softblue": "#1596E6",
        "primary-gradinet-lightblue": "#0ACEDE",
        "migaku-purple": "#6730C3",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        bounceY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        bounceY: "bounceY 2.5s infinite",
      },
      fontFamily: {
        GTMaru: ["var(--font-gt)"],
        GTMaruBlack: ["var(--font-gt-black)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
