import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const flagMap = {
  Australia: 'https://flagcdn.com/au.svg',
  Canada: 'https://flagcdn.com/ca.svg',
  USA: 'https://flagcdn.com/us.svg',
  UK: 'https://flagcdn.com/gb.svg',
  NZ: 'https://flagcdn.com/nz.svg',
  Ireland: 'https://flagcdn.com/ie.svg',
  'France & EU': 'https://flagcdn.com/fr.svg',
};

const complianceData = [
  {
    country: 'Australia',
    content: [
      'Operate under the ESOS Framework and the National Code of Practice (Standard 4).',
      'Counselors are QEAC-certified, regularly updated on GTE, COE, and visa trends.',
      'Uphold the student best-interest test — not influenced by commissions.',
    ],
  },
  {
    country: 'Canada',
    content: [
      'Follow EduCanada Agent Guidelines for ethical representation.',
      'Team trained in Canada Course for Education Agents (CCEA).',
      'Support institutions with genuine, academically prepared applicants.',
    ],
  },
  {
    country: 'USA',
    content: [
      'Align with AIRC quality standards for transparency and accuracy.',
      'Comply with FERPA for student data protection and SEVP regulations.',
    ],
  },
  {
    country: 'UK',
    content: [
      'Counselors complete British Council Training Suite.',
      'Support UKCISA Good Practice Guidelines and sponsor license compliance.',
    ],
  },
  {
    country: 'NZ',
    content: [
      'Follow Education (Pastoral Care) Code of Practice 2021.',
      'Provide culturally appropriate, transparent guidance.',
      'Familiar with ENZRA principles.',
    ],
  },
  {
    country: 'Ireland',
    content: [
      'Recruit in line with Education in Ireland expectations.',
      'Emphasize transparency in tuition, work rights, and visa.',
    ],
  },
  {
    country: 'France & EU',
    content: [
      'Work through Campus France (Études en France).',
      'Comply with GDPR for secure data handling across the EU.',
    ],
  },
];

const ComplianceUI = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white text-[#264186] font-roboto px-4 py-12 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compliance with International Standards
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            At Gen Z Global, compliance is not a checkbox — it’s the foundation of how we operate.
            With over 14 years of leadership in international education, we exceed global frameworks that govern responsible student recruitment.
          </p>
        </div>

        {/* Carousel Cards */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {complianceData.map((item, index) => (
        <SwiperSlide key={index}>
  <div className="h-full">
    <div
      data-aos="zoom-in"
      className="h-full bg-[#f4f6fb] rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-[#d3d9ee] flex flex-col"
      style={{ minHeight: '360px' }} // Set fixed height
    >
      {/* Flag + Country */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-[3px] rounded-full border-2 border-[#0066b3] animate-pulse shadow-md shadow-blue-200">
          <img
            src={flagMap[item.country]}
            alt={item.country}
            className="w-8 h-6 object-cover rounded"
          />
        </div>
        <h3 className="text-xl font-semibold">{item.country}</h3>
      </div>

      {/* Bullet Points */}
      <ul className="list-disc list-outside pl-6 space-y-2 text-base leading-relaxed flex-grow">
        {item.content.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
</SwiperSlide>

          ))}
        </Swiper>

        {/* Final Statement */}
        <div
          data-aos="fade-up"
          className="bg-[#e6ecfa] p-6 rounded-xl mt-12 shadow-md text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Why This Matters</h3>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            Universities face real risks from poor agent conduct — including visa refusals,
            sponsor license threats, and reputational damage. Gen Z Global eliminates those risks
            through transparency, compliance, and ethical recruitment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComplianceUI;
