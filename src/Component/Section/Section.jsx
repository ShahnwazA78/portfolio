import React from "react";
import "./Section.css";
const Section = ({ title, question }) => {
    return (
        <div>
            <div className="about-text">
                <div className="about-text-highlighted">{title}</div>
                <div className="about-question">{question}</div>
                <div className="about-udernline">
                    <div className="about-circle"></div>
                </div>
            </div>
        </div>
    );
};

export default Section;
