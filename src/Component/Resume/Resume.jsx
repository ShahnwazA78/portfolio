import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FaLaptopCode, FaHistory, FaUserGraduate } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { TbFileCertificate } from "react-icons/tb";
import { scrollToSection } from "../utils/helpers";
import "./Resume.css";
import { motion } from "framer-motion";

const certificatesdata = [
    {
        id: 1,
        image: "certi7.jpg",
        name: "UHACKATHON 3.0 organized by UPES",
    },
    {
        id: 2,
        image: "certi6.jpg",
        name: "Summer Training at VictoryPoint",
    },
    {
        id: 3,
        image: "certi3.jpeg",
        name: "Programming for Everybody (Getting Started with Python) by Coursera",
    },
    {
        id: 4,
        image: "certi5.jpg",
        name: "C Programming Step by Step by Udemy",
    },
    {
        id: 5,
        image: "certi2.png",
        name: "Newton's Coding Challenge April 2022",
    },
    {
        id: 6,
        image: "certi1.jpg",
        name: "Programming Essentials in Python by Cisco",
    },
    {
        id: 7,
        image: "certi4.jpg",
        name: "Corporate Communication Workshop by Skill Nation",
    },
];

const Resume = () => {
    const [isActiveEdu, setIsActiveEdu] = useState(false);
    const [isActivework, setIsActivework] = useState(false);
    const [isActiveprogra, setIsActiveprogram] = useState(false);
    const [isActiveproj, setIsActiveproj] = useState(false);
    const [isActivecerti, setIsActivecerti] = useState(false);
    return (
        <div
            className="resume-container"
            id="resume"
        >
            <motion.div
                viewport={{ once: false }}
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "easeIn", duration: 0.5, delay: 0.15 }}
            >
                <div className="resume-parent">
                    <div className="resume-text">
                        <div className="resume-text-highlighted">Resume</div>
                        <div className="resume-question">
                            My Formal Bio Details
                        </div>
                        <div className="resume-udernline">
                            <div className="resume-circle"></div>
                        </div>
                    </div>
                    <Container>
                        <Row>
                            <Col
                                md={4}
                                className="left-side"
                            >
                                <ul className="side-icons">
                                    <li>
                                        <FaUserGraduate size={22} />
                                    </li>
                                    <li>
                                        {" "}
                                        <FaHistory size={22} />
                                    </li>
                                    <li>
                                        <FaLaptopCode size={22} />
                                    </li>
                                    <li>
                                        {" "}
                                        <AiOutlineFundProjectionScreen
                                            size={22}
                                        />
                                    </li>
                                    <li>
                                        {" "}
                                        <TbFileCertificate size={22} />
                                    </li>
                                </ul>
                                <ul className="resume-ul">
                                    <li>
                                        <a
                                            id={
                                                isActiveEdu
                                                    ? "updatebackgroundcolor"
                                                    : ""
                                            }
                                            onClick={() => {
                                                // 👇️ toggle isActive state on click
                                                setIsActiveEdu(
                                                    (current) => !current
                                                );
                                                setIsActiveprogram(false);
                                                setIsActivework(false);
                                                setIsActiveproj(false);
                                                setIsActivecerti(false);
                                                scrollToSection("Sec1");
                                            }}
                                        >
                                            Education
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            id={
                                                isActivework
                                                    ? "updatebackgroundcolor"
                                                    : ""
                                            }
                                            onClick={() => {
                                                // 👇️ toggle isActive state on click

                                                setIsActivework(
                                                    (current) => !current
                                                );
                                                setIsActiveprogram(false);
                                                setIsActiveEdu(false);
                                                setIsActiveproj(false);
                                                setIsActivecerti(false);
                                                scrollToSection("Sec2");
                                            }}
                                        >
                                            Work History
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            id={
                                                isActiveprogra
                                                    ? "updatebackgroundcolor"
                                                    : ""
                                            }
                                            onClick={() => {
                                                // 👇️ toggle isActive state on click

                                                setIsActiveprogram(
                                                    (current) => !current
                                                );
                                                setIsActiveEdu(false);
                                                setIsActivework(false);
                                                setIsActiveproj(false);
                                                setIsActivecerti(false);
                                                scrollToSection("Sec3");
                                            }}
                                        >
                                            Programming Skills
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            id={
                                                isActiveproj
                                                    ? "updatebackgroundcolor"
                                                    : ""
                                            }
                                            onClick={() => {
                                                // 👇️ toggle isActive state on click

                                                setIsActiveproj(
                                                    (current) => !current
                                                );
                                                setIsActiveprogram(false);
                                                setIsActivework(false);
                                                setIsActiveEdu(false);
                                                setIsActivecerti(false);
                                                scrollToSection("Sec4");
                                            }}
                                        >
                                            Projects
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            id={
                                                isActivecerti
                                                    ? "updatebackgroundcolor"
                                                    : ""
                                            }
                                            onClick={() => {
                                                // 👇️ toggle isActive state on click

                                                setIsActivecerti(
                                                    (current) => !current
                                                );
                                                setIsActiveprogram(false);
                                                setIsActivework(false);
                                                setIsActiveproj(false);
                                                setIsActiveEdu(false);
                                                scrollToSection("Sec5");
                                            }}
                                        >
                                            Certificates
                                        </a>
                                    </li>
                                </ul>
                            </Col>

                            <Col>
                                <div className="resume-right-side">
                                    <div
                                        style={{
                                            display: "inline-block",
                                            width: "40rem",
                                            height: "25rem",
                                            overflowX: "hidden",
                                            overflowY: "hidden",
                                            scrollBehavior: "smooth",
                                        }}
                                    >
                                        <div className="resume-right-sec1">
                                            <ul
                                                className="edu main"
                                                style={{
                                                    listStyleType: "none",
                                                }}
                                            >
                                                <li>
                                                    <div
                                                        className="edu-name-data"
                                                        id="Sec1"
                                                    >
                                                        <li>
                                                            Krishna Engineering
                                                            College
                                                            <span className="edu-time">
                                                                {" "}
                                                                2019-2023
                                                            </span>
                                                        </li>
                                                        <div className="edu-info">
                                                            <span className="edu-from">
                                                                Bachelor of
                                                                Technology-
                                                                <b>IT</b>
                                                            </span>
                                                            <span className="grades">
                                                                8.31 sgpa
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="edu-name-data">
                                                        <li>
                                                            Nav Jeevan Mission
                                                            School&nbsp;
                                                            <span className="edu-time">
                                                                {" "}
                                                                2017-2018
                                                            </span>
                                                        </li>
                                                        <div className="edu-info">
                                                            <span className="edu-from">
                                                                intermediate{" "}
                                                                <b>(cbse)</b>
                                                            </span>
                                                            <span className="grades">
                                                                84 %
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="edu-name-data">
                                                        <li>
                                                            Sri Sai Convent
                                                            School&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            <span className="edu-time">
                                                                {" "}
                                                                2015-2016
                                                            </span>
                                                        </li>
                                                        <div className="edu-info">
                                                            <span className="edu-from">
                                                                High school{" "}
                                                                <b>(cbse)</b>
                                                            </span>
                                                            <span className="grades">
                                                                9.6 cgpa
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="resume-right-sec2"
                                            id="Sec2"
                                        >
                                            <div className="work-history-main">
                                                <div className="company-name-time">
                                                    <div className="work-company-name1">
                                                        CrossTower India
                                                    </div>
                                                    <div className="work-company-time">
                                                        <span className="work-from">
                                                            20-Aug
                                                        </span>
                                                        -
                                                        <span className="work-to">
                                                            Present
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="work-type">
                                                    MERN Stack Developer-Intern
                                                </div>
                                                <div className="work-description">
                                                    <ol className="work-ol">
                                                        <li>
                                                            Work with the
                                                            development team and
                                                            product manager for
                                                            implementation of
                                                            software solution
                                                        </li>
                                                        <li>
                                                            Work with the
                                                            development team and
                                                            product manager for
                                                            implementation of
                                                            software solutio
                                                        </li>
                                                        <li>
                                                            Work with the
                                                            development team and
                                                            product manager for
                                                            implementation of
                                                            software solutio
                                                        </li>
                                                    </ol>
                                                </div>
                                                <div className="company-name-time">
                                                    <div className="work-company-name2">
                                                        TwO WaiTs
                                                    </div>
                                                    <div className="work-company-time">
                                                        <span className="work-from">
                                                            01-Jun
                                                        </span>
                                                        -
                                                        <span className="work-to">
                                                            30-Jun
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="work-type">
                                                    TATHASTU DSA SCHOLAR INTERN
                                                </div>
                                                <div className="work-description">
                                                    <ol className="work-ol">
                                                        <li>
                                                            DSA CPP Google Forms
                                                        </li>
                                                        <li>
                                                            It was the
                                                            task-based learning
                                                            internship which
                                                            help in
                                                            understanding the
                                                            concepts of data
                                                            structures and
                                                            algorithm and solved
                                                            multiple problems.
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="resume-right-sec3"
                                            id="Sec3"
                                        >
                                            <div className="skills">
                                                <div className="skill1">
                                                    <div className="skill-details">
                                                        <div className="skill-icon">
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
                                                                title="C"
                                                                alt="C"
                                                                width="40"
                                                                height="40"
                                                            />
                                                        </div>
                                                        <div className="skill-name">
                                                            C/C++
                                                        </div>
                                                    </div>
                                                    <div className="skill-progress"></div>
                                                </div>
                                                <div className="skill2">
                                                    <div className="skill-details">
                                                        <div className="skill-icon">
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                                                                title="C"
                                                                alt="C"
                                                                width="40"
                                                                height="40"
                                                            />
                                                        </div>
                                                        <div className="skill-name">
                                                            HTML
                                                        </div>
                                                    </div>
                                                    <div className="skill-progress"></div>
                                                </div>
                                                <div className="skill3">
                                                    <div className="skill-details">
                                                        <div className="skill-icon">
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                                                                title="C"
                                                                alt="C"
                                                                width="40"
                                                                height="40"
                                                            />
                                                        </div>
                                                        <div className="skill-name">
                                                            CSS
                                                        </div>
                                                    </div>
                                                    <div className="skill-progress"></div>
                                                </div>
                                                <div className="skill4">
                                                    <div className="skill-details">
                                                        <div className="skill-icon">
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                                                                title="C"
                                                                alt="C"
                                                                width="40"
                                                                height="40"
                                                            />
                                                        </div>
                                                        <div className="skill-name">
                                                            JavaScript
                                                        </div>
                                                    </div>
                                                    <div className="skill-progress"></div>
                                                </div>
                                                <div className="skill5">
                                                    <div className="skill-details">
                                                        <div className="skill-icon">
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                                                title="C"
                                                                alt="C"
                                                                width="40"
                                                                height="40"
                                                            />
                                                        </div>
                                                        <div className="skill-name">
                                                            ReactJS
                                                        </div>
                                                    </div>
                                                    <div className="skill-progress"></div>
                                                </div>
                                                <div className="skill6">
                                                    <div className="skill-details">
                                                        <div className="skill-icon">
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                                                                title="C"
                                                                alt="C"
                                                                width="40"
                                                                height="40"
                                                            />
                                                        </div>
                                                        <div className="skill-name">
                                                            NodeJS
                                                        </div>
                                                    </div>
                                                    <div className="skill-progress"></div>
                                                </div>
                                                <div className="skill7">
                                                    <div className="skill-details">
                                                        <div className="skill-icon">
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                                                                title="C"
                                                                alt="C"
                                                                width="70"
                                                                height="20"
                                                            />
                                                        </div>
                                                        <div className="skill-name">
                                                            ExpressJS
                                                        </div>
                                                    </div>
                                                    <div className="skill-progress"></div>
                                                </div>
                                                <div className="skill8">
                                                    <div className="skill-details">
                                                        <div className="skill-icon">
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
                                                                title="C"
                                                                alt="C"
                                                                width="70"
                                                                height="20"
                                                            />
                                                        </div>
                                                        <div className="skill-name">
                                                            MongoDB
                                                        </div>
                                                    </div>
                                                    <div className="skill-progress"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="resume-right-sec4">
                                            <div className="project-main">
                                                <div className="project-name-time">
                                                    <div
                                                        className="project-name"
                                                        id="Sec4"
                                                    >
                                                        Demonstration WebApp for
                                                        Internship
                                                    </div>
                                                    <div className="project-time">
                                                        <span className="project-from">
                                                            20-Aug
                                                        </span>
                                                        &nbsp; - &nbsp;
                                                        <span className="project-to">
                                                            Present
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="project-tect-use">
                                                    Technologies Used:MongoDB,
                                                    ExpressJS, ReactJs, NodeJS;
                                                </div>
                                                <div className="project-description">
                                                    <p>
                                                        Create a platform that
                                                        helps in learning new
                                                        technologies like
                                                        Blockchain, Metaverse,
                                                        AR/VR and AI/ML
                                                    </p>
                                                </div>
                                                <div className="project-name-time">
                                                    <div
                                                        className="project-name"
                                                        id="Sec4"
                                                    >
                                                        Personal Portfolio
                                                        Website
                                                    </div>
                                                    <div className="project-time">
                                                        <span className="project-from">
                                                            25-Nov
                                                        </span>
                                                        &nbsp; - &nbsp;
                                                        <span className="project-to">
                                                            02-Dec
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="project-tect-use">
                                                    Technologies Used:ReactJS,
                                                    Bootstrap
                                                </div>
                                                <div className="project-description">
                                                    <p>
                                                        A personal Portfolio
                                                        website to showcase all
                                                        my details and projects
                                                        at one place.
                                                    </p>
                                                </div>
                                                <div className="project-name-time">
                                                    <div className="project-name">
                                                        Pizza Website
                                                    </div>
                                                    <div className="project-time">
                                                        <span className="project-from">
                                                            12-Sep
                                                        </span>
                                                        &nbsp; - &nbsp;
                                                        <span className="project-to">
                                                            30-Oct
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="project-tect-use">
                                                    Technologies Used:MongoDB,
                                                    ExpressJS, ReactJs, NodeJS;
                                                </div>
                                                <div className="project-description">
                                                    <p>
                                                        Pizza's selling website
                                                        on which user can create
                                                        their account and order
                                                        the pizza's for
                                                        temproray purpuse Stripe
                                                        payment method i used to
                                                        make payment.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="resume-right-sec5"
                                            id="Sec5"
                                        >
                                            <div className="certifates-collections">
                                                {/* <div className="course-type-heading">
                                                Course Certificate's
                                            </div>
                                            <div className="courses-certificates">
                                            
                                            </div>
                                            <div className="course-type-heading">
                                                Hackathon Certificate
                                            </div>
                                            <div className="hackathon-and-other">
                    
                                            </div> */}
                                                <ul className="list-of-certificates">
                                                    List Of Certificates:
                                                    {certificatesdata.map(
                                                        (value) => (
                                                            <li className="list-of-certificate">
                                                                <a
                                                                    key={
                                                                        value.id
                                                                    }
                                                                    href={`${value.image}`}
                                                                    download={`${value.image}`}
                                                                >
                                                                    {value.name}
                                                                </a>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </motion.div>
        </div>
    );
};

export default Resume;
