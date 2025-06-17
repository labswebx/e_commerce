import { AlertCircle } from "lucide-react";

const NoData = ({ message = "No Data Found" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-gray-600">
      <AlertCircle className="w-12 h-12 mb-2 text-red-500" />
      <h2 className="text-xl font-semibold">{message}</h2>
    </div>
  );
};

export default NoData;
