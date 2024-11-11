import React from 'react';
import styles from './FeaturesBanner.module.css';
import { IoIosPeople } from "react-icons/io";
import { Ri24HoursLine } from "react-icons/ri";
import { MdInterpreterMode } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { MdCorporateFare } from "react-icons/md";

const FeaturesBanner = () => {
  return (
    <div className={styles.featuresSection}>
        <div className={styles.wrapper}>
      <h2 className={styles.featuresTitle}>5 Features that make Greens Technologies Unique</h2>
      <div className={styles.featuresList}>
        <div className={styles.featureItem}>
          <i className={styles.featureIcon}><MdInterpreterMode /></i>
          <h3 className={styles.featureTitle}>Mock Interviews + Contests</h3>
          <p className={styles.featureDescription}>Rigorous interview preparation & contests.</p>
        </div>
        <div className={styles.featureItem}>
          <i className={styles.featureIcon}><Ri24HoursLine /></i>
          <h3 className={styles.featureTitle}>24/7 Doubt Support</h3>
          <p className={styles.featureDescription}>Highly active doubt support for seamless preparation.</p>
        </div>
        <div className={styles.featureItem}>
          <i className={styles.featureIcon}><GrUserExpert /></i>
          <h3 className={styles.featureTitle}>1:1 Expert Mentorship</h3>
          <p className={styles.featureDescription}>Mentors from MAANG+ to guide you in your career.</p>
        </div>
        <div className={styles.featureItem}>
          <i className={styles.featureIcon}><IoIosPeople /></i>
          <h3 className={styles.featureTitle}>Highly Engaging Community</h3>
          <p className={styles.featureDescription}>Interact with industry leaders through our community sessions.</p>
        </div>
        <div className={styles.featureItem}>
          <i className={styles.featureIcon}><MdCorporateFare /></i>
          <h3 className={styles.featureTitle}>Industry Relevant Case Studies</h3>
          <p className={styles.featureDescription}>Get real-life exposure with real-life case studies.</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default FeaturesBanner;
