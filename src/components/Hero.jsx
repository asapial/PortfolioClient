import React from "react";
import ShadowCard from "../Atoms/ShadowCard";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full pt-20">
      <div className=" flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-10 justify-around items-center gap-5">
        <div className="leftContainer w-full lg:w-3/5 text-slate-50 p-5 grid grid-cols-1 gap-5">
          <div className="textContainer shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] p-10 rounded-lg flex flex-col gap-10">
            <h1 className=" text-xl">Welcome to my world</h1>
            <h2 className=" text-5xl font-bold">
              Hi, I’m <span className=" text-red-600">Abdullah</span>
            </h2>
            <h3>
              Web designer and developer. Web Designer & Developer
              michael@domain.com Kingston, New York 12401
            </h3>
          </div>

          <div className="socialLinksContainer grid grid-cols-4 gap-5 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] p-10 rounded-lg h-20">
            <ShadowCard><FaFacebook size={25}></FaFacebook></ShadowCard>
            <ShadowCard><FaYoutube size={25}></FaYoutube></ShadowCard>
            <ShadowCard><FaGithub size={25}></FaGithub></ShadowCard>
            <ShadowCard><FaTwitter size={25}></FaTwitter></ShadowCard>
          </div>
        </div>
        <div className="rightContainer w-full lg:w-2/5 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] p-5 rounded-lg">
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
