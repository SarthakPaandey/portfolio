// src/components/Projects.js
import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import { useSpring, animated } from "react-spring";

const projectData = [
  {
    title: "CrackHire",
    description: "CrackHire is an education plus job portal website...",
    link: "#",
    linkText: "VIEW PROJECT",
    image: " ",
  },
  {
    title: "Muffito",
    description: "Muffito is a pub/bar search engine...",
    link: "#",
    linkText: "DOWNLOAD THE APP",
    image: "link-to-image",
  },
  {
    title: "Edufy",
    description: "Edufy is an online learning platform...",
    link: "#",
    linkText: "VIEW PROJECT",
    image: "",
  },
  {
    title: "CrackHire",
    description: "CrackHire is an education plus job portal website...",
    link: "#",
    linkText: "VIEW PROJECT",
    image: "https://i.imgur.com/6z4245Q.png",
  },
  {
    title: "Muffito",
    description: "Muffito is a pub/bar search engine...",
    link: "#",
    linkText: "DOWNLOAD THE APP",
    image: "link-to-image",
  },
  {
    title: "Edufy",
    description: "Edufy is an online learning platform...",
    link: "#",
    linkText: "VIEW PROJECT",
    image: "",
  },
  {
    title: "CrackHire",
    description: "CrackHire is an education plus job portal website...",
    link: "#",
    linkText: "VIEW PROJECT",
    image: "",
  },
  {
    title: "Muffito",
    description: "Muffito is a pub/bar search engine...",
    link: "#",
    linkText: "DOWNLOAD THE APP",
    image: "link-to-image",
  },
  {
    title: "Edufy",
    description: "Edufy is an online learning platform...",
    link: "#",
    linkText: "VIEW PROJECT",
    image: "",
  },
  // Add more projects as needed
];

const Projects = () => {
  const animationProps = useSpring({
    from: { transform: "translateY(100px)" },
    to: { transform: "translateY(0px)" },
    config: { duration: 1000, yoyo: true },
  });

  return (
    <section id="projects">
      <h2>My Best Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <animated.div style={animationProps} key={index}>
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              linkText={project.linkText}
              image={project.image}
            />
          </animated.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
