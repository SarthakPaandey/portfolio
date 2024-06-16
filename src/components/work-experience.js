import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <div className="timeline">
      <div className="timeline-item">
        <div className="date">2021 - Present</div>
        <div className="company">Company D</div>
        <div className="position">Frontend Developer</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi.
        </p>
      </div>
      <div className="timeline-item">
        <div className="date">2018 - 2021</div>
        <div className="company">Company E</div>
        <div className="position">Full Stack Developer</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi.
        </p>
      </div>
      <div className="timeline-item">
        <div className="date">2015 - 2018</div>
        <div className="company">Company F</div>
        <div className="position">Software Engineer</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi.
        </p>
      </div>
    </div>
  );
};

export default WorkExperience;
