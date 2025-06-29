import React from "react";
import {
  FaFacebook,
  FaFile,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { CiFileOn, CiLocationOn, CiMail } from "react-icons/ci";
import { Typewriter } from "react-simple-typewriter";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
<div className="w-full pt-20 px-4 sm:px-6 lg:px-10">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
    
    {/* Left Section */}
    <div className="flex flex-col gap-6 w-full md:w-3/5 text-white">
      
      {/* Text Box */}
      <div className="h-full border border-gray-900 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] p-6 rounded-lg flex flex-col gap-10 justify-between bg-[#1e2024]">
        <div>
          <h1 className="text-lg sm:text-xl">Welcome to my world</h1>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Hi, I’m <span className="text-[#f9004d]">Abdullah</span>
          </h2>
          <h2 className="text-2xl sm:text-3xl font-bold mt-3">
            a{" "}
            <span className="text-[#f9004d]">
              <Typewriter
                words={[
                  "Frontend Developer ✨",
                  "Designer",
                  "Competitive Programmer",
                  "Full Stack Developer",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={20}
                delaySpeed={500}
              />
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-lg sm:text-xl">Web designer and developer</h1>
          <span className="flex gap-2 items-center text-base">
            <CiFileOn size={25} className="text-[#f9004d]" />
            Web Designer & Developer
          </span>
          <span className="flex gap-2 items-center text-base">
            <CiMail size={25} className="text-[#f9004d]" />
            abusyeedabdullah@gmail.com
          </span>
          <span className="flex gap-2 items-center text-base">
            <CiLocationOn size={25} className="text-[#f9004d]" />
            Mogbazar, Dhaka 1217
          </span>
        </div>
      </div>

      {/* Links and Resume Box */}
      <div className="border border-gray-900 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] p-6 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#1e2024]">
        {/* Social Links */}
        <div className="flex flex-col gap-5">
          <h6 className="text-lg font-semibold">FIND WITH ME</h6>
          <div className="flex gap-5">
            <div className="themeSquareIconBox hover:scale-110 transition">
              <FaFacebook size={25} />
            </div>
            <div className="themeSquareIconBox hover:scale-110 transition">
              <FaGithub size={25} />
            </div>
            <div className="themeSquareIconBox hover:scale-110 transition">
              <FaLinkedin size={25} />
            </div>
          </div>
        </div>

        {/* Resume Button */}
        <div className="flex flex-col gap-5 justify-center">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-lg bg-[#f9004d] text-black font-semibold tracking-wide shadow-[0_4px_14px_0_rgba(249,0,77,0.39)] hover:bg-transparent hover:text-[#f9004d] hover:border hover:border-[#f9004d] transition-all duration-300 ease-in-out"
          >
            <FiDownload className="text-xl" />
            Download Resume
          </a>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-2/5 border border-gray-900 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] rounded-lg flex items-center justify-center bg-[#1e2024]">
      <img
        src="/images/profilePhoto-1.png"
        alt="Profile"
        className="w-full h-full object-contain rounded-lg"
      />
    </div>
  </div>
</div>

  );
};

export default Hero;

{
  /* <div className="linksContainer  border border-gray-900 grid grid-cols-2 gap-10 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] p-5 rounded-lg ">
            <div className=" flex flex-col gap-5">
              <h6>FIND WITH ME</h6>
              <div className=" grid grid-cols-3 gap-5">
                <div className=" themeSquareIconBox">
                  <FaFacebook size={25}></FaFacebook>
                </div>
                <div className=" themeSquareIconBox">
                  <FaGithub size={25}></FaGithub>
                </div>
                <div className=" themeSquareIconBox">
                  <FaTwitter size={25}></FaTwitter>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-5">
              <h6>BEST SKILL ON</h6>
              <div className=" grid grid-cols-3 gap-5">
                <div className=" themeSquareIconBox">
                  <FaFacebook size={25}></FaFacebook>
                </div>
                <div className=" themeSquareIconBox">
                  <FaGithub size={25}></FaGithub>
                </div>
                <div className=" themeSquareIconBox">
                  <FaTwitter size={25}></FaTwitter>
                </div>
              </div>
            </div>
          </div>  */
}

//           <a
//   href="/resume.pdf"
//   download
//   className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-[#f9004d] text-black font-semibold tracking-wide shadow-[0_4px_14px_0_rgba(249,0,77,0.39)] hover:bg-transparent hover:text-[#f9004d] hover:border hover:border-[#f9004d] transition-all duration-300 ease-in-out"
// >
//   <FiDownload className="text-xl" />
//   Download Resume
// </a>
