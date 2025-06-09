import React, { useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

const CheckoutStep2 = () => {
  const [selectedShippingId, setSelectedShippingId] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const shippingOptions = [
    {
      id: "free",
      label: "Free",
      description: "Regular shipment",
      date: "17 Oct, 2023",
    },
    {
      id: "fast",
      label: "$8.50",
      description: "Get your delivery as soon as possible",
      date: "1 Oct, 2023",
    },
    {
      id: "schedule",
      label: "Schedule",
      description: "Pick a date when you want to get your delivery",
      date: "Select Date",
    },
  ];

  return (
    <div>
      <Card
        type="shipping"
        data={shippingOptions}
        selectedId={selectedShippingId}
        onSelect={setSelectedShippingId}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />
      <div className="flex justify-end w-full gap-3 ">
        <div></div>
        <div className="flex gap-3 md:w-1/2">
          {" "}
          <Button label="Back" variant="outline" fullWidth />
          <Button label="Next" fullWidth />
        </div>
      </div>
    </div>
  );
};

export default CheckoutStep2;
