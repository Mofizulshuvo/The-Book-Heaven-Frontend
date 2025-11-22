import React, { useEffect, useState } from "react";

const AboutSection = () => {
  const [featuredBook, setFeaturedBook] = useState(null);

  useEffect(() => {
    const fetchFeaturedBook = async () => {
      try {
        const res = await fetch(
          "https://the-book-heaven-server-1.onrender.com/Book-latest"
        );
        const data = await res.json();
        if (data.data.length > 0) setFeaturedBook(data.data[0]);
      } catch (err) {
        console.error("Failed to fetch featured book", err);
      }
    };

    fetchFeaturedBook();
  }, []);

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
            About The Book Haven
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Welcome to The Book Haven – a place for book lovers to explore, read, and
            share their favorite stories. Our goal is to bring the joy of reading to everyone
            and make book discovery easy and enjoyable.
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            Browse our collection, add your own books, and stay updated with the latest
            additions. At The Book Haven, every book has a story, and every reader is
            part of our community.
          </p>
        </div>

        {featuredBook && (
          <div className="md:w-1/2 w-full max-w-sm md:max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={featuredBook.coverImage}
              alt={featuredBook.title}
              className="w-full h-64 sm:h-72 md:h-80 object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
