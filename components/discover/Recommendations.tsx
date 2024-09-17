import React from 'react';

const posts = [
  { title: 'Vegan Smoothie', description: 'A refreshing and nutritious green smoothie!' },
  { title: 'Vegan Pizza', description: 'The best homemade plant-based pizza recipe.' },
];

const PersonalizedRecommendations = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {posts.map((post, index) => (
        <div
          key={index}
          className="p-6 bg-white rounded-xl shadow-neu dark:bg-gray-800 hover:shadow-neon-blue hover:scale-105 transition-all"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{post.title}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{post.description}</p>
          <button className="mt-4 px-6 py-3 bg-neon-pink text-white rounded-lg hover:shadow-neon-green transition-all">
            View Post
          </button>
        </div>
      ))}
    </div>
  );
};

export default PersonalizedRecommendations;
