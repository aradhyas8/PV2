import React from "react";

const ExperienceMilestone = ({ experience }) => {
  return (
    <div className="experience-milestone">
      <div className="milestone-date">{experience.date}</div>
      <div className="milestone-content">
        <h4>{experience.title}</h4>
        <p>{experience.description}</p>
      </div>
    </div>
  );
};

export default ExperienceMilestone;
