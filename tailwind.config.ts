import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./layout/**/*.{ts,tsx,mdx}",
    "./sections/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",
    },

    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          sm: "12px",
          md: "40px",
          xl: "32px",
        },
      },
      fontFamily: {
        sagoeUI: ["'Segoe UI'", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        accent: "#FFC12F",
        secondAccent: "#FCC647",
        titleColor: "#3C3C3C",
        backgroundColor: "#FFFBF3",
        btnHover: "#e5ad2a",
      },
      fontSize: {
        xs: [
          "14px",
          {
            lineHeight: "1.3",
            fontWeight: "400",
          },
        ],
        "3xl": [
          "32px",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
