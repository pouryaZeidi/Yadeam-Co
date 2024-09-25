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
      boxShadow: {
        smallShadow: 'rgba(67, 71, 85, 0.3) 0px 0px 0.25em, rgba(90, 125, 188, 0.2) 0px 0.25em 1em'
      }
    },
  },
  plugins: [],
};
export default config;
