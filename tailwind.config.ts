import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      "2xl": { max: "1419px" },
      // => @media (max-width: 1419px) { ... }
      xl: { max: "1179px" },
      // => @media (max-width: 1179px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "480px" },
      // => @media (max-width: 480px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "dark-brown": "#1F1A14",
        "light-brown": "#403629",
        sand: "#EBD4B8",
        cream: "#BFB09C",
        white: "#FEFEFE",
        dark: "#1F1A14",
        lite: "#FFFFFF",
        status: {
          danger: "#F44336",
          dangerDark: "#EF9A9A",
          warning: "#ffc107",
          warningDark: "#fff3cd",
          success: "#155724",
          successDark: "#d4edda",
          info: "#004085",
          infoDark: "#cce5ff",
        },
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      fontFamily: {
        sans: ["var(--font-karla)", ...fontFamily.sans],
        inter: "var(--font-inter)",
      },
      fontSize: {
        0: ["0px", "0px"],
        xl: ["1.125rem", "2rem"],
        "2xl": ["1.5rem", "2.5rem"],
        "3xl": ["1.75rem", "2.5rem"],
        "4xl": ["2.5rem", "3rem"],
        "5xl": ["3rem", "3.5rem"],
        "6xl": ["4rem", "4.5rem"],
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        3: "0.1875rem",
        6: "0.375rem",
      },
      borderRadius: {
        lg: "12px",
        full: "9999px",
      },
      opacity: {
        15: ".15",
        46: ".46",
        20: ".20",
      },
      keyframes: {
        loaderDots: {
          "0%": { opacity: "1" },
          "50%,100%": { opacity: "0.15" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({
        html: {
          "@apply text-[1rem]": {},
        },
        body: {
          "@apply bg-dark text-[1rem] leading-6 -tracking-[.01em] text-lite antialiased":
            {},
        },
      });
      addComponents({
        ".title1": {
          "@apply text-[1.75rem] font-semibold": {},
        },
        ".title2": {
          "@apply text-[1.25rem] font-semibold": {},
        },
        ".body1": {
          "@apply text-[1rem]": {},
        },
        ".body2": {
          "@apply text-[0.875rem]": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
export default config;
