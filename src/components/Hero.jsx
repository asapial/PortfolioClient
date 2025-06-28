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
    <div className="w-full pt-20">
      <div className="w-full max-w-7xl mx-auto p-5 flex flex-col md:flex-row gap-5 items-stretch">
        {/* Left Section (60% width on md+) */}
        <div className="text-white flex-[0.6] flex flex-col gap-5">
          <div className="h-full border border-gray-900 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] p-5 rounded-lg flex flex-col gap-10 justify-between">
            <div>
              <h1 className="text-xl">Welcome to my world</h1>
              <h2 className="text-5xl font-bold">
                Hi, I’m <span className="text-[#f9004d]">Abdullah</span>
              </h2>
              <h2 className="text-3xl font-bold">
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
              <h1 className="text-xl">Web designer and developer</h1>
              <span className="flex gap-2 items-center text-lg">
                <CiFileOn size={30} className="text-[#f9004d]" />
                Web Designer & Developer
              </span>
              <span className="flex gap-2 items-center text-lg">
                <CiMail size={30} className="text-[#f9004d]" />
                abusyeedabdullah@gmail.com
              </span>
              <span className="flex gap-2 items-center text-lg">
                <CiLocationOn size={30} className="text-[#f9004d]" />
                Mogbazar, Dhaka 1217
              </span>
            </div>
          </div>
          <div className="linksContainer  border border-gray-900 grid grid-cols-2 gap-10 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] p-5 rounded-lg ">
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
                  <FaLinkedin size={25}></FaLinkedin>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-5 justify-center">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-[#f9004d] text-black font-semibold tracking-wide shadow-[0_4px_14px_0_rgba(249,0,77,0.39)] hover:bg-transparent hover:text-[#f9004d] hover:border hover:border-[#f9004d] transition-all duration-300 ease-in-out"
              >
                <FiDownload className="text-xl" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Section (40% width on md+) */}
        <div className="flex-[0.4] border border-gray-900 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] rounded-lg flex items-center justify-center">
          <img
            src="/images/profilePhoto-1.png"
            alt="Profile"
            className="w-full  object-cover rounded-lg"
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
