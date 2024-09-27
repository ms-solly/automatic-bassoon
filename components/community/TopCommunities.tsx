import React from 'react';
import CommunityCard from '../ui/special/cards/CommunityCard';

const sampleCommunities = [
  { id: 1, name: 'Vegan Cooking Club', members: 120, category: 'Cooking', imageUrl: '/profile.jpg' },
  { id: 2, name: 'Plant-Based Nutrition', members: 95, category: 'Health', imageUrl: '/profile.jpg' },
  { id: 3, name: 'Vegan Lifestyle Advocates', members: 75, category: 'Lifestyle', imageUrl: '/profile.jpg' },
];

const TopCommunities: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-dark-gray dark:text-light-gray">Top Communities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleCommunities.map((community) => (
          <CommunityCard key={community.id} community={community} />
        ))}
      </div>
    </div>
  );
};

export default TopCommunities;
