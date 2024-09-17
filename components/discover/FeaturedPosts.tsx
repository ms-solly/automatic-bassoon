"use client";
import React from 'react';

const FeaturedPostCarousel = () => {
  const featuredPosts = ['Post 1', 'Post 2', 'Post 3'];

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-center">Featured Posts</h2>
      <div className="relative mt-4">
        <div className="overflow-x-scroll flex space-x-4 p-4">
          {featuredPosts.map((post, index) => (
            <div
              key={index}
              className="min-w-[300px] h-60 bg-gray-200 dark:bg-gray-600 rounded-lg p-4
                         hover:bg-neon-pink dark:hover:bg-neon-blue cursor-pointer shadow-lg 
                         transition-all">
              <h3 className="text-lg font-bold">{post}</h3>
              <p className="mt-2">Description of {post}...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostCarousel;
