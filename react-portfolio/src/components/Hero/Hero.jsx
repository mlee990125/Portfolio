// import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h1 className={styles.title}>Hi, I'm Michael</h1>
          <p className={styles.description}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm a full-stack developer blah blah blah more lines more lines more lines
          </p>
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
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.techstack}>
        <h3>Web Stack</h3>
        <img src={getImageUrl('hero/html5.png')} alt="icon of HTML5" className={styles.stackIcon}/>
        <img src={getImageUrl('hero/css.png')} alt="icon of css" className={styles.stackIcon}/>
        <img src={getImageUrl('hero/javascript.png')} alt="icon of Javascript" className={styles.stackIcon}/>
        <img src={getImageUrl('hero/mongodb.png')} alt="icon of MongoDB" className={styles.stackIcon}/>
        <img src={getImageUrl('hero/expressjs.png')} alt="icon of ExpressJs" className={styles.stackIcon}/>
        <img src={getImageUrl('hero/react.png')} alt="icon of react" className={styles.stackIcon}/>
        <img src={getImageUrl('hero/nodejs.png')} alt="icon of Nodejs" className={styles.stackIcon}/>

      </div>

    </section>
  );
};
