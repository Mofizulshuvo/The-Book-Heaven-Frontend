import React from "react";
import { Link, useLoaderData } from "react-router";

const AllBooks = () => {
  const Book_data = useLoaderData();
  console.log(Book_data);

  return (
    <div className="overflow-x-auto p-6">
      <table className="w-5/6 bg-white border border-gray-200 rounded-lg shadow-md px-10 mx-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-5  text-gray-700 font-semibold border-b text-center">
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
              <td className="py-3 px-5 border-b">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-20 h-24 object-cover rounded-lg"
                />
              </td>
              <td className="py-3 px-5 border-b font-semibold text-center ">{book.title}</td>
              <td className="py-3 px-5 border-b font-semibold text-center">{book.author}</td>
              <td className="py-3 px-5 border-b font-semibold text-center">{book.genre}</td>
              <td className="py-3 px-5 border-b font-semibold text-center">{book.rating}</td>
              <td className="py-3 px-5 border-b font-semibold text-center">
                <Link  to={`/BookDetails/${book._id}`}>
                  <button className="text-white bg-gray-600 hover:bg-gray-800 hover:text-white w-[120px] px-3 py-2 rounded-xl">
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBooks;
