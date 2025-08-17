import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const StudentInfoForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-20 font-robot">
      <div
        className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8"
        data-aos="fade-up"
      >
        {/* Heading */}
        <h2
          className="text-2xl font-bold text-center mb-6"
          style={{ color: "#264186" }}
          data-aos="fade-down"
        >
          Student Information Form
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Name */}
          <div data-aos="fade-right">
            <label className="block font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264186] shadow-sm"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name */}
          <div data-aos="fade-left">
            <label className="block font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264186] shadow-sm"
              placeholder="Enter your last name"
            />
          </div>

          {/* Email */}
          <div data-aos="fade-right">
            <label className="block font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264186] shadow-sm"
              placeholder="Enter your email"
            />
          </div>

          {/* Contact */}
          <div data-aos="fade-left">
            <label className="block font-medium text-gray-700 mb-1">
              Contact
            </label>
            <input
              type="tel"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264186] shadow-sm"
              placeholder="Enter your contact number"
            />
          </div>

          {/* GPA */}
          <div data-aos="fade-right">
            <label className="block font-medium text-gray-700 mb-1">GPA</label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264186] shadow-sm"
              placeholder="Enter your GPA"
            />
          </div>

          {/* Interest Subject */}
          <div data-aos="fade-left">
            <label className="block font-medium text-gray-700 mb-1">
              Interest Subject
            </label>
            <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264186] shadow-sm">
              <option value="">Select a subject</option>
              <option value="IT">Information Technology</option>
              <option value="Engineering">Engineering</option>
              <option value="Medical">Medical</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center" data-aos="zoom-in">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
              style={{ backgroundColor: "#264186" }}
            >
              Submit <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentInfoForm;
