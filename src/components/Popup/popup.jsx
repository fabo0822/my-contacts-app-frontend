import React from "react";
import './popup.css';

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; //do not render if closed

  return (
    <div className="popup-container">
      <div className="popup">
        <button className="close-button" onClick={onClose}>save</button>
        {children}
      </div>
    </div>
  );
};

export default Popup;