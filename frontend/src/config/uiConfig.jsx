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
  // gap if more than one content
  gap: "8px",
  // if bg fill
  bgColor: "#000",
  // if border
  borderColor: "#fff",
  weight: "1px",
};
const NAVBAR = {};
const SUBNAVBAR = {};
const ICON_WRAPPER = {
  size: 56,
  padding: 16,
  // bg: COLOR.lightGray,
  // iconColor: COLOR.white,
};
// const HEADER = {
//   height: {
//     top: 80, // Top header section height
//     subnav: 48, // Subnav (category tabs)
//     desktop: 128, // Combined top + subnav
//     mobile: 64,
//   },
//   padding: {
//     horizontal: SPACING.xl,
//     vertical: SPACING.md,
//   },
//   // bg: COLOR.white,
//   logoSize: ICON_SIZE.lg,
//   mobileMenuIconSize: ICON_SIZE.md,
// };
// const MENU_LINK = {
//   active: NAVBAR.activeLink,
//   inactive: NAVBAR.inactiveLink,
//   spacing: SPACING.lg,
//   fontSize: TYPOGRAPHY.size.base,
//   fontWeight: TYPOGRAPHY.weight.medium,
// };
// const SUBNAV_TAB = {
//   bgColor: "#2e2e2e",
//   paddingX: "160px",
//   paddingY: "8px",
//   gap: "auto",
//   flexDirection: "row",
//   Tabs: {
//     gap: "8px",
//     alignItems: "left",
//     icon: {
//       iconSize: "24px",
//       opacity: "50%",
//       iconColor: "#fff",
//     },
//     font: {
//       opacity: "50%",
//       color: "#fff",
//       fontFamily: "SF Pro Display",
//       fontWeight: "medium",
//       fontSize: "16px",
//       lineHeight: "32px",
//       letterSpacing: "0%",
//     },
//     Divider: {
//       opacity: "20%",
//       color: "#fff",
//       weight: "1px",
//       position: "center",
//     },
//   },
// };
// const MOBILE_HEADER = {
//   height: HEADER.height.mobile,
//   // bg: COLOR.white,
//   menuIcon: {
//     size: HEADER.mobileMenuIconSize,
//     color: NAVBAR.icon,
//   },
// };
// const SEARCH_INPUT = {
//   iconSize: "24px",
//   iconColor: "#989898",
//   textColor: "#656565",
//   textOpacity: "50%",
//   fontFamily: "SF Pro Display",
//   lineHeight: "18px",
//   letterSpacing: "0",
//   inputBgColor: "#f5f5f5",
//   borderRadius: "8px",
//   BgOpacity: "100",
//   paddingX: "16px",
//   paddingY: "16px",
//   dispay: flex,
//   flexDirection: "row",
//   gap: "8px",
//   alignment: "middler center",
//   width: "100%", // For responsive
//   maxWidth: 480,
// };
// const ICON_BUTTON = {
//   size: ICON_WRAPPER.size,
//   padding: ICON_WRAPPER.padding,
//   iconColor: NAVBAR.icon,
//   // hoverBg: COLOR.gray100,
// };
// const HEADER_NAV = {
//   layout: "horizontal",
//   spacing: SPACING.lg,
//   alignItems: "center",
//   paddingX: "160px",
//   paddingY: "16px",
// };
// const HEADER_NAV_TEXT = {
//   fontFamily: "SF Pro Display",
//   fontWeight: "medium",
//   activeOpacity: "100%",
//   lineHeight: "auto",
//   fontSize: "16px",
//   inactiveOpacity: "30%",
// };

export const CATEGORY_CARD = {
  paddingX: "52px",
  paddingY: "24px",
  borderRadius: "15px",
  bgColor: "#ededed",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  fontWeight: "500", // Tailwind uses numeric weights, medium = 500
  fontSize: "16px", // text-md (usually 16px)
  fontFamily: "sfpro", // your custom font family key in tailwind.config.js
  fontColor: "#000", // black / primary color
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
