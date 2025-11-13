import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const UpdateBook = () => {
  const { id } = useParams(); // ✅ get id from URL
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    rating: "",
    coverImage: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/Book-data/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data); // ✅ Prefill form
      })
      .catch((err) => console.error("Error fetching book:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/Book-data/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Book updated successfully!");
          navigate("/MyBooks");
        } else {
          alert("Failed to update book.");
        }
      })
      .catch((err) => console.error("Error updating book:", err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-2/3 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Update Book</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold">Title</label>
            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Author</label>
            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Genre</label>
            <input
              type="text"
              name="genre"
              value={book.genre}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Rating</label>
            <input
              type="number"
              name="rating"
              value={book.rating}
              onChange={handleChange}
              min="1"
              max="5"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Cover Image URL</label>
            <input
              type="text"
              name="coverImage"
              value={book.coverImage}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {book.coverImage && (
            <div className="flex justify-center mt-4">
              <img
                src={book.coverImage}
                alt="Book Cover"
                className="w-40 h-56 object-cover rounded-lg shadow"
              />
            </div>
          )}

          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Update Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
