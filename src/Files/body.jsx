import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { serviceRoutes } from '../PageNavigation/pageNav';

import {
  faLightbulb,
  faGlobe,
  faPenToSquare,
  faArrowRight,
  faFileEdit,
  faPassport,
  faClipboardList,faUserTie,faDollarSign,faUniversity,faBook,faCheckCircle,faTrophy
} from '@fortawesome/free-solid-svg-icons';

const Body = () =>{
 const cardData=[
  {
                step: 'STEP 1',
                title: 'Consult',
                Decs:' Discuss your background, goals, and get expert advice tailored just for you — all at no cost.'
              },
              {
                step: 'STEP 2',
                title: ' Shortlist',
                Decs:'We help you select the best course, destination, and institution based on your profile and career goals.'
              },
              {
                step: 'STEP 3',
                title: 'Test Preparation',
                Decs:'Join expert-led coaching to improve your scores and boost admission chances'
              },
              {
                step: 'STEP 4',
                title: 'Application',
                Decs:'We guide you through every document and check your file for completeness before submission.'
              },
              {
                step: 'STEP 5',
                title: 'Visa & Travel',
                Decs:'From fund guidance to pre-departure briefings — we make sure you are fully prepared for your journey.'
              },
 ]

      const stepIcons = [
    faLightbulb,
    faGlobe,
    faPenToSquare,
    faFileEdit,
    faPassport,
  ];
const services = [
  {
    title: 'Course & Career Counseling',
    description: 'Get personalized guidance to choose the right course, country, and career path based on your goals.',
    icon: faUserTie,
    bg: 'bg-blue-100',
  },
  {
    title: 'Application & Visa Support',
    description: 'We guide you through university applications, document checks, and visa submission — ethically and accurately.',
    icon: faUniversity,
    bg: 'bg-green-100',
  },
  {
    title: 'Duolingo Prep(TIELTS,PTE)',
    description: 'IELTS, PTE & Duolingo Prep Expert-led coaching for IELTS, PTE, and Duolingo to improve your scores and meet admission and visa requirements.',
    icon: faClipboardList,
    bg: '#264186',
  },
  {
    title: 'Scholarship Assistance',
    description: 'Discover and apply for merit-based and need-based scholarships with expert help from our advisors.',
    icon: faDollarSign,
    bg: 'bg-orange-100',
  },
  
  {
    title: 'In-Demand Courses',
    description: 'Explore trending programs with high employability and global relevance — aligned to your goals.',
    icon: faBook,
    bg: 'bg-cyan-100',
  },
];

const Navigates = useNavigate()
  const handleNavigation = (idx) => {
    const route = serviceRoutes[idx];
    if (route) {
      setTimeout(() => Navigates(route), 300);
    }
  };
const handleNav=()=>{
 setTimeout(()=> Navigates('/Form'),300);
}
  const handlePage=()=>{
 setTimeout(()=> Navigates('/WhoWeAre'),300);
}

    return(
        <>


   {/* Step Process Section */}
 
<section className="min-h-screen 2xl:min-h-[100%] pb-12 px-4 flex items-center bg-gradient-to-b from-[#e1f0f4] to-[#aeccd5] rounded-3xl" data-aos="fade-up">
  <div className="max-w-6xl mx-auto text-center w-full">
    
    {/* Title */}
    <div data-aos="fade-right" data-aos-delay="5000" className="textHeader w-full flex justify-center mb-4">
      <span className="font-robot font-light text-[#264186] tracking-wide text-3xl md:text-4xl underline decoration-[#008294]/40 underline-offset-4">
        Personalized Counseling Process
      </span>
    </div>

    {/* Subtitle */}
    <p data-aos="fade-left" data-aos-delay="5000" className="text-[#008294] font-bold font-IBM mb-8 text-sm md:text-base max-w-3xl mx-auto">
    <i>"Your Journey, Our Guidance"</i>
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
            <p className=' font-robot font-thin text-sm text-gray-700'><i>
              {item.Decs}
              </i>
            </p>
          </div>
        </div>
      ))}
    </div>
          
       <button onClick={()=>handleNav()} data-aos="fade-left" className='relative overflow-hidden w-[50%] lg:w-[18%] bg-[#008294] text-white hover:text-white px-6 py-2 mt-[3%] rounded-md text-sm font-medium border border-[#008294] group'>
                    <span className='absolute inset-0 bg-[#264186] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0'></span>
                    <span className='relative font-robot font-light tracking-wide z-10 flex items-center gap-2'>
                      Start My Journey <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </button>
  </div>
