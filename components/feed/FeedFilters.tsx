// components/Feed/FeedFilters.tsx
import React from 'react';

const FeedFilters: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 mb-4">
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">All</button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Recipes</button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Thoughts</button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Fitness</button>
    </div>
  );
};

export default FeedFilters;
