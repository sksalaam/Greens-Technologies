import React from 'react';
import styles from "./Placements.module.css";

const Placements = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.textBox}>
          <p className={styles.firstText}>
            Placements in
            <br />
            <span>Top Product Companies</span>
          </p>
          <p className={styles.secondText}>
            250+ Hiring Companies with an Average CTC of 41 LPA
          </p>
        </div>
        <div className={styles.company}>
          <img
            className={styles.companyImage}
            src="https://www.bosscoderacademy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fglp_desktop_img.30f3c769.webp&w=1920&q=75"
            alt="Company Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Placements;