</section>


<div className="mt-0 min-h-screen lg:min-h-[350px] p-3 py-0 lg:py-10 w-full md:block flex flex-wrap justify-between">
      {/* Left Text */}
      <div data-aos="fade-right" className="w-full md:w-[100%] md:px-7 md:mt-16 flex items-center justify-center ">
        <div>
        <h2 className="font-robot font-light text-primary tracking-tight text-3xl text-center text-[#264186]">
          Why Choose Gen Z Global?
        </h2>
        <p className="text-primary text-lg font-robot font-light m-3 text-gray-700 ml-10">
          <b className="font-IBM font-semibold text-[#008294]">
            Nepal’s Trusted Leader in Ethical, Global Education Guidance 
          </b>{' '}
         Empowering Dreams with Integrity, Experience, and Results.
        </p>
        <div onClick={()=>handlePage()} className="button mt-5 flex justify-center">
          <button className="relative overflow-hidden px-6 py-3 bg-[#008294] hover:text-white hover:bg-[#264186] rounded-md text-sm font-medium text-white bg-secondary border border-secondary group">
            <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></span>
            <span className="relative z-10 flex items-center gap-2">
              More <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </div>
        </div>
      </div>
{/* Right Images Section */}
<div className="w-full md:w-[100%] relative flex flex-col md:flex-row md:justify-center items-center md:items-end md:h-[500px] lg:h-[500px] gap-0 mt-0 md:mt-0">

  {/* Circle Image */}
  <div  data-aos="zoom-in" data-aos-delay="500" className="w-[150px] h-[150px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px]  rounded-full border-[5px] lg:border-[10px] border-[#008294] bg-[#264186] overflow-hidden shadow-2xl relative group hover:scale-105 transition-transform duration-500">
    <img
      src="circleImage.png"
      alt="Graduate"
      loading="lazy"
      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>

  {/* Overlays on Desktop */}
  <div className="hidden md:block">
    {/* Experience */}
    <div data-aos="zoom-in" data-aos-delay="1000" className="absolute top-[10%] left-[5%] lg:left-[15%] lg:top-[15%] xl:left-[25%] 2xl:left-[35%] bg-[#008294] backdrop-blur-md text-white p-4 rounded-xl shadow-lg transition-transform hover:scale-105 z-20">
      <div className="flex items-start gap-2">
        <FontAwesomeIcon icon={faCheckCircle} className="text-white text-lg mt-1" />
        <div>
          <p className="font-semibold font-IBM">100+ Scholarships Secured </p>
          <p className="text-sm font-light font-IBM">Merit & Need Based</p>
        </div>
      </div>
    </div>

    {/* Global Reach */}
    <div data-aos="zoom-in" data-aos-delay="1000" className="absolute top-[60%] left-[10%] lg:left-[15%] lg:top-[55%] xl:left-[25%] 2xl:left-[40%] bg-[#008294] backdrop-blur-md text-white p-4 rounded-xl shadow-lg transition-transform hover:scale-105 z-20">
      <div className="flex items-start gap-2">
        <FontAwesomeIcon icon={faGlobe} className="text-white text-lg mt-1" />
        <div>
          <p className="font-semibold font-IBM"> Global Reach</p>
          <p className="text-sm font-light font-IBM">With Partners Across 7 Countries</p>
        </div>
      </div>
    </div>

    {/* Success Rate */}
    <div data-aos="zoom-in" data-aos-delay="1000" className="absolute top-[30%] right-[5%] lg:right-[15%] xl:right-[25%] 2xl:right-[35%] 2xl:top-[33%] bg-[#008294] backdrop-blur-md text-white p-4 rounded-xl shadow-lg transition-transform hover:scale-105 z-20">
      <div className="flex items-start gap-2">
        <FontAwesomeIcon icon={faTrophy} className="text-white text-lg mt-1" />
        <div>
          <p className="font-semibold font-IBM">97% Success Rate</p>
          <p className="text-sm font-light font-IBM">Across 7 Destinations</p>
        </div>
      </div>
    </div>

    {/* Floating Badge */}
    <div data-aos="zoom-in" data-aos-delay="1000" className="absolute top-[5%] right-[10%] xl:right-[20%] bg-[#008294] lg:right-[29%] 2xl:right-[35%] text-white p-2 rounded-full shadow-md animate-pulse">
      <p className="font-IBM font-semibold text-sm">Trusted by 10,000+ Students</p>
    </div>
  </div>

  {/* Mobile Styled Overlays */}
  <div className="w-full flex flex-col md:hidden gap-3 mt-6 px-3">
    {[
      {
        icon: faCheckCircle,
        title: '14+ Years Experience',
        desc: 'Thousands of successful applications',
      },
      {
        icon: faGlobe,
        title: 'Global Reach',
        desc: '500+ university partnerships',
      },
      {
        icon: faTrophy,
        title: '95% Success Rate',
        desc: 'Visa approvals & admissions',
      },
      {
        icon: faCheckCircle,
        title: '10,000+ Students Trusted',
        desc: '',
      },
    ].map((info, i) => (
      <div
        key={i}
        className="bg-[#008294] text-white p-3 rounded-xl shadow-md flex gap-3 items-start transition hover:scale-105"
      >
        <FontAwesomeIcon icon={info.icon} className="text-lg mt-1" />
        <div>
          <p className="text-sm font-IBM font-semibold">{info.title}</p>
          {info.desc && <p className="text-xs font-light">{info.desc}</p>}
        </div>
      </div>
    ))}
  </div>
