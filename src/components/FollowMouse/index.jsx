import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./followmouse.css";

const FollowMouse = () => {
  const wrapRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const dots = dotsRef.current;

    gsap.set(dots, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });

    const handleMouseMove = (e) => {
      gsap.to(dots, {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.15,
        ease: "none",
        duration: 0.5,
      });

      const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "none" } });

      tl.to(dots, {
        scale: 1,
        stagger: { amount: 0.15, from: "start", ease: "none" },
      });

      tl.to(
        dots,
        {
          scale: 0,
          stagger: { amount: 0.15, from: "end", ease: "none" },
        },
        "<+=2.5"
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div id="Wrap" ref={wrapRef}>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="FollowDot"
          ref={(el) => (dotsRef.current[i] = el)}
        />
      ))}
    </div>
  );
};

export default FollowMouse;
