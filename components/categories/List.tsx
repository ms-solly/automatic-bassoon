import React from 'react';

const categories = ['Cooking', 'Health', 'Lifestyle', 'Fitness', 'Sustainability'];

const CategoriesList: React.FC = () => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-dark-gray mb-3">Categories</h2>
      <ul className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <li key={category} className="bg-soft-green hover:shadow-md  shadow-neon-pink rounded-full px-4 py-2 text-center text-dark-gray shadow-md hover:bg-neon-pink transition duration-200">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
