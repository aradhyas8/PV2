import React from "react";
import ProjectThumbnail from "./ProjectThumbnail";

const ProjectsSection = () => {
  // Placeholder for project data
  const projects = [
    { title: 'Project 1', description: 'Description 1'},
    // Add up to 10 project objects here
  ];

  return (
    <div className="projects-section">
      {projects.map((project, index) => (
        <ProjectThumbnail key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsSection;
