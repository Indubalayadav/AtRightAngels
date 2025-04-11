import React from "react";
import CustomButton from "../CustomButton";


const Information = ({
  bgColor = "bg-(--GreenWhite)", // default background
  title = "STAY INFORMED",
  content = "Stay informed. Subscribe for free full site access, articles, resources and exclusive downloads",
  buttonText = "SUBSCRIBE FOR FREE",
  buttonLink = "#",
}) => {
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
      <CustomButton name={buttonText} href={buttonLink} />
      </div>
      </div>
      <div className="absolute top-104 md:block hidden">
        <img src="images/line-bottom.svg" alt="" />
      </div>
    </div>
  );
};

export default Information;
