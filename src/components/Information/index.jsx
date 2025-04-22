import React from "react";
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";


const Information = ({
  bgColor , // default background
  title ,
  content ,
  buttonText ,
  buttonLink
  
}) => {
  const navigate = useNavigate();
  const handleOnClick = (path) => {
    if (path) {
      if (path.includes("https")) {
        window.open(path, "_blank");
      } else {
        navigate(path);
      }
    }
  }

  return (
    <div className={`${bgColor} rounded-xl md:w-146 h-120 w-full text-center relative overflow-hidden`}>
      <div>
        <img src="images/lines-top.svg" alt="" />
      </div>
      <div className="p-15 flex flex-col gap-6 items-center justify-center ">
      <div className="" />

      <h3 className="text-lg lg:text-xl tracking-wider font-bold text-(--black)"> {title}</h3>
      <p className="text-lg lg:text-xl -tracking-tighter">
      {content}
      </p>
      <div className="">
      <CustomButton onClick={() => handleOnClick(buttonLink)} className="cursor-pointer">{buttonText} <i className="fas fa-arrow-right ml-2"></i></CustomButton>
      </div>
      </div>
      <div className="absolute top-104 md:block hidden">
        <img src="images/line-bottom.svg" alt="" />
      </div>
    </div>
  );
};

export default Information;
