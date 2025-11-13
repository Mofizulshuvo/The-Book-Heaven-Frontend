import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import AuthContext from "../../Context/AuthContext";

const Book_Details = () => {
  const { AllBooks } = useContext(AuthContext);
  const { id } = useParams();
  console.log(id)

  if (!AllBooks) return <div className="text-center mt-20">Loading books...</div>;
  console.log(AllBooks)

  const clicked_book = AllBooks.find((res) => res._id === id?.trim());
  console.log(clicked_book)
  

  if (!clicked_book) return <div className="text-center mt-20 text-red-500">Book not found!</div>;

  const { title, author, genre, rating, summary, coverImage, userEmail } = clicked_book;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden mt-10 p-6 sm:p-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0">
          <img src={coverImage} alt={title} className="w-full md:w-64 h-96 object-cover rounded-2xl shadow-lg" />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{title}</h1>
            <p className="text-gray-600 text-lg mb-2">
              by <span className="font-semibold text-gray-800">{author}</span>
            </p>
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {genre}
            </span>
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"} />
              ))}
              <span className="ml-2 text-gray-600">{rating}</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Summary</h2>
            <p className="text-gray-700 leading-relaxed">{summary}</p>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-500">
              Submitted by: <span className="text-gray-800 font-medium">{userEmail}</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex flex-wrap gap-4">
        <button className="bg-[#006584] hover:bg-[#004f65] text-white py-2 px-6 rounded-xl font-medium transition-colors duration-200">
          Borrow Book
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-xl font-medium transition-colors duration-200">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default Book_Details;
