import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardList from './cardList';
const ServiceUI = ({header,intro,card1=[],card2=[],quotes,cardHeader1,cardHeader2,slogan,pData1=[],pData2=[]}) => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="bg-[#f7fbff] px-[5%] py-16 font-['IBM']">
      {/* Header */}
      <div className="text-center mb-10" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-robot font-semibold text-[#004f99] leading-tight">
          {header}
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto font-robot">
         {intro}
        </p>
              <p className=' font-robot font-bold leading-relaxed tracking-normal py-[1%] text-center text-balance text-[#008294]'><i>{slogan}</i></p>

      </div>

      {/* Cards Container */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        data-aos="fade-up"
      >
    <CardList header={cardHeader1}
    items={card1}
    items1={pData1}
    />
    <CardList header={cardHeader2}
    items={card2}
    items1={pData2}
    />
      </div>
      <p className=' font-robot font-bold leading-relaxed tracking-normal py-[8%] text-center text-balance text-[#008294]'><i>{quotes}</i></p>
    </section>
  );
};

export default ServiceUI;
