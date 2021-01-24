import React from "react";
import styles from "./modal.module.css";
import { CloseIcon } from "../icons";

const Modal = ({ children, onClose, show, topOffset }) => {
  return (
    <div
      className={`${styles.modal} ${show ? styles.show : ""}`}
      style={{ maxHeight: `calc(100vh - ${topOffset})`}}
    >
      <button className={styles.closeButton} onClick={() => onClose()}>
        <CloseIcon width={25} />
      </button>
      {children}
    </div>
  );
};

export default Modal;
