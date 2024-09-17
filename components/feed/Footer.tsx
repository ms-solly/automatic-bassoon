import React from 'react';

const EngagingFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white py-6 text-center mt-5">
      <p>"The future is vegan, and it's bright!" 🌱</p>
      <div className="mt-4">
        <a href="#" className="text-neon-pink hover:text-pink-500">Vegan Resources</a>
        <span className="mx-2">|</span>
        <a href="#" className="text-neon-blue hover:text-blue-500">Vegan Charities</a>
      </div>
    </footer>
  );
};

export default EngagingFooter;
