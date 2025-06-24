import { Plus } from "lucide-react";

const AddNewAddressDivider = ({ onClick }) => {
  return (
    <div className="address-divider">
      {/* Horizontal line */}
      <div className="address-divider-line" />

      {/* Plus button */}
      <button onClick={onClick} className="address-divider-btn">
        {" "}
        <Plus size={14} />
      </button>

      {/* Label */}
      <p className="address-divider-text">Add New Address</p>
    </div>
  );
};

export default AddNewAddressDivider;
