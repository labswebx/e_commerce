import { useEffect } from "react";
import Modal from "./Modal";
import InputField from "./InputField";
import Button from "./Button";
import useForm from "../../hooks/useForm";
import Toast from "./Toast";
import toastMessage from "../../constants/toastMessage";
import {
  addressFields,
  addressSchema,
  initialAddressState,
} from "../../features/address/addressConstants";
import useAddress from "../../features/address/addressHooks";

const AddAddressModal = ({ isOpen, onClose, isEdit, initialData }) => {
  const { createNewAddress, updateExistingAddress, fetchAddresses } =
    useAddress();

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    resetForm,
  } = useForm(
    initialAddressState,
    async (data) => {
      try {
        if (isEdit && initialData?._id) {
          await updateExistingAddress({ id: initialData._id, data }).unwrap();
          Toast.success(toastMessage.ADDRESS_UPDATE.SUCCESS);
        } else {
          await createNewAddress(data).unwrap();
          Toast.success(toastMessage.ADDRESS_CREATE.SUCCESS);
        }
        await fetchAddresses().unwrap();
        onClose();
        resetForm(initialAddressState);
      } catch (err) {
        Toast.error(err?.message || "Something went wrong");
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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEdit ? "Edit Address" : "Add New Address"}
      footer={null}
    >
      <div className="max-h-[80vh] overflow-y-auto px-4 py-4 scrollbar-hide">
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[90%] md:w-[500px] mx-auto space-y-4 px-4 py-2"
        >
          <div className="grid grid-cols-1 gap-4">
            {addressFields.map((field) => (
              <InputField
                key={field.name}
                label={field.label}
                name={field.name}
                value={values[field.name]}
                onChange={handleChange}
                error={errors[field.name]}
                size="sm"
                className="w-full"
              />
            ))}
          </div>

          <div className="flex flex-col justify-end gap-3 pt-4 sm:flex-row">
            <Button
              label="Cancel"
              variant="outline"
              type="button"
              onClick={onClose}
              size="sm"
              className="w-full sm:w-auto"
            />
            <Button
              label={isEdit ? "Update Address" : "Save Address"}
              type="submit"
              disabled={isSubmitting}
              size="sm"
              className="w-full sm:w-auto"
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddAddressModal;
