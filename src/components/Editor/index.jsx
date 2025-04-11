import React from "react";

const Editor = () => {
  return (
    <div className="w-full h-[281px] bg-(--Cornflower) py-10 px-6 rounded-md">
      <div className="flex flex-col gap-3">
        <h2 className="text-(--Denim) text-center font-bold text-base">FROM THE EDITOR</h2>
        <h3 className="text-(--MineShaft) text-center font-bold text-lg">
          The Beauty of Mathematical Exploration
        </h3>
        <p className="text-base text-center">
          Mathematics is a language of patterns, logic, and discovery. In this
          issue, we explore hands-on learning, engaging fraction activities, and
          the elegance of symmetric polygons.
        </p>
      </div>
      <div className="text-center mt-4">
        <a href="#" className="text-(--MineShaft) underline">
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default Editor;
