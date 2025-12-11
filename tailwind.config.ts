import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <-- tells Tailwind to use 'class' strategy for dark mode
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // all your React/TSX files
    "./app/**/*.{js,ts,jsx,tsx}"   // your app router files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
