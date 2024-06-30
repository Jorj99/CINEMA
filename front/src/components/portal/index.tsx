import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";

interface PortalProps {
  children: ReactNode;
  containerId?: string;
  onClose: () => void;
}

const Portal = ({ children, containerId = "root", onClose }: PortalProps) => {
  const mountNode = document.getElementById(containerId);
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        portalRef.current &&
        !portalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    document.addEventListener("mousedown", handleClickOutside);
    disableScroll();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      enableScroll();
    };
  }, [onClose]);

  if (!mountNode) {
    console.error(`No element found with id "${containerId}"`);
    return null;
  }

  return createPortal(
    <div ref={portalRef} className={styles.portal}>
      {children}
    </div>,
    mountNode
  );
};

export default Portal;
