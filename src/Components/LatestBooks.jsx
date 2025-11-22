import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LatestBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchLatestBooks = async () => {
      try {
        const res = await fetch(
          "https://the-book-heaven-server-1.onrender.com/Book-latest"
        );
        const data = await res.json();
        setBooks(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchLatestBooks();
  }, []);

  if (!books.length)
    return <p className="text-center mt-10 text-lg">No books available</p>;

  return (
    <div className="px-4 sm:px-6 md:px-10 py-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Latest Books
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 justify-items-center">
        {books.map((book) => (
          <Link key={book._id} to={`/BookDetails/${book._id}`}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -5,
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              className="w-[250px] sm:w-[250px] md:w-[260px] lg:w-[270px] h-[400px]"
            >
              <div className="border rounded-lg shadow-md overflow-hidden cursor-pointer bg-gray-50 flex flex-col h-full">
                <div className="h-[65%] overflow-hidden">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 font-semibold flex-1 flex flex-col justify-between h-[35%]">
                  <h3 className="font-bold text-lg sm:text-lg mb-1 truncate">
                    {book.title}
                  </h3>
                  <p className="text-[#056a89] text-sm sm:text-base truncate">
                    Author: {book.author}
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestBooks;
