import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { countryRoutes,serviceRoutes } from '../PageNavigation/pageNav';
import Ieea from '../PageNavigation/badge';
const Footer = () => {
  const footerData = [
    "Course & Career Counseling",
    "Application & Visa Support",
    "IELTS, PTE & Duolingo Prep",
    "Scholarship Assistance",
    "Pre & Post Departure Support"
    ];
  const footerLinks = [
    'About Us',
    'Destinations',
    'Services',
    'Student Journey',
    'Universities',
    'Article'
  ];
  const studyDestinations = [
    'UK',
    'USA',
    'Canada',
    'Australia',
    'New Zealand'
   
  ];
  const Certified=[
    `badge/Certificate.png`,
    `badge/Certificate2.png`,
    `badge/ISO.png`,
    `badge/Certificate3.png`
  ]
   const Navigates = useNavigate()
  const handleNavigation = (countryName) => {
    const route = countryRoutes[countryName];
    if (route) {
      setTimeout(() => Navigates(route), 300);
    }
  };
  const serviceNavigation = (idx) => {
    const route = serviceRoutes[idx];
    if (route) {
      setTimeout(() => Navigates(route), 300);
    }
  };
  const handleItemClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-white"       >
      <div className="max-w-7xl mx-auto py-4 px-[0%] md:px-2 grid grid-cols-1 md:grid-cols-4 gap-0">
        {/* Left - Logo and Newsletter */}
        <div className="col-span-1 flex flex-col gap-0">
          <div data-aos="fade-left" data-aos-delay="300">
            <img src="Logo.png" alt="Edwise Logo" loading="lazy" className="w-[60%] mb-3 bg-white p-3 rounded-md" />
<p className='text-sm font-robot font-light text-gray-700 px-[3%]'>Nepal’s Trusted Leader in Ethical,<br/> Global Education Guidance Empowering Dreams with Integrity, Experience, <br/>and Results.</p>

            <div className="flex gap-5 text-[#008294] text-xl py-[8%] px-5 lg:px-0">
              <a href="#" aria-label="Facebook" className="hover:text-[#264186] transition-colors duration-300"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-[#264186] transition-colors duration-300"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-[#264186] transition-colors duration-300"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-[#264186] transition-colors duration-300"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>
          <div className='relative'>
           <div className=' fixed lg:absolute bottom-[28%] md:left-0 left-[70%] w-[25%] h-[6%] mt-[7%] z-50'>
                    <h1 className='hidden lg:block lg:text-[#264186] lg:font-robot lg:font-semibold lg:tracking-wide'>Accredited by: </h1>
                <Ieea/>
                  </div>
</div>
        </div>

        {/* Study Destinations */}
        <div data-aos="fade-up" data-aos-delay="500" className="text-gray-700 font-robot font-light text-left lg:px-0 md:px-0 px-5 ">
          <h3 className="font-robot font-semibold mb-5 text-lg text-[#264186]">Study Destinations</h3>
          <ul className="space-y-3">
            {studyDestinations.map((item, idx) => (
              <li
                key={idx}
                onClick={()=>handleNavigation(item)}
                className="relative w-fit group cursor-pointer"
              >
                <span className="transition-colors duration-300 group-hover:text-[#008294]">
                  Study in {item}
                </span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#008294] transition-all duration-300 group-hover:w-full rounded"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="500" className="text-gray-700 h-[80%]  font-robot font-light text-left bg-red px-5 py-3 md:py-0 lg:px-0 md:px-0">
          <h3 className="font-robot font-semibold mb-0 text-lg text-[#264186]">Quick Links</h3>
          <ul className="space-y-3">
            {footerLinks.map((item, idx) => (
              <li
                key={idx}
                onClick={()=>handleItemClick(idx)}
                className="relative w-fit group cursor-pointer"
              >
                <span className="transition-colors duration-300 group-hover:text-[#008294]">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#008294] transition-all duration-300 group-hover:w-full rounded"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Student Services */}
        <div data-aos="fade-up" data-aos-delay="500" className="text-gray-700 h-[75%] font-robot font-light text-left px-5 md:px-0 ">
          <h3 className="font-robot font-semibold mb-0 text-lg text-[#264186]">Student Services</h3>
          <ul className="space-y-3">
            {footerData.map((item, idx) => (
              <li
                key={idx}
                onClick={()=>serviceNavigation(idx)}
                className="relative w-fit group cursor-pointer"
              >
                <span className="transition-colors duration-300 group-hover:text-[#008294]">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#008294] transition-all duration-300 group-hover:w-full rounded"></span>
              </li>
            ))}
          </ul>
                 
        </div>
      </div>
<h5 className="text-[#264186] text-base text-center font-robot font-bold tracking-wider mt-0 underline">
  Certified by:
</h5>
<div className="flex justify-center items-center gap-6 flex-wrap py-0">
{Certified.map((itm,idx)=>(
  <div key={idx} className='px-[3%] w-24 sm:w-24 md:w-36  aspect-[4/3]'>
  <img src={itm} alt="QEAC Certified" className="w-full h-full object-contain" />
  {/* Add more images here if needed, same class */}
  {/* <img src="badge/ICEF.png" alt="ICEF Certified" className="w-24 h-auto object-contain" /> */}
</div>
))}

</div>

      {/* Bottom Bar */}
      <div data-aos="fade-up" data-aos-delay="500" className="border-t border-[#008294]/40 mt-0 py-0 text-center text-[#264186]">
        <p className="text-sm">
          ©ISO 9001:2015 Certified by Ministry of Education, Government of Nepal
        </p>
      </div>
    </footer>
  );
};
export default Footer;
