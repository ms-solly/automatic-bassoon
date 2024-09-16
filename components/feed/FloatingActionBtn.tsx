import React from 'react';

const FloatingActionButton: React.FC = () => {
  return (
    <button className="fixed bottom-10 right-10 bg-neon-pink hover:bg-neon-green text-white p-4 rounded-full shadow-lg hover:shadow-neon-pink transition-all hover:scale-110">
      ➕
    </button>
  );
};

export default FloatingActionButton;
