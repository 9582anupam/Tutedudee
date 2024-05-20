import React from "react";
import eye from "../images/eye.svg";

const courses = [
    {
        title: "C++",
        description: "Learn C++ for strong programming fundamentals.",
    },
    {
        title: "MERN Stack",
        description: "Master the MERN stack for high-demand projects.",
    },
    {
        title: "Data Structure & Algorithm",
        description:
            "Excel in Data Structures and Algorithms for interview success.",
    },
    {
        title: "Competitive Programming",
        description:
            "Excel in Data Structures and Algorithms for interview success.",
    },
];

const CourseList = () => {
    return (
        <div className="course-list-container">
            <div className="course-list-headings">
                <h3>DATASCIENCE COURSE LEARNING PATH</h3>
                <h1><p>Data Science</p> Course Curriculum</h1>
            </div>
            <div className="courses">
                {courses.map((course, index) => (
                    <React.Fragment key={index}>
                        <div key={index} className="course">
                            <div className="course-details">
                                <h2>{course.title}</h2>
                                <p>{course.description}</p>
                            </div>
                            <div className="view-curriculum-btn">
                                <img src={eye} alt="eye"></img>
                                <p>View Curriculum</p>
                            </div>
                        </div>
                        {index < courses.length - 1 && (
                            <div className="course-line"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CourseList;
