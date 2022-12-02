import React from "react";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./form.css";
const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        send("service_62xg60i", "template_zchmhbd", data, "DZ0ly76TW8CpsNg8J")
            .then((response) => {
                console.log("Success!", response.status, response.text);
                formSuccess();
            })
            .catch((err) => {
                console.log("Failed", err);
            });
    };
    const formSuccess = () => {
        toast("Your Message Sent Successfully!");
        document.getElementById("queryForm").reset();
    };
    return (
        <div className="query-form">
            <ToastContainer />
            <form
                id="queryForm"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="input-field">
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Name"
                        id=""
                        {...register("from_name", {
                            required: "Name is required",
                        })}
                    />
                    {errors.from_name?.message && (
                        <p className="errors">{errors.from_name?.message}</p>
                    )}
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        name="reply_to"
                        placeholder="Email"
                        id=""
                        {...register("reply_to", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please enter valid email",
                            },
                        })}
                    />
                    {errors.reply_to?.message && (
                        <p className="errors">{errors.reply_to?.message}</p>
                    )}
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        name="phone_number"
                        placeholder="Phone"
                        id=""
                        {...register("phone_number", {
                            required: "Phone number is required",
                            minLength: {
                                value: 8,
                                message: "Phone number is not valid",
                            },
                        })}
                    />
                    {errors.phone_number?.message && (
                        <p className="errors">{errors.phone_number?.message}</p>
                    )}
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        id=""
                        {...register("subject", {
                            required: "Subject is required",
                            minLength: {
                                value: 10,
                                message: "Minimum 10 characters required",
                            },
                        })}
                    />
                    {errors.subject?.message && (
                        <p className="errors">{errors.subject?.message}</p>
                    )}
                </div>
                <div className="input-field full-width">
                    <textarea
                        className="textarea"
                        name="message"
                        placeholder="Your message"
                        {...register("message", {
                            required: "Message is required",
                            minLength: {
                                value: 20,
                                message: "Minimum 20 characters required",
                            },
                            maxLength: {
                                value: 500,
                                message: "Maximum 500 characters allowed",
                            },
                        })}
                    />
                    {errors.message?.message && (
                        <p className="errors">{errors.message?.message}</p>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
