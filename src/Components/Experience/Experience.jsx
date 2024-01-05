import React from "react";

const Experience = () => {
  return (
    <div className="row g-0">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            {/* Sidebar content here */}
            <p className="card-text">Sidebar Content</p>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Light card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="card-footer">Footer</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
