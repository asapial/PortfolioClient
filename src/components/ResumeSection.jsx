import React, { useState } from "react";
import EducationAndSkills from "./EducationAndSkills";

const ResumeSection = () => {
//   const tabs = [
//     "Education",
//     "Professional Skills",
//     "Standard Feature1",
//     "Standard Feature2",
//   ];
  const tabs = [
    "Education",
    "Professional Skills"

  ];
  const [activeTab, setActiveTab] = useState("Education");

  const designSkills = [
    { name: "Photoshop", value: 100 },
    { name: "Figma", value: 95 },
    { name: "Adobe XD", value: 60 },
    { name: "Adobe Illustrator", value: 70 },
    { name: "Design", value: 90 },
  ];

  const devSkills = [
    { name: "HTML", value: 100 },
    { name: "CSS", value: 95 },
    { name: "JavaScript", value: 60 },
    { name: "Software", value: 70 },
    { name: "Plugin", value: 90 },
  ];

  const gradientBar = "bg-gradient-to-r from-purple-500 to-[#f9004d]";

  return (
    <section className="bg-[#212428] text-white py-20 px-4 sm:px-6 lg:px-20 ">
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-[#f9004d]">Resume</span>
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-md font-medium transition duration-300 shadow-[inset_5px_5px_10px_#1c1e22,_inset_-5px_-5px_10px_#262a2e]
              ${
                activeTab === tab
                  ? "bg-[#1c1e22] text-[#f9004d]"
                  : "bg-[#212428] text-white"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Content */}
      {activeTab === "Professional Skills" && (
        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto ">
          {/* Design Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Design Skill
            </h3>
            {designSkills.map((skill, idx) => (
              <div key={idx} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-sm uppercase">{skill.name}</span>
                  <span className="text-sm">{skill.value}%</span>
                </div>
                <div className="w-full bg-[#1c1e22] rounded-full h-2.5 shadow-inner">
                  <div
                    className={`h-2.5 rounded-full ${gradientBar}`}
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Development Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Development Skill
            </h3>
            {devSkills.map((skill, idx) => (
              <div key={idx} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-sm uppercase">{skill.name}</span>
                  <span className="text-sm">{skill.value}%</span>
                </div>
                <div className="w-full bg-[#1c1e22] rounded-full h-2.5 shadow-inner">
                  <div
                    className={`h-2.5 rounded-full ${gradientBar}`}
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Education" && (
                    <div className="w-full max-w-7xl mx-auto ">

          <EducationAndSkills></EducationAndSkills>
                    </div>

      )}

      {/* Placeholder for other tabs
      {activeTab === "Standard Feature1" && (
        <div className="text-center text-gray-400 mt-12">
          <p>🔧 This tab is under development.</p>
        </div>
      )}
      {activeTab === "Standard Feature2" && (
        <div className="text-center text-gray-400 mt-12">
          <p>🔧 This tab is under development.</p>
        </div>
      )} */}
    </section>
  );
};

export default ResumeSection;
