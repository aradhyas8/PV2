import React from "react";
import ExperienceMilestone from "./ExperienceMilestone";

const ExperienceSection = () => {
  // Placeholder for experience data
  const experiences = [
    // { date: 'Date 1', title: 'Title 1', description: 'Description 1', ... },
    // Add more experience objects here
  ];

  return (
    <div className="experience-section">
      {experiences.map((experience, index) => (
        <ExperienceMilestone key={index} experience={experience} />
      ))}
    </div>
  );
};

export default ExperienceSection;
