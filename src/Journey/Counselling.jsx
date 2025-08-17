import React from 'react';

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faGlobe,
  faPenToSquare,
  faArrowRight,
  faFileEdit,
  faPassport,
 
} from '@fortawesome/free-solid-svg-icons';
const Counselling = () => {
  const cardData=[
  {
                step: 'STEP 1',
                title: 'Initial consultation and profile review',
              },
              {
                step: 'STEP 2',
                title: 'Course and destination shortlisting',
              },
              {
                step: 'STEP 3',
                title: 'Test prep and SOP planning guidance ',
              },
              {
                step: 'STEP 4',
                title: 'University and visa documentation roadmap ',
              },
              {
                step: 'STEP 5',
                title: 'Pre-departure briefing and post-arrival check-in ',
              },
 ]
 

  const stepIcons = [
    faLightbulb,
    faGlobe,
    faPenToSquare,
    faFileEdit,
    faPassport,
  ];
  return (
    <div className="counselling bg-[#e8eff0] px-0 py-[4%] min-h-screen">
      <section className='w-full px-[4%] rounded-sm'>
        <div className="container px-4 w-[100%] grid grid-cols-2 justify-items-center"  style={{
  
      backgroundImage: `linear-gradient(to bottom, rgba(225,240,244,0.9), rgba(174,204,213,0.75)), url("travelling.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}}>
          {/* Left Side */}
          <div className="w-full min-h-[450px] grid place-content-start">
            <h1 className="font-IBM text-3xl font-thin text-[#0066b3] tracking-normal leading-normal text-center">
              Personalized Counselling Process
            </h1>
            <p className=' text-center font-robot font-bold tracking-normal leading-normal text-[#008294]'><i>"Tailored Guidance. Ethical Approach. Real Impact."</i></p>
            <br/>
            <p className=' font-robot text-base font-light text-gray-700 tracking-normal leading-relaxed'>

              At Gen Z Global, we believe no two students are the same — so no two journeys should be either. Our 
counseling begins with a one-on-one session where we understand each student’s academic 
background, financial situation, career goals, and destination preferences.
            </p>
            <br />
            <p className=' font-robot font-normal text-gray-700 tracking-normal  leading-normal'>
              Our counselors are trained, certified, and compliance-focused, ensuring the advice you receive is:
            </p>
              <ul className="list-disc list-outside pl-6 space-y-2 text-base text-[#264186] leading-relaxed flex-grow">
                <li className=' font-robot font-light text-gray-700 tracking-normal leading-relaxed'> Honest and realistic</li>
                                <li className=' font-robot font-light text-gray-700 tracking-normal leading-relaxed'>Based on facts, not commissions </li>
                <li className=' font-robot font-light text-gray-700 tracking-normal leading-relaxed'>Aligned with your long-term goals </li>

                </ul> 
          </div>

          {/* Right Side - Optional */}
          <div className="w-full min-h-[400px] px-[4%] flex justify-end -mt[3%]">
            {/* You can put an image or more info here */}
            <img 
            src='counselling.png' alt='Counselling Image' className=' w-[75%] h-[75%]'
            />
          </div>
        </div>
      </section>
      <section>
        <section className="min-h-screen pb-12 px-4 flex items-center bg-gradient-to-b from-[#e1f0f4] to-[#aeccd5] rounded-3xl" data-aos="fade-up">
          <div className="max-w-6xl mx-auto text-center w-full">
            
            {/* Title */}
            <div data-aos="fade-right" data-aos-delay="5000" className="textHeader w-full flex justify-center mb-4">
              <span className="font-robot font-light text-[#264186] tracking-wide text-3xl md:text-4xl underline decoration-[#008294]/40 underline-offset-4">
                Personalized Counseling Process
              </span>
            </div>
        
            {/* Subtitle */}
            <p data-aos="fade-left" data-aos-delay="5000" className="text-[#008294] font-bold font-IBM mb-8 text-sm md:text-base max-w-3xl mx-auto">
            <i>“We don’t sell dreams — we map them with you.” </i>
            </p>
        
            {/* Progress Steps */}
            <div data-aos="zoom-in" data-aos-delay="5000" className="relative flex justify-between items-center px-4 md:px-12 mb-14">
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#008294] z-0 transform -translate-y-1/2 opacity-70"></div>
              {[1, 2, 3, 4, 5].map((step, i) => (
                <div
                  key={i}
                  className="relative z-10 w-12 h-12 rounded-full bg-white border-4 border-[#008294] flex items-center justify-center text-[#008294] font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  {step}
                </div>
              ))}
            </div>
        
            {/* Step Cards */}
            <div data-aos="zoom-in" data-aos-delay="1000" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 px-4 text-left">
              {cardData.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#008294]/10"
                >
                  <FontAwesomeIcon
                    icon={stepIcons[idx]}
                    className="text-[#008294] text-4xl mb-3"
                  />
                  <div>
                    <p className="text-md font-IBM font-semibold text-[#0066b3] tracking-wide uppercase">
                      {item.step}
                    </p>
                    <p className="text-[#264186] font-IBM font-semibold mt-2 text-sm whitespace-pre-line leading-snug">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
                  
            
          </div>
        </section>
      </section>
    </div>
  );
};

export default Counselling;
