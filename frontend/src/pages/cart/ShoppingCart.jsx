import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import InputField from "../../components/ui/InputField";
import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
} from "../../features/cart/cartSlice";

export default function ShoppingCart({ handleNext }) {
  const dispatch = useDispatch();
  const { subtotal, tax, shipping, total, items, totalQuantity } = useSelector(
    (state) => state.cart
  );

  const handleIncrement = (item) => {
    dispatch(addItemToCart(item._id));
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(deleteItemFromCart(item._id));
    } else {
      dispatch(removeItemFromCart(item._id));
    }
  };

  const handleRemove = (id) => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <div className="min-h-screen px-2 py-4 bg-gray-50 sm:px-4 md:px-6 lg:px-10 xl:px-20">
      <h2 className="mb-6 text-xl font-bold text-gray-800 sm:text-2xl">
        Shopping Cart
      </h2>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Order Summary (mobile first position) */}
        <div className="order-1 xl:col-span-4 xl:order-2">
          <div className="p-4 bg-white rounded-lg shadow-sm sm:p-6 xl:sticky xl:top-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Order Summary
            </h3>

            <InputField
              placeholder="Enter discount or promo code"
              label="Promo Code"
            />
            <InputField
              placeholder="Enter card number"
              label="Bonus Card Number"
            />

            <div className="space-y-1 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal ?? 0}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping ?? 0}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax ?? 0}</span>
              </div>
              <div className="flex justify-between pt-3 mt-3 text-base font-bold border-t">
                <span>Total</span>
                <span>${total ?? 0}</span>
              </div>
            </div>

            <Button
              label="Proceed to Checkout"
              className="w-full mt-3 text-base"
              fullWidth
              onClick={handleNext}
            />
          </div>
        </div>

        {/* Cart Items */}
        <div className="order-2 xl:col-span-8 xl:order-1">
          <div className="p-4 bg-white rounded-lg shadow-sm sm:p-6">
            {items.length ? (
              <div className="max-h-[60vh] overflow-y-auto sm:max-h-none">
                <Card
                  type="cartItem"
                  data={items}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                  onRemove={handleRemove}
                />
              </div>
            ) : (
              <p className="py-10 text-sm text-center text-gray-500">
                Your cart is currently empty.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
