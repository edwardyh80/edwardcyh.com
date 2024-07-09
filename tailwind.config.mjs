/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import colors from "tailwindcss/colors";

const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.slate,
        secondary: colors.sky,
        tertiary: colors.teal,
      },
      grayscale: {
        50: "50%",
      },
    },
  },
  plugins: [typography],
};

export default config;
