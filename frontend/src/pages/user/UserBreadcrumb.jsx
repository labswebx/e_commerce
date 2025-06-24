// components/UserBreadcrumb.tsx
import { useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import useBreadcrumbItems from "../../hooks/useBreadcrumbItems";
import useAddress from "../../features/address/addressHooks";

const UserBreadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const { addresses } = useAddress();
  const pathLabelMap = {
    user: "Account",
    profile: "Profile",
    settings: "Settings",
    address: "Addresses",
    orders: "Orders",
    order: "Order Details",
    track: "Track Order",
  };

  const breadcrumbItems = useBreadcrumbItems({
    lookupList: addresses,
    matchKey: "_id",
    displayKey: "address",
    pathLabelMap,
  });

  return (
    <nav
      className="flex items-center text-sm text-gray-500"
      aria-label="Breadcrumb"
    >
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="w-3 h-3 mx-2 text-gray-400" />}
          {index === breadcrumbItems.length - 1 ? (
            <span className="font-medium text-gray-700">{item.label}</span>
          ) : (
            <a href={item.href} className="hover:text-primary">
              {item.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
};

export default UserBreadcrumb;
