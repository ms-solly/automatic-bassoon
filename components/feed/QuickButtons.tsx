import React from 'react';

const QuickInteractionButtons: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center space-x-4 py-3 bg-background dark:bg-gray-800 shadow-inner">
      <button className="bg-neon-green hover:shadow-neon-green/50 hover:scale-105 transition-transform text-white py-2 px-4 rounded-full">Post</button>
      <button className="bg-neon-yellow hover:shadow-neon-yellow/50 hover:scale-105 transition-transform text-white py-2 px-4 rounded-full">Upload Recipe</button>
      <button className="bg-neon-pink hover:shadow-neon-pink/50 hover:scale-105 transition-transform text-white py-2 px-4 rounded-full">Go Live</button>
    </div>
  );
};

export default QuickInteractionButtons;
