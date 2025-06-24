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

  // Debug: Log all input parameters
  console.groupCollapsed("[useBreadcrumbItems] Input Parameters");
  console.log("lookupList:", lookupList);
  console.log("basePath:", basePath);
  console.log("Current pathname:", location.pathname);
  console.log("Using pathname:", pathname);
  console.log("matchKey:", matchKey);
  console.log("displayKey:", displayKey);
  console.log("pathLabelMap:", pathLabelMap);
  console.groupEnd();

  return useMemo(() => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbItems = [{ label: "Home", href: "/" }];

    console.groupCollapsed("[useBreadcrumbItems] Processing Segments");
    console.log("Path segments:", pathSegments);

    pathSegments.forEach((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      const previousSegment = index > 0 ? pathSegments[index - 1] : null;

      console.group(`Segment ${index}: "${segment}"`);
      console.log("Full href:", href);
      console.log("Previous segment:", previousSegment);

      let label = segment;

      // Check if we should use a mapped label first
      if (pathLabelMap[segment]) {
        label = pathLabelMap[segment];
        console.log("Using pathLabelMap:", pathLabelMap[segment]);
      }
      // For address ID segments (when previous segment is "address")
      else if (previousSegment === "address" && matchKey === "_id") {
        console.log("Looking for address with ID:", segment);
        const matchedAddress = lookupList.find((item) => {
          console.log(`Checking item ${item[matchKey]} against ${segment}`);
          return item[matchKey] === segment;
        });
        label = matchedAddress?.[displayKey] || "Address";
        console.log("Matched address:", matchedAddress);
        console.log("Resolved label:", label);
      }
      // For other dynamic segments
      else {
        console.log("Looking for generic match with key:", matchKey);
        const matchedItem = lookupList.find((item) => {
          console.log(`Checking item ${item[matchKey]} against ${segment}`);
          return item[matchKey] === segment;
        });
        label = matchedItem?.[displayKey] || segment;
        console.log("Matched item:", matchedItem);
        console.log("Resolved label:", label);
      }

      breadcrumbItems.push({ label, href });
      console.log("Final label:", label);
      console.groupEnd();
    });

    console.log("Generated breadcrumbItems:", breadcrumbItems);
    console.groupEnd();

    return breadcrumbItems;
  }, [pathname, lookupList, matchKey, displayKey, pathLabelMap]);
}
