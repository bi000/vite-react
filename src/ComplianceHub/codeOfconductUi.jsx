import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileAlt,
} 
from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const codeOfconductUi = ({ Head, cardData = [],subContent,Note }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800, // smooth speed
      easing: 'ease-in-out', // smooth easing
      offset: 50, // start a bit earlier
    });
  }, []);

  return (
    <section className="bg-white text-[#264186] font-roboto px-1 py-12 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          data-aos="fade-down"
        >
          {Head}
        </h2>
<p className=' text-balance font-robot font-thin tex-gray-700 tracking-normal leading-normal text-center px-5 pb-5'>{subContent}</p>

        {/* Card List */}
        <div className="grid gap-8 md:grid-cols-2">
          {cardData.map((data, index) => (
            <div
              key={index}
              className="bg-[#f4f6fb] p-6 rounded-xl shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100} // stagger effect
            >
              <div className="flex items-center gap-3 mb-4">
                <FontAwesomeIcon
                  icon={faFileAlt}
                  className="w-6 h-6 text-[#264186]"
                />
                <h3 className="text-xl font-semibold">
                  {index + 1}.{data.Maincontent}
                </h3>

              </div>

              {/* checks whether subContent is array or not */}
              {Array.isArray(data.subContent) ? (
                <ul className="list-disc list-outside pl-6 space-y-1">
                  {data.subContent.map((item, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-balance leading-normal font-robot font-light tracking-wide"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                data.subContent && (
                  <p className="text-balance leading-normal font-robot font-light tracking-wide">
                    {data.subContent}
                  </p>
                )
              )}
            </div>
          ))}
        </div>
      </div>
      <p className=' text-balance font-robot font-bold  tracking-normal leading-normal text-center px-5 py-5 italic'>{Note}</p>

    </section>
  );
};

export default codeOfconductUi;
