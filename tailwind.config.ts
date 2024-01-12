import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "hsl(var(--primary))",
      background: "hsl(var(--background))",
      black: "hsl(var(--black))",
      white: "hsl(var(--white))",
    },
    extend: {
      fontWeight: {
        thin: "var(--font-thin)",
        normal: "var(--font-normal)",

        bold: "var(--font-bold)",
      },
    },
  },
  plugins: [],
};
export default config;
