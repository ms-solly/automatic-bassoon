"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';


const CreateCommunityModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [communityName, setCommunityName] = useState('');

  const handleCreateCommunity = () => {
    console.log('Community Created:', communityName);
    setCommunityName('');
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)} className="bg-neon-blue text-white">Create Community</Button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-dark-gray p-5 rounded-lg shadow-lg w-96 transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4 text-dark-gray dark:text-light-gray">Create a New Community</h2>
            <input
              type="text"
              value={communityName}
              onChange={(e) => setCommunityName(e.target.value)}
              placeholder="Community Name"
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md mb-4 bg-light-gray dark:bg-dark-gray text-dark-gray dark:text-light-gray"
            />
            <div className="flex justify-end space-x-2">
              <Button onClick={() => setIsOpen(false)} className="bg-gray-400 text-white">Cancel</Button>
              <Button onClick={handleCreateCommunity} className="bg-neon-pink text-white">Create</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCommunityModal;
