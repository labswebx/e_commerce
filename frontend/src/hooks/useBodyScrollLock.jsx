import { useEffect } from "react";

// To prevent the background page from scrolling when the modal is open.
const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      document.body.classList.add("overflow-hidden-body");
    } else {
      document.body.classList.remove("overflow-hidden-body");
    }

    // Clean up on unmount to be extra safe
    return () => {
      document.body.classList.remove("overflow-hidden-body");
    };
  }, [isLocked]);
};

export default useBodyScrollLock;
