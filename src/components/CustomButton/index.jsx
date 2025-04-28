import React from "react";
import { cn } from "../../utils"; // optional: utility for class merging if you're using one

const CustomButton = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}) => {
  const baseStyles = "md:px-8 md:py-3 sm:px-1 sm:py-1 font-medium transition-all duration-300";
  const variants = {
    primary:
      "bg-(--Blumine) rounded text-(--primary-color) rounded px-4 py-2 border border-(--Blumine)  hover:bg-(--Blumine-hover) focus:outline-none focus:ring-4 focus:ring-(--Blumine) focus:ring-(--Blumine) focus:ring-offset-2 transition",
    secondary: "bg-gray-200 rounded text-gray-800 hover:bg-gray-300",
    outline:
      "cursor-pointer text-base font-medium tracking-normal border border-(--black) text-(--black)  hover:bg-(--Blumine) hover:text-white hover:bg-(--black) hover:text-white hover:scale-105 transition-transform duration-300 ease-in-out rounded-md",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
