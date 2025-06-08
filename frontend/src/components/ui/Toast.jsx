// utils/toastUtils.js
import { toast } from "react-hot-toast";
import theme, { TOAST_THEME } from "../../theme";
import { Info, TriangleAlert, X, CheckCircle } from "lucide-react";

const { COLORS } = theme;

const defaultDuration = {
  duration: 10000,
};

const CustomToast = ({ icon: Icon, message, toastId, type }) => {
  // Map type to class names
  const typeClass = {
    success: "toast-success",
    error: "toast-error",
    warning: "toast-warning",
    info: "toast-info",
  };

  return (
    <div
      role="alert"
      aria-live="assertive"
      onClick={() => toast.dismiss(toastId)}
      className={`toast-base ${typeClass[type]}`}
    >
      <Icon size={16} />
      <span className="flex-grow">{message}</span>
      <X size={14} />
    </div>
  );
};

const Toast = {
  success: (message, duration = defaultDuration) => {
    if (!message) return;
    toast.success(message, {
      duration,
      style: {
        ...TOAST_THEME,
        background: COLORS.success.light,
        color: COLORS.success.contrast,
        border: `1px solid ${COLORS.success.dark}`,
        cursor: "pointer",
      },
      icon: <CheckCircle size={20} />,
    });
  },

  error: (message, duration = defaultDuration) => {
    if (!message) return;
    toast.error(message, {
      duration,
      style: {
        ...TOAST_THEME,
        background: COLORS.error.light,
        color: COLORS.error.contrast,
        border: `1px solid ${COLORS.error.dark}`,
        cursor: "pointer",
      },
      icon: <AlertCircle size={20} />,
    });
  },

  warning: (message, duration = defaultDuration) => {
    if (!message) return;
    toast.custom(
      (t) => (
        <CustomToast
          icon={TriangleAlert}
          message={message}
          toastId={t.id}
          type="warning"
        />
      ),
      { duration }
    );
  },

  info: (message, duration = defaultDuration) => {
    if (!message) return;
    toast.custom(
      (t) => (
        <CustomToast icon={Info} message={message} toastId={t.id} type="info" />
      ),
      { duration }
    );
  },
};

export default Toast;

{
  /* <Toaster
  position="bottom-right"
  reverseOrder={false}
  toastOptions={{
    duration: 4000,
    style: {
      fontSize: "14px",
    },
  }}
/>; */
}
