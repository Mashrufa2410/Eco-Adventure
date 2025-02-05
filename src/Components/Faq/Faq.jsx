import React from "react";
import { motion } from "framer-motion";

const Faq = () => {
  const faqs = [
    {
      question: "What makes an adventure eco-friendly?",
      answer:
        "Eco-friendly adventures minimize environmental impact by promoting sustainable practices such as using renewable energy, supporting local communities, and adhering to conservation principles.",
    },
    {
      question: "Are eco-adventures family-friendly?",
      answer:
        "Many eco-adventures are family-friendly and cater to various age groups. Check the 'Adventure Level' and 'Max Group Size' on each trip for specific details.",
    },
    {
      question: "What should I pack for an eco-adventure?",
      answer:
        "Pack essentials like reusable water bottles, eco-friendly sunscreen, comfortable clothing, and any activity-specific gear. Check the 'Special Instructions' section for each adventure for detailed packing lists.",
    },
    {
      question: "How do I book an eco-adventure?",
      answer:
        "Booking is simple! Visit the details page of your desired adventure and click on the 'Book Now' button. Follow the instructions to confirm your reservation.",
    },
    {
      question: "Can I cancel or reschedule my booking?",
      answer:
        "Yes, cancellations and reschedules are allowed based on our policies. Please check the 'Booking Terms' section for details or contact us for assistance.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-[#03823e] text-center mb-8"
      >
        Frequently Asked Questions
      </motion.h1>
      
      {faqs.map((faq, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-green-100 mb-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <input type="checkbox" className="hidden peer" id={`faq-${index}`} />
          <label 
            htmlFor={`faq-${index}`} 
            className="block text-xl font-medium text-gray-800 cursor-pointer peer-checked:text-[#03823e]"
          >
            {faq.question}
          </label>
          <div className="mt-2 text-gray-700 hidden peer-checked:block">
            {faq.answer}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Faq;
