import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faChartLine,
  faDollarSign,
  faGlobe,
  faCheckCircle,
  faUserGraduate,
  faUniversity,
} from '@fortawesome/free-solid-svg-icons';

const courseBenefits = [
  {
    icon: faBookOpen,
    title: 'Academic Background',
    desc: 'We assess your previous academic transcripts and skillsets to recommend the best-fit programs.',
  },
  {
    icon: faChartLine,
    title: 'Career Goals',
    desc: 'We align course options with your future professional and personal aspirations.',
  },
  {
    icon: faDollarSign,
    title: 'Budget Matching',
    desc: 'We suggest institutions that meet your financial comfort and scholarship possibilities.',
  },
  {
    icon: faGlobe,
    title: 'Migration Prospects',
    desc: 'For eligible countries, we recommend courses with better PR or work visa pathways.',
  },
  {
    icon: faCheckCircle,
    title: 'Course Accreditation',
    desc: 'Only institutions with proper recognition and compliance are shortlisted.',
  },
  {
    icon: faUserGraduate,
    title: 'All Levels Available',
    desc: 'Diploma, Undergraduate, or Postgraduate — we cover it all.',
  },
];

const CourseUniversity = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section className="bg-white py-20 px-4 md:px-16 font-['Roboto']">
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0066b3] mb-4">
          🎓 Course & University Selection
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          The right course changes everything. <br />
          We don’t push offers — we shape real futures.
        </p>
      </div>

      {/* Features Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        {courseBenefits.map((item, index) => (
          <div
            key={index}
            className="bg-[#f2f9fb] p-6 rounded-2xl border border-gray-100 shadow hover:shadow-lg transition-all duration-300"
          >
            <div className="text-[#0066b3] text-3xl mb-3">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <h3 className="text-xl font-semibold text-[#0066b3] mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer Quote */}
      <div className="mt-12 text-center max-w-2xl mx-auto" data-aos="fade-up">
        <blockquote className="italic text-lg text-gray-600 border-l-4 border-[#0066b3] pl-4">
          “Our goal isn’t to push offers — it’s to shape futures.”
        </blockquote>
      </div>
    </section>
  );
};

export default CourseUniversity;
