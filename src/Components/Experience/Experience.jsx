import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.init";
import { motion } from "framer-motion";

const Experience = () => {
  const [blogs, setBlog] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleExploreClick = (blog) => {
    if (user) {
      navigate("/adventureDetails", { state: { blog } });
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((error) =>
        console.log("say hello to your nightmare", error.message)
      );
  }, []);

  return (
    <div>
      {blogs.map((blog, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="flex items-center flex-wrap lg:flex-nowrap gap-8 mb-8 p-6 shadow-lg border border-gray-200 rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300"
        >
          <motion.div
            className="w-full lg:w-[500px] h-auto"
            whileHover={{ scale: 1.05 }}
          >
            <img
              className="w-full h-[250px] lg:h-[350px] rounded-lg object-cover"
              src={blog.Image}
              alt={blog.AdventureTitle}
            />
          </motion.div>

          <div className="flex flex-col justify-between w-full">
            <div>
              <h1 className="text-2xl lg:text-3xl font-semibold text-[#03823e] mb-3">
                {blog.AdventureTitle}
              </h1>
              <p className="text-gray-600 w-[400px] leading-6 mb-4">
                {blog.ShortDescription}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 items-center text-gray-700">
              <p className="bg-green-100 text-green-800 px-3 py-1 rounded-md font-medium">
                Booking: {blog.BookingAvailability}
              </p>
              <p className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md font-medium">
                Travel expense: ${blog.AdventureCost}
              </p>
            </div>

            <div className="my-4">
              <h2 className="text-xl font-bold text-[#03823e] mb-2">
                Eco-Friendly Features
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                {blog.EcoFriendlyFeatures.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <button
              className="px-5 py-2 mb-3 bg-[#03823e] text-white rounded-lg"
              onClick={() => handleExploreClick(blog)}
            >
              Explore Now
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
