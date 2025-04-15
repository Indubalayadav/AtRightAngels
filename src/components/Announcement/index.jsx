import React, { useState } from "react";

const Announcement = ({ announcements = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };


  if (!announcements.length) {
    return (
      <div className="max-w-full h-[176px] bg-[var(--Fantasy)] rounded p-5 flex items-center justify-center">
        <p className="text-sm text-gray-500">No announcements available.</p>
      </div>
    );
  }

  const current = announcements.slice(0, 3)[activeIndex];

  return (
    <div className="max-w-full h-[176px] bg-[var(--Fantasy)] rounded p-5 relative">
      <span className="absolute -top-0 right-4 bg-[var(--Sidecar)] text-[var(--Whiskey)] text-xs font-semibold px-3 py-1 rounded-md">
        ANNOUNCEMENT
      </span>

      <h3 className="text-lg font-bold text-gray-900 mt-4" dangerouslySetInnerHTML={{ __html: current.title.rendered }} />
      <p className="text-gray-600 text-sm mt-2" dangerouslySetInnerHTML={{ __html: current.excerpt.rendered }} />

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 cursor-pointer">
      {announcements.slice(0, 3).map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-[var(--Whiskey)]"
                : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};


export default Announcement;

