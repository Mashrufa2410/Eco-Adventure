import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-cover bg-center min-h-[500px] flex items-center px-4 sm:px-6 md:px-16 lg:px-24 rounded-xl mb-20 w-full border border-gray-300 shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between w-full bg-opacity-90 rounded-lg p-6 sm:p-10 shadow-xl gap-6 sm:gap-8 md:gap-12 hover:shadow-2xl transition duration-300">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 border-b-2 border-[#03823e] pb-2">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            We’d love to hear from you! Whether you have a question, feedback,
            or just want to say hello, feel free to get in touch. Let’s connect and
            create something amazing together!
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <form className="space-y-4 sm:space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 sm:px-5 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03823e] transition duration-300 hover:border-[#03823e]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 sm:px-5 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03823e] transition duration-300 hover:border-[#03823e]"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 sm:px-5 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03823e] transition duration-300 hover:border-[#03823e]"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-[#03823e] text-white rounded-lg font-medium hover:bg-[#026b32] transition duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
