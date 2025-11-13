import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const UpdateBook = () => {
  const { clickedBookId } = useParams(); // book _id from URL
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    rating: "",
    coverImage: "",
  });
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    fetch(`http://localhost:5000/Book-data/${clickedBookId}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching book:", err));
  }, [clickedBookId]);




  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/Book-data/${clickedBookId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Book updated successfully!");
          navigate("/my-books");
          alert("Failed to update book.");
        }
      })
      .catch((err) => console.error("Error updating book:", err));
  };

  if (loading) return <p>Loading book data...</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
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
            className="w-full border px-3 py-2 rounded"
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
            className="w-full border px-3 py-2 rounded"
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
            className="w-full border px-3 py-2 rounded"
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
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
