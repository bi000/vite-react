import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faGraduationCap,
  faLanguage,
  faPenFancy,
  faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons';

const faqs = [
  {
    icon: faClock,
    question: 'How long does the application process take?',
    answer:
      'Typically 4–12 weeks depending on the destination, university, and document readiness.',
  },
  {
    icon: faGraduationCap,
    question: 'Can I get a scholarship?',
    answer:
      'Yes. Many students qualify for partial or full scholarships based on merit, need, or destination.',
  },
  {
    icon: faLanguage,
    question: 'Do I need IELTS for all countries?',
    answer:
      'Not always. Some universities accept alternatives like PTE, Duolingo, or MOI (Medium of Instruction) letters.',
  },
  {
    icon: faPenFancy,
    question: 'Will you write my SOP for me?',
    answer:
      'No. We provide ethical coaching and feedback — students must write their own SOP.',
  },
  {
    icon: faPlaneDeparture,
    question: 'What happens after I get my visa?',
    answer:
      'We provide pre-departure orientation, arrival tips, and connect you with Gen Z alumni in your destination country.',
  },
];

const FAQ = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section className="bg-[#f5fbfd] py-20 px-4 md:px-16 font-['Roboto']">
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0066b3] mb-3">
          📌 Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Quick answers to common questions.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 p-6 flex flex-col gap-3"
          >
            <div className="text-[#0066b3] text-3xl">
              <FontAwesomeIcon icon={faq.icon} />
            </div>
            <h3 className="text-lg font-semibold text-[#0066b3]">{faq.question}</h3>
            <p className="text-gray-600 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
