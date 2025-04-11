import React from 'react'

const Category = ({ category }) => {
    const categoryName = category || "Uncategorized";

    const categoryStyles = {
        "THE JOY OF MATHEMATICS": "bg-(--SurfCrest) text-(--Parsley)",
        "CLASSROOM": "bg-(--Snuff) text-(--Rum)",
        "REVIEWS": "bg-(--MandysPink) text-(--BrownRust)",
        "FEATURES": "bg-(--MintTulip) text-(--Blumine)",
        "POLLOUTS": "bg-(--MandysPink) text-(--Kabul)",
        "POSTERS": "bg-(--AlbescentWhite) text-(--BrownRust)",
        "TEAROUTS": "bg-(--BeautyBush) text-(--BurntUmber)",
        "WORKSHEETS": "bg-(--BeautyBush) text-(--WineBerry)",
        "UNCATEGORIZED": "bg-(--SurfCrest) text-(--Parsley)",
      };
    
      const categoryClass = categoryStyles[categoryName] || "bg-gray-300 text-gray-700";
  
  return (
    <span className={` font-semibold text-sm px-4 py-1 rounded tracking-wider ${categoryClass}`}>
      {categoryName.toUpperCase()}
    </span>
  )
}

export default Category