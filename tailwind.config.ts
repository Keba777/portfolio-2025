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

        secondaryBlack: "#161B22",

        lightGray: "#C0C0C0",
        mutedBlue: "#24292E",

        softRed: "#FF4A4A",

        darkGray: "#6E6E6E",
        mediumGray: "#8A8A8A",
        softGray: "#D9D9D9",
        deepGray: "#4F4F4F",
      },
    },
  },
  plugins: [],
} satisfies Config;
