import React from 'react';

const highlights = [
  { title: 'Vegan Community Growth', description: 'Over 10,000 new members joined this week!' },
  { title: 'Top Vegan Chef', description: 'Congrats to @veganmaster for 1,000 leafs on their post!' },
];

const CommunityHighlights = () => {
  return (
    <div className="mt-8 p-6 bg-gray-200 rounded-xl shadow-neu dark:bg-gray-900 hover:shadow-neon-yellow transition-all">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Community Highlights</h2>
      <div className="mt-4">
        {highlights.map((highlight, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{highlight.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityHighlights;
