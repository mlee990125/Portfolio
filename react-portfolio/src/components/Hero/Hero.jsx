/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Hero = () => {
  const [text] = useTypewriter({
    words: ["Michael", "a Developer", "a Data Scientist"],
    loop: {},
  });

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hi, I'm {text}
            <Cursor />{" "}
          </h1>
          <div className={styles.midSection}>
            <p className={styles.description}>
              I'm a full-stack developer blah blah blah more lines more lines
              more lines 
            </p>
            {/* <div style={{color: 'white'}}>Testing</div> */}
          </div>

          <div className={styles.socials_container}>
            <img
              src={getImageUrl("hero/linkedin.png")}
              alt="My linkedin profile"
              className={styles.socials}
            ></img>
            <img
              src={getImageUrl("hero/github.png")}
              alt="My github profile"
              className={styles.socials}
            ></img>
          </div>
        </div>
      </div>
      <div className={styles.techstack}>
        <h3>Web Stack</h3>
        <img
          src={getImageUrl("hero/html5.png")}
          alt="icon of HTML5"
          className={styles.stackIcon}
        />
        <img
          src={getImageUrl("hero/css.png")}
          alt="icon of css"
          className={styles.stackIcon}
        />
        <img
          src={getImageUrl("hero/javascript.png")}
          alt="icon of Javascript"
          className={styles.stackIcon}
        />
        <img
          src={getImageUrl("hero/mongodb.png")}
          alt="icon of MongoDB"
          className={styles.stackIcon}
        />
        <img
          src={getImageUrl("hero/expressjs.png")}
          alt="icon of ExpressJs"
          className={styles.stackIcon}
        />
        <img
          src={getImageUrl("hero/react.png")}
          alt="icon of react"
          className={styles.stackIcon}
        />
        <img
          src={getImageUrl("hero/nodejs.png")}
          alt="icon of Nodejs"
          className={styles.stackIcon}
        />
      </div>
    </section>
  );
};
