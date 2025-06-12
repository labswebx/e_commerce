import React, { useState } from "react";
import Card from "../../components/ui/Card";
import Tabs from "../../components/ui/Tabs";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";
import { useSelector } from "react-redux";

const OrderSummaryCard = (
  {
    // items,
    // address,
    // shipment,
    // subtotal,
    // tax,
    // shipping,
    // total,
  }
) => {
  const selectedAddress = useSelector((state) => state.cart.selectedAddress);
  const { items, shipment, subtotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );
  console.log(selectedAddress);
  return (
    <div className="w-full max-w-md p-6 space-y-4 bg-white border rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold">Summary</h2>

      <Card type="cartItem" data={items} />

      <div>
        <h4 className="mb-1 text-sm text-gray-500">Address</h4>
        <p className="text-sm">{selectedAddress.address}</p>
      </div>

      <div>
        <h4 className="mb-1 text-sm text-gray-500">Shipment method</h4>
        <p className="text-sm font-medium">{shipment}</p>
      </div>

      <div className="pt-4 space-y-2 text-sm border-t">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax</span>
          <span>${tax}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping & Handling</span>
          <span>${shipping}</span>
        </div>
        <div className="flex justify-between pt-2 text-base font-semibold border-t">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  );
};

// Payment Tabs
const PaymentTabs = ({ handleNext, handleBack }) => {
  const [selectedTab, setSelectedTab] = useState("card");

  const tabs = [
    { key: "card", label: "Credit Card" },
    { key: "paypal", label: "PayPal" },
    { key: "paypalCredit", label: "PayPal Credit" },
  ];

  return (
    <div className="w-full max-w-lg p-6 space-y-4 bg-white border rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold">Payment</h2>

      <Tabs tabs={tabs} selected={selectedTab} onSelect={setSelectedTab} />

      {/* Tab Content */}
      {selectedTab === "card" && (
        <div className="space-y-4">
          <div className="p-4 space-y-2 text-white bg-black rounded-xl">
            <div className="font-mono text-xl tracking-widest">
              4085 9536 8475 9530
            </div>
            <div className="text-sm">Cardholder</div>
            <div className="flex justify-end">
              <img
                src="https://img.icons8.com/color/48/mastercard-logo.png"
                alt="Mastercard"
                className="h-5"
              />
            </div>
          </div>

          <form className="space-y-4 text-sm">
            <InputField
              type="text"
              placeholder="Cardholder Name"
              className="w-full p-2 border rounded-md"
            />
            <InputField
              type="text"
              placeholder="Card Number"
              className="w-full p-2 border rounded-md"
            />
            <div className="flex gap-2">
              <InputField
                type="text"
                placeholder="Exp. Date"
                className="w-1/2 p-2 border rounded-md"
              />
              <InputField
                type="text"
                placeholder="CVV"
                className="w-1/2 p-2 border rounded-md"
              />
            </div>
            <label className="flex items-center gap-2">
              <InputField type="checkbox" className="accent-black" />
              <span className="md:text-nowrap"> Same as billing address</span>
            </label>
          </form>
        </div>
      )}

      {selectedTab !== "card" && (
        <div className="text-sm text-gray-600">
          <p>
            Pay with{" "}
            <strong>{tabs.find((t) => t.key === selectedTab).label}</strong> -
            Integration Coming Soon
          </p>
        </div>
      )}

      <div className="flex justify-between pt-4">
        <Button
          className="px-4 py-2 border rounded-md "
          variant="outline"
          label="Back"
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          className="px-6 py-2 text-white bg-black rounded-md"
          label="Pay"
        >
          Pay
        </Button>
      </div>
    </div>
  );
};

const CheckoutStep3 = ({ handleNext, handleBack }) => {
  const items = [
    {
      id: 1,
      title: "Apple iPhone 14 Pro Max",
      price: 1399,
      image: "/logo-icon.jpg",
      quantity: 1,
      category: "Smartphone",
    },
    {
      id: 2,
      title: "AirPods Max Silver",
      price: 549,
      image: "/logo-icon.jpg",
      quantity: 1,
      category: "Audio",
    },
    {
      id: 3,
      title: "Apple Watch Series 9 GPS",
      price: 399,
      image: "/logo-icon.jpg",
      quantity: 1,
      category: "Wearable",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="grid gap-8 md:grid-cols-2">
        <OrderSummaryCard
          items={items}
          address="1131 Dusty Townline, Jacksonville, TX 40322"
          shipment="Free"
          subtotal={2347}
          tax={50}
          shipping={29}
          total={2426}
        />
        <PaymentTabs handleBack={handleBack} handleNext={handleNext} />
      </div>
    </div>
  );
};

export default CheckoutStep3;