</div>

    </div>

      <h2 className="text-3xl md:text-4xl font-IBM font-light tracking-wide mt-16 text-center text-[#264186] mb-2">
  <b>What We Offer</b>
</h2>
<p className="text-center font-robot font-light text-[#264186] text-sm md:text-base mb-10 px-3 md:px-0">
  Discover our comprehensive range of services designed to support your educational aspirations and ensure your success abroad.
</p>

<section className="w-full px-4 md:px-0 font-IBM py-12 mt-5">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          data-aos="flip-right"
          className="flex flex-col items-start p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 transition-all duration-500 group relative overflow-hidden"
        >
          {/* Glow border effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#008294] group-hover:shadow-[0_0_20px_#00829440] transition-all duration-500 pointer-events-none"></div>

          {/* Icon circle */}
          <div className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 shadow-sm shadow-gray-400 ${service.bg} animate-bounce-slow`}>
            <FontAwesomeIcon icon={service.icon} className="text-xl text-[#008294]" />
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-IBM font-semibold text-[#264186] mb-2">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-4 font-IBM font-light text-sm md:text-base">
            {service.description}
          </p>

          {/* Button with fill hover effect */}
          <button  key={index} onClick={()=>handleNavigation(index)}   className="relative overflow-hidden px-6 py-3 rounded-md text-sm font-medium text-[#264186] border border-[#264186] group hover:text-white">
            <span className="absolute inset-0 bg-[#264186] hover:text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
            <span className="relative z-10 flex items-center gap-2">
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

        </>
    )
}
export default Body;
