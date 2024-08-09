import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        thesignature: ["var(--font-thesignature)"],
        unbounded: ["var(--font-unbounded)"],
        albertsans: ["var(--font-albertsans)"],
      },
      colors: {
        border: "rgba(var(--border))",
        ring: "rgba(var(--ring))",
        background: "rgba(var(--background))",
        foreground: "rgba(var(--foreground))",
        primary: {
          DEFAULT: "rgba(var(--primary))",
          foreground: "rgba(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "rgba(var(--secondary))",
          foreground: "rgba(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "rgba(var(--muted))",
          foreground: "rgba(var(--muted-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
