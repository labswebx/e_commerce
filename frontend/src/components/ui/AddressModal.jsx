import { useEffect } from "react";

import Modal from "./Modal";
import InputField from "./InputField";
import Button from "./Button";
import Toast from "./Toast";

import useForm from "../../hooks/useForm";

import toastMessage from "../../constants/toastMessage";

import {
  addressFields,
  addressSchema,
  initialAddressState,
} from "../../features/address/addressConstants";
import useAddress from "../../features/address/addressHooks";

// reusable modal form for: Adding a new address and Editing an existing address
const AddressModal = ({ isOpen, onClose, isEdit, initialData }) => {
  const { createNewAddress, updateExistingAddress, fetchAddresses } =
    useAddress();
  const actionLabel = isEdit ? "Update Address" : "Save Address";
  const titleLabel = isEdit ? "Edit Address" : "Add New Address";

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    resetForm,
    setErrors,
  } = useForm(
    initialAddressState,
    async (data) => {
      try {
        if (isEdit && initialData?._id) {
          const response = await updateExistingAddress({
            id: initialData._id,
            data,
          }).unwrap();
          Toast.success(toastMessage.ADDRESS_UPDATE.SUCCESS);
        } else {
          await createNewAddress(data).unwrap();
          Toast.success(toastMessage.ADDRESS_CREATE.SUCCESS);
        }

        await fetchAddresses().unwrap();
        onClose();
        resetForm(initialAddressState);
      } catch (err) {
        // Show server or validation error
        if (err?.data?.errors) {
          setErrors(err.data.errors); // Optional: for field-specific errors
          Toast.error("Please fix the errors in the form.");
        } else {
          Toast.error(
            err?.message ||
              (isEdit
                ? toastMessage.ADDRESS_UPDATE.ERROR
                : toastMessage.ADDRESS_CREATE.ERROR)
          );
        }
        onClose();
      }
    },
    addressSchema
  );

  useEffect(() => {
    if (isOpen && isEdit && initialData) {
      resetForm({ ...initialData });
    }
  }, [isOpen, isEdit, initialData]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={titleLabel} footer={null}>
      <div className="address-modal">
        <form onSubmit={handleSubmit} className="address-form">
          <div className="address-form-field">
            {addressFields.map((field) => (
              <InputField
                key={field.name}
                label={field.label}
                name={field.name}
                value={values[field.name]}
                onChange={handleChange}
                error={errors[field.name]}
                size="sm"
                className="address-input"
              />
            ))}
          </div>

          <div className="address-form-footer">
            <Button
              label="Cancel"
              variant="outline"
              type="button"
              onClick={onClose}
              size="sm"
              className="address-btn "
            />
            <Button
              label={isSubmitting ? "Saving..." : actionLabel}
              type="submit"
              disabled={isSubmitting}
              size="sm"
              className="address-btn "
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddressModal;
