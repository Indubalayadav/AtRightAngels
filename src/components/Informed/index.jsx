import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Information from "../Information";

gsap.registerPlugin(ScrollTrigger);

const Informed = () => {
  const cardRefs = useRef([]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const xOffset = index === 0 ? -100 : 100;

        gsap.fromTo(
          card,
          { opacity: 0, x: xOffset },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

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
        <div className="flex flex-col lg:flex-row gap-8">
          {informedCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="opacity-0"
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
