
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.experienceTag}>For 7+ Years Experience</span>
          <h1 className={styles.title}>Upskill & Evolve <br /> Your Tech Career</h1>
          <p className={styles.description}>
            Learn with Senior Instructors from MAANG+, and make the switch to top product companies.</p>
            <p className={styles.description}>
            Evolve your Software Engineering career at just <strong>Rs. 6,965/-</strong> per month!
          </p>
          <button className={styles.downloadButton}>Download Syllabus</button>
        </div>
        <div className={styles.imageContainer}>
          <img src="https://www.greenstechnologys.in/images/element/07.png" alt="Instructor" className={styles.instructorImage} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
