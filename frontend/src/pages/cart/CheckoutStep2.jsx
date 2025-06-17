import { useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

import { useCart } from "../../features/cart/cartHooks";
import { shippingOptions } from "../../features/cart/cartConstants";
import { useCheckout } from "../../hooks/useCheckout";

const CheckoutStep2 = () => {
  const [selectedShippingId, setSelectedShippingId] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const { updateShipping } = useCart();
  const { next, back } = useCheckout();
  const handleSelect = (option) => {
    setSelectedShippingId(option.id);
    updateShipping(option.label);
  };

  return (
    <div>
      <Card
        type="shipping"
        data={shippingOptions}
        selectedId={selectedShippingId || true}
        onSelect={() => handleSelect(shippingOptions[0])}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />
      <div className="flex justify-end w-full gap-3 ">
        <div></div>
        <div className="flex gap-3 md:w-1/2">
          <Button label="Back" variant="outline" fullWidth onClick={back} />
          <Button label="Next" fullWidth onClick={next} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutStep2;
