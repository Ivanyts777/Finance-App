import React, { createRef, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./ModalLogOutForm.module.css";

const MODAL_ROOT = document.getElementById("root");
const { modal_div, modal } = styles;

const ModalLogOutForm = ({ onClose, children }) => {
  ModalLogOutForm.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  const modalRef = createRef();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleKeyPress = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (modalRef.current && e.target !== modalRef.current) {
      return;
    }
    onClose();
  };

  return createPortal(
    <div
      className={modal_div}
      ref={modalRef}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className={modal}>{children}</div>
    </div>,
    MODAL_ROOT
  );
};

export default ModalLogOutForm;
