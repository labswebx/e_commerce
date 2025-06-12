import React, { useEffect, useState } from "react";
import Card from "../../components/ui/Card";
import AddNewAddressDivider from "../../components/ui/AddressDivider";
import Button from "../../components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyAddress,
  deleteAddress,
  // createAddress,
  // updateAddress,
} from "../../features/address/addressSlice";
import AddAddressModal from "../../components/ui/AddAddressModal";
import { setSelectedAddress } from "../../features/cart/cartSlice";

const CheckoutStep1 = ({ handleNext, handleBack }) => {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const { addresses, loading, error, selectedAddress } = useSelector(
    (state) => state.address
  );

  useEffect(() => {
    dispatch(getMyAddress());
  }, [dispatch]);

  console.log(addresses);
  const handleDelete = (id) => {
    console.log("delete id", id);
    dispatch(deleteAddress(id));
    dispatch(getMyAddress());
  };

  const handleEdit = (address) => {
    console.log("delete id", address);
    setEditData(address);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEditData(null);
  };
  const handleSelectAddress = () => {
    console.log(selectedAddress);
    dispatch(setSelectedAddress(selectedId));
  };
  return (
    <div className="space-y-4">
      {addresses?.length > 0 ? (
        addresses.map((address) => (
          <Card
            onClick={handleSelectAddress}
            key={address._id}
            type="address"
            data={address}
            selected={selectedId === address._id}
            onSelect={() => setSelectedId(address._id)}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p className="text-sm text-gray-500">No saved addresses.</p>
      )}

      <AddNewAddressDivider onClick={() => setShowModal(true)} />

      <AddAddressModal
        isOpen={showModal}
        onClose={handleModalClose}
        initialData={editData}
        isEdit={!!editData}
      />

      <div className="flex justify-end gap-3 pt-4">
        <Button label="Back" variant="outline" onClick={handleBack} />
        <Button label="Next" onClick={handleNext} disabled={!selectedId} />
      </div>
    </div>
  );
};

export default CheckoutStep1;
