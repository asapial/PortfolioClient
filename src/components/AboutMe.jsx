import React from "react";
import { FaCode, FaMobileAlt, FaPaintBrush, FaLaptopCode } from "react-icons/fa";

const AboutMe = () => {
  const services = [
    {
      icon: <FaCode size={30} className="text-[#f9004d]" />,
      title: "Web Development",
      description: "Crafting modern, responsive websites with React and Tailwind CSS.",
    },
    {
      icon: <FaMobileAlt size={30} className="text-[#f9004d]" />,
      title: "Responsive Design",
      description: "Ensuring seamless experience across all devices and screens.",
    },
    {
      icon: <FaPaintBrush size={30} className="text-[#f9004d]" />,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces with a strong focus on usability.",
    },
    {
      icon: <FaLaptopCode size={30} className="text-[#f9004d]" />,
      title: "Front-End Performance",
      description: "Optimizing websites for speed, accessibility, and best practices.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#212428] text-white px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="w-full lg:w-3/5 space-y-6">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-[#f9004d]">Me</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello! I’m <span className="text-[#f9004d] font-medium">Abdullah</span> — a passionate and self-driven web developer who thrives at the intersection of creativity and code.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            My programming journey started out of curiosity. Since then, I’ve gone from exploring C and C++ to mastering modern web technologies like React, Tailwind CSS, and Firebase. I enjoy building user-focused websites that are both functional and visually compelling.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            I love working on creative front-end projects, transforming ideas into seamless digital experiences. Whether it's designing sleek portfolios, crafting intuitive dashboards, or optimizing performance—I’m always excited to push the boundaries of what the web can do.
          </p>

        </div>

        {/* Image Box */}
        <div className="w-full lg:w-2/5">
          <div className="rounded-2xl overflow-hidden shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
            <img
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01.png"
              alt="Abdullah profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* What I Do */}
      <div className="max-w-6xl mx-auto mt-16">
        <h3 className="text-3xl font-semibold text-center mb-10">
          What <span className="text-[#f9004d]">I Do</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1c1e22] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] p-6 rounded-xl transition duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#212428] p-3 rounded-md">
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
