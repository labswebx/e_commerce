// theme
const COLORS = {
  white: "#FFFFFF", // background color
  black: "#000000",

  gray: {
    100: "#E7E7E7",
    200: "#E4E4E4",
    300: "#D9D9D9",
    400: "#D4D4D4",
    450: "#D3D3D3",
    500: "#CECECE",
    550: "#CFCFCF",
    600: "#AEAEAE",
    650: "#A7A7A7",
    700: "#A4A4A4",
    750: "#9F9F9F",
    800: "#989898",
    850: "#979797",
    900: "#929292",
    950: "#909090",
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
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
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

const ICON_SIZE = {
  xs: 16,
  sm: 24,
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
