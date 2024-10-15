import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  darkMode: 'class', 

  theme: {
    extend: {
      colors: {
        primary1: '#83B2DF',
        primary2: '#22A2F2',
        primary3: '#72E5F2',
        white: '#F2F2F2',
        black: '#0D0D0D',
      },
      boxShadow: {
        smallShadow: 'rgba(67, 71, 85, 0.3) 0px 0px 0.25em, rgba(90, 125, 188, 0.2) 0px 0.25em 1em',
        circleShadow: 'rgba(67, 71, 85, 0.7) 0px 0px 0.25em, rgba(90, 125, 188, 0.2) 0px 0.45em 1em',
        navshadow:' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;'
      }
    },
  },
  plugins: [],
};

export default config;
