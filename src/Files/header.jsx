import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { countryRoutes,complianceRoutes,serviceRoutes,JourneyRoutes,AboutUsRoutes,UniversityNav } from '../PageNavigation/pageNav';
import {
  faUserAlt,
  faPhoneVolume,
  faEnvelope,
  faBars,
  faAngleDown,
  faArrowRight,
  faCheckCircle,
  faGraduationCap,
  faMapMarkedAlt,
  faGlobeEurope
} from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';
{/* header Navigation */}
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const Navigates = useNavigate()
const handleNavigation = (countryIndex,Routes) => {
  const route = Routes[countryIndex];
  if (route) {
    setTimeout(() => Navigates(route),0);
  }
};
//form Nav
const formNavigation=()=>{
 setTimeout(()=> Navigates('/Form'))
}
  const navItems = [
    {
      label: 'Destinations',
      submenu: [
        { name: 'Australia', code: 'au' },
        { name: 'USA', code: 'us' },
        { name: 'New Zealand', code: 'nz' },
        { name: 'UK', code: 'gb' },
        { name: 'Ireland', code: 'ie' },
        { name: 'Germany', code: 'de' },
        { name: 'France', code: 'fr' },
        { name: 'Canada', code: 'ca' },
        { name: 'Switzerland', code: 'ch' },
      ],
    },
    { label: 'Journey', submenu: ['Personalized Counseling Process',
       'Interview Preparation',
        'Success Stories & Testimonials ',
      'Alumni Connect',
      ' Frequently Asked Questions'
      ] },

    { label: 'Services', submenu: [
      'Course & University Selection', 
      'Visa Application and SOP guidance',
       'English Test Preparation(IELTS,PTE,Duolingo',
       'Scholarship Assistance',
       'Pre-departure and Post-arrival Support',
       'Document Verification and  Translation'
    ] },

    { label: 'About Us', submenu: ['Who we are','Message From Director','Our Mission and Vision', 'Our Core Values']},
    { label: 'Compliance Hub', submenu: [
      'Code of Conduct',
       'Under 18 Policy',
       'Student Grievance Policy',
       'Refund & Cancellation Policy',
       'Modern Slavery Statement',
       ' Data Protection & Privacy',
      'Anti-Fraud & Academic Integrity',
       'Compliance with International Standards'
      ] },

    { label: 'Universities', submenu: ['Patner Institutions',
       'Partnership Benefits ',
       'Institutional Testimonials',
       'Expression of Interest Form (EOI)',
      ]
       },
  ];

  useEffect(() => {
    Aos.init({ duration: 300, once: false });
  }, []);

  return (
    <>
      {/* Top Contact Info */}
      <div className='w-full flex justify-between items-center px-4 py-2 bg-white border-b'>
        <div data-aos="fade-left" className='flex items-center space-x-4 text-sm text-[#0066b3] ml-2 md:ml-10'>
          <FontAwesomeIcon icon={faPhoneVolume} />
          <span>+977-1-4502299</span>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>hello@genzglobal.edu.np</span>
        </div>
   <a href='https://icondat.com.au/condat/88/customer?method=website'>     <div data-aos="fade-left" className='font-robot font-normal mr-2 md:mr-10 hidden md:block'>
          <span className='text-[rgb(0,102,179)] font-IBM font-light'>Contact Us</span>
        </div>
        </a>
      </div>

      {/* Main Header */}
      <header className='w-full bg-white shadow-md'>
        <div className='max-w-7xl mx-auto px-4 py-6 flex justify-between items-center'>
          {/* Logo */}
          <div className='w-[160px] md:w-[195px]'>
            <img src='Logo.png' alt='Logo' className='w-full h-auto' />
          </div>
          {/* Desktop Navigation */}
          <nav className='hidden lg:flex space-x-8 text-[#0066b3] font-IBM font-light text-lg'>
            {navItems.map((item, idx) => (
              <div key={idx} className="relative group">
                <button className="flex items-center gap-1 text-[#0066b3] hover:text-[#264186] transition-colors duration-300">
                  <span className='hover:cursor-pointer'>{item.label}</span>
                  <FontAwesomeIcon icon={faAngleDown} className="text-xs mt-1 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className={`absolute top-full mt-2 left-0 bg-white shadow-xl rounded-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-20 ${item.label === 'Destinations' ? 'w-[550px] p-6' : 'w-48 p-2'} ${item.label === 'Services' ? 'w-[550px] p-6': 'w-48 p-2'} ${item.label === 'Compliance Hub' ? 'w-[550px] p-6': 'w-48 p-2'} ${item.label === 'Journey' ? 'w-[550px] p-6': 'w-48 p-2'} ${item.label === 'About Us' ? 'w-[550px] p-6': 'w-48 p-2'} ${item.label === 'Universities' ? 'w-[350px] p-6': 'w-30 p-2'}`}>
                  {item.label === 'Destinations' ? (
  <div className="grid grid-cols-3 gap-x-10 gap-y-4">
    {item.submenu.map((country, index) => (
      <div key={index} onClick={()=>handleNavigation(country.name,countryRoutes)} className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-[#008294] transition cursor-pointer">
        <img src={`https://flagcdn.com/w40/${country.code}.png`} alt={country.name} className="w-6 h-4 object-cover rounded-sm shadow-sm" />
        <span className="text-sm">{country.name}</span>
      </div>
    ))}
  </div>
) : item.label === 'Services' ? (
  <div className="grid grid-cols-2 gap-x-6 gap-y-2">
    {item.submenu.map((service, sidx) => (
      <div key={sidx} onClick={()=>handleNavigation(sidx,serviceRoutes)} className="text-sm text-gray-700 hover:bg-[#008294] hover:text-white rounded-md px-3 py-2 cursor-pointer transition">
        {service}
      </div>
    ))}
  </div>
): item.label === 'About Us' ? (
  <div className="grid grid-cols-2 gap-x-6 gap-y-2">
    {item.submenu.map((service, sidx) => (
      <div key={sidx} onClick={()=>handleNavigation(sidx,AboutUsRoutes)}  className="text-sm text-gray-700 hover:bg-[#008294] hover:text-white rounded-md px-3 py-2 cursor-pointer transition">
        {service}
      </div>
    ))}
  </div>
)  
: item.label === 'Compliance Hub' ? (
  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
    {item.submenu.map((ComRule, index) => (
      <div key={index} onClick={()=>handleNavigation(index,complianceRoutes)} className="text-sm text-gray-700 hover:bg-[#008294] hover:text-white rounded-md px-3 py-2 cursor-pointer transition">
        {ComRule}
      </div>
    ))}
  </div>

):
 item.label === 'Journey' ? (
  <div className="grid grid-cols-2 gap-x-6 gap-y-2">
    {item.submenu.map((ComRule, sidx) => (
      <div key={sidx} onClick={()=>handleNavigation(sidx,JourneyRoutes)} className="text-sm text-gray-700 hover:bg-[#008294] hover:text-white rounded-md px-3 py-2 cursor-pointer transition">
        {ComRule}
      </div>
    ))}
  </div>
):
item.label === 'Universities' ? (
  <div className="grid grid-cols-2 gap-x-1 gap-y-2">
    {item.submenu.map((ComRule, sidx) => (
      <div key={sidx} onClick={()=>handleNavigation(sidx,UniversityNav)} className="text-sm text-gray-700 hover:bg-[#008294] hover:text-white rounded-md px-3 py-2 cursor-pointer transition">
        {ComRule}
      </div>
    ))}
  </div>
):
(
  <ul>
    {item.submenu.map((sub, sidx) => (
      <li key={sidx}  className="px-4 py-2 hover:bg-[#008294] hover:text-white hover:cursor-pointer text-sm text-gray-700 rounded-md transition">
        {sub}
      </li>
    ))}
  </ul>
)}

                </div>
              </div>
            ))}
          </nav>

          {/* Desktop Login */}
        <a
        href='https://icondat.com.au/condat/88/customer?method=website'
        >  <div className='hidden md:hidden lg:block shadow-md'>
           <button data-aos="fade-left" className='relative overflow-hidden bg-[#008294] text-white hover:text-white px-6 py-2 rounded-md text-sm font-medium border border-[#008294] group'>
              <span className='absolute inset-0 bg-[#264186] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0'></span>
              <span className='relative z-10 flex items-center gap-2'>
                 Conntect With Us<FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </div>
          </a>

          {/* Mobile Menu Toggle */}
          <button className='md:block lg:hidden text-[#0066b3] text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
  <nav className="md:block bg-white shadow-lg px-4 py-4 space-y-4 border-t border-gray-200">
    {navItems.map((item, idx) => (
      <details key={idx} className="group" open={false}>
        <summary
          className="flex justify-between items-center cursor-pointer text-[#0066b3] font-semibold py-2"
          aria-expanded="false"
          aria-controls={`submenu-${idx}`}
        >
          <span>{item.label}</span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="transition-transform duration-300 group-open:rotate-180"
          />
        </summary>

        <ul
          id={`submenu-${idx}`}
          className="pl-4 mt-2 space-y-1 text-gray-700"
          role="list"
        >
          {item.submenu.map((sub, sidx) => {
            const isObject = typeof sub === "object";
            // Determine navigation function and parameter based on menu label
            const handleClick = () => {
              if (item.label === "Destinations" && isObject) {
              handleNavigation(sub.name,countryRoutes);
              } else if (item.label === "Services") {
                handleNavigation(sidx,serviceRoutes);
              } else if (item.label === "About Us") {
                handleNavigation(sidx,AboutUsRoutes);
              } else if (item.label === "Compliance Hub") {
                handleNavigation(sidx,complianceRoutes)
              } else if (item.label === "Journey") {
                handleNavigation(sidx,JourneyRoutes);
              } else if (item.label === "Universities") {
                handleNavigation(sidx,UniversityNav);
              } else {
                // fallback: no navigation
              }
              setMenuOpen(false); // close menu after navigation
            };

            return (
              <li
                key={sidx}
                onClick={handleClick}
                className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-[#008294] hover:text-white cursor-pointer transition"
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleClick();
                  }
                }}
              >
                {isObject ? (
                  <>
                    <img
                      src={`https://flagcdn.com/w20/${sub.code}.png`}
                      alt={`${sub.name} flag`}
                      className="w-5 h-3 rounded-sm"
                    />
                    {sub.name}
                  </>
                ) : (
                  sub
                )}
              </li>
            );
          })}
        </ul>
      </details>
    ))}

    <a href='https://icondat.com.au/condat/88/customer?method=website'> 
      <button
      onClick={() => {
        // your existing formNavigation or connect us handler
        setMenuOpen(false);
      }}
      className="w-full flex  items-center gap-2 pt-2 text-[#264186] font-semibold hover:text-[#008294]"
    >
      <FontAwesomeIcon icon={faUserAlt} /> Connect With Us
    </button>
    </a>
  </nav>
)}

      </header>

      {/* Hero Section */}
   <section className=" 2xl:min-h-[100%]  w-full min-h-screen mt-0 px-4 md:px-2 py-0 flex flex-col md:flex-row items-center max-w-7xl  mx-auto  relative overflow-hidden">
  {/* Text Section */}
  <div
  data-aos="zoom-in"
  className="w-full md:w-full lg:w-1/2 p-2 mt-5 z-10 text-center md:text-left md:px-6 px-0 space-y-6"
