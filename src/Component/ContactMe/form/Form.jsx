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
            {/* <form
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
            </form> */}
            <div className="container mx-auto pt-16">
                <div className="lg:flex">
                    <div className="form-container-form xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
                        <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                            <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
                                Get in touch
                            </h1>
                            <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
                                Got a question about me? Have some suggestions
                                or just want to say Hi?. Feel free to contact me
                                send your email here !
                            </p>
                            <div className="flex pb-4 items-center">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-phone-call"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#ffffff"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                        />
                                        <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                                        <path d="M15 7a2 2 0 0 1 2 2" />
                                        <path d="M15 3a6 6 0 0 1 6 6" />
                                    </svg>
                                </div>
                                <p className="pl-4 text-white text-base">
                                    +91-9670528209
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-mail"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#FFFFFF"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                        />
                                        <rect
                                            x={3}
                                            y={5}
                                            width={18}
                                            height={14}
                                            rx={2}
                                        />
                                        <polyline points="3 7 12 13 21 7" />
                                    </svg>
                                </div>
                                <p className="pl-4 text-white text-base">
                                    shahnwaza058@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="form-parent-container xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            id="queryForm"
                            className="bg-white py-4 px-8 rounded-tr rounded-br"
                        >
                            <h1 className="text-4xl text-gray-800 font-extrabold mb-6">
                                Enter Details
                            </h1>
                            <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                                <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                    <div className="flex flex-col">
                                        <label className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="from_name"
                                            className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                            placeholder="Name"
                                            id=""
                                            {...register("from_name", {
                                                required: "Name is required",
                                            })}
                                        />
                                        {errors.from_name?.message && (
                                            <p className="errors">
                                                {errors.from_name?.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                    <div className="flex flex-col">
                                        <label className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            name="reply_to"
                                            className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                            placeholder="Email"
                                            id=""
                                            {...register("reply_to", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message:
                                                        "Please enter valid email",
                                                },
                                            })}
                                        />
                                        {errors.reply_to?.message && (
                                            <p className="errors">
                                                {errors.reply_to?.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                                <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                    <div className="flex flex-col">
                                        <label className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            name="phone_number"
                                            className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                            placeholder="Phone"
                                            id=""
                                            {...register("phone_number", {
                                                required:
                                                    "Phone number is required",
                                                minLength: {
                                                    value: 8,
                                                    message:
                                                        "Phone number is not valid",
                                                },
                                            })}
                                        />
                                        {errors.phone_number?.message && (
                                            <p className="errors">
                                                {errors.phone_number?.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                    <div className="flex flex-col">
                                        <label className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                            placeholder="Subject"
                                            id=""
                                            {...register("subject", {
                                                required: "Subject is required",
                                                minLength: {
                                                    value: 10,
                                                    message:
                                                        "Minimum 10 characters required",
                                                },
                                            })}
                                        />
                                        {errors.subject?.message && (
                                            <p className="errors">
                                                {errors.subject?.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full mt-6">
                                <div className="flex flex-col">
                                    <label className="text-sm font-semibold text-gray-800 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        className="border-gray-300 border mb-1 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
                                        rows={8}
                                        name="message"
                                        placeholder="Your message"
                                        {...register("message", {
                                            required: "Message is required",
                                            minLength: {
                                                value: 20,
                                                message:
                                                    "Minimum 20 characters required",
                                            },
                                            maxLength: {
                                                value: 500,
                                                message:
                                                    "Maximum 500 characters allowed",
                                            },
                                        })}
                                    />
                                    {errors.message?.message && (
                                        <p className="errors1">
                                            {errors.message?.message}
                                        </p>
                                    )}
                                </div>
                                <button className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
