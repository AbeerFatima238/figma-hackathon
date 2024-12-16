import { ChevronRight, Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const Contact = () => {
    return (
        <div className="w-full">
            {/* Contact Section */}
            <div className="relative w-full h-[316px] mx-auto">
                {/* Background Image */}
                <Image
                    className="absolute top-0 left-0 object-cover w-full h-full"
                    height={316}
                    width={1440}
                    src="/shop-bg.png"
                    alt="Background"
                />
                {/* Content Wrapper */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-0">
                    {/* Pic Image */}
                    <Image
                        className="mb-4"
                        width={77}
                        height={77}
                        src="/logo.png"
                        alt="Logo"
                    />
                    {/* Contact Text */}
                    <h1 className="font-[Poppins] font-medium text-5xl leading-[72px] sm:text-4xl sm:leading-[56px]">
                        Contact
                    </h1>
                    {/* Breadcrumb */}
                    <div className="flex items-center mt-4 space-x-2 font-[Poppins] font-light text-base sm:text-sm">
                        <h1 className="text-black">Home</h1>
                        <ChevronRight />
                        <h1 className="text-black">Contact</h1>
                    </div>
                </div>
            </div>

            {/* Get In Touch Section */}
            <div className="w-full h-auto mt-[100px] flex flex-col items-center text-center px-4 sm:px-0">
                {/* Get In Touch Text */}
                <h1 className="font-[Poppins] font-semibold text-4xl leading-[54px] text-[#000000] sm:text-2xl">
                    Get In Touch With Us
                </h1>
                {/* Additional Info Text */}
                <p className="mt-4 font-[Poppins] font-normal text-base text-[#9F9F9F] max-w-[644px] sm:text-sm sm:max-w-full">
                    For more information about our product & services, please feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
                </p>
            </div>

            {/* Contact Section with Flex Layout for Both Contact Details and Form */}
            <div className="w-full h-auto mt-[50px] flex flex-col sm:flex-row justify-center items-center sm:space-x-16 px-4 sm:px-10 space-y-10 sm:space-y-0">
                {/* Contact Details Section */}
                <div className="w-full sm:w-[393px] space-y-8">
                    {/* Address */}
                    <div className="flex items-start space-x-4">
                        <MapPin />
                        <div>
                            <h1 className="font-[Poppins] font-medium text-2xl leading-[36px] text-[#000000] sm:text-xl">
                                Address
                            </h1>
                            <p className="mt-2 font-[Poppins] font-normal text-base text-[#000000] text-left sm:pl-[32px]">
                                236 5th SE Avenue, <br />
                                New York, NY10000 <br />
                                United States
                            </p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                        <Phone />
                        <div>
                            <h1 className="font-[Poppins] font-medium text-2xl leading-[36px] text-[#000000] sm:text-xl">
                                Phone
                            </h1>
                            <p className="mt-2 font-[Poppins] font-normal text-base text-[#000000] text-left sm:pl-[32px]">
                                Mobile: +(84) 546-6789 <br />
                                Hotline: +(84) 456-6789
                            </p>
                        </div>
                    </div>

                    {/* Working Time */}
                    <div className="flex items-start space-x-4">
                        <Clock />
                        <div>
                            <h1 className="font-[Poppins] font-medium text-2xl leading-[36px] text-[#000000] sm:text-xl">
                                Working Time
                            </h1>
                            <p className="mt-2 font-[Poppins] font-normal text-base text-[#000000] text-left sm:pl-[32px]">
                                Monday-Friday: 9:00 - 22:00 <br />
                                Saturday-Sunday: 9:00 - 21:00
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="w-full sm:w-[531px] space-y-4">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block font-[Poppins] font-medium text-lg text-[#000000] sm:text-base">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="w-full mt-2 p-4 border border-[#9F9F9F] rounded-[10px] text-center sm:text-sm"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block font-[Poppins] font-medium text-lg text-[#000000] sm:text-base">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full mt-2 p-4 border border-[#9F9F9F] rounded-[10px] text-center sm:text-sm"
                        />
                    </div>

                    {/* Subject Field */}
                    <div>
                        <label htmlFor="subject" className="block font-[Poppins] font-medium text-lg text-[#000000] sm:text-base">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="Enter subject"
                            className="w-full mt-2 p-4 border border-[#9F9F9F] rounded-[10px] text-center sm:text-sm"
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block font-[Poppins] font-medium text-lg text-[#000000] sm:text-base">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="Type your message"
                            className="w-full mt-2 p-4 border border-[#9F9F9F] rounded-[10px] text-center sm:text-sm"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-4 bg-black text-white rounded-[15px] hover:bg-gray-800"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
