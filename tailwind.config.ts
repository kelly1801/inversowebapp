import type { Config } from "tailwindcss";

interface ExtendedConfig extends Config {
  safelist?: Array<string | { pattern: RegExp }>;
}

const config:  ExtendedConfig = {
  //darkMode: "class", // Changed to string literal if you're using class-based dark mode
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
        green: {
          10: "#38ffb6",
          600: "#31c895",
          700: "#32bb8d",
        },
        blue: {
          400: "#84b7cc",
          500: "#4e9cc3",
          600: "#2f72c0",
          700: "#222dbd",
        },
        purple: {
          400: "#a69fcb",
          500: "#ab94ca",
          600: "#947fcc",
          700: "#4e2db2",
          800: "#362a5c"
        },
        light: {
          200: "#f2f2f2",
        },
        dark: {
          200: "#0c0c0c",
        },
      },
      backgroundImage: {
        appointments: "url('/assets/images/appointments-bg.png')",
        pending: "url('/assets/images/pending-bg.png')",
        cancelled: "url('/assets/images/cancelled-bg.png')",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  safelist: [
    { pattern: /^lg:w-\[.*%\]$/ }
  ],
  plugins: [
    // require("tailwindcss-animate"), // Uncomment if using
  ],
} satisfies Config;

export default config;