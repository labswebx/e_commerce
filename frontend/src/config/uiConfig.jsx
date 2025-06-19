import theme from "../theme";

export const INPUT = {
  borderColor: theme.COLORS.gray[750],
  borderWidth: "0.5px",
  borderStyle: "solid",
  borderRadius: "7px",
  backgroundColor: theme.COLORS.white,
  paddingLeft: "16px",
  paddingRight: "16px",
  paddingTop: "16px",
  paddingBottom: "16px",
  outline: "none",
  fontSize: "14px",
  lineHeight: "20px",
  color: theme.COLORS.charcoal,
};

const INPUT_PLACEHOLDER = {
  fontFamily: "SF Pro Display",
  fontSize: "14px",
  lineHeight: "24px",
  letterSpacing: "-0.5%",
  opacity: "100%",
};
export const INPUT_LABEL = {
  fontFamily: "SF Pro Display",
  fontSize: "14px",
  lineHeight: "16px",
  letterSpacing: "0%",
  opacity: "100%",
  fontWeight: "medium",
  color: "#545454",
};

const BUTTON = {
  alignItems: "center",
  paddingX: "56px",
  paddingY: "16px",
  borderRadius: "6px",
  gap: "8px",
  // if bg fill
  bgColor: "#000",
  // if border
  borderColor: "#fff",
  weight: "1px",
};
export const CATEGORY_CARD = {
  paddingX: "52px",
  paddingY: "24px",
  borderRadius: "15px",
  bgColor: "#ededed",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  fontWeight: "500", 
  fontSize: "16px", 
  fontFamily: "sfpro",
  fontColor: "#000", 
  iconsSize: "48px",
  iconColor: "#000",
};

const TABS = {
  width: "98px",
  height: "48px",
  paddingX: "24px",
  paddingY: "16px",
  borderRadius: "8px",
  flex: "row",
  gap: "8px",
  alignItems: "center",
  borderColor: "#000",
  borderWeight: "1px",
  font: {
    lineHeight: "16px",
    letterSpacing: "0",
    fontFamily: "SF Pro Display",
    fontWeight: "medium",
    alignItems: "center",
    color: {
      active: "#000",
      disabled: "#d5d5d5",
      inactive: "#6f6f6f",
    },
  },
};
