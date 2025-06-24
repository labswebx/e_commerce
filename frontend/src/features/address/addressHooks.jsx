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
  const {
    addresses,
    address,
    loading,
    error,
    success,
    message,
    count,
    totalCount,
    resultsPerPage,
    totalPages,
    currentPage,
  } = useSelector((state) => state.address);

  const fetchAddresses = (query = {}) => {
    const searchParams = new URLSearchParams(query).toString();
    return dispatch(getMyAddresses(searchParams ? `?${searchParams}` : ""));
  };
  const fetchAddressDetails = (id) => dispatch(getAddressDetails(id));
  const createNewAddress = (data) => dispatch(createAddress(data));
  const updateExistingAddress = ({ id, data }) =>
    dispatch(updateAddress({ id, data }));
  const removeAddress = (id) => dispatch(deleteAddress(id));

  return {
    // data
    addresses,
    address,

    // state
    loading,
    error,
    success,
    message,
    count,
    totalCount,
    resultsPerPage,
    totalPages,
    currentPage,

    // actions
    fetchAddresses,
    fetchAddressDetails,
    createNewAddress,
    updateExistingAddress,
    removeAddress,
  };
};

export default useAddress;
