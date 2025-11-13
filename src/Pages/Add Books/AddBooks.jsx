import React, { useState, useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { toast } from "react-toastify";

const AddBooks = () => {
  const { user } = useContext(AuthContext);

  // //   const [formData, setFormData] = useState({
  // //     title: "",
  // //     author: "",
  // //     genre: "",
  // //     rating: "",
  // //     summary: "",
  // //     coverImage: "",
  // //     userEmail: user?.email || "",
  // //     userName: user?.displayName || "",
  // //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const res = await fetch("http://localhost:5000/Book-data", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       });

  //       if (res.ok) {
  //         toast.success("Book added successfully!");
  //         setFormData({
  //           title: "",
  //           author: "",
  //           genre: "",
  //           rating: "",
  //           summary: "",
  //           coverImage: "",
  //           userEmail: user?.email || "",
  //           userName: user?.displayName || "",
  //         });
  //       } else {
  //         toast.error("Failed to add book.");
  //       }
  //     } catch (err) {
  //       console.error(err);
  //       toast.error("Error occurred while adding the book.");
  //     }
  //   };

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

    fetch('http://localhost:5000/Book-data', {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }).then(res=>res.json()).then(data=>{
        console.log(data);
    }).catch(error=>{
        console.log(error)
    })

    console.log(formData);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          //   value={formData.title}
          //   onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          //   value={formData.author}
          //   onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          //   value={formData.genre}
          //   onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (0-5)"
          min="0"
          max="5"
          step="0.1"
          //   value={formData.rating}
          //   onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
        <textarea
          name="summary"
          placeholder="Summary"
          //   value={formData.summary}
          //   onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
          rows={4}
          required
        />
        <input
          type="text"
          name="coverImage"
          placeholder="Cover Image URL"
          //   value={formData.coverImage}
          //   onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
          required
        />

        <input
          type="email"
          name="userEmail"
          //   value={formData.userEmail}
          readOnly
          className="w-full border rounded-lg px-3 py-2 bg-gray-100"
        />
        <input
          type="text"
          name="userName"
          //   value={formData.userName}
          readOnly
          className="w-full border rounded-lg px-3 py-2 bg-gray-100"
        />

        <button
          type="submit"
          className="w-full bg-[#006584] text-white py-2 rounded-lg hover:bg-[#004f65] transition-colors"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
