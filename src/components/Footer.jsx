import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#191b1e] text-gray-400 py-8 px-4 md:px-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Copyright */}
        <div className="text-center md:text-left text-sm sm:text-base">
          © {new Date().getFullYear()} <span className="text-[#f9004d] font-semibold">Abdullah</span>. All rights reserved.
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-4 justify-center">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#f9004d] transition text-lg">
            <FaFacebookF />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#f9004d] transition text-lg">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#f9004d] transition text-lg">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
