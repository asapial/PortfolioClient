import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const EducationSection = () => {
  const educationData = [
    {
      year: "2020 - Present",
      degree: "Bachelor of Science in Computer Science",
      institute: "Dhaka University of Engineering & Technology (DUET)",
      description: "Focused on software engineering, data structures, web development, and database systems.",
    },
    {
      year: "2016 - 2020",
      degree: "Diploma in Computer Engineering",
      institute: "Dhaka Polytechnic Institute",
      description: "Covered fundamentals of computer systems, C/C++ programming, and basic networking.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-[#212428] text-white px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-[#f9004d]">Education</span>
        </h2>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#1c1e22] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] p-6 rounded-xl hover:scale-[1.01] transition duration-300"
            >
              <div className="absolute -left-6 top-6 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-[#212428] shadow-[inset_4px_4px_8px_#1c1e22,inset_-4px_-4px_8px_#262a2e]">
                <FaGraduationCap size={20} className="text-[#f9004d]" />
              </div>
              <h4 className="text-sm text-[#f9004d] font-medium">{item.year}</h4>
              <h3 className="text-xl font-semibold mt-1">{item.degree}</h3>
              <p className="text-gray-400 text-md mb-2">{item.institute}</p>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
