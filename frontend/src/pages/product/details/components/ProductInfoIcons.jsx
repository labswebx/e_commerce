import React from "react";
import { Truck, Store, ShieldCheck } from "lucide-react";

const ProductInfoIcons = ({ product }) => {
  const deliveryEstimate = product.stock > 0 ? "1–2 days" : "5–7 days";
  const inStockText = product.stock > 0 ? "Today" : "Out of stock";
  const warranty = "1 year";

  const infoItems = [
    {
      icon: <Truck size={28} />,
      label: "Free Delivery",
      value: deliveryEstimate,
    },
    {
      icon: <Store size={28} />,
      label: "In Stock",
      value: inStockText,
    },
    {
      icon: <ShieldCheck size={28} />,
      label: "Guaranteed",
      value: warranty,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 px-2 py-4 text-center rounded-lg sm:grid-cols-3">
      {infoItems.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="p-3 mb-1 text-[#797979]" color="#797979">
            {item.icon}
          </div>
          <div className="text-sm text-[#7E7E7E]">{item.label}</div>
          <div className="font-semibold text-md">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductInfoIcons;
