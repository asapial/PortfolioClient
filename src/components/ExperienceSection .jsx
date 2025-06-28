import React from "react";
// import div from "./div"; // Assuming you have this reusable component

const experiences = [
  {
    year: "2022 - Present",
    title: "Senior Front-End Developer",
    company: "Rainbow-Themes",
    description:
      "Building responsive, accessible interfaces and delivering optimized frontend solutions using React, Tailwind CSS, and modern design principles.",
  },
  {
    year: "2020 - 2022",
    title: "Web Developer",
    company: "Themeforest",
    description:
      "Collaborated on dozens of premium themes, contributing to frontend design, reusable components, and performance enhancements.",
  },
  {
    year: "2018 - 2020",
    title: "Junior Web Designer",
    company: "Creative Agency",
    description:
      "Created user-centric layouts and worked closely with UI/UX teams to bring wireframes to life across various devices.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-[#212428] text-white px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Professional Experience</h2>

        <div className="relative  pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ">
              <div className="theme-shadow">
                <p className="text-sm text-indigo-400 font-medium">{exp.year}</p>
                <h3 className="text-xl font-semibold mt-1">{exp.title}</h3>
                <h4 className="text-md text-gray-400">{exp.company}</h4>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
