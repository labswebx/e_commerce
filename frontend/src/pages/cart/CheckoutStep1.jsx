import React, { useState } from "react";
import Card from "../../components/ui/Card";
import AddNewAddressDivider from "../../components/ui/AddressDivider";
import Button from "../../components/ui/Button";

const CheckoutStep1 = () => {
  const [selectedId, setSelectedId] = useState(null);

  const addresses = [
    {
      id: 1,
      name: "2118 Thornridge",
      tag: "HOME",
      fullAddress: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      phone: "(209) 555-0104",
    },
    {
      id: 2,
      name: "Headoffice",
      tag: "OFFICE",
      fullAddress: "2715 Ash Dr. San Jose, South Dakota 83475",
      phone: "(704) 555-0127",
    },
  ];

  return (
    <div className="space-y-4">
      {addresses.map((address) => (
        <Card
          key={address.id}
          type="address"
          data={address}
          selected={selectedId === address.id}
          onSelect={() => setSelectedId(address.id)}
          onEdit={(id) => console.log("Edit", id)}
          onDelete={(id) => console.log("Delete", id)}
        />
      ))}
      <AddNewAddressDivider onClick={() => console.log("Add New Address")} />
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

export default CheckoutStep1;
