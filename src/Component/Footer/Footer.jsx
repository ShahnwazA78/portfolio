import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import Social from "./social-icons/Social";
import "./Footer.css";
import { scrollToSection } from "../utils/helpers";
const Footersec = () => {
    return (
        <div className="footersec-container">
            <div className="social-icons">
                <Social
                    color="#0b83ee"
                    icon={<FaFacebook />}
                    link="https://www.facebook.com/shahnwaz.78"
                />
                <Social
                    color="#0D2636"
                    icon={<FaGithub />}
                    link="https://github.com/ShahnwazA78"
                />
                <Social
                    color="#E84C88"
                    icon={<FaInstagram />}
                    link="https://www.instagram.com/shahnwaz.78/"
                />
                <Social
                    color="#0A66C2"
                    icon={<FiLinkedin />}
                    link="https://www.linkedin.com/in/shahnwaz-ansari/"
                />
            </div>
            <div className="bottom-bar">
                <div className="copyright-text">
                    ©️ Copyright 2022 Shahnwaz Ansari| All Rights Reserved
                </div>
            </div>
        </div>
    );
};

export default Footersec;
