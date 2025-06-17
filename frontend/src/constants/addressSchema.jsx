export const addressSchema = {
  label: ["required"],
  address: ["required"],
  landmark: [],
  city: ["required"],
  state: ["required"],
  country: ["required"],
  pincode: ["required", "numeric"],
  contactNumber: ["required", "phone"],
};

export const initialAddressState = {
  label: "",
  address: "",
  landmark: "",
  city: "",
  state: "",
  country: "India",
  pincode: "",
  contactNumber: "",
};
