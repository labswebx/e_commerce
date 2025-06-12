import React, { useEffect } from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white  shadow-xl p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-4 right-4 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Title */}
        {title && (
          <div className="mb-4 text-xl font-semibold text-gray-800">
            {title}
          </div>
        )}

        {/* Body */}
        <div className="">{children}</div>

        {/* Footer */}
        {footer && <div className="mt-6">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
