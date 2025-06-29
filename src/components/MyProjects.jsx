// MyProjects.jsx
import React from "react";
import { Link } from "react-router";
import { projects } from "../data/projects";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaNodeJs, FaReact, FaRegEye } from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";

// Add your techIcons object for icons mapping
const techIcons = {
  React: <FaReact className="text-sky-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  Node: <FaNodeJs className="text-green-500" />,
  Express: <SiExpress className="text-white" />,
  MongoDB: <SiMongodb className="text-green-600" />,
};

const MyProjects = () => {
  return (
    <section className="bg-[#212428] text-white py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold">My Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
<div
  key={project.id}
  className="group flex flex-col bg-[#1e2024] border border-gray-800 rounded-xl shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]"
>
  {/* Image */}
  <img
    src={project.image}
    alt={project.title}
    className="rounded-t-xl w-full h-56 object-contain bg-[#1e2024]"
  />

  {/* Card Content */}
  <div className="flex flex-col justify-between flex-grow p-5 bg-gradient-to-br from-[#1e2024] via-[#262a2e] to-[#1c1e22] rounded-b-xl">
    {/* Title and Category */}
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="text-sm text-[#f9004d]">{project.category}</p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 min-h-[50px]">
        {project.stack.split(",").map((tech, i) => (
          <span
            key={i}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-[#2a2d31] text-white shadow hover:shadow-md"
          >
            <span className="text-base">{techIcons[tech.trim()] || null}</span>
            <span className="text-xs">{tech.trim()}</span>
          </span>
        ))}
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-wrap items-center justify-between gap-3 mt-6">
      {/* Live Button */}
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-4 py-2 rounded bg-[#f9004d] text-black font-semibold hover:bg-white hover:text-[#f9004d] transition text-sm"
      >
        <FiExternalLink /> Live
      </a>

      {/* GitHub Button */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-4 py-2 rounded bg-[#1c1e22] border border-gray-600 text-white font-semibold hover:bg-[#f9004d] hover:text-black transition text-sm"
      >
        <FaGithub /> GitHub
      </a>

      {/* View Details Button */}
      <Link
        to={`/projects/${project.id}`}
        className="flex items-center gap-1 px-4 py-2 w-full justify-center rounded border border-gray-600 text-white font-semibold hover:bg-[#f9004d] hover:text-black transition text-sm"
      >
        <FaRegEye className="text-[#f9004d]" />
        View Details
      </Link>
    </div>
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
