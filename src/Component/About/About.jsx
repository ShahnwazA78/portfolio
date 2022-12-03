import React from "react";
import { scrollToSection } from "../utils/helpers";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div
            className="About-container"
            id="about"
        >
            <motion.div
                viewport={{ once: false }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "easeIn", duration: 0.5, delay: 0.15 }}
            >
                <div className="about-parent">
                    <div className="about-text">
                        <div className="about-text-highlighted">About Me</div>
                        <div className="about-question">Why Choose Me?</div>
                        <div className="about-udernline">
                            <div className="about-circle"></div>
                        </div>
                    </div>
                    <div className="about-main-div">
                        <div className="about-my-photo">
                            <div className="photo-container"></div>
                        </div>
                        <div className="about-details">
                            <div className="about-intro">
                                <span className="about-description">
                                    MERN stacks developer with background
                                    knowledge of data structure and algorithm
                                    using c++.
                                    <br></br>
                                    <br></br>
                                    Strong profession with B.tech willing to be
                                    assets for an organization.
                                </span>
                            </div>

                            <div className="about-key-points">
                                <span className="about-highlights">
                                    <b>Here are the Few Highlights:</b>
                                </span>
                                <ul className="about-ul">
                                    <li>C++ DSA</li>
                                    <li>MERN stack web development.</li>
                                    <li>
                                        Interactive Front End as per the design
                                    </li>
                                    <li>ReactJs and JavaScript.</li>
                                    <li>Building REST API</li>
                                    <li>Managing database</li>
                                </ul>
                            </div>
                            <div className="about-btn profile-options">
                                <button
                                    className="btn-profile primary-btn"
                                    onClick={() =>
                                        scrollToSection("contact-me")
                                    }
                                >
                                    Hire Me
                                </button>
                                <a
                                    href="Shahnwaz.pdf"
                                    download="Shahnwaz Shahnwaz.pdf"
                                >
                                    <button className="btn-profile highlighted-btn">
                                        Get Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
