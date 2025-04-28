import React from "react";

const ShimmerPlaceHolder = ({ variant = "main", context = null }) => {
  const isMain = variant === "main";
  const isSidebar = variant === "sidebar";
  const isCustomSection = variant === "customSection";
  

  let heightClass = "h-40";
  let widthClass = "w-full";

  if (isMain) {
    heightClass = "h-64"; 
  } else if (isSidebar) {
    heightClass = "h-full"; 
    widthClass = "w-1/4";
  } else if (isCustomSection) {
    heightClass = "h-52"; 
  }

  // Set different widths and heights for the inner placeholder divs
  let innerHeightClass = "h-4";
  let innerWidthClass = "w-3/4";

  if (isSidebar) {
    // For sidebar, we can change the width and height for the text placeholders
    innerHeightClass = "h-3";
    innerWidthClass = "w-3/4";
  }

  const height = isSidebar ? context =='resource' ? 'h-36' : "" : ""; // Default height for main and custom section
  
  return (
    <div
      role="status"
      className={`animate-pulse bg-white rounded-lg shadow-md overflow-hidden ${isSidebar ? `flex gap-1 ${height}` : ''} `}
    >
      <div className={`bg-gray-300 ${heightClass} ${widthClass}`} />
      <div className={`${isSidebar ? 'flex-1' : ''} p-4 space-y-3`}>
        <div className={`${innerHeightClass} bg-gray-300 rounded ${innerWidthClass}`}></div>
        <div className={`${innerHeightClass} bg-gray-200 rounded w-2/3`}></div>
        <div className={`${innerHeightClass} bg-gray-200 rounded w-1/2`}></div>
      </div>
    </div>
  );
};

export default ShimmerPlaceHolder;
