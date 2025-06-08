// tailwind.config.js
import theme from "./src/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  safelist: [
    "btn",
    "btn-sm",
    "btn-md",
    "btn-lg",
    "btn-filled",
    "btn-filled-hover",
    "btn-filled-disabled",
    "btn-outline",
    "btn-outline-hover",
    "btn-outline-disabled",
    "btn-ghost",
    "btn-ghost-hover",
    "btn-ghost-disabled",
    "btn-rounded",
    "btn-full",
    "animate-pulse",
  ],
  theme: {
    screens: theme.SCREEN,
    extend: {
      colors: {
        primary: theme.COLORS.black,
        black: theme.COLORS.black,
        white: theme.COLORS.white,
        error: theme.COLORS.error,
        gray: theme.COLORS.gray,
        charcoal: theme.COLORS.charcoal,
        softGray: theme.COLORS.softGray,
        accent: {
          purple: theme.COLORS.accentPurple,
          orange: theme.COLORS.orange,
          softOrange: theme.COLORS.softOrange,
        },
        status: {
          success: theme.COLORS.success,
          warning: theme.COLORS.warning,
          info: theme.COLORS.info,
        },
      },
      spacing: {
        ...theme.SPACING,
        ...theme.SIZE,
        13: "52px",
        14: "56px",
        15: "60px",
      },
      borderRadius: {
        ...theme.BORDER.radius,
      },
      borderWidth: theme.BORDER.width,
      borderStyle: theme.BORDER.style,
      fontFamily: {
        sfpro: [theme.TYPOGRAPHY.fontFamily.sfpro],
        sans: [theme.TYPOGRAPHY.fontFamily.primary, "sans-serif"],
        display: [theme.TYPOGRAPHY.fontFamily.secondary, "sans-serif"],
        mono: [theme.TYPOGRAPHY.fontFamily.monospace, "monospace"],
      },
      fontWeight: theme.TYPOGRAPHY.fontWeight,
      lineHeight: theme.TYPOGRAPHY.lineHeight,
      letterSpacing: theme.TYPOGRAPHY.letterSpacing,
      opacity: theme.OPACITY,
      boxShadow: theme.BOX_SHADOW,
    },
    keyframes: {
      "toast-in": {
        "0%": { opacity: "0", transform: "translateX(100%)" },
        "100%": { opacity: "1", transform: "translateX(0)" },
      },
      "toast-out": {
        "0%": { opacity: "1", transform: "translateX(0)" },
        "100%": { opacity: "0", transform: "translateX(100%)" },
      },
      spinReverse: {
        to: { transform: "rotate(-360deg)" },
      },
    },
    animation: {
      "toast-in": "toast-in 300ms ease forwards",
      "toast-out": "toast-out 300ms ease forwards",
      "spin-reverse": "spinReverse 800ms linear infinite",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
