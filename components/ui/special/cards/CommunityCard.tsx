import React from 'react';
import Image from 'next/image';

interface Community {
  id: number;
  name: string;
  members: number;
  category: string;
  imageUrl?: string;
}

interface CommunityCardProps {
  community: Community;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ community }) => {
  return (
    <div className="relative  bg-white dark:bg-dark-gray shadow-md rounded-lg transition-all duration-300  hover:border-neon-pink">
      {community.imageUrl && (
        <Image
          src={community.imageUrl}
          alt={community.name}
          width={300}
          height={200}
          className="rounded-t-lg object-cover w-full h-40"
        />
      )}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-dark-gray dark:text-light-gray text-gray-800">{community.name}</h3>
        <p className="text-sm text-muted-black dark:text-gray-300">{community.members} members</p>
        <p className="text-xs italic text-gray-500 dark:text-gray-400">{community.category}</p>
      </div>
      <div className="flex justify-center mb-4">
        <button className="text-md bg-neon-blue text-white py-2 px-4 rounded-md hover:bg-neon-pink transition duration-200">
          Join Community
        </button>
      </div>
    </div>
  );
};

export default CommunityCard;
