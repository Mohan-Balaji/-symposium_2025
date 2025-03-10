import React, { useState } from "react";
import { Client, Databases, ID } from "appwrite";
import { useNavigate } from "react-router-dom";
import Background from "../../Components/Background/Background";
import Footer from "../../Components/Footer/Footer";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("67ade4e40007694597b2"); // Replace with your Appwrite project ID

const databases = new Databases(client);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook to handle navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await databases.createDocument(
        "67ade576002feb5a7f7d", // Database ID
        "67b2d093000ba445a600", // Collection ID
        ID.unique(),
        formData
      );

      setFormData({ name: "", number: "", email: "", subject: "", message: "" });
      // Redirect to the confirmation page after success
      navigate("/confirmation");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen overflow-y-auto z-10 relative">
      <div className="flex flex-col items-center min-h-screen w-full z-10 relative mx-auto ">
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('/mnt/data/image.png')" }}
        >
          <div className="relative">
            <div className="relative z-10 container mx-auto p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold">R.M.D. Engineering College</h1>
                <p>Kavaraipettai, Thiruvallur District, Tamil Nadu 601206</p>
                <a href="#" className="text-blue-600 hover:underline">
                  Bus Routes
                </a>
              </div>

              <div className="text-center mt-8">
                <p>
                  For Queries:{" "}
                  <a href="mailto:upcomming@rmd.ac.in" className="text-blue-600 hover:underline">
                    upcomming@rmd.ac.in
                  </a>
                </p>
              </div>

              <div className="flex justify-center mt-8">
                <div className="w-full max-w-md bg-white/50 shadow-lg rounded-lg p-6 backdrop-blur-lg">
                  <h2 className="mb-3 text-2xl font-bold text-center text-black-900">
                    Contact Us
                  </h2>
                  <p className="mb-4 text-center text-gray-700 text-sm">
                    Have a question? Reach out and we'll respond soon.
                  </p>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md text-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                        Your Number
                      </label>
                      <input
                        type="tel"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md text-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your number"
                        required
                      />
                    </div>

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
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>

              {/* Student Coordinators Section */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-center">Student Coordinators</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white p-4 shadow-lg rounded-md">
                    <h4 className="font-bold text-lg">John Doe</h4>
                    <p>Email: johndoe@email.com</p>
                    <p>Phone: (555) 123-4567</p>
                  </div>
                  <div className="bg-white p-4 shadow-lg rounded-md">
                    <h4 className="font-bold text-lg">Jane Smith</h4>
                    <p>Email: janesmith@email.com</p>
                    <p>Phone: (555) 234-5678</p>
                  </div>
                  <div className="bg-white p-4 shadow-lg rounded-md">
                    <h4 className="font-bold text-lg">Michael Brown</h4>
                    <p>Email: michaelbrown@email.com</p>
                    <p>Phone: (555) 345-6789</p>
                  </div>
                  <div className="bg-white p-4 shadow-lg rounded-md">
                    <h4 className="font-bold text-lg">Emily White</h4>
                    <p>Email: emilywhite@email.com</p>
                    <p>Phone: (555) 456-7890</p>
                  </div>
                  <div className="bg-white p-4 shadow-lg rounded-md">
                    <h4 className="font-bold text-lg">David Johnson</h4>
                    <p>Email: davidjohnson@email.com</p>
                    <p>Phone: (555) 567-8901</p>
                  </div>
                  <div className="bg-white p-4 shadow-lg rounded-md">
                    <h4 className="font-bold text-lg">Sarah Lee</h4>
                    <p>Email: sarahlee@email.com</p>
                    <p>Phone: (555) 678-9012</p>
                  </div>
                </div>
              </div>
            </div>

            <Background className="absolute inset-0 -z-10" />
          </div>
        </div>
        <div className="w-full py-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}
