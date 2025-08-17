import React from 'react';
import { ShieldCheck, Trophy, Globe, UsersRound } from 'lucide-react';

const CoreValue = () => {
  return (
    <section className="w-full bg-[#e7f2f4] py-12 px-4 md:px-20">
              <h1 className=' text-4xl font-IBM text-center text-[#264186] font-bold tracking-wide px-[5%]'>Our Core Value </h1>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Background Circle Image */}
        <div className="relative z-10">
          <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-[#1f7c87] bg-white shadow-xl overflow-hidden flex items-center justify-center">
            <img
              src="circleImage.jpg"
              alt="Graduate"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Desktop Cards */}
          <div className='hidden md:block'>

            <div className="absolute top-[20%] -left-6 md:-left-[20%] w-[250px] bg-[#03989e] text-white px-4 py-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-6 h-6" />
                <span className="font-bold">Integrity</span>
              </div>
              <p className="text-sm font-robot font-light">We prioritize honesty and ethical counseling in every interaction.</p>
            </div>

            <div className="absolute bottom-[55%] right-0 md:-right-[10%] w-[250px] bg-[#03989e] text-white px-4 py-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-6 h-6" />
                <span className="font-bold">Expertise</span>
              </div>
              <p className="text-sm">Our team brings 14+ years of experience and global certification.</p>
            </div>

            <div className="absolute bottom-4 left-[10%] md:left-[20%] w-[250px] bg-[#03989e] text-white px-4 py-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 mb-1">
                <Globe className="w-6 h-6" />
                <span className="font-bold">Student-Centricity</span>
              </div>
              <p className="text-sm">Every decision is guided by what’s best for the student.</p>
            </div>

            <div className="absolute bottom-[35%] left-[60%] md:left-[-90px] w-[250px] bg-[#03989e] text-white px-4 py-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 mb-1">
                <Globe className="w-6 h-6" />
                <span className="font-bold">Accountability</span>
              </div>
              <p className="text-sm">We take ownership — from the first inquiry to visa success.</p>
            </div>

            <div className="absolute bottom-36 left-[10%] md:left-[60%] w-[250px] bg-[#03989e] text-white px-4 py-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 mb-1">
                <Globe className="w-6 h-6" />
                <span className="font-bold">Global Perspective</span>
              </div>
              <p className="text-sm">We align our students with international standards and trends.</p>
            </div>

          </div>
        </div>
      </div>

      {/* ✅ Mobile View - Stack All Cards */}
      <div className="block md:hidden mt-10 space-y-4">
        {[
          {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: 'Integrity',
            desc: 'We prioritize honesty and ethical counseling in every interaction.',
          },
          {
            icon: <Trophy className="w-6 h-6" />,
            title: 'Expertise',
            desc: 'Our team brings 14+ years of experience and global certification.',
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: 'Student-Centricity',
            desc: 'Every decision is guided by what’s best for the student.',
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: 'Accountability',
            desc: 'We take ownership — from the first inquiry to visa success.',
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: 'Global Perspective',
            desc: 'We align our students with international standards and trends.',
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-[#03989e] text-white px-4 py-3 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-2 mb-1">
              {card.icon}
              <span className="font-bold">{card.title}</span>
            </div>
            <p className="text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValue;
