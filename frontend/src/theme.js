// theme
const COLORS = {
  white: "#FFFFFF", // background color
  black: "#000000",

  gray: {
    100: "#F2F2F2", // Very light
    200: "#E0E0E0", // Light background
    300: "#C6C6C6", // Card borders
    400: "#AFAFAF", // Placeholder
    450: "#9C9C9C", // Secondary text
    500: "#8A8A8A", // Muted text
    550: "#787878", // Tertiary emphasis
    600: "#666666", // Body text
    650: "#555555", // Active text
    700: "#444444", // Strong headings
    750: "#333333", // UI dark border
    800: "#222222", // Strong background
    850: "#1A1A1A", // Overlay / drawer
    900: "#121212", // Modal / dark mode bg
    950: "#0A0A0A", // True black-like
  },
  offWhite: "#FAFAFA",
  lightGray: "#F6F6F6",
  softGray: "#F5F5F5",
  darkGray1: "#656565",
  darkGray2: "#545454",
  charcoalGray: "#414141",
  charcoal: "#2C2C2C",
  deepCharcoal: "#222222",
  darkCharcoal: "#2E2E2E",
  almostBlack: "#191919",
  deepBlackBrown: "#181313",
  mediumGray: "#797979",
  midGray: "#B5B5B5",
  bluishGray: "#D1D1D8",
  purplishGray: "#A2A3B1",

  accentPurple: "#9747FF",
  deepIndigo: "#080341",
  darkIndigo: "#17183B",

  softOrange: "#FFB547",

  orange: "#F9A000",
  brightOrange: "#FF5E00",

  // Status Colors
  success: {
    light: "#C8E6C9",
    main: "#4CAF50",
    dark: "#2E7D32",
    contrast: "#28A745",
  },
  error: {
    light: "#FFCDD2",
    main: "#F44336",
    dark: "#C62828",
    contrast: "#FF4C4C",
  },
  warning: {
    light: "#FFF9C4",
    main: "#FFEB3B",
    dark: "#FBC02D",
    contrast: "#FFD600",
  },

  info: {
    light: "#BBDEFB",
    main: "#2196F3",
    dark: "#1976D2",
    contrast: "#0D47A1",
  },
};

//  padding and margin
const SPACING = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "40px",
  // 56px
  // 160px
  // 52px
};
const SIZE = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "40px",
  xxxl: "48px",
};

const BORDER = {
  width: {
    none: "0px",
    thin: "1px",
    medium: "2px",
    thick: "4px",
    extraThick: "6px",
  },
  radius: {
    none: "0px",
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    ff: "15px",
    fd: "7px",
  },
  style: {
    solid: "solid",
    dashed: "dashed",
    dotted: "dotted",
    double: "double",
  },
};

const WEIGHT = {
  base: "0.5",
  sm: "1px",
  md: "",
  lg: "",
};
const OPACITY = {
  10: "10%",
  20: "20%",
  30: "30%",
  40: "40%",
  50: "50%",
  60: "60%",
  70: "70%",
  80: "80%",
  90: "90%",
  100: "100%",
};
const TYPOGRAPHY = {
  fontFamily: {
    sfpro: ['"SF Pro Display"', "ui-sans-serif", "system-ui", "sans-serif"],
    primary: "'Inter', sans-serif",
    secondary: "'Roboto', sans-serif",
    monospace: "'Courier New', monospace",
  },
  fontSize: {
    xs: "10px",
    sm: "12px",
    base: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "24px",
    heading: "32px",
    display: "48px",
  },
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    regular: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
    extraBold: "800",
  },
  lineHeight: {
    tight: "1.2",
    normal: "1.5",
    relaxed: "1.75",
  },

  letterSpacing: {
    normal: "0",
    wide: "0.05em",
    wider: "0.1em",
  },
};

export const ICON_SIZE = {
  xs: 16,
  sm: 24,
  sd: 28,
  md: 32,
  lg: 40,
  xl: 48,
  xxl: 56,
};
export const BOX_SHADOW = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  none: "none",
  subtleGlow: "0 0 8px 2px rgba(150, 150, 255, 0.2)",
  strongGlow: "0 0 15px 4px rgba(120, 120, 255, 0.4)",
};
const SCREEN = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};
const theme = {
  COLORS,
  SPACING,
  TYPOGRAPHY,
  ICON_SIZE,
  WEIGHT,
  SIZE,
  OPACITY,
  BORDER,
  BOX_SHADOW,
  SCREEN,
};

export default theme;

export const BUTTON_THEME = {
  sizes: {
    sm: "text-sm py-2 px-4",
    md: "text-base py-3 px-6",
    lg: "text-lg py-4 px-8",
  },
  variants: {
    filled: {
      base: {
        styles: "bg-black text-white border border-transparent",
        iconColor: "#FFFFFF",
      },
      hover: {
        styles: "hover:opacity-90",
        iconColor: "#FFFFFF", // Same as base or different if needed
      },
      disabled: {
        styles: "bg-black opacity-20 text-white cursor-not-allowed",
        iconColor: "#FFFFFF80", // 50% opacity
      },
    },
    outline: {
      base: {
        styles: "bg-transparent text-black border border-black",
        iconColor: "#000000",
      },
      hover: {
        styles: "hover:bg-black hover:text-white",
        iconColor: "#FFFFFF", // Changes on hover
      },
      disabled: {
        styles:
          "bg-white opacity-40 text-black border border-black cursor-not-allowed",
        iconColor: "#00000066", // 40% opacity
      },
    },
    ghost: {
      base: {
        styles: "bg-transparent text-black border border-transparent",
        iconColor: "#0f0f0f",
      },
      hover: {
        styles: "hover:bg-black hover:text-white",
        iconColor: "#FFFFFF",
      },
      disabled: {
        styles: "opacity-30 text-black cursor-not-allowed",
        iconColor: "#0f0f0f4D",
      },
    },
  },
};

// used in category
export const bgColors = [
  "bg-[#E6EFE4]",
  "bg-[#E6EFE4]",
  "bg-[#ECE4EF]",
  "bg-[#EFE4E4]",
];
export const INPUT_THEME = {
  base: {
    borderColor: COLORS.gray[750],
    borderWidth: "0.5px",
    borderStyle: "solid",
    borderRadius: "7px",
    backgroundColor: COLORS.white,
    outline: "none",
    fontSize: "14px",
    lineHeight: "20px",
    color: COLORS.charcoal,
    fontFamily: "SF Pro Display",
  },
  label: {
    fontFamily: "SF Pro Display",
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: 500,
    color: COLORS.gray[750],
  },
  button: {
    backgroundColor: COLORS.black,
    color: COLORS.white,
    paddingX: "24px",
    paddingY: "10px",
    borderRadius: "6px",
    fontWeight: 500,
    fontFamily: "SF Pro Display",
  },
};

export const TOAST_THEME = {
  borderRadius: "8px",
  padding: "8px 10px",
  fontWeight: 500,
  minWidth: "240px",
  border: "1px solid",
  display: "flex",
  alignItems: "center",
};
