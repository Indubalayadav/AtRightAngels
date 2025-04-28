import React, { useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const categoryItemsRef = useRef([]);
  const resourcesItemsRef = useRef([]);
  const moreItemsRef = useRef([]);
  const otherMagazinesItemsRef = useRef([]);

  useEffect(() => {
    const allItems = [
      ...categoryItemsRef.current,
      ...resourcesItemsRef.current,
      ...moreItemsRef.current,
      ...otherMagazinesItemsRef.current,
    ];
    // GSAP animation for each li element
    gsap.fromTo(
      allItems,
      {
        y: 20, 
        opacity: 0, 
      },
      {
        y: 0, 
        opacity: 1,
        duration: 0.6,
        stagger: 0.2, 
        scrollTrigger: {
          trigger: ".footer-1",
          start: "top 80%",
          toggleActions: "restart none restart reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <footer className=" bg-(--Blumine) text-(--primary-color) relative z-0 footer-1">
        <div className="absolute z-1 2xl:-top-16 xl:-top-13 lg:-top-9 md:-top-6 -top-4">
          <img src="/images/footer-img.svg" alt="" />
        </div>
        <div className="px-4 py-30 footer-content">
          <div className="max-w-7xl mx-auto  grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Categories */}
            <div>
              <h4 className="font-bold tracking-widest text-sm mb-4">
                CATEGORIES
              </h4>
              <ul className="space-y-2">
                <li
                  ref={(el) => (categoryItemsRef.current[0] = el)}
                  className="footer-list-item"
                >
                  <a href="/all-posts/5?category=8" className="footer">
                    Features
                  </a>
                </li>
                <li
                  ref={(el) => (categoryItemsRef.current[1] = el)}
                  className="footer-list-item"
                >
                  <a href="/all-posts/5?category=6" className="footer">
                    Classroom
                  </a>
                </li>
                <li
                  ref={(el) => (categoryItemsRef.current[2] = el)}
                  className="footer-list-item"
                >
                  <a href="/all-posts/5?category=7" className="footer">
                    The Joy of Mathematics
                  </a>
                </li>
                <li
                  ref={(el) => (categoryItemsRef.current[3] = el)}
                  className="footer-list-item"
                >
                  <a href="/all-posts/5?category=9" className="footer">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold tracking-widest text-sm mb-4">
                RESOURCES
              </h4>
              <ul className="space-y-2">
                <li ref={(el) => (resourcesItemsRef.current[0] = el)} className="footer-list-item">
                  <a href="/all-posts/10?category=14" className="footer">
                    Tearouts
                  </a>
                </li>
                <li ref={(el) => (resourcesItemsRef.current[1] = el)} className="footer-list-item">
                  <a href="/all-posts/10?category=11" className="footer">
                    Pullouts
                  </a>
                </li>
                <li ref={(el) => (resourcesItemsRef.current[2] = el)} className="footer-list-item">
                  <a href="/all-posts/10?category=13" className="footer">
                    Worksheets
                  </a>
                </li>
                <li ref={(el) => (resourcesItemsRef.current[3] = el)} className="footer-list-item">
                  <a href="/all-posts/10?category=12" className="footer">
                    Posters
                  </a>
                </li>
              </ul>
            </div>

            {/* More */}
            <div>
              <h4 className="font-bold tracking-widest text-sm mb-4">MORE</h4>
              <ul className="space-y-2">
                <li ref={(el) => (moreItemsRef.current[0] = el)} className="footer-list-item">
                  <a href="/about-us" className="footer">
                    About Us
                  </a>
                </li>
                <li ref={(el) => (moreItemsRef.current[1] = el)} className="footer-list-item">
                  <a href="/authors" className="footer">
                    Authors
                  </a>
                </li>
                <li ref={(el) => (moreItemsRef.current[2] = el)} className="footer-list-item">
                  <a href="/all-posts/16" className="footer">
                    Magazines Issues
                  </a>
                </li>
                <li ref={(el) => (moreItemsRef.current[3] = el)} className="footer-list-item">
                  <a href="/magazine-guidelines" className="footer">
                    Magazine Guidelines
                  </a>
                </li>
                <li ref={(el) => (moreItemsRef.current[4] = el)} className="footer-list-item">
                  <a href="/contact" className="footer">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Other Magazines */}
            <div>
              <h4 className="font-bold tracking-widest text-sm mb-4">
                OTHER MAGAZINES
              </h4>
              <ul className="space-y-2">
                <li ref={(el) => (otherMagazinesItemsRef.current[0] = el)} className="footer-list-item">
                  <a href="/posts/151" className="footer">
                    पाठशाला
                  </a>
                </li>
                <li ref={(el) => (otherMagazinesItemsRef.current[1] = el)} className="footer-list-item">
                  <a href="/posts/147" className="footer">
                    i wonder…
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="down-border flex justify-center items-center py-10">
            <img src="/images/border.png" alt="" />
          </div>
          {/* Bottom Bar */}
          <div className="text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
            <div className="flex gap-4">
              <a href="#" className="hover:underline">
                Disclaimers
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </div>
            <div className="text-center">© 2025 Azim Premji University</div>
            <div className="flex gap-4 text-lg">
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="top-66 right-20 absolute 2xl:block hidden">
          <img src="/images/footer-bottomright-3traingle.svg" alt="" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
