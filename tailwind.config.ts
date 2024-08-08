import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        thesignature: ["var(--font-thesignature)"],
        unbounded: ["var(--font-unbounded)"],
        albertsans: ["var(--font-albertsans)"],
      },
    },
  },
  plugins: [],
};
export default config;
