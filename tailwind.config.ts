import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: '#0C87F2',
        primary2: '#22A2F2',
        primary3: '#72E5F2',
        white: '#F2F2F2',
        black: '#0D0D0D',
      },
    },
  },
  plugins: [],
};
export default config;
