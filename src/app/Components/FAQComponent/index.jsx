"use client";
import React from "react";
import styles from "./FAQComponent.module.css";

const FAQComponent = () => {
  return (
    <div className={styles.faqContainer}>
      <div className={styles.wrapper}>
        
        <div>
          <h2 className={styles.info}>Frequently Asked Questions:</h2>
          <p className="text-muted my-3">Still have Doubts?</p>
          <button
            className="btn mx-auto"
            style={{
                width:"300px",
              padding: "12px 24px",
              fontWeight: "600",
              fontSize: "1rem",
              color: "white",
              backgroundColor: "#16423C",
              borderRadius: "4px",
              transition: "background-color 0.3s ease",
              display: "inline-block",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#6A9C89")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#16423C")
            }
            onMouseDown={(e) =>
              (e.currentTarget.style.backgroundColor = "#6A9C89")
            }
            onMouseUp={(e) =>
              (e.currentTarget.style.backgroundColor = "#16423C")
            }
          >
            Request A Callback
          </button>
        </div>

        
        <div className={styles.faqItems}>
          <div className={styles.faqItem}>
            <div className={styles.faqHeader}>
              <span>What is the fee of Program?</span>
            </div>
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqHeader}>
              <span>Does Bosscoder promise 100% placement guarantee?</span>
            </div>
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqHeader}>
              <span>What if I want to discontinue the course?</span>
            </div>
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqHeader}>
              <span>What if I miss some sessions?</span>
            </div>
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqHeader}>
              <span>How will I manage time for classes with a job?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
