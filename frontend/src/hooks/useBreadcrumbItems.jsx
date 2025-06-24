// hooks/useBreadcrumbItems.ts
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export default function useBreadcrumbItems({
  lookupList = [],
  basePath = null,
  matchKey = "_id",
  displayKey = "name",
  pathLabelMap = {},
} = {}) {
  const location = useLocation();
  const pathname = basePath || location.pathname;

  return useMemo(() => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbItems = [{ label: "Home", href: "/" }];

    pathSegments.forEach((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      const previousSegment = index > 0 ? pathSegments[index - 1] : null;

      let label = segment;

      // Check if we should use a mapped label first
      if (pathLabelMap[segment]) {
        label = pathLabelMap[segment];
      }
      // For address ID segments (when previous segment is "address")
      else if (previousSegment === "address" && matchKey === "_id") {
        const matchedAddress = lookupList.find((item) => {
          return item[matchKey] === segment;
        });
        label = matchedAddress?.[displayKey] || "Address";
      }
      // For other dynamic segments
      else {
        const matchedItem = lookupList.find((item) => {
          return item[matchKey] === segment;
        });
        label = matchedItem?.[displayKey] || segment;
      }

      breadcrumbItems.push({ label, href });
    });

    return breadcrumbItems;
  }, [pathname, lookupList, matchKey, displayKey, pathLabelMap]);
}
