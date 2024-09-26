import React from 'react';

interface Community {
  id: number;
  name: string;
  members: number;
  category: string;
}

interface CommunityCardProps {
  community: Community;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ community }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border-2 border-neon-blue shadow-lg hover:shadow-neon-pink transition-transform transform hover:scale-105">
      <h3 className="text-2xl font-bold text-neon-green mb-2">{community.name}</h3>
      <p className="text-gray-400 mb-4">{community.members} members</p>
      <span className="text-sm italic text-gray-500 block mb-6">{community.category}</span>
      
      <button className="w-full px-4 py-2 bg-black text-neon-yellow rounded-lg border-2 border-neon-yellow hover:bg-neon-yellow hover:text-black transition-all duration-300">
        Join Community
      </button>
    </div>
  );
};

export default CommunityCard;
