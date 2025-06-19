import React, { useEffect, useState } from "react";
import Card from "../../components/ui/Card";
import AddNewAddressDivider from "../../components/ui/AddressDivider";
import Button from "../../components/ui/Button";
import AddAddressModal from "../../components/ui/AddAddressModal";
import Toast from "../../components/ui/Toast";
import toastMessage from "../../constants/toastMessage";
import { useDispatch } from "react-redux";
import { setSelectedAddress } from "../../features/cart/cartSlice";
import useAddress from "../../features/address/addressHooks";
import Loader from "../../components/ui/Loader";
import ErrorMessage from "../../utils/ErrorMessage";
import NoData from "../../utils/NoData";
import { useCheckout } from "../../hooks/useCheckout";

const CheckoutStep1 = () => {
  const dispatch = useDispatch();
  const {
    addresses = [],
    fetchAddresses,
    removeAddress,
    loading,
    error,
  } = useAddress();
  const { next, back } = useCheckout();
  
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    fetchAddresses()
      .unwrap()
      .catch(() => Toast.error(toastMessage.ADDRESS_LOAD.ERROR));
  }, []);

  const handleDelete = async (id) => {
    try {
      await removeAddress(id).unwrap();
      Toast.success(toastMessage.ADDRESS_DELETE.SUCCESS);
    } catch (err) {
      Toast.error(err?.message || toastMessage.ADDRESS_DELETE.ERROR);
    }
  };

  const handleEdit = (address) => {
    setEditData(address);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEditData(null);
  };

  const handleSelectAddress = (address) => {
    setSelectedId(address._id);
    dispatch(setSelectedAddress(address));
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!addresses || addresses.length === 0) {
    return (
      <div>
        <NoData message="No saved addresses." />
        <AddNewAddressDivider onClick={() => setShowModal(true)} />
        <AddAddressModal
          isOpen={showModal}
          onClose={handleModalClose}
          initialData={editData}
          isEdit={!!editData}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {addresses.map((address) => (
        <Card
          key={address._id}
          type="address"
          data={address}
          selected={selectedId === address._id}
          onSelect={() => handleSelectAddress(address)}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
      <AddNewAddressDivider onClick={() => setShowModal(true)} />
      <AddAddressModal
        isOpen={showModal}
        onClose={handleModalClose}
        initialData={editData}
        isEdit={!!editData}
      />
      <div className="flex justify-end gap-3 pt-4">
        <Button label="Back" variant="outline" onClick={back} />
        <Button label="Next" onClick={next} disabled={!selectedId} />
      </div>
    </div>
  );
};

export default CheckoutStep1;