>
  <h1 className="text-[#264186] text-3xl md:text-4xl font-IBM font-light leading-tight">
    Empowering Dreams at{" "}
    <span className="text-[#008294]">Gen Z Global Education</span>
  </h1>
  <h2 className="text-[#264186] font-IBM font-light text-lg mt-5">
    Nepal’s Trusted Leader in Ethical, Global Education Guidance{" "}
    <span className="text-[#008294] font-semibold font-robot">
      Empowering Dreams with Integrity, Experience, and Results.
    </span>
  </h2>
  <p className="text-md mt-5 text-gray-700 font-IBM leading-relaxed font-light">
    For over 14 years, we've helped thousands of students study at top global
    universities. From tailored counseling to visa guidance, we provide
    end-to-end support that turns your academic dreams into reality.
  </p>
  <div
    onClick={() => formNavigation()}
    className="mt-4 flex justify-center md:justify-start"
  >
    <button
      data-aos="fade-left"
      className="relative overflow-hidden mt-10 bg-[#008294] text-white px-2 py-2 rounded-md text-sm font-medium border border-[#008294] group"
    >
      <span className="absolute inset-0 bg-[#264186] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></span>
      <span className="relative font-robot font-light tracking-wide z-10 flex items-center gap-2">
        Book Your Free Counseling <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </button>
  </div>
