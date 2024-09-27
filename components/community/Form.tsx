import React, { useState } from 'react';

const CommunityForm: React.FC<{ onSubmit: (name: string) => void }> = ({ onSubmit }) => {
  const [communityName, setCommunityName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(communityName);
    setCommunityName('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        value={communityName}
        onChange={(e) => setCommunityName(e.target.value)}
        placeholder="Enter Community Name"
        className="p-3 border border-gray-300 dark:border-gray-700 rounded-md mb-4 bg-light-gray dark:bg-dark-gray text-dark-gray dark:text-light-gray"
      />
      <button type="submit" className="bg-neon-pink text-white py-2 rounded-md hover:bg-neon-blue transition duration-200">
        Create Community
      </button>
    </form>
  );
};

export default CommunityForm;
