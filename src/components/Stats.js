import React from "react";

const statsData = [
    { icon: "course-icon", count: "24", label: "Courses" },
    { icon: "learners-icon", count: "30k+", label: "Learners" },
    { icon: "doubts-icon", count: "100k+", label: "Doubts Solved" },
    { icon: "projects-icon", count: "10k+", label: "Student Projects" },
];

const Stats = () => {
    return (
        <div className="stats-container">
            {statsData.map((stat, index) => (
                <React.Fragment key={index}>
                    <div className="stat">
                        <div className={stat.icon}></div>
                        <div className="stats-right">
                            <p className="count">{stat.count}</p>
                            <p className="label">{stat.label}</p>
                        </div>
                    </div>
                    {index < statsData.length - 1 && (
                        <div className="stats-line"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Stats;
