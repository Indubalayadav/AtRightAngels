import React from "react";

const ShimmerPlaceHolder = ({ variant = "main" }) => {
  const isMain = variant === "main";
  return (
    <div
      role="status"
      className="animate-pulse w-full  bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className={`bg-gray-300 ${isMain ? "h-64" : "h-40"} w-full`} />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default ShimmerPlaceHolder;
