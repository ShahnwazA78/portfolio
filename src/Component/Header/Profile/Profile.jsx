import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import "./Profile.css";
import { scrollToSection } from "../../utils/helpers";

const Profile = () => {
  return (
      <div
          className="profile-container"
          id="home"
      >
          <div className="profile-parent">
              {/* profile parent */}
              <div className="profile-details">
                  <div className="colz">
                      <div className="colz-icons">
                          <a
                              href="https://github.com/ShahnwazA78"
                              target="_blank"
                          >
                              <FaGithub />
                          </a>
                          <a
                              href="https://www.linkedin.com/in/shahnwaz-ansari/"
                              target="_blank"
                          >
                              <FaLinkedin />
                          </a>
                          <a href="https://www.instagram.com/shahnwaz.78/">
                              <FaInstagram />
                          </a>
                          <a href="https://www.facebook.com/shahnwaz.78">
                              <FaFacebook />
                          </a>
                      </div>
                  </div>

                  <div className="profile-details-name">
                      <span className="primary-text">
                          Hello I'm{" "}
                          <span className="highlighted-text">Shahnwaz</span>
                      </span>
                  </div>

                  <div className="profile-details-role">
                      <span className="primary-text">
                          <h1>
                              <TypeAnimation
                                  sequence={[
                                      "MERN Stack Developer 🌐", // Types 'One'
                                      1000, // Waits 1s
                                      "Programmer 💻", // Deletes 'One' and types 'Two'
                                      1000, // Waits 2s
                                      "Coder 🔴", // Types 'Three' without deleting 'Two'
                                      1000,
                                      () => {
                                          console.log("Done typing!"); // Place optional callbacks anywhere in the array
                                      },
                                  ]}
                                  wrapper="div"
                                  cursor={true}
                                  repeat={Infinity}
                                  style={{ fontSize: ".5em" }}
                              />
                          </h1>
                          <span className="profile-role-tagline">
                              Final Year B.tech Student Information Technology
                              Currently working on DSA & Development.
                          </span>
                      </span>
                  </div>

                  <div className="profile-options">
                      <button
                          className="btn-profile primary-btn"
                          onClick={() => scrollToSection("contact-me")}
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
              {/* profile parent */}
              <div className="profile-picture">
                  <div className="profile-picture-background"></div>
              </div>
          </div>
      </div>
  );
};

export default Profile;
