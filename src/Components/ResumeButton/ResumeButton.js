import React from 'react';
import './ResumeButton.scss';

const ResumeButton = () => {
  return (
    <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="ResumeButton">
      Resume
    </a>
  );
};

export default ResumeButton;