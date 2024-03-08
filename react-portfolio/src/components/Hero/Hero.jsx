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
        <h3>tech stack</h3>
      </div>

    </section>
  );
};
