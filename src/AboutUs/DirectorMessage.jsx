import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DirectorMessage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section className="px-[5%] py-[3%] shadow-lg">
        <div data-aos="fade-right" data-aos-delay="700" className="w-full h-full shadow-lg rounded-t-2xl">
          {/* Profile image circle */}
          <div className="directorMsg w-full min-h-full px-0 py-0 flex justify-center">
            <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] rounded-full border border-dashed border-green-500 shadow-2xl">
              <img src='owner.jpg' loading="lazy" alt='Owner' className='w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] rounded-full'/>
              {/* You can put image here if needed */}
            </div>
          </div>

          {/* Intro section */}
          <div className="w-full h-full px-[2%] py-[2%]">
            <div className="w-full flex justify-center">
              <div className="w-full lg:w-[50%] px-[5%] lg:px-[7%] mt-0 lg:ml-[18%] text-center lg:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-robot text-[#264186] font-light tracking-normal leading-normal">
                  Roshan Ghimire
                </h3>
                <h4 className="text-sm sm:text-base lg:text-lg font-robot text-[#264186] font-light tracking-normal leading-normal">
                  Founder & Managing Director
                </h4>
                <h3 className="text-sm sm:text-base font-robot text-[#264186] font-light tracking-normal leading-normal">
                  IEAA Associate Fellow | QEAC | ICEF | British Council <br />| ISANA | Think NZ | certified
                </h3>
              </div>
            </div>

            {/* Owner expression */}
            <div className="w-full text-sm sm:text-base text-gray-700 px-[5%] py-[5%] text-left font-robot font-light tracking-normal leading-relaxed">
              <p>
                After 14 years in international education — including senior leadership roles at Holmes Education Group — I founded Gen Z Global with a mission to raise the standard of student counseling in Nepal and beyond. My goal was not to open just another agency, but to build a team that puts ethics, compliance, and student success at the heart of everything we do.
                <br /><br />
                At Gen Z Global Education & Visa Services, we measure success not just by visas granted but by the long-term impact our students make globally. We are proud to be ISO 9001:2015 certified, ICEF accredited, and approved by the Ministry of Education, Government of Nepal — credentials that reflect our commitment to transparency, quality, and compliance.
              </p>
            </div>

            {/* Services list */}
            <div className="w-full text-sm sm:text-base text-gray-700 px-[2%] py-[5%] lg:py-[3%] text-left font-robot font-light tracking-normal leading-relaxed">
              <h3 className="text-base sm:text-lg text-center font-robot text-[#264186] font-light tracking-normal leading-normal">
                Our role goes far beyond paperwork. We offer:
              </h3>
              <ul className="list-disc font-robot font-light text-gray-700 tracking-normal leading-normal px-[5%] py-[3%] space-y-2">
                <li>Honest, student-first guidance tailored to each individual’s goals.</li>
                <li>Thorough, compliant visa preparation aligned with institutional and immigration standards.</li>
                <li>Cultural, academic, and career preparation to ensure students thrive abroad.</li>
                <li>A lifelong network of alumni and partners for continued growth.</li>
              </ul>

              <div className="w-full text-sm sm:text-base text-gray-700 px-[2%] py-[2%] text-left font-robot font-light tracking-normal leading-relaxed">
                <p>
                  From your first counseling session to post-arrival alumni support, our mission is clear:
                  <br />
                  <strong>Transforming Lives Through International Education</strong> — guided by care, expertise, and integrity.
                  If you are a student dreaming of an international education, or a higher education institution seeking a trusted, ethical partner, I personally invite you to connect with us and discover the Gen Z Global difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DirectorMessage;
