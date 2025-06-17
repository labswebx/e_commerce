import { useState } from "react";
import { useSelector } from "react-redux";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import InputField from "../../components/ui/InputField";

import NoData from "../../utils/NoData";
import { useCheckout } from "../../hooks/useCheckout";
import { useCart } from "../../features/cart/cartHooks";

export default function ShoppingCart() {
  const { coupon, discount, loading, error, finalPrice } = useSelector(
    (state) => state.coupon
  );
  const { next } = useCheckout();
  const {
    items,
    addToCart,
    removeFromCart,
    deleteFromCart,
    subtotal,
    tax,
    shipping,
    total,
    applyCoupon,
    applyDiscount,
    removeCoupon,
  } = useCart();
  const [couponCode, setCouponCode] = useState("");

  const handleIncrement = (item) => addToCart(item);
  const handleDecrement = (item) =>
    item.quantity <= 1 ? deleteFromCart(item._id) : removeFromCart(item._id);
  const handleRemove = (id) => deleteFromCart(id);

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      applyCoupon(couponCode.trim(), subtotal);
      applyDiscount(discount);
    }
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    setCouponCode("");
  };

  return (
    <div className="min-h-screen px-2 py-4 bg-gray-50 sm:px-4 md:px-6 lg:px-10 xl:px-20">
      <h2 className="mb-6 text-xl font-bold text-gray-800 sm:text-2xl">
        Shopping Cart
      </h2>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="order-1 xl:col-span-4 xl:order-2">
          <div className="p-4 bg-white rounded-lg shadow-sm sm:p-6 xl:sticky xl:top-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Order Summary
            </h3>

            <InputField
              placeholder="Enter discount or promo code"
              label="Promo Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <div className="flex items-center gap-2 mt-2">
              <Button
                label={coupon ? "Remove Coupon" : "Apply Coupon"}
                className="text-sm"
                onClick={coupon ? handleRemoveCoupon : handleApplyCoupon}
                disabled={items.length === 0}
              />
              {loading && (
                <span className="text-sm text-gray-400">Checking...</span>
              )}
              {error && <span className="text-sm text-red-500">{error}</span>}
            </div>

            {coupon && (
              <div className="mt-2 text-sm text-green-600">
                Applied Coupon: <strong>{coupon.code}</strong>
                <br />
                Discount: ₹{discount}
              </div>
            )}
            <div className="flex justify-between mt-2 text-sm font-medium text-green-700">
              <span>Discounted Total</span>
              <span>₹{finalPrice}</span>
            </div>

            {/* <InputField
              placeholder="Enter card number"
              label="Bonus Card Number"
            /> */}

            <div className="space-y-1 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal ?? 0}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping ?? 20}</span>
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
              onClick={next}
              disabled={items.length === 0}
            />
          </div>
        </div>

        {/* Cart Items */}
        <div className="order-2 xl:col-span-8 xl:order-1">
          <div className="p-4 bg-white rounded-lg shadow-sm sm:p-6">
            {items.length > 0 ? (
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
              <NoData message=" Your cart is currently empty." />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
