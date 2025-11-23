import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const AddBooks = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      title: form.title.value,
      author: form.author.value,
      genre: form.genre.value,
      rating: form.rating.value,
      summary: form.summary.value,
      coverImage: form.coverImage.value,
      userEmail: user.email,
      userName: user.displayName,
    };

    fetch("https://the-book-heaven-server-1.onrender.com/Book-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    toast.success("Book added successfully!");
    form.reset();
  };

  return (
    <div className="flex justify-center px-4 sm:px-6 md:px-10 py-10">
      <Helmet>
        <title>The Book Heaven | Add Books</title>
      </Helmet> 
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          Add New Book
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base md:text-lg focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base md:text-lg focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base md:text-lg focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating (0-5)"
            min="0"
            max="5"
            step="0.1"
            className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base md:text-lg focus:ring-2 focus:ring-blue-300"
            required
          />
          <textarea
            name="summary"
            placeholder="Summary"
            rows={4}
            className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base md:text-lg focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            type="text"
            name="coverImage"
            placeholder="Cover Image URL"
            className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base md:text-lg focus:ring-2 focus:ring-blue-300"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#006584] hover:bg-[#004f65] text-white py-2 sm:py-3 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition-colors"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
