import React from "react";
import ReactDOM from "react-dom";
const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)] overflow-auto">
      <div className="bg-[#9dcde7] rounded-lg w-full max-w-xl mx-auto mt-30 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-4 text-3xl font-bold text-gray-500 hover:text-black"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
