import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ui = ({datas=[]}) => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      className="min-h-screen bg-blue-50 flex items-center justify-center p-6"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-3xl p-10"
        data-aos="fade-up"
        style={{ borderTop: '6px solid #0066b3' }}
      >
        <h1
          className="text-4xl font-extrabold mb-8"
          style={{ color: '#0066b3' }}
        >
           Who We Are
        </h1>
{datas.map((paragphx,idx)=>(
<p key={idx} className="text-lg font-robot leading-relaxed text-gray-800 mb-6">{paragphx.paragraph}</p>
))}
        

       
      </div>
    </section>
  );
};

export default Ui;
