import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const AdventureDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const blog = location.state?.blog;

  if (!blog) {
    navigate("/");
    return null;
  }

  function handleExpertContact() {
    const hour = new Date().getHours();

    if (hour >= 10 && hour < 20) {
      window.open("https://meet.google.com/", "_blank");
    } else {
      setIsModalOpen(true);
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-6 my-16 py-8 border border-gray-200 rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl md:text-4xl font-bold text-[#03823e] mb-6 text-center">
        {blog.AdventureTitle}
      </h1>
      <img
        src={blog.Image}
        alt={blog.AdventureTitle}
        className="w-full h-[250px] md:h-[400px] object-cover rounded-lg mb-6 border border-gray-300 hover:shadow-md transition duration-300"
      />
      <p className="text-gray-700 text-base md:text-lg leading-7 mb-6">
        {blog.ShortDescription}
      </p>
      <div className="flex flex-wrap gap-4 mb-6">
        <p className="bg-green-100 text-green-800 px-4 py-2 rounded-md font-medium border border-green-300 hover:bg-green-200 transition duration-300">
          Booking: {blog.BookingAvailability}
        </p>
        <p className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md font-medium border border-blue-300 hover:bg-blue-200 transition duration-300">
          Travel Expense: ${blog.AdventureCost}
        </p>
        <p className="bg-purple-100 text-purple-800 px-4 py-2 rounded-md font-medium border border-purple-300 hover:bg-purple-200 transition duration-300">
          Duration: {blog.Duration}
        </p>
        <p className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md font-medium border border-yellow-300 hover:bg-yellow-200 transition duration-300">
          Level: {blog.AdventureLevel}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border border-gray-300 rounded-lg hover:shadow-md transition duration-300">
          <h2 className="text-xl font-bold text-[#03823e] mb-2">Location</h2>
          <p className="text-gray-700">{blog.Location}</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg hover:shadow-md transition duration-300">
          <h2 className="text-xl font-bold text-[#03823e] mb-2">Included Items</h2>
          <ul className="list-disc list-inside text-gray-700">
            {blog.IncludedItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg hover:shadow-md transition duration-300">
          <h2 className="text-xl font-bold text-[#03823e] mb-2">Eco-Friendly Features</h2>
          <ul className="list-disc list-inside text-gray-700">
            {blog.EcoFriendlyFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={handleExpertContact}
          className="bg-[#03823e] text-white py-3 px-6 rounded-md transition duration-300 hover:bg-[#026b32] shadow-lg"
        >
          Talk To Expert
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 border border-gray-300">
            <h2 className="text-xl font-bold text-[#03823e] mb-4">Consultation Hours</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Our experts are available between **10:00 AM and 8:00 PM**. Please
              try again during this time.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-[#03823e] text-white py-2 px-4 rounded-md transition duration-300 hover:bg-[#026b32] shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdventureDetails;