</div>


  {/* Image + Cards Container */}
  <div className=" hidden md:hidden lg:block md:relative md:w-full lg:max-w-full  md:aspect-square md:-mt-10 mt-10">
    {/* Circle Image */}
    <img
      src="graduate.png"
      alt="Graduate"
      loading="lazy"
      className="absolute inset-0 w-full h-full object-contain"
    />

    {/* Info Cards */}
    <div
      data-aos="zoom-in"
      className="absolute top-[47%] left-[25%] -translate-x-1/2 bg-[#008294]/80 backdrop-blur-lg text-white p-4 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
    >
      <div className="flex items-start gap-2">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="text-white text-lg mt-1"
        />
        <div>
          <p className="font-semibold">97% Visa Success Rate</p>
          <p className="text-sm font-light">Thousands of successful applications</p>
        </div>
      </div>
    </div>

    <div
      data-aos="zoom-in"
      className="absolute top-[59%] right-[5%] bg-[#008294]/80 backdrop-blur-lg text-white p-4 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
    >
      <div className="flex items-start gap-2">
        <FontAwesomeIcon
          icon={faGraduationCap}
          className="text-white text-lg mt-1"
        />
        <div>
          <p className="font-semibold">100+ Scholarships</p>
          <p className="text-sm font-light">Helping you study smarter</p>
        </div>
      </div>
    </div>

    <div
      data-aos="zoom-in"
      className="absolute top-[59%] left-[20%] -translate-x-1/2 bg-[#008294]/80 backdrop-blur-lg text-white p-4 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
    >
      <div className="flex items-start gap-2">
        <FontAwesomeIcon
          icon={faMapMarkedAlt}
          className="text-white text-lg mt-1"
        />
        <div>
          <p className="font-semibold">Global Offices</p>
          <p className="text-sm font-light">
            Guidance from Kathmandu to Sydney
          </p>
        </div>
      </div>
    </div>

    <div
      data-aos="zoom-in"
      className="absolute top-[69%] left-[40%] bg-[#008294]/80 backdrop-blur-lg text-white p-4 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
    >
      <div className="flex items-start gap-2">
        <FontAwesomeIcon
          icon={faGlobeEurope}
          className="text-white text-lg mt-1"
        />
        <div>
          <p className="font-semibold">Global Reach</p>
          <p className="text-sm font-light">
            Partnered with 100+ Universities
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Header;
