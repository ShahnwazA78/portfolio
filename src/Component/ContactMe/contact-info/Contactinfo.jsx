import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import "./contactinfo.css";

const Contactinfo = () => {
    return (
        <div className="contact-info-box">
            <h1>Get In Touch</h1>
            <h4>
                Feel free to contact me send your email here !
            </h4>
            <div className="contact">
                <div className="contact-option">
                    <FaPhoneAlt />
                    <span className="text">+91-9670528209</span>
                </div>
                <div className="contact-option">
                    <AiFillMail />
                    <span className="text">shahnwaza058@gmail.com</span>
                </div>
            </div>
        </div>
    );
};

export default Contactinfo;
