import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const userEmail = user?.email;

  useEffect(() => {
    if (!userEmail) return;

    fetch(`https://the-book-heaven-server-1.onrender.com/my-books/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, [userEmail]);

  const confirmDelete = async (id) => {
    try {
      const res = await fetch(`https://the-book-heaven-server-1.onrender.com/Book-data/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setBooks((prev) => prev.filter((book) => book._id !== id));
        toast.success("Book deleted");
      }
    } catch (err) {
      console.error("Error deleting book:", err);
      toast.error("Delete failed");
    }
  };

  const handleDelete = (id) => {
    toast(
      ({ closeToast }) => (
        <div className="text-center">
          <p className="mb-4">Are you sure you want to delete this book?</p>
          <div className="flex justify-center gap-4">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => {
                confirmDelete(id);
                closeToast();
              }}
            >
              Yes
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={closeToast}
            >
              No
            </button>
          </div>
        </div>
      ),
      { closeOnClick: false, autoClose: false, position: "top-center" }
    );
  };

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <Helmet>
        <title>The Book Heaven | My Books </title>
      </Helmet> 
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Books You Added
      </h2>

      {!books.length ? (
        <p className="text-center text-gray-600 text-lg mt-10">
          You haven't added any books yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[300px] md:min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-2 md:px-5 text-center text-gray-700 font-semibold border-b">
                  Cover
                </th>
                <th className="py-3 px-2 md:px-5 text-center text-gray-700 font-semibold border-b">
                  Title
                </th>
                <th className="hidden md:table-cell py-3 px-5 text-center text-gray-700 font-semibold border-b">
                  Author
                </th>
                <th className="hidden md:table-cell py-3 px-5 text-center text-gray-700 font-semibold border-b">
                  Genre
                </th>
                <th className="hidden md:table-cell py-3 px-5 text-center text-gray-700 font-semibold border-b">
                  Rating
                </th>
                <th className="py-3 px-2 md:px-5 text-center text-gray-700 font-semibold border-b">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {books.map((book) => (
                <tr key={book._id} className="hover:bg-gray-50">
                  <td className="py-2 px-2 md:px-5 border-b text-center">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-16 sm:w-20 h-20 sm:h-24 object-cover rounded-lg mx-auto"
                    />
                  </td>
                  <td className="py-2 px-2 md:px-5 border-b text-center font-semibold text-sm sm:text-base">
                    {book.title}
                  </td>
                  <td className="hidden md:table-cell py-2 px-5 border-b text-center font-semibold">
                    {book.author}
                  </td>
                  <td className="hidden md:table-cell py-2 px-5 border-b text-center font-semibold">
                    {book.genre}
                  </td>
                  <td className="hidden md:table-cell py-2 px-5 border-b text-center font-semibold">
                    {book.rating}
                  </td>
                  <td className="py-2 px-2 md:px-5 border-b text-center">
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                      <Link to={`/updateBook/${book._id}`}>
                        <button className="w-full sm:w-auto px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm sm:text-base">
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(book._id)}
                        className="w-full sm:w-auto px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm sm:text-base"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBooks;
