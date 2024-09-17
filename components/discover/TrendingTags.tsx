"use client";
import React from 'react';

const TrendingTags = () => {
  const tags = ['#veganlife', '#plantbased', '#eco'];

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-center">Trending Tags</h2>
      <div className="flex justify-center space-x-4 mt-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-full text-lg
                       hover:bg-neon-blue dark:hover:bg-neon-green cursor-pointer transition-all">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrendingTags;
