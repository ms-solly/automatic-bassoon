"use client"
import React, { useState } from 'react';
import CreateCommunityModal from '@/components/messages/modals/CreateCommunity';
import CommunityList from '@/components/categories/List';
import SearchFilterBar from '@/components/community/Search';

const CommunityPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold neon-text">Communities</h1>
        <button 
          onClick={openModal}
          className="px-6 py-3 neon-button rounded-lg"
        >
          Create New Community
        </button>
      </div>

      <SearchFilterBar />

      <CommunityList type="top" title="Top Communities" />
      <CommunityList type="category" title="Communities by Category" />

      <CreateCommunityModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default CommunityPage;
