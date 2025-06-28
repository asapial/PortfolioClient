// ProjectDetails.jsx
import React from "react";
import { useParams, Link } from "react-router";
import { projects } from "../data/projects";
import { FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";
const techIcons = {
  React: <FaReact className="text-sky-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  Node: <FaNodeJs className="text-green-500" />,
  Express: <SiExpress className="text-white" />,
  MongoDB: <SiMongodb className="text-green-600" />,
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-white text-center py-20">
        <h2>Project Not Found</h2>
        <Link to="/" className="text-[#f9004d] underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#212428] text-white py-40 px-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-contain rounded-lg "
        />
        <h2 className="text-3xl font-bold">{project.title}</h2>
        <p className="text-sm text-[#f9004d]">{project.category}</p>
<div className="flex flex-wrap gap-3">
  {project.stack.split(",").map((tech, i) => (
    <span
      key={i}
      className="flex items-center gap-1 bg-[#2a2d31] px-3 py-1 text-xs font-semibold rounded-full"
    >
      <span className="text-base">
        {techIcons[tech.trim()] || null}
      </span>
      <span>{tech.trim()}</span>
    </span>
  ))}
</div>

        <p className="text-lg">{project.description}</p>
        <div>
          <h4 className="font-bold text-[#f9004d] text-lg mb-2">Challenges:</h4>
          <p className="text-gray-300">{project.challenges}</p>
        </div>
        <div>
          <h4 className="font-bold text-[#f9004d] text-lg mb-2">Future Plan:</h4>
          <p className="text-gray-300">{project.future}</p>
        </div>

        <div className="flex gap-4 mt-6">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f9004d] px-4 py-2 text-black rounded hover:bg-white hover:text-[#f9004d]"
          >
            Live Site
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1c1e22] px-4 py-2 text-white rounded border border-gray-600 hover:bg-[#f9004d] hover:text-black"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
