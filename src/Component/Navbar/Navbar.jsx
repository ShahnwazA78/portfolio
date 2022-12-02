import React, { useState } from "react";
import "./Navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { scrollToSection } from "../utils/helpers";
import { Link } from "react-router-dom";
const Navbarmain = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBg = () => {
        if (window.scrollY >= 40) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", changeBg);

    const [sidebar, setSidebar] = useState("none");
    const showSidebar = () => {
        if (sidebar === "none") {
            setSidebar("block");
        } else {
            setSidebar("none");
        }
        console.log("in nav");
    };
    const hideSidebar = () => {
        setSidebar("none");
    };

    return (
        <div className="navbar-container">
            <div className="navbar-parent">
                <Navbar
                    className={navbar ? "scroll fixed-top" : "fixed-top"}
                    variant="dark"
                    expand="lg"
                >
                    <Container className="navbar-main">
                        <div>
                            <Navbar.Brand
                                className="highlighted-name"
                                onClick={() => scrollToSection("home")}
                            >
                                Shahnwaz Ansari !
                            </Navbar.Brand>
                        </div>
                        <div>
                            <Navbar.Toggle
                                aria-controls="basic-navbar-nav"
                                onClick={showSidebar}
                            />
                            <Navbar.Collapse
                                id="basic-navbar-nav"
                                style={{ display: sidebar }}
                            >
                                <Nav className="navbar-main-items me-auto">
                                    <Nav.Link
                                        onClick={() => {
                                            scrollToSection("home");
                                            hideSidebar();
                                        }}
                                    >
                                        Home
                                    </Nav.Link>
                                    <Nav.Link
                                        onClick={() => {
                                            scrollToSection("about");
                                            hideSidebar();
                                        }}
                                    >
                                        About
                                    </Nav.Link>
                                    <Nav.Link
                                        onClick={() => {
                                            scrollToSection("project");
                                            hideSidebar();
                                        }}
                                    >
                                        Project
                                    </Nav.Link>
                                    {/* <Nav.Link
                                            onClick={() =>
                                                scrollToSection("skill")
                                            }
                                        >
                                            Skills
                                        </Nav.Link> */}
                                    <Nav.Link
                                        onClick={() => {
                                            scrollToSection("resume");
                                            hideSidebar();
                                        }}
                                    >
                                        Resume
                                    </Nav.Link>
                                    <Nav.Link
                                        onClick={() => {
                                            scrollToSection("contact-me");
                                            hideSidebar();
                                        }}
                                    >
                                        Contact Me
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Navbarmain;
