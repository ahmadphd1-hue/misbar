import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown': {
          dark: '#3E2723',
          light: '#5D4037',
          accent: '#D7CCC8',
        },
      },
    },
  },
  plugins: [],
};
export default config;