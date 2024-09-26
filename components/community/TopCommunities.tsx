import React from 'react';
import CommunityCard from '../ui/special/cards/CommunityCard';

interface Community {
  id: number;
  name: string;
  members: number;
  category: string;
}

interface TopCommunitiesProps {
  communities: Community[];
}

const TopCommunities: React.FC<TopCommunitiesProps> = ({ communities }) => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold text-neon-pink mb-6">Top Communities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.length > 0 ? (
          communities.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))
        ) : (
          <p className="text-gray-400">No top communities available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default TopCommunities;
