import React, { useState } from "react";
import Showcase from "./showcase/Showcase";
import "./Projects.css";
const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Beginner",
        id: "beginner",
    },
    {
        name: "Intermediate",
        id: "intermediate",
    },
    {
        name: "Advance",
        id: "advance",
    },
];
const projectsData = [
    {
        id: 1,
        name: "Internship Demonstration Project",
        tags: ["advance"],
        media: {
            thumbnail: require("../Assets/Home/advance2.gif"),
        },
    },
    {
        id: 2,
        name: "Pizza Website",
        tags: ["advance"],
        media: {
            thumbnail: require("../Assets/Home/advance1.gif"),
        },
    },
    {
        id: 3,
        name: "Quiz-App using REST API",
        tags: ["advance"],
        media: {
            thumbnail: require("../Assets/Home/advance3.gif"),
        },
    },
    {
        id: 4,
        name: "Stopwatch Timer",
        tags: ["intermediate", "beginner"],
        media: {
            thumbnail: require("../Assets/Home/begi1.gif"),
        },
    },
    {
        id: 5,
        name: "Basic JavaScript Project",
        tags: ["beginner"],
        media: {
            thumbnail: require("../Assets/Home/begi2.gif"),
        },
    },
    {
        id: 6,
        name: "Basic JavaScript Project-Lucky Color",
        tags: ["beginner"],
        media: {
            thumbnail: require("../Assets/Home/begi3.gif"),
        },
    },
    {
        id: 7,
        name: "ToDo List-interact with local storage",
        tags: ["intermediate", "beginner"],
        media: {
            thumbnail: require("../Assets/Home/begi4.gif"),
        },
    },
    {
        id: 8,
        name: "Random Para Generator",
        tags: ["intermediate", "beginner"],
        media: {
            thumbnail: require("../Assets/Home/begi5.gif"),
        },
    },
];

const Projects = () => {
    const [Active, setActive] = useState("");
    const handleClick = (id) => {
        filterProject(id);
        setActive(id);
    };
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);
    const filterProject = (tag) => {
        setTransition("zoomOut");
        setTimeout(() => {
            if (tag !== "all") {
                const filteredProject = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );

                setProjects(filteredProject);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomIn");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };
    return (
        <div
            className="project-container"
            id="project"
        >
            <div className="project-parent">
                <div className="project-text">
                    <div className="project-text-highlighted">Projects</div>
                    <div className="project-question">List of my projects</div>
                    <div className="project-udernline">
                        <div className="resume-circle"></div>
                    </div>
                </div>

                <div className="filters">
                    <ul className={"filters-menu-items"}>
                        {filtersData.map((value) => (
                            <li
                                className={`filter-menu-item ${
                                    Active === value.id ? "active" : ""
                                }`}
                                key={value.id}
                                onClick={() => handleClick(value.id)}
                                filterProject={(tag) => filterProject(tag)}
                            >
                                {value.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="project-content-wraper">
                    <Showcase
                        data={projects}
                        transition={transition}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
