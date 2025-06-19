// features/address/addressHooks.js
import { useDispatch, useSelector } from "react-redux";
import {
  getMyAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
  getAddressDetails,
} from "./addressSlice";

const useAddress = () => {
  const dispatch = useDispatch();
  const { addresses, address, loading, error, success, message } = useSelector(
    (state) => state.address
  );

  const fetchAddresses = () => dispatch(getMyAddresses());
  const fetchAddressDetails = (id) => dispatch(getAddressDetails(id));
  const createNewAddress = (data) => dispatch(createAddress(data));
  const updateExistingAddress = ({ id, data }) =>
    dispatch(updateAddress({ id, data }));
  const removeAddress = (id) => dispatch(deleteAddress(id));

  return {
    addresses,
    address,
    loading,
    error,
    success,
    message,
    fetchAddresses,
    fetchAddressDetails,
    createNewAddress,
    updateExistingAddress,
    removeAddress,
  };
};

export default useAddress;
