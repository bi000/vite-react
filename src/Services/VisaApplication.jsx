import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenNib,
  faComments,
  faClipboardList,
  faFileAlt,
  faPlaneDeparture,
  faUniversity,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const services = [
  {
    icon: faPenNib,
    title: 'SOP & GS Workshops',
    desc: 'Group or individual coaching to help you write compelling, authentic statements.',
  },
  {
    icon: faComments,
    title: '1-on-1 Document Review',
    desc: 'Personalized feedback on your draft to improve clarity, tone, and alignment.',
  },
  {
    icon: faClipboardList,
    title: 'Compliance & Structure',
    desc: 'Guidance on required structure, tone, and institutional expectations by country.',
  },
  {
    icon: faFileAlt,
    title: 'Visa Documentation',
    desc: 'Checklist help, document arrangement, and submission strategy for Subclass 500, SDS, etc.',
  },
  {
    icon: faUniversity,
    title: 'CAS / COE / I-20 Assistance',
    desc: 'Support with tuition confirmation and official university documents.',
  },
  {
    icon: faPlaneDeparture,
    title: 'Embassy Interview Prep',
    desc: 'Practice and coaching for credibility assessments and visa officer questions.',
  },
  {
    icon: faUserShield,
    title: 'Ethical Document Policy',
    desc: 'We guide, not ghostwrite. You write it. We help you express it truthfully.',
  },
];

const VisaApplication = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section className="bg-[#f8fcff] py-20 px-4 md:px-16 font-['Roboto']">
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0066b3] mb-4">
          📝 Visa Application & SOP Guidance
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          <span className="font-semibold">Ethical Support. Student-Led Documentation. Expert Preparation.</span>
          <br />
          We don’t write your story — <em>we help you tell it better</em>, ethically and confidently.
        </p>
      </div>

      {/* Swiper Cards */}
      <div data-aos="fade-up">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-2xl p-6 h-full flex flex-col justify-between transition-all hover:shadow-2xl border border-gray-100">
                <div className="text-[#0066b3] text-4xl mb-4">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3 className="text-xl font-semibold text-[#0066b3] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Compliance Statement */}
      <div className="mt-12 text-center max-w-3xl mx-auto px-4" data-aos="fade-up">
        <p className="italic text-sm text-gray-600 border-l-4 border-[#0066b3] pl-4">
          Gen Z Global does not write SOPs or personal statements on behalf of students. All
          visa-related documents must be prepared by the student and reflect their genuine
          background, goals, and intent. Our support is advisory only.
        </p>
      </div>
    </section>
  );
};

export default VisaApplication;
