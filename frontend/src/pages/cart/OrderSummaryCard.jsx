import Card from "../../components/ui/Card";
import { useCart } from "../../features/cart/cartHooks";
import { formatPrice } from "../../utils/formatter";

const OrderSummaryCard = () => {
  const {
    items,
    addToCart,
    removeFromCart,
    deleteFromCart,
    shippingMethod,
    subtotal,
    tax,
    shipping,
    total,
    selectedAddress,
  } = useCart();

  const handleIncrement = (item) => addToCart(item);
  const handleDecrement = (item) =>
    item.quantity <= 1 ? deleteFromCart(item._id) : removeFromCart(item._id);
  const handleRemove = (id) => deleteFromCart(id);

  return (
    <div className="w-full max-w-[40rem] p-6 space-y-4 bg-white border rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold">Summary</h2>

      <div className="space-y-4 max-h-[400px] overflow-y-auto">
        <Card
          type="cartItem"
          data={items}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onRemove={handleRemove}
        />
      </div>

      <div>
        <h4 className="mb-1 text-sm text-gray-500">Address</h4>
        <p className="text-sm">
          {selectedAddress?.address || "No address selected"}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <h4 className="text-sm text-gray-500">Shipment Method:</h4>
        <p className="text-sm font-medium">
          {shippingMethod || "Not selected"}
        </p>
        {items.length > 0 && (
          <span className="text-sm text-gray-600">{formatPrice(shipping)}</span>
        )}
      </div>

      <div className="pt-4 space-y-2 text-sm border-t">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax</span>
          <span>{formatPrice(tax)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping & Handling</span>
          <span>{formatPrice(items.length > 0 ? shipping : 0)}</span>
        </div>
        <div className="flex justify-between pt-2 text-base font-semibold border-t">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
