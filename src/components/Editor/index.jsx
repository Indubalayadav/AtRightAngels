import React, { useState } from "react";
import Modal from "../modal";


const Editor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fullText =
    `Mathematics is a language of patterns, logic, and discovery.Mathematics is a 
    language of patterns, logic, and discovery.Mathematics is a language of patterns, logic, and discovery.Mathematics is a
     language of patterns, logic, and discovery.Mathematics is a language of patterns, logic, and discovery. In this issue, we explore 
     hands-on learning, engaging fraction activities, and the elegance of symmetric polygons.Mathematics is a language of patterns, 
     logic, and discovery. In this issue, we explore hands-on learning, engaging fraction activities, and the elegance of symmetric 
      hands-on learning, engaging fraction activities, and the elegance of symmetric polygons.Mathematics is a language of patterns, 
     logic, and discovery. In this issue, we explore hands-on learning, engaging fraction activities, and the elegance of symmetric
      hands-on learning, engaging fraction activities, and the elegance of symmetric polygons.Mathematics is a language of patterns, 
     logic, and discovery. In this issue, we explore hands-on learning, engaging fraction activities, and the elegance of symmetric
     polygons.`;

  const previewLength = 150;
  const truncatedText =
    fullText.length > previewLength ? fullText.slice(0, previewLength) + "..." : fullText;

  return (
    <>
      <div className="w-full h-[281px] bg-(--Cornflower) py-10 px-6 rounded-md">
        <div className="flex flex-col gap-3">
          <h2 className="text-(--Denim) text-center font-bold text-base">FROM THE EDITOR</h2>
          <h3 className="text-(--MineShaft) text-center font-bold xl:text-lg lg:text-base text:lg">
            The Beauty of Mathematical Exploration
          </h3>
          <p className="text-base">{truncatedText}</p>
        </div>
        <div className="text-center mt-4">
          <button onClick={() => setIsModalOpen(true)} className="text-(--MineShaft) underline cursor-pointer hover:border p-2 hover:no-underline transition-all duration-600 ease-in-out">
            READ MORE
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div>
          <img src="/images/modal-img.svg" alt="" className="w-full"/>
          </div>
          <div className="space-y-6 p-6">
          <h2 className="text-[#1968cf] text-center font-bold text-base">FROM THE EDITOR</h2>
          <h3 className="text-(--MineShaft) text-center font-bold text-lg">
            The Beauty of Mathematical Exploration
          </h3>
          <p className="text-base">{fullText}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Editor;
