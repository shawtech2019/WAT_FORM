import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"; // ✅ Import toast

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Images from "../components/constants/Images";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // const response = await axios.post(
      //   "http://localhost:9000/api/register",
      //   formData
      // );
      const response = await axios.post("/api/register", formData);
      // const response = await axios.post("http://localhost:9000/api/register", formData);



      console.log("Registration successful:", response.data);

      toast.success("Registration successful! ");
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting registration:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-red-200 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
        {/* Company Logo */}
        <img src={Images.Logo} alt="Company Logo" className="h-16 mb-8" />

        {/* Heading */}
        <h1 className="text-3xl font-bold font-lato text-[#5f0407] text-center mb-4">
          WinesAndThings Wine Tasting Event 2025
        </h1>
        <p className="text-gray-600 font-inter text-[14px] text-center mb-6">
          Experience the WinesAndThings Wine Tasting Event 2025, where wine
          lovers, food enthusiasts, and friends come together to enjoy fine
          vintages, delicious pairings, and unforgettable moments. Secure your
          seat and be part of this special celebration.
        </p>

        {/* Registration Form */}
        {submitted ? (
          <div className="text-center text-green-600 font-semibold">
            ✅ Thank you for registering!
            <p className="mt-2">We look forward to seeing you at the event.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <label className="block text-sm font-inter font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-inter font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-inter font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-inter font-medium mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-[1.5rem] bg-[#5f0407] text-white font-inter py-2 rounded-lg hover:bg-[#89202c] transition"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        )}

        {/* Footer */}
        <div className="mt-8">
          <h2 className="text-[18px] text-gray-500 text-center mb-8">
            Follow us on
          </h2>
          <div className="flex justify-center items-center gap-4 mb-4">
            <Link
              to="https://web.facebook.com/profile.php?id=61559591504423"
              className="p-3 rounded-full border hover:border-[#5f0407] hover:shadow transition"
            >
              <FaFacebookF className="text-xl" color="#5f0407" />
            </Link>
            <Link
              to="https://www.instagram.com/winesandthingslimited/§"
              className="p-3 rounded-full border hover:border-[#5f0407] hover:shadow transition"
            >
              <FaInstagram className="text-xl" color="#5f0407" />
            </Link>
            <Link
              to="https://x.com/winesandthings"
              className="p-3 rounded-full border hover:border-[#5f0407] hover:shadow transition"
            >
              <FaXTwitter className="text-xl" color="#5f0407" />
            </Link>
            <Link
              to="https://www.tiktok.com/@winesandthings"
              className="p-3 rounded-full border hover:border-[#5f0407] hover:shadow transition"
            >
              <FaTiktok className="text-xl" color="#5f0407" />
            </Link>
          </div>
        </div>
      </div>

      {/* Toastify Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default RegistrationForm;
