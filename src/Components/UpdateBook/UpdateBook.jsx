import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { toast } from "react-toastify";

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading } = useContext(AuthContext);

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    rating: "",
    coverImage: "",
  });

  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (loading) return;
    const fetchBook = async () => {
      try {
        const res = await fetch(
          `https://the-book-heaven-server-1.onrender.com/Book-data/${id}`
        );
        const data = await res.json();
        setBook(data);
        setPreviewImage(data.coverImage);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch book data");
      }
    };
    fetchBook();
  }, [id, loading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
    if (name === "coverImage") setPreviewImage(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { _id, ...updateData } = book;
      const res = await fetch(
        `https://the-book-heaven-server-1.onrender.com/Book-data/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateData),
        }
      );
      const data = await res.json();
      if (data.success || data.modifiedCount === 0) {
        toast.success("Book updated successfully!");
        navigate("/MyBooks");
      } else {
        toast.error(data.message || "Failed to update book");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error updating book");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 md:px-8 py-10 bg-gray-50">
      <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 bg-white rounded-lg shadow-md p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
          Update Book
        </h2>

        {previewImage && (
          <div className="flex justify-center mb-6">
            <img
              src={previewImage}
              alt="Book Cover"
              className="w-32 sm:w-40 md:w-48 h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow"
            />
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {["title", "author", "genre", "rating", "coverImage"].map(
            (field) => (
              <div key={field}>
                <label className="block mb-1 font-semibold">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "rating" ? "number" : "text"}
                  name={field}
                  value={book[field] || ""}
                  onChange={handleChange}
                  min={field === "rating" ? 0 : undefined}
                  max={field === "rating" ? 5 : undefined}
                  step={field === "rating" ? 0.1 : undefined}
                  placeholder={`Enter ${field}`}
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
            )
          )}

          <div className="text-center mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded hover:bg-blue-700 transition duration-200 text-sm sm:text-base md:text-lg">
              Update Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
