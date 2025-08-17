import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const CollaborationForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-20 font-robot">
      <div
        className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8"
        data-aos="fade-up"
      >
        {/* Heading */}
        <h2
          className="text-2xl font-bold text-center mb-6"
          style={{ color: "#264186" }}
          data-aos="fade-down"
        >
          Collaboration Request Form
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Institution Name */}
          <div data-aos="fade-right">
            <label className="block font-medium text-gray-700 mb-1">
              Institution Name
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264186] shadow-sm"
              placeholder="Enter institution name"
            />
          </div>

          {/* Country */}
          <div data-aos="fade-left">
            <label className="block font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264186] shadow-sm"
              placeholder="Enter country"
            />
          </div>

          {/* Contact Person & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-right">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Contact Person
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264186] shadow-sm"
                placeholder="Enter contact person name"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264186] shadow-sm"
                placeholder="Enter email address"
              />
            </div>
          </div>

          {/* Types of Programs Offered */}
          <div data-aos="fade-left">
            <label className="block font-medium text-gray-700 mb-1">
              Types of Programs Offered
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264186] shadow-sm"
              placeholder="E.g. Engineering, Business, Arts..."
            />
          </div>

          {/* Existing Agent Network */}
          <div data-aos="fade-right">
            <label className="block font-medium text-gray-700 mb-1">
              Existing Agent Network (Y/N)
            </label>
            <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264186] shadow-sm">
              <option value="">Select</option>
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
          </div>

          {/* Areas of Interest */}
          <div data-aos="fade-left">
            <label className="block font-medium text-gray-700 mb-1">
              Areas of Interest
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264186] shadow-sm"
              placeholder="UG, PG, Pathways, English Language..."
            />
          </div>

          {/* Your Message / Collaboration Goal */}
          <div data-aos="fade-up">
            <label className="block font-medium text-gray-700 mb-1">
              Your Message / Collaboration Goal
            </label>
            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264186] shadow-sm"
              rows="4"
              placeholder="Describe your collaboration goals..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center" data-aos="zoom-in">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
              style={{ backgroundColor: "#264186" }}
            >
              Send < FontAwesomeIcon icon={faPaperPlane}/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollaborationForm;
