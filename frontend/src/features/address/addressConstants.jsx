export const initialAddressState = {
  address: null,
  addresses: [],
  loading: false,
  error: null,
  success: null,
  message: null,
};
export const addressFields = [
  { name: "label", label: "Label" },
  { name: "address", label: "Address" },
  { name: "landmark", label: "Landmark" },
  { name: "city", label: "City" },
  { name: "state", label: "State" },
  { name: "country", label: "Country" },
  { name: "pincode", label: "PIN Code" },
  { name: "contactNumber", label: "Contact Number" },
];

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
