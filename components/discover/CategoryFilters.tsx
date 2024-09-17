import React from 'react';

const categories = ['All', 'Recipes', 'Fitness', 'Lifestyle', 'Thoughts'];

const CategoryFilters = () => {
  return (
    <div className="flex justify-center gap-4 mt-8">
      {categories.map((category) => (
        <button
          key={category}
          className="px-4 py-2 bg-gray-800 text-white rounded-full shadow-neon-yellow dark:bg-gray-900 hover:shadow-neon-pink transition-all"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
