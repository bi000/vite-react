import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Testimonials = () => {
  const testimonialsData = [
    {
      text: ' "The personalized advice helped me choose the right course and destination. The team is incredibly supportive and professional!"',
      name: "Hemlal Dulal",
      role: "MSc Artificial Intelligence",
      University: "University of East London,The UK",
      img: "Testomonial/hem.jpg",
      rating: 5,
    },
    {
      text: '"Gen Z Global guided me through every step of the application and visa process. Their expertise made my study dream come true!" ',
      name: "Sanyukta Chaulagain",
      role: "Bachelors of Early Childhood Education and Care",
      University:' Crown Institute of Higher Education',
      img: "Testomonial/sanyukta.jpg",
      rating: 4,
    },
    {
      text: "Their personalized career advice helped me choose the right course. The team is supportive and professional!",
      name: "Unik Tamang",
      role: "BA (Hons) Computer Science",
      University:'St Mary’s University London',
      img: "Testomonial/Unik.jpg",
      rating: 5,
    },
        {
      text: ' "Thanks to their ethical guidance and visa help, I secured admission to a top Swiss university. Highly recommend their services"',
      name: " Anil Barakoti",
      role: "MSc International Hospitality and Business Management",
      University:' BHMS, Switzerland',
      img: "Testomonial/Anil.jpg",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          What Our Students Say About Gen Z Global 
        </h2>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-12"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg p-6 mx-4 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2 w-[100%]  h-[500px] lg:h-[400px]">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-24 h-24 rounded-full object-cover mb-6"
                />
                {/*wrapping name and role in a div to ensure proper alignment */}
                <div className='my-3'>
                 <h3 className="text-xl font-semibold  text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
                 <p className="text-gray-500 text-sm">{testimonial.University}</p>
                </div>

                {renderStars(testimonial.rating)}
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow overflow-hidden">
                  "{testimonial.text}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
     
    </section>
  );
};

export default Testimonials;