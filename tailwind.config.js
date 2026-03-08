/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts,js,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Base
        background: "#0f0f11",
        surface: "#18181b",
        "surface-highlight": "#27272a",
        primary: "#f3f4f6",
        secondary: "#a1a1aa",
        accent: "#3b82f6",

        // Dark palette (extras)
        "primary-amber": "#f59e0b",
        "background-dark": "#0f172a",
        "card-dark": "#1e293b",
        "sidebar-dark": "#111827",
        "glass-dark": "rgba(30, 41, 59, 0.7)",
        "deep-charcoal": "#121212",
        "dark-surface": "#18181b",
        "dark-border": "#27272a",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      boxShadow: {
        glow: "0 0 40px -10px rgba(255, 255, 255, 0.05)",
        "glow-border":
          "0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.05)",
        "card-hover": "0 20px 40px -10px rgba(0, 0, 0, 0.5)",
      },

      borderRadius: {
        DEFAULT: "0.5rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
