import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import Button from "../Button";

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button type="button" onClick={() => dialog.current.close()}>
          {buttonCaption}
        </Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  buttonCaption: PropTypes.string.isRequired,
};

export default Modal;
