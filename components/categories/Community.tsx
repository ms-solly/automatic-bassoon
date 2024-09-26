import React from 'react';
import CommunityCard from '../ui/special/cards/CommunityCard';


interface Community {
  id: number;
  name: string;
  members: number;
  category: string;
}

interface CommunitiesByCategoryProps {
  communities: Community[];
}

const CommunitiesByCategory: React.FC<CommunitiesByCategoryProps> = ({ communities }) => {
  const categories = Array.from(new Set(communities.map((community) => community.category)));

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold text-neon-yellow mb-6">Communities by Category</h2>
      {categories.map((category) => (
        <div key={category}>
          <h3 className="text-xl font-semibold text-neon-green mb-4">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities
              .filter((community) => community.category === category)
              .map((community) => (
                <CommunityCard key={community.id} community={community} />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default CommunitiesByCategory;
