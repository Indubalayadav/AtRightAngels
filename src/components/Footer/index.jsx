import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=" bg-(--Blumine) text-white relative z-0 ">
        <div className="absolute z-1 2xl:-top-16 xl:-top-13 lg:-top-9 md:-top-6 -top-4">
          <img src="/images/footer-img.svg" alt="" />
        </div>
        <div className="px-4 py-30 ">
          <div className="max-w-7xl mx-auto  grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Categories */}
            <div>
              <h4 className="font-bold tracking-widest text-sm mb-4">
                CATEGORIES
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="/all-posts/5?category=8" className="footer">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/all-posts/5?category=6" className="footer">
                    Classroom
                  </a>
                </li>
                <li>
                  <a href="/all-posts/5?category=7" className="footer">
                    The Joy of Mathematics
                  </a>
                </li>
                <li>
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
                <li>
                  <a href="/all-posts/10?category=14" className="footer">
                    Tearouts
                  </a>
                </li>
                <li>
                  <a href="/all-posts/10?category=11" className="footer">
                    Pullouts
                  </a>
                </li>
                <li>
                  <a href="/all-posts/10?category=13" className="footer">
                    Worksheets
                  </a>
                </li>
                <li>
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
                <li>
                  <a href="/about-us" className="footer">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="" className="footer">
                    Authors
                  </a>
                </li>
                <li>
                  <a href="" className="footer">
                    Magazines Issues
                  </a>
                </li>
                <li>
                  <a href="/magazine-guidelines" className="footer">
                    Magazine Guidelines
                  </a>
                </li>
                <li>
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
                <li>
                  <a href="/posts/151" className="footer">
                    पाठशाला
                  </a>
                </li>
                <li>
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
