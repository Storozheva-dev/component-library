import { useEffect, useState } from "react";
import styles from "./Toast.module.css";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
  onClose?: () => void;
  closable?: boolean;
}

function Toast({
  message,
  type = "info",
  duration = 3000,
  onClose,
  closable = false,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  // auto hide
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => handleClose(), duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  // closable
  const handleClose = () => {
    setIsHiding(true);
    window.setTimeout(() => onClose?.(), 300);
  };
  if (!isVisible && !isHiding) {
    return null;
  }

  return (
    <div
      className={`${styles.toast} ${styles[type]} ${
        isHiding ? styles.hide : styles.show
      }`}
      role="status"
      aria-live="polite"
    >
      <div className={styles.message}>{message}</div>
      {closable && (
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close notification"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default Toast;
