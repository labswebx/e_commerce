import React, { useState } from "react";
import Tabs from "../../components/ui/Tabs";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";

const PaymentTabs = ({ handleNext, handleBack }) => {
  const [selectedTab, setSelectedTab] = useState("cod");

  const tabs = [
    { key: "cod", label: "Cash on Delivery" },
    { key: "card", label: "Credit/Debit Card" },
    { key: "paypal", label: "PayPal" },
    { key: "upi", label: "UPI" },
  ];

  const selectedLabel = tabs.find((tab) => tab.key === selectedTab)?.label;

  return (
    <div className="w-full max-w-lg p-6 space-y-4 bg-white border rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold">Payment</h2>

      <Tabs tabs={tabs} selected={selectedTab} onSelect={setSelectedTab} />

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
            <InputField placeholder="Cardholder Name" />
            <InputField placeholder="Card Number" />
            <div className="flex gap-2">
              <InputField placeholder="Exp. Date" />
              <InputField placeholder="CVV" />
            </div>
            <label className="flex items-center gap-2">
              <InputField type="checkbox" className="accent-black" />
              <span>Same as billing address</span>
            </label>
          </form>
        </div>
      )}

      {selectedTab === "cod" && (
        <div className="p-4 text-sm text-yellow-700 bg-yellow-100 border border-yellow-300 rounded-md">
          <p className="mb-2 font-medium">Cash on Delivery</p>
          <p>
            You will pay in cash when your order is delivered to your address.
          </p>
        </div>
      )}

      {selectedTab !== "card" && selectedTab !== "cod" && (
        <div className="text-sm text-gray-600">
          <p>
            Pay with <strong>{selectedLabel}</strong> — Integration coming soon.
          </p>
        </div>
      )}

      <div className="flex justify-between pt-4">
        <Button variant="outline" label="Back" onClick={handleBack} />
        <Button
          onClick={handleNext}
          className="px-6 py-2 text-white bg-black rounded-md"
          label="Pay"
        />
      </div>
    </div>
  );
};

export default PaymentTabs;
