import React from "react";
import {
  FaFacebook,
  FaFile,
  FaGithub,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { CiFileOn, CiLocationOn, CiMail } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="w-full pt-20">
      <div className=" grid grid-cols-5 w-full max-w-7xl mx-auto p-5 justify-between items-center gap-5 ">
        <div className="leftContainer   w-full col-span-3  text-slate-50  grid grid-cols-1 gap-5 justify-around ">
          <div className="textContainer  border border-gray-900 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] p-5 rounded-lg flex flex-col gap-10">
            <h1 className=" text-xl">Welcome to my world</h1>
            <h2 className=" text-5xl font-bold">
              Hi, I’m <span className=" text-red-600">Abdullah</span>
            </h2>
            <div className=" flex flex-col gap-4">
              <h1 className=" text-xl">Web designer and developer</h1>

              <span className=" flex gap-2 items-center text-lg">
                <CiFileOn size={30} className=" text-red-600"></CiFileOn> Web
                Designer & Developer
              </span>
              <span className=" flex gap-2 items-center text-lg">
                <CiMail size={30} className=" text-red-600"></CiMail>{" "}
                abusyeedabdullah@gmail.com
              </span>
              <span className=" flex gap-2 items-center text-lg">
                <CiLocationOn
                  size={30}
                  className=" text-red-600"
                ></CiLocationOn>
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
          </div>
        </div>


        <div className="rightContainer  border border-gray-900 w-full col-span-2 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]  ">
          <img
            src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
