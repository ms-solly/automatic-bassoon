import React from 'react';

const PersonalizedRecommendations: React.FC = () => {
  return (
    <div className="p-6 bg-background rounded-xl shadow-md dark:bg-gray-800">
      <h3 className="font-bold text-lg text-foreground dark:text-white">Suggested For You</h3>
      <div className="flex flex-col space-y-6 mt-6">
        <div className="bg-card p-4 rounded-lg shadow hover:shadow-neon-blue dark:hover:shadow-neon-pink transition-all">
          <h4 className="text-foreground font-medium dark:text-white">Vegan Tacos 🌮</h4>
          <p className="text-muted-foreground dark:text-gray-400 text-sm">A recipe you'll love!</p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow hover:shadow-neon-green dark:hover:shadow-neon-blue transition-all">
          <h4 className="text-foreground font-medium dark:text-white">Plant-Based Workout</h4>
          <p className="text-muted-foreground dark:text-gray-400 text-sm">Stay fit with these moves!</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;
