import React from 'react';

const leaders = [
  { name: '@vegan_master', points: '2000' },
  { name: '@eco_warrior', points: '1800' },
];

const Leaderboard = () => {
  return (
    <div className="mt-8 p-6 bg-gray-200 rounded-xl shadow-neu dark:bg-gray-900 hover:shadow-neon-blue transition-all">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Leaderboard</h2>
      <ul className="mt-4 space-y-2">
        {leaders.map((leader, index) => (
          <li key={index} className="text-lg text-gray-800 dark:text-white flex justify-between">
            <span>{leader.name}</span>
            <span>{leader.points} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
