import React from "react";
import ReactDOM from "react-dom";
const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)] overflow-auto flex items-center justify-center">
      <div className="bg-[#9dcde7] rounded-lg w-full max-w-4xl mx-auto -top-16 relative">
        <button
          onClick={onClose}
          className="absolute top-10 right-6 text-4xl font-bold text-black hover:text-gray-500 cursor-pointer"
        >
          &times;
        </button>
        <div className="">
          <div className=" ">
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
