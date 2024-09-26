import React from 'react';
import CommunityCard from '../ui/special/cards/CommunityCard';

interface CommunityListProps {
  type: 'top' | 'category';
  title: string;
}

interface Community {
  id: number;
  name: string;
  members: number;
  category: string;
}

const CommunityList: React.FC<CommunityListProps> = ({ type, title }) => {
  // Placeholder data for communities
  const communities: Community[] = [
    { id: 1, name: 'Vegan Recipes', members: 1200, category: 'Recipes' },
    { id: 2, name: 'Animal Rights Advocates', members: 800, category: 'Animal Rights' },
    // More community data can be added dynamically
  ];

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-4 neon-text">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map((community) => (
          <CommunityCard key={community.id} community={community} />
        ))}
      </div>
    </div>
  );
};

export default CommunityList;
