import { useLocation } from "react-router-dom";
import { useMemo } from "react";

/**
 * A reusable hook to generate breadcrumb items from a path.
 * @param {Array} lookupList - Optional array of items to resolve segment names (e.g., categories).
 * @param {string} basePath - Optional path string to override useLocation (useful for reuse).
 * @param {string} matchKey - Key to match in lookupList (default is "_id").
 * @param {string} displayKey - Key to display in breadcrumb (default is "name").
 * @returns {Array} - Breadcrumb items: [{ label, href }]
 */
export default function useBreadcrumbItems({
  lookupList = [],
  basePath = null,
  matchKey = "_id",
  displayKey = "name",
} = {}) {
  const location = useLocation();
  const pathname = basePath || location.pathname;
  return useMemo(() => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbItems = [{ label: "Home", href: "/" }];

    pathSegments.forEach((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");

      const matchedItem =
        lookupList.find((item) => item[matchKey] === segment)?.[displayKey] ||
        segment.charAt(0).toUpperCase() + segment.slice(1);

      breadcrumbItems.push({ label: matchedItem, href });
    });

    return breadcrumbItems;
  }, [pathname, lookupList, matchKey, displayKey]);
}

// How it works:
//  Parse URL into individual path segments
// e.g., /categories/123 → ["categories", "123"]

//  Create base breadcrumb
// Starts with Home → /

//  Generate breadcrumb links from segments
// Each segment becomes a breadcrumb with a valid link

//  Replace segment with readable name (if matched)
// e.g., "123" → "Mobiles" using lookupList (like categories list)

//  Return breadcrumb array for UI display
// e.g., [{ label: "Home" }, { label: "Categories" }, { label: "Mobiles" }]
