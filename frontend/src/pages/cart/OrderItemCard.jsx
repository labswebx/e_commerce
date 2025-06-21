// components/orders/OrderItemCard.js
import React from "react";
import { formatPrice } from "../../utils/formatter";
import { Link } from "react-router-dom";

const OrderItemCard = ({
  name,
  quantity,
  price,
  image,
  totalPrice,
  productId,
}) => {

  return (
    <div className="flex items-center p-3 transition-colors border border-gray-100 rounded-lg hover:bg-gray-50">
      {/* Product Image */}
      <div className="flex-shrink-0 w-16 h-16 overflow-hidden border border-gray-200 rounded-md">
        <img
          src={
            Array.isArray(image)
              ? image[0]?.url || "/logo-icon.jpg"
              : typeof image === "string"
              ? image
              : image?.url || "/logo-icon.jpg"
          }
          alt={name}
          className="object-cover w-full h-full"
          onError={(e) => {
            e.target.src = "/fallback.jpg";
          }}
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-1 min-w-0 ml-4">
        {productId ? (
          <Link
            to={`/product/${productId}`}
            className="font-medium text-gray-800 hover:text-blue-600 line-clamp-1"
          >
            {name}
          </Link>
        ) : (
          <h3 className="font-medium text-gray-800 line-clamp-1">{name}</h3>
        )}
        <p className="text-sm text-gray-500">Qty: {quantity}</p>
      </div>

      {/* Price Info */}
      <div className="ml-4 text-right">
        <p className="font-medium text-gray-800">{formatPrice(totalPrice)}</p>
        {quantity > 1 && (
          <p className="text-xs text-gray-500">{formatPrice(price)} each</p>
        )}
      </div>
    </div>
  );
};

export default OrderItemCard;
