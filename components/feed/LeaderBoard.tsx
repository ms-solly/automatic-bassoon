// components/Feed/LeaderboardAchievements.tsx
import React from 'react';

const LeaderboardAchievements: React.FC = () => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Leaderboard & Achievements</h2>
      <div className="space-y-2">
        <p className="text-gray-800">Most Liked Post: Post Title</p>
        <p className="text-gray-800">Top Commenter: Username</p>
        <p className="text-gray-800">Active User: Username</p>
      </div>
    </div>
  );
};

export default LeaderboardAchievements;
