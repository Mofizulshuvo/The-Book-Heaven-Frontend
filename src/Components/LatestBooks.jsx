import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BookCard from "./BookCard/BookCard";
import { Skeleton, Button } from "./ui";
import { IoArrowForward, IoRefresh } from "react-icons/io5";

const LatestBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLatestBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        "https://the-book-heaven-server-1.onrender.com/Book-latest"
      );
      
      if (!res.ok) {
        throw new Error('Failed to fetch books');
      }
      
      const data = await res.json();
      setBooks(data.data || []);
    } catch (err) {
      console.error(err);
      setError('Failed to load books. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestBooks();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  if (error) {
    return (
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
              Latest Books
            </h2>
            <div className="bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800 rounded-xl p-6 max-w-md mx-auto">
              <p className="text-error-600 dark:text-error-400 mb-4">{error}</p>
              <Button
                variant="outline"
                onClick={fetchLatestBooks}
                icon={<IoRefresh className="w-4 h-4" />}
              >
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white dark:bg-neutral-900 ">
      <div className="px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Latest Books
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Discover the newest additions to our collection. Fresh stories and knowledge await you.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton.BookCard key={index} />
            ))}
          </div>
        )}

        {/* Books Grid */}
        {!loading && books.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
          >
            {books.map((book) => (
              <motion.div key={book._id} variants={itemVariants}>
                <BookCard data={book} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && books.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-8 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                No Books Available
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Be the first to add a book to our collection!
              </p>
              <Link to="/AddBooks">
                <Button variant="primary">
                  Add First Book
                </Button>
              </Link>
            </div>
          </motion.div>
        )}

        {/* View All Button */}
        {!loading && books.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/AllBooks">
              <Button
                variant="outline"
                size="lg"
                icon={<IoArrowForward className="w-5 h-5" />}
                iconPosition="right"
              >
                View All Books
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LatestBooks;
