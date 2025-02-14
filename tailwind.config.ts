import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "#FFFFFF",
        accent: "#FF6B4A",

        accentLight: "#FF846A",
        accentDark: "#E0553C",

        lightGray: "#C0C0C0",
        mutedBlue: "#24292E",

        softRed: "#FF4A4A",
      },
    },
  },
  plugins: [],
} satisfies Config;
