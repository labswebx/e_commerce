import React from "react";
import { AlertCircle } from "lucide-react";

const ErrorMessage = ({ message = "Something went wrong", className = "" }) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 text-sm text-red-700  border  rounded-md px-4 py-2 ${className}`}
    >
      <AlertCircle className="w-5 h-5 text-red-500" />
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
