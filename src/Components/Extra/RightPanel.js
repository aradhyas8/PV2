import React from "react";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import AboutSection from "./AboutSection";

const RightPanel = () => {
  return (
    <div className="right-panel">
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
    </div>
  );
};

export default RightPanel;
