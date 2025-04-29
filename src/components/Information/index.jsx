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
    <div className={`${bgColor} rounded-xl xl:h-120 md:h-100 sm:h-70 h-60 text-center relative overflow-hidden`}>
      <div>
        <img src="images/lines-top.svg" alt="" className="w-full"/>
      </div>
      <div className="xl:p-15 sm:p-6 p-4 flex flex-col md:gap-6 gap-2 items-center justify-center ">
      <div className="" />

      <h3 className="text-base lg:text-xl tracking-wider font-bold text-(--black)"> {title}</h3>
      <p className="text-base lg:text-xl -tracking-tighter">
      {content}
      </p>
      <div className="">
      <CustomButton onClick={() => handleOnClick(buttonLink)} className="cursor-pointer">{buttonText} <i className="fas fa-arrow-right ml-2"></i></CustomButton>
      </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full md:block hidden">
        <img src="images/line-bottom.svg" alt="" className="w-full"/>
      </div>
    </div>
  );
};

export default Information;
