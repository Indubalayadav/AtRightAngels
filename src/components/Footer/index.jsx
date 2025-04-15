import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-(--Blumine) text-white relative overflow-hidden">
      {/* Background Pattern (optional SVG or pseudo-element) */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Categories */}
        <div>
          <h4 className="font-bold tracking-widest text-sm mb-4">CATEGORIES</h4>
          <ul className="space-y-2">
            <li>Features</li>
            <li>Classroom</li>
            <li>The Joy of Mathematics</li>
            <li>Reviews</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-bold tracking-widest text-sm mb-4">RESOURCES</h4>
          <ul className="space-y-2">
            <li>Tearouts</li>
            <li>Pullouts</li>
            <li>Worksheets</li>
            <li>Posters</li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h4 className="font-bold tracking-widest text-sm mb-4">MORE</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Authors</li>
            <li>Magazines Issues</li>
            <li>Magazine Guidelines</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Other Magazines */}
        <div>
          <h4 className="font-bold tracking-widest text-sm mb-4">OTHER MAGAZINES</h4>
          <ul className="space-y-2">
            <li>पाठशाला</li>
            <li>i wonder…</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" py-6 px-4 text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Disclaimers</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="text-center">© 2025 Azim Premji University</div>
        <div className="flex gap-4 text-lg">
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
