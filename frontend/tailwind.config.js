// tailwind.config.js
import theme from "./src/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' for system preference
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
        accent: {
          purple: theme.COLORS.accentPurple,
          orange: theme.COLORS.orange,
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
        sans: [theme.TYPOGRAPHY.fontFamily.primary, "sans-serif"],
        display: [theme.TYPOGRAPHY.fontFamily.secondary, "sans-serif"],
        mono: [theme.TYPOGRAPHY.fontFamily.monospace, "monospace"],
      },
      fontSize: theme.TYPOGRAPHY.fontSize,
      fontWeight: theme.TYPOGRAPHY.fontWeight,
      lineHeight: theme.TYPOGRAPHY.lineHeight,
      letterSpacing: theme.TYPOGRAPHY.letterSpacing,
      opacity: theme.OPACITY,
      boxShadow: theme.BOX_SHADOW,
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
