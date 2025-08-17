import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake,
  faUsers,
  faGraduationCap,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

const offerings = [
  {
    icon: faUsers,
    title: 'Alumni Introductions',
    description: 'Connect with Gen Z alumni in your destination city or university for real guidance.',
  },
  {
    icon: faHandshake,
    title: 'Networking Support',
    description: 'Get help with accommodation, part-time jobs, and essential life tips abroad.',
  },
  {
    icon: faGraduationCap,
    title: 'Mentorship Opportunities',
    description: 'Become a mentor to future Gen Z students and share your experience.',
  },
  {
    icon: faVideo,
    title: 'Virtual Meetups',
    description: 'Join exclusive online seminars, alumni events, and webinars hosted globally.',
  },
];

const Alumni = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section className="bg-[#f2f9fb] py-20 px-4 md:px-16 font-['Roboto']">
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0066b3] mb-3">
          🌐 Alumni Connect
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          Once a Gen Z student — always part of the family. <br />
          Our alumni network ensures support doesn't end after your visa approval.
        </p>
      </div>

      {/* Cards Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        {offerings.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 flex flex-col gap-4"
          >
            <div className="text-[#0066b3] text-4xl">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <h3 className="text-xl font-semibold text-[#0066b3]">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Alumni;
