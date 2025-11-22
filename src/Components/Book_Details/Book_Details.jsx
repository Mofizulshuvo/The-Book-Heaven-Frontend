import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router";

const Book_Details = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 
    const fetchBook = async () => {
      try {
        const res = await fetch(`https://the-book-heaven-server-1.onrender.com/Book-data/${id}`);
        const data = await res.json();
        setBook(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book:", error);
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);


  if (loading) {
    return <div className="text-center mt-20">Loading book...</div>;
  }


  if (!book || !book._id) {
    return (
      <div className="text-center mt-20 text-red-500">
        Book not found!
      </div>
    );
  }

  const { title, author, genre, rating, summary, coverImage, userEmail } = book;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden mt-10 p-6 sm:p-10">
      <div className="text-center">

        <div className=" w-full md:w-1/3 mb-6 md:mb-0 mx-auto">
          <img
            src={coverImage}
            alt={title}
            className="w-full md:w-64 h-96  rounded-2xl shadow-lg mx-auto md:mx-0 "
          />
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

            <div className="flex items-center justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={i < rating ? "text-yellow-400" : "text-gray-300"}
                />
              ))}

              <span className="ml-2 text-gray-600">{rating}</span>
            </div>

            <h2 className="text-xl font-semibold  text-gray-800 mb-2">
              Summary
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">{summary}</p>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-500">
              Submitted by:{" "}
              <span className="text-gray-800 font-medium">{userEmail}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4 mx-auto justify-center">
      </div>
    </div>
  );
};

export default Book_Details;
