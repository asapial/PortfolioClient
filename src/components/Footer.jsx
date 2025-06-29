import React from "react";
import { FaFacebook, FaFacebookF, FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

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
<Link to={'https://www.facebook.com/asapial'}>
                  <div className="themeSquareIconBox hover:scale-110 transition">
                    <FaFacebook size={25} />
                  </div>
                </Link>
                <Link to={'https://github.com/asapial'}>
                  <div className="themeSquareIconBox hover:scale-110 transition">
                    <FaGithub size={25} />
                  </div>
                </Link>
                <Link to={'https://www.linkedin.com/in/abu-syeed-4a1b74370/'}>
                  <div className="themeSquareIconBox hover:scale-110 transition">
                    <FaLinkedin size={25} />
                  </div>
                </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
