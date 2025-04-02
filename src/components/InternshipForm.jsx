import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    age: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    collegeName: "",
    schoolAddress: "",
    year: "",
    skills: "",
    applicationReason: "",
    achievements: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  // Animation setup
  const formAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }, // Form comes in smoothly from below
    exit: { opacity: 0, y: -50 }, // Form exits upwards if needed
    transition: { duration: 0.5, ease: "easeInOut" }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-6">
      <div className="max-w-3xl w-full bg-black">
        <h2 className="text-center text-[#19A483] text-xl font-semibold underline mb-1">
          Application for Internship
        </h2>

        {/* Form Section with animation */}
        <motion.div
          initial={formAnimation.initial}
          animate={formAnimation.animate}
          exit={formAnimation.exit}
          transition={formAnimation.transition}
        >
          <form onSubmit={handleSubmit} className="space-y-3 p-6 rounded-lg shadow-lg">
            {/* Personal Information */}
            <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="p-2 bg-[#3C3A3A] rounded text-white w-full"
              />
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
                className="p-2 bg-[#3C3A3A] rounded text-white w-full"
              />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="p-2 bg-[#3C3A3A] rounded text-white w-full"
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="p-2 bg-[#3C3A3A] rounded text-white w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="p-2 bg-[#3C3A3A] rounded text-white w-full"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone No."
                value={formData.phone}
                onChange={handleChange}
                className="p-2 bg-[#3C3A3A] rounded text-white w-full"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="p-2 bg-[#3C3A3A] rounded text-white w-full"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="p-2 bg-[#3C3A3A] rounded text-white w-full"
              />
            </div>

            {/* Education Section */}
            <h3 className="text-lg font-semibold border-b pb-2">Education</h3>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="collegeName"
                placeholder="Name of College"
                value={formData.collegeName}
                onChange={handleChange}
                className="p-2 bg-[#3C3A3A] rounded text-white w-full"
              />
              <input
                type="text"
                name="schoolAddress"
                placeholder="Address of School"
                value={formData.schoolAddress}
                onChange={handleChange}
                className="p-2 bg-[#3C3A3A] rounded text-white w-full"
              />
              <input
                type="text"
                name="year"
                placeholder="Year"
                value={formData.year}
                onChange={handleChange}
                className="p-2 bg-[#3C3A3A] rounded text-white w-full"
              />
              <textarea
                name="skills"
                placeholder="Skills"
                value={formData.skills}
                onChange={handleChange}
                className="p-2 bg-[#3C3A3A] rounded text-white w-full h-20"
              ></textarea>
              <textarea
                name="applicationReason"
                placeholder="What do you want to apply for?"
                value={formData.applicationReason}
                onChange={handleChange}
                className="p-2 bg-[#3C3A3A] rounded text-white w-full h-20"
              ></textarea>
              <textarea
                name="achievements"
                placeholder="Paste the links to your achievements"
                value={formData.achievements}
                onChange={handleChange}
                className="p-2 bg-[#3C3A3A] rounded text-white w-full h-20"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#5200D5] hover:bg-purple-700 text-white py-2 px-6 rounded-lg font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default InternshipForm;
