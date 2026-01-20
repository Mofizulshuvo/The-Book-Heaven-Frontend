import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoStar, IoStarOutline, IoEye, IoHeart, IoHeartOutline } from 'react-icons/io5';
import { Card, Button } from '../ui';

const BookCard = ({ 
  data, 
  showActions = true, 
  onFavorite, 
  isFavorite = false,
  className = '' 
}) => {
  const { _id, title, author, genre, rating, coverImage, summary, userName } = data;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <IoStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        );
      } else {
        stars.push(
          <IoStarOutline key={i} className="w-4 h-4 text-neutral-300 dark:text-neutral-600" />
        );
      }
    }

    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className={`group ${className}`}
    >
      <Card hover className="h-[500px] overflow-hidden flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
              <Link to={`/BookDetails/${_id}`}>
                <Button
                  variant="primary"
                  size="sm"
                  icon={<IoEye className="w-4 h-4" />}
                >
                  View Details
                </Button>
              </Link>
              {showActions && onFavorite && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    onFavorite(_id);
                  }}
                  icon={isFavorite ? 
                    <IoHeart className="w-4 h-4 text-red-500" /> : 
                    <IoHeartOutline className="w-4 h-4" />
                  }
                  className="bg-white/90 hover:bg-white"
                />
              )}
            </div>
          </div>

          {/* Rating Badge */}
          {rating && (
            <div className="absolute top-3 right-3 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
              <IoStar className="w-3 h-3 text-yellow-400 fill-current" />
              <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                {rating}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <Card.Body padding="md" className="flex-1 flex flex-col">
          <div className="space-y-3 flex-1">
            {/* Title */}
            <h3 className="font-semibold text-lg text-neutral-900 dark:text-white line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors min-h-[3.5rem]">
              {title}
            </h3>

            {/* Author */}
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              by <span className="font-medium">{author}</span>
            </p>

            {/* Genre */}
            {genre && (
              <span className="inline-block px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full">
                {genre}
              </span>
            )}

            {/* Rating Stars */}
            {rating && (
              <div className="flex items-center space-x-1">
                {renderStars(rating)}
                <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-1">
                  ({rating})
                </span>
              </div>
            )}

            {/* Summary */}
            {summary && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 min-h-[2.5rem]">
                {summary}
              </p>
            )}

            {/* Added by */}
            {userName && (
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-auto">
                Added by {userName}
              </p>
            )}
          </div>
        </Card.Body>

        {/* Footer Actions */}
        {showActions && (
          <Card.Footer>
            <Link to={`/BookDetails/${_id}`} className="w-full">
              <Button variant="outline" size="sm" fullWidth>
                View Details
              </Button>
            </Link>
          </Card.Footer>
        )}
      </Card>
    </motion.div>
  );
};

export default BookCard;
