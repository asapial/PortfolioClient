import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaLaptopCode,
} from "react-icons/fa";

const AboutMe = () => {
  const services = [
    {
      icon: <FaCode size={30} className="text-[#f9004d]" />,
      title: "Web Development",
      description:
        "Crafting modern, responsive websites with React and Tailwind CSS.",
    },
    {
      icon: <FaMobileAlt size={30} className="text-[#f9004d]" />,
      title: "Responsive Design",
      description:
        "Ensuring seamless experience across all devices and screens.",
    },
    {
      icon: <FaPaintBrush size={30} className="text-[#f9004d]" />,
      title: "UI/UX Design",
      description:
        "Designing intuitive user interfaces with a strong focus on usability.",
    },
    {
      icon: <FaLaptopCode size={30} className="text-[#f9004d]" />,
      title: "Competitive Programming",
      description:
        "Solving complex algorithmic problems with speed and precision to sharpen logic, enhance problem-solving skills, and stay ahead in coding challenges.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-[#212428] text-white px-4 sm:px-6 lg:px-20"
    >
      <div className="w-full px-6 py-20 bg-[#212428] text-white">
        <div className="max-w-7xl mx-auto space-y-8 shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] p-10 rounded-2xl border border-[#1c1e22]">
          {/* Section Title */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-2">
              About <span className="text-[#f9004d]">Me</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A passionate frontend developer with an eye for clean design and
              code.
            </p>
          </div>

          {/* About Description */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Hello! I’m{" "}
              <span className="text-[#f9004d] font-medium">Abdullah</span> — a
              passionate and self-driven web developer who thrives at the
              intersection of creativity and code.
            </p>

            <p>
              My programming journey started out of curiosity. Since then, I’ve
              gone from exploring C and C++ to mastering modern web technologies
              like
              <span className="text-white font-semibold">
                {" "}
                React, Tailwind CSS
              </span>
              , and <span className="text-white font-semibold">Firebase</span>.
              I enjoy building user-focused websites that are both functional
              and visually compelling.
            </p>

            <p>
              I love working on creative front-end projects, transforming ideas
              into seamless digital experiences. Whether it's designing sleek
              portfolios, crafting intuitive dashboards, or optimizing
              performance — I’m always excited to push the boundaries of what
              the web can do.
            </p>
          </div>
        </div>
      </div>

      {/* What I Do */}
      <div className="max-w-7xl mx-auto mt-16">
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
                  <h4 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h4>
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
