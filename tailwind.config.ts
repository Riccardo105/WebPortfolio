import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        "custom-pearl": "#F9F8F8",
        'custom-grey': "#1B1B1B",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
} satisfies Config;
