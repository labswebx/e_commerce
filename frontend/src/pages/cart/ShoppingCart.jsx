// pages/ShoppingCart.js
import { useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import InputField from "../../components/ui/InputField";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: "#25193526913984",
      name: "Apple iPhone 14 Pro Max 128Gb Deep Purple",
      price: 1399,
      quantity: 1,
      image: "/logo-icon.jpg",
      category: "Smartphones",
    },
    {
      id: "#5345635638",
      name: "AirPods Max Silver 252545 ",
      price: 549,
      quantity: 2,
      image: "/logo-icon.jpg",
      category: "Audio",
    },
    {
      id: "#653633234",
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
      price: 399,
      quantity: 1,
      image: "/logo-icon.jpg",
      category: "Wearables",
    },
    {
      id: "#987654321",
      name: "MacBook Pro 14-inch M2 Pro 16GB/512GB",
      price: 1999,
      quantity: 1,
      image: "/logo-icon.jpg",
      category: "Laptops",
    },
    {
      id: "#123456789",
      name: "iPad Pro 12.9-inch (5th Gen) 128GB",
      price: 1099,
      quantity: 1,
      image: "/logo-icon.jpg",
      category: "Tablets",
    },
    {
      id: "#456789123",
      name: "Magic Keyboard for iPad Pro",
      price: 299,
      quantity: 1,
      image: "/logo-icon.jpg",
      category: "Accessories",
    },
    {
      id: "#789123456",
      name: "Apple Pencil (2nd Generation)",
      price: 129,
      quantity: 1,
      image: "/logo-icon.jpg",
      category: "Accessories",
    },
    {
      id: "#321654987",
      name: "HomePod mini - Space Gray",
      price: 99,
      quantity: 3,
      image: "/logo-icon.jpg",
      category: "Smart Home",
    },
    {
      id: "#654987321",
      name: "Apple TV 4K (64GB)",
      price: 129,
      quantity: 1,
      image: "/logo-icon.jpg",
      category: "Entertainment",
    },
    {
      id: "#147258369",
      name: "AirTag 4 Pack",
      price: 99,
      quantity: 1,
      image: "/logo-icon.jpg",
      category: "Accessories",
    },
    {
      id: "#258369147",
      name: "iPhone 15 Pro Leather Case - Black",
      price: 59,
      quantity: 1,
      image: "/logo-icon.jpg",
      category: "Accessories",
    },
    {
      id: "#369147258",
      name: "Apple Thunderbolt 4 Pro Cable (3m)",
      price: 159,
      quantity: 1,
      image: "/logo-icon.jpg",
      category: "Accessories",
    },
  ]);

  const handleIncrement = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = 50;
  const shipping = 29;
  const total = subtotal + tax + shipping;

  return (
    <div className="min-h-screen bg-white md:px-40 md:p-10 ">
      <h2 className="mb-6 text-2xl font-semibold">Shopping Cart</h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card
            type="cartItem"
            data={cartItems}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onRemove={handleRemove}
          />
        </div>

        {/* order summary section */}
        <div className="p-6 border border-gray-200 rounded-lg h-fit">
          <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <InputField placeholder="code" label="Discount Code/Promo code" />
            </div>
            <div className="flex justify-between">
              <InputField
                placeholder="Enter card number"
                label="Yoour bonus card number"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-bold ">Subtotal</span>
              <span className="font-bold ">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-bold ">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span className="font-bold ">${tax.toFixed(2)}</span>
            </div>
            <div className="pt-3 mt-3 border-t border-gray-200">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <Button label="Checkout" className="mt-2" fullWidth></Button>
        </div>
      </div>
    </div>
  );
}
