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
        const res = await fetch(
          `https://the-book-heaven-server-1.onrender.com/Book-data/${id}`
        );
        const data = await res.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  /* ---------------- Loading State ---------------- */
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-pulse space-y-4 w-full max-w-4xl px-4">
          <div className="h-80 bg-gray-200 rounded-2xl" />
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
    );
  }

  /* ---------------- Not Found ---------------- */
  if (!book || !book._id) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-red-500 font-medium">
        Book not found
      </div>
    );
  }

  const { title, author, genre, rating, summary, coverImage, userEmail } = book;

  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-10">
          {/* ---------- Book Image ---------- */}
          <div className="flex justify-center">
            <img
              src={coverImage}
              alt={title}
              className="w-64 h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* ---------- Book Info ---------- */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-block mb-3 text-sm font-semibold px-4 py-1 rounded-full bg-indigo-100 text-indigo-700">
                {genre}
              </span>

              <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
                {title}
              </h1>

              <p className="text-gray-600 mb-4">
                by <span className="font-medium text-gray-900">{author}</span>
              </p>

              {/* ---------- Rating ---------- */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {rating} / 5
                </span>
              </div>

              {/* ---------- Summary ---------- */}
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                {summary}
              </p>
            </div>

            {/* ---------- Footer Info ---------- */}
            <div className="mt-8 border-t pt-4">
              <p className="text-sm text-gray-500">
                Submitted by{" "}
                <span className="font-medium text-gray-800">
                  {userEmail}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book_Details;
