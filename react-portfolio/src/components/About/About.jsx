// import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
// import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    // <section className={styles.container} id="about">
    //   <h2 className={styles.title}>About Me</h2>
    //   <div className={styles.content}>
    //     <ul className={styles.aboutItems}>
    //       <li className={styles.aboutItem}>
    //         <h3>Interests</h3>
    //         <div className={styles.aboutItemContainer}>
    //           {/* <img
    //             src={getImageUrl("about/cursorIcon.png")}
    //             alt="Cursor icon"
    //           /> */}
    //           <div className={styles.aboutItemText}>
    //             <p>
    //               {/* eslint-disable-next-line react/no-unescaped-entities */}
    //               ▪️ Web Development
    //               <br />
    //               ▪️ Data Science
    //               <br />
    //               ▪️ Machine Learning
    //               <br />
    //             </p>
    //           </div>
    //         </div>
    //       </li>
    //       <li className={styles.aboutItem}>
    //         <h3>Education</h3>
    //         <div className={styles.aboutItemContainer}>
    //           {/* <img
    //             src={getImageUrl("about/serverIcon.png")}
    //             alt="Server icon"
    //           /> */}
    //           <div className={styles.aboutItemText}>
    //             <p>
    //               ▪️ Bachelor of Science in Computer Science, specialization in
    //               Artificial Intelligence and Data at SUNY Stony Brook
    //               University
    //             </p>
    //           </div>
    //         </div>
    //       </li>
    //     </ul>
    //     <div className={styles.contact}>
    //       <h1>Contact Me</h1>

    //       <div className={styles.aboutItemContainer}>
    //         <p>
    //           Hello you can contact me here
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className={styles.about} id="about">
      <div className={styles.aboutMe}>
        <p className={styles.section__text__p1}>Get To Know More</p>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.section_container}>
          <div className={styles.about_details_container}>
            <div className={styles.about_containers}>
              <div className={styles.details_container}>
                <img
                  src={getImageUrl("about/skills.png")}
                  alt="Skills icon"
                  className={styles.icon}
                />
                <h3>Skills</h3>
                <p>
                  2+ years <br />
                  Frontend Development
                </p>
              </div>
              <div className={styles.details_container}>
                <img
                  src={getImageUrl("about/education.png")}
                  alt="Education icon"
                  className={styles.icon}
                />
                <h3>Education</h3>
                <p>
                  B.Sc. Bachelors Degree
                  <br />
                  M.Sc. Masters Degree
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.contact}>
        {/* <p className={styles.section__text__p1}>Get in Touch</p> */}
        <h1 className={styles.title}>Contact Me</h1>
        <div className={styles.contact_info_upper_container}>
          <div className={styles.contact_info_container}>
            <img
              src={getImageUrl("about/email.png")}
              alt="Email icon"
              className={`${styles.icon} ${styles.contact_icon} ${styles.email_icon}`}
            />
            <p>mlee990125@gmail.com</p>
          </div>
          <div className={styles.contact_info_container}>
            <img
              src={getImageUrl("about/phone.png")}
              alt="Phone icon"
              className={`${styles.icon} ${styles.contact_icon}`}
            />
            <p>631-417-2896</p>
          </div>
          <div className={styles.contact_info_container}>
            <img
              src={getImageUrl("about/linkedin.png")}
              alt="LinkedIn icon"
              className={`${styles.icon} ${styles.contact_icon}`}
            />
            <p>
              <a href="https://www.linkedin.com">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};
