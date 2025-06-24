import { copyToClipboard } from "../../utils/copyToClipboard";
import { Copy } from "lucide-react";

const CopyIcon = ({ text, className = "" }) => {
  if (!text) return null;

  return (
    <Copy
      title="Copy to clipboard"
      onClick={() => copyToClipboard(text)}
      size={20}
      className={`cursor-pointer text-gray-400 hover:text-blue-200 transition ${className}`}
    />
  );
};

export default CopyIcon;
