import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  Globe,
  ShieldCheck
} from "lucide-react";

const StudyAustralia = ({ courseItemData=[],headerText,countryIntro,secondHeader,circleCardItem=[],visaHighlight=[{}],postStudy=[{}],image,imageName }) => {
    const circleCardData0=circleCardItem[0];
    const circleCardData1=circleCardItem[1];
        const circleCardData2=circleCardItem[2];
        const circleCardData3=circleCardItem[3];
                const circleCardData4=circleCardItem[4];
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full">
        <img src={image} alt={imageName} className="w-full h-full object-cover rounded-b-3xl" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <div className="text-white text-center max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-bold">{headerText}</h1>
            <p className="mt-6 text-sm md:text-base leading-relaxed">
              {countryIntro}
            </p>
          </div>
        </div>
      </div>

      {/* Why Australia Section */}
      {/* Why Australia Section */}
<div className="bg-white py-20 px-4 md:px-10"  style={{
  
      backgroundImage: `linear-gradient(to bottom, rgba(225,240,244,0.9), rgba(174,204,213,0.75)), url("travelling.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}}>
  <h2 className="text-3xl font-bold text-center text-[#0066b3] mb-10">{secondHeader}</h2>

  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row md:justify-center md:items-center">
    {/* Circle Image */}
    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-[300px] sm:w-[350px] md:w-[400px] rounded-full border-[10px] border-cyan-600 shadow-2xl overflow-hidden mx-auto md:mx-0" 
    >
      <img src="ThinkingWomen.png" alt="Australia" className="w-full h-full object-cover" />
    </div>

    {/* Floating Cards */}
    {/* Desktop & larger: absolutely positioned around circle */}
    <div className="hidden md:block absolute inset-0 pointer-events-none">
      {/* Top Left Card */}
      <div className="absolute top-[5%] lg:left-[15%] md:-left-[3%] bg-cyan-600 text-white p-4 rounded-xl w-[280px] shadow-lg">
        <p>{circleCardData0}</p>
      </div>

      {/* Top Right Card */}
      <div className="absolute top-[5%] lg:right-[12%] md:-right-[7%] bg-cyan-600 text-white p-4 rounded-xl w-[280px] shadow-lg">
        <p>{circleCardData1}</p>
      </div>

      {/* Middle Left Card */}
      <div className="absolute top-[35%] lg:left-[18%] md:left-[2%] bg-cyan-600 text-white p-4 rounded-xl w-[280px] shadow-lg">
        <p>{circleCardData2}</p>
      </div>

      {/* Middle Right Card */}
      <div className="absolute top-[35%] lg:right-[14%] md:right-[2%] bg-cyan-600 text-white p-4 rounded-xl w-[280px] shadow-lg">
        <p>{circleCardData3}</p>
      </div>

      {/* Bottom Center Card */}
      <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 bg-cyan-600 text-white p-4 rounded-xl w-[280px] shadow-lg">
        <p>{circleCardData4}</p>
      </div>
    </div>

    {/* Mobile & Tablet: stacked cards below the circle */}
    <div className="md:hidden mt-10 space-y-6 max-w-md mx-auto">
      <div className="bg-cyan-600 text-white p-4 rounded-xl shadow-lg">
        <p>{circleCardData0}</p>
      </div>
      <div className="bg-cyan-600 text-white p-4 rounded-xl shadow-lg">
        <p>{circleCardData1}</p>
      </div>
      <div className="bg-cyan-600 text-white p-4 rounded-xl shadow-lg">
        <p>{circleCardData2}</p>
      </div>
      <div className="bg-cyan-600 text-white p-4 rounded-xl shadow-lg">
        <p>{circleCardData3}</p>
      </div>
      <div className="bg-cyan-600 text-white p-4 rounded-xl shadow-lg">
        <p>{circleCardData4}</p>
      </div>
    </div>
  </div>
</div>


      {/* Courses Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-[#0066b3] mb-10">Popular Courses</h2>
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            loop={true}
          >
            {courseItemData.map((course, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-xl p-6 h-52 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 border border-[#0066b3]/10">
                  <div className="mb-3">{course.icon}</div>
                  <h3 className="text-xl font-semibold text-[#0066b3] mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Visa Info Section */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-white py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-[#0066b3] mb-12">Post-Study Work Rights & Visa Highlights</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#0066b3]/10 hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Globe className="h-8 w-8 text-[#0066b3]" />
              <h3 className="text-xl font-semibold text-[#0066b3]">Post-Study Work Rights</h3>
            </div>
            {postStudy.map((postItem,idx)=>(
            <ul key={idx} className=" list-disc list-inside space-y-2 text-gray-700">
              <li>{postItem.Items}</li>
            </ul>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#0066b3]/10 hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck className="h-8 w-8 text-[#0066b3]" />
              <h3 className="text-xl font-semibold text-[#0066b3]">Visa Highlights</h3>
            </div>
            {visaHighlight.map((item,index)=>(
   <ul key={index} className="list-disc list-inside space-y-2 text-gray-700">
              <li>{item.Items}</li>
            </ul>
            ))}
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAustralia;