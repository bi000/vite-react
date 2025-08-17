import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardTeacher,
  faClipboardList,
  faUserCheck,
  faMicrophone,
} from '@fortawesome/free-solid-svg-icons';

const Interview = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const services = [
    {
      icon: faChalkboardTeacher,
      title: 'Mock Interview Sessions',
      description: 'Real embassy & university interview practice with expert feedback.',
    },
    {
      icon: faClipboardList,
      title: 'Question Bank & Red Flags',
      description: 'Explore common questions and avoid rejection triggers.',
    },
    {
      icon: faUserCheck,
      title: 'Confidence & Tone Coaching',
      description: 'Build confidence with body language and tone training.',
    },
    {
      icon: faMicrophone,
      title: 'Etiquette & Cultural Training',
      description: 'Visa-specific expectations for global success.',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#e0f7ff] to-[#f9fbfc] py-20 px-4 md:px-16 font-['Roboto']">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-[#0066b3] text-4xl md:text-5xl font-bold mb-4">
          🎙️ Interview Preparation
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-balance leading-relaxed font-robot font-light">
          Be confident. Be credible. Be prepared. <br className="hidden md:block" />
          Required for Canada, UK, USA, Australia & France interviews.
        </p>
      </div>

      {/* Slider Cards */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3500 }}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        data-aos="fade-up"
      >
        {services.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 h-full hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="text-[#0066b3] text-4xl mb-4">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3 className="text-xl font-semibold text-[#0066b3] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-16" data-aos="zoom-in">
        <blockquote className="italic font-robot tracking-wide leading-relaxed text-[#008294] text-xl md:text-lg max-w-3xl mx-auto font-medium">
          “The difference between rejection and approval? Often, it’s preparation.”
        </blockquote>
      </div>
    </div>
  );
};

export default Interview;
