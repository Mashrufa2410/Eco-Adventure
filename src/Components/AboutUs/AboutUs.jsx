import React from "react";
import AdventureImage from "../../assets/images/adventure.jpg";

const AboutUs = () => {
  return (
<div className="px-6 py-20">
  <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
    <div className="w-full lg:w-1/2">
      <h2 className="text-3xl font-semibold text-[#03823e] mb-2">About Us</h2>
      <h3 className="text-xl font-semibold text-gray-600 mb-6">
        Adventure Blog: Explore, Discover, and Experience the World
      </h3>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to <span className="font-bold text-[#03823e]">Adventure Blog</span>—your go-to destination for thrilling and eco-friendly travel experiences. Whether you're an avid adventurer, nature enthusiast, or cultural explorer, we bring you the best of travel through curated stories, insightful guides, and exciting adventure recommendations.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Our mission is simple: inspire you to explore the world responsibly, uncover hidden gems, and embark on unforgettable journeys—all while preserving the beauty of the places we visit.
      </p>
      <button
        className="btn bg-[#03823e] text-white py-2 px-4 rounded-md transition duration-300"
      >
        Explore More Adventures
      </button>
    </div>

    <div className="w-full lg:w-1/2">
      <img
        className="w-full lg:w-[500px] h-auto rounded-xl shadow-lg"
        src={AdventureImage}
        alt="Adventure"
      />
    </div>
  </div>
</div>

  );
};

export default AboutUs;
