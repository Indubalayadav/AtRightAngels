import React, { useState } from "react";

const Announcement = ({ announcements = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };


  if (!announcements.length) {
    return (
      <div
      role="status"
      className="animate-pulse bg-(--primary-color) rounded-lg shadow-md overflow-hidden"
    >
      <div className={`bg-gray-300 h-48 w-full`} />
      </div>
    );
  }

  const current = announcements.slice(0, 3)[activeIndex];

  return (
    <div className="max-w-full h-[176px] bg-(--Fantasy) rounded p-5 relative">
      <span className="absolute -top-0 right-4 bg-(--Sidecar-2) text-(--Whiskey) text-xs font-semibold px-3 py-1 rounded-md">
        ANNOUNCEMENT
      </span>

      <h3 className="text-lg font-bold text-(--MineShaft) mt-4" dangerouslySetInnerHTML={{ __html: current.title.rendered }} />
      <p className="text-(--Emperor) text-sm mt-2" dangerouslySetInnerHTML={{ __html: current.excerpt.rendered }} />

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 cursor-pointer">
      {announcements.lenght > 0 ? announcements.slice(0, 3).map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-[var(--Whiskey)]"
                : "bg-gray-300"
            }`}
          ></span>
        )):(<>
        
        </>)}
      </div>
    </div>
  );
};


export default Announcement;

