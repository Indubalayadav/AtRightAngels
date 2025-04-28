import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Information from "../Information";

gsap.registerPlugin(ScrollTrigger);

const Informed = () => {
 

  const informedCards = [
    {
      title: "STAY INFORMED",
      content:
        "Stay informed. Subscribe for free full site access, articles, resources and exclusive downloads",
      buttonText: "SUBSCRIBE FOR FREE",
      buttonLink: "https://login.salesforce.com/?locale=in",
      bgColor: "bg-(--PixieGreen)",
    },
    {
      title: "Call for articles",
      content:
        "Have an article to share or an idea to inspire? Submit your article and become a part of our magazine’s vibrant community.",
      buttonText: "Submit Article",
      buttonLink: "/call-for-articles",
      bgColor: "bg-(--Bone)",
    },
  ];
  return (
    <div className="bg-(--primary-color)">
      <div className="max-w-7xl mx-auto px-4 py-30">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {informedCards.map((card, index) => (
            <div className="md:w-1/2 w-full"
              key={index}
              
            >
              <Information {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Informed;
