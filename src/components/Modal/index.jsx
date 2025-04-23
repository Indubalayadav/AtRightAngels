import React from "react";
import ReactDOM from "react-dom";
const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)] overflow-auto flex items-center justify-center">
      <div className="bg-[#9dcde7] rounded-lg w-full max-w-2xl mx-auto -top-16 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-3xl font-bold text-gray-500 hover:text-black cursor-pointer"
        >
          &times;
        </button>
        <div className="bg-[#9dcde7] max-h-[50vh] max-w-full overflow-hidden rounded-lg">
          <div className="overflow-auto max-h-[50vh] max-w-full">
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
