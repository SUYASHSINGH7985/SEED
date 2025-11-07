import React, { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",  // Changed from 'username' to 'email'
    password: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Send request to the backend to verify the password
      const apiUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:5002";
      const response = await fetch(`${apiUrl}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("SignIn Response:", data, "Status:", response.status);

      if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("token", data.token); // Store JWT if applicable
        window.location.href = "/dashboard"; // Redirect after login
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("SignIn Error:", error);
      setError("Network error. Please check if the backend server is running on port 5002.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#686179]">
      <div className="w-[400px] p-10 flex flex-col justify-center bg-[#2B2638] rounded-xl shadow-lg">
        <h2 className="text-white text-2xl font-semibold mb-4">Sign In</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"  // Changed from 'text' to 'email'
            name="email"  // Changed from 'username' to 'email'
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#3C364B] text-white rounded-lg placeholder-[#666173] focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#3C364B] text-white rounded-lg placeholder-[#666173] focus:outline-none"
          />

          <div className="text-right">
            <a href="#" className="text-[#6D53B5] text-sm">Forgot Password?</a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-4 text-white text-lg rounded-lg transition ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#6D53B5] hover:bg-[#5A3EDF]"
            }`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>  
  );
};

export default SignIn;
