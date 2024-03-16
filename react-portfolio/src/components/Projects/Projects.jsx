/* eslint-disable react/prop-types */
// import React from 'react';
// import styles from "./Hero.module.css";

const Project = ({ title, picture, description, githubLink }) => (
  <div className="details-container color-container">
    <div className="article-container">
      <img src={picture} alt={title} className="project-img" />
    </div>
    <h2 className="experience-sub-title project-title">{title}</h2>
    <p>{description}</p>
    <div className="btn-container">
      <button
        className="btn btn-color-2 project-btn"
        onClick={() => (window.location.href = githubLink)}
      >
        Github
      </button>
    </div>
  </div>
);

const projects = [
  {
    title: "Project One",
    picture: "./assets/project-1.png",
    description: "This is the first project description.",
    githubLink: "https://github.com/project1",
  },
  {
    title: "Project Two",
    picture: "./assets/project-2.png",
    description: "This is the second project description.",
    githubLink: "https://github.com/project2",
  },
  // Add more projects as needed
];

export const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
