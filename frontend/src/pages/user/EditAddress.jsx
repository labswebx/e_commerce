import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAddress from "../../features/address/addressHooks";
import Breadcrumb from "../../components/ui/BreadCrumb";
import Loader from "../../components/ui/Loader";
import ErrorMessage from "../../utils/ErrorMessage";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";
import Toast from "../../components/ui/Toast";
import toastMessage from "../../constants/toastMessage";

const EditAddress = () => {
  const { id } = useParams();
  const {
    address,
    fetchAddressDetails,
    updateExistingAddress,
    loading,
    error,
  } = useAddress();

  const [formData, setFormData] = useState(null);

  useEffect(() => {
    fetchAddressDetails(id);
  }, [id]);

  useEffect(() => {
    if (address && address._id === id) {
      setFormData({ ...address });
    }
  }, [address, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "pincode" || name === "contactNumber" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateExistingAddress({ id, data: formData });
      Toast.success(toastMessage.ADDRESS_UPDATE.SUCCESS);
    } catch (err) {
      Toast.error(toastMessage.ADDRESS_UPDATE.ERROR);
    }
  };

  if (loading || !formData) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="p-6 bg-white rounded shadow">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "User Dashboard", href: "/user/profile" },
          { label: "Address", href: "/user/address" },
          { label: "Edit Address" },
        ]}
      />
      <h2 className="mb-4 text-xl font-semibold text-gray-800">Edit Address</h2>
      <form
        onSubmit={handleSubmit}
        className="grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-1"
      >
        <InputField
          label="label"
          name="label"
          value={formData.label}
          onChange={handleChange}
          // className="px-4 py-2 border rounded "
          size="sm"
        />
        <InputField
          name="address"
          label="address"
          value={formData.address}
          onChange={handleChange}
          // className="w-full px-4 py-2 border rounded"
        />
        <InputField
          name="landmark"
          label="Landmark"
          value={formData.landmark}
          onChange={handleChange}
          // className="w-full px-4 py-2 border rounded"
        />
        <InputField
          name="city"
          value={formData.city}
          onChange={handleChange}
          // className="w-full px-4 py-2 border rounded"
          label="City"
        />
        <InputField
          name="state"
          value={formData.state}
          onChange={handleChange}
          // className="w-full px-4 py-2 border rounded"
          label="State"
        />
        <InputField
          name="country"
          value={formData.country}
          onChange={handleChange}
          // className="w-full px-4 py-2 border rounded"
          label="Country"
        />
        <InputField
          name="pincode"
          type="number"
          value={formData.pincode}
          onChange={handleChange}
          // className="w-full px-4 py-2 border rounded"
          label="Pincode"
        />
        <InputField
          name="contactNumber"
          type="number"
          value={formData.contactNumber}
          onChange={handleChange}
          // className="w-full px-4 py-2 border rounded"
          label="Contact Number"
        />
        <Button
          type="submit"
          label="Update"
          size="sm"
          className="w-32"

          // className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        ></Button>
      </form>
    </section>
  );
};

export default EditAddress;
