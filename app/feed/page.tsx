import React from 'react';
import PostCard from '@/components/ui/special/cards/PostCard';
import Story from '@/components/feed/Story';
import PersonalizedRecommendations from '@/components/feed/Recommendation';
import QuickInteractionButtons from '@/components/feed/QuickButtons';
import FloatingActionButton from '@/components/feed/FloatingActionBtn';
import EngagingFooter from '@/components/feed/Footer';

const Feed: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Story />
      <PersonalizedRecommendations />
      <div className="space-y-6 p-4">
        <PostCard author={'me'} content={'utyjtuyt'} />
        <PostCard author={'me'} content={'utyjtuyt'} />
        <PostCard author={'me'} content={'utyjtuyt'} />

        
      </div>
      <QuickInteractionButtons />
      <FloatingActionButton />
      <EngagingFooter />
    </div>
  );
};

export default Feed;
