import React from "react";

const Input = ({ label, type, id, name, placeholder, errorMassege, description, maxLength, minLength,  value,
    onChange, }) => {
  return (
    <div className="mb-10">
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        value={value}
        onChange={onChange}
        className="w-full h-12 mt-1 p-3 bg-(--primary-color) border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      {description && (
        <p className="text-(--Nevada) text-xs mt-1 italic">{description}</p>
      )}
      {errorMassege && (
        <p className="text-(--red) text-sm mt-1">{errorMassege}</p>
      )}
    </div>
  );
};

export default Input;
