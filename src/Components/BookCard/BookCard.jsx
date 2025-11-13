import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ data }) => {
  const { _id ,title, author, genre, rating } = data;
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition-shadow duration-300 border border-gray-100 max-w-xs">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

      <p className="text-gray-500 text-sm mb-3">
        by <span className="font-medium text-gray-700">{author}</span>
      </p>

      <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        {genre}
      </div>

      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>

      <Link to={`/BookDetails/${_id.trim()}`}>
        <button className="mt-2 w-full bg-[#006584] text-white py-2 rounded-lg hover:bg-[#004f65] transition-colors duration-200">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default BookCard;
