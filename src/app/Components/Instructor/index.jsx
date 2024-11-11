import React from 'react';
import styles from "./Instructor.module.css";

const Instructor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.info}>
            <h4>Anvesh Babu KB</h4>
            <p>
              Senior Software Engineer & Front-End Tech Architect in <strong>Disney</strong>. Anvesh Babu is an experienced Full Stack developer with over 8 years of expertise in the field. Currently employed at <strong>Disney</strong>, he brings a wealth of knowledge and skills to his role. In his capacity as a Full Stack developer, Anvesh is proficient in both front-end and back-end technologies, allowing him to contribute to the development of comprehensive and seamless web applications.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src="https://www.greenstechnologys.in/images/anvesh.png"
              alt="Anvesh Babu KB"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
