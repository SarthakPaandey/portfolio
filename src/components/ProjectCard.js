// src/components/ProjectCard.js
import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, link, linkText, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {linkText}
      </a>
    </div>
  );
};

export default ProjectCard;
