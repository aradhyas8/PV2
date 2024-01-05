import React from "react";

const ProjectThumbnail = ({ project }) => {
  return (
    <div className="project-thumbnail">
      <div className="thumbnail-image">
        {/* Project thumbnail image goes here */}
      </div>
      <div className="thumbnail-overlay">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
