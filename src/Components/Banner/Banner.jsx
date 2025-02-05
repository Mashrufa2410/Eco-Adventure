import React from "react";
import image4 from "../../assets/images/pexels-ekamelev-813872.jpg";
import image3 from "../../assets/images/freepik.jpeg";
import image2 from "../../assets/images/winter-mountain.jpg";

const Banner = () => {
  return (
    <div className="w-full flex flex-col items-center mx-auto">
      {/* Carousel Wrapper */}
      <div className="carousel w-full flex overflow-hidden relative mt-3">
        {[
          { id: "item1", src: "https://img.freepik.com/premium-photo/illustration-frozen-ocean-with-mountains-background_777078-1577.jpg?w=996" },
          { id: "item2", src: image2 },
          { id: "item3", src: image3 },
          { id: "item4", src: image4 },
        ].map((item) => (
          <div key={item.id} id={item.id} className="carousel-item w-full flex-none relative">
            <img
              src={item.src}
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover"
              alt="Banner"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 sm:p-6 md:p-10 flex flex-col justify-center items-center text-center text-white z-10 bg-black bg-opacity-50 rounded-lg">
              <h1 className="text-lg sm:text-2xl md:text-4xl font-bold mb-4 sm:w-[500px] md:w-[700px]">
                Embark on Green Journeys: Explore, Inspire, Conserve
              </h1>
              <p className="w-full sm:w-[600px] md:w-[800px] text-xs sm:text-sm md:text-base">
                Join us on a journey through untamed landscapes and vibrant ecosystems. Discover the beauty of nature, embrace sustainable living, and ignite your passion for adventure.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Navigation */}
      <div className="flex justify-center gap-2 py-4">
        {["item1", "item2", "item3", "item4"].map((id, index) => (
          <a key={id} href={`#${id}`} className="btn btn-xs sm:btn-sm bg-gray-100 text-black border hover:bg-gray-200">
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Banner;
