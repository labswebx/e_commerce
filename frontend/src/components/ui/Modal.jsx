import { useEffect } from "react";
import { X } from "lucide-react";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";

// reusable UI popup dialog
const Modal = ({ isOpen, onClose, title, children, footer }) => {
  useBodyScrollLock(isOpen);
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Title */}
        {title && (
          <h2 className="modal-header" id="address-modal-title">
            {title}
          </h2>
        )}

        {/* Body */}
        <div className="modal-body" id="address-modal-body">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="modal-footer" id="modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
