import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { Link } from "react-router";

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  useEffect(() => {
    if (!userEmail) return;

    fetch(`http://localhost:5000/my-books/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, [userEmail]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/Book-data/${id}`, 
        { 
            method: "DELETE" 
        })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBooks(books.filter((book) => book._id !== id));
        }
      })
      .catch((err) => console.error("Error deleting book:", err));
  };

  return (
    <div className="overflow-x-auto p-6">
      <h2 className="text-xl font-bold mb-4 text-center">My Books</h2>
      <table className="w-5/6 bg-white border border-gray-200 rounded-lg shadow-md mx-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-5 text-gray-700 font-semibold border-b text-center">Cover</th>
            <th className="py-3 px-5 text-gray-700 font-semibold border-b text-center">Title</th>
            <th className="py-3 px-5 text-gray-700 font-semibold border-b text-center">Author</th>
            <th className="py-3 px-5 text-gray-700 font-semibold border-b text-center">Genre</th>
            <th className="py-3 px-5 text-gray-700 font-semibold border-b text-center">Rating</th>
            <th className="py-3 px-5 text-gray-700 font-semibold border-b text-center">Actions</th>
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
              <td className="py-3 px-5 border-b font-semibold text-center">{book.title}</td>
              <td className="py-3 px-5 border-b font-semibold text-center">{book.author}</td>
              <td className="py-3 px-5 border-b font-semibold text-center">{book.genre}</td>
              <td className="py-3 px-5 border-b font-semibold text-center">{book.rating}</td>
              <td className="py-3 px-5 border-b font-semibold text-center space-x-2">
                <Link to={`/updateBook/${book._id}`}>
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
