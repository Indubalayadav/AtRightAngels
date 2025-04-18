import React from "react";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ name, submit = false, path, variant = "filled" }) => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (path) navigate(path);
  }

    const baseClasses =
      "text-sm font-medium  px-6 py-3 rounded flex items-center gap-2 transition tracking-[1px] h-12 cursor-pointer";

    // Variant styles
    const variantClasses =
      variant === "outlined"
        ? " text-base font-medium tracking-normal border border-(--black) text-(--black)  hover:bg-(--Blumine) hover:text-white"
        : submit
        ? "bg-gray-800 hover:bg-gray-900 text-(--primary-color)"
        : "bg-(--Blumine) text-(--primary-color)";

 
  return (
    <button
    className={`${baseClasses} ${variantClasses}`}
      onClick={onSubmit}
      type="submit"
    >
      {name}
      <span className="text-xl font-normal">
        <i className="fas fa-arrow-right"></i>
      </span>
    </button>
  );
};

export default CustomButton;
