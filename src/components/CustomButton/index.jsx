import React from 'react';
import { cn } from '../../utils'; // optional: utility for class merging if you're using one

const CustomButton = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'px-8 py-3 font-medium transition-all duration-300';
  const variants = {
    primary: 'bg-(--Blumine) rounded text-(--primary-color) hover:bg-(--primary-color) hover:text-(--black) hover:border',
    secondary: 'bg-gray-200 rounded text-gray-800 hover:bg-gray-300',
    outline: 'text-base font-medium tracking-normal border border-(--black) text-(--black)  hover:bg-(--Blumine) hover:text-white',
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

