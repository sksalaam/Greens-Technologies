"use client";
import React from "react";
import styles from "./CurriculumModule.module.css";

const CurriculumModule = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className="text-center mb-4">Fast-Paced Curriculum</h2>
      <p className="text-center mb-5">
        Bosscoder offers a curriculum that focuses on an in-depth understanding
        of DSA & System Design to clear job interviews.
      </p>
      <div className="row">
        <div className="col-md-3">
          <ul className="list-group ">
            <li
              className="list-group-item active p-3 mb-2 "
              style={{
                backgroundColor: "#6A9C89",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#6A9C89")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#6A9C89")
              }
            >
              <strong>Module 3</strong>
              <br /> Master Problem Solving in DS & Algo
            </li>
            <li
              className="list-group-item p-3 mb-2"
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#E9EFEC")
              }
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
              onMouseDown={(e) =>
                (e.currentTarget.style.backgroundColor = "#6A9C89")
              }
              onMouseUp={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              <strong>Module 3</strong>
              <br /> System Design - LLD + HLD
            </li>
            <li
              className="list-group-item p-3 mb-2"
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#E9EFEC")
              }
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
              onMouseDown={(e) =>
                (e.currentTarget.style.backgroundColor = "#6A9C89")
              }
              onMouseUp={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              <strong>Module 3</strong>
              <br />
              Full Stack Specialization With Project (OPTIONAL)
            </li>
            <li
              className="list-group-item p-3 mb-2 "
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#E9EFEC")
              }
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
              onMouseDown={(e) =>
                (e.currentTarget.style.backgroundColor = "#6A9C89")
              }
              onMouseUp={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              <strong>Module 3</strong>
              <br /> Leadership Skills (OPTIONAL)
            </li>
            <li
              className="list-group-item p-3 mb-2"
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#E9EFEC")
              }
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
              onMouseDown={(e) =>
                (e.currentTarget.style.backgroundColor = "#6A9C89")
              }
              onMouseUp={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              <strong>Module 3</strong>
              <br /> GRAB YOUR DREAM OFFER
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <div className={`card ${styles.scrollBox}`}>
            <div className="card-body">
              <h4 className="card-title">
                Module 1 - Master Problem Solving in DS & Algo
              </h4>
              <p>
                <strong>Duration:</strong> 12 Weeks
              </p>
              <p>
                Problem-solving in DS & Algo is one of the most important topics
                to master for a software engineer. That is why we spend the
                first 12 weeks of our program ensuring you have solid
                problem-solving skills in DS & Algo. High-quality live classes
                with regular assignment problems, doubt support, mock interviews
                & competitive contests make sure you develop strong
                problem-solving muscles.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <h6>Topics that will be covered</h6>
                  <ul>
                    <li>Time Complexity</li>
                    <li>Arrays</li>
                    <li>Strings</li>
                    <li>Binary Search</li>
                    <li>2 Pointers</li>
                    <li>Recurssion</li>
                    <li>Hashing</li>
                    <li>Sorting</li>
                    <li>Bit Manipulation</li>
                    <li>Stack</li>
                    <li>Ques</li>
                    <li>Trees</li>
                    <li>Heap</li>
                    <li>Graphs</li>
                    <li>Greedy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
  className="btn mx-auto d-block mt-4"
  style={{
    padding: "12px 24px",
    fontWeight: "600",
    fontSize: "1rem",
    color: "white",
    backgroundColor: "#16423C",
    borderRadius: "4px",
    textAlign: "center",
    transition: "background-color 0.3s ease",
    display: "inline-block",
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6A9C89")}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#16423C")}
  onMouseDown={(e) => (e.currentTarget.style.backgroundColor = "#6A9C89")}
  onMouseUp={(e) => (e.currentTarget.style.backgroundColor = "#16423C")}
>
  Download Syllabus
</button>

    </div>
  );
};

export default CurriculumModule;
