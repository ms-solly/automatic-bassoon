// components/Feed/CommunityHighlights.tsx
import React from 'react';

const CommunityHighlights: React.FC = () => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Community Highlights</h2>
      <div className="space-y-2">
        <p className="text-gray-800">Posts Today: 50</p>
        <p className="text-gray-800">New Users: 10</p>
        <p className="text-gray-800">Active Users: 100</p>
      </div>
    </div>
  );
};

export default CommunityHighlights;
