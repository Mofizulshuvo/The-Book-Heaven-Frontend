import React from 'react';

const Skeleton = ({ 
  width = 'w-full', 
  height = 'h-4', 
  rounded = 'rounded',
  className = '',
  variant = 'default',
  lines = 1,
  ...props 
}) => {
  const baseClasses = 'animate-pulse bg-gray-200 dark:bg-gray-700';
  const skeletonClasses = `${baseClasses} ${width} ${height} ${rounded} ${className}`;

  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2" {...props}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${skeletonClasses} ${index === lines - 1 ? 'w-3/4' : ''}`}
          />
        ))}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`p-4 border border-gray-200 dark:border-gray-700 rounded-xl ${className}`} {...props}>
        <div className="animate-pulse">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-48 mb-4"></div>
          <div className="space-y-2">
            <div className="bg-gray-200 dark:bg-gray-700 rounded h-4 w-3/4"></div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded h-4 w-1/2"></div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded h-4 w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={skeletonClasses} {...props} />
  );
};

Skeleton.BookCard = ({ className = '' }) => (
  <div className={`border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden  ${className}`}>
    <div className="bg-gray-200 dark:bg-gray-700 animate-pulse w-full h-64"></div>
    <div className="p-4 space-y-3">
      <div className="bg-gray-200 dark:bg-gray-700 animate-pulse rounded h-5 w-3/4"></div>
      <div className="bg-gray-200 dark:bg-gray-700 animate-pulse rounded h-4 w-1/2"></div>
      <div className="bg-gray-200 dark:bg-gray-700 animate-pulse rounded h-4 w-full"></div>
      <div className="flex justify-between items-center pt-2">
        <div className="bg-gray-200 dark:bg-gray-700 animate-pulse rounded h-4 w-16"></div>
        <div className="bg-gray-200 dark:bg-gray-700 animate-pulse rounded h-8 w-20"></div>
      </div>
    </div>
  </div>
);

export default Skeleton;