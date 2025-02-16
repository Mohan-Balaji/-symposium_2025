import React, { useState } from "react";
import Background from "../Components/Background/Background";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`);
    setFormData({ email: "", subject: "", message: "" });
  };

  return (
    <div className="relative">
      {/* Contact Form Section */}
      <div className="relative z-10 container mx-auto p-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">R.M.D. Engineering College</h1>
          <p>Kavaraipettai, Thiruvallur District, Tamil Nadu 601206</p>
          <a href="#" className="text-blue-600 hover:underline">Bus Routes</a>
        </div>

        {/* Coordinators Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Faculty Coordinators</h2>
            <p>Mrs. Badi Alekhya, ASSOCIATE PROFESSOR</p>
            <p>Mrs. REMYA ROSE, ASSISTANT PROFESSOR</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md col-span-2">
            <h2 className="text-xl font-semibold mb-4">Student Coordinators</h2>
            <p>ABISHEK N, ANNAMALAI K, KHAUSHIK YAHAV M S, VIVARAS S</p>
          </div>
        </div>

        {/* Query Contact */}
        <div className="text-center mt-8">
          <p>
            For Queries:{" "}
            <a href="mailto:avinyaa@rmd.ac.in" className="text-blue-600 hover:underline">
              upcomming@rmd.ac.in
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center mt-8">
          <div className="w-full max-w-md bg-white/50 shadow-lg rounded-lg p-6 backdrop-blur-lg">
            <h2 className="mb-3 text-2xl font-bold text-center text-black-900">Contact Us</h2>
            <p className="mb-4 text-center text-gray-700 text-sm">
              Have a question? Reach out and we'll respond soon.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md text-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md text-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md text-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Type your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background Component - Behind the Contact Section */}
      <Background className="absolute inset-0 -z-10" />
    </div>
  );
}
