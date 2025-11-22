import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Users_review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          "https://the-book-heaven-server-1.onrender.com/reviews"
        );
        const data = await res.json();
        setReviews(data.data || []);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };

    fetchReviews();
  }, []);

  if (!reviews.length)
    return <p className="text-center mt-10 text-lg">No reviews yet</p>;

  return (
    <section className="w-full py-10 px-4 sm:px-6 md:px-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        User Reviews
      </h2>

      <div className="overflow-x-auto">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8"
          initial={{ x: 0 }}
          whileHover={{ x: -200 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {reviews.map((card) => (
            <motion.div
              key={card._id || card.id}
              className="flex-shrink-0 w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] bg-white rounded-xl p-4 sm:p-5 flex flex-col items-center shadow-md hover:shadow-xl transition"
            >
              <img
                src={card.image}
                alt={card.userName}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-md"
              />
              <h3 className="text-base sm:text-lg font-bold mt-3 sm:mt-4 text-center truncate">
                {card.userName}
              </h3>
              <p className="text-gray-600 text-center mt-2 text-sm sm:text-base line-clamp-4">
                {card.summary}
              </p>
              <p className="mt-2 sm:mt-3 font-semibold text-yellow-500 text-sm sm:text-base">
                ⭐ {card.rating} / 5
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Users_review;
