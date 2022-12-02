import React from "react";
import Section from "../Section/Section";
import Contactinfo from "./contact-info/Contactinfo";
import Form from "./form/Form";
import "./ContactMe.css";
const ContactMe = () => {
    return (
        <div className="contact-container" id="contact-me">
            <div className="contact-parent">
                <Section
                    title="Contact Me"
                    question="Feel free to contact me.."
                />
                <div className="contact-content-wraper">
                    <Contactinfo />
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
