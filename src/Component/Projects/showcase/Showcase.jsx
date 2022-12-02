import React from "react";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import "./Showcase.css";
const Showcase = ({ data, transition }) => {
    return (
        <div className="project-showcase">
            {data.map((project) => (
                <div
                key={project.name}
                    className={`showcase-item ${
                        transition === "zoomIn"
                            ? "zoomIn"
                            : transition === "zoomOut"
                            ? "zoomOut"
                            : ""
                    }`}
                >
                    <div className="meta-content">
                        <h3>{project.name}</h3>
                        <div className="go-to-cta">
                            <span className="text">Project Details</span>
                            <div className="arrow-icon">
                                {" "}
                                <AiOutlineArrowsAlt />
                            </div>
                        </div>
                    </div>
                    <img src={project.media.thumbnail} />
                </div>
            ))}
        </div>
    );
};

export default Showcase;
