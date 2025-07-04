import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import allProjects from "./data/projects"; // we'll create this data file

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = allProjects.find((p) => p.slug === id);

  if (!project) {
    return <p className="text-white text-center">Project not found</p>;
  }

  return (
    <div className="text-white p-8 max-w-5xl mx-auto">
      <button
        className="mb-4 px-4 py-2 bg-purple-700 rounded hover:bg-purple-800"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <p className="mb-2 text-sm text-purple-400">{project.Tech_Stack}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {project.moreScreenshots?.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Screenshot ${i + 1}`}
            className="rounded-lg border border-neutral-800"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
