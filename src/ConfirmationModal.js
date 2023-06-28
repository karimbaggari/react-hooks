import React, { useImperativeHandle, useRef, useState } from "react";
import "./ConfirmationModal.css";
const ConfirmationModal = React.forwardRef(({ isOpen, onClose }, ref) => {
  const closeRef = useRef();
  const confirmRef = useRef();
  const denyRef = useRef();
  const [focusedButton, setFocusedButton] = useState(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        focusCloseBtn: () => setFocusedButton(closeRef),
        focusConfirmBtn: () => setFocusedButton(confirmRef),
        focusDenyBtn: () => setFocusedButton(denyRef),
      };
    },
    []
  );

  const handleClick = (buttonRef) => {
    setFocusedButton(buttonRef);
    setTimeout(() => {
      setFocusedButton(null);
    }, 500);
  };

  if (!isOpen) return null;
  return (
    <div className="modal">
      <div>
        <button
          className={`close-btn ${focusedButton === closeRef ? "focused" : ""}`}
          ref={closeRef}
          onClick={() => onClose()}
        >
          &times;
        </button>
        <div className="modal-header">
          <h1>title</h1>
        </div>
        <div className="modal-body">Do you Confirm?</div>
        <div className="modal-footer">
          <button
            className={`confirm-btn ${
              focusedButton === confirmRef ? "focused" : ""
            }`}
            ref={confirmRef}
            onClick={() => handleClick(confirmRef)}
          >
            Yes
          </button>
          <button
            className={`confirm-btn ${
              focusedButton === denyRef ? "focused" : ""
            }`}
            ref={denyRef}
            onClick={() => handleClick(denyRef)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
});

export default ConfirmationModal;
