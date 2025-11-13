import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { Link } from "react-router";

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  const handleUpdate = (book) => {
    console.log("Update book:", book);
  };

  const handleDelete = (id) => {
    console.log("Delete book with id:", id);
  };

  useEffect(() => {
    if (!userEmail) return;

    fetch(`http://localhost:5000/my-books/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        console.log("Fetched books:", data);
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, [userEmail]);

  if (!userEmail) return <p>Loading user info...</p>;
  if (!books.length) return <p>No books found for this user.</p>;

  return (
    <div className="overflow-x-auto p-6">
      <h2 className="text-xl font-bold mb-4 text-center">My Books</h2>
      <table className="w-5/6 bg-white border border-gray-200 rounded-lg shadow-md px-10 mx-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-5 text-gray-700 font-semibold border-b text-center">
              Cover
            </th>
            <th className="py-3 px-5 text-gray-700 font-semibold border-b text-center">
              Title
            </th>
            <th className="py-3 px-5 text-gray-700 font-semibold border-b text-center">
              Author
            </th>
            <th className="py-3 px-5 text-gray-700 font-semibold border-b text-center">
              Genre
            </th>
            <th className="py-3 px-5 text-gray-700 font-semibold border-b text-center">
              Rating
            </th>
            <th className="py-3 px-5 text-gray-700 font-semibold border-b text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
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
              <td className="py-3 px-5 border-b font-semibold text-center space-x-2">
                <Link to="/updateBook">
                  <button className="text-white bg-blue-500 hover:bg-blue-700 w-[100px] px-3 py-2 rounded-xl">
                    Update
                  </button>
                </Link>
                <button
                  className="text-white bg-red-500 hover:bg-red-700 w-[100px] px-3 py-2 rounded-xl"
                  onClick={() => handleDelete(book._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBooks;
