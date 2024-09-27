import React from 'react';
import TopCommunities from '@/components/community/TopCommunities';
import Search from '@/components/community/Search';
import CategoriesList from '@/components/categories/List';
import CreateCommunityModal from '@/components/messages/modals/CreateCommunity';

const CommunitiesPage: React.FC = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-light-green to-light-blue dark:from-dark-blue dark:to-dark-green transition-all duration-300">
      <h1 className="text-5xl font-bold mb-6 text-dark-gray dark:text-light-gray text-center">Explore Communities</h1>
      
      <Search />
      <CategoriesList />

      <div className="my-8">
        <TopCommunities />
      </div>
      <CreateCommunityModal />
    </div>
  );
};

export default CommunitiesPage;
