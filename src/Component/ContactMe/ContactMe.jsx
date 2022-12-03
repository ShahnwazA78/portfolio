import React from "react";
import Section from "../Section/Section";
import Contactinfo from "./contact-info/Contactinfo";
import Form from "./form/Form";
import { motion } from "framer-motion";

import "./ContactMe.css";
const ContactMe = () => {
    return (
        <div
            className="contact-container"
            id="contact-me"
        >
            <div className="contact-parent">
                <motion.div
                    viewport={{ once: false }}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "easeIn", duration: 0.7, delay: 0.15 }}
                >
                    <Section
                        title="Contact Me"
                        question="Feel free to contact me.."
                    />
                    <div className="contact-content-wraper">
                        {/* <Contactinfo /> */}
                        <Form />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactMe;
