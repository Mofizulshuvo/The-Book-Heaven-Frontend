import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import image9 from "../../assets/images/9.jpg";

const Cover = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  return (
    <div
      className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${image9})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
          Add Your Favorite Book List here
        </h2>

        <p className="max-w-xl mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg text-gray-200">
          Explore thousands of reviews, ratings, and recommendations from passionate readers.
        </p>

        {user ? (
          <Link to="/AddBooks">
            <button className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-200 transition text-sm sm:text-base md:text-lg">
              Add Now
            </button>
          </Link>
        ) : (
          <p className="text-red-400 font-semibold text-sm sm:text-base">
            Log in to add a book
          </p>
        )}
      </div>
    </div>
  );
};

export default Cover;
