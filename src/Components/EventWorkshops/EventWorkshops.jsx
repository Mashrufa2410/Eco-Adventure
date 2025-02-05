import React from "react";
import { motion } from "framer-motion";

const EventWorkshops = () => {
  const events = [
    {
      id: 1,
      title: "Sustainable Travel Workshop",
      date: "December 5, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Online (Zoom)",
      description: "Learn sustainable travel tips from eco-tourism experts.",
      signupLink: "https://example.com/sustainable-workshop",
    },
    {
      id: 2,
      title: "Beach Cleanup Drive",
      date: "December 10, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Bondi Beach, Australia",
      description: "Join hands to clean and restore our beautiful beaches.",
      signupLink: "https://example.com/beach-cleanup",
    },
    {
      id: 3,
      title: "Eco-Tourism Meetup",
      date: "December 20, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Green Valley Eco Park, California",
      description: "Connect with like-minded travelers and share experiences.",
      signupLink: "https://example.com/eco-meetup",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 min-h-screen">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#03823e] mb-4 drop-shadow-lg">
          Events & Workshops
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto">
          Join our exciting eco-friendly events and workshops to make a difference. Learn, participate, and contribute to sustainable travel initiatives.
        </p>
      </motion.div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <motion.div 
            key={event.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: event.id * 0.2 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#03823e] mb-3">{event.title}</h2>
              <p className="text-gray-600 text-sm mb-2">
                <strong className="text-gray-800">Date:</strong> {event.date}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong className="text-gray-800">Time:</strong> {event.time}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                <strong className="text-gray-800">Location:</strong> {event.location}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>
              <a
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#03823e] text-white font-semibold py-3 rounded-md hover:bg-[#025b2a] transition-all duration-300"
              >
                Sign Up
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventWorkshops;
