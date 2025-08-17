import {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { countryRoutes } from '../PageNavigation/pageNav';
const UniversityVisits = () => {
  
const Navigates = useNavigate()
  const handleNavigation = (countryName) => {
    const route = countryRoutes[countryName];
    if (route) {
      setTimeout(() => Navigates(route), 300);
    }
  };
  useEffect(() => {
    Aos.init({ duration: 300, once: true });
  }, []);
  const topUniversities = [
    {
      name: 'Study in USA',
      country: '🇺🇸 USA',
      image: 'hurvard.jpg',
      subName:'USA'
    },
    {
      name: 'Study in UK',
      country: '🇬🇧 UK',
      image: 'oxford.jpg',
      subName:`UK`
    },
    {
      name: 'Study in Australia',
      country: '🇦🇺 Australia',
      image: 'melbourne.jpg',
      subName:`Australia`
    },
    {
      name: 'Study in Canada',
      country: '🇨🇦 Canada',
      image: 'Toronto.jpg',
      subName:`Canada`
    },
    {
      name: 'Study in Switzerland',
      country: '🇨🇭 Switzerland',
      image: 'universityN.jpg',
      subName:`Switzerland`
    },
    {
      name: 'Study in Germany',
      country: 'Germany',
      image: 'Singapore.jpg',
    },
  ];

  return (
    <div  className="bg-[rgb(242,249,255)] py-12 px-6 md:px-20 rounded-xl max-w-[1400px] mx-auto">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-IBM font-bold text-[#264186] mb-6 text-center">
         Explore Global Study Destinations 
      </h2>
      <p data-aos="fade-up" data-aos-delay="1000" className="text-gray-600 mb-10 max-w-3xl mx-auto font-IBM font-light text-center text-sm md:text-base leading-relaxed">
       Learn more about top-ranked universities in Australia, the UK, USA, Canada, and beyond. We assist with 
applications to approved institutions worldwide. 
      </p>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1.1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-14"
      >
        {topUniversities.map((uni, index) => (
          <SwiperSlide key={index}>
            <div data-aos="fade-right" data-aos-delay="1000" className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer h-[320px] sm:h-[360px] md:h-[380px]">
              {/* Image */}
              <img
                src={uni.image}
                alt={uni.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 flex flex-col justify-end rounded-2xl">
                <h3 className="text-xl md:text-2xl font-semibold text-white drop-shadow-lg">{uni.name}</h3>
                <span className="text-sm md:text-base text-white/90 mb-3">{uni.country}</span>
                <button onClick={()=>handleNavigation(uni.subName)} className="inline-flex items-center gap-2 text-white bg-[#008294] hover:bg-[#264186] font-semibold px-5 py-2 rounded-full text-sm md:text-base transition-colors duration-300 shadow-md hover:shadow-lg">
                  Learn More <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Explore Button */}
    </div>
  );
};

export default UniversityVisits;
