import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from "../../Context/AuthContext";

const UsersReviewForm = () => {
  const { user, loading } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    rating: 5,
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("You must log in to submit feedback!");
      return;
    }

    const reviewData = {
      userEmail: user.email,
      userName: user.displayName,
      image: user.photoURL,
      rating: formData.rating,
      summary: formData.comment,
    };

    fetch("https://the-book-heaven-server-1.onrender.com/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Thank you for your feedback!");
        setFormData({ ...formData, comment: "", rating: 5 });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to submit feedback. Try again later.");
      });
  };

  if (loading) return null; // wait for Firebase to check auth

  return (
    <div className="flex justify-center items-center w-full my-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-4/5 shadow-md rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Give Us Your Feedback
        </h2>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Your Feedback</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Tell us your experience..."
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Rating</label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
            <option value={4}>⭐⭐⭐⭐ (4)</option>
            <option value={3}>⭐⭐⭐ (3)</option>
            <option value={2}>⭐⭐ (2)</option>
            <option value={1}>⭐ (1)</option>
          </select>
        </div>

        {user ? (
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Submit Feedback
          </button>
        ) : (
          <p className="text-center text-red-500 font-semibold">
            You must log in to submit feedback.
          </p>
        )}
      </form>
    </div>
  );
};

export default UsersReviewForm;
