import React, { useEffect } from "react";
import Modal from "./Modal";
import InputField from "./InputField";
import Button from "./Button";
// import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import {
  createAddress,
  getMyAddress,
  updateAddress,
} from "../../features/address/addressSlice";
import useForm from "../../hooks/useForm";

const schema = {
  label: ["required"],
  address: ["required"],
  landmark: [],
  city: ["required"],
  state: ["required"],
  country: ["required"],
  pincode: ["required", "numeric"],
  contactNumber: ["required", "phone"],
};

const AddAddressModal = ({ isOpen, onClose, isEdit, initialData }) => {
  const dispatch = useDispatch();

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    resetForm,
  } = useForm(
    {
      label: "",
      address: "",
      landmark: "",
      city: "",
      state: "",
      country: "India",
      pincode: "",
      contactNumber: "",
    },
    async (data) => {
      if (isEdit && initialData?._id) {
        await dispatch(updateAddress({ id: initialData._id, data }));
      } else {
        await dispatch(createAddress(data));
      }

      await dispatch(getMyAddress());
      onClose();
      resetForm();
    },
    schema
  );

  useEffect(() => {
    console.log("Form Reset Triggered", initialData);
    if (
      isOpen &&
      isEdit &&
      initialData &&
      Object.keys(initialData).length > 0
    ) {
      console.log("Resetting with values:", initialData);
      resetForm({
        label: initialData.label || "",
        address: initialData.address || "",
        landmark: initialData.landmark || "",
        city: initialData.city || "",
        state: initialData.state || "",
        country: initialData.country || "India",
        pincode: initialData.pincode || "",
        contactNumber: initialData.contactNumber || "",
      });
    }
  }, [initialData, isEdit, isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add New Address"
      footer={null}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Label"
          name="label"
          value={values.label}
          onChange={handleChange}
          error={errors.label}
        />
        <InputField
          label="Address"
          name="address"
          value={values.address}
          onChange={handleChange}
          error={errors.address}
        />
        <InputField
          label="Landmark"
          name="landmark"
          value={values.landmark}
          onChange={handleChange}
          error={errors.landmark}
        />
        <InputField
          label="City"
          name="city"
          value={values.city}
          onChange={handleChange}
          error={errors.city}
        />
        <InputField
          label="State"
          name="state"
          value={values.state}
          onChange={handleChange}
          error={errors.state}
        />
        <InputField
          label="Country"
          name="country"
          value={values.country}
          onChange={handleChange}
          error={errors.country}
        />
        <InputField
          label="Pincode"
          name="pincode"
          value={values.pincode}
          onChange={handleChange}
          error={errors.pincode}
        />
        <InputField
          label="Contact Number"
          name="contactNumber"
          value={values.contactNumber}
          onChange={handleChange}
          error={errors.contactNumber}
        />
        <div className="flex justify-end gap-2 pt-2">
          <Button
            label="Cancel"
            variant="outline"
            type="button"
            onClick={onClose}
            size="sm"
          />
          <Button
            label="Save Address"
            type="submit"
            disabled={isSubmitting}
            size="sm"
          />
        </div>
      </form>
    </Modal>
  );
};

export default AddAddressModal;
