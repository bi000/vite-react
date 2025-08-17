import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const GrievancePolicyUI = ({Head,cardData=[],}) => {
  return (
    <section className="bg-white text-[#264186] font-roboto px-4 py-12 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{Head}</h2>

        {/* Card List */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Commitment */}
          {cardData.map((data,index) =>(
             <div key={index} className="bg-[#f4f6fb] p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon icon={data.icon} className="w-6 h-6 text-[#264186]" />
              <h3 className="text-xl font-semibold">{index+1}.{data.Maincontent}</h3>
            </div>
            <p className="text-base leading-relaxed">
             {data.subContent}
            </p>
          </div>
          ))}
                </div>
      </div>
    </section>
  );
};

export default GrievancePolicyUI;
