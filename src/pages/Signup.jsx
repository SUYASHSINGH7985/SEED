import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Signup = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.agreedToTerms) {
      alert("You must agree to the Terms & Conditions!");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5002/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      console.log("Signup Response:", data, "Status:", response.status);
      if (response.ok) {
        alert(data.message);
        navigate("/signin"); // Redirect to signin after success
      } else {
        alert(data.error || data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong. Please check if the backend server is running on port 5002.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#686179]">
      <div className="w-[900px] flex bg-[#2B2638] rounded-xl shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-6">
          <div className="h-full flex flex-col justify-between">
            <div className="h-[350px] relative">
              <img
                src="/assets/image1.svg"
                alt="Signup Illustration"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 text-white text-center p-0">
                <p className="text-3xl ">Dunes Shifts,</p>
                <p className="text-3xl ">Wealth Grows</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center bg-opacity-40 bg-[#2B2638] rounded-r-xl">
          <div className="mb-6">
            <h2 className="text-white text-2xl font-semibold">Create an account</h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-[#3C364B] text-white rounded-lg placeholder-[#666173] focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-[#3C364B] text-white rounded-lg placeholder-[#666173] focus:outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 bg-[#3C364B] text-white rounded-lg placeholder-[#666173] focus:outline-none"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 bg-[#3C364B] text-white rounded-lg placeholder-[#666173] focus:outline-none"
              required
            />

            {/* Terms & Conditions Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
                className="w-5 h-5 text-[#6D53B5] bg-gray-700 rounded-md focus:ring-0 focus:ring-offset-0"
                required
              />
              <label className="ml-2 text-gray-300">
                I agree to the <span className="text-[#625783] cursor-pointer">Terms & Conditions</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-4 bg-[#6D53B5] text-white text-lg rounded-lg hover:bg-[#5A3EDF] transition"
            >
              Create account
            </button>
          </form>

          <p className="text-gray-300 text-center mt-4">
            Already have an account?{" "}
            <span className="text-[#625783] cursor-pointer" onClick={() => navigate("/signin")}>Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
