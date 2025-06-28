import React from "react";

const education = [
  {
    title: "BSc in Computer Science",
    subtitle: "University of Dhaka (2020 - Present)",
    result: "3.90/4",
    description:
      "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
  },
  {
    title: "AS – Science & Information",
    subtitle: "Legendary College (2017 - 2020)",
    result: "4.75/5",
    description:
      "Higher education is tertiary education leading to the award of an academic degree. Higher education, also called post-secondary education.",
  },
  {
    title: "Secondary School Education",
    subtitle: "Ideal School and College (2015 - 2017)",
    result: "5.00/5",
    description:
      "Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.",
  },
];

const experience = [
  {
    title: "Sr. Software Engineer",
    subtitle: "Google Inc. (2023 - Present)",
    company: "USA",
    description:
      "Google’s hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up.",
  },
  {
    title: "Web Developer & Trainer",
    subtitle: "Apple Developer Team (2021 - 2023)",
    company: "Malaysia",
    description:
      "A popular destination with a growing number of highly qualified homegrown graduates, it is thus not surprising a rise in Malaysia's tech scene.",
  },
  {
    title: "Front-End Developer",
    subtitle: "Meta – (2019 - 2021)",
    company: "USA",
    description:
      "The Indian economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy.",
  },
];

const Card = ({ title, subtitle, result, company, description }) => (
  <div className="relative bg-[#1c1e22] hover:shadow-[0_0_15px_#f9004d] transition-shadow duration-300 p-6 rounded-xl shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] border-l-[3px] border-[#f9004d]">
    {/* Timeline Bullet */}
    <div className="absolute -left-[10px] top-6 w-5 h-5 bg-[#f9004d] rounded-full border-4 border-[#212428] z-10 shadow-md"></div>
    <h4 className="text-lg font-semibold text-white">
      {title}
      {result && (
        <span className="float-right text-xs bg-[#f9004d] px-2 py-0.5 rounded-full text-black font-bold">
          {result}
        </span>
      )}
      {company && (
        <span className="float-right text-xs bg-[#f9004d] px-2 py-0.5 rounded-full text-black font-bold">
          {company}
        </span>
      )}
    </h4>
    <p className="text-sm text-gray-400 mb-2">{subtitle}</p>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const EducationAndSkills = () => {
  return (
    <section className=" bg-[#212428] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 relative">
          {/* Vertical Line */}
          <div className="absolute hidden md:block top-12 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#f9004d] to-transparent z-0"></div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">
              <span className="text-[#f9004d]">2015 - 2023</span> <br />
              Education Quality
            </h3>

            <div className="space-y-6 pl-4 relative z-10">
              {education.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">
              <span className="text-[#f9004d]">2019 - 2024</span> <br />
              Job Experience
            </h3>

            <div className="space-y-6 pl-4 relative z-10">
              {experience.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndSkills;
