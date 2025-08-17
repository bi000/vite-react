import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const badges = [
  { img: 'badge/badge1.png',link:'https://www.credly.com/badges/26a14eaf-b5b1-43aa-81bd-75b706070b7e' },
  { img: 'badge/Mapping.png',link:'https://www.credly.com/badges/8c834323-d97a-4d7a-a87c-bdf1acb5bbde' },
  { img: 'badge/Admissions.png',link:`https://www.credly.com/badges/e1aa7513-e78d-438e-9248-c1ff93af3cb1` },
  { img: 'badge/IntStudentLife.png',link:`https://www.credly.com/badges/a882f6b1-72f2-4474-a21a-97ea6438bdc9` },
  { img: 'badge/IntEducationEssentials.png',link:`https://www.credly.com/badges/06005a6f-5ea4-4e6f-84cb-ccbd06e8f9e6` },
];

const Badge = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full py-10 min-h-full hover:scale-11" data-aos="fade-up">
      <h2 className="text-4xl tracking-wide font-IBM font-bold text-center text-[#264186] mb-1">
         IEEA Certification
      </h2>
      <p data-aos="fade-left" className=' text-center font-robot font-light text-balance tracking-normal leading-normal text-gray-700 px-0 lg:px-10 py-0'>All certifications and memberships are held by our Director, Mr. Roshan Ghimire, and reflect Gen Z Global’s<br/> commitment to ethical, compliant, and student-focused services</p>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView:  3},
        }}
        spaceBetween={30}
        className="px-6"
      >
        {badges.map((badge, index) => (
          <SwiperSlide key={index}>
            <a
            href={badge.link}>
            <div 
              className="w-48 min-h-full bg-gradient-to-b from-[#e1f0f4] to-[#aeccd5] rounded-full mt-5 hover:cursor-pointer shadow-xl flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={badge.img}
                alt={`Badge ${index + 1}`}
                className="w-48 h-48 object-contain"
              />
            </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Badge;
