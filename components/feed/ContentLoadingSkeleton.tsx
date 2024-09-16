// components/Feed/ContentLoadingSkeleton.tsx
import React from 'react';

const ContentLoadingSkeleton: React.FC = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="bg-gray-300 rounded-lg shadow-md p-4 mb-4">
        <div className="h-8 w-2/3 bg-gray-400 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-400 rounded mt-2"></div>
        <div className="h-16 w-full bg-gray-400 rounded mt-4"></div>
      </div>
      <div className="bg-gray-300 rounded-lg shadow-md p-4 mb-4">
        <div className="h-8 w-2/3 bg-gray-400 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-400 rounded mt-2"></div>
        <div className="h-16 w-full bg-gray-400 rounded mt-4"></div>
      </div>
    </div>
  );
};

export default ContentLoadingSkeleton;
