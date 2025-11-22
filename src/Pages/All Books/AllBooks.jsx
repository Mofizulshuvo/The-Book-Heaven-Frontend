import React from "react";
import { Link, useLoaderData } from "react-router";

const AllBooks = () => {
  const Book_data = useLoaderData();
  console.log(Book_data);

  return (
    <div className="p-4 sm:p-6 md:p-10">
      {/* Table for medium+ screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-5 text-gray-700 font-semibold border-b text-center">
                Cover
              </th>
              <th className="py-3 px-5 text-center text-gray-700 font-semibold border-b">
                Title
              </th>
              <th className="py-3 px-5 text-center text-gray-700 font-semibold border-b">
                Author
              </th>
              <th className="py-3 px-5 text-center text-gray-700 font-semibold border-b">
                Genre
              </th>
              <th className="py-3 px-5 text-center text-gray-700 font-semibold border-b">
                Rating
              </th>
              <th className="py-3 px-5 text-center text-gray-700 font-semibold border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {Book_data.map((book) => (
              <tr key={book._id} className="hover:bg-gray-50">
                <td className="py-3 px-5 border-b text-center">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-20 h-24 object-cover rounded-lg mx-auto"
                  />
                </td>
                <td className="py-3 px-5 border-b font-semibold text-center">
                  {book.title}
                </td>
                <td className="py-3 px-5 border-b font-semibold text-center">
                  {book.author}
                </td>
                <td className="py-3 px-5 border-b font-semibold text-center">
                  {book.genre}
                </td>
                <td className="py-3 px-5 border-b font-semibold text-center">
                  {book.rating}
                </td>
                <td className="py-3 px-5 border-b font-semibold text-center">
                  <Link to={`/BookDetails/${book._id}`}>
                    <button className="text-white bg-gray-600 hover:bg-gray-800 w-30 px-3 py-2 rounded-xl">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout for small screens */}
      <div className="md:hidden flex flex-col gap-6">
        {Book_data.map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center gap-4"
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-32 h-40 object-cover rounded-lg"
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold mb-1">{book.title}</h3>
              <p className="text-gray-600 mb-1">Author: {book.author}</p>
              <p className="text-gray-600 mb-1">Genre: {book.genre}</p>
              <p className="text-gray-600 mb-2">Rating: {book.rating}</p>
              <Link to={`/BookDetails/${book._id}`}>
                <button className="text-white bg-gray-600 hover:bg-gray-800 px-4 py-2 rounded-xl">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
