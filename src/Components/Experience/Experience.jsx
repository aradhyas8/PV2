import React from "react";
import './Experience.scss';

const Experience = () => {
  return (
    <div className="container-card">
      <div className="full-card">
        <div className="sidebar">January 2023-Present</div>
        <div
          class="card text-white bg-transparent mb-3"
          style={{ maxWidth: "40rem" }}
        >
          <div class="card-header">Intermediate Business Analyst @ CIBC</div>
          <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <footer class="card-footer">Hello</footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
