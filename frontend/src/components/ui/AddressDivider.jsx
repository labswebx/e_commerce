import React from "react";
import { Plus } from "lucide-react"; // optional: use any plus icon

const AddNewAddressDivider = ({ onClick }) => {
  return (
    <div className="relative w-full mt-6 mb-2 text-center">
      {/* Horizontal line */}
      <div className="w-full border-2 border-gray-900 border-dashed"></div>

      {/* Plus button */}
      <button
        onClick={onClick}
        className="absolute flex items-center justify-center w-6 h-6 text-white transform -translate-x-1/2 bg-black rounded-full left-1/2 -top-3"
      >
        <Plus size={14} />
      </button>

      {/* Label below */}
      <p className="mt-2 text-sm text-gray-600">Add New Address</p>
    </div>
  );
};

export default AddNewAddressDivider;
