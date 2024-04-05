/* eslint-disable react/prop-types */
// import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./Projects.module.css";

const Project = ({ title, picture, description, githubLink }) => (
  <div className={`${styles.details_container} ${styles.color_container}`}>
    <div className={styles.article_container}>
      <img src={picture} alt={title} className={styles.project_img} />
    </div>
    <h2 className={`${styles.experience_sub_title} ${styles.project_title}`}>{title}</h2>
    <p className={styles.description}>{description}</p>
    <div className={styles.btn_container}>
      <button
        className={`${styles.btn} ${styles.btn_color_2} ${styles.project_btn}`}
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
    picture: getImageUrl('projects/project.png'),
    description: "This is the first project description.",
    githubLink: "https://github.com/project1",
  },
  {
    title: "Project Two",
    picture: getImageUrl('projects/project2.png'),
    description: "This is the second project description.",
    githubLink: "https://github.com/project2",
  },
  {
    title: "Project One",
    picture: getImageUrl('projects/project.png'),
    description: "This is the first project description.",
    githubLink: "https://github.com/project1",
  },
  {
    title: "Project Two",
    picture: getImageUrl('projects/project2.png'),
    description: "This is the second project description.",
    githubLink: "https://github.com/project2",
  },
  {
    title: "Project One",
    picture: getImageUrl('projects/project.png'),
    description: "This is the first project description.",
    githubLink: "https://github.com/project1",
  },
  {
    title: "Project Two",
    picture: getImageUrl('projects/project2.png'),
    description: "This is the second project description.",
    githubLink: "https://github.com/project2",
  },
  // Add more projects as needed
];

export const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <p className={styles.section__text__p1}>Browse My Recent</p>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.experience_details_container}>
        <div className={styles.about_containers}>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
